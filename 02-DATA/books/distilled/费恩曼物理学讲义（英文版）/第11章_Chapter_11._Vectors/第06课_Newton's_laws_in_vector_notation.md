# Newton's laws in vector notation

shown in Fig. 11-6, divided by the time interval ∆t = t2 −t1, is the “average
velocity” vector.


∆r = r2 −r1

r2


r1

O

Fig. 11-6. The displacement of a particle in a short time interval ∆t =
t2 −t1.

In other words, by vector velocity we mean the limit, as ∆t goes to 0, of the
diﬀerence between the radius vectors at the time t + ∆t and the time t, divided
by ∆t:
v = lim
∆t→0(∆r/∆t) = dr/dt.
(11.10)

Thus velocity is a vector because it is the diﬀerence of two vectors. It is also the
right deﬁnition of velocity because its components are dx/dt, dy/dt, and dz/dt.
In fact, we see from this argument that if we diﬀerentiate any vector with respect
to time we produce a new vector. So we have several ways of producing new
vectors: (1) multiply by a constant, (2) diﬀerentiate with respect to time, (3) add
or subtract two vectors.

11-6 Newton’s laws in vector notation

In order to write Newton’s laws in vector form, we have to go just one step
further, and deﬁne the acceleration vector. This is the time derivative of the
velocity vector, and it is easy to demonstrate that its components are the second
derivatives of x, y, and z with respect to t:

dt =
 d


= d2r

dr

a = dv

dt2 ,
(11.11)

dt

dt

dt = d2x

dt = d2y

dt = d2z

ax = dvx

dt2 ,
ay = dvy

dt2 ,
az = dvz

dt2 .
(11.12)

11-13With this deﬁnition, then, Newton’s laws can be written in this way:

ma = F
(11.13)

or

m(d2r/dt2) = F .
(11.14)

Now the problem of proving the invariance of Newton’s laws under rotation
of coordinates is this: prove that a is a vector; this we have just done. Prove
that F is a vector; we suppose it is. So if force is a vector, then, since we know
acceleration is a vector, Eq. (11.13) will look the same in any coordinate system.
Writing it in a form which does not explicitly contain x’s, y’s, and z’s has the
advantage that from now on we need not write three laws every time we write
Newton’s equations or other laws of physics. We write what looks like one law,
but really, of course, it is the three laws for any particular set of axes, because
any vector equation involves the statement that each of the components is equal.

v1

∆v
s

v2

r1

r2

∆θ

O

R

Fig. 11-7. A curved trajectory.

The fact that the acceleration is the rate of change of the vector velocity
helps us to calculate the acceleration in some rather complicated circumstances.
Suppose, for instance, that a particle is moving on some complicated curve
(Fig. 11-7) and that, at a given instant t, it had a certain velocity v1, but that
when we go to another instant t2 a little later, it has a diﬀerent velocity v2. What
is the acceleration? Answer: Acceleration is the diﬀerence in the velocity divided
by the small time interval, so we need the diﬀerence of the two velocities. How
do we get the diﬀerence of the velocities? To subtract two vectors, we put the
vector across the ends of v2 and v1; that is, we draw ∆v as the diﬀerence of the
two vectors, right? No! That only works when the tails of the vectors are in the
same place! It has no meaning if we move the vector somewhere else and then

11-14v1

∆v
∆v⊥

∆θ

∆v∥

v2

Fig. 11-8. Diagram for calculating the acceleration.

draw a line across, so watch out! We have to draw a new diagram to subtract
the vectors. In Fig. 11-8, v1 and v2 are both drawn parallel and equal to their
counterparts in Fig. 11-7, and now we can discuss the acceleration. Of course the
acceleration is simply ∆v/∆t. It is interesting to note that we can compose the
velocity diﬀerence out of two parts; we can think of acceleration as having two
components, ∆v∥, in the direction tangent to the path and ∆v⊥at right angles
to the path, as indicated in Fig. 11-8. The acceleration tangent to the path is, of
course, just the change in the length of the vector, i.e., the change in the speed v:

a∥= dv/dt.
(11.15)

The other component of acceleration, at right angles to the curve, is easy to
calculate, using Figs. 11-7 and 11-8. In the short time ∆t let the change in angle
between v1 and v2 be the small angle ∆θ. If the magnitude of the velocity is
called v, then of course

∆v⊥= v ∆θ

and the acceleration a will be

a⊥= v (∆θ/∆t).

Now we need to know ∆θ/∆t, which can be found this way: If, at the given
moment, the curve is approximated as a circle of a certain radius R, then in a
time ∆t the distance s is, of course, v ∆t, where v is the speed.

∆θ = (v ∆t)/R,
or
∆θ/∆t = v/R.

Therefore, we ﬁnd

a⊥= v2/R,
(11.16)

as we have seen before.

11-7 Scalar product of vectors

Now let us examine a little further the properties of vectors. It is easy to see
that the length of a step in space would be the same in any coordinate system.

11-15
