# Complex numbers and harmonic motion

Resonance

23-1 Complex numbers and harmonic motion

In the present chapter we shall continue our discussion of the harmonic
oscillator and, in particular, the forced harmonic oscillator, using a new technique
in the analysis. In the preceding chapter we introduced the idea of complex
numbers, which have real and imaginary parts and which can be represented
on a diagram in which the ordinate represents the imaginary part and the
abscissa represents the real part. If a is a complex number, we may write it as
a = ar + iai, where the subscript r means the real part of a, and the subscript i
means the imaginary part of a. Referring to Fig. 23-1, we see that we may
also write a complex number a = x + iy in the form x + iy = reiθ, where
r2 = x2 + y2 = (x + iy)(x −iy) = aa∗. (The complex conjugate of a, written
a∗, is obtained by reversing the sign of i in a.) So we shall represent a complex
number in either of two forms, a real plus an imaginary part, or a magnitude r and
a phase angle θ, so-called. Given r and θ, x and y are clearly r cos θ and r sin θ
and, in reverse, given a complex number x + iy, r =
p

x2 + y2 and tan θ = y/x,
the ratio of the imaginary to the real part.

IMAGINARY
AXIS

a

y
r

θ

x

REAL AXIS

Fig. 23-1. A complex number may be represented by a point in the
“complex plane.”

23-1We are going to apply complex numbers to our analysis of physical phenomena
by the following trick. We have examples of things that oscillate; the oscillation
may have a driving force which is a certain constant times cos ωt. Now such a force,
F = F0 cos ωt, can be written as the real part of a complex number F = F0eiωt

because eiωt = cos ωt + i sin ωt. The reason we do this is that it is easier to work
with an exponential function than with a cosine. So the whole trick is to represent
our oscillatory functions as the real parts of certain complex functions. The
complex number F that we have so deﬁned is not a real physical force, because
no force in physics is really complex; actual forces have no imaginary part, only
a real part. We shall, however, speak of the “force” F0eiωt, but of course the
actual force is the real part of that expression.
Let us take another example. Suppose we want to represent a force which
is a cosine wave that is out of phase with a delayed phase ∆. This, of course,
would be the real part of F0ei(ωt−∆), but exponentials being what they are, we
may write ei(ωt−∆) = eiωte−i∆. Thus we see that the algebra of exponentials is
much easier than that of sines and cosines; this is the reason we choose to use
complex numbers. We shall often write

F = F0e−i∆eiωt = ˆFeiωt.
(23.1)

We write a little caret (ˆ) over the F to remind ourselves that this quantity is a
complex number: here the number is

ˆF = F0e−i∆.

Now let us solve an equation, using complex numbers, to see whether we can
work out a problem for some real case. For example, let us try to solve

d2x

dt2 + kx

m = F

m = F0

m cos ωt,
(23.2)

where F is the force which drives the oscillator and x is the displacement. Now,
absurd though it may seem, let us suppose that x and F are actually complex
numbers, for a mathematical purpose only. That is to say, x has a real part and
an imaginary part times i, and F has a real part and an imaginary part times i.
Now if we had a solution of (23.2) with complex numbers, and substituted the
complex numbers in the equation, we would get

d2(xr + ixi)

dt2
+ k(xr + ixi)

m
= Fr + iFi

m

23-2or
d2xr

m + i
d2xi


= Fr

m + iFi

dt2 + kxr

dt2 + kxi

m .

m

Now, since if two complex numbers are equal, their real parts must be equal and
their imaginary parts must be equal, we deduce that the real part of x satisﬁes
the equation with the real part of the force. We must emphasize, however, that
this separation into a real part and an imaginary part is not valid in general,
but is valid only for equations which are linear, that is, for equations in which x
appears in every term only in the ﬁrst power or the zeroth power. For instance,
if there were in the equation a term λx2, then when we substitute xr + ixi, we
would get λ(xr + ixi)2, but when separated into real and imaginary parts this
would yield λ(x2
r −x2
i ) as the real part and 2iλxrxi as the imaginary part. So we
see that the real part of the equation would not involve just λx2
r, but also −λx2
i .
In this case we get a diﬀerent equation than the one we wanted to solve, with xi,
the completely artiﬁcial thing we introduced in our analysis, mixed in.
Let us now try our new method for the problem of the forced oscillator, that
we already know how to solve. We want to solve Eq. (23.2) as before, but we say
that we are going to try to solve

m =
ˆFeiωt

d2x

dt2 + kx

m
,
(23.3)

where ˆFeiωt is a complex number. Of course x will also be complex, but remember
the rule: take the real part to ﬁnd out what is really going on. So we try to
solve (23.3) for the forced solution; we shall discuss other solutions later. The
forced solution has the same frequency as the applied force, and has some
amplitude of oscillation and some phase, and so it can be represented also
by some complex number ˆx whose magnitude represents the swing of x and
whose phase represents the time delay in the same way as for the force. Now
a wonderful feature of an exponential function is that d(ˆxeiωt)/dt = iωˆxeiωt.
When we diﬀerentiate an exponential function, we bring down the exponent as
a simple multiplier. The second derivative does the same thing, it brings down
another iω, and so it is very simple to write immediately, by inspection, what the
equation is for ˆx: every time we see a diﬀerentiation, we simply multiply by iω.
(Diﬀerentiation is now as easy as multiplication! This idea of using exponentials
in linear diﬀerential equations is almost as great as the invention of logarithms,

23-3in which multiplication is replaced by addition. Here diﬀerentiation is replaced
by multiplication.) Thus our equation becomes

(iω)2ˆx + (kˆx/m) = ˆF/m.
(23.4)

(We have cancelled the common factor eiωt.) See how simple it is! Diﬀerential
equations are immediately converted, by sight, into mere algebraic equations; we
virtually have the solution by sight, that

ˆx =
ˆF/m
(k/m) −ω2 ,

since (iω)2 = −ω2. This maybe slightly simpliﬁed by substituting k/m = ω2
0,
which gives
ˆx = ˆF/m(ω2
0 −ω2).
(23.5)

This, of course, is the solution we had before; for since m(ω2
0 −ω2) is a real
number, the phase angles of ˆF and of ˆx are the same (or perhaps 180◦apart, if
ω2 > ω2
0), as advertised previously. The magnitude of ˆx, which measures how far
it oscillates, is related to the size of the ˆF by the factor 1/m(ω2
0 −ω2), and this
factor becomes enormous when ω is nearly equal to ω0. So we get a very strong
response when we apply the right frequency ω (if we hold a pendulum on the
end of a string and shake it at just the right frequency, we can make it swing
very high).

23-2 The forced oscillator with damping

That, then, is how we analyze oscillatory motion with the more elegant
mathematical technique. But the elegance of the technique is not at all exhibited
in such a problem that can be solved easily by other methods. It is only exhibited
when one applies it to more diﬃcult problems. Let us therefore solve another,
more diﬃcult problem, which furthermore adds a relatively realistic feature to
the previous one. Equation (23.5) tells us that if the frequency ω were exactly
equal to ω0, we would have an inﬁnite response. Actually, of course, no such
inﬁnite response occurs because some other things, like friction, which we have
so far ignored, limits the response. Let us therefore add to Eq. (23.2) a friction
term.
Ordinarily such a problem is very diﬃcult because of the character and
complexity of the frictional term. There are, however, many circumstances in

23-4
