# The energy of an oscillator

Transients

24-1 The energy of an oscillator

Although this chapter is entitled “transients,” certain parts of it are, in a
way, part of the last chapter on forced oscillation. One of the features of a forced
oscillation which we have not yet discussed is the energy in the oscillation. Let
us now consider that energy.
In a mechanical oscillator, how much kinetic energy is there? It is proportional
to the square of the velocity. Now we come to an important point. Consider an
arbitrary quantity A, which may be the velocity or something else that we want
to discuss. When we write A = ˆAeiωt, a complex number, the true and honest
A, in the physical world, is only the real part; therefore if, for some reason, we
want to use the square of A, it is not right to square the complex number and
then take the real part, because the real part of the square of a complex number
is not just the square of the real part, but also involves the imaginary part. So
when we wish to ﬁnd the energy we have to get away from the complex notation
for a while to see what the inner workings are.
Now the true physical A is the real part of A0ei(ωt+∆), that is, A = A0 cos (ωt+
∆), where ˆA, the complex number, is written as A0ei∆. Now the square of this
real physical quantity is A2 = A2
0 cos2 (ωt + ∆). The square of the quantity, then,
goes up and down from a maximum to zero, like the square of the cosine. The
square of the cosine has a maximum of 1 and a minimum of 0, and its average
value is 1/2.
In many circumstances we are not interested in the energy at any speciﬁc
moment during the oscillation; for a large number of applications we merely
want the average of A2, the mean of the square of A over a period of time large
compared with the period of oscillation. In those circumstances, the average
of the cosine squared may be used, so we have the following theorem: if A is
represented by a complex number, then the mean of A2 is equal to 1

2A2
0. Now A2

24-1is the square of the magnitude of the complex ˆA. (This can be written in many
ways—some people like to write | ˆA|2; others write, ˆA ˆA∗, ˆA times its complex
conjugate.) We shall use this theorem several times.
Now let us consider the energy in a forced oscillator. The equation for the
forced oscillator is

m d2x/dt2 + γm dx/dt + mω2
0x = F(t).
(24.1)

In our problem, of course, F(t) is a cosine function of t. Now let us analyze the
situation: how much work is done by the outside force F? The work done by the
force per second, i.e., the power, is the force times the velocity. (We know that
the diﬀerential work in a time dt is F dx, and the power is F dx/dt.) Thus

2
.
(24.2)

d2x

dt = m
dx


+ ω2
0x
dx


+ γm
dx

P = F dx

dt2

dt

dt

dt

2m(dx/dt)2 +
2mω2
0x2], as is immediately veriﬁed by diﬀerentiating. That is to say, the term in
brackets is a pure derivative of two terms that are easy to understand—one is the
kinetic energy of motion, and the other is the potential energy of the spring. Let
us call this quantity the stored energy, that is, the energy stored in the oscillation.
Suppose that we want the average power over many cycles when the oscillator is
being forced and has been running for a long time. In the long run, the stored
energy does not change—its derivative gives zero average eﬀect. In other words,
if we average the power in the long run, all the energy ultimately ends up in the
resistive term γm(dx/dt)2. There is some energy stored in the oscillation, but
that does not change with time, if we average over many cycles. Therefore the
mean power ⟨P⟩is
⟨P⟩= ⟨γm(dx/dt)2⟩.
(24.3)

