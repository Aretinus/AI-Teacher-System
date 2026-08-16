# Superposition of solutions

we call independent solutions* that we have obtained for our oscillator problem
is only two. The number of independent solutions that one ﬁnds in the general
case depends upon what is called the number of degrees of freedom. We shall
not discuss this in detail now, but if we have a second-order diﬀerential equation,
there are only two independent solutions, and we have found both of them; so
we have the most general solution.
Now let us go on to another proposition, which applies to the situation in
which the system is subjected to an outside force. Suppose the equation is

L(x) = F(t),
(25.6)

and suppose that we have found a special solution of it. Let us say that Joe’s
solution is xJ, and that L(xJ) = F(t). Suppose we want to ﬁnd yet another
solution; suppose we add to Joe’s solution one of those that was a solution of the
free equation (25.5), say x1. Then we see by (25.3) that

L(xJ + x1) = L(xJ) + L(x1) = F(t) + 0 = F(t).
(25.7)

Therefore, to the “forced” solution we can add any “free” solution, and we still
have a solution. The free solution is called a transient solution.
When we have no force acting, and suddenly turn one on, we do not imme-
diately get the steady solution that we solved for with the sine wave solution,
but for a while there is a transient which sooner or later dies out, if we wait long
enough. The “forced” solution does not die out, since it keeps on being driven
by the force. Ultimately, for long periods of time, the solution is unique, but
initially the motions are diﬀerent for diﬀerent circumstances, depending on how
the system was started.

25-2 Superposition of solutions

Now we come to another interesting proposition. Suppose that we have a
certain particular driving force Fa (let us say an oscillatory one with a certain
ω = ωa, but our conclusions will be true for any functional form of Fa) and we
have solved for the forced motion (with or without the transients; it makes no
diﬀerence). Now suppose some other force is acting, let us say Fb, and we solve

* Solutions which cannot be expressed as linear combinations of each other are called
independent.

25-3the same problem, but for this diﬀerent force. Then suppose someone comes
along and says, “I have a new problem for you to solve; I have the force Fa + Fb.”
Can we do it? Of course we can do it, because the solution is the sum of the
two solutions xa and xb for the forces taken separately—a most remarkable
circumstance indeed. If we use (25.3), we see that

L(xa + xb) = L(xa) + L(xb) = Fa(t) + Fb(t).
(25.8)

This is an example of what is called the principle of superposition for linear
systems, and it is very important. It means the following: if we have a complicated
force which can be broken up in any convenient manner into a sum of separate
pieces, each of which is in some way simple, in the sense that for each special
piece into which we have divided the force we can solve the equation, then the
answer is available for the whole force, because we may simply add the pieces of
the solution back together, in the same manner as the total force is compounded
out of pieces (Fig. 25-1).

Fa + Fb

Fa

Fb

xa + xb

xa

xb

Fig. 25-1. An example of the principle of superposition for linear
systems.

25-4Let us give another example of the principle of superposition. In Chapter 12
we said that it was one of the great facts of the laws of electricity that if we have
a certain distribution of charges qa and calculate the electric ﬁeld Ea arising from
these charges at a certain place P, and if, on the other hand, we have another
set of charges qb and we calculate the ﬁeld Eb due to these at the corresponding
place, then if both charge distributions are present at the same time, the ﬁeld E
at P is the sum of Ea due to one set plus Eb due to the other. In other words,
if we know the ﬁeld due to a certain charge, then the ﬁeld due to many charges
is merely the vector sum of the ﬁelds of these charges taken individually. This
is exactly analogous to the above proposition that if we know the result of two
given forces taken at one time, then if the force is considered as a sum of them,
the response is a sum of the corresponding individual responses.

Ea
Eb

qa

E

qb

Fig. 25-2. The principle of superposition in electrostatics.

The reason why this is true in electricity is that the great laws of electricity,
Maxwell’s equations, which determine the electric ﬁeld, turn out to be diﬀerential
equations which are linear, i.e., which have the property (25.3). What corresponds
to the force is the charge generating the electric ﬁeld, and the equation which
determines the electric ﬁeld in terms of the charge is linear.
As another interesting example of this proposition, let us ask how it is possible
to “tune in” to a particular radio station at the same time as all the radio stations
are broadcasting. The radio station transmits, fundamentally, an oscillating
electric ﬁeld of very high frequency which acts on our radio antenna. It is true
that the amplitude of the oscillation of the ﬁeld is changed, modulated, to carry
the signal of the voice, but that is very slow, and we are not going to worry about
it. When one hears “This station is broadcasting at a frequency of 780 kilocycles,”
this indicates that 780,000 oscillations per second is the frequency of the electric
ﬁeld of the station antenna, and this drives the electrons up and down at that
frequency in our antenna. Now at the same time we may have another radio
station in the same town radiating at a diﬀerent frequency, say 550 kilocycles per
second; then the electrons in our antenna are also being driven by that frequency.
Now the question is, how is it that we can separate the signals coming into the

