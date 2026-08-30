@echo off
setlocal
cd /d "%~dp0"
title AI Teacher System - one-click start

set BACKEND_DIR=%~dp003-Backend
set FRONTEND_DIR=%~dp004-Frontend
set RUNTIME_DIR=%BACKEND_DIR%\node_modules\@opencangjie\skills\dist\runtime\win-x64\release\bin
set RUNTIME_ENV=%RUNTIME_DIR%\.env
set LOG_DIR=%~dp0logs
set DLL_BACKUP=%~dp006-Tools\runtime-dlls
if not exist "%LOG_DIR%" mkdir "%LOG_DIR%"

rem ---------- 0a. Restore runtime DLLs if lost (node_modules reinstall wipes them) ----------
rem GCC runtime: libgcc/libstdc++/libwinpthread (Git MinGW64) + libssp (CompilerSupportLibraries)
rem OpenSSL: libcrypto-3-x64/libssl-3-x64 (from PostgreSQL bin) - required for ORM/DB init,
rem          without them ORM init fails and AI chat routes are never registered (chat 404)
for %%d in (libgcc_s_seh-1.dll libstdc++-6.dll libwinpthread-1.dll libssp-0.dll libcrypto-3-x64.dll libssl-3-x64.dll) do (
  if not exist "%RUNTIME_DIR%\%%d" (
    if exist "%DLL_BACKUP%\%%d" (
      copy /y "%DLL_BACKUP%\%%d" "%RUNTIME_DIR%\%%d" >nul
      echo [restore] %%d -^> runtime bin
    ) else (
      echo [WARN] missing %%d and no backup at %DLL_BACKUP% - runtime may fail to start
    )
  )
)

rem ---------- 0b. Load local private config (gitignored) ----------
rem local-config.bat line: set DB_PASSWORD=yourpassword
set "DB_PASSWORD="
if exist "%~dp0local-config.bat" call "%~dp0local-config.bat"

rem ---------- 0c. Ensure runtime .env has DB config (missing config => 2-min freeze) ----------
if defined DB_PASSWORD (
  powershell -NoProfile -Command "$f='%RUNTIME_ENV%';if(Test-Path $f){$t=[IO.File]::ReadAllText($f);if($t -notmatch '(?m)^DATABASE_URL='){$nl=[char]10;$add='DATABASE_URL=postgresql://postgres:%DB_PASSWORD%@127.0.0.1:5432/uctoo'+$nl+'orm_connectionUrl=postgresql://postgres:%DB_PASSWORD%@127.0.0.1:5432/uctoo'+$nl+'opengauss_orm_connectionUrl=postgresql://postgres:%DB_PASSWORD%@127.0.0.1:5432/uctoo';[IO.File]::WriteAllText($f,$t+$nl+$add,(New-Object System.Text.UTF8Encoding($false)))}}"
) else (
  echo [WARN] local-config.bat missing or DB_PASSWORD not set - skip writing DATABASE_URL
)

rem ---------- 1. Kill stale processes + clean vite cache ----------
echo [1/4] cleaning stale processes...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr /C:":8080" /C:":3000" /C:":5173" ^| findstr "LISTENING"') do (
  taskkill /F /PID %%a >nul 2>&1
)
taskkill /F /IM agentskills-runtime.exe >nul 2>&1
timeout /t 2 /nobreak >nul
if exist "%FRONTEND_DIR%\node_modules\.vite" rmdir /s /q "%FRONTEND_DIR%\node_modules\.vite"

rem ---------- 2. Start services (hidden windows, stdout/stderr to separate log files) ----------
echo [2/4] starting runtime...
powershell -NoProfile -Command "Start-Process -FilePath '%RUNTIME_DIR%\agentskills-runtime.exe' -WorkingDirectory '%RUNTIME_DIR%' -WindowStyle Hidden -RedirectStandardOutput '%LOG_DIR%\runtime.log' -RedirectStandardError '%LOG_DIR%\runtime-err.log'"

echo [3/4] starting backend...
powershell -NoProfile -Command "Start-Process -FilePath 'node' -ArgumentList 'src/index.js' -WorkingDirectory '%BACKEND_DIR%' -WindowStyle Hidden -RedirectStandardOutput '%LOG_DIR%\backend.log' -RedirectStandardError '%LOG_DIR%\backend-err.log'"

echo [4/4] starting frontend...
powershell -NoProfile -Command "Start-Process -FilePath 'npm.cmd' -ArgumentList 'run','dev:h5' -WorkingDirectory '%FRONTEND_DIR%' -WindowStyle Hidden -RedirectStandardOutput '%LOG_DIR%\vite.log' -RedirectStandardError '%LOG_DIR%\vite-err.log'"

echo.
echo Waiting for services (runtime/backend max 60s, frontend max 120s)...

powershell -NoProfile -Command "$deadline=(Get-Date).AddSeconds(60);while((Get-Date) -lt $deadline){try{$r=Invoke-WebRequest -UseBasicParsing -Uri 'http://127.0.0.1:8080/api/v1/health' -TimeoutSec 2;if($r.StatusCode -eq 200){Write-Output 'runtime OK';break}}catch{};Start-Sleep -Seconds 2};try{$r=Invoke-WebRequest -UseBasicParsing -Uri 'http://127.0.0.1:3000/api/subjects' -TimeoutSec 3;Write-Output 'backend OK'}catch{Write-Output 'backend FAIL'}"
powershell -NoProfile -Command "$deadline=(Get-Date).AddSeconds(120);$ok=$false;while((Get-Date) -lt $deadline){try{$r=Invoke-WebRequest -UseBasicParsing -Uri 'http://127.0.0.1:5173' -TimeoutSec 2;if($r.StatusCode -lt 500){$ok=$true;break}}catch{};Start-Sleep -Seconds 2};if($ok){$chrome=@('C:\Program Files\Google\Chrome\Application\chrome.exe','C:\Program Files (x86)\Google\Chrome\Application\chrome.exe')|Where-Object{Test-Path $_}|Select-Object -First 1;if($chrome){Start-Process $chrome -ArgumentList @('--user-data-dir='+$env:TEMP+'\aiteacher-chrome','--proxy-server=http://127.0.0.1:10808','http://127.0.0.1:5173')}else{Start-Process 'http://127.0.0.1:5173'};Write-Output 'frontend OK - Chrome opened (proxy-forced)'}else{Write-Output 'frontend FAIL (see logs\vite.log)'}"

echo.
echo All services are running in the background.
echo Logs: logs\backend.log / logs\vite.log / logs\runtime.log (+ *.err.log)
echo This window will close automatically.
timeout /t 5 /nobreak >nul
exit
