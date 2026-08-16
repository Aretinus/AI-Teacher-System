# The rotation equations using cross products

momentum L. It also turns out that the angular velocity ω is a pseudo vector,
as is the magnetic ﬁeld B.
In order to complete the mathematical properties of vectors, we should know
all the rules for their multiplication, using dot and cross products.
In our
applications at the moment, we will need very little of this, but for the sake of
completeness we shall write down all of the rules for vector multiplication so that
we can use the results later. These are

(a)
a × (b + c) = a × b + a × c,

(b)
(αa) × b = α(a × b),

(c)
a · (b × c) = (a × b) · c,

(20.10)

(d)
a × (b × c) = b(a · c) −c(a · b),

(e)
a × a = 0,

(f)
a · (a × b) = 0.

20-2 The rotation equations using cross products

Now let us ask whether any equations in physics can be written using the
cross product. The answer, of course, is that a great many equations can be so
written. For instance, we see immediately that the torque is equal to the position
vector cross the force:
τ = r × F .
(20.11)

This is a vector summary of the three equations τx = yFz −zFy, etc. By the
same token, the angular momentum vector, if there is only one particle present,
is the distance from the origin multiplied by the vector momentum:

L = r × p.
(20.12)

For three-dimensional space rotation, the dynamical law analogous to the law F =
dp/dt of Newton, is that the torque vector is the rate of change with time of the
angular momentum vector:
τ = dL/dt.
(20.13)

If we sum (20.13) over many particles, the external torque on a system is the
rate of change of the total angular momentum:

τ ext = dLtot/dt.
(20.14)

20-7Another theorem: If the total external torque is zero, then the total vector
angular momentum of the system is a constant. This is called the law of conser-
vation of angular momentum. If there is no torque on a given system, its angular
momentum cannot change.
What about angular velocity? Is it a vector? We have already discussed
turning a solid object about a ﬁxed axis, but for a moment suppose that we are
turning it simultaneously about two axes. It might be turning about an axis
inside a box, while the box is turning about some other axis. The net result of
such combined motions is that the object simply turns about some new axis!
The wonderful thing about this new axis is that it can be ﬁgured out this way.
If the rate of turning in the xy-plane is written as a vector in the z-direction
whose length is equal to the rate of rotation in the plane, and if another vector is
drawn in the y-direction, say, which is the rate of rotation in the zx-plane, then
if we add these together as a vector, the magnitude of the result tells us how
fast the object is turning, and the direction tells us in what plane, by the rule of
the parallelogram. That is to say, simply, angular velocity is a vector, where we
draw the magnitudes of the rotations in the three planes as projections at right
angles to those planes.*
As a simple application of the use of the angular velocity vector, we may
evaluate the power being expended by the torque acting on a rigid body. The
power, of course, is the rate of change of work with time; in three dimensions,
the power turns out to be P = τ · ω.
All the formulas that we wrote for plane rotation can be generalized to three
dimensions. For example, if a rigid body is turning about a certain axis with
angular velocity ω, we might ask, “What is the velocity of a point at a certain
radial position r?” We shall leave it as a problem for the student to show that
the velocity of a particle in a rigid body is given by v = ω × r, where ω is
the angular velocity and r is the position. Also, as another example of cross
products, we had a formula for Coriolis force, which can also be written using
cross products: F c = 2mv × ω. That is, if a particle is moving with velocity v
in a coordinate system which is, in fact, rotating with angular velocity ω, and
we want to think in terms of the rotating coordinate system, then we have to
add the pseudo force F c.

* That this is true can be derived by compounding the displacements of the particles of
the body during an inﬁnitesimal time ∆t. It is not self-evident, and is left to those who are
interested to try to ﬁgure it out.

20-820-3 The gyroscope

Let us now return to the law of conservation of angular momentum. This law
may be demonstrated with a rapidly spinning wheel, or gyroscope, as follows
(see Fig. 20-1). If we sit on a swivel chair and hold the spinning wheel with
its axis horizontal, the wheel has an angular momentum about the horizontal
axis. Angular momentum around a vertical axis cannot change because of the
(frictionless) pivot of the chair, so if we turn the axis of the wheel into the vertical,
then the wheel would have angular momentum about the vertical axis, because it
is now spinning about this axis. But the system (wheel, ourself, and chair) cannot
have a vertical component, so we and the chair have to turn in the direction
opposite to the spin of the wheel, to balance it.

BEFORE
AFTER

Fig. 20-1. Before: axis is horizontal; moment about vertical axis = 0.
After: axis is vertical; momentum about vertical axis is still zero; man
and chair spin in direction opposite to spin of the wheel.

First let us analyze in more detail the thing we have just described. What is
surprising, and what we must understand, is the origin of the forces which turn
us and the chair around as we turn the axis of the gyroscope toward the vertical.
Figure 20-2 shows the wheel spinning rapidly about the y-axis. Therefore its
angular velocity is about that axis and, it turns out, its angular momentum is
likewise in that direction. Now suppose that we wish to rotate the wheel about
the x-axis at a small angular velocity Ω; what forces are required? After a short
time ∆t, the axis has turned to a new position, tilted at an angle ∆θ with the

20-9
