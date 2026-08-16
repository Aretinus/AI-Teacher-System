# The distribution of molecular speeds

r = r0 and r = ∞, the exponential is always nearly unity. In this case, where the
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

40-7speeds. In order to do that, we may make use of the facts which we discovered
with regard to the gas in the atmosphere. We take it to be a perfect gas, as we
have already assumed in writing the potential energy, disregarding the energy of
mutual attraction of the atoms. The only potential energy that we included in our
ﬁrst example was gravity. We would, of course, have something more complicated
if there were forces between the atoms. Thus we assume that there are no forces
between the atoms and, for a moment, disregard collisions also, returning later
to the justiﬁcation of this. Now we saw that there are fewer molecules at the
height h than there are at the height 0; according to formula (40.1), they decrease
exponentially with height. How can there be fewer at greater heights? After
all, do not all the molecules which are moving up at height 0 arrive at h? No!,
because some of those which are moving up at 0 are going too slowly, and cannot
climb the potential hill to h. With that clue, we can calculate how many must
be moving at various speeds, because from (40.1) we know how many are moving
with less than enough speed to climb a given distance h. Those are just the ones
that account for the fact that the density at h is lower than at 0.
Now let us put that idea a little more precisely: let us count how many
molecules are passing from below to above the plane h = 0 (by calling it
height = 0, we do not mean that there is a ﬂoor there; it is just a convenient label,
and there is gas at negative h). These gas molecules are moving around in every
direction, but some of them are moving through the plane, and at any moment a
certain number per second of them are passing through the plane from below to

h = h

h = 0

Fig. 40-4. Only those molecules moving up at h = 0 with suﬃcient
velocity can arrive at height h.

40-8above with diﬀerent velocities. Now we note the following: if we call u the velocity
which is just needed to get up to the height h (kinetic energy mu2/2 = mgh),
then the number of molecules per second which are passing upward through
the lower plane in a vertical direction with velocity component greater than u
is exactly the same as the number which pass through the upper plane with
any upward velocity. Those molecules whose vertical velocity does not exceed u
cannot get through the upper plane. So therefore we see that

Number passing h = 0 with vz > u = number passing h = h with vz > 0.

But the number which pass through h with any velocity greater than 0 is less than
the number which pass through the lower height with any velocity greater than 0,
because the number of atoms is greater; that is all we need. We know already
that the distribution of velocities is the same, after the argument we made earlier
about the temperature being constant all the way through the atmosphere. So,
since the velocity distributions are the same, and it is just that there are more
atoms lower down, clearly the number n>0(h), passing with positive velocity at
height h, and the number n>0(0), passing with positive velocity at height 0, are
in the same ratio as the densities at the two heights, which is e−mgh/kT . But
n>0(h) = n>u(0), and therefore we ﬁnd that

n>u(0)
n>0(0) = e−mgh/kT = e−mu2/2kT ,

2mu2 = mgh. Thus, in words, the number of molecules per unit area
per second passing the height 0 with a z-component of velocity greater than u
is e−mu2/2kT times the total number that are passing through the plane with
velocity greater than zero.
Now this is not only true at the arbitrarily chosen height 0, but of course it
is true at any other height, and thus the distributions of velocities are all the
same! (The ﬁnal statement does not involve the height h, which appeared only
in the intermediate argument.) The result is a general proposition that gives us
the distribution of velocities. It tells us that if we drill a little hole in the side
of a gas pipe, a very tiny hole, so that the collisions are few and far between,
i.e., are farther apart than the diameter of the hole, then the particles which are
coming out will have diﬀerent velocities, but the fraction of particles which come
out at a velocity greater than u is e−mu2/2kT .

since 1

40-9Now we return to the question about the neglect of collisions: Why does it
not make any diﬀerence? We could have pursued the same argument, not with a
ﬁnite height h, but with an inﬁnitesimal height h, which is so small that there
would be no room for collisions between 0 and h. But that was not necessary:
the argument is evidently based on an analysis of the energies involved, the
conservation of energy, and in the collisions that occur there is an exchange of
energies among the molecules. However, we do not really care whether we follow
the same molecule if energy is merely exchanged with another molecule. So it
turns out that even if the problem is analyzed more carefully (and it is more
diﬃcult, naturally, to do a rigorous job), it still makes no diﬀerence in the result.
It is interesting that the velocity distribution we have found is just

n>u ∝e−kinetic energy/kT .
(40.4)

This way of describing the distribution of velocities, by giving the number
of molecules that pass a given area with a certain minimum z-component, is
not the most convenient way of giving the velocity distribution. For instance,
inside the gas, one more often wants to know how many molecules are moving
with a z-component of velocity between two given values, and that, of course, is
not directly given by Eq. (40.4). We would like to state our result in the more
conventional form, even though what we already have written is quite general.
Note that it is not possible to say that any molecule has exactly some stated
velocity; none of them has a velocity exactly equal to 1.7962899173 meters per
second. So in order to make a meaningful statement, we have to ask how many are
to be found in some range of velocities. We have to say how many have velocities
between 1.796 and 1.797, and so on. On mathematical terms, let f(u) du be
the fraction of all the molecules which have velocities between u and u + du or,
what is the same thing (if du is inﬁnitesimal), all that have a velocity u with
a range du. Figure 40-5 shows a possible form for the function f(u), and the
shaded part, of width du and mean height f(u), represents this fraction f(u) du.
That is, the ratio of the shaded area to the total area of the curve is the relative
proportion of molecules with velocity u within du. If we deﬁne f(u) so that the
fraction having a velocity in this range is given directly by the shaded area, then
the total area must be 100 percent of them, that is,
Z ∞

