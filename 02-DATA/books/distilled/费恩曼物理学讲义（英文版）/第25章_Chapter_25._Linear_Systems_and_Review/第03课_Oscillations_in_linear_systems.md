# Oscillations in linear systems

example, if we have a simple pendulum, the correct equation for its motion is

d2θ/dt2 = −(g/L) sin θ.
(25.9)

This equation can be solved by elliptic functions, but the easiest way to solve it is
numerically, as was shown in Chapter 9 on Newton’s Laws of Motion. A nonlinear
equation cannot be solved, ordinarily, any other way but numerically. Now for
small θ, sin θ is practically equal to θ, and we have a linear equation. It turns
out that there are many circumstances where small eﬀects are linear: for the
example here the swing of a pendulum through small arcs. As another example,
if we pull a little bit on a spring, the force is proportional to the extension. If we
pull hard, we break the spring, and the force is a completely diﬀerent function of
the distance! Linear equations are important. In fact they are so important that
perhaps ﬁfty percent of the time we are solving linear equations in physics and
in engineering.

25-3 Oscillations in linear systems

Let us now review the things we have been talking about in the past few
chapters. It is very easy for the physics of oscillators to become obscured by
the mathematics. The physics is actually very simple, and if we may forget the
mathematics for a moment we shall see that we can understand almost everything
that happens in an oscillating system. First, if we have only the spring and the
weight, it is easy to understand why the system oscillates—it is a consequence
of inertia. We pull the mass down and the force pulls it back up; as it passes
zero, which is the place it likes to be, it cannot just suddenly stop; because of its
momentum it keeps on going and swings to the other side, and back and forth.
So, if there were no friction, we would surely expect an oscillatory motion, and
indeed we get one. But if there is even a little bit of friction, then on the return
cycle, the swing will not be quite as high as it was the ﬁrst time.
Now what happens, cycle by cycle? That depends on the kind and amount
of friction. Suppose that we could concoct a kind of friction force that always
remains in the same proportion to the other forces, of inertia and in the spring,
as the amplitude of oscillation varies. In other words, for smaller oscillations
the friction should be weaker than for big oscillations. Ordinary friction does
not have this property, so a special kind of friction must be carefully invented
for the very purpose of creating a friction that is directly proportional to the

25-9velocity—so that for big oscillations it is stronger and for small oscillations it
is weaker. If we happen to have that kind of friction, then at the end of each
successive cycle the system is in the same condition as it was at the start, except
a little bit smaller. All the forces are smaller in the same proportion: the spring
force is reduced, the inertial eﬀects are lower because the accelerations are now
weaker, and the friction is less too, by our careful design. When we actually
have that kind of friction, we ﬁnd that each oscillation is exactly the same as the
ﬁrst one, except reduced in amplitude. If the ﬁrst cycle dropped the amplitude,
say, to 90 percent of what it was at the start, the next will drop it to 90 percent
of 90 percent, and so on: the sizes of the oscillations are reduced by the same
fraction of themselves in every cycle. An exponential function is a curve which
does just that. It changes by the same factor in each equal interval of time. That
is to say, if the amplitude of one cycle, relative to the preceding one, is called a,
then the amplitude of the next is a2, and of the next, a3. So the amplitude is
some constant raised to a power equal to the number of cycles traversed:

A = A0an.
(25.10)

But of course n ∝t, so it is perfectly clear that the general solution will be some
kind of an oscillation, sine or cosine ωt, times an amplitude which goes as bt

more or less. But b can be written as e−c, if b is positive and less than 1. So this
is why the solution looks like e−ct cos ω0t. It is very simple.
What happens if the friction is not so artiﬁcial; for example, ordinary rubbing
on a table, so that the friction force is a certain constant amount, and is indepen-
dent of the size of the oscillation that reverses its direction each half-cycle? Then
the equation is no longer linear, it becomes hard to solve, and must be solved
by the numerical method given in Chapter 9, or by considering each half-cycle
separately. The numerical method is the most powerful method of all, and can
solve any equation. It is only when we have a simple problem that we can use
mathematical analysis.
Mathematical analysis is not the grand thing it is said to be; it solves only
the simplest possible equations. As soon as the equations get a little more
complicated, just a shade—they cannot be solved analytically. But the numerical
method, which was advertised at the beginning of the course, can take care of
any equation of physical interest.
Next, what about the resonance curve? Why is there a resonance? First,
imagine for a moment that there is no friction, and we have something which

