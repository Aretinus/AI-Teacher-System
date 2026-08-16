# Finding the moment of inertia

19-3 Finding the moment of inertia

Now let us discuss the problem of ﬁnding the moments of inertia of various
objects. The formula for the moment of inertia about the z-axis of an object is

I =
X
mi(x2
i + y2
i )

or

I =
Z
(x2 + y2) dm =
Z
(x2 + y2)ρ dV.
(19.4)

That is, we must sum the masses, each one multiplied by the square of its
distance (x2
i + y2
i ) from the axis. Note that it is not the three-dimensional
distance, only the two-dimensional distance squared, even for a three-dimensional
object. For the most part, we shall restrict ourselves to two-dimensional objects,
but the formula for rotation about the z-axis is just the same in three dimensions.

L

dx
x

Fig. 19-3. A straight rod of length L rotating about an axis through
one end.

As a simple example, consider a rod rotating about a perpendicular axis
through one end (Fig. 19-3). Now we must sum all the masses times the x-
distances squared (the y’s being all zero in this case). What we mean by “the
sum,” of course, is the integral of x2 times the little elements of mass. If we
divide the rod into small elements of length dx, the corresponding elements of
mass are proportional to dx, and if dx were the length of the whole rod the mass
would be M. Therefore
dm = M dx/L

and so

I =
Z L

Z L

x2 dx = ML2

x2 M dx

L
= M

.
(19.5)

L

The dimensions of moment of inertia are always mass times length squared, so
all we really had to work out was the factor 1/3.

19-8Now what is I if the rotation axis is at the center of the rod? We could just
do the integral over again, letting x range from −1

2L to + 1

2L. But let us notice
a few things about the moment of inertia. We can imagine the rod as two rods,
each of mass M/2 and length L/2; the moments of inertia of the two small rods
are equal, and are both given by the formula (19.5). Therefore the moment of
inertia is

I = 2(M/2)(L/2)2

= ML2

12 .
(19.6)

Thus it is much easier to turn a rod about its center, than to swing it around an
end.
Of course, we could go on to compute the moments of inertia of various other
bodies of interest. However, while such computations provide a certain amount of
important exercise in the calculus, they are not basically of interest to us as such.
There is, however, an interesting theorem which is very useful. Suppose we have
an object, and we want to ﬁnd its moment of inertia around some axis. That
means we want the inertia needed to carry it by rotation about that axis. Now if
we support the object on pivots at the center of mass, so that the object does not
turn as it rotates about the axis (because there is no torque on it from inertial
eﬀects, and therefore it will not turn when we start moving it), then the forces
needed to swing it around are the same as though all the mass were concentrated
at the center of mass, and the moment of inertia would be simply I1 = MR2
CM,
where RCM is the distance from the axis to the center of mass. But of course
that is not the right formula for the moment of inertia of an object which is really
being rotated as it revolves, because not only is the center of it moving in a circle,
which would contribute an amount I1 to the moment of inertia, but also we must
turn it about its center of mass. So it is not unreasonable that we must add to I1
the moment of inertia Ic about the center of mass. So it is a good guess that the
total moment of inertia about any axis will be

I = Ic + MR2
CM.
(19.7)

This theorem is called the parallel-axis theorem, and may be easily proved.
The moment of inertia about any axis is the mass times the sum of the xi’s and
the yi’s, each squared: I = P(x2
i + y2
i )mi. We shall concentrate on the x’s, but
of course the y’s work the same way. Now x is the distance of a particular point
mass from the origin, but let us consider how it would look if we measured x′

from the CM, instead of x from the origin. To get ready for this analysis, we

19-9write
xi = x′
i + XCM.

Then we just square this to ﬁnd

x2
i = x′2
i + 2XCMx′
i + X2
CM.

So, when this is multiplied by mi and summed over all i, what happens? Taking
the constants outside the summation sign, we get

Ix =
X
mix′2
i + 2XCM
X
mix′
i + X2
CM
X
mi.

