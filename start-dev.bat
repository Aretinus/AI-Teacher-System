@echo off
setlocal
cd /d "%~dp0"
title AI Teacher System - one-click start

set BACKEND_DIR=%~dp003-Backend
set FRONTEND_DIR=%~dp004-Frontend
set RUNTIME_DIR=%BACKEND_DIR%\node_modules\@opencangjie\skills\dist\runtime\win-x64\release\bin
set RUNTIME_ENV=%RUNTIME_DIR%\.env
set LOG_DIR=%~dp0logs
if not exist "%LOG_DIR%" mkdir "%LOG_DIR%"

rem ---------- 0. Ensure runtime .env has DB config (missing config => 2-min freeze) ----------
powershell -NoProfile -Command "$f='%RUNTIME_ENV%';$t=[IO.File]::ReadAllText($f);if($t -notmatch 'DATABASE_URL='){$nl=[char]10;$add='DATABASE_URL=postgresql://postgres:uctoo123@127.0.0.1:5432/uctoo'+$nl+'orm_connectionUrl=postgresql://postgres:uctoo123@127.0.0.1:5432/uctoo'+$nl+'opengauss_orm_connectionUrl=postgresql://postgres:uctoo123@127.0.0.1:5432/uctoo';[IO.File]::WriteAllText($f,$t+$nl+$add,(New-Object System.Text.UTF8Encoding($false)))}"

rem ---------- 1. Kill stale processes + clean vite cache ----------
echo [1/4] cleaning stale processes...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr /C:":8080" /C:":3000" /C:":5173" ^| findstr "LISTENING"') do (
  taskkill /F /PID %%a >nul 2>&1
)
taskkill /F /IM agentskills-runtime.exe >nul 2>&1
timeout /t 2 /nobreak >nul
if exist "%FRONTEND_DIR%\node_modules\.vite" rmdir /s /q "%FRONTEND_DIR%\node_modules\.vite"

rem ---------- 2. Start services (fully hidden via PowerShell, logs to files) ----------
echo [2/4] starting runtime...
powershell -NoProfile -Command "Start-Process -FilePath 'cmd.exe' -ArgumentList '/c cd /d %RUNTIME_DIR% && agentskills-runtime.exe > "%LOG_DIR%\runtime.log" 2>&1' -WindowStyle Hidden"

echo [3/4] starting backend...
powershell -NoProfile -Command "Start-Process -FilePath 'cmd.exe' -ArgumentList '/c cd /d %BACKEND_DIR% && node src/index.js > "%LOG_DIR%\backend.log" 2>&1' -WindowStyle Hidden"

echo [4/4] starting frontend...
powershell -NoProfile -Command "Start-Process -FilePath 'cmd.exe' -ArgumentList '/c cd /d %FRONTEND_DIR% && npm run dev:h5 > "%LOG_DIR%\vite.log" 2>&1' -WindowStyle Hidden"

echo.
echo Waiting for services (runtime/backend max 60s, frontend max 120s)...

powershell -NoProfile -Command "$deadline=(Get-Date).AddSeconds(60);while((Get-Date) -lt $deadline){try{$r=Invoke-WebRequest -UseBasicParsing -Uri 'http://127.0.0.1:8080/api/v1/health' -TimeoutSec 2;if($r.StatusCode -eq 200){Write-Output 'runtime OK';break}}catch{};Start-Sleep -Seconds 2};try{$r=Invoke-WebRequest -UseBasicParsing -Uri 'http://127.0.0.1:3000/api/subjects' -TimeoutSec 3;Write-Output 'backend OK'}catch{Write-Output 'backend FAIL'}"
powershell -NoProfile -Command "$deadline=(Get-Date).AddSeconds(120);$ok=$false;while((Get-Date) -lt $deadline){try{$r=Invoke-WebRequest -UseBasicParsing -Uri 'http://127.0.0.1:5173' -TimeoutSec 2;if($r.StatusCode -lt 500){$ok=$true;break}}catch{};Start-Sleep -Seconds 2};if($ok){Start-Process 'http://127.0.0.1:5173';Write-Output 'frontend OK - browser opened'}else{Write-Output 'frontend FAIL (see logs\vite.log)'}"

echo.
echo All services are running in the background.
echo Logs: logs\backend.log / logs\vite.log / logs\runtime.log
echo This window will close automatically.
timeout /t 5 /nobreak >nul
exit