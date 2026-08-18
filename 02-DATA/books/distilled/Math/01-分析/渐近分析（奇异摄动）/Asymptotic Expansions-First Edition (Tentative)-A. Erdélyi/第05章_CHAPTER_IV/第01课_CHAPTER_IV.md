# CHAPTER IV

DIFFERENTIAL EQUATIONS WITH A LARGE PARAMETER
4.1. Liouville's problem
4.2. Formal solutions
4.3. Asymptotic solutions
4.4. Application to Bessel functions
4.5. Transition points
4.6. Airy functions
4.7. Asymptotic solutions valid in the transition region . . .
4.8. Uniforn asymptotic representations of Bessel functions.
References
INTRODUCTION
It happens frequently that a divergent infinite series may be used for
the numerical computation of a quantity which in some sense can be
regarded as the "sum" of the series. The typical situation is that of a
series of variable terms whose "sum" is a function, and the approxima-
approximation afforded by the first few terms of the series is the better the closer
the independent variable approaches a limiting value (often oo ). In most
cases the terms of the series at first decrease rapidly (the more rapidly
the closer the independent variable approaches its limiting value) but
later the terms start increasing again. Such series used to be called
semi-convergent (Stieltjes), and numerical computers often talk of con-
vergently beginning series (Emde); but in the mathematical literature
the term asymptotic series (PoincareO is now generally used. We shall
see later that asymptotic series may be convergent or divergent.
Let us consider an example first discussed by EulerA754). The series
A) S(x)= 1- l!x+2! x2-3!x3 + .» =1 (-l)nn\x
o
is certainly divergent for all x -f 0, yet for small x (say 10 z) the terms
of the series at first decrease quite rapidly, and an approximate numerical
value of S(*0 may be computed. What function of x does this numerical
value represent approximately?
Euler considers
(x) = xS(x). Then
2 ASYMPTOTIC EXPANSIONS
and
{x) may be obtained as that solution of this differential equation
which vanishes as x = 0, Alternatively, we use Euler's integral of the
second kind,
n ! = /
o
and obtain
S(x) = J"~ e-'dt -xf^e'U dt + x2 J~ c~* t2 dt - ...
= 2 (-1)"
o
K we formally sum under the integral sign, S (x) becomes
B)
Now,
Jo l+*tdt'
C) f(x) = / dt
1 + xt
is a well-defined function of x, as a matter of fact an analytic function
of x in the complex x-plane cut along the negative real axis, and it is
closely related to the so-called exponential integral. The question then
arises: in what sense does the divergent series A) represent the func-
function C)? To answer this question, we note that for m = 0, 1, 2, ...
and hence
D) f(x) = Sm(x)+Rm{x)
E) SAx)= 2 (-l)"n\xn
INTRODUCTION
is a partial sum of A), and
F) /?„(*)=(-*)"
is the remainder.
If Re x > 0, we have |1 + xt\ "' ? 1 and
G) |«.(*)|<(m+l)!|*|B+l Rex>0.
On the other hand, if Re x < 0, 0 = arg x, and n/2 < ±
< it, then
|1 + xt\~x < |cosec
0. If Re x > 0, the remainder is numeri-
numerically less than the first neglected term, and if x > 0, the remainder has
also the sign of the first neglected term. Thus, for x > 0, the series A)
behaves very much like a convergent alternating series, except that the
smallest term of A), which occurs when m is approximately equal to x,
determines a limit to the accuracy beyond which it is impossible to
penetrate.
The theory of asymptotic series was initiated by Stieltjes A886) and
Poincare' A886). We may distinguish two parts of the theory. One part,
which we may call the theory of asymptotic series, treats topics such as
"sums" of asymptotic series ("asymptotic limits", "asymptotic con-
convergence"), and operations with asymptotic series (algebraic operations,
differentiation, integration, substitution of asymptotic expansions of a
variable in convergent or asymptotic series involving this variable, and
the like). The most comprehensive presentation of this part of the theory
is to be found in van der Corput's Lectures A951, 1952) and current
publications by the same author. In these pages we shall restrict our-
ourselves to a brief introduction to the theory of asymptotic series, and shall
devote most of our attention to the other part of our subject, to the theory
of asymptotic expansions. Here the central theme is the construction and
4 ASYMPTOTIC EXPANSIONS
investigation of series which represent given functions asymptotically.
The functions are often given by integral representations, or by power
series, or else appear as solutions of differential equations; and in the
latter case the "variable" of the asymptotic expansions may occur either
as the independent variable, or else as a parameter, in the differential
equation.
van der Corput, J.G., 1951: Asymptotic expansions. Parts I and II. National
Bureau of Standards (Working Paper).
van der Corput, J.G., 1952: Asymptotic expansions, Part III. National Bureau
of Standards (Working Paper).
van der Corput, J.G., 1954 a: Nederl, Akad. Wetensch., Amsterdam, Proc. 57, 206-
217.
van der Corput, J.G., 1954b: Asymptotic Expansions I. Fundamental theorems of
Asymptotics. Department of Mathematics, University of California, Berkeley.
Euler, Leonhard, 1754: Novi commentarii ac. sci. Petropolitanae S, 205-237.
Opera omnia, ser. I, 14, 585-617, in particular, 601 ff.
Poincare', H., 1886: Ada Math. 8, 295-344.
Stieltjes, Th., 1886: Ann. de I'Ec. Norm. Sup. C) 3, 201-258.