But the ﬁrst two terms on the right can also be written as d/dt[ 1

Using our method of writing complex numbers, and our theorem that ⟨A2⟩=
2A2
0, we may ﬁnd this mean power. Thus if x = ˆxeiωt, then dx/dt = iωˆxeiωt.
Therefore, in these circumstances, the average power could be written as

2γmω2x2
0.
(24.4)

⟨P⟩= 1

In the notation for electrical circuits, dx/dt is replaced by the current I (I is
dq/dt, where q corresponds to x), and mγ corresponds to the resistance R. Thus

24-2the rate of the energy loss—the power used up by the forcing function—is the
resistance in the circuit times the average square of the current:

⟨P⟩= R⟨I2⟩= R · 1

2I2
0.
(24.5)

This energy, of course, goes into heating the resistor; it is sometimes called the
heating loss or the Joule heating.
Another interesting feature to discuss is how much energy is stored. That is
not the same as the power, because although power was at ﬁrst used to store up
some energy, after that the system keeps on absorbing power, insofar as there
are any heating (resistive) losses. At any moment there is a certain amount of
stored energy, so we would like to calculate the mean stored energy ⟨E⟩also. We
have already calculated what the average of (dx/dt)2 is, so we ﬁnd

2mω2
0⟨x2⟩

2m⟨(dx/dt)2⟩+ 1

⟨E⟩= 1

2x2
0.
(24.6)

2m(ω2 + ω2
0) 1

= 1

Now, when an oscillator is very eﬃcient, and if ω is near ω0, so that |ˆx| is large,
the stored energy is very high—we can get a large stored energy from a relatively
small force. The force does a great deal of work in getting the oscillation going,
but then to keep it steady, all it has to do is to ﬁght the friction. The oscillator
can have a great deal of energy if the friction is very low, and even though it is
oscillating strongly, not much energy is being lost. The eﬃciency of an oscillator
can be measured by how much energy is stored, compared with how much work
the force does per oscillation.
How does the stored energy compare with the amount of work that is done in
one cycle? This is called the Q of the system, and Q is deﬁned as 2π times the
mean stored energy, divided by the work done per cycle. (If we were to say the
work done per radian instead of per cycle, then the 2π disappears.)

2m(ω2 + ω2
0) · ⟨x2⟩
γmω2⟨x2⟩· 2π/ω
= ω2 + ω2
2γω
.
(24.7)

Q = 2π

Q is not a very useful number unless it is very large. When it is relatively large,
it gives a measure of how good the oscillator is. People have tried to deﬁne Q
in the simplest and most useful way; various deﬁnitions diﬀer a bit from one
another, but if Q is very large, all deﬁnitions are in agreement. The most generally
accepted deﬁnition is Eq. (24.7), which depends on ω. For a good oscillator, close

24-3to resonance, we can simplify (24.7) a little by setting ω = ω0, and we then have
Q = ω0/γ, which is the deﬁnition of Q that we used before.
What is Q for an electrical circuit? To ﬁnd out, we merely have to translate
L for m, R for mγ, and 1/C for mω2
0 (see Table 23-1). The Q at resonance is
Lω/R, where ω is the resonance frequency. If we consider a circuit with a high
Q, that means that the amount of energy stored in the oscillation is very large
compared with the amount of work done per cycle by the machinery that drives
the oscillations.

24-2 Damped oscillations

We now turn to our main topic of discussion: transients. By a transient is
meant a solution of the diﬀerential equation when there is no force present, but
when the system is not simply at rest. (Of course, if it is standing still at the
origin with no force acting, that is a nice problem—it stays there!) Suppose the
oscillation starts another way: say it was driven by a force for a while, and then
we turn oﬀthe force. What happens then? Let us ﬁrst get a rough idea of what
will happen for a very high Q system. So long as a force is acting, the stored
energy stays the same, and there is a certain amount of work done to maintain
it. Now suppose we turn oﬀthe force, and no more work is being done; then the
losses which are eating up the energy of the supply are no longer eating up its
energy—there is no more driver. The losses will have to consume, so to speak,
the energy that is stored. Let us suppose that Q/2π = 1000. Then the work
done per cycle is 1/1000 of the stored energy. Is it not reasonable, since it is
oscillating with no driving force, that in one cycle the system will still lose a
thousandth of its energy E, which ordinarily would have been supplied from the
outside, and that it will continue oscillating, always losing 1/1000 of its energy
per cycle? So, as a guess, for a relatively high Q system, we would suppose that
the following equation might be roughly right (we will later do it exactly, and it
will turn out that it was right!):

dE/dt = −ωE/Q.
(24.8)

This is rough because it is true only for large Q. In each radian the system loses a
fraction 1/Q of the stored energy E. Thus in a given amount of time dt the energy
will change by an amount ω dt/Q, since the number of radians associated with
the time dt is ω dt. What is the frequency? Let us suppose that the system moves

24-4
