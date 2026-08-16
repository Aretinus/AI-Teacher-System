# Scattering of light

squared, and we would get the square of each one, all added together, plus cross
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

32-10Atom
−
+

Incident beam
(unpolarized)

Scattered radiation

Fig. 32-2. A beam of radiation falls on an atom and causes the
charges (electrons) in the atom to move. The moving electrons in turn
radiate in various directions.

down in response to this E (Fig. 32-2). From Eq. (23.8), the response will be

ˆx =
qe ˆE0
m(ω2
0 −ω2 + iγω).
(32.15)

We could include the damping and the possibility that the atom acts like several
oscillators of diﬀerent frequency and sum over the various frequencies, but for
simplicity let us just take one oscillator and neglect the damping. Then the
response to the external electric ﬁeld, which we have already used in the calculation
of the index of refraction, is simply

ˆx =
qe ˆE0
m(ω2
0 −ω2).
(32.16)

We could now easily calculate the intensity of light that is emitted in various
directions, using formula (32.2) and the acceleration corresponding to the above ˆx.
Rather than do this, however, we shall simply calculate the total amount of
light scattered in all directions, just to save time. The total amount of light
energy per second, scattered in all directions by the single atom, is of course
given by Eq. (32.6). So, putting together the various pieces and regrouping them,
we get
P = [(q2
eω4/12πϵ0c3)q2
eE2
0/m2
e(ω2 −ω2
0)2]

2ϵ0cE2
0)(8π/3)(q4
e/16π2ϵ2
0m2
ec4)[ω4/(ω2 −ω2
0)2]

= ( 1

2ϵ0cE2
0)(8πr2
0/3)[ω4/(ω2 −ω2
0)2]
(32.17)

= ( 1

for the total scattered power, radiated in all directions.

32-11We have written the result in the above form because it is then easy to
remember: First, the total energy that is scattered is proportional to the square
of the incident ﬁeld. What does that mean? Obviously, the square of the incident
ﬁeld is proportional to the energy which is coming in per second. In fact, the
energy incident per square meter per second is ϵ0c times the average ⟨E2⟩of
the square of the electric ﬁeld, and if E0 is the maximum value of E, then
⟨E2⟩= 1

2E2
0. In other words, the total energy scattered is proportional to the
energy per square meter that comes in; the brighter the sunlight that is shining
in the sky, the brighter the sky is going to look.
Next, what fraction of the incoming light is scattered? Let us imagine a
“target” with a certain area, let us say σ, in the beam (not a real, material target,
because this would diﬀract light, and so on; we mean an imaginary area drawn
in space). The total amount of energy that would pass through this surface σ
in a given circumstance is proportional both to the incoming intensity and to σ,
and the total power would be

2ϵ0cE2
0)σ.
(32.18)

