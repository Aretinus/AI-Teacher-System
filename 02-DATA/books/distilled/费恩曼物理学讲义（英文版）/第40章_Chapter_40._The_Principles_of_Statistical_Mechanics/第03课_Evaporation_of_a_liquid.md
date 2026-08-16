# Evaporation of a liquid

times the force on each one. To avoid unnecessary complication, let us choose a
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

40-5P.E.
V (r)

r
r0

Fig. 40-3.
A potential-energy function for two molecules, which
depends only on their separation.

Figure 40-3 shows a form such a function might have. For r > r0, the energy
decreases as the molecules come together, because they attract, and then the
energy increases very sharply as they come still closer together, because they repel
strongly, which is characteristic of the way molecules behave, roughly speaking.
Now suppose we have a whole box full of such molecules, and we would like
to know how they arrange themselves on the average. The answer is e−P.E./kT .
The total potential energy in this case would be the sum over all the pairs,
supposing that the forces are all in pairs (there may be three-body forces in more
complicated things, but in electricity, for example, the potential energy is all in
pairs). Then the probability for ﬁnding molecules in any particular combination
of rij’s will be proportional to

i,j
V (rij)/kT
i
.

exp
h
−
X

Now, if the temperature is very high, so that kT ≫|V (r0)|, the exponent is
relatively small almost everywhere, and the probability of ﬁnding a molecule is
almost independent of position. Let us take the case of just two molecules: the
e−P.E./kT would be the probability of ﬁnding them at various mutual distances r.
Clearly, where the potential goes most negative, the probability is largest, and
where the potential goes toward inﬁnity, the probability is almost zero, which
occurs for very small distances. That means that for such atoms in a gas, there
is no chance that they are on top of each other, since they repel so strongly.
But there is a greater chance of ﬁnding them per unit volume at the point r0
than at any other point. How much greater, depends on the temperature. If
the temperature is very large compared with the diﬀerence in energy between

40-6r = r0 and r = ∞, the exponential is always nearly unity. In this case, where the
mean kinetic energy (about kT) greatly exceeds the potential energy, the forces
do not make much diﬀerence. But as the temperature falls, the probability of
ﬁnding the molecules at the preferred distance r0 gradually increases relative to
the probability of ﬁnding them elsewhere and, in fact, if kT is much less than
|V (r0)|, we have a relatively large positive exponent in that neighborhood. In
other words, in a given volume they are much more likely to be at the distance
of minimum energy than far apart. As the temperature falls, the atoms fall
together, clump in lumps, and reduce to liquids, and solids, and molecules, and
as you heat them up they evaporate.
The requirements for the determination of exactly how things evaporate,
exactly how things should happen in a given circumstance, involve the following.
First, to discover the correct molecular-force law V (r), which must come from
something else, quantum mechanics, say, or experiment. But, given the law of
force between the molecules, to discover what a billion molecules are going to do
merely consists of studying the function e−P
Vij/kT . Surprisingly enough, since
it is such a simple function and such an easy idea, given the potential, the labor
is enormously complicated; the diﬃculty is the tremendous number of variables.
In spite of such diﬃculties, the subject is quite exciting and interesting. It is
often called an example of a “many-body problem,” and it really has been a very
interesting thing. In that single formula must be contained all the details, for
example, about the solidiﬁcation of gas, or the forms of the crystals that the solid
can take, and people have been trying to squeeze it out, but the mathematical
diﬃculties are very great, not in writing the law, but in dealing with so enormous
a number of variables.
That then, is the distribution of particles in space. That is the end of classical
statistical mechanics, practically speaking, because if we know the forces, we
can, in principle, ﬁnd the distribution in space, and the distribution of velocities
is something that we can work out once and for all, and is not something that
is diﬀerent for the diﬀerent cases. The great problems are in getting particular
information out of our formal solution, and that is the main subject of classical
statistical mechanics.

40-4 The distribution of molecular speeds

Now we go on to discuss the distribution of velocities, because sometimes
it is interesting or useful to know how many of them are moving at diﬀerent

40-7
