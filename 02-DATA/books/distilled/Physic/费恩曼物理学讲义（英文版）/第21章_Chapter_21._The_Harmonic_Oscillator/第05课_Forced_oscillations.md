# Forced oscillations

That is the end of our solution, but there is one physically interesting thing
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

21-9We would like to ﬁnd out what happens in these circumstances. The external
driving force can have various kinds of functional dependence on the time; the
ﬁrst one that we shall analyze is very simple—we shall suppose that the force is
oscillating:
F(t) = F0 cos ωt.
(21.9)

Notice, however, that this ω is not necessarily ω0: we have ω under our control;
the forcing may be done at diﬀerent frequencies. So we try to solve Eq. (21.8)
with the special force (21.9). What is the solution of (21.8)? One special solution,
(we shall discuss the more general cases later) is

x = C cos ωt,
(21.10)

where the constant is to be determined. In other words, we might suppose that
if we kept pushing back and forth, the mass would follow back and forth in step
with the force. We can try it anyway. So we put (21.10) and (21.9) into (21.8),
and get
−mω2C cos ωt = −mω2
0C cos ωt + F0 cos ωt.
(21.11)

We have also put in k = mω2
0, so that we will understand the equation better at
the end. Now because the cosine appears everywhere, we can divide it out, and
that shows that (21.10) is, in fact, a solution, provided we pick C just right. The
answer is that C must be

C = F0/m(ω2
0 −ω2).
(21.12)

That is, m oscillates at the same frequency as the force, but with an amplitude
which depends on the frequency of the force, and also upon the frequency of the
natural motion of the oscillator. It means, ﬁrst, that if ω is very small compared
with ω0, then the displacement and the force are in the same direction. On the
other hand, if we shake it back and forth very fast, then (21.12) tells us that C is
negative if ω is above the natural frequency ω0 of the harmonic oscillator. (We
will call ω0 the natural frequency of the harmonic oscillator, and ω the applied
frequency.) At very high frequency the denominator may become very large, and
there is then not much amplitude.
Of course the solution we have found is the solution only if things are started
just right, for otherwise there is a part which usually dies out after a while. This
other part is called the transient response to F(t), while (21.10) and (21.12) are
called the steady-state response.

21-10According to our formula (21.12), a very remarkable thing should also occur:
if ω is almost exactly the same as ω0, then C should approach inﬁnity. So if we
adjust the frequency of the force to be “in time” with the natural frequency, then
we should get an enormous displacement. This is well known to anybody who
has pushed a child on a swing. It does not work very well to close our eyes and
push at a certain speed at random. If we happen to get the right timing, then
the swing goes very high, but if we have the wrong timing, then sometimes we
may be pushing when we should be pulling, and so on, and it does not work.
If we make ω exactly equal to ω0, we ﬁnd that it should oscillate at an
inﬁnite amplitude, which is, of course, impossible. The reason it does not is that
something goes wrong with the equation, there are some other frictional terms,
and other forces, which are not in (21.8) but which occur in the real world. So
the amplitude does not reach inﬁnity for some reason; it may be that the spring
breaks!

21-1122

Algebra

22-1 Addition and multiplication

In our study of oscillating systems we shall have occasion to use one of the
most remarkable, almost astounding, formulas in all of mathematics. From the
physicist’s point of view we could bring forth this formula in two minutes or
so, and be done with it. But science is as much for intellectual enjoyment as
for practical utility, so instead of just spending a few minutes on this amazing
jewel, we shall surround the jewel by its proper setting in the grand design of
that branch of mathematics which is called elementary algebra.
Now you may ask, “What is mathematics doing in a physics lecture?” We
have several possible excuses: ﬁrst, of course, mathematics is an important tool,
but that would only excuse us for giving the formula in two minutes. On the
other hand, in theoretical physics we discover that all our laws can be written in
mathematical form; and that this has a certain simplicity and beauty about it.
So, ultimately, in order to understand nature it may be necessary to have a deeper
understanding of mathematical relationships. But the real reason is that the
subject is enjoyable, and although we humans cut nature up in diﬀerent ways, and
we have diﬀerent courses in diﬀerent departments, such compartmentalization is
really artiﬁcial, and we should take our intellectual pleasures where we ﬁnd them.
Another reason for looking more carefully at algebra now, even though most
of us studied algebra in high school, is that that was the ﬁrst time we studied it;
all the equations were unfamiliar, and it was hard work, just as physics is now.
Every so often it is a great pleasure to look back to see what territory has been
covered, and what the great map or plan of the whole thing is. Perhaps some day
somebody in the Mathematics Department will present a lecture on mechanics in
such a way as to show what it was we were trying to learn in the physics course!
The subject of algebra will not be developed from the point of view of a
mathematician, exactly, because the mathematicians are mainly interested in how
various mathematical facts are demonstrated, and how many assumptions are
absolutely required, and what is not required. They are not so interested in the

22-1
