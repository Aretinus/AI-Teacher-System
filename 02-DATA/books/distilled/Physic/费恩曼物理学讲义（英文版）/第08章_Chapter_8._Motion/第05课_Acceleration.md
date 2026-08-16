# Acceleration

by diﬀerentiating all sorts of functions. For every formula with a diﬀerential, we
get an integral formula if we turn it around.
Every function can be diﬀerentiated analytically, i.e., the process can be
carried out algebraically, and leads to a deﬁnite function. But it is not possible
in a simple manner to write an analytical value for any integral at will. You can
calculate it, for instance, by doing the above sum, and then doing it again with a
ﬁner interval ∆t and again with a ﬁner interval until you have it nearly right. In
general, given some particular function, it is not possible to ﬁnd, analytically, what
the integral is. One may always try to ﬁnd a function which, when diﬀerentiated,
gives some desired function; but one may not ﬁnd it, and it may not exist, in
the sense of being expressible in terms of functions that have already been given
names.

8-5 Acceleration

The next step in developing the equations of motion is to introduce another
idea which goes beyond the concept of velocity to that of change of velocity,
and we now ask, “How does the velocity change?” In previous chapters we have
discussed cases in which forces produce changes in velocity. You may have heard
with great excitement about some car that can get from rest to 60 miles an hour
in ten seconds ﬂat. From such a performance we can see how fast the speed
changes, but only on the average. What we shall now discuss is the next level of
complexity, which is how fast the velocity is changing. In other words, by how
many feet per second does the velocity change in a second, that is, how many
feet per second, per second? We previously derived the formula for the velocity
of a falling body as v = 32t, which is charted in Table 8-4, and now we want to
ﬁnd out how much the velocity changes per second; this quantity is called the
acceleration.
Acceleration is deﬁned as the time rate of change of velocity. From the
preceding discussion we know enough already to write the acceleration as the
derivative dv/dt, in the same way that the velocity is the derivative of the distance.
If we now diﬀerentiate the formula v = 32t we obtain, for a falling body,

a = dv

dt = 32.
(8.9)

[To diﬀerentiate the term 32t we can utilize the result obtained in a previous
problem, where we found that the derivative of Bt is simply B (a constant). So

8-13by letting B = 32, we have at once that the derivative of 32t is 32.] This means
that the velocity of a falling body is changing by 32 feet per second, per second
always. We also see from Table 8-4 that the velocity increases by 32 ft/sec in each
second. This is a very simple case, for accelerations are usually not constant. The
reason the acceleration is constant here is that the force on the falling body is
constant, and Newton’s law says that the acceleration is proportional to the force.
As a further example, let us ﬁnd the acceleration in the problem we have
already solved for the velocity. Starting with

s = At3 + Bt + C

we obtained, for v = ds/dt,

v = 3At2 + B.

Since acceleration is the derivative of the velocity with respect to the time, we
need to diﬀerentiate the last expression above. Recall the rule that the derivative
of the two terms on the right equals the sum of the derivatives of the individual
terms. To diﬀerentiate the ﬁrst of these terms, instead of going through the
fundamental process again we note that we have already diﬀerentiated a quadratic
term when we diﬀerentiated 16t2, and the eﬀect was to double the numerical
coeﬃcient and change the t2 to t; let us assume that the same thing will happen
this time, and you can check the result yourself. The derivative of 3At2 will
then be 6At. Next we diﬀerentiate B, a constant term; but by a rule stated
previously, the derivative of B is zero; hence this term contributes nothing to
the acceleration. The ﬁnal result, therefore, is a = dv/dt = 6At.
For reference, we state two very useful formulas, which can be obtained by
integration. If a body starts from rest and moves with a constant acceleration, g,
its velocity v at any time t is given by

v = gt.

The distance it covers in the same time is

2gt2.

s = 1

Various mathematical notations are used in writing derivatives. Since velocity
is ds/dt and acceleration is the time derivative of the velocity, we can also write


= d2s

ds

a = d

dt2 ,
(8.10)

dt

dt

which are common ways of writing a second derivative.

8-14We have another law that the velocity is equal to the integral of the acceleration.
This is just the opposite of a = dv/dt; we have already seen that distance is
the integral of the velocity, so distance can be found by twice integrating the
acceleration.
In the foregoing discussion the motion was in only one dimension, and
space permits only a brief discussion of motion in three dimensions. Consider a
particle P which moves in three dimensions in any manner whatsoever. At the
beginning of this chapter, we opened our discussion of the one-dimensional case
of a moving car by observing the distance of the car from its starting point at
various times. We then discussed velocity in terms of changes of these distances
with time, and acceleration in terms of changes in velocity. We can treat three-
dimensional motion analogously. It will be simpler to illustrate the motion on a
two-dimensional diagram, and then extend the ideas to three dimensions. We
establish a pair of axes at right angles to each other, and determine the position
of the particle at any moment by measuring how far it is from each of the two
axes. Thus each position is given in terms of an x-distance and a y-distance, and
the motion can be described by constructing a table in which both these distances
are given as functions of time. (Extension of this process to three dimensions
requires only another axis, at right angles to the ﬁrst two, and measuring a third
distance, the z-distance. The distances are now measured from coordinate planes
instead of lines.) Having constructed a table with x- and y-distances, how can
we determine the velocity? We ﬁrst ﬁnd the components of velocity in each
direction. The horizontal part of the velocity, or x-component, is the derivative
of the x-distance with respect to the time, or

