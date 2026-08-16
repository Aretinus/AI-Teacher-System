# Equipartition and the quantum oscillator

41-3 Equipartition and the quantum oscillator

The diﬃculty above was another part of the continual problem of classical
physics, which started with the diﬃculty of the speciﬁc heat of gases, and now has
been focused on the distribution of light in a blackbody. Now, of course, at the
time that theoreticians studied this thing, there were also many measurements
of the actual curve. And it turned out that the correct curve looked like the
dashed curves in Fig. 41-4. That is, the x-rays were not there. If we lower the
temperature, the whole curve goes down in proportion to T, according to the
classical theory, but the observed curve also cuts oﬀsooner at a lower temperature.
Thus the low-frequency end of the curve is right, but the high-frequency end
is wrong. Why? When Sir James Jeans was worrying about the speciﬁc heats
of gases, he noted that motions which have high frequency are “frozen out” as
the temperature goes too low. That is, if the temperature is too low, if the
frequency is too high, the oscillators do not have kT of energy on the average.
Now recall how our derivation of (41.13) worked: It all depends on the energy of
an oscillator at thermal equilibrium. What the kT of (41.5) was, and what the
same kT in (41.13) is, is the mean energy of a harmonic oscillator of frequency ω
at temperature T. Classically, this is kT, but experimentally, no!—not when the
temperature is too low or the oscillator frequency is too high. And so the reason
that the curve falls oﬀis the same reason that the speciﬁc heats of gases fail.
It is easier to study the blackbody curve than it is the speciﬁc heats of gases,
which are so complicated, therefore our attention is focused on determining the
true blackbody curve, because this curve is a curve which correctly tells us, at
every frequency, what the average energy of harmonic oscillators actually is as a
function of temperature.
Planck studied this curve. He ﬁrst determined the answer empirically, by
ﬁtting the observed curve with a nice function that ﬁtted very well. Thus he
had an empirical formula for the average energy of a harmonic oscillator as a
function of frequency. In other words, he had the right formula instead of kT,
and then by ﬁddling around he found a simple derivation for it which involved a
very peculiar assumption. That assumption was that the harmonic oscillator can
take up energies only ℏω at a time. The idea that they can have any energy at
all is false. Of course, that was the beginning of the end of classical mechanics.
The very ﬁrst correctly determined quantum-mechanical formula will now be
derived. Suppose that the permitted energy levels of a harmonic oscillator were
equally spaced at ℏω0 apart, so that the oscillator could take on only these diﬀerent

41-11N4

P4 = A exp(−4¯hω/kt)

E4 = 4¯hω

N3

P3 = A exp(−3¯hω/kt)

E3 = 3¯hω

N2

P2 = A exp(−2¯hω/kt)

E2 = 2¯hω

N1

P1 = A exp( −¯hω/kt)

E1 =
¯hω

N0

E0 =

P0 = A

Fig. 41-5.
The energy levels of a harmonic oscillator are equally
spaced: En = nℏω.

energies (Fig. 41-5). Planck made a somewhat more complicated argument than
the one that is being given here, because that was the very beginning of quantum
mechanics and he had to prove some things. But we are going to take it as a fact
(which he demonstrated in this case) that the probability of occupying a level of
energy E is P(E) = αe−E/kT . If we go along with that, we will obtain the right
result.
Suppose now that we have a lot of oscillators, and each is a vibrator of
frequency ω0. Some of these vibrators will be in the bottom quantum state,
some will be in the next one, and so forth. What we would like to know is the
average energy of all these oscillators. To ﬁnd out, let us calculate the total
energy of all the oscillators and divide by the number of oscillators. That will
be the average energy per oscillator in thermal equilibrium, and will also be the
energy that is in equilibrium with the blackbody radiation and that should go
in Eq. (41.13) in place of kT. Thus we let N0 be the number of oscillators that
are in the ground state (the lowest energy state); N1 the number of oscillators
in the state E1; N2 the number that are in state E2; and so on. According to
the hypothesis (which we have not proved) that in quantum mechanics the law
that replaced the probability e−P.E./kT or e−K.E./kT in classical mechanics is that
the probability goes down as e−∆E/kT , where ∆E is the excess energy, we shall
assume that the number N1 that are in the ﬁrst state will be the number N0 that
are in the ground state, times e−ℏω/kT . Similarly, N2, the number of oscillators
in the second state, is N2 = N0e−2ℏω/kT . To simplify the algebra, let us call
e−ℏω/kT = x. Then we simply have N1 = N0x, N2 = N0x2, . . . , Nn = N0xn.
The total energy of all the oscillators must ﬁrst be worked out. If an oscillator
is in the ground state, there is no energy. If it is in the ﬁrst state, the energy
is ℏω, and there are N1 of them. So N1ℏω, or ℏωN0x is how much energy we get

