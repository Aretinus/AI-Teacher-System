# A probability distribution

6-4 A probability distribution
Let us return now to the random walk and consider a modiﬁcation of it.
Suppose that in addition to a random choice of the direction (+ or −) of each
step, the length of each step also varied in some unpredictable way, the only
condition being that on the average the step length was one unit. This case is
more representative of something like the thermal motion of a molecule in a gas.
If we call the length of a step S, then S may have any value at all, but most often
will be “near” 1. To be speciﬁc, we shall let ⟨S2⟩= 1 or, equivalently, Srms = 1.
Our derivation for ⟨D2⟩would proceed as before except that Eq. (6.8) would be
changed now to read
⟨D2
N⟩= ⟨D2
N−1⟩+ ⟨S2⟩= ⟨D2
N−1⟩+ 1.
(6.15)
We have, as before, that
⟨D2
N⟩= N.
(6.16)
What would we expect now for the distribution of distances D? What is, for
example, the probability that D = 0 after 30 steps? The answer is zero! The
probability is zero that D will be any particular value, since there is no chance at
all that the sum of the backward steps (of varying lengths) would exactly equal
the sum of forward steps. We cannot plot a graph like that of Fig. 6-2.
We can, however, obtain a representation similar to that of Fig. 6-2, if we ask,
not what is the probability of obtaining D exactly equal to 0, 1, or 2, but instead
what is the probability of obtaining D near 0, 1, or 2. Let us deﬁne P(x, ∆x)
as the probability that D will lie in the interval ∆x located at x (say from x
to x + ∆x). We expect that for small ∆x the chance of D landing in the interval
is proportional to ∆x, the width of the interval. So we can write
P(x, ∆x) = p(x) ∆x.
(6.17)
The function p(x) is called the probability density.
The form of p(x) will depend on N, the number of steps taken, and also on the
distribution of individual step lengths. We cannot demonstrate the proofs here,
but for large N, p(x) is the same for all reasonable distributions in individual
step lengths, and depends only on N. We plot p(x) for three values of N in
Fig. 6-7. You will notice that the “half-widths” (typical spread from x = 0) of
these curves is
√
N, as we have shown it should be.
6-13p(x)
PROBABILITY DENSITY
N = 10,000 STEPS
40,000 STEPS
160,000 STEPS
−700 −600 −500 −400 −300 −200 −100
D = DISTANCE FROM START
Fig. 6-7. The probability density for ending up at the distance D from
the starting place in a random walk of N steps. (D is measured in units
of the rms step length.)
You may notice also that the value of p(x) near zero is inversely proportional
to
√
N. This comes about because the curves are all of a similar shape and their
areas under the curves must all be equal. Since p(x) ∆x is the probability of
ﬁnding D in ∆x when ∆x is small, we can determine the chance of ﬁnding D
somewhere inside an arbitrary interval from x1 to x2, by cutting the interval in
a number of small increments ∆x and evaluating the sum of the terms p(x) ∆x
for each increment. The probability that D lands somewhere between x1 and x2,
which we may write P(x1 < D < x2), is equal to the shaded area in Fig. 6-8.
The smaller we take the increments ∆x, the more correct is our result. We can
write, therefore,
P(x1 < D < x2) =
X
p(x) ∆x =
Z x2
x1
p(x) dx.
(6.18)
The area under the whole curve is the probability that D lands somewhere
(that is, has some value between x = −∞and x = +∞). That probability is
6-14p(x)
∆x
x
x1
x2
Fig. 6-8. The probability that the distance D traveled in a random
walk is between x1 and x2 is the area under the curve of p(x) from x1
to x2.
surely 1. We must have that
Z +∞
−∞
p(x) dx = 1.
(6.19)
Since the curves in Fig. 6-7 get wider in proportion to
√
N, their heights must
be proportional to 1/
√
N to maintain the total area equal to 1.
The probability density function we have been describing is one that is
encountered most commonly. It is known as the normal or gaussian probability
density. It has the mathematical form
p(x) =
σ
√
2π e−x2/2σ2,
(6.20)
where σ is called the standard deviation and is given, in our case, by σ =
√
N or,
if the rms step size is diﬀerent from 1, by σ =
√
NSrms.
We remarked earlier that the motion of a molecule, or of any particle, in a
gas is like a random walk. Suppose we open a bottle of an organic compound
and let some of its vapor escape into the air. If there are air currents, so that
the air is circulating, the currents will also carry the vapor with them. But even
in perfectly still air, the vapor will gradually spread out—will diﬀuse—until it
has penetrated throughout the room. We might detect it by its color or odor.
The individual molecules of the organic vapor spread out in still air because of
the molecular motions caused by collisions with other molecules. If we know the
average “step” size, and the number of steps taken per second, we can ﬁnd the
6-15probability that one, or several, molecules will be found at some distance from
their starting point after any particular passage of time. As time passes, more
steps are taken and the gas spreads out as in the successive curves of Fig. 6-7.
In a later chapter, we shall ﬁnd out how the step sizes and step frequencies are
related to the temperature and pressure of a gas.
Earlier, we said that the pressure of a gas is due to the molecules bouncing
against the walls of the container. When we come later to make a more quanti-
tative description, we will wish to know how fast the molecules are going when
they bounce, since the impact they make will depend on that speed. We cannot,
however, speak of the speed of the molecules. It is necessary to use a probability
description. A molecule may have any speed, but some speeds are more likely
than others. We describe what is going on by saying that the probability that
any particular molecule will have a speed between v and v + ∆v is p(v) ∆v,
where p(v), a probability density, is a given function of the speed v. We shall see
later how Maxwell, using common sense and the ideas of probability, was able to
ﬁnd a mathematical expression for p(v). The form* of the function p(v) is shown
in Fig. 6-9. Velocities may have any value, but are most likely to be near the
most probable value vp.
p(v)
or
N · p(v)
v
vp
v1
v2
Fig. 6-9. The distribution of velocities of the molecules in a gas.
We often think of the curve of Fig. 6-9 in a somewhat diﬀerent way. If
we consider the molecules in a typical container (with a volume of, say, one
liter), then there are a very large number N of molecules present (N ≈1022).
Since p(v) ∆v is the probability that one molecule will have its velocity in ∆v,
* Maxwell’s expression is p(v) = Cv2e−av2, where a is a constant related to the temperature
and C is chosen so that the total probability is one.
6-16by our deﬁnition of probability we mean that the expected number ⟨∆N⟩to be
found with a velocity in the interval ∆v is given by
⟨∆N⟩= N p(v) ∆v.
(6.21)
We call N p(v) the “distribution in velocity.” The area under the curve between
two velocities v1 and v2, for example the shaded area in Fig. 6-9, represents [for
the curve N p(v)] the expected number of molecules with velocities between v1
and v2. Since with a gas we are usually dealing with large numbers of molecules,
we expect the deviations from the expected numbers to be small (like 1/
√
N), so
we often neglect to say the “expected” number, and say instead: “The number of
molecules with velocities between v1 and v2 is the area under the curve.” We should
remember, however, that such statements are always about probable numbers.
6-5 The uncertainty principle
The ideas of probability are certainly useful in describing the behavior of
the 1022 or so molecules in a sample of a gas, for it is clearly impractical even to
attempt to write down the position or velocity of each molecule. When probability
was ﬁrst applied to such problems, it was considered to be a convenience—a
way of dealing with very complex situations. We now believe that the ideas of
probability are essential to a description of atomic happenings. According to
quantum mechanics, the mathematical theory of particles, there is always some
uncertainty in the speciﬁcation of positions and velocities. We can, at best, say
that there is a certain probability that any particle will have a position near some
coordinate x.
We can give a probability density p1(x), such that p1(x) ∆x is the probability
that the particle will be found between x and x+∆x. If the particle is reasonably
well localized, say near x0, the function p1(x) might be given by the graph of
Fig. 6-10(a). Similarly, we must specify the velocity of the particle by means of
a probability density p2(v), with p2(v) ∆v the probability that the velocity will
be found between v and v + ∆v.
It is one of the fundamental results of quantum mechanics that the two
functions p1(x) and p2(v) cannot be chosen independently and, in particular,
cannot both be made arbitrarily narrow. If we call the typical “width” of the
p1(x) curve [∆x], and that of the p2(v) curve [∆v] (as shown in the ﬁgure),
nature demands that the product of the two widths be at least as big as the
6-17
