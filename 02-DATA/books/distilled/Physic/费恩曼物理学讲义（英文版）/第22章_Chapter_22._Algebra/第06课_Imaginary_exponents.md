# Imaginary exponents

Table 22-3

Successive Squares of 10i/1024 = 1 + 0.0022486i

Power is
1024s
10is

i/1024
1.00000 + 0.00225i*
i/512
1.00000 + 0.00450i
i/256
0.99996 + 0.00900i
i/128
0.99984 + 0.01800i
i/64
0.99936 + 0.03599i
i/32
0.99742 + 0.07193i
i/16
0.98967 + 0.14349i
i/8
0.95885 + 0.28402i
i/4
0.83872 + 0.54467i
i/2
0.40679 + 0.91365i
i/1
−0.66928 + 0.74332i

* Should be 0.0022486i

Which of the numbers in Table 22-3 do we have to multiply together to
get a pure imaginary result? After a little trial and error, we discover that to
reduce x the most, it is best to multiply “512” by “128.” This gives 0.13056 +
0.99159i. Then we discover that we should multiply this by a number whose
imaginary part is about equal to the size of the real part we are trying to remove.
Thus we choose “64” whose y-value is 0.14349, since that is closest to 0.13056.
This then gives −0.01308 + 1.00008i. Now we have overshot, and must divide
by 0.99996 + 0.00900i. How do we do that? By changing the sign of i and
multiplying by 0.99996 −0.00900i (which works if x2 + y2 = 1). Continuing in
this way, we ﬁnd that the entire power to which 10 must be raised to give i is
i(512 + 128 + 64 −4 −2 + 0.20)/1024, or 698.20i/1024. If we raise 10 to that
power, we can get i. Therefore log10 i = 0.68184i.

22-6 Imaginary exponents

To further investigate the subject of taking complex imaginary powers, let
us look at the powers of 10 taking successive powers, not doubling the power
each time, in order to follow Table 22-3 further and to see what happens to those
minus signs. This is shown in Table 22-4, in which we take 10i/8, and just keep

22-14Table 22-4

Successive Powers of 10i/8

p = power · 8/i
10ip/8

1.00000 + 0.00000i
0.95882 + 0.28402i
0.83867 + 0.54465i
0.64944 + 0.76042i
0.40672 + 0.91356i
0.13050 + 0.99146i
−0.15647 + 0.98770i
−0.43055 + 0.90260i
−0.66917 + 0.74315i
−0.85268 + 0.52249i
−0.96596 + 0.25880i
−0.99969 −0.02620i
−0.95104 −0.30905i
−0.62928 −0.77717i
−0.10447 −0.99453i
+0.45454 −0.89098i
+0.86648 −0.49967i
+0.99884 + 0.05287i
+0.80890 + 0.58836i

multiplying it. We see that x decreases, passes through zero, swings almost to −1
(if we could get in between p = 10 and p = 11 it would obviously swing to −1),
and swings back. The y-value is going back and forth too.
In Fig. 22-1 the dots represent the numbers that appear in Table 22-4, and
the lines are just drawn to help you visually. So we see that the numbers x and y
oscillate; 10is repeats itself, it is a periodic thing, and as such, it is easy enough
to explain, because if a certain power is i, then the fourth power of that would
be i2 squared. It would be +1 again, and therefore, since 100.68i is equal to i, by
taking the fourth power we discover that 102.72i is equal to +1. Therefore, if we
wanted 103.00i, for instance, we could write it as 102.72i times 100.28i. In other
words, it has a period, it repeats. Of course, we recognize what the curves look
like! They look like the sine and cosine, and we shall call them, for a while, the
algebraic sine and algebraic cosine. However, instead of using the base 10, we

22-1510is = x + iy

+1

y

+0.5

0.5
1.0
1.5
2.0
2.5
3.0
s

−0.5

x

−1

Figure 22-1

shall put them into our natural base, which only changes the horizontal scale;
so we denote 2.3025s by t, and write 10is = eit, where t is a real number. Now
eit = x + iy, and we shall write this as the algebraic cosine of t plus i times the
algebraic sine of t. Thus
eit = cos t + i sin t.
(22.8)

What are the properties of cos t and sin t? First, we know, for instance, that
x2 + y2 must be 1; we have proved that before, and it is just as true for base e
as for base 10. Therefore cos2 t + sin2 t = 1. We also know that, for small
t, eit = 1 + it, and therefore cos t is nearly 1, and sin t is nearly t, and so it
goes, that all of the various properties of these remarkable functions, which
come from taking imaginary powers, are the same as the sine and cosine of
trigonometry.
Is the period the same? Let us ﬁnd out. e to what power is equal to i? What
is the logarithm of i to the base e? We worked it out before, in the base 10
it was 0.68184i, but when we change our logarithmic scale to e, we have to
multiply by 2.3025, and if we do that it comes out 1.570. So this will be called
“algebraic π/2.” But, we see, it diﬀers from the regular π/2 by only one place
in the last point, and that, of course, is the result of errors in our arithmetic!
So we have created two new functions in a purely algebraic manner, the cosine
and the sine, which belong to algebra, and only to algebra. We wake up at the
end to discover the very functions that are natural to geometry. So there is a
connection, ultimately, between algebra and geometry.
We summarize with this, the most remarkable formula in mathematics:

eiθ = cos θ + i sin θ.
(22.9)
This is our jewel.

22-16We may relate the geometry to the algebra by representing complex numbers
in a plane; the horizontal position of a point is x, the vertical position of a point
is y (Fig. 22-2). We represent every complex number, x + iy. Then if the radial
distance to this point is called r and the angle is called θ, the algebraic law is that
x + iy is written in the form reiθ, where the geometrical relationships between
x, y, r, and θ are as shown. This, then, is the uniﬁcation of algebra and geometry.

y

y
r

θ

x

x

Fig. 22-2. x + iy = reiθ.

When we began this chapter, armed only with the basic notions of integers
and counting, we had little idea of the power of the processes of abstraction
and generalization. Using the set of algebraic “laws,” or properties of numbers,
Eq. (22.1), and the deﬁnitions of inverse operations (22.2), we have been able
here, ourselves, to manufacture not only numbers but useful things like tables of
logarithms, powers, and trigonometric functions (for these are what the imaginary
powers of real numbers are), all merely by extracting ten successive square roots
of ten!

22-1723

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

23-1
