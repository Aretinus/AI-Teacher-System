# Angular momentum

displacement. In other words, it is only the tangential component of the force
that counts, and this must be multiplied by the distance r ∆θ. Therefore we see
that the torque is also equal to the tangential component of force (perpendicular
to the radius) times the radius. That makes sense in terms of our ordinary idea
of the torque, because if the force were completely radial, it would not put any
“twist” on the body; it is evident that the twisting eﬀect should involve only the
part of the force which is not pulling out from the center, and that means the
tangential component. Furthermore, it is clear that a given force is more eﬀective
on a long arm than near the axis. In fact, if we take the case where we push right
on the axis, we are not twisting at all! So it makes sense that the amount of
twist, or torque, is proportional both to the radial distance and to the tangential
component of the force.
There is still a third formula for the torque which is very interesting. We
have just seen that the torque is the force times the radius times the sine of the
angle α, in Fig. 18-2. But if we extend the line of action of the force and draw
the line OS, the perpendicular distance to the line of action of the force (the
lever arm of the force) we notice that this lever arm is shorter than r in just the
same proportion as the tangential part of the force is less than the total force.
Therefore the formula for the torque can also be written as the magnitude of the
force times the length of the lever arm.
The torque is also often called the moment of the force. The origin of this
term is obscure, but it may be related to the fact that “moment” is derived from
the Latin movimentum, and that the capability of a force to move an object
(using the force on a lever or crowbar) increases with the length of the lever arm.
In mathematics “moment” means weighted by how far away it is from an axis.

18-3 Angular momentum

Although we have so far considered only the special case of a rigid body,
the properties of torques and their mathematical relationships are interesting
also even when an object is not rigid. In fact, we can prove a very remarkable
theorem: just as external force is the rate of change of a quantity p, which we
call the total momentum of a collection of particles, so the external torque is the
rate of change of a quantity L which we call the angular momentum of the group
of particles.
To prove this, we shall suppose that there is a system of particles on which
there are some forces acting and ﬁnd out what happens to the system as a result

18-8R

Q

v

Q′

m

P

r

O

θ

Fig. 18-3. A particle moves about an axis O.

of the torques due to these forces. First, of course, we should consider just one
particle. In Fig. 18-3 is one particle of mass m, and an axis O; the particle is not
necessarily rotating in a circle about O, it may be moving in an ellipse, like a
planet going around the sun, or in some other curve. It is moving somehow, and
there are forces on it, and it accelerates according to the usual formula that the
x-component of force is the mass times the x-component of acceleration, etc. But
let us see what the torque does. The torque equals xFy −yFx, and the force in
the x- or y-direction is the mass times the acceleration in the x- or y-direction:

τ = xFy −yFx =

= xm(d2y/dt2) −ym(d2x/dt2).
(18.14)

Now, although this does not appear to be the derivative of any simple quantity,
it is in fact the derivative of the quantity xm(dy/dt) −ym(dx/dt):


= xm
d2y


+
dx


xm
dy


−ym
dx


m
dy



d
dt

dt2

dt

dt

dt

dt

(18.15)


−ym
d2x

−ym
d2x


= xm
d2y


−
dy


m
dx


.

dt2

dt2

dt2

dt

dt

So it is true that the torque is the rate of change of something with time! So we
pay attention to the “something,” we give it a name: we call it L, the angular
momentum:
L = xm(dy/dt) −ym(dx/dt)

= xpy −ypx.
(18.16)

Although our present discussion is nonrelativistic, the second form for L given
above is relativistically correct. So we have found that there is also a rotational

18-9analog for the momentum, and that this analog, the angular momentum, is given
by an expression in terms of the components of linear momentum that is just
like the formula for torque in terms of the force components! Thus, if we want
to know the angular momentum of a particle about an axis, we take only the
component of the momentum that is tangential, and multiply it by the radius. In
other words, what counts for angular momentum is not how fast it is going away
from the origin, but how much it is going around the origin. Only the tangential
part of the momentum counts for angular momentum. Furthermore, the farther
out the line of the momentum extends, the greater the angular momentum. And
also, because the geometrical facts are the same whether the quantity is labeled
p or F, it is true that there is a lever arm (not the same as the lever arm of the
force on the particle!) which is obtained by extending the line of the momentum
and ﬁnding the perpendicular distance to the axis. Thus the angular momentum
is the magnitude of the momentum times the momentum lever arm. So we have
three formulas for angular momentum, just as we have three formulas for the
torque:

L = xpy −ypx
= rptang
= p · lever arm.
(18.17)

Like torque, angular momentum depends upon the position of the axis about
which it is to be calculated.
Before proceeding to a treatment of more than one particle, let us apply the
above results to a planet going around the sun. In which direction is the force?
The force is toward the sun. What, then, is the torque on the object? Of course,
this depends upon where we take the axis, but we get a very simple result if
we take it at the sun itself, for the torque is the force times the lever arm, or
the component of force perpendicular to r, times r. But there is no tangential
force, so there is no torque about an axis at the sun! Therefore, the angular
momentum of the planet going around the sun must remain constant. Let us see
what that means. The tangential component of velocity, times the mass, times
the radius, will be constant, because that is the angular momentum, and the
rate of change of the angular momentum is the torque, and, in this problem,
the torque is zero. Of course since the mass is also a constant, this means that
the tangential velocity times the radius is a constant. But this is something we
already knew for the motion of a planet. Suppose we consider a small amount of

18-10time ∆t. How far will the planet move when it moves from P to Q (Fig. 18-3)?
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

18-11
