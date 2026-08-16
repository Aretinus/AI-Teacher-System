# Initial conditions

equation using y, and put the two together. If we do this, we will be able to
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

21-8That is the end of our solution, but there is one physically interesting thing
to check, and that is the conservation of energy. Since there are no frictional
losses, energy ought to be conserved. Let us use the formula

x = a cos (ω0t + ∆);
then
v = −ω0a sin (ω0t + ∆).

Now let us ﬁnd out what the kinetic energy T is, and what the potential energy U
is. The potential energy at any moment is 1

2kx2, where x is the displacement
and k is the constant of the spring. If we substitute for x, using our expression
above, we get
U = 1

2kx2 = 1

2ka2 cos2 (ω0t + ∆).

Of course the potential energy is not constant; the potential never becomes
negative, naturally—there is always some energy in the spring, but the amount
of energy ﬂuctuates with x. The kinetic energy, on the other hand, is 1

2mv2, and
by substituting for v we get

2mω2
0a2 sin2 (ω0t + ∆).

2mv2 = 1

T = 1

Now the kinetic energy is zero when x is at the maximum, because then there
is no velocity; on the other hand, it is maximal when x is passing through zero,
because then it is moving fastest. This variation of the kinetic energy is just
the opposite of that of the potential energy. But the total energy ought to be a
constant. If we note that k = mω2
0, we see that

2mω2
0a2[cos2 (ω0t + ∆) + sin2 (ω0t + ∆)] = 1

2mω2
0a2.

T + U = 1

The energy is dependent on the square of the amplitude; if we have twice the
amplitude, we get an oscillation which has four times the energy. The average
potential energy is half the maximum and, therefore, half the total, and the
average kinetic energy is likewise half the total energy.

21-5 Forced oscillations

Next we shall discuss the forced harmonic oscillator, i.e., one in which there
is an external driving force acting. The equation then is the following:

m d2x/dt2 = −kx + F(t).
(21.8)

21-9
