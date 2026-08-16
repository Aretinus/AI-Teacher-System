# The Fourier coefficients

A somewhat diﬀerent result is obtained if we press G quietly and then sound
C′. The third harmonic of C′ will correspond to the fourth harmonic of G, so
only the fourth harmonic of G will be excited. We can hear (if we listen closely)
the sound of G′′, which is two octaves above the G we have pressed! It is easy to
think up many more combinations for this game.
We may remark in passing that the major scale can be deﬁned just by the
condition that the three major chords (F–A–C); (C–E–G); and (G–B–D) each
represent tone sequences with the frequency ratio (4 : 5 : 6). These ratios—plus
the fact that an octave (C–C′, B–B′, etc.) has the ratio 1 : 2—determine the
whole scale for the “ideal” case, or for what is called “just intonation.” Keyboard
instruments like the piano are not usually tuned in this manner, but a little
“fudging” is done so that the frequencies are approximately correct for all possible
starting tones. For this tuning, which is called “tempered,” the octave (still 1 : 2)
is divided into 12 equal intervals for which the frequency ratio is (2)1/12. A ﬁfth
no longer has the frequency ratio 3/2, but 27/12 = 1.499, which is apparently
close enough for most ears.
We have stated a rule for consonance in terms of the coincidence of harmonics.
Is this coincidence perhaps the reason that two notes are consonant? One worker
has claimed that two pure tones—tones carefully manufactured to be free of
harmonics—do not give the sensations of consonance or dissonance as the relative
frequencies are placed at or near the expected ratios. (Such experiments are
diﬃcult because it is diﬃcult to manufacture pure tones, for reasons that we
shall see later.) We cannot still be certain whether the ear is matching harmonics
or doing arithmetic when we decide that we like a sound.
50-4 The Fourier coeﬃcients
Let us return now to the idea that any note—that is, a periodic sound—can
be represented by a suitable combination of harmonics. We would like to show
how we can ﬁnd out what amount of each harmonic is required. It is, of course,
easy to compute f(t), using Eq. (50.2), if we are given all the coeﬃcients a and b.
The question now is, if we are given f(t) how can we know what the coeﬃcients
of the various harmonic terms should be? (It is easy to make a cake from a recipe;
but can we write down the recipe if we are given a cake?)
Fourier discovered that it was not really very diﬃcult. The term a0 is certainly
easy. We have already said that it is just the average value of f(t) over one period
(from t = 0 to t = T). We can easily see that this is indeed so. The average value
50-8of a sine or cosine function over one period is zero. Over two, or three, or any
whole number of periods, it is also zero. So the average value of all of the terms
on the right-hand side of Eq. (50.2) is zero, except for a0. (Recall that we must
choose ω = 2π/T.)
Now the average of a sum is the sum of the averages. So the average of f(t)
is just the average of a0. But a0 is a constant, so its average is just the same as
its value. Recalling the deﬁnition of an average, we have
Z T
a0 = 1
f(t) dt.
(50.3)
T
The other coeﬃcients are only a little more diﬃcult. To ﬁnd them we can
use a trick discovered by Fourier. Suppose we multiply both sides of Eq. (50.2)
by some harmonic function—say by cos 7ωt. We have then
f(t) · cos 7ωt = a0 · cos 7ωt
+ a1 cos ωt · cos 7ωt + b1 sin ωt · cos 7ωt
+ a2 cos 2ωt · cos 7ωt + b2 sin 2ωt · cos 7ωt
+ · · ·
+ · · ·
+ a7 cos 7ωt · cos 7ωt + b7 sin 7ωt · cos 7ωt
+ · · ·
+ · · ·
(50.4)
Now let us average both sides. The average of a0 cos 7ωt over the time T is
proportional to the average of a cosine over 7 whole periods. But that is just
zero. The average of almost all of the rest of the terms is also zero. Let us look
at the a1 term. We know, in general, that
cos A cos B = 1
2 cos (A + B) + 1
2 cos (A −B).
(50.5)
The a1 term becomes
2a1(cos 8ωt + cos 6ωt).
(50.6)
We thus have two cosine terms, one with 8 full periods in T and the other with 6.
They both average to zero. The average of the a1 term is therefore zero.
For the a2 term, we would ﬁnd a2 cos 9ωt and a2 cos 5ωt, each of which also
averages to zero. For the a9 term, we would ﬁnd cos 16ωt and cos (−2ωt). But
cos (−2ωt) is the same as cos 2ωt, so both of these have zero averages. It is clear
50-9that all of the a terms will have a zero average except one. And that one is the
a7 term. For this one we have
2a7(cos 14ωt + cos 0).
(50.7)
The cosine of zero is one, and its average, of course, is one. So we have the result
that the average of all of the a terms of Eq. (50.4) equals 1
2a7.
The b terms are even easier. When we multiply by any cosine term like cos nωt,
we can show by the same method that all of the b terms have the average value
zero.
We see that Fourier’s “trick” has acted like a sieve.
When we multiply
by cos 7ωt and average, all terms drop out except a7, and we ﬁnd that
Average [f(t) · cos 7ωt] = a7/2,
(50.8)
or
Z T
a7 = 2
f(t) · cos 7ωt dt.
(50.9)
T
We shall leave it for the reader to show that the coeﬃcient b7 can be obtained
by multiplying Eq. (50.2) by sin 7ωt and averaging both sides. The result is
Z T
b7 = 2
f(t) · sin 7ωt dt.
(50.10)
T
Now what is true for 7 we expect is true for any integer. So we can summarize
our proof and result in the following more elegant mathematical form. If m and n
are integers other than zero, and if ω = 2π/T, then
I.
Z T
sin nωt cos mωt dt = 0.
(50.11)
II.
Z T





