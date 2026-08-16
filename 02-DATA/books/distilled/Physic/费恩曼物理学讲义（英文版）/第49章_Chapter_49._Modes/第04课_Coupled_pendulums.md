# Coupled pendulums

Table 49-1

Mode shape
m
n
(ω/ω0)2
ω/ω0

+
1.25
1.12

+
−
2.00
1.41

+
−
+
3.25
1.80

−

4.25
2.06

+

−
+

5.00
2.24

+
−

instead of air, so that the density is lower, the speed of sound is much higher,
and all the frequencies of a cavity will be raised. Consequently if one ﬁlls one’s
lungs with helium before speaking, the character of his voice will be drastically
altered even though the vocal cords may still be vibrating at the same frequency.

49-4 Coupled pendulums

Finally we should emphasize that not only do modes exist for complicated
continuous systems, but also for very simple mechanical systems. A good example
is the system of two coupled pendulums discussed in the preceding chapter. In
that chapter it was shown that the motion could be analyzed as a superposition
of two harmonic motions with diﬀerent frequencies. So even this system can

49-10be analyzed in terms of harmonic motions or modes. The string has an inﬁnite
number of modes and the two-dimensional surface also has an inﬁnite number of
modes. In a sense it is a double inﬁnity, if we know how to count inﬁnities. But
a simple mechanical thing which has only two degrees of freedom, and requires
only two variables to describe it, has only two modes.

y
x

Fig. 49-5. Two coupled pendulums.

Let us make a mathematical analysis of these two modes for the case where
the pendulums are of equal length. Let the displacement of one be x, and the
displacement of the other be y, as shown in Fig. 49-5. Without a spring, the force
on the ﬁrst mass is proportional to the displacement of that mass, because of
gravity. There would be, if there were no spring, a certain natural frequency ω0
for this one alone. The equation of motion without a spring would be

m d2x

dt2 = −mω2
0x.
(49.13)

The other pendulum would swing in the same way if there were no spring. In
addition to the force of restoration due to gravitation, there is an additional force
pulling the ﬁrst mass. That force depends upon the excess distance of x over y
and is proportional to that diﬀerence, so it is some constant which depends on
the geometry, times (x −y). The same force in reverse sense acts on the second
mass. The equations of motion that have to be solved are therefore

m d2x

dt2 = −mω2
0x −k(x −y),
m d2y

dt2 = −mω2
0y −k(y −x).
(49.14)

In order to ﬁnd a motion in which both of the masses move at the same
frequency, we must determine how much each mass moves. In other words,

49-11pendulum x and pendulum y will oscillate at the same frequency, but their
amplitudes must have certain values, A and B, whose relation is ﬁxed. Let us
try this solution:
x = Aeiωt,
y = Beiωt.
(49.15)

If these are substituted in Eqs. (49.14) and similar terms are collected, the results
are

ω2 −ω2
0 −k


A = −k

m B,

m

(49.16)


ω2 −ω2
0 −k


B = −k

m A.

m

The equations as written have had the common factor eiωt removed and have
been divided by m.
Now we see that we have two equations for what looks like two unknowns.
But there really are not two unknowns, because the whole size of the motion is
something that we cannot determine from these equations. The above equations
can determine only the ratio of A to B, but they must both give the same ratio.
The necessity for both of these equations to be consistent is a requirement that
the frequency be something very special.
In this particular case this can be worked out rather easily. If the two equations
are multiplied together, the result is

ω2 −ω2
0 −k

2
AB =
 k

2
AB.
(49.17)

m

m

The term AB can be removed from both sides unless A and B are zero, which
means there is no motion at all. If there is motion, then the other terms must
be equal, giving a quadratic equation to solve. The result is that there are two
possible frequencies:

ω2
1 = ω2
0,
ω2
2 = ω2
0 + 2k

m .
(49.18)

Furthermore, if these values of frequency are substituted back into Eq. (49.16),
we ﬁnd that for the ﬁrst frequency A = B, and for the second frequency A = −B.
These are the “mode shapes,” as can be readily veriﬁed by experiment.
It is clear that in the ﬁrst mode, where A = B, the spring is never stretched,
and both masses oscillate at the frequency ω0, as though the spring were absent.
In the other solution, where A = −B, the spring contributes a restoring force

49-12and raises the frequency. A more interesting case results if the pendulums have
diﬀerent lengths. The analysis is very similar to that given above, and is left as
an exercise for the reader.

49-5 Linear systems

Now let us summarize the ideas discussed above, which are all aspects of what
is probably the most general and wonderful principle of mathematical physics.
If we have a linear system whose character is independent of the time, then
the motion does not have to have any particular simplicity, and in fact may
be exceedingly complex, but there are very special motions, usually a series
of special motions, in which the whole pattern of motion varies exponentially
with the time. For the vibrating systems that we are talking about now, the
exponential is imaginary, and instead of saying “exponentially” we might prefer
to say “sinusoidally” with time. However, one can be more general and say that
the motions will vary exponentially with the time in very special modes, with very
special shapes. The most general motion of the system can always be represented
as a superposition of motions involving each of the diﬀerent exponentials.
This is worth stating again for the case of sinusoidal motion: a linear system
need not be moving in a purely sinusoidal motion, i.e., at a deﬁnite single
frequency, but no matter how it does move, this motion can be represented as a
superposition of pure sinusoidal motions. The frequency of each of these motions
is a characteristic of the system, and the pattern or waveform of each motion is
also a characteristic of the system. The general motion in any such system can
be characterized by giving the strength and the phase of each of these modes,
and adding them all together. Another way of saying this is that any linear
vibrating system is equivalent to a set of independent harmonic oscillators, with
the natural frequencies corresponding to the modes.
We conclude this chapter by remarking on the connection of modes with
quantum mechanics. In quantum mechanics the vibrating object, or the thing
that varies in space, is the amplitude of a probability function that gives the
probability of ﬁnding an electron, or system of electrons, in a given conﬁguration.
This amplitude function can vary in space and time, and satisﬁes, in fact, a
linear equation. But in quantum mechanics there is a transformation, in that
what we call frequency of the probability amplitude is equal, in the classical
idea, to energy. Therefore we can translate the principle stated above to this
case by taking the word frequency and replacing it with energy. It becomes

49-13