25-10could oscillate by itself. If we tapped the pendulum just right each time it went
by, of course we could make it go like mad. But if we close our eyes and do
not watch it, and tap at arbitrary equal intervals, what is going to happen?
Sometimes we will ﬁnd ourselves tapping when it is going the wrong way. When
we happen to have the timing just right, of course, each tap is given at just the
right time, and so it goes higher and higher and higher. So without friction we
get a curve which looks like the solid curve in Fig. 25-5 for diﬀerent frequencies.
Qualitatively, we understand the resonance curve; in order to get the exact shape
of the curve it is probably just as well to do the mathematics. The curve goes
toward inﬁnity as ω →ω0, where ω0 is the natural frequency of the oscillator.

x0

ω0

ω

Fig. 25-5. Resonance curves with various amounts of friction present.

Now suppose there is a little bit of friction; then when the displacement of
the oscillator is small, the friction does not aﬀect it much; the resonance curve
is the same, except when we are near resonance. Instead of becoming inﬁnite
near resonance, the curve is only going to get so high that the work done by
our tapping each time is enough to compensate for the loss of energy by friction
during the cycle. So the top of the curve is rounded oﬀ—it does not go to inﬁnity.
If there is more friction, the top of the curve is rounded oﬀstill more. Now
someone might say, “I thought the widths of the curves depended on the friction.”
That is because the curve is usually plotted so that the top of the curve is called
one unit. However, the mathematical expression is even simpler to understand if
we just plot all the curves on the same scale; then all that happens is that the
friction cuts down the top! If there is less friction, we can go farther up into that
little pinnacle before the friction cuts it oﬀ, so it looks relatively narrow. That is,

25-11the higher the peak of the curve, the narrower the width at half the maximum
height.
Finally, we take the case where there is an enormous amount of friction. It
turns out that if there is too much friction, the system does not oscillate at all.
The energy in the spring is barely able to move it against the frictional force,
and so it slowly oozes down to the equilibrium point.

25-4 Analogs in physics

The next aspect of this review is to note that masses and springs are not the
only linear systems; there are others. In particular, there are electrical systems
called linear circuits, in which we ﬁnd a complete analog to mechanical systems.
We did not learn exactly why each of the objects in an electrical circuit works in
the way it does—that is not to be understood at the present moment; we may
assert it as an experimentally veriﬁable fact that they behave as stated.
For example, let us take the simplest possible circumstance. We have a piece
of wire, which is just a resistance, and we have applied to it a diﬀerence in
potential, V . Now the V means this: if we carry a charge q through the wire
from one terminal to another terminal, the work done is qV . The higher the
voltage diﬀerence, the more work was done when the charge, as we say, “falls”
from the high potential end of the terminal to the low potential end. So charges
release energy in going from one end to the other. Now the charges do not simply
ﬂy from one end straight to the other end; the atoms in the wire oﬀer some
resistance to the current, and this resistance obeys the following law for almost
all ordinary substances: if there is a current I, that is, so and so many charges
per second tumbling down, the number per second that comes tumbling through
the wire is proportional to how hard we push them—in other words, proportional
to how much voltage there is:

V = IR = R(dq/dt).
(25.11)

The coeﬃcient R is called the resistance, and the equation is called Ohm’s Law.
The unit of resistance is the ohm; it is equal to one volt per ampere. In mechanical
situations, to get such a frictional force in proportion to the velocity is diﬃcult;
in an electrical system it is very easy, and this law is extremely accurate for most
metals.
We are often interested in how much work is done per second, the power loss,
or the energy liberated by the charges as they tumble down the wire. When

25-12
