# Planetary motions

like this: the position later is equal to the position before plus ϵ times the velocity
at the time in the middle of the interval. Similarly, the velocity at this halfway
point is the velocity at a time ϵ before (which is in the middle of the previous
interval) plus ϵ times the acceleration at the time t. That is, we use the equations

x(t + ϵ) = x(t) + ϵv(t + ϵ/2),

v(t + ϵ/2) = v(t −ϵ/2) + ϵa(t),

a(t) = −x(t).
(9.16)

There remains only one slight problem: what is v(ϵ/2)? At the start, we are
given v(0), not v(−ϵ/2). To get our calculation started, we shall use a special
equation, namely, v(ϵ/2) = v(0) + (ϵ/2)a(0).
Now we are ready to carry through our calculation. For convenience, we
may arrange the work in the form of a table, with columns for the time, the
position, the velocity, and the acceleration, and the in-between lines for the
velocity, as shown in Table 9-1. Such a table is, of course, just a convenient way
of representing the numerical values obtained from the set of equations (9.16),
and in fact the equations themselves need never be written. We just ﬁll in the
various spaces in the table one by one. This table now gives us a very good idea
of the motion: it starts from rest, ﬁrst picks up a little upward (negative) velocity
and it loses some of its distance. The acceleration is then a little bit less but
it is still gaining speed. But as it goes on it gains speed more and more slowly,
until as it passes x = 0 at about t = 1.50 sec we can conﬁdently predict that it
will keep going, but now it will be on the other side; the position x will become
negative, the acceleration therefore positive. Thus the speed decreases. It is
interesting to compare these numbers with the function x = cos t, which is done
in Fig. 9-4. The agreement is within the three signiﬁcant ﬁgure accuracy of our
calculation! We shall see later that x = cos t is the exact mathematical solution
of our equation of motion, but it is an impressive illustration of the power of
numerical analysis that such an easy calculation should give such precise results.

9-7 Planetary motions

The above analysis is very nice for the motion of an oscillating spring, but can
we analyze the motion of a planet around the sun? Let us see whether we can
arrive at an approximation to an ellipse for the orbit. We shall suppose that the
sun is inﬁnitely heavy, in the sense that we shall not include its motion. Suppose

9-11x

1.0

0.5


0.5
1.0
1.5
t (sec)

Fig. 9-4. Graph of the motion of a mass on a spring.

a planet starts at a certain place and is moving with a certain velocity; it goes
around the sun in some curve, and we shall try to analyze, by Newton’s laws of
motion and his law of gravitation, what the curve is. How? At a given moment it
is at some position in space. If the radial distance from the sun to this position
is called r, then we know that there is a force directed inward which, according
to the law of gravity, is equal to a constant times the product of the sun’s mass
and the planet’s mass divided by the square of the distance. To analyze this
further we must ﬁnd out what acceleration will be produced by this force. We
shall need the components of the acceleration along two directions, which we call
x and y. Thus if we specify the position of the planet at a given moment by
giving x and y (we shall suppose that z is always zero because there is no force
in the z-direction and, if there is no initial velocity vz, there will be nothing to
make z other than zero), the force is directed along the line joining the planet to
the sun, as shown in Fig. 9-5.

y
Fx
PLANET (x, y)

Fy
F

SUN
x

Fig. 9-5. The force of gravity on a planet.

9-12From this ﬁgure we see that the horizontal component of the force is related
to the complete force in the same manner as the horizontal distance x is to the
complete hypotenuse r, because the two triangles are similar. Also, if x is positive,
Fx is negative. That is, Fx/|F| = −x/r, or Fx = −|F|x/r = −GMmx/r3. Now
we use the dynamical law to ﬁnd that this force component is equal to the mass
of the planet times the rate of change of its velocity in the x-direction. Thus we
ﬁnd the following laws:

m(dvx/dt) = −GMmx/r3,

m(dvy/dt) = −GMmy/r3,

(9.17)

x2 + y2.

r =
p

