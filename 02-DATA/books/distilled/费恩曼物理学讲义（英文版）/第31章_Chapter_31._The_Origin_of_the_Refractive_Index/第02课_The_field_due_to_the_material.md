# The field due to the material

31-2 The ﬁeld due to the material

We now have to ask: Is the ﬁeld Ea obtained in the second term of Eq. (31.8)
the kind we would expect from oscillating charges in the plate? If we can show
that it is, we will then have calculated what the index n should be! [Since n
is the only nonfundamental number in Eq. (31.8).] We turn now to calculating
what ﬁeld Ea the charges in the material will produce. (To help you keep track
of the many symbols we have used up to now, and will be using in the rest of
our calculation, we have put them all together in Table 31-1.)

Table 31-1

Symbols used in the calculations

Es = ﬁeld from the source

Ea = ﬁeld produced by charges in the plate

∆z = thickness of the plate

z = perpendicular distance from the plate

n = index of refraction

ω = frequency (angular) of the radiation

N = number of charges per unit volume in the plate

η = number of charges per unit area of the plate

qe = charge on an electron

m = mass of an electron

ω0 = resonant frequency of an electron bound in an atom

If the source S (of Fig. 31-1) is far oﬀto the left, then the ﬁeld Es will have
the same phase everywhere on the plate, so we can write that in the neighborhood
of the plate
Es = E0eiω(t−z/c).
(31.9)

Right at the plate, where z = 0, we will have

Es = E0eiωt (at the plate).
(31.10)

Each of the electrons in the atoms of the plate will feel this electric ﬁeld
and will be driven up and down (we assume the direction of E0 is vertical) by
the electric force qE. To ﬁnd what motion we expect for the electrons, we will

31-7assume that the atoms are little oscillators, that is, that the electrons are fastened
elastically to the atoms, which means that if a force is applied to an electron its
displacement from its normal position will be proportional to the force.
You may think that this is a funny model of an atom if you have heard about
electrons whirling around in orbits. But that is just an oversimpliﬁed picture.
The correct picture of an atom, which is given by the theory of wave mechanics,
says that, so far as problems involving light are concerned, the electrons behave
as though they were held by springs. So we shall suppose that the electrons have
a linear restoring force which, together with their mass m, makes them behave
like little oscillators, with a resonant frequency ω0. We have already studied such
oscillators, and we know that the equation of their motion is written this way:

m
d2x

dt2 + ω2
0x

= F,
(31.11)

where F is the driving force.
For our problem, the driving force comes from the electric ﬁeld of the wave
from the source, so we should use

F = qeEs = qeE0eiωt,
(31.12)

where qe is the electric charge on the electron and for Es we use the expres-
sion Es = E0eiωt from (31.10).
Our equation of motion for the electron is
then

m
d2x

dt2 + ω2
0x

= qeE0eiωt.
(31.13)

We have solved this equation before, and we know that the solution is

x = x0eiωt,
(31.14)

where, by substituting in (31.13), we ﬁnd that

x0 =
qeE0
m(ω2
0 −ω2),
(31.15)

so that

x =
qeE0
m(ω2
0 −ω2) eiωt.
(31.16)

31-8We have what we needed to know—the motion of the electrons in the plate. And
it is the same for every electron, except that the mean position (the “zero” of
the motion) is, of course, diﬀerent for each electron.
Now we are ready to ﬁnd the ﬁeld Ea that these atoms produce at the
point P, because we have already worked out (at the end of Chapter 30) what
ﬁeld is produced by a sheet of charges that all move together. Referring back to
Eq. (30.19), we see that the ﬁeld Ea at P is just a negative constant times the
velocity of the charges retarded in time by the amount z/c. Diﬀerentiating x in
Eq. (31.16) to get the velocity, and sticking in the retardation [or just putting x0
from (31.15) into (30.18)] yields


iω
qeE0
m(ω2
0 −ω2) eiω(t−z/c)

.
(31.17)

Ea = −ηqe

2ϵ0c

Just as we expected, the driven motion of the electrons produced an extra wave
which travels to the right (that is what the factor eiω(t−z/c) says), and the
amplitude of this wave is proportional to the number of atoms per unit area
in the plate (the factor η) and also proportional to the strength of the source
ﬁeld (the factor E0). Then there are some factors which depend on the atomic
properties (qe, m, and ω0), as we should expect.
The most important thing, however, is that this formula (31.17) for Ea looks
very much like the expression for Ea that we got in Eq. (31.8) by saying that
the original wave was delayed in passing through a material with an index of
refraction n. The two expressions will, in fact, be identical if

(n −1) ∆z =
ηq2
e
2ϵ0m(ω2
0 −ω2).
(31.18)

Notice that both sides are proportional to ∆z, since η, which is the number of
atoms per unit area, is equal to N ∆z, where N is the number of atoms per unit
volume of the plate. Substituting N ∆z for η and cancelling the ∆z, we get our
main result, a formula for the index of refraction in terms of the properties of
the atoms of the material—and of the frequency of the light:

n = 1 +
Nq2
e
2ϵ0m(ω2
0 −ω2).
(31.19)

This equation gives the “explanation” of the index of refraction that we wished
to obtain.

31-931-3 Dispersion

Notice that in the above process we have obtained something very interesting.
For we have not only a number for the index of refraction which can be computed
from the basic atomic quantities, but we have also learned how the index of
refraction should vary with the frequency ω of the light. This is something we
would never understand from the simple statement that “light travels slower in
a transparent material.” We still have the problem, of course, of knowing how
many atoms per unit volume there are, and what is their natural frequency ω0.
We do not know this just yet, because it is diﬀerent for every diﬀerent material,
and we cannot get a general theory of that now. Formulation of a general theory
of the properties of diﬀerent substances—their natural frequencies, and so on—is
possible only with quantum atomic mechanics. Also, diﬀerent materials have
diﬀerent properties and diﬀerent indexes, so we cannot expect, anyway, to get a
general formula for the index which will apply to all substances.
However, we shall discuss the formula we have obtained, in various possible
circumstances. First of all, for most ordinary gases (for instance, for air, most
colorless gases, hydrogen, helium, and so on) the natural frequencies of the
electron oscillators correspond to ultraviolet light. These frequencies are higher
than the frequencies of visible light, that is, ω0 is much larger than ω of visible
light, and to a ﬁrst approximation, we can disregard ω2 in comparison with ω2
0.
Then we ﬁnd that the index is nearly constant. So for a gas, the index is nearly
constant. This is also true for most other transparent substances, like glass. If
we look at our expression a little more closely, however, we notice that as ω rises,
taking a little bit more away from the denominator, the index also rises. So n
rises slowly with frequency. The index is higher for blue light than for red light.
That is the reason why a prism bends the light more in the blue than in the red.
The phenomenon that the index depends upon the frequency is called the
phenomenon of dispersion, because it is the basis of the fact that light is “dispersed”
by a prism into a spectrum. The equation for the index of refraction as a function
of frequency is called a dispersion equation. So we have obtained a dispersion
equation. (In the past few years “dispersion equations” have been ﬁnding a new
use in the theory of elementary particles.)
Our dispersion equation suggests other interesting eﬀects.
If we have a
natural frequency ω0 which lies in the visible region, or if we measure the index
of refraction of a material like glass in the ultraviolet, where ω gets near ω0, we
see that at frequencies very close to the natural frequency the index can get

31-10
