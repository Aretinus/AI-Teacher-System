# The random walk

time on our analysis of the index of refraction and the scattering of light, using
a model of atoms like little oscillators—the quantum formulas are substantially
the same.
Now let us return to the Johnson noise in a resistor. We have already remarked
that the theory of this noise power is really the same theory as that of the classical
blackbody distribution. In fact, rather amusingly, we have already said that if the
resistance in a circuit were not a real resistance, but were an antenna (an antenna
acts like a resistance because it radiates energy), a radiation resistance, it would
be easy for us to calculate what the power would be. It would be just the power
that runs into the antenna from the light that is all around, and we would get the
same distribution, changed by only one or two factors. We can suppose that the
resistor is a generator with an unknown power spectrum P(ω). The spectrum is
determined by the fact that this same generator, connected to a resonant circuit
of any frequency, as in Fig. 41-2(b), generates in the inductance a voltage of the
magnitude given in Eq. (41.2). One is thus led to the same integral as in (41.10),
and the same method works to give Eq. (41.3). For low temperatures the kT
in (41.3) must of course be replaced by (41.15). The two theories (blackbody
radiation and Johnson noise) are also closely related physically, for we may of
course connect a resonant circuit to an antenna, so the resistance R is a pure
radiation resistance. Since (41.2) does not depend on the physical origin of
the resistance, we know the generator G for a real resistance and for radiation
resistance is the same. What is the origin of the generated power P(ω) if the
resistance R is only an ideal antenna in equilibrium with its environment at
temperature T? It is the radiation I(ω) in the space at temperature T which
impinges on the antenna and, as “received signals,” makes an eﬀective generator.
Therefore one can deduce a direct relation of P(ω) and I(ω), leading then from
(41.13) to (41.3).
All the things we have been talking about—the so-called Johnson noise and
Planck’s distribution, and the correct theory of the Brownian movement which
we are about to describe—are developments of the ﬁrst decade or so of the 20th
century. Now with those points and that history in mind, we return to the
Brownian movement.

41-4 The random walk

Let us consider how the position of a jiggling particle should change with time,
for very long times compared with the time between “kicks.” Consider a little

41-14S36

B

Fig. 41-6. A random walk of 36 steps of length l. How far is S36 from
B? Ans: about 6I on the average.

Brownian movement particle which is jiggling about because it is bombarded
on all sides by irregularly jiggling water molecules. Query: After a given length
of time, how far away is it likely to be from where it began? This problem was
solved by Einstein and Smoluchowski. If we imagine that we divide the time
into little intervals, let us say a hundredth of a second or so, then after the ﬁrst
hundredth of a second it moves here, and in the next hundredth it moves some
more, in the next hundredth of a second it moves somewhere else, and so on. In
terms of the rate of bombardment, a hundredth of a second is a very long time.
The reader may easily verify that the number of collisions a single molecule of
water receives in a second is about 1014, so in a hundredth of a second it has
1012 collisions, which is a lot! Therefore, after a hundredth of a second it is not
going to remember what happened before. In other words, the collisions are
all random, so that one “step” is not related to the previous “step.” It is like
the famous drunken sailor problem: the sailor comes out of the bar and takes
a sequence of steps, but each step is chosen at an arbitrary angle, at random
(Fig. 41-6). The question is: After a long time, where is the sailor? Of course we
do not know! It is impossible to say. What do we mean—he is just somewhere
more or less random. Well then, on the average, where is he? On the average,
how far away from the bar has he gone? We have already answered this question,
because once we were discussing the superposition of light from a whole lot of
diﬀerent sources at diﬀerent phases, and that meant adding a lot of arrows at
diﬀerent angles (Chapter 32). There we discovered that the mean square of the
distance from one end to the other of the chain of random steps, which was the
intensity of the light, is the sum of the intensities of the separate pieces. And so,
by the same kind of mathematics, we can prove immediately that if RN is the
vector distance from the origin after N steps, the mean square of the distance
from the origin is proportional to the number N of steps. That is, ⟨R2
N⟩= NL2,
where L is the length of each step. Since the number of steps is proportional to
the time in our present problem, the mean square distance is proportional to the

