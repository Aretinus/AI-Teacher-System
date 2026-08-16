# Nonlinear responses

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

50-13eﬀects. In all the systems that we have been considering so far, we have supposed
that everything was linear, that the responses to forces, say the displacements or
the accelerations, were always proportional to the forces. Or that the currents in
the circuits were proportional to the voltages, and so on. We now wish to consider
cases where there is not a strict proportionality. We think, at the moment, of
some device in which the response, which we will call xout at the time t, is
determined by the input xin at the time t. For example, xin might be the force
and xout might be the displacement. Or xin might be the current and xout the
voltage. If the device is linear, we would have

xout(t) = Kxin(t),
(50.24)

where K is a constant independent of t and of xin. Suppose, however, that the
device is nearly, but not exactly, linear, so that we can write

xout(t) = K[xin(t) + ϵx2
in(t)],
(50.25)

where ϵ is small in comparison with unity. Such linear and nonlinear responses
are shown in the graphs of Fig. 50-4.

xout

xout

xin

xin

(a) LINEAR

(b) NONLINEAR

xout = Kxin

xout = K(xin + ϵx2
in)

Fig. 50-4. Linear and nonlinear responses.

Nonlinear responses have several important practical consequences. We shall
discuss some of them now. First we consider what happens if we apply a pure
tone at the input. We let xin = cos ωt. If we plot xout as a function of time we get
the solid curve shown in Fig. 50-5. The dashed curve gives, for comparison, the
response of a linear system. We see that the output is no longer a cosine function.
It is more peaked at the top and ﬂatter at the bottom. We say that the output
is distorted. We know, however, that such a wave is no longer a pure tone, that

50-14xout

NONLINEAR

t

LINEAR

Fig. 50-5. The response of a nonlinear device to the input cos ωt. A
linear response is shown for comparison.

it will have harmonics. We can ﬁnd what the harmonics are. Using xin = cos ωt
with Eq. (50.25), we have

xout(t) = K(cos ωt + ϵ cos2 ωt).
(50.26)

From the equality cos2 θ = 1

2(1 + cos 2θ), we have

2 + ϵ

xout(t) = K

cos ωt + ϵ

2 cos 2ωt

.
(50.27)

The output has not only a component at the fundamental frequency, that was
present at the input, but also has some of its second harmonic. There has also
appeared at the output a constant term K(ϵ/2), which corresponds to the shift
of the average value, shown in Fig. 50-5. The process of producing a shift of the
average value is called rectiﬁcation.
A nonlinear response will rectify and will produce harmonics of the frequencies
at its input.
Although the nonlinearity we assumed produced only second
harmonics, nonlinearities of higher order—those which have terms like x3
in and x4
in,
for example—will produce harmonics higher than the second.
Another eﬀect which results from a nonlinear response is modulation. If
our input function contains two (or more) pure tones, the output will have
not only their harmonics, but still other frequency components.
Let xin =
A cos ω1t + B cos ω2t, where now ω1 and ω2 are not intended to be in a harmonic
relation. In addition to the linear term (which is K times the input) we shall

50-15have a component in the output given by

xout = Kϵ(A cos ω1t + B cos ω2t)2
(50.28)

= Kϵ(A2 cos2 ω1t + B2 cos2 ω2t + 2AB cos ω1t cos ω2t).
(50.29)

The ﬁrst two terms in the parentheses of Eq. (50.29) are just those which gave
the constant terms and second harmonic terms we found above. The last term is
new.
We can look at this new “cross term” AB cos ω1t cos ω2t in two ways. First,
if the two frequencies are widely diﬀerent (for example, if ω1 is much greater
than ω2) we can consider that the cross term represents a cosine oscillation of
varying amplitude. That is, we can think of the factors in this way:

AB cos ω1t cos ω2t = C(t) cos ω1t,
(50.30)

with

C(t) = AB cos ω2t.
(50.31)

