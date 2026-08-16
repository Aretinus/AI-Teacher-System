# CHAPTER IV

DIFFERENTIAL EQUATIONS WITH A
4.1. Liouville's problem
4.2. Formal solutions
4.3. Asymptotic solutions
4.4. Application to Bessel fu
4.5. Transition points
4.6. Airy functions
4.7. Asymptotic solutions val
4.8. Uniforn asymptotic repre
References
INTRODUCTION
It happens frequently that a
the numerical computation of
regarded as the "sum" of the
series of variable terms whos
approximation afforded by the
the independent variable appr
cases the terms of the series
the closer the independent va
later the terms start increas
semi-convergent (Stieltjes),
vergently beginning series (E
the term asymptotic series (P
see later that asymptotic ser
Let us consider an example fi
A) S(x)= 1- l!x+2! x2-3!x3 +
o
is certainly divergent for al
of the series at first decrea
value of S(*0 may be computed
value represent approximately
Euler considers
(x) = xS(x
2 ASYMPTOTIC EXPANSIONS
and
{x) may be obtained as
which vanishes as x = 0, Alte
second kind,
n ! = /
o
and obtain
S(x) = J"~ e-'dt -xf^e'U dt +
= 2 (-1)"
o
K we formally sum under the i
B)
Now,
Jo l+*tdt'
C) f(x) = / dt
1 + xt
is a well-defined function of
of x in the complex x-plane c
closely related to the so-cal
arises: in what sense does th
function C)? To answer this q
and hence
D) f(x) = Sm(x)+Rm{x)
E) SAx)= 2 (-l)"n\xn
INTRODUCTION
is a partial sum of A), and
F) /?(*)=(-*)"
is the remainder.
If Re x > 0, we have |1 + xt\
G) |.(*)|<(m+l)!|*|B+l Rex>0.
On the other hand, if Re x <
|1 + xt\~x < |cosec<?|,
(8) \RM(x)\<(m+l)\\x\'*] I co
In either case, the remainder
term of S(x), and approaches
any sector |arg x\ ^ n - e, e
numerically less than the fir
also the sign of the first ne
behaves very much like a conv
smallest term of A), which oc
determines a limit to the acc
penetrate.
The theory of asymptotic seri
Poincare' A886). We may disti
which we may call the theory
"sums" of asymptotic series (
convergence"), and operations
differentiation, integration,
variable in convergent or asy
the like). The most comprehen
is to be found in van der Cor
publications by the same auth
ourselves to a brief introduc
devote most of our attention
of asymptotic expansions. Her
4 ASYMPTOTIC EXPANSIONS
investigation of series which
The functions are often given
series, or else appear as sol
latter case the "variable" of
as the independent variable,
equation.
van der Corput, J.G., 1951: A
Bureau of Standards (Working
van der Corput, J.G., 1952: A
of Standards (Working Paper).
van der Corput, J.G., 1954 a:
217.
van der Corput, J.G., 1954b:
Asymptotics. Department of Ma
Euler, Leonhard, 1754: Novi c
Opera omnia, ser. I, 14, 585-
Poincare', H., 1886: Ada Math
Stieltjes, Th., 1886: Ann. de

DIFFERENTIAL EQUATIONS WITH A
In this chapter we describe b
homogeneous linear differenti
a large parameter. For this t
higher orders, and to systems
see Ince A927, p. 270ff.), Ka
Wasow A953)! the references g
given at the end of this chap
As in sec. 3.2, we may transf
form
y" +q(x, A)y =0,
where * is a real or complex
parameter. We shall investiga
differential equation as A -
The reader will be expected t
regarding the dependence of s
parameters occurring in the e
sec. 17, sec. 8).
4.1. Liooville's problem
In the course of his classica
problem, Liouville discussed
equation
A) y"+[A2p(*)+r(*)ly = 0
as A - °o. Here * is a real v
continuously differentiate, a
ville's procedure may be summ
4.1 DIFFERENTIAL EQUATIONS WI
New variables, ?and ij, are i
which carries the interval a
equation A) into
C) -~ +A27/=p(?)ij,
1 p" 5 p' * r
4 p 16 p3 p
is a continuous function of ?
By a method similar to that e
that solutions of C) satisfy
E) 7/(f) c, cosAf+c2 sinAf +
where a < y < /S and clt c2 a
have the same value, and the
The solution of E) can be obt
the form
F) ij(?,A)- 2 r,n({,\),
7/0(f, X)= c, cosXf +c2 sinX?
f sinA(f-t) p@ /(, A) rft re
/n+1(^, /
If |p(^)| < A., it is easy to
80 ASYMPTOTIC EXPANSIONS 4.1
and in the case of a finite i
convergent for a < ?< j8, A >
of >/(f, A) as A-* oo.
The Tjn are very difficult to
may be obtained from formal s
There are two methods. One us
2 a (*)A~"cosAf+ 2 0 (*)A~"si
n= 0 " n=0 "
for y (x, A), while the other
i\{+ 1 y(x)k~n
n=0
for logy(*, A). In the second
either method an approximatio
sum of the formal expansion;
by means of an integral equat
Liouville's process if the pa
4.2. Formal solutions
Instead of 4.1 A), we shall d
differential equation
A) y" + q(x, A)y-0.
If q(x, A) is a formal power
on x, then two linearly indep
represented by formal power s
expansion of q in powers of A
formal expansion of y will be
see that in the case that q(x
we can construct formal solut
subnormal solutions of sec. 3
In A), we shall assume that q
B) 1 qn(x)\*-n,
4.2 DIFFERENTIAL EQUATIONS WI
where the q n {x) are indepen
also assume that q0 (x) does
connected region in the compl
Corresponding to the two meth
we shall obtain two kinds of
these is of the form
C) f a (*H- p
n=0 " v=0 v
In substituting C) in A), we
n = -1, -2, -3, ... , and /3V
k + 1, ....
All summations may then be ex
[X # \k~v + B ^ A*"*J] 2 an X
Picking out the coefficient o
for all integer values of n.
The first non-vacuous conditi
... , A; — 1 in D) we obtain
.Jv^v ° m-0, 1 ft-1
or
E) /s;2+9o = o
F) 2j8'j8:+?. + '2J KK-V = Q
In consequence of these relat
the first sum in D). For n =
G) 2a'o ft +o(j8;' +9, + *2 /
82 ASYMPTOTIC EXPANSIONS 4.2
and when we replace n by k +
(8) 2
... recurr
0,
Equation B) holds f or 0 < j8
and in this equation (and sim
Hj^", the lower sign for H{*'
representations of Bessel fun
descents (Watson, 1922, sec.
The functions
are solutions of the differen
C) y"+[A2-(A2-M)*-2]y = 0.
This equation is of the form
all the other qn (x) vanishin
points of C), and x = 1 is a
condition 4.3C) is violated f
which does not include any si
sec. 4.3 will yield the gener
fail to indicate the expressi
Bessel functions. In order to
functions, we shall extend th
C). Since this case is not co
use the methods rather than t
Let us first discuss C) on th
have
and hence
D) ±,so(*)=/s(*) = j or2-d*dx
x
From 4.2G),
2a' /S'
4.4 DIFFERENTIAL EQUATIONS WI
so that
E) ao(x) = [/B ' OOF* = a(x)
With a and f$ so defined we f
F) y,W=aWe^W, F2(x) = a(x)e-^
which correspond to the leadi
The integral equation for z =
G) z (x) = 1 - Jo* K (x, t) F
By a straightforward computat
so that F is bounded on the i
(9)
az(
A - expt 2 A[/S(O-
Now, fi (x) is an increasing
and the exponential function
bounded. We thus arrive at th
A0) \F(t, X)K(x,t)\< -?-
for Re A > 0, 0 < t < x < b <
We are now ready to solve the
approximations in the form
*(*)= 1
, t)F{t, X)zn{t)dt B = 0, 1,.
I zAx\
n = 0
88 ASYMPTOTIC EXPANSIONS 4.4
From A0) it is easy to prove
.. 1 / Cx\n
so that the series defining z
bounded away from zero; z (x)
continuously differentiable,
°@-
This establishes the existenc
property
A1) y,W-y,() l + Ol— J , 0
+
Now, fix A, and let x -> 0. I
that
as x
(\x/2)~k
-tA.-p^-cosecA, as ,.0,
and it follows from A1), F),
** kPl)Kek as x- 0.
Making x * 0 in A2), we see t
c.(A)=e^A~^r(A+1), c.(A)=0,
* Note that Y. ia the approxi
4.4 DIJFEHENTIAL EQUATIONS WI
and by Stirling's formula,
:,(A)=BirA)* 1 + of-Lj
We thus find that
' Kr)]
when 0 < x < b < 1 and Re X >
in the latter form, we obtain
Let us now turn to the discus
In this case
A4) a(x) = x* (x 2 - I)"* = [
i/(l-x~2)!4
0, l
and Im A
B0) H^(Xx)=a/2n\x)-% ei7^4 Y,
when 1 < o < x < oo and Im A
we obtain B).
4.9. Transition points
Let us consider again Liouvil
A) y"+[A2P(*) + r(*)]y = O
with large positive A. As in
is real and twice continuousl
a < x < b. Instead of assumin
p (x) has a zero in (a, b). A
of the differential equation
that p (x) has a simple zero
also that p' (c) > 0, so that
c
'%,
and then
so that
G) -JTT=
, ^'2 = P.
With
and if) so determine
(8)
94 ASYMPTOTIC EXPANSIONS 4.5
Under the assumptions on p an
section, there is a unique th
function
which satisfies
from zero, p(f) is a bounded
asymptotic form of the soluti
A0) c}Ht(€)+czHz(O,
where H, (x) and H2 (x) are t
This generalization of Liouvi
for the purpose of obtaining
the interval (c - e, c + e\ b
entire interval (a, 6). The e
different asymptotic forms in
respectively, and yields a si
solutions of A) in a < x < b.
developed it in a number of m
of this chapter. Among those
mention in particular Cherry.
method is available. (See ref
Before describing this method
some properties of the soluti
4.6. Airy functions
The differential equation
A) —j—jw-O
dz
can be reduced to the differe
of order 1/3 (Watson, 1922, s
B) ?-!·*",
!uji+|(z)+
2
Also
(9) Bi(z) = i[
[1 + O
as z - oo, - tt/3 < arg z < n
All these asymptotic represen
restricted'to a closed sector
It follows from the asymptoti
A4) A +|*|*) e 4.@ -w
0 for c < re < b, p
of re and A when a < x
0 < arg \
y and for
of re for a
]*
j [- (*)]V2 - /(*) - / ° [
Here ^(re) > 0 when x > c,
(x)]V*
where A is independent of x,
principal values.
The proof of (8) is different
relative to c and relative to
give the details for a < x, t
y0' y2 - y0 y; = -a273 w/'fi*
by C) and 4.6 D), we see that
(9) k (x, t) = n\~m [y0 (*) y
satisfies D) and E). Now,
(this was th
apply estimates derived from
We shall now establish the ex
corresponding to, and asympto
necessary to impose, in each
restrictions correspond to th
For y0 and y2 we assume Re A
solutions of the Volterra int
A0) yo(x)=Yo(x)+JzK{.x, t)F(t
4.7
DIFFERENTIAL EQUATIONS WITH A
A1)
= Y2(x) + /; K(x, t)F(t, k)y,
For any fixed A in S, the exi
equations follows from the ge
(or by successive approximati
as A - oo, Re A > 0.
If Re A > 0, Im A ^ 0, and a
Yo ? 0, Y 2 ? 0. In this case
obtain integral equations for
4.6A4) and 4.6A5) are bounded
11/4
x exp
D
Re{ [-
- [-
<{>{xj\%n l) ,
and a similar estimate for |F
(8), we obtain inequalities,
A2)
K{x, t)F(t, A)
A3)
a ? t
0
for the kernels of the integr
A, the integral equation for
Z (A) be the maximum of |z a
equation and A2), A3),
102 ASYMPTOTIC EXPANSIONS 4.7
For sufficiently large |A|, \
A4) y m (x) . Ym (x) [1 + 0 (
provided that Re A > 0, a < x
restricted to a < re < c.
In the case of a positive rea
A4) fails to hold near such z
be derived from A0) and A1) b
From (9)
yo(*)= yo(*) [1 + n\-*3 /; Y2
- rrA73 Y2(x) j; Y0(t)F{t, A)
Here the integrals can be bro
/* = /' + /%
a a e
A4) may be used in the first
A5) yo(*)= Y0(x) [1 + 0(A-')]
uniformly in re, as A - oo, c
Similar is the proof of
A6) y2W=y2W[l + O(A)]+F0(re)O
uniformly in re, as A - oo, c
Equations A4) to A6) describe
y0 andy2.
'Ihe work on y±, is similar.
equations
A7) y. (x) = Ya (re) - J K {x
* * *
and analyze the solutions of
analysis of A0), A1), assumin
in the case of y_,. Y, and F_
and in this case the asymptot
results are
4.7 DIFFERENTIAL EQUATIONS WI
A8) y, (*) = y i (*) [1 + 0 (
a
0, Re A ^ 0 or c
A9) r,(*)- F,W[i + o(A~1)]+y_
uniformly in x, as A - oo, o
B0) y_,(*)= y.,W tl + O(A"')]
a
(x)k-\
n — 0
where
'-* Ai(-^3 )
in A), and equating coefficie
used by Cherry A950).
The differential equation
y"+q(x, A)y = 0, q(x, A) = 1
n= o "
is more general that A), beca
causes certain additional com
Langer A949).
'Ihe extension of these resul
undertaken both by Langer A93
unbounded x was investigated
4.8. Uniform asymptotic repre
We conclude with an applicati
section to the differential e
representation of J^kx) which
A - oo, Re A > 0. The result
4.4 as far as they relate to
(b < 1 < o) left by the work
Let us, then, apply the metho
differential equation 4.4C),
A) p(*)=l , r(x,A)-—; .
x 4x
The transition point is at x
differential equation
B) ^<2 = 1-^ ,
and 4.7B) becomes
C) -[-
'" 3 '^"^2
is a continuous function of x
of F (x) as x - 0 or x - oo,
/
, x! = {^, u{ I — I + lu,
for the Schwarzian derivative
x > 1. By a simple computatio
50' 1 ,n , 1 5/S'2 4 + x2
F(X):
18/3s
2J
18/S2 4A-x2)
fU) —
18 /2 4A-x2J
From C) and D),
/8 = 0(logx), /S'=O(x~') as x
/=O(x), /' -0A) as x-oo,
and it follows that
E) F(*) = 0[(xlog*r2] as *-,0
F(x) = 0(x~2) as x -oo.
Furthermore, as in sec. 4.7,
0
1, the error
< 1, the error term may be st
In order to ideutify y0 in te
0
(x)
replaced by its asymptotic re
strengthened to G), and we ob
where a is the function defin
4.4A3) now shows that
9.1/2
r; e'K x x'1/2 y< ° <* <~
4.8 DIFFERENTIAL EQUATIONS WI
and hence
O-.I/2
(9) J(X)
nx+D
with the same remarks about t
formula to F (X + 1), this re
(-1 \
— \m x
) [1
2 /
uniformly in x, 0 < x < <*>,
needs some modification near
the error term contains the e
strengthened for small x.
In the process of deriving G)
includes 4.4 A). Let us show
equations 4.4B). Mo do this,
apply 4.6A2) to show that
1 -" -" cosfX/OO-rr/4]
1 <O < X < oo
A \ -H
— nkx) a
A \ H
— nkx) a(x) cos[X/(*)- n/4] 1
aud this is in agreement with
The main result of this secti
values of x, and approximatio
Cherry A948).
108 ASYMPTOTIC EXPANSIONS
Birkhoff, G.D., 1908: Trans.
Cherry, T.M., 1948: /. London
Cherry, TJki., 1950: Trans. A
Horn, Jakob, 1899: Math. Ann.
Ince, EX., 1927: Ordinary dif
Jeffreys, Harold, 1923: Proc.
Jeffreys, Harold, 1953: Proc.
Kamke, E.W.H., 1930: Differen
Kamke, E.W.H., 1944: Differen
Third Edition, Leipzig.
Langer, R.E., 1932: Trans. Am
Langer, R.E., 1934: Bull. Ame
Langer, R.E., 1935: Trans. Am
Langer, R.E., 1949: Trans. Am
Miller, J.C.P., 1946: The Air
Morse, P.M. and Herman Feshba
McGraw-Hill.
Tamarkin, J.D., 1928: Math. Z
Trjitzinsky, W.J., 1936: Acta
Trjitzinsky, W.J., 1938: Bull
Turrittin, H.L., 1936: Amer.
Turrittin, H.L., 1952: Contri
Ann. of Math. Study, no. 29,
Wasow, Wolfgang, 1953: Introd
differential equations. Worki
Watson, G.N., 1922: A treatis
See also:
Asymptotic solutions of diffe
literature. Technical Report
Department of Mathematics, Ca
