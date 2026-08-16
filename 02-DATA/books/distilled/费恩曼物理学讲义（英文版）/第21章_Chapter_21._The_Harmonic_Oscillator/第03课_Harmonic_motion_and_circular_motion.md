# Harmonic motion and circular motion

of oscillation. The constant ∆is sometimes called the phase of the oscillation,
but that is a confusion, because other people call ω0t + ∆the phase, and say
the phase changes with time. We might say that ∆is a phase shift from some
deﬁned zero. Let us put it diﬀerently. Diﬀerent ∆’s correspond to motions in
diﬀerent phases. That is true, but whether we want to call ∆the phase, or not,
is another question.

21-3 Harmonic motion and circular motion

The fact that cosines are involved in the solution of Eq. (21.2) suggests that
there might be some relationship to circles. This is artiﬁcial, of course, because
there is no circle actually involved in the linear motion—it just goes up and down.
We may point out that we have, in fact, already solved that diﬀerential equation
when we were studying the mechanics of circular motion. If a particle moves in
a circle with a constant speed v, the radius vector from the center of the circle
to the particle turns through an angle whose size is proportional to the time. If
we call this angle θ = vt/R (Fig. 21-2) then dθ/dt = ω0 = v/R. We know that
there is an acceleration a = v2/R = ω2
0R toward the center. Now we also know
that the position x, at a given moment, is the radius of the circle times cos θ,
and that y is the radius times sin θ:

x = R cos θ,
y = R sin θ.

Now what about the acceleration? What is the x-component of acceleration,
d2x/dt2? We have already worked that out geometrically; it is the magnitude
of the acceleration times the cosine of the projection angle, with a minus sign
because it is toward the center.

ax = −a cos θ = −ω2
0R cos θ = −ω2
0x.
(21.7)

y

v

a

θ

x

R

Fig. 21-2. A particle moving in a circular path at constant speed.

21-6In other words, when a particle is moving in a circle, the horizontal component of
its motion has an acceleration which is proportional to the horizontal displacement
from the center. Of course we also have the solution for motion in a circle:
x = R cos ω0t. Equation (21.7) does not depend upon the radius of the circle, so
for a circle of any radius, one ﬁnds the same equation for a given ω0. Thus, for
several reasons, we expect that the displacement of a mass on a spring will turn
out to be proportional to cos ω0t, and will, in fact, be exactly the same motion
as we would see if we looked at the x-component of the position of an object
rotating in a circle with angular velocity ω0. As a check on this, one can devise
an experiment to show that the up-and-down motion of a mass on a spring is the
same as that of a point going around in a circle. In Fig. 21-3 an arc light projected
on a screen casts shadows of a crank pin on a shaft and of a vertically oscillating
mass, side by side. If we let go of the mass at the right time from the right place,
and if the shaft speed is carefully adjusted so that the frequencies match, each
should follow the other exactly. One can also check the numerical solution we
obtained earlier with the cosine function, and see whether that agrees very well.

m

Light


from

ω0

Projector
Shadows

Screen

Fig. 21-3. Demonstration of the equivalence between simple harmonic
motion and uniform circular motion.

Here we may point out that because uniform motion in a circle is so closely
related mathematically to oscillatory up-and-down motion, we can analyze oscil-
latory motion in a simpler way if we imagine it to be a projection of something
going in a circle. In other words, although the distance y means nothing in the
oscillator problem, we may still artiﬁcially supplement Eq. (21.2) with another

21-7equation using y, and put the two together. If we do this, we will be able to
analyze our one-dimensional oscillator with circular motions, which is a lot easier
than having to solve a diﬀerential equation. The trick in doing this is to use
complex numbers, a procedure we shall introduce in the next chapter.

21-4 Initial conditions

Now let us consider what determines the constants A and B, or a and ∆. Of
course these are determined by how we start the motion. If we start the motion
with just a small displacement, that is one type of oscillation; if we start with
an initial displacement and then push up when we let go, we get still a diﬀerent
motion. The constants A and B, or a and ∆, or any other way of putting it, are
determined, of course, by the way the motion started, not by any other features
of the situation. These are called the initial conditions. We would like to connect
the initial conditions with the constants. Although this can be done using any
one of the forms (21.6), it turns out to be easiest if we use Eq. (21.6c). Suppose
that at t = 0 we have started with an initial displacement x0 and a certain
velocity v0. This is the most general way we can start the motion. (We cannot
specify the acceleration with which it started, true, because that is determined
by the spring, once we specify x0.) Now let us calculate A and B. We start with
the equation for x,
x = A cos ω0t + B sin ω0t.

Since we shall later need the velocity also, we diﬀerentiate x and obtain

v = −ω0A sin ω0t + ω0B cos ω0t.

These expressions are valid for all t, but we have special knowledge about x and v
at t = 0. So if we put t = 0 into these equations, on the left we get x0 and v0,
because that is what x and v are at t = 0; also, we know that the cosine of zero
is unity, and the sine of zero is zero. Therefore we get

x0 = A · 1 + B · 0 = A
and
v0 = −ω0A · 0 + ω0B · 1 = ω0B.

So for this particular case we ﬁnd that

A = x0,
B = v0/ω0.

From these values of A and B, we can get a and ∆if we wish.

21-8
