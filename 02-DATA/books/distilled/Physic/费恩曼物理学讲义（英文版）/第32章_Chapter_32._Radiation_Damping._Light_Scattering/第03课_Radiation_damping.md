# Radiation damping

over a cycle (remember that we have to be very careful when we square things
that are written in complex notation—it really is the cosine, and the average
of cos2 ωt is one-half) thus is
⟨a′2⟩= 1

2ω4x2
0.

Therefore

P = q2ω4x2
12πϵ0c3 .
(32.6)

The formulas we are now discussing are relatively advanced and more or less
modern; they date from the beginning of the twentieth century, and they are very
famous. Because of their historical value, it is important for us to be able to read
about them in older books. In fact, the older books also used a system of units
diﬀerent from our present mks system. However, all these complications can be
straightened out in the ﬁnal formulas dealing with electrons by the following
rule: The quantity q2
e/4πϵ0, where qe is the electronic charge (in coulombs), has,
historically, been written as e2. It is very easy to calculate that e in the mks
system is numerically equal to 1.5188×10−14, because we know that, numerically,
qe = 1.60206 × 10−19 and 1/4πϵ0 = 8.98748 × 109. Therefore we shall often use
the convenient abbreviation

e2 =
q2
e
4πϵ0
.
(32.7)

If we use the above numerical value of e in the older formulas and treat them as
though they were written in mks units, we will get the right numerical results.
For example, the older form of (32.5) is P = 2

3e2a′2/c3. Again, the potential
energy of a proton and an electron at distance r is q2
e/4πϵ0r or e2/r, with
e = 1.5188 × 10−14 (mks).

32-3 Radiation damping

Now the fact that an oscillator loses a certain energy would mean that if we
had a charge on the end of a spring (or an electron in an atom) which has a
natural frequency ω0, and we start it oscillating and let it go, it will not oscillate
forever, even if it is in empty space millions of miles from anything. There is no
oil, no resistance, in an ordinary sense; no “viscosity.” But nevertheless it will
not oscillate, as we might once have said, “forever,” because if it is charged it is
radiating energy, and therefore the oscillation will slowly die out. How slowly?
What is the Q of such an oscillator, caused by the electromagnetic eﬀects, the

32-5so-called radiation resistance or radiation damping of the oscillator? The Q of
any oscillating system is the total energy content of the oscillator at any time
divided by the energy loss per radian:

Q =
W
dW/dφ.

Or (another way to write it), since dW/dφ = (dW/dt)/(dφ/dt) = (dW/dt)/ω,

Q =
ωW
dW/dt.
(32.8)

If for a given Q this tells us how the energy of the oscillation dies out, dW/dt =
−(ω/Q)W, which has the solution W = W0e−ωt/Q if W0 is the initial energy
(at t = 0).
To ﬁnd the Q for a radiator, we go back to (32.8) and use (32.6) for dW/dt.
Now what do we use for the energy W of the oscillator? The kinetic energy
of the oscillator is 1

2mv2, and the mean kinetic energy is mω2x2
0/4. But we
remember that for the total energy of an oscillator, on the average half is kinetic
and half is potential energy, and so we double our result, and ﬁnd for the total
energy of the oscillator
W = 1

2mω2x2
0.
(32.9)

What do we use for the frequency in our formulas? We use the natural frequency ω0
because, for all practical purposes, that is the frequency at which our atom is
radiating, and for m we use the electron mass me. Then, making the necessary
divisions and cancellations, the formula comes down to

Q =
4πe2

3λmec2 .
(32.10)

(In order to see it better and in a more historical form we write it using our
abbreviation q2
e/4πϵ0 = e2, and the factor ω0/c which was left over has been
written as 2π/λ.) Since Q is dimensionless, the combination e2/mec2 must be
a property only of the electron charge and mass, an intrinsic property of the
electron, and it must be a length. It has been given a name, the classical electron
radius, because the early atomic models, which were invented to explain the
radiation resistance on the basis of the force of one part of the electron acting
on the other parts, all needed to have an electron whose dimensions were of this

32-6general order of magnitude. However, this quantity no longer has the signiﬁcance
that we believe that the electron really has such a radius. Numerically, the
magnitude of the radius is

r0 =
e2

mec2 = 2.82 × 10−15 m.
(32.11)

Now let us actually calculate the Q of an atom that is emitting light—let us
say a sodium atom. For a sodium atom, the wavelength is roughly 6000 angstroms,
in the yellow part of the visible spectrum, and this is a typical wavelength. Thus

Q =
3λ
4πr0
≈5 × 107,
(32.12)

so the Q of an atom is of the order 108. This means that an atomic oscillator
will oscillate for 108 radians or about 107 oscillations, before its energy falls by a
factor 1/e. The frequency of oscillation of light corresponding to 6000 angstroms,
ν = c/λ, is on the order of 1015 cycles/sec, and therefore the lifetime, the time
it takes for the energy of a radiating atom to die out by a factor 1/e, is on the
order of 10−8 sec. In ordinary circumstances, freely emitting atoms usually take
about this long to radiate. This is valid only for atoms which are in empty space,
not being disturbed in any way. If the electron is in a solid and it has to hit
other atoms or other electrons, then there are additional resistances and diﬀerent
damping.
The eﬀective resistance term γ in the resistance law for the oscillator can
be found from the relation 1/Q = γ/ω0, and we remember that the size of γ
determines how wide the resonance curve is (Fig. 23-2). Thus we have just
computed the widths of spectral lines for freely radiating atoms! Since λ = 2πc/ω,
we ﬁnd that
∆λ = 2πc ∆ω/ω2 = 2πcγ/ω2
0 = 2πc/Qω0
= λ/Q = 4πr0/3 = 1.18 × 10−14 m.
(32.13)

32-4 Independent sources

In preparation for our second topic, the scattering of light, we must now
discuss a certain feature of the phenomenon of interference that we neglected to
discuss previously. This is the question of when interference does not occur. If
we have two sources S1 and S2, with amplitudes A1 and A2, and we make an

32-7