41-15time:
⟨R2⟩= αt.
(41.17)

This does not mean that the mean distance is proportional to the time. If the
mean distance were proportional to the time it would mean that the drifting is
at a nice uniform velocity. The sailor is making some relatively sensible headway,
but only such that his mean square distance is proportional to time. That is the
characteristic of a random walk.
We may show very easily that in each successive step the square of the distance
increases, on the average, by L2. For if we write RN = RN−1 + L, we ﬁnd that
R2
N is
RN · RN = R2
N = R2
N−1 + 2RN−1 · L + L2,

and averaging over many trials, we have ⟨R2
N⟩= ⟨R2
N−1⟩+L2, since ⟨RN−1 · L⟩=
0. Thus, by induction,
⟨R2
N⟩= NL2.
(41.18)

Now we would like to calculate the coeﬃcient α in Eq. (41.17), and to do so
we must add a feature. We are going to suppose that if we were to put a force on
this particle (having nothing to do with the Brownian movement—we are taking
a side issue for the moment), then it would react in the following way against
the force. First, there would be inertia. Let m be the coeﬃcient of inertia, the
eﬀective mass of the object (not necessarily the same as the real mass of the
real particle, because the water has to move around the particle if we pull on it).
Thus if we talk about motion in one direction, there is a term like m(d2x/dt2) on
one side. And next, we want also to assume that if we kept a steady pull on the
object, there would be a drag on it from the ﬂuid, proportional to its velocity.
Besides the inertia of the ﬂuid, there is a resistance to ﬂow due to the viscosity
and the complexity of the ﬂuid. It is absolutely essential that there be some
irreversible losses, something like resistance, in order that there be ﬂuctuations.
There is no way to produce the kT unless there are also losses. The source of the
ﬂuctuations is very closely related to these losses. What the mechanism of this
drag is, we will discuss soon—we shall talk about forces that are proportional to
the velocity and where they come from. But let us suppose for now that there
is such a resistance. Then the formula for the motion under an external force,
when we are pulling on it in a normal manner, is

m d2x

dt2 + µ dx

dt = Fext.
(41.19)

41-16The quantity µ can be determined directly from experiment. For example, we
can watch the drop fall under gravity. Then we know that the force is mg, and µ
is mg divided by the speed of fall the drop ultimately acquires. Or we could put
the drop in a centrifuge and see how fast it sediments. Or if it is charged, we can
put an electric ﬁeld on it. So µ is a measurable thing, not an artiﬁcial thing, and
it is known for many types of colloidal particles, etc.
Now let us use the same formula in the case where the force is not external,
but is equal to the irregular forces of the Brownian movement. We shall then
try to determine the mean square distance that the object goes. Instead of
taking the distances in three dimensions, let us take just one dimension, and
ﬁnd the mean of x2, just to prepare ourselves. (Obviously the mean of x2 is
the same as the mean of y2 is the same as the mean of z2, and therefore the
mean square of the distance is just 3 times what we are going to calculate.)
The x-component of the irregular forces is, of course, just as irregular as any
other component. What is the rate of change of x2? It is d(x2)/dt = 2x(dx/dt),
so what we have to ﬁnd is the average of the position times the velocity. We
shall show that this is a constant, and that therefore the mean square radius
will increase proportionally to the time, and at what rate. Now if we multiply
Eq. (41.19) by x, mx(d2x/dt2) + µx(dx/dt) = xFx. We want the time average
of x(dx/dt), so let us take the average of the whole equation, and study the three
terms. Now what about x times the force? If the particle happens to have gone
a certain distance x, then, since the irregular force is completely irregular and
does not know where the particle started from, the next impulse can be in any
direction relative to x. If x is positive, there is no reason why the average force
should also be in that direction. It is just as likely to be one way as the other.
The bombardment forces are not driving it in a deﬁnite direction. So the average
value of x times F is zero. On the other hand, for the term mx(d2x/dt2) we will
have to be a little fancy, and write this as