P = ( 1

Now we invent an idea: we say that the atom scatters a total amount of
intensity which is the amount which would fall on a certain geometrical area,
and we give the answer by giving that area. That answer, then, is independent
of the incident intensity; it gives the ratio of the energy scattered to the energy
incident per square meter. In other words, the ratio

total energy scattered per second
energy incident per square meter per second is an area.

The signiﬁcance of this area is that, if all the energy that impinged on that area
were to be spewed in all directions, then that is the amount of energy that would
be scattered by the atom.
This area is called a cross section for scattering; the idea of cross section is
used constantly, whenever some phenomenon occurs in proportion to the intensity
of a beam. In such cases one always describes the amount of the phenomenon by
saying what the eﬀective area would have to be to pick up that much of the beam.
It does not mean in any way that this oscillator actually has such an area. If
there were nothing present but a free electron shaking up and down there would
be no area directly associated with it, physically. It is merely a way of expressing
the answer to a certain kind of problem; it tells us what area the incident beam

32-12would have to hit in order to account for that much energy coming oﬀ. Thus, for
our case,

σs = 8πr2
·
ω4

(ω2 −ω2
0)2
(32.19)

(the subscript s is for “scattering”).
Let us look at some examples. First, if we go to a very low natural frequency ω0,
or to completely unbound electrons, for which ω0 = 0, then the frequency ω
cancels out and the cross section is a constant. This low-frequency limit, or the
free electron cross section, is known as the Thomson scattering cross section. It
is an area whose dimensions are approximately 10−15 meter, more or less, on a
side, i.e., 10−30 square meter, which is rather small!
On the other hand, if we take the case of light in the air, we remember that for
air the natural frequencies of the oscillators are higher than the frequency of the
light that we use. This means that, to a ﬁrst approximation, we can disregard ω2

in the denominator, and we ﬁnd that the scattering is proportional to the fourth
power of the frequency. That is to say, light which is of higher frequency by, say,
a factor of two, is sixteen times more intensely scattered, which is a quite sizable
diﬀerence. This means that blue light, which has about twice the frequency of
the reddish end of the spectrum, is scattered to a far greater extent than red
light. Thus when we look at the sky it looks that glorious blue that we see all
the time!
There are several points to be made about the above results. One interesting
question is, why do we ever see the clouds? Where do the clouds come from?
Everybody knows it is the condensation of water vapor. But, of course, the
water vapor is already in the atmosphere before it condenses, so why don’t we
see it then? After it condenses it is perfectly obvious. It wasn’t there, now it is
there. So the mystery of where the clouds come from is not really such a childish
mystery as “Where does the water come from, Daddy?,” but has to be explained.
We have just explained that every atom scatters light, and of course the water
vapor will scatter light, too. The mystery is why, when the water is condensed
into clouds, does it scatter such a tremendously greater amount of light?
Consider what would happen if, instead of a single atom, we had an agglom-
erate of atoms, say two, very close together compared with the wavelength of the
light. Remember, atoms are only an angstrom or so across, while the wavelength
of light is some 5000 angstroms, so when they form a clump, a few atoms together,
they can be very close together compared with the wavelength of light. Then

32-13when the electric ﬁeld acts, both of the atoms will move together. The electric
ﬁeld that is scattered will then be the sum of the two electric ﬁelds in phase, i.e.,
double the amplitude that there was with a single atom, and the energy which
is scattered is therefore four times what it is with a single atom, not twice! So
lumps of atoms radiate or scatter more energy than they do as single atoms. Our
argument that the phases are independent is based on the assumption that there
is a real and large diﬀerence in phase between any two atoms, which is true only
if they are several wavelengths apart and randomly spaced, or moving. But if
they are right next to each other, they necessarily scatter in phase, and they have
a coherent interference which produces an increase in the scattering.
If we have N atoms in a lump, which is a tiny droplet of water, then each one
will be driven by the electric ﬁeld in about the same way as before (the eﬀect of
one atom on the other is not important; it is just to get the idea anyway) and
the amplitude of scattering from each one is the same, so the total ﬁeld which is
scattered is N-fold increased. The intensity of the light which is scattered is then
the square, or N 2-fold, increased. We would have expected, if the atoms were
spread out in space, only N times as much as 1, whereas we get N 2 times as
much as 1! That is to say, the scattering of water in lumps of N molecules each
is N times more intense than the scattering of the single atoms. So as the water
agglomerates the scattering increases. Does it increase ad inﬁnitum? No! When
does this analysis begin to fail? How many atoms can we put together before
we cannot drive this argument any further? Answer: If the water drop gets so
big that from one end to the other is a wavelength or so, then the atoms are
no longer all in phase because they are too far apart. So as we keep increasing
the size of the droplets we get more and more scattering, until such a time that
a drop gets about the size of a wavelength, and then the scattering does not
increase anywhere nearly as rapidly as the drop gets bigger. Furthermore, the
blue disappears, because for long wavelengths the drops can be bigger, before
this limit is reached, than they can be for short wavelengths. Although the short
waves scatter more per atom than the long waves, there is a bigger enhancement
for the red end of the spectrum than for the blue end when all the drops are
bigger than the wavelength, so the color is shifted from the blue toward the red.
Now we can make an experiment that demonstrates this. We can make
particles that are very small at ﬁrst, and then gradually grow in size. We use a
solution of sodium thiosulfate (hypo) with sulfuric acid, which precipitates very
ﬁne grains of sulfur. As the sulfur precipitates, the grains ﬁrst start very small,
and the scattering is a little bluish. As it precipitates more it gets more intense,

32-14and then it will get whitish as the particles get bigger. In addition, the light
which goes straight through will have the blue taken out. That is why the sunset
is red, of course, because the light that comes through a lot of air, to the eye has
had a lot of blue light scattered out, so it is yellow-red.
Finally, there is one other important feature which really belongs in the next
chapter, on polarization, but it is so interesting that we point it out now. This
is that the electric ﬁeld of the scattered light tends to vibrate in a particular
direction. The electric ﬁeld in the incoming light is oscillating in some way, and
the driven oscillator goes in this same direction, and if we are situated about at
right angles to the beam, we will see polarized light, that is to say, light in which
the electric ﬁeld is going only one way. In general, the atoms can vibrate in any
direction at right angles to the beam, but if they are driven directly toward or
away from us, we do not see it. So if the incoming light has an electric ﬁeld which
changes and oscillates in any direction, which we call unpolarized light, then the
light which is coming out at 90◦to the beam vibrates in only one direction! (See
Fig. 32-3.)

k

Electron
moves in
plane ⊥k

−

Atom

+

Incident beam
(unpolarized)

Radiation scattered
⊥k is plane polarized

Fig. 32-3. Illustration of the origin of the polarization of radiation
scattered at right angles to the incident beam.

There is a substance called polaroid which has the property that when light
goes through it, only the piece of the electric ﬁeld which is along one particular
axis can get through. We can use this to test for polarization, and indeed we ﬁnd
the light scattered by the hypo solution to be strongly polarized.

32-1533

Polarization

33-1 The electric vector of light

In this chapter we shall consider those phenomena which depend on the fact
that the electric ﬁeld that describes the light is a vector. In previous chapters
we have not been concerned with the direction of oscillation of the electric ﬁeld,
except to note that the electric vector lies in a plane perpendicular to the direction
of propagation. The particular direction in this plane has not concerned us. We
now consider those phenomena whose central feature is the particular direction
of oscillation of the electric ﬁeld.
In ideally monochromatic light, the electric ﬁeld must oscillate at a deﬁnite
frequency, but since the x-component and the y-component can oscillate indepen-
dently at a deﬁnite frequency, we must ﬁrst consider the resultant eﬀect produced
by superposing two independent oscillations at right angles to each other. What
kind of electric ﬁeld is made up of an x-component and a y-component which
oscillate at the same frequency? If one adds to an x-vibration a certain amount of
y-vibration at the same phase, the result is a vibration in a new direction in the
xy-plane. Figure 33-1 illustrates the superposition of diﬀerent amplitudes for the
x-vibration and the y-vibration. But the resultants shown in Fig. 33-1 are not
the only possibilities; in all of these cases we have assumed that the x-vibration
and the y-vibration are in phase, but it does not have to be that way. It could
be that the x-vibration and the y-vibration are out of phase.
When the x-vibration and the y-vibration are not in phase, the electric ﬁeld
vector moves around in an ellipse, and we can illustrate this in a familiar way. If
we hang a ball from a support by a long string, so that it can swing freely in a
horizontal plane, it will execute sinusoidal oscillations. If we imagine horizontal
x- and y-coordinates with their origin at the rest position of the ball, the ball
can swing in either the x- or y-direction with the same pendulum frequency.
By selecting the proper initial displacement and initial velocity, we can set the

33-1