We say that the amplitude of cos ω1t is modulated with the frequency ω2.
Alternatively, we can write the cross term in another way:

AB cos ω1t cos ω2t = AB

[cos (ω1 + ω2)t + cos (ω1 −ω2)t].
(50.32)

We would now say that two new components have been produced, one at the
sum frequency (ω1 + ω2), another at the diﬀerence frequency (ω1 −ω2).
We have two diﬀerent, but equivalent, ways of looking at the same result.
In the special case that ω1 ≪ω2, we can relate these two diﬀerent views by
remarking that since (ω1 + ω2) and (ω1 −ω2) are near to each other we would
expect to observe beats between them. But these beats have just the eﬀect of
modulating the amplitude of the average frequency ω1 by one-half the diﬀerence
frequency 2ω2. We see, then, why the two descriptions are equivalent.
In summary, we have found that a nonlinear response produces several eﬀects:
rectiﬁcation, generation of harmonics, and modulation, or the generation of
components with sum and diﬀerence frequencies.
We should notice that all these eﬀects (Eq. 50.29) are proportional not only to
the nonlinearity coeﬃcient ϵ, but also to the product of two amplitudes—either
A2, B2, or AB. We expect these eﬀects to be much more important for strong
signals than for weak ones.

50-16The eﬀects we have been describing have many practical applications. First,
with regard to sound, it is believed that the ear is nonlinear. This is believed
to account for the fact that with loud sounds we have the sensation that we
hear harmonics and also sum and diﬀerence frequencies even if the sound waves
contain only pure tones.
The components which are used in sound-reproducing equipment—ampliﬁers,
loudspeakers, etc.—always have some nonlinearity. They produce distortions
in the sound—they generate harmonics, etc.—which were not present in the
original sound. These new components are heard by the ear and are apparently
objectionable. It is for this reason that “Hi-Fi” equipment is designed to be as
linear as possible. (Why the nonlinearities of the ear are not “objectionable” in
the same way, or how we even know that the nonlinearity is in the loudspeaker
rather than in the ear is not clear!)
Nonlinearities are quite necessary, and are, in fact, intentionally made large in
certain parts of radio transmitting and receiving equipment. In an am transmitter
the “voice” signal (with frequencies of some kilocycles per second) is combined
with the “carrier” signal (with a frequency of some megacycles per second) in a
nonlinear circuit called a modulator, to produce the modulated oscillation that
is transmitted. In the receiver, the components of the received signal are fed
to a nonlinear circuit which combines the sum and diﬀerence frequencies of the
modulated carrier to generate again the voice signal.
When we discussed the transmission of light, we assumed that the induced
oscillations of charges were proportional to the electric ﬁeld of the light—that the
response was linear. That is indeed a very good approximation. It is only within
the last few years that light sources have been devised (lasers) which produce an
intensity of light strong enough so that nonlinear eﬀects can be observed. It is
now possible to generate harmonics of light frequencies. When a strong red light
passes through a piece of glass, a little bit of blue light—second harmonic—comes
out!

50-1751

Waves

51-1 Bow waves

Although we have ﬁnished our quantitative analyses of waves, this added
chapter on the subject is intended to give some appreciation, qualitatively, for
various phenomena that are associated with waves, which are too complicated
to analyze in detail here. Since we have been dealing with waves for several
chapters, more properly the subject might be called “some of the more complex
phenomena associated with waves.”
The ﬁrst topic to be discussed concerns the eﬀects that are produced by
a source of waves which is moving faster than the wave velocity, or the phase
velocity. Let us ﬁrst consider waves that have a deﬁnite velocity, like sound and
light. If we have a source of sound which is moving faster than the speed of
sound, then something like this happens: Suppose at a given moment a sound
wave is generated from the source at point x1 in Fig. 51-1; then, in the next

θ
r1
r2
r3

x1
x2
x3
v

Fig. 51-1. The shock wave front lies on a cone with apex at the
source and half-angle θ = sin−1 cw/v.

51-1