This, then, is the set of equations we must solve. Again, in order to simplify
the numerical work, we shall suppose that the unit of time, or the mass of the
sun, has been so adjusted (or luck is with us) that GM ≡1. For our speciﬁc
example we shall suppose that the initial position of the planet is at x = 0.500
and y = 0.000, and that the velocity is all in the, y-direction at the start, and
is of magnitude 1.630. Now how do we make the calculation? We again make
a table with columns for the time, the x-position, the x-velocity vx, and the
x-acceleration ax; then, separated by a double line, three columns for position,
velocity, and acceleration in the y-direction. In order to get the accelerations we
are going to need Eq. (9.17); it tells us that the acceleration in the x-direction
is −x/r3, and the acceleration in the y-direction is −y/r3, and that r is the
square root of x2 +y2. Thus, given x and y, we must do a little calculating on the
side, taking the square root of the sum of the squares to ﬁnd r and then, to get
ready to calculate the two accelerations, it is useful also to evaluate 1/r3. This
work can be done rather easily by using a table of squares, cubes, and reciprocals:
then we need only multiply x by 1/r3, which we do on a slide rule.
Our calculation thus proceeds by the following steps, using time intervals ϵ =
0.100: Initial values at t = 0:

x(0) = 0.500
y(0) =
0.000

vx(0) = 0.000
vy(0) = +1.630

From these we ﬁnd:

r(0) =
0.500
1/r3(0) = 8.000

ax = −4.000
ay = 0.000

9-13Thus we may calculate the velocities vx(0.05) and vy(0.05):

vx(0.05) = 0.000 −4.000 × 0.050 = −0.200;

vy(0.05) = 1.630 + 0.000 × 0.050 =
1.630.

Now our main calculations begin:

x(0.1) = 0.500 −0.20 × 0.1
=
0.480

y(0.1) = 0.0 + 1.63 × 0.1
=
0.163

0.4802 + 0.1632
=
0.507

r =
p

1/r3 = 7.677

ax(0.1) = −0.480 × 7.677
= −3.685

ay(0.1) = −0.163 × 7.677
= −1.250

vx(0.15) = −0.200 −3.685 × 0.1 = −0.568

vy(0.15) = 1.630 −1.250 × 0.1
=
1.505

x(0.2) = 0.480 −0.568 × 0.1
=
0.423

y(0.2) = 0.163 + 1.505 × 0.1
=
0.313

etc.

In this way we obtain the values given in Table 9-2, and in 20 steps or so we
have chased the planet halfway around the sun! In Fig. 9-6 are plotted the x-
and y-coordinates given in Table 9-2. The dots represent the positions at the
succession of times a tenth of a unit apart; we see that at the start the planet
moves rapidly and at the end it moves slowly, and so the shape of the curve is
determined. Thus we see that we really do know how to calculate the motion of
planets!

Table 9-2

x2 + y2.
Interval: ϵ = 0.100
Orbit
vy = 1.63
vx = 0
x = 0.5
y = 0
at
t = 0

Solution of dvx/dt = −x/r3, dvy/dt = −y/r3, r =
p

t
x
vx
ax
y
vy
ay
r
1/r3

0.0
0.500
−4.000
0.000
0.000
0.500
8.000
−0.200
1.630

9-14Table 9-2

t
x
vx
ax
y
vy
ay
r
1/r3

0.1
0.480
−3.685
0.163
−1.251
0.507
7.677
−0.568
1.505
0.2
0.423
−2.897
0.313
−2.146
0.527
6.847
−0.858
1.290
0.3
0.337
−1.958
0.443
−2.569
0.556
5.805
−1.054
1.033
0.4
0.232
−1.112
0.546
−2.617
0.593
4.794
−1.165
0.772
0.5
0.115
−0.454
0.623
−2.449
0.634
3.931
−1.211
0.527
0.6
−0.006
+0.018
0.676
−2.190
0.676
3.241
−1.209
0.308
0.7
−0.127
+0.342
0.706
−1.911
0.718
2.705
−1.175
0.117
0.8
−0.244
+0.559
0.718
−1.646
0.758
2.292
−1.119
−0.048
0.9
−0.356
+0.702
0.713
−1.408
0.797
1.974
−1.048
−0.189
1.0
−0.461
+0.796
0.694
−1.200
0.833
1.728
−0.969
−0.309
1.1
−0.558
+0.856
0.664
−1.019
0.867
1.536
−0.883
−0.411
1.2
−0.646
+0.895
0.623
−0.862
0.897
1.385
−0.794
−0.497
1.3
−0.725
+0.919
0.573
−0.726
0.924
1.267
−0.702
−0.569
1.4
−0.795
+0.933
0.516
−0.605
0.948
1.174
−0.608
−0.630
1.5
−0.856
+0.942
0.453
−0.498
0.969
1.100
−0.514
−0.680
1.6
−0.908
+0.947
0.385
−0.402
0.986
1.043
−0.420
−0.720
1.7
−0.950
+0.950
0.313
−0.313
1.000
1.000
−0.325
−0.751
1.8
−0.982
+0.952
0.238
−0.230
1.010
0.969
−0.229
−0.774
1.9
−1.005
+0.953
0.160
−0.152
1.018
0.949

