# CHAPTER III

SINGULARITIES OF DIFFERENTIAL EQUATIONS
3.1. Classification of singularities
3.2. Normal solutions
3.3. The integral equation and its solution
3.4. Asymptotic expansions of the solutions
3.5. Complex variable. Stokes'phenomenon
3.6. Bessel functions of order zero
References

SINGULARITIES OF DIFFERENTIAL EQUATIONS
In this chapter we give a brief introduction to the asymptotic theory of
ordinary homogeneous linear differential equations of the second order.
Analogous theories exist for equations of arbitrary (finite) order and for
systems of differential equations of the first order. For these more
geueral theories see Ince A927, especially p. 169ff., p. 428ff., p. 444ff.,
p. 484ff.),KamkeA944,especially, p. 17ff., p. 60ff., p. lOOff., p. 133ff.).
Wasow A953), the references given in these works, and the refereuces
giveu at the end of the present chapter. Asymptotic expansions occur
also in connection with non-linear differential equations, and partial
differential equations.
We shall investigate the asymptotic behavior of solutions of
as x -> *0. Here x is either a real variable ranging over an interval (of
which xQ is usually au end-point), or else a complex variable ranging
over a region (of which xQ is often a boundary point). Without loss of
generality, we take xQ =
, and \p 2 have at most poles at oo so that by a suitable choice of pf
and p2, i/i, and i/i2 can be made regular at oo; and x = oo is called an
irregular singularity of A) if at least one of the two functions \jjv xf/2 has
an essential singularity at oo.
It can be shown (see, for instance, Poole, 1936, section 20) that a
sufficient condition for x = oo to be an ordinary point is
F) p(x)=2x-'+O(x-2), q{x)=0{x-') as*-oo,
and that a sufficient condition for x = oo to be a regular singularity is
G) p(*)-0 (*"'), ?(*)-O(*"*)
In the case of an irregular singularity, p and q may have essential singu-
singularities at oo: if p and q have at most poles at oo, we speak of an irregular
singularity of finite rank, and the least integer k for which
(8) p(*)=0(**~'), ?(*) = 0(*2*-2) as*-oo
is called the rank of the irregular singularity. Sometimes, a regular singu-
singularity is regarded as a singularity of rank zero.
3.2 SINGULARITIES OF DIFFERENTIAL EQUATIONS 61
3.2. Normal solutions
If x = bo is an ordinary point of 3.1A), we may expand y in a series
of powers of *"'. The coefficients of that series may be determined from
recurrence relations, and the series converges in R. If x = oo is a regular
singularity of 3.1 A), we may set
We then obtain a quadratic equation for p, recurrence relations for the c
(similar to G) below), and a series for y which converges in R. In either
of these two cases the coefficients can be computed easily, and the con-
convergent series can be used with advantage to compute the solutions for
large x.
The situation is entirely different if x = oo is an irregular singular
point. Since the i/i .have essential singularities at oo, we must set in this
For the c n we obtain an infinite system of linear equations which cannot
be solved recurrently, andforp, a transcendental equation which involves
an infinite determinant (the determinant of the system). In this case the
coefficients cannot be computed easily, nor is the series rapidly con-
convergent for large x.
It was discovered by Thome* that in the case of an irregular singularity
of finite rank certain formal solutions exist which do not suffer from the
disadvantages mentioned above; the coefficients occurring in these
solutions can be computed recurrently, and the series appear suitable for
numerical computations for large x. Thome's solutions are of the form
y = exp[P(*)] I cnx-P-», co^O,
where P OO is a polynomial: they are known as normal solutions.
We shall explain the construction of normal solutions in the case of an
irregular singularity of rank one. We first note that setting
y = z exp (- lA f p dx)
62 ASYMPTOTIC EXPANSIONS 3.2
in 3.1A)! we obtain for z a differential equation of the form A) in which
z 'does not occur. Hence it will be sufficient to discuss the differential
equation
A) y"+?(*)y-0
in which
B)
to + oo except those explicitly stated otherwise.
Substituting B) and C) in A), we have
-"~2 +Xqn x~n 2 c n x~P~n = 0.
Comparing coefficients here, we obtain
D)
a>0,
3.3 SINGULARITIES OF DIFFERENTIAL EQUATIONS 65
assuming that q (x) is continuous for x > a and
B) ?(*)~ 2 qnx~n as x -» «., q0 ? 0.
n™ 0
We then obtain two formal solutions
C) e" I cnx-"-n, c^O
n= O
where co, p, c ,, c?, ... satisfy 3.2E), F), G). We shall show that these
formal solutions are asymptotic expansions of certain solutions of A).
Let co =
2> p = pt + ip2, and determine
0 and Im ?, ^ 0,
we take that value of the square root which makes p, « Re[q}/(,2co)] > 0;
and if?0 > 0 and q, is real, we take either value of the square root. Thus,
we always have either tu, < 0 or cot =0 and p, > 0, These conventions
will be retained throughout the discussion.
It will be convenient to transform A) by setting
D)
so that z satisfies the differential equation
E)
Here co and p satisfy 3.2E), F). We put
F) x2[q(x)~q0-qtx-t]+p{p+l)=F(x\
and see from B) that F he) is bounded, say
G) \F(x)\
a.
We now rewrite E) as
— (e^'x-V—
dx \ dx
66 ASYMPTOTIC EXPANSIONS 3.3
integrate to obtain
dx + C
where c2 and b > a are arbitrary constants, and integrate once more to
obtain
(9) K(x, «)=-/' exp[2
, c ( = 1, c z = 0 in (8)
so that the integral equation (8) becomes
A0) z(x) = 1 + /~K(*, t) F(t)z(t) r2 dt.
This integral equation will be solved by the method of successive approxi-
approximations.
For any function, ?00, we set
A1) TCM = /J" K{x, t) Fit) C(t) t~2 dt,
and then define
A2) *0<*)- 1, *„+,(*)= Tzn(x) n-0, 1, 2, ...
A3) 2(x)= S z U).
n=O "
3.3 SINGULARITIES OF DIFFERENTIAL EQUATIONS 67
It will now be proved that z (x) exists, satisfies A0), is differentiate,
and satisfies E). The proof will be conducted in several steps.
The kernel, K (x, t), is bounded for t >x >xQ where xQ > a and xQ is
sufficiently large.
Proof: Since either co, < 0 or
0 we have
d -2ai,s 2p, 2p,
— log(e ' s I)--2«a,+ -^ >0
ds s
for sufficiently large s; and hence
-2o)|S 2/9,
€ S
is an increasing function of s. We now write
\t/ \t j
% w At -s)
and apply the second mean value theorem to (9), obtaining
t 2co(t-s) /s\ '
x, t) = j e I— I [<& As, t) + i As, t)\ ds
\t J
where * < f, 1/ < t. The integrals on the right-hand side are bounded
functions of x and t, and
2p,
68 ASYMPTOTIC EXPANSIONS 3.3
when t>x>xQ and xQ is sufficiently large, so that
A4) \K(x,t)\
x>x0
for some x0 and 5.
If \C(t)\ < Ct~* for t>x0, where \>-l, then
A5) |7W|<^*^-\ x>x0.
A + 1
We have by A1), G), and A4)
t) r2 dt\ < abc
and this proves A5).
For the functions defined by A2) we have
(AB)n
A6) |*,W| < —^— *"", x>xQ.
Proof by induction. A6) is true for n = 0, and if it is true for any n, the
definition of r n + ) combined with A5) shows that it is also true for n + 1.
The series A3) converges uniformly for x > xQ, and the function z (x)
satisfies A0). Moreover, z (x) is twice continuously differentiable and
satisfies E). The uniform convergence follows from A6). If we substitute
z = ?zn in the integral in A0), term-by-term integration is justified by
uniform convergence, aud shows that A0) is satisfied. Furthermore, the
integral in A0) is a differentiable function of x, and so is z (x). Since
«*.,.„. ^ = .*--•> (ff.
we obtain from A0),
A7) i'W.^e'^'W F(t)z(t)r*dt.
The last integral is again a differentiable function of x, and substitution
shows that z (x) satisfies E). With z given by A3),
3.4 SINGULARITIES OF DIFFERENTIAL EQUATIONS 69
A8) yAx)=e^x-Pz(x)
satisfies A). If qQ is positive and qx is real, we may take either of the
two values of (-
b.
Since z(x) = 1 + 0(x~') as x -»
, such a 6 certainly exists.
Thus in every case we have two linearly independent solutions of
A) in the interval x > x0, and, if a < xQ, these solutions can be extended
to the interval x > a. Itremainsto show that the formal solutions obtained
in sec. 3.2 are asymptotic expansions of the solutions obtained in this
section.
3.4. Asymptotic expansions of the solutions
We first remark that
A) ^ e~H~vit^e~x I (-1)" (v)B x~u~m asi-«
B) J'e'fi/i^e' S (v) *"v"* asx-ao,
C) (vH= 1, (v) r- v(v + 1) ... (v + r - 1), r = 1, 2, ....
Both results can be proved by successive integrations by parts, with
g = t~v, h_m = (+ 1)" exp(+ t) iu 2.1E). In particular,
D)
E)
70 ASYMPTOTIC EXPANSIONS 3.4
Next we prove by induction that the functions defined by 3.3A2)
possess asymptotic power series expansions of the form
oo .
F) z (x)~ ? c. x~* asx-»<».
This is certainly true for n = 0. If it is true for any n, then
F (t) z (t) ~ 2 ak t~k as t -* oo.
Also
(«) t dt.
If cu and p are real, the last theorem in sec. 1,4 justifies substitution
of the asymptotic expansion of F (t) r (t) in the integral, so that
as x ¦
If «u orp is complex, G) can be proved bytakingthe asymptotic expansion
of F(t) zn(t) to a finite number of terms, with a remainder, substituting,
and estimating the remainder in G) by D). In any event, each integral in
G) possesses an asymptotic powerseries expansion which can be obtained
from A), and starts with x~ . By the third theorem in sec. 1.4, it is
permissible to substitute this expansion in G): fi(n) = n, the uniformity of
the asymptotic expansion is trivial, and the series 14E) terminate so
that the question of convergence does not arise. Thus we obtain by
rearrangement
(8) *;+Ito~ J,/**"*;
and by integration of (8) we obtain the asymptotic expansion of r +].
By the second theorem of sec. 1.4, it is permissible to substitute F)
in 33A3): since r = 0(x~"), the question of uniformity is trivial, and
the series 1*4B) terminate so that the question of their convergence does
not arise. Thus we see that z (x) possesses an asymptotic power series
expansion of the form
(9) r(x)~ S c x"n asx-»«..
3.4 SINGULARITIES OF DIFFERENTIAL EQUATIONS 71
It remains to prove that the coefficients cn occurring here satisfy 3.2G).
It follows from 3 .3 A7) and the corresponding relation for z " , that z ' and
z" also possess asymptotic power series expansions. By a result in
sec. 1.6 it follows that (9) may be differentiated twice. The resulting
asymptotic series must satisfy 3.3E) formally, and this leads to 3.2G)
for the coefficients. Also, c = 1.
We have thus proved that 3.3A8) is represented asymptotically by
one of the formal solutions, and we conclude by showing that 3.3A9) is
represented by the other. To do this we put
A0) yt{x)=e-"*xPz2b),
and have from 3.3A8) and A9)
A1) z2(x) = z(x)f'be*»{*-t)(^\ P [z{t)T2dt.
By the choice of 6, z (t) is bounded away from zero, and we have also
seen that z (t) possesses an asymptotic expansion, (9) with cQ = 1, as
t -> o». Then
[r(«)]= "?' a t~n+O(t~N) iort>b
n— 0
for some a , and
—— - z, "_J,.e i— j t at
z(x)
n= <
— ) O(t~N)dt.
The integral under the summation sign can be expanded asymptotically by
B), and the last integral is 0 ($~N) by E). Since N is an arbitrary positive
integer, z2{x)/z (jc) possesses an asymptotic power series. Hence z2(x)
possesses an asymptotic power series expansion
A2) r,(x)~ f C x~" as*->« .
2 n=o "
72 ASYMPTOTIC EXPANSIONS 3.4
By a similar consideration as in the case of z,, it can be proved that
the coefficients occurring here satisfy a recurrence relation which differs
from 3.2G) only in that co, p are replaced by -co, -p. Thus, 3.3A9) is
represented asymptotically by one of the formal solutions.
If co and p are both imaginary, the two fundamental solutions, both of
the form 3.3A8), are defined uniquely up to a constant factor: both are
bounded and neither approaches zero as x -» oo. In all other cases, one of
the fundamental solutions, 3.3A8), approaches zero as x -» oo, and is
defined uniquely up to a constant factor: the other, 3.3A9), is unbounded
as x -» oo, and is not unique (since it depends on b). In fact,
3.5. Complex variable. Stokes' phenomenon
The results of the preceding sections may be extended to the case of
a complex variable x ranging over a sectorial region S,
A) \x\>a, a
oo along any otherray, the leadingterm in one of the formal solutions
increases exponentially.
First we assume that the critical line does not intersect S. Clearly, in
this case /3 - a < n, and we may take co as that solution of 3.2E) forwhich
Re cox < 0 for all x in S. If x varies along any ray arg x = const, in S,
the results of sections 3.3 and 3.4 hold, and these results can be extended
to the sector S as follows. In the integral equation 3.3A0) we always
integrate along a ray, so that arg x = arg t. The boundedness of the
kernel then follows for each x in S, and uniformly in x when a < arg x < /S.
The integral equation can be solved as before, each z n(x) can be shown
to be analytic in S, and z (x) is also analytic in S, siuce it is the uniform
limit of analytic functions. In 3.3(8), b is chosen so that y, (x) ? 0 when
\x\ > b, a < arg x < /S. The result is the existence of two solutions, y,
and y2, in S which are represented asymptotically by multiples of the
3.6 SINGULARITIES OF DIFFERENTIAL EQUATIONS 73
formal solutions 3.3C). The asymptotic expansions hold uniformly in
arg x as x -» oo, a <; arg x < /S. Any solution of the differential equation
is a linear combination of)', and y2; and its asymptotic expansion follows
from the asymptotic expansions of y , and y 2.
Next we assume that the critical line intersects S and decomposes it
into a finite number of sectors, Sk, k = 1, ... , K, and certain rays of the
line itself. In each of the sectors Sk we have a value
i of
k x < 0 for all x in Sk, and in each Sk we have a fundamental system
"? \k ' y a wn*cn is asymptotically represented by the formal solutions. For
a fuller discussion of these fundamental systems the reader is referred
to Hoheisel A924). It turns out that the fundamental system belonging to
a ray of the critical line may be taken also as a fundamental system for
the two sectors separated by that ray. Each of the two solutions is
dominant (exponentially increasing) in one of the two sectors, and re-
recessive (exponentially decreasing) in the other.
Let us consider a solution, y (x), of the differential equation in S. In
each of the sectors Sk, y is a linear combination of the two fundamental
solutions for that sector; in each of the sectors y will b e represented
asymptotically by a linear combination of the two formal solutions; but
the coefficients may vary from sector to sector. This circumstance was
discovered by Stokes, and it is called Stokes' phenomenon. The sectors
Sk are sometimes called Stokes sectors, and the critical rays, Stokes
rays.
For the determination of the coefficients involved in the expression
of y (x) as a linear combination of the formal solutions see Turrittin
A950).
3.6. Bessel functions of order zero
We shall illustrate the results of the last few sections by a brief
discussion of the differential equation
A) z" +* z' +« = 0
satisfied by Bessel functions of order zero. The change of variable
B) z = x-*y.
74 ASYMPTOTIC EXPANSIONS 3.6
transforms A) to the standard form
C) y" +
This equation is of the form 3.3A), and in 3.5A) we may take a = 0 and
a, /3 arbitrary.
We obtain formal solutions as in sec. 3.2; equations E), F), G) of that
section become
0. Then e"" vanishes
exponentially as Im u ¦* + oo, and we may break up the integral in (9)
according to
/-,=-/, +J-,
In the first integral we put
u = 1 + it, l-u=te~i7T/z, 1 + u = 2 + it,
and in the second,
u = -1 + it, 1 - u = 2-it, 1 + u = te im/i,
thus obtaining two functions which are constant multiples of
A0) H'" (x) = - e "-i7rA /°° e "«* t"x B + it)'* dt
n o
H <2) (*) = - e""+i7r/4 J°° e-"t-x B - it)'* dt.
The functions defined by A0) are known as Bessel functions of the third
kind, or Hankel functions, of order zero. These functions are defined by
A0) for Re x > 0, but their domains of definition can be extended to
— n < arg * < 2n in the case of H^li, and to ~2n < arg x < n in the case
of //g2', by rotating the path of integration as in sec. 2.2.
It can be shown that //?" and H(oz) are also solntions of A). Clearly
A1) J0(x)=±H(»(x) + Ih«Hx),
76 ASYMPTOTIC EXPANSIONS 3.6
and a closer investigation reveals that both H ?" and H™ have logarithmic
singularities at the origin. The knowledge of these singularities leads to
a definition of the Hankel functions for all values of arg x.
The integrals representing Hankel functions are Laplace integrals,
and their asymptotic expansions for large x may be obtained by means of
the last theorem in sec. 2.2, the result being
A2) H™(x) ~ S, 0*)> uniformly in arg x, as * -> oo,
-it + e < argx <2n- e, e>0
A3) H™ (x) ~ S2 (*), uniformly in arg *, as j; -> »,
-2ir+ e < arg x
0.
From A1) we then have
A4) 2 J0{x) ~ S, (*) + Sz (*), uniformly in arg *, as * -> oo,
-it+ c < arg* < n- e, t>0.
In the last equation we have used the symbol ~ in a somewhat unusual
manner, in that the right-hand side is not one asymptotic expansion but
the sum of two. A justification of this use is based on the circnmstance
that on the real axis the two expansions are of the same order and may
be combined into a single expansion (which then is not an asymptotic
power series), while in the upper [lower] half-plane S}(x) [S2(x)] is re-
recessive and may be omitted.
We have thus obtained the asymptotic expansion of Jo (x) in the whole
plane with the exception of a narrow sector around the negative real
axis. To obtain asymptotic expansions valid in sectors including the
negative real axis, we remark that it follows from (8) and A4) that
2J0(x) = 2 Jo(*ewi) - S, (*ewi) + S2(xewi)
as * -» oo and — n + e < arg(*e7rt) < n — e, so that
A5) 2 J0(x) ~ S, (*) - Sz (x), uniformly in arg x, as * -> <»,
— 2n + ? < arg x <— e
by G); and similarly J0(x)= JQ(xe~ni) and
A6) 2JQ(x) ~ - 5, (*) + S2 (*), uniformly in arg x, as * -> oo,
e < arg x <2n- e.
3.6 SINGULARITIES OF DIFFERENTIAL EQUATIONS 77
A comparison of A4), A5), and A6) shows the Stokes' phenomenon.
The rays excluded by narrow sectors are the Stokes rays. At first it may
seem strange that the sectors of validity of these asymptotic expansions
overlap, but there is no contradiction involved in this. The regions of
validity of A4) and A5) have the common part —n + ( < arg * <— e; in
this common part S2(«) is recessive so that the right-hand sides of A4)
and A5) are asymptotically equal. Thus, the coefficients of the formal
series jnmp in sectors where these series are dominated by the other
series.
Hoheisel, G.K.H., 1924: /. Reine Angew. Math. 153, 228-248.
Horn, Jakob, 1915: Jber. Deutsch. Math. Verein. 24, 309-329.
Horn, Jakob, 1916: Jber. Deutsch. Math. Verein. 25, 74-83, 301-325.
Horn, Jakob, 1919: Math. Z. 3, 265-313.
Horn, Jakob, 1920: Math. Z. 8, 100-114.
Horn, Jakob, 1924: Math. Z. 21, 85-95.
Ince, E.L., 1927: Ordinary differential equations. Longmans, Green and Co.
Kamke, E.W.H., 1944: Differentialgleichungen. Lb'sungsmethoden und Lb'sungen,
Third Edition, Leipzig.
Poincare, Henri, 1886: Ada Math. 8, 295-344.
Poole, E.G.C., 1936: Introduction to the theory of linear differential equations.
Oxford.
Stemberg, Wolfgang, 1920: Math. Ann. 81, 119-186.
Tricomi, F.G., 1953: Equazioni differenziali. Second edition, Torino.
Trjitzinsky, W.J., 1933: Acta Math. 62, 167-226.
Turrittin, H.L., 1950: Trans. Amer. Math. Soc. 68, 304-329.
Wasow, W.R., 1953: Introduction to the asymptotic theory of ordinary linear
differential equations. Working paper, National Bureau of Standards.
