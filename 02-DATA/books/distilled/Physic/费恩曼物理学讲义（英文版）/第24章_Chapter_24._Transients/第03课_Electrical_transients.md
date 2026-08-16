# Electrical transients

This is very much like our guessed-at solution (24.10), except that the frequency
really is ωγ. This is the only error, so it is the same thing—we have the right
idea. But everything is not all right! What is not all right is that there is another
solution.
The other solution is α2, and we see that the diﬀerence is only that the sign
of ωγ is reversed:
x2 = Be−γt/2e−iωγt.
(24.18)

What does this mean? We shall soon prove that if x1 and x2 are each a possible
solution of Eq. (24.1) with F = 0, then x1 + x2 is also a solution of the same
equation! So the general solution x is of the mathematical form

x = e−γt/2(Aeiωγt + Be−iωγt).
(24.19)

Now we may wonder why we bother to give this other solution, since we were
so happy with the ﬁrst one all by itself. What is the extra one for, because
of course we know we should only take the real part? We know that we must
take the real part, but how did the mathematics know that we only wanted the
real part? When we had a nonzero driving force F(t), we put in an artiﬁcial
force to go with it, and the imaginary part of the equation, so to speak, was
driven in a deﬁnite way. But when we put F(t) ≡0, our convention that x
should be only the real part of whatever we write down is purely our own, and
the mathematical equations do not know it yet. The physical world has a real
solution, but the answer that we were so happy with before is not real, it is
complex. The equation does not know that we are arbitrarily going to take the
real part, so it has to present us, so to speak, with a complex conjugate type of
solution, so that by putting them together we can make a truly real solution;
that is what α2 is doing for us. In order for x to be real, Be−ωγt will have to be
the complex conjugate of Aeωγt that the imaginary parts disappear. So it turns
out that B is the complex conjugate of A, and our real solution is

x = e−γt/2(Aeiωγt + A∗e−iωγt).
(24.20)

So our real solution is an oscillation with a phase shift and a damping—just as
advertised.

24-3 Electrical transients

Now let us see if the above really works. We construct the electrical circuit
shown in Fig. 24-2, in which we apply to an oscilloscope the voltage across the

24-7C

r

L

S

R

Fig. 24-2. An electrical circuit for demonstrating transients.

inductance L after we suddenly turn on a voltage by closing the switch S. It is an
oscillatory circuit, and it generates a transient of some kind. It corresponds to a
circumstance in which we suddenly apply a force and the system starts to oscillate.
It is the electrical analog of a damped mechanical oscillator, and we watch the
oscillation on an oscilloscope, where we should see the curves that we were trying
to analyze. (The horizontal motion of the oscilloscope is driven at a uniform speed,
while the vertical motion is the voltage across the inductor. The rest of the circuit
is only a technical detail. We would like to repeat the experiment many, many
times, since the persistence of vision is not good enough to see only one trace
on the screen. So we do the experiment again and again by closing the switch
60 times a second; each time we close the switch, we also start the oscilloscope
horizontal sweep, and it draws the curve over and over.) In Figs. 24-3 to 24-6 we
see examples of damped oscillations, actually photographed on an oscilloscope
screen. Figure 24-3 shows a damped oscillation in a circuit which has a high Q, a
small γ. It does not die out very fast; it oscillates many times on the way down.
But let us see what happens as we decrease Q, so that the oscillation dies out
more rapidly. We can decrease Q by increasing the resistance R in the circuit.
When we increase the resistance in the circuit, it dies out faster (Fig. 24-4).
Then if we increase the resistance in the circuit still more, it dies out faster still
(Fig. 24-5). But when we put in more than a certain amount, we cannot see any
oscillation at all! The question is, is this because our eyes are not good enough?
If we increase the resistance still more, we get a curve like that of Fig. 24-6, which
does not appear to have any oscillations, except perhaps one. Now, how can we
explain that by mathematics?
The resistance is, of course, proportional to the γ term in the mechanical
device. Speciﬁcally, γ is R/L. Now if we increase the γ in the solutions (24.14)
and (24.15) that we were so happy with before, chaos sets in when γ/2 exceeds
ω0; we must write it a diﬀerent way, as

iγ/2 + i
q

γ2/4 −ω2
and
iγ/2 −i
q

γ2/4 −ω2
0.

24-8Figure 24-3

Figure 24-4

Figure 24-5

Figure 24-6

