# Thermal conductivity

43-6 Thermal conductivity

The methods of the kinetic theory that we have been using above can be
used also to compute the thermal conductivity of a gas. If the gas at the top of a
container is hotter than the gas at the bottom, heat will ﬂow from the top to the
bottom. (We think of the top being hotter because otherwise convection currents
would be set up and the problem would no longer be one of heat conduction.)
The transfer of heat from the hotter gas to the colder gas is by the diﬀusion
of the “hot” molecules—those with more energy—downward and the diﬀusion
of the “cold” molecules upward. To compute the ﬂow of thermal energy we
can ask about the energy carried downward across an element of area by the
downward-moving molecules, and about the energy carried upward across the
surface by the upward-moving molecules. The diﬀerence will give us the net
downward ﬂow of energy.
The thermal conductivity κ is deﬁned as the ratio of the rate at which thermal
energy is carried across a unit surface area, to the temperature gradient:

A
dQ

dt = −κ dT

dz .
(43.41)

Since the details of the calculations are quite similar to those we have done above
in considering molecular diﬀusion, we shall leave it as an exercise for the reader
to show that

κ = knlv

γ −1,
(43.42)

where kT/(γ −1) is the average energy of a molecule at the temperature T.
If we use our relation nlσc = 1, the heat conductivity can be written as

κ =
γ −1
kv
σc
.
(43.43)

We have a rather surprising result. We know that the average velocity of gas
molecules depends on the temperature but not on the density. We expect σc
to depend only on the size of the molecules. So our simple result says that the
thermal conductivity κ (and therefore the rate of ﬂow of heat in any particular
circumstance) is independent of the density of the gas! The change in the number
of “carriers” of energy with a change in density is just compensated by the larger
distance the “carriers” can go between collisions.

43-16One may ask: “Is the heat ﬂow independent of the gas density in the limit
as the density goes to zero? When there is no gas at all?” Certainly not! The
formula (43.43) was derived, as were all the others in this chapter, under the
assumption that the mean free path between collisions is much smaller than any
of the dimensions of the container. Whenever the gas density is so low that a
molecule has a fair chance of crossing from one wall of its container to the other
without having a collision, none of the calculations of this chapter apply. We
must in such cases go back to kinetic theory and calculate again the details of
what will occur.

43-1744

The Laws of Thermodynamics

44-1 Heat engines; the ﬁrst law

So far we have been discussing the properties of matter from the atomic
point of view, trying to understand roughly what will happen if we suppose that
things are made of atoms obeying certain laws. However, there are a number of
relationships among the properties of substances which can be worked out without
consideration of the detailed structure of the materials. The determination of the
relationships among the various properties of materials, without knowing their
internal structure, is the subject of thermodynamics. Historically, thermodynamics
was developed before an understanding of the internal structure of matter was
achieved.
To give an example: we know from the kinetic theory that the pressure of a gas
is caused by molecular bombardment, and we know that if we heat a gas, so that
the bombardment increases, the pressure must increase. Conversely, if the piston
in a container of the gas is moved inward against the force of bombardment, the
energy of the molecules bombarding the piston will increase, and consequently the
temperature will increase. So, on the one hand, if we increase the temperature at
a given volume, we increase the pressure. On the other hand, if we compress the
gas, we will ﬁnd that the temperature will rise. From the kinetic theory, one can
derive a quantitative relationship between these two eﬀects, but instinctively one
might guess that they are related in some necessary fashion which is independent
of the details of the collisions.
Let us consider another example. Many people are familiar with this interesting
property of rubber: If we take a rubber band and pull it, it gets warm. If one
puts it between his lips, for example, and pulls it out, he can feel a distinct
warming, and this warming is reversible in the sense that if he relaxes the rubber
band quickly while it is between his lips, it is distinctly cooled. That means that
when we stretch a rubber band it heats, and when we release the tension of the

44-1