The third sum is easy; it is just MX2
CM. In the second sum there are two pieces,
one of them is P mix′
i, which is the total mass times the x′-coordinate of the
center of mass. But this contributes nothing, because x′ is measured from the
center of mass, and in these axes the average position of all the particles, weighted
by the masses, is zero. The ﬁrst sum, of course, is the x part of Ic. Thus we
arrive at Eq. (19.7), just as we guessed.
Let us check (19.7) for one example. Let us just see whether it works for the
rod. For an axis through one end, the moment of inertia should be ML2/3, for we
calculated that. The center of mass of a rod, of course, is in the center of the rod,
at a distance L/2. Therefore we should ﬁnd that ML2/3 = ML2/12 + M(L/2)2.
Since one-quarter plus one-twelfth is one-third, we have made no fundamental
error.
Incidentally, we did not really need to use an integral to ﬁnd the moment of
inertia (19.5). If we simply assume that it is ML2 times γ, an unknown coeﬃcient,
and then use the argument about the two halves to get 1

4γ for (19.6), then from
our argument about transferring the axes we could prove that γ = 1

4γ + 1

4, so γ
must be 1/3. There is always another way to do it!
In applying the parallel-axis theorem, it is of course important to remember
that the axis for Ic must be parallel to the axis about which the moment of inertia
is wanted.
One further property of the moment of inertia is worth mentioning because it
is often helpful in ﬁnding the moment of inertia of certain kinds of objects. This
property is that if one has a plane ﬁgure and a set of coordinate axes with origin
in the plane and z-axis perpendicular to the plane, then the moment of inertia of
this ﬁgure about the z-axis is equal to the sum of the moments of inertia about

19-10the x- and y-axes. This is easily proved by noting that

Ix =
X
mi(y2
i + z2
i ) =
X
miy2
i
(since zi = 0). Similarly,

Iy =
X
mi(x2
i + z2
i ) =
X
mix2
i ,

but
Iz =
X
mi(x2
i + y2
i ) =
X
mix2
i +
X
miy2
i

= Ix + Iy.

As an example, the moment of inertia of a uniform rectangular plate of mass M,
width w, and length L, about an axis perpendicular to the plate and through
its center is simply
I = M(w2 + L2)/12,

because its moment of inertia about an axis in its plane and parallel to its length
is Mw2/12, i.e., just as for a rod of length w, and the moment of inertia about
the other axis in its plane is ML2/12, just as for a rod of length L.
To summarize, the moment of inertia of an object about a given axis, which
we shall call the z-axis, has the following properties:

(1) The moment of inertia is

i
mi(x2
i + y2
i ) =
Z
(x2 + y2) dm.

Iz =
X

(2) If the object is made of a number of parts, each of whose moment of inertia
is known, the total moment of inertia is the sum of the moments of inertia
of the pieces.

(3) The moment of inertia about any given axis is equal to the moment of
inertia about a parallel axis through the CM plus the total mass times the
square of the distance from the axis to the CM.

(4) If the object is a plane ﬁgure, the moment of inertia about an axis perpen-
dicular to the plane is equal to the sum of the moments of inertia about
any two mutually perpendicular axes lying in the plane and intersecting at
the perpendicular axis.

19-11The moments of inertia of a number of elementary shapes having uniform
mass densities are given in Table 19-1, and the moments of inertia of some other
objects, which may be deduced from Table 19-1, using the above properties, are
given in Table 19-2.

Table 19-1

Object
z-axis
Iz

Thin rod, length L
⊥rod at center
ML2/12
Thin concentric
circular ring, radii
⊥ring at center
M(r2
1 + r2
2)/2
r1 and r2
Sphere, radius r
through center
2Mr2/5

Table 19-2

Object
z-axis
Iz

Rect. sheet, sides a, b
∥b at center
Ma2/12
Rect. sheet, sides a, b
⊥sheet at
M(a2 + b2)/12
center
Thin annular ring,
any diameter
M(r2
1 + r2
2)/4
radii r1, r2
Rect. parallelepiped,
∥c, through
M(a2 + b2)/12
sides a, b, c
center
Rt. circ. cyl., radius
∥L, through
Mr2/2
r, length L
center
Rt. circ. cyl., radius
⊥L, through
M(r2/4 + L2/12)
r, length L
center

19-4 Rotational kinetic energy

Now let us go on to discuss dynamics further. In the analogy between linear
motion and angular motion that we discussed in Chapter 18, we used the work
theorem, but we did not talk about kinetic energy. What is the kinetic energy of
a rigid body, rotating about a certain axis with an angular velocity ω? We can
immediately guess the correct answer by using our analogies. The moment of
inertia corresponds to the mass, angular velocity corresponds to velocity, and so

19-12
