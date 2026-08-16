# The mathematics of interference

closer than one wavelength apart, then this cannot happen. But the fact that
this can happen at certain angles, if the spacing is bigger than one wavelength,
is a very interesting and useful phenomenon in other applications—not radio
broadcasting, but in diﬀraction gratings.

29-5 The mathematics of interference

Now we have ﬁnished our analysis of the phenomena of dipole radiators
qualitatively, and we must learn how to analyze them quantitatively. To ﬁnd the
eﬀect of two sources at some particular angle in the most general case, where
the two oscillators have some intrinsic relative phase α from one another and
the strengths A1 and A2 are not equal, we ﬁnd that we have to add two cosines
having the same frequency, but with diﬀerent phases. It is very easy to ﬁnd this
phase diﬀerence; it is made up of a delay due to the diﬀerence in distance, and
the intrinsic, built-in phase of the oscillation. Mathematically, we have to ﬁnd
the sum R of two waves: R = A1 cos (ωt + φ1) + A2 cos (ωt + φ2). How do we do
it?
It is really very easy, and we presume that we already know how to do it.
However, we shall outline the procedure in some detail. First, we can, if we are
clever with mathematics and know enough about cosines and sines, simply work
it out. The easiest such case is the one where A1 and A2 are equal, let us say
they are both equal to A. In those circumstances, for example (we could call this
the trigonometric method of solving the problem), we have

R = A[cos (ωt + φ1) + cos (ωt + φ2)].
(29.9)

Once, in our trigonometry class, we may have learned the rule that

2(A + B) cos 1

cos A + cos B = 2 cos 1

2(A −B).
(29.10)

If we know that, then we can immediately write R as

2(φ1 −φ2) cos (ωt + 1

2φ1 + 1

R = 2A cos 1

2φ2).
(29.11)

So we ﬁnd that we have an oscillatory wave with a new phase and a new amplitude.
In general, the result will be an oscillatory wave with a new amplitude AR, which
we may call the resultant amplitude, oscillating at the same frequency but with

29-11a phase diﬀerence φR, called the resultant phase. In view of this, our particular
case has the following result: that the resultant amplitude is

AR = 2A cos 1

2(φ1 −φ2),
(29.12)

and the resultant phase is the average of the two phases, and we have completely
solved our problem.

y

A2
AR

φ2

A1

x

φ1

φR
ω

Fig. 29-9. A geometrical method for combining two cosine waves.
The entire diagram is thought of as rotating counterclockwise with
angular frequency ω.

Now suppose that we cannot remember that the sum of two cosines is twice
the cosine of half the sum times the cosine of half the diﬀerence. Then we may
use another method of analysis which is more geometrical. Any cosine function
of ωt can be considered as the horizontal projection of a rotating vector. Suppose
there were a vector A1 of length A1 rotating with time, so that its angle with the
horizontal axis is ωt + φ1. (We shall leave out the ωt in a minute, and see that it
makes no diﬀerence.) Suppose that we take a snapshot at the time t = 0, although,
in fact, the picture is rotating with angular velocity ω (Fig. 29-9). The projection
of A1 along the horizontal axis is precisely A1 cos (ωt + φ1). Now at t = 0 the
second wave could be represented by another vector, A2, of length A2 and at
an angle φ2, and also rotating. They are both rotating with the same angular
velocity ω, and therefore the relative positions of the two are ﬁxed. The system
goes around like a rigid body. The horizontal projection of A2 is A2 cos (ωt + φ2).
But we know from the theory of vectors that if we add the two vectors in the
ordinary way, by the parallelogram rule, and draw the resultant vector AR, the
x-component of the resultant is the sum of the x-components of the other two
vectors. That solves our problem. It is easy to check that this gives the correct

29-12result for the special case we treated above, where A1 = A2 = A. In this case,
we see from Fig. 29-9 that AR lies midway between A1 and A2 and makes an
angle 1

2(φ2 −φ1) with each. Therefore we see that AR = 2A cos 1

2(φ2 −φ1), as
before. Also, as we see from the triangle, the phase of AR, as it goes around, is
the average angle of A1 and A2 when the two amplitudes are equal. Clearly, we
can also solve for the case where the amplitudes are not equal, just as easily. We
can call that the geometrical way of solving the problem.
There is still another way of solving the problem, and that is the analytical
way. That is, instead of having actually to draw a picture like Fig. 29-9, we
can write something down which says the same thing as the picture: instead of
drawing the vectors, we write a complex number to represent each of the vectors.
The real parts of the complex numbers are the actual physical quantities. So in
our particular case the waves could be written in this way: A1ei(ωt+φ1) [the real
part of this is A1 cos (ωt + φ1)] and A2ei(ωt+φ2). Now we can add the two:

R = A1ei(ωt+φ1) + A2ei(ωt+φ2) = (A1eiφ1 + A2eiφ2)eiωt
(29.13)

or
ˆR = A1eiφ1 + A2eiφ2 = AReiφR.
(29.14)

This solves the problem that we wanted to solve, because it represents the result
as a complex number of magnitude AR and phase φR.
To see how this method works, let us ﬁnd the amplitude AR which is the
“length” of ˆR. To get the “length” of a complex quantity, we always multiply the
quantity by its complex conjugate, which gives the length squared. The complex
conjugate is the same expression, but with the sign of the i’s reversed. Thus we
have
A2
R = (A1eiφ1 + A2eiφ2)(A1e−iφ1 + A2e−iφ2).
(29.15)

