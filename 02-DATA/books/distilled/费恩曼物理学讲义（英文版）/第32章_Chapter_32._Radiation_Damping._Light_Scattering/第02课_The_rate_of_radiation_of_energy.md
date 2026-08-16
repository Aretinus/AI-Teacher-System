# The rate of radiation of energy

resistance to acceleration, the radiation resistance of a moving charge, has run
into many diﬃculties, because our present view of the electron is that it is not a
“little ball”; this problem has never been solved. Nevertheless we can calculate
exactly, of course, what the net radiation resistance force must be, i.e., how much
loss there must be when we accelerate a charge, in spite of not knowing directly
the mechanism of how that force works.

32-2 The rate of radiation of energy

Now we shall calculate the total energy radiated by an accelerating charge.
To keep the discussion general, we shall take the case of a charge accelerating any
which way, but nonrelativistically. At a moment when the acceleration is, say,
vertical, we know that the electric ﬁeld that is generated is the charge multiplied
by the projection of the retarded acceleration, divided by the distance. So we
know the electric ﬁeld at any point, and we therefore know the square of the
electric ﬁeld and thus the energy ϵ0cE2 leaving through a unit area per second.
The quantity ϵ0c appears quite often in expressions involving radiowave
propagation. Its reciprocal is called the impedance of a vacuum, and it is an easy
number to remember: it has the value 1/ϵ0c = 377 ohms. So the power in watts
per square meter is equal to the average of the ﬁeld squared, divided by 377.
Using our expression (29.1) for the electric ﬁeld, we ﬁnd that

S = q2a′2 sin2 θ

16π2ϵ0r2c3
(32.2)

is the power per square meter radiated in the direction θ. We notice that it goes
inversely as the square of the distance, as we said before. Now suppose we wanted
the total energy radiated in all directions: then we must integrate (32.2) over all
directions. First we multiply by the area, to ﬁnd the amount that ﬂows within a
little angle dθ (Fig. 32-1). We need the area of a spherical section. The way to
think of it is this: if r is the radius, then the width of the annular segment is r dθ,
and the circumference is 2πr sin θ, because r sin θ is the radius of the circle. So
the area of the little piece of the sphere is 2πr sin θ times r dθ:

dA = 2πr2 sin θ dθ.
(32.3)

By multiplying the ﬂux [(32.2), the power per square meter] by the area in square
meters included in the small angle dθ, we ﬁnd the amount of energy that is

32-3θ

r sin θ

dθ

r

a′

Fig. 32-1. The area of a spherical segment is 2πr sin θ · r dθ.

liberated in this direction between θ and θ + dθ; then we integrate that over all
the angles θ from 0 to 180◦:

Z π

P =
Z
S dA = q2a′2

sin3 θ dθ.
(32.4)

8πϵ0c3

By writing sin3 θ = (1−cos2 θ) sin θ it is not hard to show that
R π
0 sin3 θ dθ = 4/3.
Using that fact, we ﬁnally get

P = q2a′2

6πϵ0c3 .
(32.5)

This expression deserves some remarks. First of all, since the vector a′ had a
certain direction, the a′2 in (32.5) would be the square of the vector a′, that is,
a′ · a′, the length of the vector, squared. Secondly, the ﬂux (32.2) was calculated
using the retarded acceleration; that is, the acceleration at the time at which the
energy now passing through the sphere was radiated. We might like to say that
this energy was in fact liberated at this earlier time. This is not exactly true; it
is only an approximate idea. The exact time when the energy is liberated cannot
be deﬁned precisely. All we can really calculate precisely is what happens in a
complete motion, like an oscillation or something, where the acceleration ﬁnally
ceases. Then what we ﬁnd is that the total energy ﬂux per cycle is the average
of acceleration squared, for a complete cycle. This is what should really appear
in (32.5). Or, if it is a motion with an acceleration that is initially and ﬁnally
zero, then the total energy that has ﬂown out is the time integral of (32.5).
To illustrate the consequences of formula (32.5) when we have an oscillating
system, let us see what happens if the displacement x of the charge is oscillating
so that the acceleration a is −ω2x0eiωt. The average of the acceleration squared

32-4over a cycle (remember that we have to be very careful when we square things
that are written in complex notation—it really is the cosine, and the average
of cos2 ωt is one-half) thus is
⟨a′2⟩= 1

2ω4x2
0.

Therefore

P = q2ω4x2
12πϵ0c3 .
(32.6)

The formulas we are now discussing are relatively advanced and more or less
modern; they date from the beginning of the twentieth century, and they are very
famous. Because of their historical value, it is important for us to be able to read
about them in older books. In fact, the older books also used a system of units
diﬀerent from our present mks system. However, all these complications can be
straightened out in the ﬁnal formulas dealing with electrons by the following
rule: The quantity q2
e/4πϵ0, where qe is the electronic charge (in coulombs), has,
historically, been written as e2. It is very easy to calculate that e in the mks
system is numerically equal to 1.5188×10−14, because we know that, numerically,
qe = 1.60206 × 10−19 and 1/4πϵ0 = 8.98748 × 109. Therefore we shall often use
the convenient abbreviation

e2 =
q2
e
4πϵ0
.
(32.7)

If we use the above numerical value of e in the older formulas and treat them as
though they were written in mks units, we will get the right numerical results.
For example, the older form of (32.5) is P = 2

3e2a′2/c3. Again, the potential
energy of a proton and an electron at distance r is q2
e/4πϵ0r or e2/r, with
e = 1.5188 × 10−14 (mks).

32-3 Radiation damping

Now the fact that an oscillator loses a certain energy would mean that if we
had a charge on the end of a spring (or an electron in an atom) which has a
natural frequency ω0, and we start it oscillating and let it go, it will not oscillate
forever, even if it is in empty space millions of miles from anything. There is no
oil, no resistance, in an ordinary sense; no “viscosity.” But nevertheless it will
not oscillate, as we might once have said, “forever,” because if it is charged it is
radiating energy, and therefore the oscillation will slowly die out. How slowly?
What is the Q of such an oscillator, caused by the electromagnetic eﬀects, the

32-5
