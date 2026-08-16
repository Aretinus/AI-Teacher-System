# The energy theorem

50-5 The energy theorem

The energy in a wave is proportional to the square of its amplitude. For a wave
of complex shape, the energy in one period will be proportional to
R T
0 f 2(t) dt.
We can also relate this energy to the Fourier coeﬃcients. We write
Z T

f 2(t) dt =
Z T

∞
X

∞
X

n=1
bn sin nωt
2
dt.
(50.22)


a0 +

n=1
an cos nωt +


When we expand the square of the bracketed term we will get all possible cross
terms, such as a5 cos 5ωt·b7 cos 7ωt. We have shown above, however, [Eqs. (50.11)
and (50.12)] that the integrals of all such terms over one period is zero. We have
left only the square terms like a2
5 cos2 5ωt. The integral of any cosine squared or
sine squared over one period is equal to T/2, so we get
Z T

f 2(t) dt = Ta2
0 + T

2 (a2
1 + a2
2 + · · · + b2
1 + b2
2 + · · · )

∞
X

= Ta2
0 + T

n=1
(a2
n + b2
n).
(50.23)


This equation is called the “energy theorem,” and says that the total energy
in a wave is just the sum of the energies in all of the Fourier components. For
example, applying this theorem to the series (50.19), since [f(t)]2 = 1 we get

2 ·
 4

2
1 + 1

32 + 1

52 + 1

72 + · · ·

,

T = T

π

so we learn that the sum of the squares of the reciprocals of the odd integers is π2/8.
In a similar way, by ﬁrst obtaining the Fourier series for the function f(t) =
(t −T/2)2 and using the energy theorem, we can prove that 1 + 1/24 + 1/34 + · · ·
is π4/90, a result we needed in Chapter 45.

50-6 Nonlinear responses

Finally, in the theory of harmonics there is an important phenomenon which
should be remarked upon because of its practical importance—that of nonlinear

tan−1 x. Second, we expand the integrand in a series 1/(1 + x2) = 1 −x2 + x4 −x6 ± · · · We
integrate the series term by term (from zero to x) to obtain tan−1 x = x−x3/3+x5/5−x7/7±· · ·
Setting x = 1, we have the stated result, since tan−1 1 = π/4.

50-13