In multiplying this out, we get A2
1 + A2
2 (here the e’s cancel), and for the cross
terms we have
A1A2(ei(φ1−φ2) + ei(φ2−φ1)).
Now
eiθ + e−iθ = cos θ + i sin θ + cos θ −i sin θ.

That is to say, eiθ + e−iθ = 2 cos θ. Our ﬁnal result is therefore

A2
R = A2
1 + A2
2 + 2A1A2 cos (φ2 −φ1).
(29.16)

29-13As we see, this agrees with the length of AR in Fig. 29-9, using the rules of
trigonometry.
Thus the sum of the two eﬀects has the intensity A2
1 we would get with one
of them alone, plus the intensity A2
2 we would get with the other one alone,
plus a correction. This correction we call the interference eﬀect. It is really
only the diﬀerence between what we get simply by adding the intensities, and
what actually happens. We call it interference whether it is positive or negative.
(Interference in ordinary language usually suggests opposition or hindrance, but
in physics we often do not use language the way it was originally designed!) If the
interference term is positive, we call that case constructive interference, horrible
though it may sound to anybody other than a physicist! The opposite case is
called destructive interference.
Now let us see how to apply our general formula (29.16) for the case of two
oscillators to the special situations which we have discussed qualitatively. To
apply this general formula, it is only necessary to ﬁnd what phase diﬀerence,
φ1 −φ2, exists between the signals arriving at a given point. (It depends only on
the phase diﬀerence, of course, and not on the phase itself.) So let us consider
the case where the two oscillators, of equal amplitude, are separated by some
distance d and have an intrinsic relative phase α. (When one is at phase zero, the
phase of the other is α.) Then we ask what the intensity will be in some azimuth
direction θ from the E–W line. [Note that this is not the same θ as appears
in (29.1). We are torn between using an unconventional symbol like /U, or the
conventional symbol θ (Fig. 29-10).] The phase relationship is found by noting
that the diﬀerence in distance from P to the two oscillators is d sin θ, so that the
phase diﬀerence contribution from this is the number of wavelengths in d sin θ,
multiplied by 2π. (Those who are more sophisticated might want to multiply the
wave number k, which is the rate of change of phase with distance, by d sin θ;

To Point P

Aei(ωt+α)

θ

d

d sin θ

Aeiωt

Fig. 29-10. Two oscillators of equal amplitude, with a phase diﬀer-
ence α between them.

29-14it is exactly the same.) The phase diﬀerence due to the distance diﬀerence is
thus 2πd sin θ/λ, but, due to the timing of the oscillators, there is an additional
phase α. So the phase diﬀerence at arrival would be

φ2 −φ1 = α + 2πd sin θ/λ.
(29.17)

This takes care of all the cases. Thus all we have to do is substitute this expression
into (29.16) for the case A1 = A2, and we can calculate all the various results for
two antennas of equal intensity.
Now let us see what happens in our various cases. The reason we know, for
example, that the intensity is 2 at 30◦in Fig. 29-5 is the following: the two
oscillators are 1

2λ apart, so at 30◦, d sin θ = λ/4. Thus φ2 −φ1 = 2πλ/4λ = π/2,
and so the interference term is zero. (We are adding two vectors at 90◦.) The
result is the hypotenuse of a 45◦right-angle triangle, which is
√

2 times the unit
amplitude; squaring it, we get twice the intensity of one oscillator alone. All the
other cases can be worked out in this same way.

29-1530

Diffraction

30-1 The resultant amplitude due to n equal oscillators

This chapter is a direct continuation of the previous one, although the name
has been changed from Interference to Diﬀraction. No one has ever been able to
deﬁne the diﬀerence between interference and diﬀraction satisfactorily. It is just a
question of usage, and there is no speciﬁc, important physical diﬀerence between
them. The best we can do, roughly speaking, is to say that when there are only
a few sources, say two, interfering, then the result is usually called interference,
but if there is a large number of them, it seems that the word diﬀraction is more
often used. So, we shall not worry about whether it is interference or diﬀraction,
but continue directly from where we left oﬀin the middle of the subject in the
last chapter.
Thus we shall now discuss the situation where there are n equally spaced
oscillators, all of equal amplitude but diﬀerent from one another in phase, either
because they are driven diﬀerently in phase, or because we are looking at them at
an angle such that there is a diﬀerence in time delay. For one reason or another,
we have to add something like this:

R = A[cos ωt + cos (ωt + φ) + cos (ωt + 2φ) + · · · + cos (ωt + (n −1)φ)], (30.1)

where φ is the phase diﬀerence between one oscillator and the next one, as seen
in a particular direction. Speciﬁcally, φ = α + 2πd sin θ/λ. Now we must add all
the terms together. We shall do this geometrically. The ﬁrst one is of length A,
and it has zero phase. The next is also of length A and it has a phase equal to φ.
The next one is again of length A and it has a phase equal to 2φ, and so on. So
we are evidently going around an equiangular polygon with n sides (Fig. 30-1).
Now the vertices, of course, all lie on a circle, and we can ﬁnd the net amplitude
most easily if we ﬁnd the radius of that circle. Suppose that Q is the center of

30-1
