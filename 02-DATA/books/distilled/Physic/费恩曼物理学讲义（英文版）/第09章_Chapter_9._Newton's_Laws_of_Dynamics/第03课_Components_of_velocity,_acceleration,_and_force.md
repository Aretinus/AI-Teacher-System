# Components of velocity, acceleration, and force

z

∆z

∆s

∆y

∆x

y

x

Fig. 9-1. A small displacement of an object.

of an object change with time. Suppose, for example, that at a certain instant
an object is moving as shown in Fig. 9-1. In a given small interval of time ∆t
it will move a certain distance ∆x in the x-direction, ∆y in the y-direction,
and ∆z in the z-direction. The total eﬀect of these three coordinate changes is a
displacement ∆s along the diagonal of a parallelepiped whose sides are ∆x, ∆y,
and ∆z. In terms of the velocity, the displacement ∆x is the x-component of the
velocity times ∆t, and similarly for ∆y and ∆z:

∆x = vx ∆t,
∆y = vy ∆t,
∆z = vz ∆t.
(9.4)

9-3 Components of velocity, acceleration, and force

In Eq. (9.4) we have resolved the velocity into components by telling how fast
the object is moving in the x-direction, the y-direction, and the z-direction. The
velocity is completely speciﬁed, both as to magnitude and direction, if we give
the numerical values of its three rectangular components:

vx = dx/dt,
vy = dy/dt,
vz = dz/dt.
(9.5)

On the other hand, the speed of the object is

ds/dt = |v| =
q

v2x + v2y + v2z.
(9.6)

Next, suppose that, because of the action of a force, the velocity changes
to some other direction and a diﬀerent magnitude, as shown in Fig. 9-2. We

9-4z

y

x

Fig. 9-2. A change in velocity in which both the magnitude and
direction change.

can analyze this apparently complex situation rather simply if we evaluate the
changes in the x-, y-, and z-components of velocity. The change in the component
of the velocity in the x-direction in a time ∆t is ∆vx = ax ∆t, where ax is what
we call the x-component of the acceleration. Similarly, we see that ∆vy = ay ∆t
and ∆vz = az ∆t. In these terms, we see that Newton’s Second Law, in saying
that the force is in the same direction as the acceleration, is really three laws, in
the sense that the component of the force in the x-, y-, or z-direction is equal to
the mass times the rate of change of the corresponding component of velocity:

Fx = m(dvx/dt) = m(d2x/dt2) = max,

Fy = m(dvy/dt) = m(d2y/dt2) = may,

(9.7)

Fz = m(dvz/dt) = m(d2z/dt2) = maz.

Just as the velocity and acceleration have been resolved into components by
projecting a line segment representing the quantity, and its direction onto three
coordinate axes, so, in the same way, a force in a given direction is represented
by certain components in the x-, y-, and z-directions:

Fx = F cos (x, F),
Fy = F cos (y, F),

Fz = F cos (z, F),
(9.8)

9-5where F is the magnitude of the force and (x, F) represents the angle between
the x-axis and the direction of F, etc.
Newton’s Second Law is given in complete form in Eq. (9.7). If we know
the forces on an object and resolve them into x-, y-, and z-components, then
we can ﬁnd the motion of the object from these equations. Let us consider a
simple example. Suppose there are no forces in the y- and z-directions, the only
force being in the x-direction, say vertically. Equation (9.7) tells us that there
would be changes in the velocity in the vertical direction, but no changes in
the horizontal direction. This was demonstrated with a special apparatus in
Chapter 7 (see Fig. 7-3). A falling body moves horizontally without any change
in horizontal motion, while it moves vertically the same way as it would move
if the horizontal motion were zero. In other words, motions in the x-, y-, and
z-directions are independent if the forces are not connected.

9-4 What is the force?

In order to use Newton’s laws, we have to have some formula for the force;
these laws say pay attention to the forces. If an object is accelerating, some
agency is at work; ﬁnd it. Our program for the future of dynamics must be to
ﬁnd the laws for the force. Newton himself went on to give some examples. In the
case of gravity he gave a speciﬁc formula for the force. In the case of other forces
he gave some part of the information in his Third Law, which we will study in
the next chapter, having to do with the equality of action and reaction.
Extending our previous example, what are the forces on objects near the
earth’s surface? Near the earth’s surface, the force in the vertical direction due to
gravity is proportional to the mass of the object and is nearly independent of height
for heights small compared with the earth’s radius R: F = GmM/R2 = mg,
where g = GM/R2 is called the acceleration of gravity. Thus the law of gravity
tells us that weight is proportional to mass; the force is in the vertical direction
and is the mass times g. Again we ﬁnd that the motion in the horizontal direction
is at constant velocity. The interesting motion is in the vertical direction, and
Newton’s Second Law tells us

mg = m(d2x/dt2).
(9.9)

Cancelling the m’s, we ﬁnd that the acceleration in the x-direction is constant
and equal to g. This is of course the well known law of free fall under gravity,

9-6