2
.

mx d2x

dt2 = m d[x(dx/dt)]

dt
−m
dx

dt

Thus we put in these two terms and take the average of both. So let us see how
much the ﬁrst term should be. Now x times the velocity has a mean that does not
change with time, because when it gets to some position it has no remembrance of
where it was before, so things are no longer changing with time. So this quantity,
on the average, is zero. We have left the quantity mv2, and that is the only thing

41-17we know: mv2/2 has a mean value 1

2kT. Therefore we ﬁnd that

mx d2x

= ⟨xFx⟩

+ µ

x dx

dt2

dt

implies

−⟨mv2⟩+ µ

d
dt ⟨x2⟩= 0,

or
d⟨x2⟩

dt
= 2 kT

µ .
(41.20)

Therefore the object has a mean square distance ⟨R2⟩, at the end of a certain
amount of t, equal to

⟨R2⟩= 6kT t

µ.
(41.21)

And so we can actually determine how far the particles go!
We ﬁrst must
determine how they react to a steady force, how fast they drift under a known
force (to ﬁnd µ), and then we can determine how far they go in their random
motions. This equation was of considerable importance historically, because
it was one of the ﬁrst ways by which the constant k was determined. After
all, we can measure µ, the time, how far the particles go, and we can take an
average. The reason that the determination of k was important is that in the
law PV = RT for a mole, we know that R, which can also be measured, is equal
to the number of atoms in a mole times k. A mole was originally deﬁned as
so and so many grams of oxygen-16 (now carbon is used), so the number of
atoms in a mole was not known, originally. It is, of course, a very interesting
and important problem. How big are atoms? How many are there? So one of
the earliest determinations of the number of atoms was by the determination
of how far a dirty little particle would move if we watched it patiently under a
microscope for a certain length of time. And thus Boltzmann’s constant k and
the Avogadro number N0 were determined because R had already been measured.

41-1842

Applications of Kinetic Theory

42-1 Evaporation

In this chapter we shall discuss some further applications of kinetic theory.
In the previous chapter we emphasized one particular aspect of kinetic theory,
namely, that the average kinetic energy in any degree of freedom of a molecule
or other object is 1

2kT. The central feature of what we shall now discuss, on
the other hand, is the fact that the probability of ﬁnding a particle in diﬀerent
places, per unit volume, varies as e−potential energy/kT ; we shall make a number of
applications of this.
The phenomena which we want to study are relatively complicated: a liquid
evaporating, or electrons in a metal coming out of the surface, or a chemical
reaction in which there are a large number of atoms involved. In such cases it is no
longer possible to make from the kinetic theory any simple and correct statements,
because the situation is too complicated. Therefore, this chapter, except where
otherwise emphasized, is quite inexact. The idea to be emphasized is only that
we can understand, from the kinetic theory, more or less how things ought to
behave. By using thermodynamic arguments, or some empirical measurements
of certain critical quantities, we can get a more accurate representation of the
phenomena.
However, it is very useful to know even only more or less why something
behaves as it does, so that when the situation is a new one, or one that we have
not yet started to analyze, we can say, more or less, what ought to happen. So
this discussion is highly inaccurate but essentially right—right in idea, but a
little bit simpliﬁed, let us say, in the speciﬁc details.
The ﬁrst example that we shall consider is the evaporation of a liquid. Suppose
we have a box with a large volume, partially ﬁlled with liquid in equilibrium and
with the vapor at a certain temperature. We shall suppose that the molecules of
the vapor are relatively far apart, and that inside the liquid, the molecules are

42-1
