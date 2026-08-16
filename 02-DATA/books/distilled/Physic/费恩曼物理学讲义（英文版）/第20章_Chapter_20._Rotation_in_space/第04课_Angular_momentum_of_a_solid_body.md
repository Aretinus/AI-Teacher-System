# Angular momentum of a solid body

20-4 Angular momentum of a solid body

Before we leave the subject of rotations in three dimensions, we shall discuss,
at least qualitatively, a few eﬀects that occur in three-dimensional rotations that
are not self-evident. The main eﬀect is that, in general, the angular momentum
of a rigid body is not necessarily in the same direction as the angular velocity.
Consider a wheel that is fastened onto a shaft in a lopsided fashion, but with
the axis through the center of gravity, to be sure (Fig. 20-6). When we spin
the wheel around the axis, anybody knows that there will be shaking at the
bearings because of the lopsided way we have it mounted. Qualitatively, we
know that in the rotating system there is centrifugal force acting on the wheel,
trying to throw its mass as far as possible from the axis. This tends to line
up the plane of the wheel so that it is perpendicular to the axis. To resist this
tendency, a torque is exerted by the bearings. If there is a torque exerted by the
bearings, there must be a rate of change of angular momentum. How can there
be a rate of change of angular momentum when we are simply turning the wheel
about the axis? Suppose we break the angular velocity ω into components ω1
and ω2 perpendicular and parallel to the plane of the wheel. What is the angular
momentum? The moments of inertia about these two axes are diﬀerent, so the
angular momentum components, which (in these particular, special axes only)
are equal to the moments of inertia times the corresponding angular velocity
components, are in a diﬀerent ratio than are the angular velocity components.
Therefore the angular momentum vector is in a direction in space not along the
axis. When we turn the object, we have to turn the angular momentum vector
in space, so we must exert torques on the shaft.

L1 = I1ω1
ω1

L

ω

L2 = I2ω2

ω2

Fig. 20-6. The angular momentum of a rotating body is not necessarily
parallel to the angular velocity.

Although it is much too complicated to prove here, there is a very important
and interesting property of the moment of inertia which is easy to describe and to

20-14use, and which is the basis of our above analysis. This property is the following:
Any rigid body, even an irregular one like a potato, possesses three mutually
perpendicular axes through the CM, such that the moment of inertia about one
of these axes has the greatest possible value for any axis through the CM, the
moment of inertia about another of the axes has the minimum possible value,
and the moment of inertia about the third axis is intermediate between these two
(or equal to one of them). These axes are called the principal axes of the body,
and they have the important property that if the body is rotating about one
of them, its angular momentum is in the same direction as the angular velocity.
For a body having axes of symmetry, the principal axes are along the symmetry
axes.

ωz

ω

Cωz

L

ωy

Bωy

ωx

y

Aωx

x

Fig. 20-7. The angular velocity and angular momentum of a rigid
body (A > B > C).

If we take the x-, y-, and z-axes along the principal axes, and call the
corresponding principal moments of inertia A, B, and C, we may easily evaluate
the angular momentum and the kinetic energy of rotation of the body for any
angular velocity ω. If we resolve ω into components ωx, ωy, and ωz along the
x-, y-, z-axes, and use unit vectors i, j, k, also along x, y, z, we may write the
angular momentum as

L = Aωxi + Bωyj + Cωzk.
(20.16)

20-15The kinetic energy of rotation is

2(Aω2
x + Bω2
y + Cω2
z)
(20.17)

KE = 1

= 1

2L · ω.

20-1621

The Harmonic Oscillator

21-1 Linear diﬀerential equations

In the study of physics, usually the course is divided into a series of subjects,
such as mechanics, electricity, optics, etc., and one studies one subject after the
other. For example, this course has so far dealt mostly with mechanics. But a
strange thing occurs again and again: the equations which appear in diﬀerent
ﬁelds of physics, and even in other sciences, are often almost exactly the same,
so that many phenomena have analogs in these diﬀerent ﬁelds. To take the
simplest example, the propagation of sound waves is in many ways analogous to
the propagation of light waves. If we study acoustics in great detail we discover
that much of the work is the same as it would be if we were studying optics in
great detail. So the study of a phenomenon in one ﬁeld may permit an extension
of our knowledge in another ﬁeld. It is best to realize from the ﬁrst that such
extensions are possible, for otherwise one might not understand the reason for
spending a great deal of time and energy on what appears to be only a small
part of mechanics.
The harmonic oscillator, which we are about to study, has close analogs in
many other ﬁelds; although we start with a mechanical example of a weight on a
spring, or a pendulum with a small swing, or certain other mechanical devices, we
are really studying a certain diﬀerential equation. This equation appears again
and again in physics and in other sciences, and in fact it is a part of so many
phenomena that its close study is well worth our while. Some of the phenomena
involving this equation are the oscillations of a mass on a spring; the oscillations
of charge ﬂowing back and forth in an electrical circuit; the vibrations of a tuning
fork which is generating sound waves; the analogous vibrations of the electrons
in an atom, which generate light waves; the equations for the operation of a
servosystem, such as a thermostat trying to adjust a temperature; complicated
interactions in chemical reactions; the growth of a colony of bacteria in interaction

21-1