vx = dx/dt.
(8.11)

Similarly, the vertical part of the velocity, or y-component, is

vy = dy/dt.
(8.12)

In the third dimension,

vz = dz/dt.
(8.13)

Now, given the components of velocity, how can we ﬁnd the velocity along
the actual path of motion? In the two-dimensional case, consider two successive
positions of the particle, separated by a short distance ∆s and a short time

8-15y
∆s ≈p

(∆x)2 + (∆y)2

t2
∆y ≈vy ∆t

t1

∆x ≈vx ∆t

x

Fig. 8-3. Description of the motion of a body in two dimensions and
the computation of its velocity.

interval t2 −t1 = ∆t. In the time ∆t the particle moves horizontally a dis-
tance ∆x ≈vx ∆t, and vertically a distance ∆y ≈vy ∆t. (The symbol “≈” is
read “is approximately.”) The actual distance moved is approximately

(∆x)2 + (∆y)2,
(8.14)

∆s ≈
p

as shown in Fig. 8-3. The approximate velocity during this interval can be
obtained by dividing by ∆t and by letting ∆t go to 0, as at the beginning of the
chapter. We then get the velocity as

v = ds

(dx/dt)2 + (dy/dt)2 =
q

dt =
p

v2x + v2y.
(8.15)

For three dimensions the result is

v =
q

v2x + v2y + v2z.
(8.16)

In the same way as we deﬁned velocities, we can deﬁne accelerations: we have
an x-component of acceleration ax, which is the derivative of vx, the x-component
of the velocity (that is, ax = d2x/dt2, the second derivative of x with respect
to t), and so on.
Let us consider one nice example of compound motion in a plane. We shall
take a motion in which a ball moves horizontally with a constant velocity u, and
at the same time goes vertically downward with a constant acceleration −g; what
is the motion? We can say dx/dt = vx = u. Since the velocity vx is constant,

x = ut,
(8.17)

8-16and since the downward acceleration −g is constant, the distance y the object
falls can be written as
y = −1

2gt2.
(8.18)

What is the curve of its path, i.e., what is the relation between y and x? We can
eliminate t from Eq. (8.18), since t = x/u. When we make this substitution we
ﬁnd that
y = −g

2u2 x2.
(8.19)

This relation between y and x may be considered as the equation of the path of
the moving ball. When this equation is plotted we obtain a curve that is called a
parabola; any freely falling body that is shot out in any direction will travel in a
parabola, as shown in Fig. 8-4.

x
y

Fig. 8-4. The parabola described by a falling body with an initial
horizontal velocity.

8-179

Newton’s Laws of Dynamics

9-1 Momentum and force

The discovery of the laws of dynamics, or the laws of motion, was a dramatic
moment in the history of science. Before Newton’s time, the motions of things like
the planets were a mystery, but after Newton there was complete understanding.
Even the slight deviations from Kepler’s laws, due to the perturbations of the
planets, were computable. The motions of pendulums, oscillators with springs
and weights in them, and so on, could all be analyzed completely after Newton’s
laws were enunciated. So it is with this chapter: before this chapter we could
not calculate how a mass on a spring would move; much less could we calculate
the perturbations on the planet Uranus due to Jupiter and Saturn. After this
chapter we will be able to compute not only the motion of the oscillating mass,
but also the perturbations on the planet Uranus produced by Jupiter and Saturn!
Galileo made a great advance in the understanding of motion when he dis-
covered the principle of inertia: if an object is left alone, is not disturbed, it
continues to move with a constant velocity in a straight line if it was originally
moving, or it continues to stand still if it was just standing still. Of course this
never appears to be the case in nature, for if we slide a block across a table it
stops, but that is because it is not left to itself—it is rubbing against the table.
It required a certain imagination to ﬁnd the right rule, and that imagination was
supplied by Galileo.
Of course, the next thing which is needed is a rule for ﬁnding how an object
changes its speed if something is aﬀecting it. That is, the contribution of Newton.
Newton wrote down three laws: The First Law was a mere restatement of the
Galilean principle of inertia just described. The Second Law gave a speciﬁc way
of determining how the velocity changes under diﬀerent inﬂuences called forces.
The Third Law describes the forces to some extent, and we shall discuss that
at another time. Here we shall discuss only the Second Law, which asserts that
the motion of an object is changed by forces in this way: the time-rate-of-change

9-1
