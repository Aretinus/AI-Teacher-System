# The exponential atmosphere

The Principles of Statistical Mechanics

40-1 The exponential atmosphere

We have discussed some of the properties of large numbers of intercolliding
atoms. The subject is called kinetic theory, a description of matter from the point
of view of collisions between the atoms. Fundamentally, we assert that the gross
properties of matter should be explainable in terms of the motion of its parts.
We limit ourselves for the present to conditions of thermal equilibrium, that is,
to a subclass of all the phenomena of nature. The laws of mechanics which apply
just to thermal equilibrium are called statistical mechanics, and in this section
we want to become acquainted with some of the central theorems of this subject.
We already have one of the theorems of statistical mechanics, namely, the
mean value of the kinetic energy for any motion at the absolute temperature T
is 1

2kT for each independent motion, i.e., for each degree of freedom. That tells
us something about the mean square velocities of the atoms. Our objective now
is to learn more about the positions of the atoms, to discover how many of them
are going to be in diﬀerent places at thermal equilibrium, and also to go into
a little more detail on the distribution of the velocities. Although we have the
mean square velocity, we do not know how to answer a question such as how
many of them are going three times faster than the root mean square, or how
many of them are going one-quarter of the root mean square speed. Or have they
all the same speed exactly?
So, these are the two questions that we shall try to answer: How are the
molecules distributed in space when there are forces acting on them, and how
are they distributed in velocity?
It turns out that the two questions are completely independent, and that
the distribution of velocities is always the same. We already received a hint
of the latter fact when we found that the average kinetic energy is the same,
2kT per degree of freedom, no matter what forces are acting on the molecules.

40-1The distribution of the velocities of the molecules is independent of the forces,
because the collision rates do not depend upon the forces.
Let us begin with an example: the distribution of the molecules in an at-
mosphere like our own, but without the winds and other kinds of disturbance.
Suppose that we have a column of gas extending to a great height, and at thermal
equilibrium—unlike our atmosphere, which as we know gets colder as we go up.
We could remark that if the temperature diﬀered at diﬀerent heights, we could
demonstrate lack of equilibrium by connecting a rod to some balls at the bottom
(Fig. 40-1), where they would pick up 1

2kT from the molecules there and would
shake, via the rod, the balls at the top and those would shake the molecules
at the top. So, ultimately, of course, the temperature becomes the same at all
heights in a gravitational ﬁeld.

h + dh

Mechanism
for equalizing
temperature

h

g

Fig. 40-1. The pressure at height h must exceed that at h + dh by
the weight of the intervening gas.

If the temperature is the same at all heights, the problem is to discover by
what law the atmosphere becomes tenuous as we go up. If N is the total number
of molecules in a volume V of gas at pressure P, then we know PV = NkT,
or P = nkT, where n = N/V is the number of molecules per unit volume. In
other words, if we know the number of molecules per unit volume, we know
the pressure, and vice versa: they are proportional to each other, since the

40-2temperature is constant in this problem. But the pressure is not constant, it
must increase as the altitude is reduced, because it has to hold, so to speak, the
weight of all the gas above it. That is the clue by which we may determine how
the pressure changes with height. If we take a unit area at height h, then the
vertical force from below, on this unit area, is the pressure P. The vertical force
per unit area pushing down at a height h + dh would be the same, in the absence
of gravity, but here it is not, because the force from below must exceed the force
from above by the weight of gas in the section between h and h + dh. Now mg is
the force of gravity on each molecule, where g is the acceleration due to gravity,
and n dh is the total number of molecules in the unit section. So this gives us
the diﬀerential equation Ph+dh −Ph = dP = −mgn dh. Since P = nkT, and T
is constant, we can eliminate either P or n, say P, and get

dn
dh = −mg

kT n

for the diﬀerential equation, which tells us how the density goes down as we go
up in energy.
We thus have an equation for the particle density n, which varies with height,
but which has a derivative which is proportional to itself. Now a function which
has a derivative proportional to itself is an exponential, and the solution of this
diﬀerential equation is

n = n0e−mgh/kT .
(40.1)

Here the constant of integration, n0, is obviously the density at h = 0 (which
can be chosen anywhere), and the density goes down exponentially with height.
Note that if we have diﬀerent kinds of molecules with diﬀerent masses, they
go down with diﬀerent exponentials. The ones which were heavier would decrease
with altitude faster than the light ones. Therefore we would expect that because
oxygen is heavier than nitrogen, as we go higher and higher in an atmosphere
with nitrogen and oxygen the proportion of nitrogen would increase. This does
not really happen in our own atmosphere, at least at reasonable heights, because
there is so much agitation which mixes the gases back together again. It is not
an isothermal atmosphere. Nevertheless, there is a tendency for lighter materials,
like hydrogen, to dominate at very great heights in the atmosphere, because the
lowest masses continue to exist, while the other exponentials have all died out
(Fig. 40-2).

40-31.0

0.8

H2

0.6

n(h)

n0

0.4

O2

0.2


HEIGHT (Kilometer)

Fig. 40-2. The normalized density as a function of height in the earth’s
gravitational ﬁeld for oxygen and for hydrogen, at constant temperature.

40-2 The Boltzmann law

Here we note the interesting fact that the numerator in the exponent of
Eq. (40.1) is the potential energy of an atom. Therefore we can also state this
particular law as: the density at any point is proportional to

e−the potential energy of each atom/kT .

That may be an accident, i.e., may be true only for this particular case of
a uniform gravitational ﬁeld. However, we can show that it is a more general
proposition. Suppose that there were some kind of force other than gravity acting
on the molecules in a gas. For example, the molecules may be charged electrically,
and may be acted on by an electric ﬁeld or another charge that attracts them.
Or, because of the mutual attractions of the atoms for each other, or for the wall,
or for a solid, or something, there is some force of attraction which varies with
position and which acts on all the molecules. Now suppose, for simplicity, that
the molecules are all the same, and that the force acts on each individual one, so
that the total force on a piece of gas would be simply the number of molecules

40-4