41-12from those. Those that are in the second state have 2ℏω, and there are N2 of
them, so N2 · 2ℏω = 2ℏωN0x2 is how much energy we get, and so on. Then we
add it all together to get Etot = N0ℏω(0 + x + 2x2 + 3x3 + · · · ).
And now, how many oscillators are there? Of course, N0 is the number that
are in the ground state, N1 in the ﬁrst state, and so on, and we add them together:
Ntot = N0(1 + x + x2 + x3 + · · · ). Thus the average energy is

Ntot
= N0ℏω(0 + x + 2x2 + 3x3 + · · · )

⟨E⟩= Etot

N0(1 + x + x2 + x3 + · · · )
.
(41.14)

Now the two sums which appear here we shall leave for the reader to play with
and have some fun with. When we are all ﬁnished summing and substituting
for x in the sum, we should get—if we make no mistakes in the sum—

⟨E⟩=
ℏω
eℏω/kT −1.
(41.15)

This, then, was the ﬁrst quantum-mechanical formula ever known, or ever dis-
cussed, and it was the beautiful culmination of decades of puzzlement. Maxwell
knew that there was something wrong, and the problem was, what was right?
Here is the quantitative answer of what is right instead of kT. This expression
should, of course, approach kT as ω →0 or as T →∞. See if you can prove that
it does—learn how to do the mathematics.
This is the famous cutoﬀfactor that Jeans was looking for, and if we use it
instead of kT in (41.13), we obtain for the distribution of light in a black box

I(ω) dω =
ℏω3 dω
π2c2(eℏω/kT −1).
(41.16)

We see that for a large ω, even though we have ω3 in the numerator, there is
an e raised to a tremendous power in the denominator, so the curve comes down
again and does not “blow up”—we do not get ultraviolet light and x-rays where
we do not expect them!
One might complain that in our derivation of (41.16) we used the quantum
theory for the energy levels of the harmonic oscillator, but the classical theory in
determining the cross section σs. But the quantum theory of light interacting
with a harmonic oscillator gives exactly the same result as that given by the
classical theory. That, in fact, is why we were justiﬁed in spending so much

41-13time on our analysis of the index of refraction and the scattering of light, using
a model of atoms like little oscillators—the quantum formulas are substantially
the same.
Now let us return to the Johnson noise in a resistor. We have already remarked
that the theory of this noise power is really the same theory as that of the classical
blackbody distribution. In fact, rather amusingly, we have already said that if the
resistance in a circuit were not a real resistance, but were an antenna (an antenna
acts like a resistance because it radiates energy), a radiation resistance, it would
be easy for us to calculate what the power would be. It would be just the power
that runs into the antenna from the light that is all around, and we would get the
same distribution, changed by only one or two factors. We can suppose that the
resistor is a generator with an unknown power spectrum P(ω). The spectrum is
determined by the fact that this same generator, connected to a resonant circuit
of any frequency, as in Fig. 41-2(b), generates in the inductance a voltage of the
magnitude given in Eq. (41.2). One is thus led to the same integral as in (41.10),
and the same method works to give Eq. (41.3). For low temperatures the kT
in (41.3) must of course be replaced by (41.15). The two theories (blackbody
radiation and Johnson noise) are also closely related physically, for we may of
course connect a resonant circuit to an antenna, so the resistance R is a pure
radiation resistance. Since (41.2) does not depend on the physical origin of
the resistance, we know the generator G for a real resistance and for radiation
resistance is the same. What is the origin of the generated power P(ω) if the
resistance R is only an ideal antenna in equilibrium with its environment at
temperature T? It is the radiation I(ω) in the space at temperature T which
impinges on the antenna and, as “received signals,” makes an eﬀective generator.
Therefore one can deduce a direct relation of P(ω) and I(ω), leading then from
(41.13) to (41.3).
All the things we have been talking about—the so-called Johnson noise and
Planck’s distribution, and the correct theory of the Brownian movement which
we are about to describe—are developments of the ﬁrst decade or so of the 20th
century. Now with those points and that history in mind, we return to the
Brownian movement.

41-4 The random walk

Let us consider how the position of a jiggling particle should change with time,
for very long times compared with the time between “kicks.” Consider a little

41-14