9-15Table 9-2

t
x
vx
ax
y
vy
ay
r
1/r3

−0.134
−0.790
2.0
−1.018
+0.955
0.081
−0.076
1.022
0.938
−0.038
−0.797
2.1
−1.022
+0.957
0.002
−0.002
1.022
0.936
+0.057
−0.797
2.2
−1.017
+0.959
−0.078
+0.074
1.020
0.944
−0.790
2.3

Crossed x-axis at 2.101 sec, ∴period = 4.20 sec.
vx = 0 at 2.086 sec.

Cross x at −1.022, ∴semimajor axis = 1.022 + 0.500

= 0.761.

vy = 0.797.
Predicted time π(0.761)3/2 = π(0.663) = 2.082.

y

t = 0.5
t = 1.0

t = 1.5

0.5

t = 2.0

t = 0

SUN
−1.0
−0.5
0.5
x

Fig. 9-6. The calculated motion of a planet around the sun.

Now let us see how we can calculate the motion of Neptune, Jupiter, Uranus,
or any other planet. If we have a great many planets, and let the sun move
too, can we do the same thing? Of course we can. We calculate the force on
a particular planet, let us say planet number i, which has a position xi, yi, zi
(i = 1 may represent the sun, i = 2 Mercury, i = 3 Venus, and so on). We must
know the positions of all the planets. The force acting on one is due to all the
other bodies which are located, let us say, at positions xj, yj, zj. Therefore the

9-16equations are

N
X

j=1
−Gmimj(xi −xj)

mi
dvix

dt
=

r3
ij
,

N
X

j=1
−Gmimj(yi −yj)

mi
dviy

dt
=

r3
ij
,
(9.18)

N
X

j=1
−Gmimj(zi −zj)

mi
dviz

dt
=

r3
ij
.

Further, we deﬁne rij as the distance between the two planets i and j; this is
equal to

rij =
q

(xi −xj)2 + (yi −yj)2 + (zi −zj)2.
(9.19)

Also, P means a sum over all values of j—all other bodies—except, of course,
for j = i. Thus all we have to do is to make more columns, lots more columns.
We need nine columns for the motions of Jupiter, nine for the motions of Saturn,
and so on. Then when we have all initial positions and velocities we can calculate
all the accelerations from Eq. (9.18) by ﬁrst calculating all the distances, using
Eq. (9.19). How long will it take to do it? If you do it at home, it will take a
very long time! But in modern times we have machines which do arithmetic
very rapidly; a very good computing machine may take 1 microsecond, that is, a
millionth of a second, to do an addition. To do a multiplication takes longer, say
10 microseconds. It may be that in one cycle of calculation, depending on the
problem, we may have 30 multiplications, or something like that, so one cycle will
take 300 microseconds. That means that we can do 3000 cycles of computation
per second. In order to get an accuracy, of, say, one part in a billion, we would
need 4 × 105 cycles to correspond to one revolution of a planet around the sun.
That corresponds to a computation time of 130 seconds or about two minutes.
Thus it take only two minutes to follow Jupiter around the sun, with all the
perturbations of all the planets correct to one part in a billion, by this method!
(It turns out that the error varies about as the square of the interval ϵ. If we
make the interval a thousand times smaller, it is a million times more accurate.
So, let us make the interval 10,000 times smaller.)
So, as we said, we began this chapter not knowing how to calculate even
the motion of a mass on a spring. Now, armed with the tremendous power of

9-17Newton’s laws, we can not only calculate such simple motions but also, given
only a machine to handle the arithmetic, even the tremendously complex motions
of the planets, to as high a degree of precision as we wish!

9-1810

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

10-1