25-5one radio at 780 kilocycles from those coming in at 550 kilocycles? We certainly
do not hear both stations at the same time.
By the principle of superposition, the response of the electric circuit in the
radio, the ﬁrst part of which is a linear circuit, to the forces that are acting due
to the electric ﬁeld Fa + Fb, is xa + xb. It therefore looks as though we will never
disentangle them. In fact, the very proposition of superposition seems to insist
that we cannot avoid having both of them in our system. But remember, for a
resonant circuit, the response curve, the amount of x per unit F, as a function of
the frequency, looks like Fig. 25-3. If it were a very high Q circuit, the response
would show a very sharp maximum. Now suppose that the two stations are
comparable in strength, that is, the two forces are of the same magnitude. The
response that we get is the sum of xa and xb. But, in Fig. 25-3, xa is tremendous,
while xb is small. So, in spite of the fact that the two signals are equal in strength,
when they go through the sharp resonant circuit of the radio tuned for ωa, the
frequency of the transmission of one station, then the response to this station
is much greater than to the other. Therefore the complete response, with both
signals acting, is almost all made up of ωa, and we have selected the station we
want.

xa

|x|

xb

ω
ωb
ωc
ωa

Fig. 25-3. A sharply tuned resonance curve.

Now what about the tuning? How do we tune it? We change ω0 by changing
the L or the C of the circuit, because the frequency of the circuit has to do with
the combination of L and C. In particular, most radios are built so that one can
change the capacitance. When we retune the radio, we can make a new setting
of the dial, so that the natural frequency of the circuit is shifted, say, to ωc. In
those circumstances we hear neither one station nor the other; we get silence,
provided there is no other station at frequency ωc. If we keep on changing the

25-6capacitance until the resonance curve is at ωb, then of course we hear the other
station. That is how radio tuning works; it is again the principle of superposition,
combined with a resonant response.*
To conclude this discussion, let us describe qualitatively what happens if we
proceed further in analyzing a linear problem with a given force, when the force is
quite complicated. Out of the many possible procedures, there are two especially
useful general ways that we can solve the problem. One is this: suppose that we
can solve it for special known forces, such as sine waves of diﬀerent frequencies.
We know it is child’s play to solve it for sine waves. So we have the so-called
“child’s play” cases. Now the question is whether our very complicated force
can be represented as the sum of two or more “child’s play” forces. In Fig. 25-1
we already had a fairly complicated curve, and of course we can make it more
complicated still if we add in more sine waves. So it is certainly possible to
obtain very complicated curves. And, in fact, the reverse is also true: practically
every curve can be obtained by adding together inﬁnite numbers of sine waves of
diﬀerent wavelengths (or frequencies) for each one of which we know the answer.
We just have to know how much of each sine wave to put in to make the given F,
and then our answer, x, is the corresponding sum of the F sine waves, each
multiplied by its eﬀective ratio of x to F. This method of solution is called
the method of Fourier transforms or Fourier analysis. We are not going to
actually carry out such an analysis just now; we only wish to describe the idea
involved.
Another way in which our complicated problem can be solved is the following
very interesting one. Suppose that, by some tremendous mental eﬀort, it were
possible to solve our problem for a special force, namely an impulse. The force is
quickly turned on and then oﬀ; it is all over. Actually we need only solve for an
impulse of some unit strength, any other strength can be gotten by multiplication
by an appropriate factor. We know that the response x for an impulse is a
damped oscillation. Now what can we say about some other force, for instance a
force like that of Fig. 25-4?
Such a force can be likened to a succession of blows with a hammer. First there
is no force, and all of a sudden there is a steady force—impulse, impulse, impulse,

* In modern superheterodyne receivers the actual operation is more complex. The ampliﬁers
are all tuned to a ﬁxed frequency (called IF frequency) and an oscillator of variable tunable
frequency is combined with the input signal in a nonlinear circuit to produce a new frequency
(the diﬀerence of signal and oscillator frequency) equal to the IF frequency, which is then
ampliﬁed. This will be discussed in Chapter 50.

25-7F

t

Fig. 25-4. A complicated force may be treated as a succession of
sharp impulses.

impulse, . . . and then it stops. In other words, we imagine the continuous force
to be a series of impulses, very close together. Now, we know the result for an
impulse, so the result for a whole series of impulses will be a whole series of
damped oscillations: it will be the curve for the ﬁrst impulse, and then (slightly
later) we add to that the curve for the second impulse, and the curve for the
third impulse, and so on. Thus we can represent, mathematically, the complete
solution for arbitrary functions if we know the answer for an impulse. We get
the answer for any other force simply by integrating. This method is called the
Green’s function method. A Green’s function is a response to an impulse, and
the method of analyzing any force by putting together the response of impulses
is called the Green’s function method.
The physical principles involved in both of these schemes are so simple,
involving just the linear equation, that they can be readily understood, but the
mathematical problems that are involved, the complicated integrations and so on,
are a little too advanced for us to attack right now. You will most likely return
to this some day when you have had more practice in mathematics. But the idea
is very simple indeed.
Finally, we make some remarks on why linear systems are so important. The
answer is simple: because we can solve them! So most of the time we solve linear
problems. Second (and most important), it turns out that the fundamental laws
of physics are often linear. The Maxwell equations for the laws of electricity are
linear, for example. The great laws of quantum mechanics turn out, so far as
we know, to be linear equations. That is why we spend so much time on linear
equations: because if we understand linear equations, we are ready, in principle,
to understand a lot of things.
We mention another situation where linear equations are found.
When
displacements are small, many functions can be approximated linearly.
For

25-8example, if we have a simple pendulum, the correct equation for its motion is

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

25-9
