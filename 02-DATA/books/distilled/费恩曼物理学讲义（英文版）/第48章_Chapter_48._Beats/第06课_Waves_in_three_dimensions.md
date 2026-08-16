# Waves in three dimensions

Now the square root is, after all, ω/c, so we could write this as dω/dk = c2k/ω.
Further, k/ω is p/E, so

vg = c2p

E .

But from (48.20) and (48.21), c2p/E = v, the velocity of the particle, according to
classical mechanics. So we see that whereas the fundamental quantum-mechanical
relationship E = ℏω and p = ℏk, for the identiﬁcation of ω and k with the classical
E and p, only produces the equation ω2−k2c2 = m2c4/ℏ2, now we also understand
the relationships (48.20) and (48.21) which connected E and p to the velocity. Of
course the group velocity must be the velocity of the particle if the interpretation
is going to make any sense. If we think the particle is over here at one time,
and then ten minutes later we think it is over there, as the quantum mechanics
said, the distance traversed by the “lump,” divided by the time interval, must
be, classically, the velocity of the particle.

48-6 Waves in three dimensions

We shall now bring our discussion of waves to a close with a few general
remarks about the wave equation. These remarks are intended to give some
view of the future—not that we can understand everything exactly just now, but
rather to see what things are going to look like when we study waves a little
more. First of all, the wave equation for sound in one dimension was

∂2χ
∂x2 = 1

c2
∂2χ

∂t2 ,

where c is the speed of whatever the wave is—in the case of sound, it is the sound
speed; in the case of light, it is the speed of light. We showed that for a sound
wave the displacements would propagate themselves at a certain speed. But
the excess pressure also propagates at a certain speed, and so does the excess
density. So we should expect that the pressure would satisfy the same equation,
as indeed it does. We shall leave it to the reader to prove that it does. Hint:
ρe is proportional to the rate of change of χ with respect to x. Therefore if we
diﬀerentiate the wave equation with respect to x, we will immediately discover
that ∂χ/∂x satisﬁes the same equation. That is to say, ρe satisﬁes the same
equation. But Pe is proportional to ρe, and therefore Pe does too. So the pressure,
the displacements, everything, satisfy the same wave equation.

48-15Usually one sees the wave equation for sound written in terms of pressure
instead of in terms of displacement, because the pressure is a scalar and has no
direction. But the displacement is a vector and has direction, and it is thus easier
to analyze the pressure.
The next matter we discuss has to do with the wave equation in three
dimensions. We know that the sound wave solution in one dimension is ei(ωt−kx),
with ω = kcs, but we also know that in three dimensions a wave would be
represented by ei(ωt−kxx−kyy−kzz), where, in this case, ω2 = k2cs, which is, of
course, (k2
x + k2
y + k2
z)c2
s. Now what we want to do is to guess what the correct
wave equation in three dimensions is. Naturally, for the case of sound this can be
deduced by going through the same dynamic argument in three dimensions that
we made in one dimension. But we shall not do that; instead we just write down
what comes out: the equation for the pressure (or displacement, or anything) is

∂2Pe

∂x2 + ∂2Pe

∂y2 + ∂2Pe

∂2Pe

∂z2 = 1

∂t2 .
(48.23)

c2s

That this is true can be veriﬁed by substituting in ei(ωt−k·r). Clearly, every time
we diﬀerentiate with respect to x, we multiply by −ikx. If we diﬀerentiate twice,
it is equivalent to multiplying by −k2
x, so the ﬁrst term would become −k2
xPe,
for that wave. Similarly, the second term becomes −k2
yPe, and the third term
becomes −k2
zPe. On the right, we get −(ω2/c2
s)Pe. Then, if we take away the Pe’s
and change the sign, we see that the relationship between k and ω is the one
that we want.
Working backwards again, we cannot resist writing down the grand equation
which corresponds to the dispersion equation (48.22) for quantum-mechanical
waves. If φ represents the amplitude for ﬁnding a particle at position x, y, z, at
the time t, then the great equation of quantum mechanics for free particles is
this:
∂2φ
∂x2 + ∂2φ

∂y2 + ∂2φ

c2
∂2φ

∂t2 = m2c2

∂z2 −1

ℏ2
φ.
(48.24)

First of all, the relativity character of this expression is suggested by the ap-
pearance of x, y, z and t in the nice combination relativity usually involves.
Second, it is a wave equation which, if we try a plane wave, would produce as
a consequence that −k2 + ω2/c2 = m2c2/ℏ2, which is the right relationship for
quantum mechanics. There is still another great thing contained in the wave
equation: the fact that any superposition of waves is also a solution. So this

48-16equation contains all of the quantum mechanics and the relativity that we have
been discussing so far, at least so long as it deals with a single particle in empty
space with no external potentials or forces on it!

48-7 Normal modes

Now we turn to another example of the phenomenon of beats which is rather
curious and a little diﬀerent. Imagine two equal pendulums which have, between
them, a rather weak spring connection. They are made as nearly as possible the
same length. If we pull one aside and let go, it moves back and forth, and it pulls
on the connecting spring as it moves back and forth, and so it really is a machine
for generating a force which has the natural frequency of the other pendulum.
Therefore, as a consequence of the theory of resonance, which we studied before,
when we put a force on something at just the right frequency, it will drive it. So,
sure enough, one pendulum moving back and forth drives the other. However, in
this circumstance there is a new thing happening, because the total energy of the
system is ﬁnite, so when one pendulum pours its energy into the other to drive
it, it ﬁnds itself gradually losing energy, until, if the timing is just right along
with the speed, it loses all its energy and is reduced to a stationary condition!
Then, of course, it is the other pendulum ball that has all the energy and the
ﬁrst one which has none, and as time goes on we see that it works also in the
opposite direction, and that the energy is passed back into the ﬁrst ball; this is a
very interesting and amusing phenomenon. We said, however, that this is related
to the theory of beats, and we must now explain how we can analyze this motion
from the point of view of the theory of beats.
We note that the motion of either of the two balls is an oscillation which has
an amplitude which changes cyclically. Therefore the motion of one of the balls is
presumably analyzable in a diﬀerent way, in that it is the sum of two oscillations,
present at the same time but having two slightly diﬀerent frequencies. Therefore
it ought to be possible to ﬁnd two other motions in this system, and to claim
that what we saw was a superposition of the two solutions, because this is of
course a linear system. Indeed, it is easy to ﬁnd two ways that we could start
the motion, each one of which is a perfect, single-frequency motion—absolutely
periodic. The motion that we started with before was not strictly periodic, since
it did not last; soon one ball was passing energy to the other and so changing its
amplitude; but there are ways of starting the motion so that nothing changes and,
of course, as soon as we see it we understand why. For example, if we made both

48-17
