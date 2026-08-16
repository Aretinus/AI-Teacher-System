# Independent sources

general order of magnitude. However, this quantity no longer has the signiﬁcance
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

32-7observation in a certain direction in which the phases of arrival of the two signals
are φ1 and φ2 (a combination of the actual time of oscillation and the delayed
time, depending on the position of observation), then the energy that we receive
can be found by compounding the two complex number vectors A1 and A2, one
at angle φ1 and the other at angle φ2 (as we did in Chapter 29) and we ﬁnd that
the resultant energy is proportional to

A2
R = A2
1 + A2
2 + 2A1A2 cos (φ1 −φ2).
(32.14)

Now if the cross term 2A1A2 cos (φ1 −φ2) were not there, then the total energy
that would be received in a given direction would simply be the sum of the
energies, A2
1 + A2
2, that would be liberated by each source separately, which is
what we usually expect. That is, the combined intensity of light shining on
something from two sources is the sum of the intensities of the two lights. On the
other hand, if we have things set just right and we have a cross term, it is not
such a sum, because there is also some interference. If there are circumstances
in which this term is of no importance, then we would say the interference is
apparently lost. Of course, in nature it is always there, but we may not be able
to detect it.
Let us consider some examples. Suppose, ﬁrst, that the two sources are
7,000,000,000 wavelengths apart, not an impossible arrangement. Then in a given
direction it is true that there is a very deﬁnite value of these phase diﬀerences.
But, on the other hand, if we move just a hair in one direction, a few wavelengths,
which is no distance at all (our eye already has a hole in it that is so large that we
are averaging the eﬀects over a range very wide compared with one wavelength)
then we change the relative phase, and the cosine changes very rapidly. If we
take the average of the intensity over a little region, then the cosine, which goes
plus, minus, plus, minus, as we move around, averages to zero.
So if we average over regions where the phase varies very rapidly with position,
we get no interference.
Another example. Suppose that the two sources are two independent radio
oscillators—not a single oscillator being fed by two wires, which guarantees that
the phases are kept together, but two independent sources—and that they are not
precisely tuned at the same frequency (it is very hard to make them at exactly
the same frequency without actually wiring them together). In this case we have
what we call two independent sources. Of course, since the frequencies are not
exactly equal, although they started in phase, one of them begins to get a little

32-8ahead of the other, and pretty soon they are out of phase, and then it gets still
further ahead, and pretty soon they are in phase again. So the phase diﬀerence
between the two is gradually drifting with time, but if our observation is so crude
that we cannot see that little time, if we average over a much longer time, then
although the intensity swells and falls like what we call “beats” in sound, if these
swellings and fallings are too rapid for our equipment to follow, then again this
term averages out.
In other words, in any circumstance in which the phase shift averages out, we
get no interference!
One ﬁnds many books which say that two distinct light sources never interfere.
This is not a statement of physics, but is merely a statement of the degree of
sensitivity of the technique of the experiments at the time the book was written.
What happens in a light source is that ﬁrst one atom radiates, then another atom
radiates, and so forth, and we have just seen that atoms radiate a train of waves
only for about 10−8 sec; after 10−8 sec, some atom has probably taken over, then
another atom takes over, and so on. So the phases can really only stay the same
for about 10−8 sec. Therefore, if we average for very much more than 10−8 sec,
we do not see an interference from two diﬀerent sources, because they cannot hold
their phases steady for longer than 10−8 sec. With photocells, very high-speed
detection is possible, and one can show that there is an interference which varies
with time, up and down, in about 10−8 sec. But most detection equipment, of
course, does not look at such ﬁne time intervals, and thus sees no interference.
Certainly with the eye, which has a tenth-of-a-second averaging time, there is no
chance whatever of seeing an interference between two diﬀerent ordinary sources.
Recently it has become possible to make light sources which get around this
eﬀect by making all the atoms emit together in time. The device which does this
is a very complicated thing, and has to be understood in a quantum-mechanical
way. It is called a laser, and it is possible to produce from a laser a source in
which the time during which the phase is kept constant, is very much longer than
10−8 sec. It can be of the order of a hundredth, a tenth, or even one second, and
so, with ordinary photocells, one can pick up the frequency between two diﬀerent
lasers. One can easily detect the pulsing of the beats between two laser sources.
Soon, no doubt, someone will be able to demonstrate two sources shining on a
wall, in which the beats are so slow that one can see the wall get bright and dark!
Another case in which the interference averages out is that in which, instead
of having only two sources, we have many. In this case, we would write the
expression for A2
R as the sum of a whole lot of amplitudes, complex numbers,

32-9squared, and we would get the square of each one, all added together, plus cross
terms between every pair, and if the circumstances are such that the latter average
out, then there will be no eﬀects of interference. It may be that the various sources
are located in such random positions that, although the phase diﬀerence between
A2 and A3 is also deﬁnite, it is very diﬀerent from that between A1 and A2, etc.
So we would get a whole lot of cosines, many plus, many minus, all averaging out.
So it is that in many circumstances we do not see the eﬀects of interference,
but see only a collective, total intensity equal to the sum of all the intensities.

32-5 Scattering of light

The above leads us to an eﬀect which occurs in air as a consequence of the
irregular positions of the atoms. When we were discussing the index of refraction,
we saw that an incoming beam of light will make the atoms radiate again. The
electric ﬁeld of the incoming beam drives the electrons up and down, and they
radiate because of their acceleration. This scattered radiation combines to give
a beam in the same direction as the incoming beam, but of somewhat diﬀerent
phase, and this is the origin of the index of refraction.
But what can we say about the amount of re-radiated light in some other
direction? Ordinarily, if the atoms are very beautifully located in a nice pattern,
it is easy to show that we get nothing in other directions, because we are adding
a lot of vectors with their phases always changing, and the result comes to zero.
But if the objects are randomly located, then the total intensity in any direction
is the sum of the intensities that are scattered by each atom, as we have just
discussed. Furthermore, the atoms in a gas are in actual motion, so that although
the relative phase of two atoms is a deﬁnite amount now, later the phase would be
quite diﬀerent, and therefore each cosine term will average out. Therefore, to ﬁnd
out how much light is scattered in a given direction by a gas, we merely study the
eﬀects of one atom and multiply the intensity it radiates by the number of atoms.
Earlier, we remarked that the phenomenon of scattering of light of this nature
is the origin of the blue of the sky. The sunlight goes through the air, and when
we look to one side of the sun—say at 90◦to the beam—we see blue light; what
we now have to calculate is how much light we see and why it is blue.
If the incident beam has the electric ﬁeld* E = ˆE0eiωt at the point where
the atom is located, we know that an electron in the atom will vibrate up and

* When a caret appears on a vector it signiﬁes that the components of the vector are complex:
ˆE = ( ˆEx, ˆEy, ˆEz).

32-10
