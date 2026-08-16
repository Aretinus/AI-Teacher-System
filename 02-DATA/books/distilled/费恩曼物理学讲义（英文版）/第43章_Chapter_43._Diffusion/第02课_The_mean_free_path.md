# The mean free path

which says the same thing as

N(t) = (constant)e−t/τ.
(43.6)

We know that the constant must be just N0, the total number of molecules
present, since all of them start at t = 0 to wait for their “next” collision. We can
write our result as
N(t) = N0e−t/τ.
(43.7)

If we wish the probability of no collision, P(t), we can get it by dividing N(t)
by N0, so
P(t) = e−t/τ.
(43.8)

Our result is: the probability that a particular molecule survives a time t without
a collision is e−t/τ, where τ is the mean time between collisions. The probability
starts out at 1 (or certainty) for t = 0, and gets less as t gets bigger and
bigger. The probability that the molecule avoids a collision for a time equal
to τ is e−1 ≈0.37. The chance is less than one-half that it will have a greater
than average time between collisions. That is all right, because there are enough
molecules which go collision-free for times much longer than the mean time before
colliding, so that the average time can still be τ.
We originally deﬁned τ as the average time between collisions. The result
we have obtained in Eq. (43.7) also says that the mean time from an arbitrary
starting instant to the next collision is also τ. We can demonstrate this somewhat
surprising fact in the following way. The number of molecules which experience
their next collision in the interval dt at the time t after an arbitrarily chosen
starting time is N(t) dt/τ. Their “time until the next collision” is, of course,
just t. The “average time until the next collision” is obtained in the usual way:

Z ∞

Average time until the next collision = 1

t N(t) dt

τ
.

N0

Using N(t) obtained in (43.7) and evaluating the integral, we ﬁnd indeed that τ
is the average time from any instant until the next collision.

43-2 The mean free path

Another way of describing the molecular collisions is to talk not about the time
between collisions, but about how far the particle moves between collisions. If

43-4we say that the average time between collisions is τ, and that the molecules have
a mean velocity v, we can expect that the average distance between collisions,
which we shall call l, is just the product of τ and v. This distance between
collisions is usually called the mean free path:

Mean free path l = τv.
(43.9)

In this chapter we shall be a little careless about what kind of average we
mean in any particular case. The various possible averages—the mean, the root-
mean-square, etc.—are all nearly equal and diﬀer by factors which are near to
one. Since a detailed analysis is required to obtain the correct numerical factors
anyway, we need not worry about which average is required at any particular
point. We may also warn the reader that the algebraic symbols we are using for
some of the physical quantities (e.g., l for the mean free path) do not follow a
generally accepted convention, mainly because there is no general agreement.
Just as the chance that a molecule will have a collision in a short time dt
is equal to dt/τ, the chance that it will have a collision in going a distance dx
is dx/l. Following the same line of argument used above, the reader can show
that the probability that a molecule will go at least the distance x before having
its next collision is e−x/l.
The average distance a molecule goes before colliding with another molecule—
the mean free path l—will depend on how many molecules there are around and
on the “size” of the molecules, i.e., how big a target they represent. The eﬀective
“size” of a target in a collision we usually describe by a “collision cross section,”
the same idea that is used in nuclear physics, or in light-scattering problems.
Consider a moving particle which travels a distance dx through a gas which
has n0 scatterers (molecules) per unit volume (Fig. 43-1). If we look at each unit

Collision area is σc

unit area

dx

Total area covered is σcn0 dx

Total number of
molecules is n0 dx

Fig. 43-1. Collision cross section.

43-5of area perpendicular to the direction of motion of our selected particle, we will
ﬁnd there n0 dx molecules. If each one presents an eﬀective collision area or, as
it is usually called, “collision cross section,” σc, then the total area covered by
the scatterers is σcn0 dx.
By “collision cross section” we mean the area within which the center of our
particle must be located if it is to collide with a particular molecule. If molecules
were little spheres (a classical picture) we would expect that σc = π(r1 + r2)2,
where r1 and r2 are the radii of the two colliding objects. The chance that
our particle will have a collision is the ratio of the area covered by scattering
molecules to the total area, which we have taken to be one. So the probability of
a collision in going a distance dx is just σcn0 dx:

Chance of a collision in dx = σcn0 dx.
(43.10)

We have seen above that the chance of a collision in dx can also be written
in terms of the mean free path l as dx/l. Comparing this with (43.10), we can
relate the mean free path to the collision cross section:


l = σcn0,
(43.11)

which is easier to remember if we write it as

σcn0l = 1.
(43.12)

This formula can be thought of as saying that there should be one collision, on
the average, when the particle goes through a distance l in which the scattering
molecules could just cover the total area. In a cylindrical volume of length l
and a base of unit area, there are n0l scatterers; if each one has an area σc the
total area covered is n0lσc, which is just one unit of area. The whole area is
not covered, of course, because some molecules are partly hidden behind others.
That is why some molecules go farther than l before having a collision. It is
only on the average that the molecules have a collision by the time they go the
distance l. From measurements of the mean free path l we can determine the
scattering cross section σc, and compare the result with calculations based on a
detailed theory of atomic structure. But that is a diﬀerent subject! So we return
to the problem of nonequilibrium states.

43-643-3 The drift speed

We want to describe what happens to a molecule, or several molecules, which
are diﬀerent in some way from the large majority of the molecules in a gas.
We shall refer to the “majority” molecules as the “background” molecules, and
we shall call the molecules which are diﬀerent from the background molecules
“special” molecules or, for short, the S-molecules. A molecule could be special
for any number of reasons: It might be heavier than the background molecules.
It might be a diﬀerent chemical. It might have an electric charge—i.e., be an
ion in a background of uncharged molecules. Because of their diﬀerent masses
or charges the S-molecules may have forces on them which are diﬀerent from
the forces on the background molecules. By considering what happens to these
S-molecules we can understand the basic eﬀects which come into play in a similar
way in many diﬀerent phenomena. To list a few: the diﬀusion of gases, electric
currents in batteries, sedimentation, centrifugal separation, etc.
We begin by concentrating on the basic process: an S-molecule in a back-
ground gas is acted on by some speciﬁc force F (which might be, e.g., gravitational
or electrical) and in addition by the not-so-speciﬁc forces due to collisions with
the background molecules. We would like to describe the general behavior of the
S-molecule. What happens to it, in detail, is that it darts around hither and yon
as it collides over and over again with other molecules. But if we watch it carefully
we see that it does make some net progress in the direction of the force F . We
say that there is a drift, superposed on its random motion. We would like to
know what the speed of its drift is—its drift velocity—due to the force F .
If we start to observe an S-molecule at some instant we may expect that it is
somewhere between two collisions. In addition to the velocity it was left with
after its last collision it is picking up some velocity component due to the force F .
In a short time (on the average, in a time τ) it will experience a collision and
start out on a new piece of its trajectory. It will have a new starting velocity,
but the same acceleration from F .
To keep things simple for the moment, we shall suppose that after each
collision our S-molecule gets a completely “fresh” start. That is, that it keeps no
remembrance of its past acceleration by F . This might be a reasonable assumption
if our S-molecule were much lighter than the background molecules, but it is
certainly not valid in general. We shall discuss later an improved assumption.
For the moment, then, our assumption is that the S-molecule leaves each
collision with a velocity which may be in any direction with equal likelihood. The

43-7
