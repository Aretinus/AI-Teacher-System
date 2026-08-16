# What is the force?

where F is the magnitude of the force and (x, F) represents the angle between
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

9-6EQUILIBRIUM
POSITION

x

m

Fig. 9-3. A mass on a spring.

which leads to the equations

vx = v0 + gt,

2gt2.
(9.10)

x = x0 + v0t + 1

As another example, let us suppose that we have been able to build a gad-
get (Fig. 9-3) which applies a force proportional to the distance and directed
oppositely—a spring. If we forget about gravity, which is of course balanced out
by the initial stretch of the spring, and talk only about excess forces, we see that
if we pull the mass down, the spring pulls up, while if we push it up the spring
pulls down. This machine has been designed carefully so that the force is greater,
the more we pull it up, in exact proportion to the displacement from the balanced
condition, and the force upward is similarly proportional to how far we pull down.
If we watch the dynamics of this machine, we see a rather beautiful motion—up,
down, up, down, . . . The question is, will Newton’s equations correctly describe
this motion? Let us see whether we can exactly calculate how it moves with this
periodic oscillation, by applying Newton’s law (9.7). In the present instance, the
equation is
−kx = m(dvx/dt).
(9.11)

Here we have a situation where the velocity in the x-direction changes at a rate
proportional to x. Nothing will be gained by retaining numerous constants, so
we shall imagine either that the scale of time has changed or that there is an
accident in the units, so that we happen to have k/m = 1. Thus we shall try to
solve the equation
dvx/dt = −x.
(9.12)

To proceed, we must know what vx is, but of course we know that the velocity is
the rate of change of the position.

9-79-5 Meaning of the dynamical equations

Now let us try to analyze just what Eq. (9.12) means. Suppose that at a given
time t the object has a certain velocity vx and position x. What is the velocity
and what is the position at a slightly later time t + ϵ? If we can answer this
question our problem is solved, for then we can start with the given condition and
compute how it changes for the ﬁrst instant, the next instant, the next instant,
and so on, and in this way we gradually evolve the motion. To be speciﬁc, let us
suppose that at the time t = 0 we are given that x = 1 and vx = 0. Why does
the object move at all? Because there is a force on it when it is at any position
except x = 0. If x > 0, that force is upward. Therefore the velocity which is
zero starts to change, because of the law of motion. Once it starts to build up
some velocity the object starts to move up, and so on. Now at any time t, if ϵ is
very small, we may express the position at time t + ϵ in terms of the position at
time t and the velocity at time t to a very good approximation as

x(t + ϵ) = x(t) + ϵvx(t).
(9.13)

The smaller the ϵ, the more accurate this expression is, but it is still usefully
accurate even if ϵ is not vanishingly small. Now what about the velocity? In
order to get the velocity later, the velocity at the time t + ϵ, we need to know
how the velocity changes, the acceleration. And how are we going to ﬁnd the
acceleration? That is where the law of dynamics comes in. The law of dynamics
tells us what the acceleration is. It says the acceleration is −x.

vx(t + ϵ) = vx(t) + ϵax(t)
(9.14)

= vx(t) −ϵx(t).
(9.15)

Equation (9.14) is merely kinematics; it says that a velocity changes because of
the presence of acceleration. But Eq. (9.15) is dynamics, because it relates the
acceleration to the force; it says that at this particular time for this particular
problem, you can replace the acceleration by −x(t). Therefore, if we know both
the x and v at a given time, we know the acceleration, which tells us the new
velocity, and we know the new position—this is how the machinery works. The
velocity changes a little bit because of the force, and the position changes a little
bit because of the velocity.

9-8
