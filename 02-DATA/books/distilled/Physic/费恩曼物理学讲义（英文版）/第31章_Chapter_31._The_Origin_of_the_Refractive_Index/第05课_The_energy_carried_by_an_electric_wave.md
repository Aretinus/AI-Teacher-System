# The energy carried by an electric wave

be expected to cause a loss of energy. We see that the imaginary part n′′ of a
complex index of refraction represents an absorption (or “attenuation”) of the
wave. In fact, n′′ is sometimes referred to as the “absorption index.”
We may also point out that an imaginary part to the index n corresponds
to bending the arrow Ea in Fig. 31-3 toward the origin. It is clear why the
transmitted ﬁeld is then decreased.
Normally, for instance as in glass, the absorption of light is very small.
This is to be expected from our Eq. (31.20), because the imaginary part of the
denominator, iγkω, is much smaller than the term (ω2
k −ω2). But if the light
frequency ω is very close to ωk then the resonance term (ω2
k −ω2) can become
small compared with iγkω and the index becomes almost completely imaginary.
The absorption of the light becomes the dominant eﬀect. It is just this eﬀect
that gives the dark lines in the spectrum of light which we receive from the sun.
The light from the solar surface has passed through the sun’s atmosphere (as
well as the earth’s), and the light has been strongly absorbed at the resonant
frequencies of the atoms in the solar atmosphere.
The observation of such spectral lines in the sunlight allows us to tell the
resonant frequencies of the atoms and hence the chemical composition of the
sun’s atmosphere. The same kind of observations tell us about the materials in
the stars. From such measurements we know that the chemical elements in the
sun and in the stars are the same as those we ﬁnd on the earth.

31-5 The energy carried by an electric wave

We have seen that the imaginary part of the index means absorption. We
shall now use this knowledge to ﬁnd out how much energy is carried by a light
wave. We have given earlier an argument that the energy carried by light is
proportional to E2, the time average of the square of the electric ﬁeld in the
wave. The decrease in E due to absorption must mean a loss of energy, which
would go into some friction of the electrons and, we might guess, would end up
as heat in the material.
If we consider the light arriving on a unit area, say one square centimeter,
of our plate in Fig. 31-1, then we can write the following energy equation (if we
assume that energy is conserved, as we do!):

Energy in per sec = energy out per sec + work done per sec.
(31.23)

31-15For the ﬁrst term we can write αE2s, where α is the as yet unknown constant
of proportionality which relates the average value of E2 to the energy being
carried.
For the second term we must include the part from the radiating
atoms of the material, so we should use α(Es + Ea)2, or (evaluating the square)
α(E2s + 2EsEa + E2a).
All of our calculations have been made for a thin layer of material whose
index is not too far from 1, so that Ea would always be much less than Es (just
to make the calculations easier). In keeping with our approximations, we should,
therefore, leave out the term E2a, because it is much smaller than EsEa. You
may say: “Then you should leave out EsEa also, because it is much smaller
than E2s.” It is true that EsEa is much smaller than E2s, but we must keep
EsEa or our approximation will be the one that would apply if we neglected the
presence of the material completely! One way of checking that our calculations
are consistent is to see that we always keep terms which are proportional to N ∆z,
the area density of atoms in the material, but we leave out terms which are
proportional to (N ∆z)2 or any higher power of N ∆z. Ours is what should be
called a “low-density approximation.”
In the same spirit, we might remark that our energy equation has neglected
the energy in the reﬂected wave. But that is OK because this term, too, is
proportional to (N ∆z)2, since the amplitude of the reﬂected wave is proportional
to N ∆z.
For the last term in Eq. (31.23) we wish to compute the rate at which the
incoming wave is doing work on the electrons. We know that work is force times
distance, so the rate of doing work (also called power) is the force times the
velocity. It is really F · v, but we do not need to worry about the dot product
when the velocity and force are along the same direction as they are here (except
for a possible minus sign). So for each atom we take qeEsv for the average rate
of doing work. Since there are N ∆z atoms in a unit area, the last term in
Eq. (31.23) should be N ∆z qeEsv. Our energy equation now looks like

αE2s = αE2s + 2αEsEa + N ∆z qeEsv.
(31.24)

The E2s terms cancel, and we have

2αEsEa = −N ∆z qeEsv.
(31.25)

We now go back to Eq. (31.19), which tells us that for large z

Ea = −N ∆z qe

2ϵ0c
v(ret by z/c)
(31.26)

31-16(recalling that η = N ∆z). Putting Eq. (31.26) into the left-hand side of (31.25),
we get

2α N ∆z qe

2ϵ0c
Es(at z) · v(ret by z/c).

However, Es(at z) is Es(at atoms) retarded by z/c. Since the average is inde-
pendent of time, it is the same now as retarded by z/c, or is Es(at atoms) · v,
the same average that appears on the right-hand side of (31.25). The two sides
are therefore equal if
α
ϵ0c = 1,
or
α = ϵ0c.
(31.27)

We have discovered that if energy is to be conserved, the energy carried in an
electric wave per unit area and per unit time (or what we have called the intensity)
must be given by ϵ0cE2. If we call the intensity S, we have







intensity
or
energy/area/time

= ϵ0cE2,
(31.28)

S =



where the bar means the time average. We have a nice bonus result from our
theory of the refractive index!

31-6 Diﬀraction of light by a screen

It is now a good time to take up a somewhat diﬀerent matter which we can
handle with the machinery of this chapter. In the last chapter we said that
when you have an opaque screen and the light can come through some holes, the
distribution of intensity—the diﬀraction pattern—could be obtained by imagining
instead that the holes are replaced by sources (oscillators) uniformly distributed
over the hole. In other words, the diﬀracted wave is the same as though the hole
were a new source. We have to explain the reason for that, because the hole is, of
course, just where there are no sources, where there are no accelerating charges.
Let us ﬁrst ask: “What is an opaque screen?” Suppose we have a completely
opaque screen between a source S and an observer at P, as in Fig. 31-6(a). If the
screen is “opaque” there is no ﬁeld at P. Why is there no ﬁeld there? According
to the basic principles we should obtain the ﬁeld at P as the ﬁeld Es of the
source delayed, plus the ﬁeld from all the other charges around. But, as we
have seen above, the charges in the screen will be set in motion by the ﬁeld Es,

31-17
