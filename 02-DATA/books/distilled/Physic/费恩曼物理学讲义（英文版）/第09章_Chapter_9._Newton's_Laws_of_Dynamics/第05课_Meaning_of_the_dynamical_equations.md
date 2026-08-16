# Meaning of the dynamical equations

9-5 Meaning of the dynamical equations

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

9-89-6 Numerical solution of the equations

Now let us really solve the problem. Suppose that we take ϵ = 0.100 sec. After
we do all the work if we ﬁnd that this is not small enough we may have to go back
and do it again with ϵ = 0.010 sec. Starting with our initial value x(0) = 1.00,
what is x(0.1)? It is the old position x(0) plus the velocity (which is zero) times
0.10 sec. Thus x(0.1) is still 1.00 because it has not yet started to move. But
the new velocity at 0.10 sec will be the old velocity v(0) = 0 plus ϵ times the
acceleration. The acceleration is −x(0) = −1.00. Thus

v(0.1) = 0.00 −0.10 × 1.00 = −0.10.

Now at 0.20 sec

x(0.2) = x(0.1) + ϵv(0.1)

= 1.00 −0.10 × 0.10 = 0.99
and
v(0.2) = v(0.1) + ϵa(0.1)

= −0.10 −0.10 × 1.00 = −0.20.

And so, on and on and on, we can calculate the rest of the motion, and that is just
what we shall do. However, for practical purposes there are some little tricks by
which we can increase the accuracy. If we continued this calculation as we have
started it, we would ﬁnd the motion only rather crudely because ϵ = 0.100 sec
is rather crude, and we would have to go to a very small interval, say ϵ = 0.01.
Then to go through a reasonable total time interval would take a lot of cycles
of computation. So we shall organize the work in a way that will increase the
precision of our calculations, using the same coarse interval ϵ = 0.10 sec. This
can be done if we make a subtle improvement in the technique of the analysis.
Notice that the new position is the old position plus the time interval ϵ times
the velocity. But the velocity when? The velocity at the beginning of the time
interval is one velocity and the velocity at the end of the time interval is another
velocity. Our improvement is to use the velocity halfway between. If we know
the speed now, but the speed is changing, then we are not going to get the right
answer by going at the same speed as now. We should use some speed between
the “now” speed and the “then” speed at the end of the interval. The same
considerations also apply to the velocity: to compute the velocity changes, we
should use the acceleration midway between the two times at which the velocity
is to be found. Thus the equations that we shall actually use will be something

9-9