DIFFERENTIAL EQUATIONS WITH A LARGE PARAMETER
In this chapter we describe briefly the asymptotic theory of ordinary
homogeneous linear differential equations of the second order containing
a large parameter. For this theory and its extensions to equations of
higher orders, and to systems of differential equations of the first order,
see Ince A927, p. 270ff.), Kamke A944, p. 62ff., 102ff., 137ff., 213ff.).
Wasow A953)! the references given in these works, and the references
given at the end of this chapter.
As in sec. 3.2, we may transform the differential equation to standard
form
y" +q(x, A)y =0,
where * is a real or complex variable, and A is a real or complex pa-
parameter. We shall investigate the behavior of the solutions of this differ-
differential equation as A -» Ao, and without loss of generality we take AQ = =».
The reader will be expected to be familiar with the basic theorems
regarding the dependence of solutions of a differential equation on
parameters occurring in the equation (see, for instance, Kamke, 1930,
sec. 17, sec. 8).
4.1. Liooville's problem
In the course of his classical investigations of the Sturm-Liouville
problem, Liouville discussed the behavior of solutions of the differential
equation
A) y"+[A2p(*)+r(*)ly = 0
as A -» °o. Here * is a real variable, a < x < b, p (*) is positive and twice
continuously differentiate, and r(x) is continuous, for a < x < b. Liou-
ville's procedure may be summarized as follows.
4.1 DIFFERENTIAL EQUATIONS WITH A LARGE PARAMETER 79
New variables, ?and ij, are introduced by the substitution
which carries the interval a < x ? b into a < f < j8, and the differential
equation A) into
C) -~ +A27/=p(?)ij,
1 p" 5 p' * r
4 p 16 p3 p
is a continuous function of ?, a < ? < /3. (p ' = dp/dx, etc.)
By a method similar to that employed in sec. 3.3 it can now be shown
that solutions of C) satisfy the Volterra integral equation
E) 7/(f)« c, cosAf+c2 sinAf + X fy sin A(f- t) p (t)ri(t) dt,
where a < y < /S and clt c2 are arbitrary. T)(g) and c^ cos Xf+ c2 sin Af
have the same value, and the same derivative, at f= y.
The solution of E) can be obtained by snccessive approximations in
the form
F) ij(?,A)- 2 r,n({,\),
7/0(f, X)= c, cosXf +c2 sinX?
f sinA(f-t) p@ »/„(«, A) rft re = O, 1
/n+1(^, /
If |p(^)| < A., it is easy to prove by induction that
80 ASYMPTOTIC EXPANSIONS 4.1
and in the case of a finite interval (a, /S) it follows that F) is nniformly
convergent for a < ?< j8, A > A,> 0, and is also an asymptotic expansion
of >/(f, A) as A-* oo.
The Tjn are very difficult to compute. Other approximations for large A
may be obtained from formal solutions (which are divergent in general).
There are two methods. One uses formal expansions
2 a (*)A~"cosAf+ 2 0 (*)A~"siuAf
n= 0 " n=0 "
for y (x, A), while the other uses formal expansions
i\{+ 1 y(x)k~n
n=0
for logy(*, A). In the second method, y is a solution without zeros. In
either method an approximation to y is constructed by taking a partial
sum of the formal expansion; and this approximation is compared with y
by means of an integral equation. Either of these two methods reduces to
Liouville's process if the partial sum in question consists of one term.
4.2. Formal solutions
Instead of 4.1 A), we shall discuss the slightly more general differ-
differential equation
A) y" + q(x, A)y-0.
If q(x, A) is a formal power series in A with coefficients which depend
on x, then two linearly independent solutions of A) may also be repre-
represented by formal power series in A. On the other hand, if the formal
expansion of q in powers of A contains positive powers of A, then the
formal expansion of y will be a Laurent series. Nevertheless, we shall
see that in the case that q(x, A), as a function of A, has a pole at A= oo,
we can construct formal solutions which are analogous to the normal and
subnormal solutions of sec. 3.2.
In A), we shall assume that q(x, A) is of the form
B) 1 qn(x)\*-n,
4.2 DIFFERENTIAL EQUATIONS WITH A LARGE PARAMETER 81
where the q n {x) are independent of A, and A; is a positive integer. We shall
also assume that q0 (x) does not vanish in the interval (or simply-
connected region in the complex plane) over which x varies.
Corresponding to the two methods mentioned at the end of sec. 4.1,
we shall obtain two kinds of formal solutions of A). The first one of
these is of the form
C) f a (*H- p
n=0 " v=0 v
In substituting C) in A), we use the convention ^n = 0, an « 0 for
n = -1, -2, -3, ... , and /3V = 0 for v= -1, -2, ... and also for v=k,
k + 1, ....
All summations may then be extended over all integers, and we obtain
[X # \k~v + B ^ A*"*J] 2 an X"n + 2 S /S^ A*"" S a'n XT*
Picking out the coefficient of A2*""
for all integer values of n.
The first non-vacuous condition arises when n = 0. If we set n = 0, 1,
... , A; — 1 in D) we obtain
.Jv^v ° m-0, 1 ft-1
or
E) /s;2+9o = o
F) 2j8'j8:+?. + '2J KK-V = Q m *-!•
In consequence of these relations, we may restrict summation to m > k in
the first sum in D). For n = 4 in D) we have
G) 2a'o ft +«o(j8;' +9, + *2 /3J /8i_v) = 0,
82 ASYMPTOTIC EXPANSIONS 4.2
and when we replace n by k + n in D),
(8) 2
... recurrently, up to an additive constant multiple of
A,,
0 < arg A <,.
The theorem to be proved is as follows.
84 ASYMPTOTIC EXPANSIONS 4.3
If for each fixed A in S, q{x, A) is a continuous function of x over I; if
B) ?(*,X)=2*T' qAx)X.*-n + O(k-N),
B= O
uniformly in x and arg A, as A -* » in S, where the qn(x) are sufficiently
often differentiable in I, and
C) ReU*
when A is in S and x in I, then the differential equation
D) y" +?(*, A)y-0
possesses a fundamental system of solutions, y,(*) and y 2{x), so that
E) yyW-
uniformly in x and arg A, as A -» » in S.
We shall prove this theorem by a method analogous to that used in
sec. 3.3. By C) and 4.2A0) we may choose |8g| and j8.2 so that for
each A in S, Re [A* j80| (*)] is an increasing, and Re [A* jS^f*)] a
decreasing, function of*. It then follows from A) that for each sufficiently
large A in 5, [1", (x)\ is an increasing, and |y 2(*)[ a decreasing, function
of x.
To establish the existence and the asymptotic property of y,(x), we
substitute
F) Yl{x)=Y, {x)z(x)
in D) and obtain
G) z" +2 —'- z' + F(x, A)z = 0,
Y" 2*+4, „ j- 2ik+w-i
(8) F \xt A) = —— + q « ? p A +( X
Y. n — 0 n^O
4.4 DIFFERENTIAL EQUATIONS WITH A LARGE PARAMETER 85
uniformly in x and arg X, as X -> oo in S, by B) and 4.2 A0) to A2). Equa-
Equation G) may be written as
e, A) 2 - 0,
dx L dx
and by two successive integrations, and a suitable choice of the con-
constants of integration, we obtain
(9) 2 (x) = 1 - f*K(x, t) F(t, X) 2 (t) dt,
K [x9 t) = J y \t) Y. \S) dsm
Since IFjCx)! is an increasing function, we have |F,(t)| < |F,(s)|, and
\K(x, t)\ < {b - a) a
oo
in S. Moreover, z (x) is differentiable,
z • (k) = - f* Y]
0, uniformly inj8 if 0 < j8, < j8 ? ?2 < °o.
Equation B) holds f or 0 < j8 < n/2, uniformly in/SifO
0. Also a2(t) is
bounded. We thus arrive at the estimate
A0) \F(t, X)K(x,t)\< -?-
for Re A > 0, 0 < t < x < b < 1. Here C is independent of A, x, t.
We are now ready to solve the integral equation G) by successive
approximations in the form
*„(*)= 1
, t)F{t, X)zn{t)dt B = 0, 1,...
I zAx\
n = 0
88 ASYMPTOTIC EXPANSIONS 4.4
From A0) it is easy to prove by induction that
.. 1 / Cx\n
so that the series defining z converges uniformly in x and A if A is
bounded away from zero; z (x) satisfies the integral equation, is twice
continuously differentiable, satisfies the appropriate differential equation,
¦°@-
This establishes the existence of the solution y( of C) which has the
property
A1) y,W-y,(«) l + Ol— J , 0
0.
It remains to show that this solution is a multiple
Since yt is a solution of C),
A2) *"* y i to = c , M «^*> + c 2 M Yk{Xx).
Now, fix A, and let x -> 0. It is well known (Watson, 1922, p. 40, p. 64)
that
as x
(\x/2)~k
-tA.-p^-cosecA, as ,.0,
and it follows from A1), F), E), and D) that *
** kPl)Kek as x-» 0.
Making x ¦* 0 in A2), we see that
c.(A)=e^A~^r(A+1), c.(A)=0,
* Note that Y. ia the approximate solution, Y\ a Bessel function of the second kind.
4.4 DIJFEHENTIAL EQUATIONS WITH A LARGE PARAMETER 89
and by Stirling's formula,
:,(A)=BirA)* 1 + of-Lj
We thus find that
' Kr)]
when 0 < x < b < 1 and Re X > 0. If we put x = sech jS and take X positive
in the latter form, we obtain A).
Let us now turn to the discussion of C) on the interval 1 < a < x < ».
In this case
A4) a(x) = x* (x 2 - I)"* = [ - i j8 ' (*)]-*
i/(l-x~2)!4
b > 1 and all
X. Since a «• - /S' in this case, the evaluation of the integral in (9)
leads to
a2 {t)
K {x, t) = - ——- A - exp{ 2 A[j8 U) - j8 (*)] 1 ).
2 X
Now, -i j3 is an increasing function of x, and t>x, so that the exponential
function will be bounded if Im X > 0. Also az{t) is bounded, and we have
the estimate
90 ASYMPTOTIC EXPANSIONS 4.4
C
A6) \F(t, \)K(x, 0| <
for Im A > 0, l
0.
It remains to show that this solution is a multiple o:
Since y, is a solution of C),
V.lo^ * 7|^*'~ 1 ^ ' A. ^
Let us fix A and make x ¦* oo. It is well known (Watson, 1922, sec. 7.2)
that f or 0 < arg A < »r
I I as
4.5 DIFFERENTIAL EQUATIONS WITH A LARGE PARAMETER 91
and it follows from A7) and A4) that
y,(x)~ y,(x)~exp[Aj8(x)] ~ expfiAz - iAn/2] as x-*oo.
Making x ¦* oo in A8) we see that
c,(\)=(l/2nX)''iei"/*, c2(A)=0.
If arg A = n, we must use a slightly different asymptotic formula for H^',
but the conclusion remains the same. We thus have
e
O (~-J
A9) H?\\x) = A/2* A*)"* e
where 1 < a ^ as < «> and Im A > 0. By a similar proof
B0) H^(Xx)=a/2n\x)-% ei7^4 Y,(*) 1 + 0 J—- J
when 1 < o < x < oo and Im A < 0. If we take A positive and put x = sec j8,
we obtain B).
4.9. Transition points
Let us consider again Liouville's differential equation
A) y"+[A2P(*) + r(*)]y = O
with large positive A. As in sec. 4.1, x is a real variable, a
0, so that p (x) < 0 when a
0 when
c
0, where p 0c) is
positive, solutions of A) are asymptotically of the form
B) c, [p (*)]-* coslA J [p (*)]* rf*l + c2[p(*)]"* sin! A J[P(*)]*
'%,
and then
so that
G) -JTT=
, ^'2 = P.
With
and if) so determined, the differential equation becomes
(8)
94 ASYMPTOTIC EXPANSIONS 4.5
Under the assumptions on p and r made at the beginning of this
section, there is a unique three times continuously differentiable real
function
which satisfies G). For this function,
' is bounded away
from zero, p(f) is a bounded function, and we shall expect that the
asymptotic form of the solutions of (8) is
A0) c}Ht(€)+czHz(O,
where H, (x) and H2 (x) are two linearly independent solutions of D).
This generalization of Liouville's method was originally developed
for the purpose of obtaining asymptotic forms of the solutions of A) in
the interval (c - e, c + e\ but it is clear that it can be extended to the
entire interval (a, 6). The extension enables us to dispense with three
different asymptotic forms in (a, c - e), (c - t, c + e), (c + e, b) respec-
respectively, and yields a single uniform asymptotic representation of the
solutions of A) in a < x < b. The method was originated by Langer, who
developed it in a number of memoirs of which a few are listed at the end
of this chapter. Among those who developed further Langer's method we
mention in particular Cherry. A survey of the literature regarding this
method is available. (See reference at the end of this chapter.)
Before describing this method in greater detail we shall list briefly
some properties of the solutions of D).
4.6. Airy functions
The differential equation
A) —j—jw-O
dz
can be reduced to the differential equation satisfied by Bessel functions
of order 1/3 (Watson, 1922, sec. 6.4). We shall use the notation
B) ?-!•*",
!uji+|(z)+
2tt>ji+2(z) = O.
Also
(9) Bi(z) = i[
z)].
Ihe power series expansions of Ai(z) and Bi(z) follow from C). In
particular
A0) 32/34i@)=3l/6Bi@) = :
-31/34?'@)=3-1/6Bi'@)
rB/3)
ra/3)
The asymptotic behavior of Ai(z) has been investigated in sec. 2.6
for — tt/3 < arg z < n/3. The analysis can be extended by rotating the
path of integration in the t-plane of 2.6C).
A1) Ai{z)=- n~% z~* e~!'[l + 0(C'l)l
as z -» oo, - n < arg z < tt.
Results valid in sectors containing the negative real axis may be obtained
by using (8).
A2) Ai(f)'^ n-'A z-*\e'l [1 + 0@1 + »>? [1 + 0«"')]!
as z -* oo, 77/3 < arg z < 5 77/3
as z -» oo, -5 tt/3 < arg z < -tt/3.
4.6 DIFFERENTIAL EQUATIONS WITH A LARGE PARAMETER 97
From (9),
A3) Bi(z)= n~% z'X e*> [1 + O^"')]
as z -» oo, - tt/3 < arg z < n/3.
All these asymptotic representations hold uniformly in arg z if z is
restricted'to a closed sector inside the open sector stated above.
It follows from the asymptotic formulas that the functions
A4) A +|*|*) e« 4.@ -w
0, in A4): the second
function has no zeros.
For further information on Airy functions, and for numerical tables of
these functions, see Miller A946).
We conclude this section by proving the following inequality. If w (z)
is that solution of (l) which satisfies w {t) = 0, w ' (t) = 1, then
a6) o
0, t > 0, x ? t. Consider the function
/(re) = w(x)/v (re), x ? t. Clearly, /(re) -» 1 as x ¦* t, so we put f(t) = L
Also, v and w have the same sign when x ^ t.
d 5 vw
(m/ v - wv ' ) = w " v - wv " = < 0
dx 16 re
and w ' v - wv 'is a decreasing function otx. Since this function vanishes
at re = t, it follows that /' (re) < 0 if re > t, and /' (x) > 0 when 0 < x < t.
Ihus, /' (re) has a maximum at x - t, and 0 < /(re) < 1 for 0 < re, t < «>.
4.7. Asymptotic solutions valid in the transition region
We assume that (a, 6) is a bounded interval, a < c < b, p (x) is real and
and twice continuously differentiable for a < x < 6, p (re) < 0 for a < x < c,
p (re) > 0 for c < re < b, p (c) = 0, p ' (c) ^ 0, r (re, A) is a bounded function
of re and A when a < x
A,,
0 < arg \
y and for each fixed A in S, r(re, \) is a continuous function
of re for a
«]* dt x>c
j [- (*)]V2 - /(*) - / ° [-P Wl1/2 dt re < c.
Here ^(re) > 0 when x > c,
{x) < 0 when x < c, and all fractional powers
have their positive values.
The functions
C) y. (*)= [$' (re)]"* Ait-A273 e2w » /3 <^(re)] m = 0,
y.W- [^'(*)rl/S Bit-A273
4.7 DIFFERENTIAL EQUATIONS WITH A LARGE PARAMETER 99
satisfy the differential equation
D) Y"(x)
q
I" \2p(*) + y l& *\ I Y = 0,
is the Schwarzian derivative of 0. This differential equation follows from
4.6A) and 4.5G). Since the differential equations A) and D) differ in
terms which are comparatively small, we consider the Y's as leading
terms of formal solutions.
Under the above assumptions, the differential equation A) possesses
solutions which are represented asymptotically, in appropriate sectors
of the complex k-plane, by the Y , m = -1, 0, 1, 2. The proof is similar
to the proofs given in sections 3.3, 3.4, and 4.3; and it will be conducted
in several steps.
Let Y(x) be any solution of D), let K{x, t) be that solution of D)
which satisfies the initial conditions
dK
E) K(t,t) = O, — (t,t)=l,
dx
and let a
(8) \K(x,t)F{t,k)\
A exp 1 4 Relt-A^3
(x)]V* - [-k»*
Vi\vt\\
where A is independent of x, t, A. All fractional powers have their princi-
principal values.
The proof of (8) is different according to the position of x and t
relative to c and relative to each other, and according to arg A. We shall
give the details for a < x, t < c, -n/2 < arg A < n/2. Since
y0' y2 - y0 y; = -a273 w/'fi* - 4* m') = tt a^3,
by C) and 4.6 D), we see that
(9) k (x, t) = n\~m [y0 (*) y2 (t) - y0 (t) y 2 (*)]
satisfies D) and E). Now,
(this was the solntion Yo in the above case), and then
apply estimates derived from 4.6A4), A5).
We shall now establish the existence of solutions ym, m = — 1, 0, 1, 2,
corresponding to, and asymptotically represented by, the Y m . It will be
necessary to impose, in each case, restrictions on arg A. These re-
restrictions correspond to the introduction of branch-cuts in the A -plane.
For y0 and y2 we assume Re A ? 0, and define these functions as
solutions of the Volterra integral equations
A0) yo(x)=Yo(x)+JzK{.x, t)F(t,k)yQ(t)dt
4.7
DIFFERENTIAL EQUATIONS WITH A LARGE PARAMETER
A1)
= Y2(x) + /; K(x, t)F(t, k)y,(t) dt.
For any fixed A in S, the existence of the solutions of these integral
equations follows from the general theory of Volterra integral equations
(or by successive approximations). We shall prove that y0 ~ Yo, y 2 ~ Y2
as A -» oo, Re A > 0.
If Re A > 0, Im A ^ 0, and a < x < 6, or if A >0 and a < x < c, we have
Yo ? 0, Y 2 ? 0. In this case we may put y0 = Yo z 0, y 2 = Y2 z z, and
obtain integral equations for zQ and z2. Since under these circumstances
4.6A4) and 4.6A5) are bounded, and bounded away from zero, we have
11/4
x exp
D
Re{ [-
- [-
<{>{xj\%n l) ,
and a similar estimate for |F2(t)/y2(a:)|. Combining these estimates with
(8), we obtain inequalities,
A2)
K{x, t)F(t, A)
A3)
a ? t
f (t\ C
:, t)F{t, A) <, — ; ^
0
for the kernels of the integral equations for zQ and z 2. For each fixed
A, the integral equation for z , m = 0, 2 has a bounded solution. Let
Z (A) be the maximum of |z a (x)| for o ? re ? 6. From the integral equa-
equation and A2), A3),
dt
102 ASYMPTOTIC EXPANSIONS 4.7
For sufficiently large |A|, \Z a (A)| < 2, and from A0), A1), A2), A3),
A4) y m (x) . Ym (x) [1 + 0 (A)], uniformly in re, as A -* «, m = 0, 2
provided that Re A > 0, a < x < 6, and also that in case of a real A, re is
restricted to a < re < c.
In the case of a positive real A, Y 0 and y 2 have zeros when x > c, and
A4) fails to hold near such zeros. An appropriately modified result can
be derived from A0) and A1) by using (9) and estimates of Yo (t), Yz (t).
From (9)
yo(*)= yo(*) [1 + n\-*3 /; Y2U)F(t, k)yo(t)dt]
- rrA73 Y2(x) j; Y0(t)F{t, A) y0(t) it.
Here the integrals can be broken up,
/* = /' + /%
a a e
A4) may be used in the first integral, and thus it can be proved
A5) yo(*)= Y0(x) [1 + 0(A-')] + yt(x) OCA),
uniformly in re, as A -» oo, c < re <, b, A > 0.
Similar is the proof of
A6) y2W=y2W[l + O(A)]+F0(re)O(A),
uniformly in re, as A -» oo, c <. re ? 6, A > 0.
Equations A4) to A6) describe completely the asymptotic properties of
y0 andy2.
'Ihe work on y±, is similar. We define yy and y_, hy the integral
equations
A7) y. (x) = Ya (re) - J K {x, t) Fit, A) yjt)dt m = 1, -1,
* * *
and analyze the solutions of these equations in a manner similar to the
analysis of A0), A1), assuming Im A > 0 in the case of y,, and Im A < 0
in the case of y_,. Y, and F_, have zeros when \ is imaginary and re < c,
and in this case the asymptotic forms need some modification. The final
results are
4.7 DIFFERENTIAL EQUATIONS WITH A LARGE PARAMETER 103
A8) y, (*) = y i (*) [1 + 0 (A~1)], uniformly in *, as A -» «.
a
0, Re A ^ 0 or c <,x <,b, -iA>0
A9) r,(*)- F,W[i + o(A~1)]+y_1(x)O(xX
uniformly in x, as A -» oo, o < x < c, — iA>0
B0) y_,(*)= y.,W tl + O(A"')], uniformly in *, as A-°=
a
0
B1) y_, (*) = y_, U) [1
uniformly in *, as A -» oo, a ? x <, c, i A > 0.
Equations A4) to A6) and A8) to B1) establish the result stated at
the beginning of this section. By a more careful discussion of the integral
equations it is possible to show that also y' ~ Y' .
If r(x, \) can be expanded in powers of A, then it is possible to
develop formal solutions of A). The approximations discussed in this
section appear as the leading terms of the fonnal solntions. As in the
case discussed in the earlier parts of this chapter, there are two kinds
of fonnal solutions. The first kind corresponds to 4.2C), and it is of the
form
B2) Y(x) I aWA-'+y'W f 0 WA"",
where Y is a solution of D), and the a {x) and /3 (*) are functions of x
which are independent of A. Recurrent differential eqnations for these
functions may be obtained by substituting B2) in A), and equating
coefficients of like powers of A. This approach was used by Langer A949).
A second kind of formal solntion corresponds to 4.2(9). Ihis solution
is of the form C), except that instead of
(x, A)
which depends on A, and possesses a formal expansion
B3) 2
(x)k-\
n — 0
where
2, ... are obtained by substituting
104 ASYMPTOTIC EXPANSIONS 4.7
B4) <}>'-* Ai(-^3 )
in A), and equating coefficients of powers of A. Such solutions were
used by Cherry A950).
The differential equation
y"+q(x, A)y = 0, q(x, A) = 1 q (*)A2"n
n= o "
is more general that A), because it contains the term q 1 (x)X. This term
causes certain additional complications which were also discussed by
Langer A949).
'Ihe extension of these results to the case of a complex variable was
undertaken both by Langer A932) and Cherry A950); the extension to
unbounded x was investigated by Cherry A950).
4.8. Uniform asymptotic representations of Bessel functions
We conclude with an application of the results of the preceding sec-
section to the differential equation 4.4 C), thereby obtaining an asymptotic
representation of J^kx) which holds, uniformly for all positive x, as
A -» oo, Re A > 0. The result to be obtained includes the results of sec.
4.4 as far as they relate to J^(\x), and in addition fills the gap, b
is determined by the
differential equation
B) ^<2 = 1-^ ,
and 4.7B) becomes
C) -[-
' (x) ? 0, clearly
1 1 d>'" 3 '^"^2
is a continuous function of x for 0 < x < oo. To investigate the behavior
of F (x) as x -» 0 or x -» oo, we use the chain rule
/
, x! = {^, u{ I — I + lu, xl
for the Schwarzian derivative, with u = /S when x < 1, and u = /when
x > 1. By a simple computation
50'« 1 ,n , 1 5/S'2 4 + x2
F(X):
18/3s
2J
18/S2 4A-x2)
fU) —
18 /2 4A-x2J
From C) and D),
/8 = 0(logx), /S'=O(x~') as x-»0
/=O(x), /' -0A) as x-»oo,
and it follows that
E) F(*) = 0[(xlog*r2] as *-,0
F(x) = 0(x~2) as x -»oo.
Furthermore, as in sec. 4.7,
0
0, except that in the case of a positive
real X, and x > 1, the error term ueeds some modification. For 0 < x < b
< 1, the error term may be strengthened to G).
In order to ideutify y0 in terms of Bessel functions, let us take
0
(x)
(b)< 0, the Airy function may be
replaced by its asymptotic representation 4.6A1), the 0-term may be
strengthened to G), and we obtain
where a is the function defined in 4.4E). A comparison with 4.4F) and
4.4A3) now shows that
9.1/2
r; e'K x x'1/2 y<» ° <* <~
4.8 DIFFERENTIAL EQUATIONS WITH A LARGE PARAMETER 107
and hence
O-.I/2
(9) J(X)
nx+D
with the same remarks about the error term as in (8). By applying Stirling's
formula to F (X + 1), this result may be put in the simpler, if weaker form
(-1 \
— \m x
) [1 + 0(X~')],
2 /
uniformly in x, 0 < x < <*>, as X -» », Re X > 0, except that the error term
needs some modification near zeros of ^'(-X^3
\ Note that in A0)
the error term contains the error of Stirling's formula and cannot be
strengthened for small x.
In the process of deriving G) we have seen that our present result
includes 4.4 A). Let us show that G) also includes the sum of the two
equations 4.4B). Mo do this, we assume x > a > 1,
(x) ?
(a) > 0, and
apply 4.6A2) to show that
1 ¦-" -" cosfX/OO-rr/4]
1 <O < X < oo
A \ -H
— nkx) a
A \ H
— nkx) a(x) cos[X/(*)- n/4] 1 < a < x <
aud this is in agreement with 4.4 B).
The main result of this section, F), has been extended to complex
values of x, and approximations of higher order have been obtained by
Cherry A948).
108 ASYMPTOTIC EXPANSIONS
Birkhoff, G.D., 1908: Trans. Amer. Math. Soc. 9, 219-231 and 380-382.
Cherry, T.M., 1948: /. London Math. Soc. 24, 121-130.
Cherry, TJki., 1950: Trans. Amer. Math. Soc. 68, 224-257.
Horn, Jakob, 1899: Math. Ann. 52, 271-292 and 340-362.
Ince, EX., 1927: Ordinary differential equations, Longmans, Green and Co.
Jeffreys, Harold, 1923: Proc. London Math. Soc. B) 23, 428-436.
Jeffreys, Harold, 1953: Proc. Cambridge Philos. Soc. 49, 601-611.
Kamke, E.W.H., 1930: Differentialgleichungen reeller Funhtionen. Leipzig.
Kamke, E.W.H., 1944: Differentialgleichungen. Lb'sungsmethoden und Lotungen.
Third Edition, Leipzig.
Langer, R.E., 1932: Trans. Amer. Math. Soc. 34, 447-480.
Langer, R.E., 1934: Bull. Amer. Math. Soc. 40, 545-582.
Langer, R.E., 1935: Trans. Amer. Math. Soc. 37, 397-416.
Langer, R.E., 1949: Trans. Amer. Math. Soc. 67, 461-490.
Miller, J.C.P., 1946: The Airy integral. Cambridge.
Morse, P.M. and Herman Feshbach, 1953: Methods of theoretical physics, 2 vols.
McGraw-Hill.
Tamarkin, J.D., 1928: Math. Z. 27, 1-54.
Trjitzinsky, W.J., 1936: Acta Math. 67, 1-50.
Trjitzinsky, W.J., 1938: Bull. Amer. Math. Soc. 44, 208-222.
Turrittin, H.L., 1936: Amer. J. Math. 58, 364-376.
Turrittin, H.L., 1952: Contributions to the theory of non-linear oscillations, v. II.
Ann. of Math. Study, no. 29, 81-115.
Wasow, Wolfgang, 1953: Introduction to the asymptotic theory of ordinary linear
differential equations. Working paper. National Bureau of Standards.
Watson, G.N., 1922: A treatise on the theory of Bessel functions. Cambridge.
See also:
Asymptotic solutions of differential equations with turning points. Review of the
literature. Technical Report 1, Contract Nonr-220A1). Reference no. NR 043-121.
Department of Mathematics, California Institute of Technology, 1953.
