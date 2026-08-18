# Chapter VII) gives a more sophisticated proof under more general con-

conditions. Further extensions of Laplace's formula were obtained by Hsu
A949 a, b; 1951 a, b), Levi A946) and Rooney A953). Laplace's method
has been applied to integrals depending on two large variables by Fulks
A951) and Thomsen A954), and to double and multiple integrals by Hsu
A948 a, b; 1951 c) and Rooney A953).
The following extension of Laplace's result will be derived from our
discussion of Laplace integrals. Let g and h be functions on the interval
(a, /3) for which the integral A) exists for each sufficiently large positive
x, let h be real, continuous at t = a, continuously differentiable for
a
0, and such that h' < 0 for a
0, for a + 7]
0, v > 0: then
8 b
C) fix) = Jg(i) exhMdt^ —
"¦ v
We first note that
D) |/* g<,t)exhMdt\
0, k (u) = - g {t)/h' ({) and obtain
E) r+V gU) e'h <"dt = e«*(a> j" k{u)e"- da.
38 ASYMPTOTIC EXPANSIONS 2.4
Now,
u = Ha) - h(t) = - J* h '(r) <*r~- (« - a)v as t + a
v
and hence
t-a~ ( ) as u -» 0.
Also,
~ — \t — af as t -» a
so that
F) A(u)~ — ( I as u -» 0.
o \^ a /
By the results of the preceding section on the asymptotic behavior of
Laplace integrals it follows from E) and F) that
G) rtM,^aiI
and D) and G) prove C). Moreover, both D) and G), and hence also C),
remain true if x is a complex variable and x -> oo in S^, A > 0.
A further extension of C) leads to an asymptotic expansion of
In the following formulas n = 0, 1, ... , N — 1. If
(8) -JUdl-Sa.d-^1, g(f)- Xi^-a^'
to N terms as t -» a, then there is an expansion
(9) - -?—- ~ 2 c (t - a)^*" to tf terms ast-a
A (t)
and the c may be computed by formal division. Also
A0) u = - J ' h '(r) rfr ~ V -^— (t - a)l/+" to N terms
as t -» a.
2.4 INTEGRALS 39
From this last expansion it may be shown that t-a possesses anasymptotic
power series expansion in powers of u , this asymptotic power series
may be substituted in (9), and leads to an asymptotic expansion of the
form
A1) Hu) ~ 2 yn u ^¦¦"^ to N terms as u - ~ .
With A1) instead of F), an asymptotic expansion to N terms is
obtained for E); D) may be strengthened to olpc'^*" )/v el/l(a)); and
we have
\16f J\*J
to N terms as x -» «> in S^, A > 0. The coefficients yn may be computed by
formal substitution according to the scheme described above.
There is an alternative procedure for the computation of the yn which
avoids the necessity for inverting the asymptotic series A0) to obtain
the expansion of t - a in powers of ul/v. From A0),
*,
We now write
expand
formally in powers of (t - a), and integrate term-by-term to obtain A2)»
It is also possible to construct a proof of A2) along these lines.
2.5. The method of steepest descents
We again consider the integral
A) fM
40 ASYMPTOTIC EXPANSIONS 2.5
in which we now assume x to be a large complex variable, g and h to be
analytic functions of the complex variable t, and the integral to be taken
along some path in the complex t plane. This integral may be evaluated
asymptotically by the method of steepest descents, which was originated
by Riemann and developed by Debye. Copson A946) gives a detailed
description of this method together with references and several examples.
Those points of the t plane at which h'(t) = 0 will be called saddle
points or cols. The surface representing |exp[xA(t)]| as a function of
Re t and Im t will be called the relief of e*h: on this surface cols will
be "saddles", and the most convenient trail from one "valley" to the
other will lead over one or several saddles. Let r be a col: if A'(r) =
k" (r) = •»= h (" \r) = 0 and h U+1 \r) jt 0, we call r a col (or saddle point)
of order m. In the {-plane, curves along which Re xh (f) is constant are
called level curves: along such curves e zh has a constant modulus (they
are contour lines of the relief), and the phase of e** changes as rapidly
as possible. Those curves along which Im xh(t) is constant are called
steepest paths: along such curves e has a constant phase, and the
modulus of e*'1 changes as rapidly as possible (they are gradient lines
of the relief). At a col, r, of order m, m + 1 level curves intersect at
equal angles, and their angles are bisected by m + 1 steepest paths:
along each of the latter curves |e '*'( has a stationary point at r.
The method of steepest descents consists in deforming the path of
integration so as to make it coincide as far as possible with arcs of
steepest paths. If a and j8 lie on steepest arcs through cols, for instance
if a and /3 are singularities of h (t), then the path of integration may be
deformed so as to consist entirely of steepest paths through cols; other-
otherwise two steepest arcs may occur which do not pass through cols. This
latter case may be described by reference to the relief by saying that
we first descend along a gradient line to a singularity and them climb the
saddle along another gradient line. In any event, Re xh if) is monotonic
along any steepest path (except at saddles), and Laplace's method may
be used to evaluate the integral asymptotically. The asymptotic expan-
expansions of g and k needed for the application of the theorem in the pre-
preceding section are the Taylor expansions of g and h around that point of
the steepest path at which Re xh (t) is a maximum (this is often the col).
The inversion of the series 2.4A0) may be effected by Lagrange's
expansion (see, for instance, Copson A935), p. 123-125).
2.6 INTEGRALS 41
Meijer A933 a,b) has shown that numerical bounds for the error term
may be obtained by using Lagrange's expansion with a remainder, and
he has also shown that in some cases recurrence relations for the coef-
coefficients may also be obtained.
We shall consider several examples of the application of the method
of steepest descents: these are taken from Copson A946).
2.6. Airy's Integral
We shall investigate the asymptotic behavior of
A) Ai(z) =— / cos! — s3 + zs } ds
« Jo \3 /
for large positive values of z. With
\z) s = z t, x = z
we obtain
C)
and the method of steepest descents can be applied to the integral in
C). In C), t may be envisaged as a complex variable of integration. The
path of integration (for x > 0) is the real t axis, but it can be deformed
into any curve which begins at infinity in the sector 2n/3 < arg t < n
and ends at infinity in the sector 0 < arg t < ir/3. Here
*(—t' +IJ,
4W = il-i3 + i), A'(t)=i(t2+1),
and the cols are the zeros of h \t), i.e., the points t = ± i. The steepest
paths are determined bylm A(t)=const. We set t = ? + irj and obtain
Im hit) =— f- ??2+?, ImA(±i)=0,
so that the equation of the steepest paths is
D) ?(f - 3n2 + 3) = 0.
ASYMPTOTIC EXPANSIONS
2.6
i
— i
This equation represents a degenerate cubic consisting of the imaginary
axis and of the two branches of a hyperbola. In the figure, arrows indicate
the direction in which Re h (t) decreases. The asymptotes of the hyper-
hyperbola are the lines ? i t] \/3 = 0, and clearly, the path of integration in
C) can be deformed into the upper branch of the hyperbola, and runs from
oo • expEn-?/6) to
• exp(?n/6). With this path, the integral in C) can be
seen to be convergent whenever Re x > 0.
We now write
E)
and evaluate J, 2 by Laplace's method. In both integrals, h(t) — h{i) is
real and reaches its maximum at t = i; also h(t) — h(i) is a decreasing
function. We introduce a new variable u by
F) u=k(i)
3 V3
{t-iJ--i(t-i)\
2.6 INTEGRALS 43
From F)
t -I 1/
1-I »(*-») ,
where u is the positive square root, [ ••• ] is that value which reduces
to 1 at t = i, and the upper sign in G) holds for Jt, the lower sign for J2.
It follows from Lagrange's theorem that sufficiently near to the col,
f-f possesses an expansion of the form l-i = J i^iu5*)" where nb is
the coefficient of (f - i)""' in the expansion of [1 - i(t - i)/3]"n/ in
powers of t - i. In this manner the expansions
v *""!rC»/2 -l)
(8) t-i >
W)
71=1
are obtained where the upper or lower sign holds in Jt and J2 respec-
respectively. Now
and according to sec. 2.4 the asymptotic expansions of J, 2 are obtained
by substituting (8) in dt/du and then integrating term-by-term. Thus
nf i 2(ra-l)!r(ra/2Kn"'
(il)"r""'rCn/2-l)
n/2
Substituting this in E) and expressing the result in terms of z, we obtain
after some simplification
^(z)^exp(-Tz3/2)
(9) /li(z)--^T-exp -- z3/2l I ' ¦¦' {-9z^)-',
2*11 Z \" J n \2/7l)I
X X ¦ — u
and this asymptotic representation holds, uniformly in arg z, as z -> °o in
|argz| < ir/3- A, A > 0.
44 ASYMPTOTIC EXPANSIONS 2.7
2.7. Further examples
We shall now consider two examples where the limits of integration
are not singularities, and accordingly, the asymptotic expansions are not
obtained by expansions around the col. Also, in the second example, the
col is of order two.
First let x > 0 and
A) /(*)=/„ exp \ix -
The function h{t) occurring here is the same as in sec. 2.6, the steepest
paths are those shown in the figure in sec. 2.6, and it is easily seen
that the appropriate path of integration consists of that portion of the
imaginary axis from 0 to i and then one-half of the upper branch of the
hyperbola. Thus,
o t
The asymptotic expansion of the second integral has already been
obtained. In the first integral h (t) is real and decreasing as t runs from
0 to i, and we may again use Laplace's method. Accordingly, we set
and infer from Lagrange's theorem that —it = 2 bn u" where nbn is the
coefficient of (-it)" in the expansion of A + t2/3)~n in powers of -it.
Clearly 6 = 0 if re is even and
- u =
»= o
Substituting this in the first integral in B) and integrating term-by-term,
Cm)luu
du
m ml Bm)! 3"
Cm)!
om!3"
x~z'-\
2.7
INTEGRALS
It is seen from sec. 2.6 that the second integral in B) is exponentially
small in comparison with the first one, and hence the result
C)
as x -> oo in S^, A > 0.
Out last example is the integral
Cm)!
D)
exp(wt3
where we take x > 0. Here fc(t) = it3, and t = 0 is a col of order two. The
steepest paths through the col are the lines Im (it3) = 0, that is the lines
arg t = ± ff/6, ± n/2, ±5tt/6. In the figure, arrows indicate the direction
of decreasing |exp(i*t3)| tot x > 0. None of these steepest paths passes
through t = 1. With t = f + ir], the equation of the steepest path through
t = 1 is lm(it3) = 1, or f3 - 3 gt]2 = 1. This is a cubic, and the branch
of this cubic passing through t = 1 is also indicated in the figure. In
order to get from 0 to 1 along steepest paths, we first integrate from 0
to oo along the line arg t = n/6, and then from »to 1 along the upper half
of e branch of our cubic. AnnorJincrlv. we sot
46 ASYMPTOTIC EXPANSIONS 2.7
In I, we set u = -it3 or t = it1/s e77*76, where um > 0, and obtain
F) I, =i e iw/6 J0'°e-m it-** du = TD/3) e i7r/t x'}/\
o
In I2, we set a = -i (t3 - 1) or t = A + iuI/3 and obtain
X-2/3
Expanding A + iu)~ in the binomial expansion,
G) I,* „. }M afc 2 T(n + 2/3)(i;
fl=0
and substituting F) and G) in E) we finally have
(8) jj exp (ixt9) it ~ rD/3) e""'*-1
as * -» oo in Sfc, A > 0.
The last equation describes the asymptotic behavior of f(x) as * -» oo
in the right half-plane. If * -» ± (oo, the integrand in D) is real, and
Laplace's method may be applied, and if x is in the left half-plane, we
may use the relation
which follows from D) and in which bars denote complex conjugation.
2.8. Foirier integrals
Integrals of the form
f
A) f
2.8 INTEGRALS 47
are called Fourier integrals. We shall always assume that (a, j8) is a rsal
interval, and mostly (a, /3) will be a finite real interval; and
(t) will be
anintegrable function so thatA)exists for all real x. We shall investigate
the asymptotic behavior of A) as * -»+«>; to obtain the asymptotic be-
behavior as * -» -oo, replace t by-t. Unlike in the case of Laplace integrals
(sec. 2.2) it seems that repeated integrations by parts is the only effec-
effective method for obtaining asymptotic expansions of A), except in the
case of analytic cf>(t) when the method of steepest descents may be ussd.
First we shall prove: //
(t) is N times continuously differentiable
for a
(t) dt - BN (x) - A N (x) + o (*"*)
as x •* oo,
C)
and
"*'= d"
/dt". The result remains true when a = -oo (or j8 = oo) pro-
provided that
*" \t) -» 0 as t -* -oo (or t -» oo) for each n « 0, 1, ... , N - 1,
and provided further that
* \t) is integrable over (a, j8). To prove B),
we apply 2.1 E) with g =
("', h = e ***, h_n - <,ixYn e ut. For the
remainder we obtain
and this is o(x~w) since the integral approaches zero, as * -» oo, by
Riemann's lemma.
We note that A N(x) = 0 if
and its first N — 1 derivatives vanish at a
(for instance, if 0 vanishes identically in some neighborhood of a), and
also that B ~(x) = 0 if
and its first N — 1 derivatives vanish at j8 (for
instance, if
vanishes in some neighborhood of j8).
We now turn to Fourier integrals whose integrands have singularities
of a simple type at one end point of the interval.
48 ASYMPTOTIC EXPANSIONS 2.8
If
(t) dt = -AN (x) + 0(x~N) as * ¦+ «
E) A „ (x) = ? ¦ e ' <$> n (a) * e ** .
n = o n'
If 4>(t) is N times continuously differentiable for a <. t <. f5;
^"\a)=(
for n = 0, 1, ... , N - 1; and 0 < /x < 1; tAera
F) /^"'(/S-tV
With A = 1, E) becomes the first equation C), and with p = 1, G)
becomes the second equation C), but the 0 tenns in D) and F) give less
information than the o term in B). Instead of 0(x~") we could write
o(x~"~^+t) in D), and o 0e"ff"M+l) in F), and these latter forms remain
valid, and pertinent, when A= 1 or fi = 1 respectively.
We shall prove D): the proof of F) is similar. In D) we apply 2.1 E)
with g{t)=i>(t\ * @- *&)(«X h(t) = h
a, and take a path of integration which lies entirely
in the quadrant 0 < arg(u - a) < tt/2. The integral converges absolutely,
— *_„_,(*) = &_„(«) B = 0, 1 N-l.
2.8 INTEGRALS 49
If we take the ray u = t + i a, a > 0, as the path of integration, we have
|u - a\ > t - a, \u- a\k~* <{t- a)^ for 0 < A ? 1, and hence
Substituting u - t + ia we have
(9) |fc_n_,@|<(*-a)^-1*-n-1
Also, from (8),
and, with u = a + ia, a> 0,
A0) A ,(^-(-1)"*
n!
We can now apply 2.1E). The contributions of jS to the s vanish since
(b)(j8) = 0. From A0) it follows that 2 s n = - A N, where 1N is given by
E). Moreover, from 2.1 G),
and by (9),
\RN\ <*'" ff |0°"W| U - af rft = 0(*-*).
This proves D).
Lastly we turn to Fourier integrals whose integrands have singular-
singularities at both ends of the interval.
If
(t)dt = B^U) - 4ff(x) + 0(x~N)
f
50 ASYMPTOTIC EXPANSIONS 2.8
A2)
da
and O(*~^) in A1) may be replaced by o (*"" ) if A = fi = 1.
This theorem contains the three previous results as special cases. To
prove A1), we shall use a device which is frequently employed for such
purposes, and is called a neutralizer by van der Corput. Let v(t) be an
infinitely differentiate function for a < t < j8, v(a) = 1, v (a) = 0,
n = 1, 2, ... ; v(n)(/8) = 0, n = 0, 1, 2, .... An example of such a function
is
du
/._! L-V
With such a neutralizer v(t) we write
A3) // «toU-a)k-' (/S - C)^-1
= /f e "' (t - a)X"' [v(t) Q8 - t)M"'
+ ff e ixt (j8 - t)M"' III - v(t).] (« -
The first integral on the right hand side is of the form D), with
(t)
replaced by [ ••» }: since all derivatives of this function vanish at t = j8,
and are equal to the corresponding derivatives of (j8 — t)^
(t) replaced by
{ ••> !; all derivatives of 1 ••• ! vanish at t = a, and are equal to the
corresponding derivatives of (t - a)
(t) at t = j8; and the expression
A2) for BN(?c) follows from G). This proves A1). If A = p = 1, then B)
shows that O(x~H) may be replaced by o (x"^).
2.9 INTEGRALS 51
All our results remain true if i is replaced by —i throughout the form-
formulas, and in (8) the integration from t to - i x is taken over a path which
lies in the quadrant - n/2 < arg(u - a) < 0. Thus we are able to describe
the behavior of our integrals as * -> - oo, and also the asymptotic behavior
of Fourier integrals with trigonometric kernels cos xt and sin xt.
3.9. The method of stationary phase
We now consider the integral
A) /(*)=/
in which x is a large positive variable and h (t) is a real function of the
real variable t. According to Stokes and Kelvin, the major contribution
to the value of the integral arises from the immediate vicinity of the end
points of the interval and from the vicinity of those points at which h (t)
is stationary, i.e., ft'(t)= 0; and in the first approximation the contri-
contribution of stationary points, if there are any, is more important then the
contribution of the end points.
Suppose that g is continuous and h is twice continuously differentiate,
let t be the only stationary point of h, a < r < j8, h ' (r) = 0 and h " (r) > 0.
In the assumptiou that the neighborhood of r will give the principal con-
contribution to the integral, we introduce a new variable of integration u by
the substitution h(t) — h(r) = u2 and obtain
where a, = [fc(r - () - ft(r)]H, u2 = [h(r + () - A(r)]H. Since only the
neighborhood of u = 0 matters, we may replace g (t) by g(r) and 2u/h' (t)
by [2/A"(r)]K which is the limit of 2u/h (t) as t ¦* r, so that
By the same argument we may extend the integration from -» to » and
finally obtain
r 2* >
B) f(x) ~ g (r) exp[ixh(r) + i tt/4] as * -> oo,
52 ASYMPTOTIC EXPANSIONS 2.9
which is virtually Kelvin's result. The contribution of the point of sta-
stationary phase, r, to the integral is more important than the contributions
of the end points because the latter can be shown, by integration by
parts, tobe0(x~')if h'(a)^O, ft'(j8)^0.
The principle of stationary phase has been applied to numerous
mathematical and physical problems but it appears to be difficult to
formulate it in a precise manner. Perhaps the best available theorem is
one given by Watson A920). Poincare' discussed the principle of station-
stationary phase applied to integrals involving analytic functions, and the
connection of his work with the method of steepest descents is indicated
in Copson A946). The method of stationary phase has also been dis-
discussed by Bijl A937), and in a much more general setting by van der
Corpat A934, 1936).
We shall use the discussion of Fourier integrals given in the pre-
preceding section to derive a theorem which may be regarded as a precise
version, and at the same time generalization, of B). A point r at which
h ' (r) = h"(r) = .« = h (" \r) = 0 and h U +l \r) { 0 will be called a station-
stationary point of order m, m = 1, 2, ... . In the neighborhood of such a point
h '(t) = (t - r)' h }(t), where ft,(r) ^ 0. The notion of a stationary point
may be generalized to fractional order. A point r will be called a station-
stationary point of (fractional) order fi if in some neighborhood of that point
h'(t)is either of the fonn|t- r|Mfc,(f) or of the formsgn(t- r) jt-r|Mft,(t),
where A,(r) ^ 0. Assuming that h (t) has at most a finite number of sta-
stationary points (of positive order) in the interval under consideration, we
may break up the integral in a finite number of integrals in each of which
h (t) is monotonic; and we may assume h (t) to be increasing. Thus, we
shall consider integrals of the form A) in which h (t) is strictly increas-
increasing when a < t < j8, and a and /S are either ordinary points (i.e., station-
stationary points of order zero), or stationary points (of positive order).
ifO < A, n < 1; g(t) is N times continuously differentiable for a
1, and h, (t) is positive and N times continuously differen-
differentiable for a < t < j8; then
D) f g(t)e ««')(»- a)X"' (fi - tr~* dt = B(x)-A(x)
2.9 INTEGRALS 53
E) A (x) ~ A N (k) and B (x) ~ BNM to N terms as *-»«.,
onrf 4ff(x) and B»(t) are given by A7) and B0) below.
In die proof of this theorem we shall use the abbreviation
F) g1(t) = g(t)(«-a)X-'(/S-t)'i-1,
and shall employ a neutralizer v{t\ which is infinitely differentiable for
a ?t < j8 and such that for some 17, 0 < 77 < (j8 - a)/2, v{t) = 1 when
a < * ? a + Vt and v^ = ° when i8 ~ V ? ' ^ Z3' We then 8et
G) -4 (*)=/"%
(8) B (x) = jJlv tl - v@1 g ,@ e **(t) rft.
To obtain an asymptotic expansion of A (%), we introduce a new vari-
variable of integration, u, in G) by
(9) uf>
From C) we have
-if- «)P /„' y^lfi-a-it- aiyV'1 h ,[a + (t - a) y] dy
where s = a + if - a)y. The last integral is an N + 1 times continuously
differentiable, positive, and increasing function of t, so that (9) repre-
represents an N + 1 times continuously differentiable mapping of the interval
a < * < /3 - 1? onto the interval 0 < u < u,, and the inverse mapping is
also N + 1 times continuously differentiable.
We now put v, (i») = v(t) and
54 ASYMPTOTIC EXPANSIONS 2.9
where g,(t) is given by F), and k (u) is N times continuously differen-
differentiate for 0 < u < u,. Then
A (*) = -e
>)dz
n I
the result of the integrations by parts is
A2) AN(x) = *?' (-1)" k M@)
_n_} @) ,
In A1), the path of integration is the ray arg(z - u) = rr/Bp) in the
complex plane. Clearly,
(_!)»+' /n + x\ fn-iU+A)!
A4) ?_„_,«>) = — T ( ) exp _ x
nip \ P J I 2p J
To estimate
0, we note that |«| < a and also that
x I U+|z-u|exp— ) rf^.
Since the real part of the last expression is certainly negative, we have
| exp(ixzO| < exp(-* \z - u\p)
2.9
and hence
A5) I*...
INTEGRALS
BXri
n!
Alternatively, the method of steepest descenlB may be applied to A1) to
show that
A6) ?_„_,
for large xup.
Substituting A4) and A5) in A2) and A3) we obtain
¦fe
rfu*
du.
This proves that A ~ ^4 „ to N terms when A < 1. When A » 1 and p = 1
the same result follows from sec. 2.8. Let A = 1 and p > 1 and choose 8
so that
du"
Since A6) gives
_H(u) = 0(x~N) nniformly in u when u > 8, we have for
sufficiently large x
duN
du<%e
so that R = o(x~"/p) also in this case. This proves the result for A.
56 ASYMPTOTIC EXPANSIONS 2.9
A similar result holds for B (x). In (8) we introduce a new variable of
integration by
A8) ^=A(/3)-A(t)
and put
A9) IM-g.to*1"'*^-,
dv
where g, if) is given by F). In the repeated integrals of v^ exp (—ixv^)
we integrate along the ray arg(z - v) = —ni/Ba), and obtain by a process
very similar to that used in the case of A that B ~ B „ to A' terms where
We conclude this sectiou by applying the general result to
/(*)- J* exp{ixt3)dt.
Here \= n= 1, p=3, a = 1, u = «, A;(u) = 1 and
by A7). Also v = 1 - t3, t = A - VI/3,
,
so that
which is the expansion obtained in sec. 2.7 by the method of steepest
descents. Note that x -> oo through positive values with our present method
while x could be complex in sec. 2.7.
INTEGRALS 57
Bijl, Jan, 1937: Toepassingen van der methode der stationnaire phase (Thesis).
Amsterdam.
Burkhardt, Heinrich, 1914: Munchen. Akad. S. Ber. 1- 11.
Copson, E.T., 1935: An introduction to the theory of functions of a complex
variable. Oxford
Copson, E.T., 1946: The asymptotic expansion of a function defined by a de-
definite integral or a contour integral. Admiralty Computing Service. London.
van der Corput, J.G., 1934: Composito Math. 1, 15-38.
van der Corput, J.G., 1936: Compositio Math. 3, 328-372.
van der Corput, J.G., 1948: Proc. Amst. Akad. Wet. 51, 650-658.
van der Corput, J.G., and Franklin, Joel, 1951: Proc. Amsterdam Akad. A. 54,
213-219.
Doetsch, Gustav, 1950: Handbuch der Laplace-Transformation. Birkhauser, Basel
Erdetyi, Arthur, 1947: Proc. Edinburgh Math, soc B) 8, 20-24.
Fulks, W.B-, 1951: Proc. Amer. Math. Soc. 2, 613-622.
Hsu, L.C., 1948 a: Amer. J. Math. 70, 698-708.
Hsu, L.C., 1948 b: Duke Math. J. 15, 623-632.
Hsu, L.C., 1949a: Sci. Rep. Nat. Tsing Hua Univ. Ser. A 5, 273-279.
Hsu, L.C., 1949b: Acad. Sinica Science Record 2, 339-345.
Hsu, L.C, 1951a: Chung Kuo K'o Hsueh (Chinese Science) 2, 149-155.
Hsu, L.C, 1951b: Bull. Calcutta Math. Soc. 43, 109-112.
Hsu, L.C, 1951c: Amer. J. Math. 73, 625-634.
Levi, Beppo, 1946: Publ. Inst. Mat. Univ. Nac. Litoral 6, 341-351.
Meijer, CS, 1933a: Math. Ann. 108, 321-359.
Meijer, CS., 1933b: Asymptotische Entwickelungen Besselscher, Hankelscher
und verwandter Funktionen. Groningeu (Thesis).
Perron, Oskar, 1917: Munchen. Akad. S. Ber. 191-220.
Rooiiey, P.G., 1953: Trans. Roy. Soc. Canada, Sect. III. 47, 29-34.
Thomseu, D.L., Jr., 1954: Proc. Amer. Math. Soc. 5, 526-532.
Watson, G.N., 1920: Proc. Cambridge Philos. Soc. 19, 49-55.
Widder, D.V., 1941: The Laplace transform. Princeton.
