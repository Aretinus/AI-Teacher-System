# Newton's Third Law

Conservation of Momentum

10-1 Newton’s Third Law

On the basis of Newton’s second law of motion, which gives the relation
between the acceleration of any body and the force acting on it, any problem in
mechanics can be solved in principle. For example, to determine the motion of
a few particles, one can use the numerical method developed in the preceding
chapter. But there are good reasons to make a further study of Newton’s laws.
First, there are quite simple cases of motion which can be analyzed not only
by numerical methods, but also by direct mathematical analysis. For example,
although we know that the acceleration of a falling body is 32 ft/sec2, and
from this fact could calculate the motion by numerical methods, it is much
easier and more satisfactory to analyze the motion and ﬁnd the general solution,
s = s0 + v0t + 16t2. In the same way, although we can work out the positions of a
harmonic oscillator by numerical methods, it is also possible to show analytically
that the general solution is a simple cosine function of t, and so it is unnecessary
to go to all that arithmetical trouble when there is a simple and more accurate
way to get the result. In the same manner, although the motion of one body
around the sun, determined by gravitation, can be calculated point by point by
the numerical methods of Chapter 9, which show the general shape of the orbit,
it is nice also to get the exact shape, which analysis reveals as a perfect ellipse.
Unfortunately, there are really very few problems which can be solved exactly
by analysis. In the case of the harmonic oscillator, for example, if the spring
force is not proportional to the displacement, but is something more complicated,
one must fall back on the numerical method. Or if there are two bodies going
around the sun, so that the total number of bodies is three, then analysis cannot
produce a simple formula for the motion, and in practice the problem must
be done numerically. That is the famous three-body problem, which so long
challenged human powers of analysis; it is very interesting how long it took
people to appreciate the fact that perhaps the powers of mathematical analysis

10-1were limited and it might be necessary to use the numerical methods. Today an
enormous number of problems that cannot be done analytically are solved by
numerical methods, and the old three-body problem, which was supposed to be
so diﬃcult, is solved as a matter of routine in exactly the same manner that was
described in the preceding chapter, namely, by doing enough arithmetic. However,
there are also situations where both methods fail: the simple problems we can
do by analysis, and the moderately diﬃcult problems by numerical, arithmetical
methods, but the very complicated problems we cannot do by either method. A
complicated problem is, for example, the collision of two automobiles, or even
the motion of the molecules of a gas. There are countless particles in a cubic
millimeter of gas, and it would be ridiculous to try to make calculations with
so many variables (about 1017—a hundred million billion). Anything like the
motion of the molecules or atoms of a gas or a block or iron, or the motion of
the stars in a globular cluster, instead of just two or three planets going around
the sun—such problems we cannot do directly, so we have to seek other means.
In the situations in which we cannot follow details, we need to know some
general properties, that is, general theorems or principles which are consequences
of Newton’s laws. One of these is the principle of conservation of energy, which
was discussed in Chapter 4. Another is the principle of conservation of momentum,
the subject of this chapter. Another reason for studying mechanics further is
that there are certain patterns of motion that are repeated in many diﬀerent
circumstances, so it is good to study these patterns in one particular circumstance.
For example, we shall study collisions; diﬀerent kinds of collisions have much
in common. In the ﬂow of ﬂuids, it does not make much diﬀerence what the
ﬂuid is, the laws of the ﬂow are similar. Other problems that we shall study
are vibrations and oscillations and, in particular, the peculiar phenomena of
mechanical waves—sound, vibrations of rods, and so on.
In our discussion of Newton’s laws it was explained that these laws are a kind
of program that says “Pay attention to the forces,” and that Newton told us only
two things about the nature of forces. In the case of gravitation, he gave us the
complete law of the force. In the case of the very complicated forces between
atoms, he was not aware of the right laws for the forces; however, he discovered
one rule, one general property of forces, which is expressed in his Third Law, and
that is the total knowledge that Newton had about the nature of forces—the law
of gravitation and this principle, but no other details.

This principle is that action equals reaction.

10-2What is meant is something of this kind: Suppose we have two small bodies,
say particles, and suppose that the ﬁrst one exerts a force on the second one,
pushing it with a certain force. Then, simultaneously, according to Newton’s
Third Law, the second particle will push on the ﬁrst with an equal force, in
the opposite direction; furthermore, these forces eﬀectively act in the same line.
This is the hypothesis, or law, that Newton proposed, and it seems to be quite
accurate, though not exact (we shall discuss the errors later). For the moment
we shall take it to be true that action equals reaction. Of course, if there is a
third particle, not on the same line as the other two, the law does not mean that
the total force on the ﬁrst one is equal to the total force on the second, since
the third particle, for instance, exerts its own push on each of the other two.
The result is that the total eﬀect on the ﬁrst two is in some other direction, and
the forces on the ﬁrst two particles are, in general, neither equal nor opposite.
However, the forces on each particle can be resolved into parts, there being one
contribution or part due to each other interacting particle. Then each pair of
particles has corresponding components of mutual interaction that are equal in
magnitude and opposite in direction.

10-2 Conservation of momentum

Now what are the interesting consequences of the above relationship? Suppose,
for simplicity, that we have just two interacting particles, possibly of diﬀerent
mass, and numbered 1 and 2. The forces between them are equal and opposite;
what are the consequences? According to Newton’s Second Law, force is the
time rate of change of the momentum, so we conclude that the rate of change of
momentum p1 of particle 1 is equal to minus the rate of change of momentum p2
of particle 2, or
dp1/dt = −dp2/dt.
(10.1)

Now if the rate of change is always equal and opposite, it follows that the total
change in the momentum of particle 1 is equal and opposite to the total change
in the momentum of particle 2; this means that if we add the momentum of
particle 1 to the momentum of particle 2, the rate of change of the sum of these,
due to the mutual forces (called internal forces) between particles, is zero; that is

d(p1 + p2)/dt = 0.
(10.2)

There is assumed to be no other force in the problem. If the rate of change of this
sum is always zero, that is just another way of saying that the quantity (p1 + p2)

10-3
