# The Boltzmann law

1.0

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

40-4times the force on each one. To avoid unnecessary complication, let us choose a
coordinate system with the x-axis in the direction of the force, F .
In the same manner as before, if we take two parallel planes in the gas,
separated by a distance dx, then the force on each atom, times the n atoms per
cm3 (the generalization of the previous nmg), times dx, must be balanced by the
pressure change: Fn dx = dP = kT dn. Or, to put this law in a form which will
be useful to us later,

F = kT d

dx (ln n).
(40.2)

For the present, observe that −F dx is the work we would do in taking a molecule
from x to x + dx, and if F comes from a potential, i.e., if the work done can be
represented by a potential energy at all, then this would also be the diﬀerence in
the potential energy (P.E.). The negative diﬀerential of potential energy is the
work done, F dx, and we ﬁnd that d(ln n) = −d(P.E.)/kT, or, after integrating,

n = (constant)e−P.E./kT .
(40.3)

Therefore what we noticed in a special case turns out to be true in general.
(What if F does not come from a potential? Then (40.2) has no solution at all.
Energy can be generated, or lost by the atoms running around in cyclic paths
for which the work done is not zero, and no equilibrium can be maintained at
all. Thermal equilibrium cannot exist if the external forces on the atoms are
not conservative.) Equation (40.3), known as Boltzmann’s law, is another of the
principles of statistical mechanics: that the probability of ﬁnding molecules in a
given spatial arrangement varies exponentially with the negative of the potential
energy of that arrangement, divided by kT.
This, then, could tell us the distribution of molecules: Suppose that we had a
positive ion in a liquid, attracting negative ions around it, how many of them
would be at diﬀerent distances? If the potential energy is known as a function of
distance, then the proportion of them at diﬀerent distances is given by this law,
and so on, through many applications.

40-3 Evaporation of a liquid

In more advanced statistical mechanics one tries to solve the following impor-
tant problem. Consider an assembly of molecules which attract each other, and
suppose that the force between any two, say i and j, depends only on their sepa-
ration rij, and can be represented as the derivative of a potential function V (rij).

40-5
