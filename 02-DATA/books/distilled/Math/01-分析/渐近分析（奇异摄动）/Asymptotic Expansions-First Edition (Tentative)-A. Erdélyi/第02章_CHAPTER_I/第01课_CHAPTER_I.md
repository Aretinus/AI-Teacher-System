# CHAPTER I

ASYMPTOTIC SERIES
1.1. O- symbols 5
1.2. Asymptotic sequences 8
1.3. Asymptotic expansions 11
1.4. Linear operations with asymptotic expansions 14
1.5. Other operations with asymptotic expansions 17
1.6. Asymptotic power series 20
1.7. Summation of asymptotic series 22
References 25

ASYMPTOTIC SERIES
1.1. 0- symbols
In general, the "independent variable" will be a real or complex
variable, but in this chapter x stands for a variable element of a topo-
logical f2-space (Hausdorff space) except when stated otherwise. The
variable x ranges over a set R, and xQ is a limit point of R (which may
or may not belong to R).
(x), ip(x), and similar symbols denote real- or
complex-valued numerical functions of a; defined when x is in R.
The following order relations involving the order symbols 0, o will be
used. We write cf> = O(,t/j) in R if there exists a constant (i.e., number
independent of x) A so that |
= O(i/r) as x -» xQ
if there exists a constant A and a neighborhood U of *0so that |
= o (tj/) as x -» xQ if for any
given e > 0 there exists a neighborhood Ue of xQ so that |
0 as a: -» a:0.
In the following examples x is a complex variable, and S^ is the
sector 0 < |*:| < oo, |arg x\ < n/2 — A. The reader should verify each
assertion, (i) e~x = 0(xa\ e~x - o(xa) as x -» oo in S^, A > 0, a arbitrary;
and neither of these order relations holds (for arbitrary a) when A <, 0.
(ii) e ~x = O(xa) as x -» oo in SQ provided that Re a > 0; this order relation
fails to hold when Re a < 0. (iii) e~* = O(xa) in S^ provided that either
A > 0 and Re a < 0 or A = 0 and Re a = 0.
If the functions involved in an order relation depend on parameters, in
general also the constant A, and the neighborhoods U, Ve involved in
the definitions will depend on the parameters. If A, U, U? may be chosen
to be independent of the parameters, the order relation is said to hold
uniformly in the parameters.
6 ASYMPTOTIC EXPANSIONS 1.1
Operations with order relations are governed by a number of simple
rules. We shall set out the more frequently used rules for the O-symbol:
the corresponding rules hold {or the o-symbol. In the following rules R
and xg are fixed, and the qualifying phrase "as x -» xQ" is omitted
throughout.
If 4> = O(i/f) and a > 0 then
If
i~ O(i/i J, i = 1, »., , k and the a; are constants, then
B) Sa.
This relation holds also for infinite series provided that
. ^
uniformly in i. In the case of infinite series, equation B) and similar
statements will be interpreted in the following manner. If ? \ai ifr ^ con-
converges then so does Io.^, and B) is true, and if 2 \ai iff J diverges
then there is nothing to state.
If
i= O(^i), i = 1, ... , k, the ai are constants, and |0{| ?x/j for
i = 1, ... , k and for all x common to R and to some neighborhood U0 of
xQ, then
C) 2a.?.= 0(^X
This relation holds for infinite series provided that 0 i = 0 (i/r {) uniformly
in i, and 2|aJ
i. If the number of the
i is finite, there is an A larger than all the
A it and a neighborhood U contained in all the U t, and
when x is common to R and u, and this proves B). If there is an infinite
number of 0^ then the existence of A and U follows from the uniformity,
in i, of the order relation. C) can be deduced from B) since under the
circumstances envisaged we may take U above to be contained in UQ and
then
1.1 ASYMPTOTIC SERIES
where At = A ? \a J is a finite constant. The proof of D) is similar to that
of B).
Order relations may be integrated either with respect to the inde-
independent variable orwith respect to parameters. For the sake of simplicity
we shall restrict ourselves to integrals with respect to real variables.
Extensions to complex and abstract variables are possible.
Let x be a real variable, let R be the interval a < x < b, and let
= O(xfj) as x -» b. If  and ifr are measurable in R then
E) f' tf (t) dt = CHf^ |
and |
(x, y) = O(i/r(xt y)\ uniformly
in y, as x -» xQ, If for each fixed x in R,
and i/f are measurable func-
functions of y in a < y < j8 then
F) J~a 0(x, y)dy = O(Ja \i/r(x, y)\dy) as a: -» «0 •
The proof is similar to that of E). On account of the uniformity of the
0-symbol, A and U are independent of y, \
0 imply |
= o(i[r) and a > 0 imply \4>\a= o(|^|a).
1.2. Asymptotic sequences
In this section R, x, xQ, (f> have the same meaning as in sec. 1.1. A
finite or infinite sequence of functions,
2, ... , will be abbreviated
as {
n is defined'in R and 4>n+\ ~ °^n^ as x "* xo
in R.
It the sequence is infinite and
n\
is said to be an asymptotic sequence uniformly in n. If the
n depend on
parameters and ^>n + 1 = °@n) uniformly in the parameters, then 1
ft''
(iv)
X real
-k
\x '
and X
¦1,
n+1
"f,
X -»
Re
x -»
>X
»;
oo in Sa>
Xn for each n;
for each n;
1.2 ASYMPTOTIC SERIES 9
(v) \ex x~ "I
and x and X either as in (iii) or as in (iv);
-k
(vi) \e~nx x "!, z- oo inSA,
and either A > 0 and the A are as in (iii) or A > 0 and the A are arbitrary:
(vii) \F(x)/r(x+ n)\, x - « in SA, A >-rr/2.
The reader should verify that each of the sequences (i) to (vii) is an
asymptotic sequence, and should justify the restrictions imposed upon A
and An in these examples. Why is (iii), with arbitrary Im An, not an asym-
asymptotic sequence for x -» oo in the complex plane (without restriction to
some SA)? The infinite sequence [F(x - n)/F(x + n)}, n = 1, 2, ... is
not an asymptotic sequence for x -» oo in any region including unbounded
portions of the real axis, but it is an asymptotic sequence for x -» oo in
any region whose closure lies entirely in the upper or the lower half-
plane. The finite sequence \T(x — n)/Y(x + n)\, n = 1, 2, ... , N, is an
asymptotic sequence for x -» oo in any R.
From given asymptotic sequences new such sequences may be ob-
obtained by processes which are largely based on the operational rules of
order symbols given in sec. 1.1. In describing some of these processes
we shall restrict ourselves to real variables although extensions to more
general variables are possible. In most cases xg and R will not be
mentioned: in such cases they are fixed.
Any subsequence of an asymptotic sequence is an asymptotic sequence.
The proof follows from 1.1 (8).
If\
n\ is an asymptotic sequence and a > 0, then 1 |
n = O(tjj ) and
i/r = 0@ ) for each n, are said to be equivalent. If \
I and \ijj I are-
equivalent sequences and \
I is an asymptotic sequence, then \>ftn\ is
also an asymptotic sequence. To prove thatli/f ! is asymptotic we remark
that
by 1.1(8).
If 10 ! and \xfj I are asymptotic sequences containing the same number
of functions, then !
n\, n = 1, ... , N, is an asymptotic sequence, an {, n - 1, ... , N;
i = 0, 1, ... , k < N is a set of positive constants, an+] t< an Jot all
n, i and
" i=o n
0 there exists a neighborhood Ue of xQ so that \cf> +,| < f|0J in
the common part of U? and R for r = n, n + 1, ... , n + h. We then have
n + I i=0 n + I. i n + i + 1 - {_ 0 n, > n + * n
The extension to infinite sums is contained in the following theorem.
Let \n\ be an asymptotic sequence uniformly in n,let an f, n = l, 2,...,
? « 0, 1, ... be a set of positive constants such that a +] ^< a ifor all
n, i and put
C) ij, = 2 a . |
all infinite
series C) converge in /?0> and \i/j \ is an asymptotic sequence for x -» xQ
in R , uniformly in n.
Proof: From the uniform asymptotic property of !
n(x, y)\ is an asymptotic sequence uniformly in y, a < y < /3, for
x -> xQ in K, and if all integrals
D) *„<*)«//!*„(*, y)|«*y
exist, then 1OJ is an asymptotic sequence. The proof follows from
1.1F). As in the case of C), it is sufficient to assume that all
(x, y)
are measurable functions of y, and that
n, possibly for a more restricted set RQ, then follows by
showing that /|
J is an asymptotic
sequence for x -» b, and if all integrals
E) *„(*)-J"/|*Bto|«fc
exist, then 1$ ! is an asymptotir sequence for x -» b. The proof follows
from 1.1 E), and it is again sufficient to assume that all
are measur-
measurable and
^ is integrable; the result then follows at least for some inter-
interval a t < x
n = x~"[a-tcos(xn)] n = l, 2,... .
Then \ ! is an asymptotic sequence for x -» oo on the real axis, but
!
••• » are always asymptotic
sequences for x -» xQ in R; f{?c), g (x), h(x), ... are numerical functions
of x defined in R; and o, b, c, ... are constants (i.e., independent of x).
The (formal) series 2 a 4>n(%) »'* said to be an asymptotic expan-
expansion to N terms of f(x) as x -» x Q if
A) /(*)- I a <*(*) +o
n= 1
12 ASYMPTOTIC EXPANSIONS 1.3
An asymptotic expansion to N terms will often be indicated as
B) /(*)~2 an
N) uniformly in the parameters. An asymptotic
expansion (/V = °o) involving certain parameters will be said to hold
uniformly in these parameters if/- 2 an
n" °^jf) unifonnlyintne
parameters for each sufficiently large~iM (but not necessarily uniformly
in M.).
The formal (finite, or infinite),series 2 a
n = x "we shall speak of an asymptotic series
of powers, and if
= x , of an asymptotic power series. For instance,
X(n - 1)! (—at)*" is the asymptotic power series expansion for x -» 0 in
S_w /2+e of the function f(pc) defined by equation C) of the Introduction.
Some authors speak of asymptotic power series when
0{x) an asym-
asymptotic power series.
From A) it follows that the coefficients in an asymptotic expansion
to N terms may be computed by means of the recurrence fonnnla
E) a = lim Uf(x)- "?' a 0 (*)]/
m +, = o(
m) ior m = 1, ... , N - 1. Now from E),
and if we replace m by m + 1 in E) we have
n^ i
Comparing the last two equations we find
If o>+] /? 0 then o>+] +o(l)^ 0 for a: in some neighborhood of xQ, and
we may divide by this factor to see that
n(x) is an asymptotic expansion to /V terms of fdc), then
the same formal series will also provide an asymptotic expansion to
any lesser number of terms of the same function. We also have the
somewhat sharper result
F) f(*)= ! o») + 0(^tl) x + x0, A/=l N-l
which is an immediate consequence of A).
With xQ and R fixed, E) shows that the asymptotic expansion to a
given number of terms of a given function is unique if the asymptotic
sequence is given. On the other hand, one and the same function may
have asymptotic expansions involving two different asymptotic se-
sequences, and the two sequences need not be equivalent in the sense of
* TTiis theorem was suggested by Dr. A.G. Mackie.
14 ASYMPTOTIC EXPANSIONS 1.3
sec. 1.2. For instance,
— -Kx-Dx-2"
1 + X
-3n
¦^2(-l)""' (xz -x + l)x
In this example all three asymptotic expansions are convergent series
when \x\ > 1. It often happens that some asymptotic expansions of a
function diverge while others converge. The transformation of divergent
asymptotic expansions into convergent ones is of great analytical, although
of very little computational interest. Transformations of asymptotic expan-
expansions into convergent expansions or else into expansions more suited to
numerical computation have been investigated among others by Airey
A937), van der Corput A951), Miller A952), van Wijngaarden A953),
Watson A912 b).
An asymptotic expansion does not determine its "sum", f{x), uniquely.
For instance, the functions A + x)~\ A + e~*)/(l + x), A + e~ + x)~*
all possess the asymptotic expansion 2(-l)"~' x~" as x -» oo in Sa>
A > 0. A given (finite or infinite) asymptotic sequence, \
n) as x -»xQ in R,
for all n occurring in the sequence. An asymptotic series represents a
class of asymptotically equal functions rather than a single function.
1.4. Linear operations with asymptotic expansions
If f ~ 2 a
, both to N terms, and if a, /3 are
constants, then
A) af(x) + Bg{x) ~ 2 (aa + Bb )
{x) to N terms, uniformly in i, i = 1, 2, ... , and if
the aMre constants for which 2 a converges absolutely and
converges for each n, then 2 aif Jix) converges in some neighborhood of
x0, and
C) F(x)= 2 a.f.(x)^l,An(f>n{x) to/Vterms.
Proof: We have
uniformly in i, and 2 |a4| < oo. By 1.1 C),
oo W
i = 1 n= 1 '
and the infinite series on the left is convergent at least in some neigh-
neighborhood of xQ. Adding 2 A n cf>n to both sides we have C) when N < oo.
It N = oo then hoth the assumptions and the conclusion hold for all
sufficiently large /V, and hence 2/4
is an asymptotic expansion of
FW.
More generally, we may extend A) to finite or infinite asymptotic
expansions.
Let \(j> !, n = 1, ... , N < oo and lip !, m = 1, ... , M <. oo be asymptotic
sequences for the same R, xQ; and let
N = 0{xfjm) for each m: if
/~ 2 a d> to N terms and for each n, d> ~ 2 b \b to M terms, then
D) f{x) ~ 2 cm 4ju{x) to M terms,
E) c.= 1 anbxn .
16 ASYMPTOTIC EXPANSIONS 1.4
Let l
M as n -» oo and
n = O(y^(n)): if f ~ 2 an
n,
n ~ 2 i>n ^
to M terms uniformly in n,TL an is absolutely convergent, and the infinite
series in E) is convergent for each m; then D) holds.
The proof for M, N finite is immediate, since then
2 o.B b if/ +o(xff ))+ o(tf, )
c w
.1 ¦ v'
by 1.1C)» If M = oo, then the same reasoning holds for any Af, and hence
2cf ^B is an asymptotic expansion (with M = oo) of /"(*). In the exten-
extension to N = oo we use the extension of 1.1 C) for infinite series.
We now turn to the integration of asymptotic expansions either with
respect to a real parameter y, or with respect to the variable x. In the
latter case x will be assumed to be a real variable.
If f(pc, y) ~ 2 on(y)
n(x) to N terms.
The proof is very similar to that given above for infinite series,
except that 1.1F) must be used instead of 1.1C). Some generalizations
of this theorem are obvious: the interval (a, /S) may be replaced by any
measurable set, of finite or infinite measure, and there is a similar result
for multiple integrals.
1.5 ASYMPTOTIC SERIES 17
Let x be a real variable, let R be the interval a < x < 6, let \
(x)\ be
an asymptotic sequence of positive functions for x ¦* b, and assume that
each of the integrals
(9) <&n{x) = J*
n{t)dt
exists. If f(x) ~ 2 an
n(x) to N terms as x-» b, and f(x is a measurable
function, then
A0) F{x) = f* f(i)dt
exists in some interval c
b.
n n
The proof follows from 1.1 E).
It is, in general, not permissible to differentiate asymptotic expan-
expansions either with respect to the variable x, or with respect to parameters.
Some general results on the differentiation of asymptotic expansions of
analytic functions of a complex variable exist and will be given in sec.
1.6.
1.5. Other operations with asymptotic expansions
Multiplication of asymptotic series does not in general lead to an
asymptotic series, for in the formal product of 2 an
n and 1 bn
n all
products
occur, and it is in general not possible to arrange the
system of functions l^
n\, m, n = 1, ... , /V so as to obtain an asym-
asymptotic sequence. There are, however, important special asymptotic #
sequences [ ! with the property that the products
either form an
asymptotic sequence, or else possess asymptotic expansions in terms of
an asymptotic sequence (which need not be l
n!, n = 1, ... , N, \ipmI, m = 1, ... , M, and \xk\, k = 1, ... , K be
three asymptotic sequences such that
N 0, 0{\
A)
n xffm ~2 cimk xt to K terms.
18 ASYMPTOTIC EXPANSIONS 1.5
If f^ 2 on
n to N terms and g ~ 2 bm ipm to M terms, then fg ~ 2 Ck yt
to K terms, where
Were X may be finite or infinite; N, M are finite. The result remains true
if M, or N, or both M and N are infinite, provided that each of the in-
infinite series (or double series) in B) converges.
The coefficients C k are those obtained upon multiplication of 2 a n
n
and 2 bm ifim and substitution of A) so that instead of B) we may say
"where the coefficients C k are obtained by formal substitution", and
this description will be used in similar cases throughout this section.
We first prove the theorem for finite N, M, K.
fg-[ ian
n + oD>v)][ i 6. ^. +o(^)]
1 1
n= 1
by A) and B). This proves the result. If A) holds to any number of terms
and (j>y ipK and
N i//f are O(x4), for any k, then the above computation
holds for any K, and the extension to K = °o holds. The extension to
infinite M, N can similarly be justified provided that the infinite series
defining Cj converge.
A sequence of functions, l
n = 1, ... , N will be called a multiple
cative asymptotic sequence if{(j>n] is an asymptotic sequence,
^ = 0A)
and 4>n 4>m ~ 2 c^
k to N terms, m, n = I, ... , N. In the case of a
multiplicative asymptotic sequence the former result on the multiplication
of asymptotic expansions can be extended considerably.
If\
J, n = 1, ... , N is a multiplicative asymptotic sequence,
/".~2o
to N terms i = 1, ... , k,
and P(z,, ... , rt)*s a polynomial in the k complex variables z |f ... , zk,
then F{x) = P(fJf ... , fk) possesses an asymptotic expansion 2 An
to N terms, and the coefficients An may be computed by formal substi~
tution.
1.5 ASYMPTOTIC SERIES 19
To prove this theorem we remark that in the case of a multiplicative
asymptotic sequence l
} ^>K = 0{(j>N), and we also have an
asymptotic expansion of
n
m to N terms. By our general theorem, it
follows from f ~ 2 an
n t0 N terms and g ~ 2 6„
n to N terms, and the coef-
coefficients cn may be computed by formal substitution. The evaluation of
any polynomial P(f]t ... , fk) can be reduced to a finite number of oper-
operations each of which involves either a linear combination, or the multi-
multiplication, of two asymptotic expansions. Each of these operations pre-
preserves the asymptotic character of the expansion, and in each operation
the resulting expansion may be computed by formal substitution. Hence
the theorem.
The result ohtained for polynomials can, under certain circumstances,
be extended to (convergent) power series, and even to asymptotic power
series. For the sake of simplicity, we shall restrict ourselves to the case
of a single variable z; there is a generalization to the case of several
variables.
Let l^n!> n = 1, ... , iV be a multiplicative asymptotic sequence such
that
N) for some positive integer M. If
f(z) ~ 2 cM r* to M terms as z ¦* 0 in the complex plane, and
z = z(x) ~ 2 a
to N terms as x-+ xQ in R,
then F(x) = f(z{pc)) possesses an asymptotic expansion 2 An
nto N
terms as x ¦* xQ, and the coefficients An may be computed by formal
substitution.
Proof: From the assumptions it follows that r* possesses an asymptotic
expansion 2 b m
n to iV terms, and also that 2* = 0(
N\ Hence we can
apply the theorem in sec. 1.4 on the substitution of an asymptotic expan- '
sion into an asymptotic expansion.
An important particular case concerns functions /"(*) which possess
asymptotic expansions of the form
C) f{x)=c+ i an
n + o{
Nl
n = 1
The theorem shows that [f(x)] ' also possesses an asymptotic expan-
expansion of this form provided that c / 0 and \
\ satisfies the assumptions
of the theorem. In other words, asymptotic expansions of the form C) may
be divided. This enables us to extend the last theorem but one from
polynomials to rational functions.
20 ASYMPTOTIC EXPANSIONS 1.5
J,n = l,...,N is a multiplicative asymptotic sequence,
1=o{l),
|,|* = 0{ff>N)(or some U, /{~2 "n.i'f'n *° N teTms> » - 1 t — i K and
P(z,, ... , zk)i$ a rational function in the k complex variables z() ... , z v
such that the denominator is different from zero when z=z2=«" = z.=0;
then F{x)=P(f}, ... , fk) possesses an asymptotic expansion Ao + 2 A. n
n
to N terms, and the coefficients A n may be computed by formal substi-
substitution.
Under the same conditions we also have an asymptotic expansion for
g(F (x)) if g{?) is a function of the complex variable ? which is regular
in some neighborhood of ?0 ¦= P @, ... ,0). In this manner we may justify
the asymptotic expansions of expressions such as exp[P(/1( ... , f,)].
1.6 Asymptotic power series
The sequence of functions {x~Ai, n = 0, 1, 2, ... or ra = 1, 2, ... is a
multiplicative asymptotic sequence f or x ¦* <» in any region of the complex
plane which does not include the origin. This sequence satisfies all the
conditions imposed upon asymptotic sequences in the two preceding
sections, except that in some of the theorems of sec. 1.5, n = 0 must be
excluded. Besides, this system has some special properties.
The asymptotic expansion
a a
A) /(*)~on+—- +—§•+••• to N terms as x -» «o
° x x*
is an asymptotic power series. From the results of sections 1.5 and 1.6
it follows that an asymptotic power series expansion may be multiplied
by a constant, and that two such expansions may be added or multiplied,
and also divided provided that oQ 4 0 in the expansion in the denominator.
Asymptotic power series may be substituted in finite linear combinations,
in polynomials, in rational functions provided that the denominator does
not vanish as x -* oo, and in asymptotic or convergent power series
2 c z", z ¦* 0, provided that in the expansion A) of z = f(x) we have
aQ m 0. Substitution of A) in other types of convergent or asymptotic series
is valid under the conditions set out in sec. 1.5. In all these cases the
coefficients of the new expansion are obtained by formal substitution
and a rearrangement of terms. An asymptotic power series expansion A)
which is valid uniformly in a parameter may be integrated with respect
to this parameter. Lastly, if A) holds, then /(*) -aQ- a/x is inte-
grable, and
1.6 ASYMPTOTIC SERIES 21
B) F{x) = f'
—- + —^ + —t-+ ••• to N - 2 terms as x ¦* oo.
2z 33
^ + t
2xz 3*3
A simple corollary of this last result is the following theorem on differ-
differentiation. If f {x) in A) is differentiable and if f'(x)possessesanasymptotic
power series expansion, then
a 2a 3o
C) /¦'(*) " \ r-2- -2--.., to N - 1 terms as x -» «,.
x x x
In the case of analytic functions a more definite statement can be
made in that it is not necessary to assume that fXx) possesses an
asymptotic power series expansion. Let R be the region
|*| > a, a< arg.* < /3,
let o j > o, a < a^ < /S, < /S, and let R , be the region
|*| >«„ a,
0 so that for each a; in/?,, the
circle with center* and radius e|*| is in R, and we may take this circle
as the contour of integration in D). Along the circle, r = * + exe **, and
0 < t < 2 n, so that D) becomes
E) f'bc)
22 ASYMPTOTIC EXPANSIONS 1.6
Now, e **/'[(* + f e '*)] possesses an asymptotic power series expansion
uniformly in t, and this may be integrated with respect to t, showing that
f\x) possesses an asymptotic power series expansion which turns out to
he C).
Asymptotic power series expansions are usually valid in sectorial
regions, and analytic functions possess different asymptotic expansions
in different sectors (Stokes' phenomenon). That something like this must
happen, except in the case of an analytic function which is regular at
infinity, follows from the following theorem.
If ffa) is single'Valued and regular when \x\ > a, and A) holds for all
values of arg x, then the power series in A) converges for sufficiently
large values of \x\, and its sum if f(x\ To prove this, we set x
\
and g@) = o0, g@ - f(l/a 0 < |f | < \af\ Then g(f) is a single-
0 |
valued continuous function in |f | < |a|~', and is regular except possibly
at f = 0. However, at f « 0, g has certainly no pole, nor an essential
singularity, since it is bounded in any neighborhood of f = 0. Thus,
g(f) is regular at if = 0 and possesses a Maclaurin expansion. From the
uniqueness theorem on asymptotic expansions it follows that A), with
f, must be the Maclaurin expansion.
1.7. Summation of asymptotic series
It has been pointed out in sec. 1.3 that an asymptotic sequence
\
n) for all n. Asymptotically equal functions possess identical asym-
asymptotic expansions, and given an asymptotic expansion / ~ 2 a n
n, we
may define the class of all functions which are asymptotically equal to f
as the sum of the asymptotic series 2 an
n.
We shall conclude this chapter by proving that every asymptotic
series possesses a sum. Results of this nature have been proved for
asymptotic power series by Borel and Carleman A926), for series domin-
dominated by an asymptotic series of powers by van der Corput A954 b), and
for asymptotic series of analytic functions by Carleman A926). The
proof given below is an adaptation of van der Corput's proof.
An asymptotic series is a formal finite or infinite series SoB 41 nM
where {<^>nl is an asymptotic sequence and the an are constants. Since
any subsequence of an asymptotic sequence is also such a sequence,
we may assume that an ? 0 for each n. The asymptotic sum of 2 an
n is
a class of asymptotically equal functions, and we shall demonstrate
the existence of the asymptotic sum by constructing a member of this
1 - Tf v - ^ i« a finite asymptotic series, then the sum
1.7 ASYMPTOTIC SERIES 23
in the ordinary sense may be taken as a representative of the asymptotic
sum. It is sufficient, then, to give the proof for an infinite asymptotic
series 2 a n
n as x ¦* xQ, fix N and let a; be in the
common part of V« + ) and R. Then /*„(*) = 1 f°r n = 1, ... , /V, and by A)
Thus it is seen that 2 on ^>n is an asymptotic expansion to any number
of terms of f defined by B). The asymptotic sum of 2 <* n
n is the class
of all functions asymptotically equal to /.
24 ASYMPTOTIC EXPANSIONS 1.7
The Vn may be constructed in such a manner that xQ is the only point
common to all the U n in which case the series in B) terminates for all
x ? xQ, If all the
n are continuous in R, also f will be continuous in R.
If x is a real variable, or a point in n-dimensional Euclidean space, the
Hn{x) may be chosen as infinitely differentiate functions, and if all the
n are k times continuously differentiate (ft <
), then /"(*) will also be
k times continuously differentiate. Carleman has proved that for certain
analytic functions
of a complex variable x, the asymptotic sum con-
contains a function which is an analytic function of x.
In general there is no way of ascribing a unique asymptotic sum to
an asymptotic series, but under rather special circumstances it may
happen that under more precise assumptions on the coefficients of the
asymptotic series, and under certain restrictions on the functions f(x),
a unique sum may be ohtained; and frequently in such cases the asym-
asymptotic series, though divergent, is in some sense summable to its asym-
asymptotic sum. Such theorems for asymptotic power series summed by
analytic functions regular in some sectorial region were obtained by
Watson A912a) and Nevanlinna A916).
ASYMPTOTIC SERIES 25
Airey, J.R., 1937: Philos. Mag. G) 24, 521-552.
Borel, Emile, 1895: Ann. Sci. Ecole Norm. Sup. C) 12, 9-55.
Borel, Emile, 1899: Ann. Sci. Ecole Norm. Sup. C) 16, 8-136.
Borel, Emile, 1928: Lecons sur les series divergentes, second ed. Paris.
Bromwich, T.J. I'A., 1926: Infinite series, second ed., McMillan, especially
sec. 113ff.
Carleman, T.G.T., 1926: Les fonctions quasi-analytiques. Paris, especially
asp. V.
van der Cor put, J.G., 1951: Asymptotic expansions, Parts I and II. National
Bureau of Standards (Working Paper).
van der Corput, J.C., 1952: Asymptotic expansions, Part III. National Buresu of
Stsndards (Working Paper).
van der Corput, J.G., 1954a: Nederl. Akad. Wetensch., Amsterdam, Proc. 57,
206-217.
van der Corput, J.G., 1954b: Asymptotic. Expansions I. Fundamental theorems
ofAsymptotic s. Department of Mathematics, University of Californis, Berkeley.
Knopp, Konrad, 1928: Theory and application of infinite series, especially Chap.
XIV.
Miller, J.C.P., 1952: Proc. Cambridge Philos. Soc. 48, 243-254.
Nevanlinns, F.E.H., 1916: Ann. Acad. Sci. Fennicae (A) 12, no. 3, 81 pp.
Watson, G Ji., 1912a: Philos. Trans. Royal Soc. A, 211, 279-313.
Watson, G.N., 1912b: Rend. Circ. Mat. Palermo 34, 41-88.
van Wijngaarden, A., 1953: Nederl. Akad. Wetensch., Amsterdam, Proc, 56, 522-
543.
CHAPTER n
INTEGRALS
There are several methods for obtaining asymptotic expansions of
functions defined by definite integrals. Copson A946) gives a survey of
these; and further material is contained in van der Corput's Lectures and
in the references given at the end of this chapter.
2.1. Integration by parts
Asymptotic expansions may frequently be obtained by repeated inte-
integrations by parts. As an example, let us consider the function /(*) defined
for — n < arg x < n by the integral
A) /(*)
Integrating by parts repeatedly,
it
A + xtK
2 (-1)" nlx"+ (-1)" (m + 1)!* / ¦' dt
i-o / A + *t)"+2
V n
2.1 INTEGRALS 27
The last integral may be proved to be 0 A) as x -> 0 in S^, A > — jt/2, so
that we have obtained a new derivation of Euler's asymptotic expansion
discussed in the Introduction.
The field of application of this method is somewhat limited, and it is
not at all easy to formulate precise theorems of sufficient generality. In
what follows we shall describe some results which seem to be basic.
For any function /(t), let f ^ denote the m-th derivative, and f_m the
m-th repeated integral, so that
0) W. '.=V~ m=l,2, ...
m = 1, 2, ....
Note that f_m contains m constants (one from each integration) which we
suppose to have been chosen in some suitable manner. The formula
E) J/gU)AU)rf*=nXoSn+Kff,
F) sn^(-l)"[gn^)h_n_^)- gn(a)k_n_x(a)]
is obtained by repeated integrations by parts. If (a, j3) is a finite interval,
E) is valid provided that g is N times continuously differentiate and h
is integrable; if (a, C) is an infinite interval then all the integrals in-
involved, and also the limits of gn(t) ^_n_, (t)as t -> a, /3, must be assumed
to exist.
If g is N + 1 times continuously differentiate, a further integration
by parts shows that
(8) «w = sw+«w + ,
nnd in certain cases it is possible to use this relation to compare the
"remainder", RN, with the first "neglected term" s^.
28 ASYMPTOTIC EXPANSIONS 2.1
// g and h are real, and gN h_N and gw+) h_/f_1 have constant and
equal signs for a ? t ? /3, then RN has the same sign as s , and \RN\
< \sN\- The proof follows from (8) on noting that in this case R and
/?„.,., have opposite signs, and hence RN aud sN must have the same
sign, and
// g is real, \h_H_t\ is an increasing function of t, and gN, w+)
have constant and equal signs for a < ( < /3, or else if g is real, \h_N_A
is a decreasing function of t, and gN, gff+1 have constant and opposite
signs for a < t < /3, then \R J < 2 \s \.
We shall prove this result when |A_„ _ 1) is an increasing function of (
and gw>0»gw+,><>• Then
and hence |/?ff+1| < |«^|. From (8) we then have the desired result. If
gN < 0 and gH + ) ? 0, replace g by -g. The result for decreasing |ft_w_,|
follows on replacing x by -*.
As an application of these results, let us consider/(x) as defined by
A). If * > 0, put g(t) = A + xt)~\ h (t) = e~\ h_m (t) = (- 1)" e~*. In this
case gm A_B ^ 0 for all t ? 0, and hence 0 < (-1)" R m ? (-1)" s_. If*
is complex our results do not apply. However, if in A) we replace ( by
t/x and accordingly set g = A + t)~\ h = *"' exp(-*A), and then let*
become complex, with Re x > 0, then gm and gm+, are of constant
and opposite sign, and |A_a_,| is a decreasing function of t, for t >0,
and hence \R \ < 2\s |. (Actually, in this case it is easy to prove from
G)that|ftJ<|J.|.)"
Let us suppose now that the integrand in E), and hence also sn, R^,
depend on a variable x. If Isj is an asymptotic sequence, and if in
addition we are able to prove R^ • #(*„) by one of the above results,
or in some other manner, then E) provides an asymptotic expansion of
the integral to N terms. For instance, in the case of B), [x"\ is an
asymptotic sequence for * -> 0; we have proved \RN\ <.2|sw| for any N
and Re x > 0, and hence B) is an asymptotic expansion of fix) as defined
in Sfy A > 0. [Actually, we proved in the Introduction, and could prove
from the last integral in B), that the asymptotic expansion holds in the
2.2 INTEGRALS 29
more extended region S^, A > — tt/2.]
An asymptotic sequence [s J often occurs if h(t) = k (xt). Denoting by
&_„ (») the m-th repeated integral of k (u) with respect to u, we obtain
from E),
(9) ff
-«>)*_„_,(«*)]
If the k_n(u) are bounded, and the gn(/3) &_n_, (/3z) - gn(a) k_n_}(ax)
are bounded away from zero, and if /?ff can be estimated as above, then
(9) is an asymptotic expansion as x -> o°, the region of x being determined
by the estimate of RN. The apparently more general case h(t) = k [x
(t) is monotonic, and introducing
If g and
(t) is integrable over any
interval 0
. A function
wiM be sa'd to belong to L (*0)
if the integral in A) exists, in the sense mentioned, for x = xQ, It is
known (Widder, 1941, Chapter II) that for a function  in L(xQ), Q{
}
exists, and represents an analytic function of x, in the half-plane
Re(x - *0) > 0. In particular, if
(t) is integrable over any interval
0 <1
, and
(t) = O(ea*) for some constant a, as t -» «, then
G!coexists as an (absolutely convergent) infinite integral, and repre-
represents an analytic function of x, in the half-plane Re (x - o) > 0.
Under certain circumstances, the asymptotic behavior of /(*) as x -> oo
may be investigated by integrations by parts. //
0. To prove this, let
Re(x-x0)>0, and let
C)
The second integral exists and may be integrated by parts to give
I
*(*)-/.* e'*0"
(u)du
is a bounded function, say \tf/\
a, so that
i4 e *" ^o'a
2.2 INTEGRALS 31
+ ia-*oain S a, A > 0. In the first integral use 2.1 E) with
h_n -(-«)-•«-»
Here
^ \t)\ < B for 0 < t % a,
\RH\ <, B \x\~" p ? B 1*1"*"' cosec A = 0(x"*"'),
uniformly in arg *, as * -» <» in S^, A > 0. The proof is completed by
noting that O(e~pa) ¦ o(x N), uniformly in arg x, as x -» eo in Sa, A > 0.
A considerable extension of the last theorem may be based on the
following LEMMA. Let
0,
/ = 6 1^1, g - 6 1^!¦ If eap g(p) -» oo os p -» oo /or cocA o > 0, oik/ »/
^(«) = o(^(t)) as ( -. 0, thenf(x) = o(g(p)X uniformly in arg *, as
X = p + lO--»ooM» S^, A > 0.
Proof: Given c > 0, there exists an a > 0 so that |0| ^ ttfi for 0
0 for t > 0, andgn= Gl^l.
If '"A,,' *s on asymptotic sequence for t -» 0, and c "^ gn(p) -» °° «w p -»<»
/or each a > 0 and eac/i re, tAen tgn(p)! is an asymptotic sequence for
p -» +oo ; are
0,
then
/(p)~ S an gn(p) to/V terms as p-»+«>.
// in addition for each n - 1, ... , N, gn(p)/gn(«) »'« bounded in S^ for
sufficiently large \x\, then also \g (x)\ is an asymptotic sequence, and
f(x) ~ 2 a n g b(z) to N terms, uniformly in arg x, as x -*
in S^, A > 0.
Proof: From the lemma we have gn+}(p) = o(gj,p)\ and hence lgn(p)l
is an asymptotic sequence for p -» oo . To prove the asymptotic expansion
for p -> oo, replace ^> by
and 0 by i/r^, in the lemma. When *-»<» in S^, we have from the lemma and
the additional assumption on g {x) that
and hence lgn(*)l is an asymptotic sequence for x -> oo in Sa. The proof
of the asymptotic expansion is the same as in the previous case.
The most important particular case of our general theorem is
k -1
\/fn= t " 0< A, <••.
0. ffe theu obtain the following theorem on asymptotic
series of powers.
2.2 INTEGRALS 33
Let 0 < A t < X2 <•••,//¦
oo in Sfa, A > 0,
Other notable examples of asymptotic sequences to which the general
theorem applies are
D)
E) if,
F)
\li m I 2 sinh — I
* (* + 1) ••» (* + re - 1)
(re-1I
x(x- 1) ••• ix - re + 1)
Bre - 2)!
(a; - re + 1)(* - re + 2) •••(* + »- 1)
In the case of asymptotic power series or in the case of D), N may be
finite or infinite, in the cases of E) and F) N must be finite.
The result obtained by integrations by parts is a particular case of
of the above theorem for asymptotic series of powers. If
ti) is N times
continuously differentiate for 0 < t < a, then it can be proved by the
mean value theorem of differential calculus that 0(t) ~ 2 0
~ 2 an \l/n as-1 -* 0 in S g, then /~2<»ngnasa;-»
in
Nowhere A>0- n/2. We shall formulate a precise theorem for asymptotic
Hcries of powers.
34 ASYMPTOTIC EXPANSIONS 2.2
If 4>(t) is a regular function of t in Sg,
= O(eat), uniformly in arg t,
for some a, as t -* °° in Sg,
X -1
^~Jan( " to N terms, uniformly in arg t, as t -» 0 in Sa,
0 < A.
eo in S^» A > 6 - n/2.
The particular case of this result in which the A form an arithmetic
progression, and
is represented by a convergent infinite series
for sufficiently small \t\ in Sa is known as Watson's lemma; it is suffic-
sufficient for many applications.
Throughout this section we investigated the behavior of A) for large x.
Similar methods may be used for the investigation of f(x) as * -» xQ. For
the basic lemma see Erde'lyi A947), and for some of the most important
results see Doetsch A950) Chapter 13 and Vidder A941) Chapter V.
2.3. Critical points
We have seen in the last two sections that under certain circum-
circumstances the asymptotic behavior of integrals is determined by the beha-
behavior of the integrands at certain distinguished points, the end-points of
the interval in the cases considered in the preceding sections. Such
distinguished points have been called critical points by van der Corput
A948). There is no general theory of critical points but a few types of
such points, and the methods adapted to deal with them may be described
as follows.
2.3 INTEGRALS 35
First let us consider an integral of the form
A) ffi g{t) e*<*>&,
a
where x is a large positive parameter and h (t) is real. If h (t) has a
maximum at t = r, and h (t) < h (r) when t ? r, then for large x, the modu -
lus of the integrand will have a sharp maximum at a point very near r, and
most of the contribution to the integral will arise from the immediate
vicinity of this maximum. The integral can be evaluated approximately by
expanding both g and h in the neighborhood of t = r. This is the central
idea of Laplace's method (sec. 2.4). We have encountered such a case in
sec. 2.2 where h{t) = -t, 0 < t < oo, and h (t) has a maximum at t = 0.
Accordingly, we evaluated Laplace integrals asymptotically by expand-
expanding g if) for small values of t.
If x and h (t) are complex, and g (t) and h (t) are analytic functions of t,
then it is often possible to deform the path of integration so that it
passes through one or several points at which h ' (t) = 0. If r is such a
point, it is a critical point; it is possible to determine that part of the
path of integration which passes through r in such a manner that
x[h(t) - h(r)] is real along the path, and the integral can then be evalu-
evaluated by an adaptation of Laplace's method.This is Riemann's/netAorf of
steepest descents (sec. 2.5).
Next let us turn to integrals of the form
B) ffi
a
where we again assume that x is a large positive parameter, and k {t)
is a real function. In general, the rapid oscillations of exp[ixk(t)] will
tend to cancel large contributions to the integral, but this cancellation
will not occur at the end-points, or at the stationary points of k (t). If
h (t) has no stationary points in the interval a < t < /3, integration by
parts (sec. 2.1) will in general give a good approximation. Stokes'
method of stationary phase (sec. 2.9) appraises the contribution of a
stationary point, r, to the integral by expanding g and h in the neighbor-
neighborhood of this point.
36 ASYMPTOTIC EXPANSIONS 2.3
The method of stationary phase has been extended by van der Corput
A936) to integrals of the form A) where xh it) may be complex (instead
of being imaginary, as in the method of stationary phase). According
to van der Corput, the critical points in this case are those points, r,
at which x h'(t) [h"{t)] is real, while the imaginary part of this
function changes its sign when t passes through r. (In the case of B),
h = ik, k is real, and the only points at which
x%h'{Jitt)-% = {ix)'Ak' (*".)"*
is real are the stationary points of k.)
2.4. Laplace's method
In the integral
A) fW-j
a
let h (t) be a real function of the real variable t, while g (t) may be real
or complex, and let x be a large positive variable. According to Laplace,
the major contribution to the valne of the integral arises from the immed-
immediate vicinity of those points of the interval o < t ? /3 at which h (t)
assumes its largest value. If h (t) has a finite number of maxima, we may
break up the integral in a finite number of integrals so that in each
integral h (t) reaches its maximum at one of the end-points and at no
other point. Accordingly, we shall assume that h (f) in A) reaches its
maximum at t = a, and that hit) < h (a) for a < t < j8.
Assuming g continuous and h twice continuously differentiate,
h' (a) = 0, h" (a) < 0, Laplace introduced a new variable u by the sub-
substitution h(a) - h(t) = uz. h' (t) will be negative in a < t < a + 17 for
some sufficiently small 17. As x -> 00,
- r
•'o
2.
du
where V = [h (a) - h (a + 17)] > 0. Since only the neighborhood of u = 0
matters, we may replace g(t) approximately by g{a\ and u/h\t) by
- [-2A"(a)]~!<, which is the limit of u/h '({) as t ¦* a, and obtain
2.4 INTEGRALS 37
By the same argument, we may extend the integration to u = oo and finally
obtain Laplace's result
B)
*¦»-««•¦"" [HnffI
Later, Burkhardt A914) and Perron A917) showed that the same result
can be proved by expanding g and h in the neighborhood of a. Copson
A946) reproduces a simple proof of Pdlya and Szeg6, and Widder A941,
