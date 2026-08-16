# Conservation of angular momentum

time ∆t. How far will the planet move when it moves from P to Q (Fig. 18-3)?
How much area will it sweep through? Disregarding the very tiny area QQ′P
compared with the much larger area OPQ, it is simply half the base PQ times
the height, OR. In other words, the area that is swept through in unit time will
be equal to the velocity times the lever arm of the velocity (times one-half). Thus
the rate of change of area is proportional to the angular momentum, which is
constant. So Kepler’s law about equal areas in equal times is a word description
of the statement of the law of conservation of angular momentum, when there is
no torque produced by the force.

18-4 Conservation of angular momentum

Now we shall go on to consider what happens when there is a large number
of particles, when an object is made of many pieces with many forces acting
between them and on them from the outside. Of course, we already know that,
about any given ﬁxed axis, the torque on the ith particle (which is the force on
the ith particle times the lever arm of that force) is equal to the rate of change of
the angular momentum of that particle, and that the angular momentum of the
ith particle is its momentum times its momentum lever arm. Now suppose we
add the torques τi for all the particles and call it the total torque τ. Then this will
be the rate of change of the sum of the angular momenta of all the particles Li,
and that deﬁnes a new quantity which we call the total angular momentum L.
Just as the total momentum of an object is the sum of the momenta of all the
parts, so the angular momentum is the sum of the angular momenta of all the
parts. Then the rate of change of the total L is the total torque:

τ =
X
τi =
X dLi

dt = dL

dt .
(18.18)

Now it might seem that the total torque is a complicated thing. There are all
those internal forces and all the outside forces to be considered. But, if we
take Newton’s law of action and reaction to say, not simply that the action
and reaction are equal, but also that they are directed exactly oppositely along
the same line (Newton may or may not actually have said this, but he tacitly
assumed it), then the two torques on the reacting objects, due to their mutual
interaction, will be equal and opposite because the lever arms for any axis are
equal. Therefore the internal torques balance out pair by pair, and so we have
the remarkable theorem that the rate of change of the total angular momentum

18-11about any axis is equal to the external torque about that axis!

τ =
X
τi = τext = dL/dt.
(18.19)

Thus we have a very powerful theorem concerning the motion of large collections
of particles, which permits us to study the over-all motion without having to
look at the detailed machinery inside. This theorem is true for any collection of
objects, whether they form a rigid body or not.
One extremely important case of the above theorem is the law of conservation
of angular momentum: if no external torques act upon a system of particles, the
angular momentum remains constant.
A special case of great importance is that of a rigid body, that is, an object
of a deﬁnite shape that is just turning around. Consider an object that is ﬁxed
in its geometrical dimensions, and which is rotating about a ﬁxed axis. Various
parts of the object bear the same relationship to one another at all times. Now
let us try to ﬁnd the total angular momentum of this object. If the mass of one
of its particles is mi, and its position or location is at (xi, yi), then the problem
is to ﬁnd the angular momentum of that particle, because the total angular
momentum is the sum of the angular momenta of all such particles in the body.
For an object going around in a circle, the angular momentum, of course, is the
mass times the velocity times the distance from the axis, and the velocity is equal
to the angular velocity times the distance from the axis:

Li = miviri = mir2
i ω,
(18.20)

or, summing over all the particles i, we get

L = Iω,
(18.21)

where

I =
X

i
mir2
i .
(18.22)

This is the analog of the law that the momentum is mass times velocity.
Velocity is replaced by angular velocity, and we see that the mass is replaced
by a new thing which we call the moment of inertia I, which is analogous to
the mass. Equations (18.21) and (18.22) say that a body has inertia for turning
which depends, not just on the masses, but on how far away they are from the
axis. So, if we have two objects of the same mass, when we put the masses

18-12m

m

M

Fig. 18-4. The “inertia for turning” depends upon the lever arm of the
masses.

farther away from the axis, the inertia for turning will be higher. This is easily
demonstrated by the apparatus shown in Fig. 18-4, where a weight M is kept
from falling very fast because it has to turn the large weighted rod. At ﬁrst, the
masses m are close to the axis, and M speeds up at a certain rate. But when
we change the moment of inertia by putting the two masses m much farther
away from the axis, then we see that M accelerates much less rapidly than it did
before, because the body has much more inertia against turning. The moment of
inertia is the inertia against turning, and is the sum of the contributions of all
the masses, times their distances squared, from the axis.
There is one important diﬀerence between mass and moment of inertia which
is very dramatic. The mass of an object never changes, but its moment of inertia
can be changed. If we stand on a frictionless rotatable stand with our arms
outstretched, and hold some weights in our hands as we rotate slowly, we may
change our moment of inertia by drawing our arms in, but our mass does not
change. When we do this, all kinds of wonderful things happen, because of the
law of the conservation of angular momentum: If the external torque is zero, then
the angular momentum, the moment of inertia times omega, remains constant.
Initially, we were rotating with a large moment of inertia I1 at a low angular
velocity ω1, and the angular momentum was I1ω1. Then we changed our moment
of inertia by pulling our arms in, say to a smaller value I2. Then the product Iω,
which has to stay the same because the total angular momentum has to stay the
same, was I2ω2. So I1ω1 = I2ω2. That is, if we reduce the moment of inertia, we
have to increase the angular velocity.

18-1319

Center of Mass; Moment of Inertia

19-1 Properties of the center of mass

In the previous chapter we found that if a great many forces are acting on a
complicated mass of particles, whether the particles comprise a rigid or a nonrigid
body, or a cloud of stars, or anything else, and we ﬁnd the sum of all the forces
(that is, of course, the external forces, because the internal forces balance out),
then if we consider the body as a whole, and say it has a total mass M, there is
a certain point “inside” the body, called the center of mass, such that the net
resulting external force produces an acceleration of this point, just as though the
whole mass were concentrated there. Let us now discuss the center of mass in a
little more detail.
The location of the center of mass (abbreviated CM) is given by the equation

RCM =
P miri
P mi
.
(19.1)

This is, of course, a vector equation which is really three equations, one for
each of the three directions. We shall consider only the x-direction, because
if we can understand that one, we can understand the other two. What does
XCM = P mixi/ P mi mean? Suppose for a moment that the object is divided
into little pieces, all of which have the same mass m; then the total mass is
simply the number N of pieces times the mass of one piece, say one gram, or any
unit. Then this equation simply says that we add all the x’s, and then divide
by the number of things that we have added: XCM = m P xi/mN = P xi/N.
In other words, XCM is the average of all the x’s, if the masses are equal. But
suppose one of them were twice as heavy as the others. Then in the sum, that x
would come in twice. This is easy to understand, for we can think of this double
mass as being split into two equal ones, just like the others; then in taking the
average, of course, we have to count that x twice because there are two masses

19-1