24-9Those are now the two solutions and, following the same line of mathematical
reasoning as previously, we again ﬁnd two solutions: eiα1t and eiα2t. If we now
substitute for α1, we get

x = Ae−(γ/2+√

γ2/4−ω2
0)t,

a nice exponential decay with no oscillations. Likewise, the other solution is

x = Be−(γ/2−√

γ2/4−ω2
0)t.

Note that the square root cannot exceed γ/2, because even if ω0 = 0, one term
just equals the other. But ω2
0 is taken away from γ2/4, so the square root is less
than γ/2, and the term in parentheses is, therefore, always a positive number.
Thank goodness! Why? Because if it were negative, we would ﬁnd e raised to a
positive factor times t, which would mean it was exploding! In putting more and
more resistance into the circuit, we know it is not going to explode—quite the
contrary. So now we have two solutions, each one by itself a dying exponential,
but one having a much faster “dying rate” than the other. The general solution is
of course a combination of the two; the coeﬃcients in the combination depending
upon how the motion starts—what the initial conditions of the problem are. In
the particular way this circuit happens to be starting, the A is negative and the
B is positive, so we get the diﬀerence of two exponential curves.
Now let us discuss how we can ﬁnd the two coeﬃcients A and B (or A and A∗),
if we know how the motion was started.
Suppose that at t = 0 we know that x = x0, and dx/dt = v0. If we put t = 0,
x = x0, and dx/dt = v0 into the expressions

x = e−γt/2(Aeiωγt + A∗e−iωγt),

dx/dt = e−γt/2[(−γ/2 + iωγ)Aeiωγt + (−γ/2 −iωγ)A∗e−iωγt],

we ﬁnd, since e0 = ei0 = 1,

x0 = A + A∗= 2AR,

v0 = −(γ/2)(A + A∗) + iωγ(A −A∗)

= −γx0/2 + iωγ(2iAI),

where A = AR + iAI, and A∗= AR −iAI. Thus we ﬁnd

AR = x0/2

24-10and

AI = −(v0 + γx0/2)/2ωγ.
(24.21)

This completely determines A and A∗, and therefore the complete curve of the
transient solution, in terms of how it begins. Incidentally, we can write the
solution another way if we note that

eiθ + e−iθ = 2 cos θ
and
eiθ −e−iθ = 2i sin θ.

We may then write the complete solution as

x = e−γt/2

x0 cos ωγt + v0 + γx0/2

ωγ
sin ωγt

,
(24.22)

where ωγ = +
p

ω2
0 −γ2/4. This is the mathematical expression for the way an
oscillation dies out. We shall not make direct use of it, but there are a number
of points we should like to emphasize that are true in more general cases.
First of all the behavior of such a system with no external force is expressed by a
sum, or superposition, of pure exponentials in time (which we wrote as eiαt). This
is a good solution to try in such circumstances. The values of α may be complex
in general, the imaginary parts representing damping. Finally the intimate
mathematical relation of the sinusoidal and exponential function discussed in
Chapter 22 often appears physically as a change from oscillatory to exponential
behavior when some physical parameter (in this case resistance, γ) exceeds some
critical value.

24-1125

Linear Systems and Review

25-1 Linear diﬀerential equations

In this chapter we shall discuss certain aspects of oscillating systems that are
found somewhat more generally than just in the particular systems we have been
discussing. For our particular system, the diﬀerential equation that we have been
solving is

m d2x

dt2 + γm dx

dt + mω2
0x = F(t).
(25.1)

Now this particular combination of “operations” on the variable x has the
interesting property that if we substitute (x+y) for x, then we get the sum of the
same operations on x and y; or, if we multiply x by a, then we get just a times
the same combination. This is easy to prove. Just as a “shorthand” notation,
because we get tired of writing down all those letters in (25.1), we shall use the
symbol L(x) instead. When we see this, it means the left-hand side of (25.1),
with x substituted in. With this system of writing, L(x + y) would mean the
following:

L(x + y) = m d2(x + y)

dt2
+ γm d(x + y)

dt
+ mω2
0(x + y).
(25.2)

(We underline the L so as to remind ourselves that it is not an ordinary function.)
We sometimes call this an operator notation, but it makes no diﬀerence what we
call it, it is just “shorthand.”
Our ﬁrst statement was that

L(x + y) = L(x) + L(y),
(25.3)

which of course follows from the fact that a(x + y) = ax + ay, d(x + y)/dt =
dx/dt + dy/dt, etc.

25-1