−∞
f(u) du = 1.
(40.5)

40-10f (u)

du

u

Fig. 40-5. A velocity distribution function. The shaded area is f (u) du,
the fraction of particles having velocities within a range du about u.

Now we have only to get this distribution by comparing it with the theorem
we derived before. First we ask, what is the number of molecules passing through
an area per second with a velocity greater than u, expressed in terms of f(u)? At
ﬁrst we might think it is merely the integral of
R ∞
u f(u) du, but it is not, because
we want the number that are passing the area per second. The faster ones pass
more often, so to speak, than the slower ones, and in order to express how many
pass, you have to multiply by the velocity. (We discussed that in the previous
chapter when we talked about the number of collisions.) In a given time t the
total number which pass through the surface is all of those which have been able
to arrive at the surface, and the number which arrive come from a distance ut.
So the number of molecules which arrive is not simply the number which are
there, but the number that are there per unit volume, multiplied by the distance
that they sweep through in racing for the area through which they are supposed
to go, and that distance is proportional to u. Thus we need the integral of u
times f(u) du, an inﬁnite integral with a lower limit u, and this must be the same
as we found before, namely e−mu2/2kT , with a proportionality constant which
we will get later:
Z ∞

u
uf(u) du = const · e−mu2/2kT .
(40.6)

Now if we diﬀerentiate the integral with respect to u, we get the thing that
is inside the integral, i.e., the integrand (with a minus sign, since u is the lower
limit), and if we diﬀerentiate the other side, we get u times the same exponential

40-11(and some constants). The u’s cancel and we ﬁnd

f(u) du = Ce−mu2/2kT du.
(40.7)

We retain the du on both sides as a reminder that it is a distribution, and it tells
what the proportion is for velocity between u and u + du.
The constant C must be so determined that the integral is unity, according
to Eq. (40.5). Now we can prove* that
Z ∞

−∞
e−x2 dx = √π.

Using this fact, it is easy to ﬁnd that C =
p

m/2πkT.
Since velocity and momentum are proportional, we may say that the distribu-
tion of momenta is also proportional to e−K.E./kT per unit momentum range. It
turns out that this theorem is true in relativity too, if it is in terms of momentum,
while if it is in velocity it is not, so it is best to learn it in momentum instead of
in velocity:
f(p) dp = Ce−K.E./kT dp.
(40.8)

So we ﬁnd that the probabilities of diﬀerent conditions of energy, kinetic and
potential, are both given by e−energy/kT , a very easy thing to remember and a
rather beautiful proposition.
So far we have, of course, only the distribution of the velocities “vertically.”
We might want to ask, what is the probability that a molecule is moving in
another direction? Of course these distributions are connected, and one can
obtain the complete distribution from the one we have, because the complete
distribution depends only on the square of the magnitude of the velocity, not
upon the z-component. It must be something that is independent of direction,

* To get the value of the integral, let

I = R ∞

−∞e−x2 dx.

Then

I2 = R ∞

−∞e−x2 dx · R ∞

−∞e−y2 dy = R ∞

−∞
R ∞

−∞e−(x2+y2) dy dx,

which is a double integral over the whole xy-plane. But this can also be written in polar
coordinates as
I2 = R ∞

e−r2 · 2πr dr = π R ∞

e−t dt = π.

40-12and there is only one function involved, the probability of diﬀerent magnitudes.
We have the distribution of the z-component, and therefore we can get the
distribution of the other components from it. The result is that the probability
is still proportional to e−K.E/kT , but now the kinetic energy involves three parts,
mv2
x/2, mv2
y/2, and mv2
z/2, summed in the exponent. Or we can write it as a
product:

f(vx, vy, vz) dvx dvy dvz

∝e−mv2
x/2kT · e−mv2
y/2kT · e−mv2
z/2kT dvx dvy dvz.
(40.9)

You can see that this formula must be right because, ﬁrst, it is a function only
of v2, as required, and second, the probabilities of various values of vz obtained
by integrating over all vx and vy is just (40.7). But this one function (40.9) can
do both those things!

40-5 The speciﬁc heats of gases

Now we shall look at some ways to test the theory, and to see how successful
is the classical theory of gases. We saw earlier that if U is the internal energy
of N molecules, then PV = NkT = (γ −1)U holds, sometimes, for some gases,
maybe. If it is a monatomic gas, we know this is also equal to 2

3 of the kinetic
energy of the center-of-mass motion of the atoms. If it is a monatomic gas, then
the kinetic energy is equal to the internal energy, and therefore γ −1 = 2

3. But
suppose it is, say, a more complicated molecule, that can spin and vibrate, and
let us suppose (it turns out to be true according to classical mechanics) that
the energies of the internal motions are also proportional to kT. Then at a
given temperature, in addition to kinetic energy 3

2kT, it has internal vibrational
and rotational energies. So the total U includes not just the kinetic energy, but
also the rotational and vibrational energies, and we get a diﬀerent value of γ.
Technically, the best way to measure γ is by measuring the speciﬁc heat, which
is the change in energy with temperature. We will return to that approach later.
For our present purposes, we may suppose γ is found experimentally from the
PV γ curve for adiabatic compression.
Let us make a calculation of γ for some cases. First, for a monatomic gas U
is the total energy, the same as the kinetic energy, and we know already that γ
should be 5

3. For a diatomic gas, we may take, as an example, oxygen, hydrogen
iodide, hydrogen, etc., and suppose that the diatomic gas can be represented

40-13