cos nωt cos mωt dt =
(
if n ̸= m.
T/2
if n = m.
(50.12)
III.
Z T




sin nωt sin mωt dt =
∞
X
∞
X
IV.
f(t) = a0 +
n=1
an cos nωt +
n=1
bn sin nωt.
(50.13)
50-10Z T
V.
a0 = 1
f(t) dt.
(50.14)
T
Z T
an = 2
f(t) · cos nωt dt.
(50.15)
T
Z T
bn = 2
f(t) · sin nωt dt.
(50.16)
T
In earlier chapters it was convenient to use the exponential notation for
representing simple harmonic motion. Instead of cos ωt we used Re eiωt, the real
part of the exponential function. We have used cosine and sine functions in this
chapter because it made the derivations perhaps a little clearer. Our ﬁnal result
of Eq. (50.13) can, however, be written in the compact form
∞
X
n=0
ˆaneinωt,
(50.17)
f(t) = Re
where ˆan is the complex number an −ibn (with b0 = 0). If we wish to use the
same notation throughout, we can write also
Z T
ˆan = 2
f(t)e−inωt dt
(n ≥1).
(50.18)
T
We now know how to “analyze” a periodic wave into its harmonic components.
The procedure is called Fourier analysis, and the separate terms are called
Fourier components. We have not shown, however, that once we ﬁnd all of the
Fourier components and add them together, we do indeed get back our f(t). The
mathematicians have shown, for a wide class of functions, in fact for all that are
of interest to physicists, that if we can do the integrals we will get back f(t).
There is one minor exception. If the function f(t) is discontinuous, i.e., if it jumps
suddenly from one value to another, the Fourier sum will give a value at the
breakpoint halfway between the upper and lower values at the discontinuity. So
if we have the strange function f(t) = 0, 0 ≤t < t0, and f(t) = 1 for t0 ≤t ≤T,
the Fourier sum will give the right value everywhere except at t0, where it will
have the value 1
2 instead of 1. It is rather unphysical anyway to insist that a
function should be zero up to t0, but 1 right at t0. So perhaps we should make
the “rule” for physicists that any discontinuous function (which can only be a
simpliﬁcation of a real physical function) should be deﬁned with halfway values
50-11f (t)
+1
T/2
T
t
−1
(
+1
for 0 < t < T/2,
−1
for T/2 < t < T .
f (t) =
Fig. 50-3. Square-wave function.
at the discontinuities. Then any such function—with any ﬁnite number of such
jumps—as well as all other physically interesting functions, are given correctly
by the Fourier sum.
As an exercise, we suggest that the reader determine the Fourier series for the
function shown in Fig. 50-3. Since the function cannot be written in an explicit
algebraic form, you will not be able to do the integrals from zero to T in the
usual way. The integrals are easy, however, if we separate them into two parts:
the integral from zero to T/2 (over which f(t) = 1) and the integral from T/2
to T (over which f(t) = −1). The result should be
f(t) = 4
π (sin ωt + 1
3 sin 3ωt + 1
5 sin 5ωt + · · · ),
(50.19)
where ω = 2π/T. We thus ﬁnd that our square wave (with the particular phase
chosen) has only odd harmonics, and their amplitudes are in inverse proportion
to their frequencies.
Let us check that Eq. (50.19) does indeed give us back f(t) for some value
of t. Let us choose t = T/4, or ωt = π/2. We have
f(t) = 4
2 + 1
3 sin 3π
2 + 1
5 sin 5π

sin π
2 + · · ·

(50.20)
π

1 −1
3 + 1
5 −1
= 4
7 ± · · ·

.
(50.21)
π
The series* has the value π/4, and we ﬁnd that f(t) = 1.
* The series can be evaluated in the following way. First we remark that R x
0 [dx/(1 + x2)] =
50-1250-5 The energy theorem
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
