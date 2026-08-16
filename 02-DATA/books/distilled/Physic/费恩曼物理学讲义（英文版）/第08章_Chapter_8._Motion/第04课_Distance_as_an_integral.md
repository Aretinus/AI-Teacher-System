# Distance as an integral

Table 8-3. A Short Table of Derivatives

s, u, v, w are arbitrary functions of t; a, b, c, and n are arbitrary constants

Function
Derivative

s = tn
ds
dt = ntn−1

s = cu
ds
dt = c du

dt

s = u + v + w + · · ·
ds
dt = du

dt + dv

dt + dw

dt + · · ·

s = c
ds
dt = 0

s = uavbwc · · ·
ds
dt = s

a
u
du

dt + · · ·


dt + b

v
dv

dt + c

w
dw

8-4 Distance as an integral

Now we have to discuss the inverse problem. Suppose that instead of a table of
distances, we have a table of speeds at diﬀerent times, starting from zero. For the
falling ball, such speeds and times are shown in Table 8-4. A similar table could
be constructed for the velocity of the car, by recording the speedometer reading
every minute or half-minute. If we know how fast the car is going at any time,
can we determine how far it goes? This problem is just the inverse of the one
solved above; we are given the velocity and asked to ﬁnd the distance. How can
we ﬁnd the distance if we know the speed? If the speed of the car is not constant,
and the lady goes sixty miles an hour for a moment, then slows down, speeds up,

Table 8-4

Velocity of a Falling Ball

t (sec)
v (ft/sec)

8-11and so on, how can we determine how far she has gone? That is easy. We use
the same idea, and express the distance in terms of inﬁnitesimals. Let us say, “In
the ﬁrst second her speed was such and such, and from the formula ∆s = v ∆t
we can calculate how far the car went the ﬁrst second at that speed.” Now in the
next second her speed is nearly the same, but slightly diﬀerent; we can calculate
how far she went in the next second by taking the new speed times the time.
We proceed similarly for each second, to the end of the run. We now have a
number of little distances, and the total distance will be the sum of all these little
pieces. That is, the distance will be the sum of the velocities times the times,
or s = P v ∆t, where the Greek letter P (sigma) is used to denote addition. To
be more precise, it is the sum of the velocity at a certain time, let us say the
i-th time, multiplied by ∆t.

s =
X

i
v(ti) ∆t.
(8.6)

The rule for the times is that ti+1 = ti + ∆t. However, the distance we obtain by
this method will not be correct, because the velocity changes during the time
interval ∆t. If we take the times short enough, the sum is precise, so we take
them smaller and smaller until we obtain the desired accuracy. The true s is

X

i
v(ti) ∆t.
(8.7)

s = lim
∆t→0

The mathematicians have invented a symbol for this limit, analogous to the
symbol for the diﬀerential. The ∆turns into a d to remind us that the time is as
small as it can be; the velocity is then called v at the time t, and the addition is
written as a sum with a great “s,”
R
(from the Latin summa), which has become
distorted and is now unfortunately just called an integral sign. Thus we write

s =
Z
v(t) dt.
(8.8)

This process of adding all these terms together is called integration, and it is
the opposite process to diﬀerentiation. The derivative of this integral is v, so
one operator (d) undoes the other (
R ). One can get formulas for integrals by
taking the formulas for derivatives and running them backwards, because they are
related to each other inversely. Thus one can work out his own table of integrals

8-12by diﬀerentiating all sorts of functions. For every formula with a diﬀerential, we
get an integral formula if we turn it around.
Every function can be diﬀerentiated analytically, i.e., the process can be
carried out algebraically, and leads to a deﬁnite function. But it is not possible
in a simple manner to write an analytical value for any integral at will. You can
calculate it, for instance, by doing the above sum, and then doing it again with a
ﬁner interval ∆t and again with a ﬁner interval until you have it nearly right. In
general, given some particular function, it is not possible to ﬁnd, analytically, what
the integral is. One may always try to ﬁnd a function which, when diﬀerentiated,
gives some desired function; but one may not ﬁnd it, and it may not exist, in
the sense of being expressible in terms of functions that have already been given
names.

8-5 Acceleration

The next step in developing the equations of motion is to introduce another
idea which goes beyond the concept of velocity to that of change of velocity,
and we now ask, “How does the velocity change?” In previous chapters we have
discussed cases in which forces produce changes in velocity. You may have heard
with great excitement about some car that can get from rest to 60 miles an hour
in ten seconds ﬂat. From such a performance we can see how fast the speed
changes, but only on the average. What we shall now discuss is the next level of
complexity, which is how fast the velocity is changing. In other words, by how
many feet per second does the velocity change in a second, that is, how many
feet per second, per second? We previously derived the formula for the velocity
of a falling body as v = 32t, which is charted in Table 8-4, and now we want to
ﬁnd out how much the velocity changes per second; this quantity is called the
acceleration.
Acceleration is deﬁned as the time rate of change of velocity. From the
preceding discussion we know enough already to write the acceleration as the
derivative dv/dt, in the same way that the velocity is the derivative of the distance.
If we now diﬀerentiate the formula v = 32t we obtain, for a falling body,

a = dv

dt = 32.
(8.9)

[To diﬀerentiate the term 32t we can utilize the result obtained in a previous
problem, where we found that the derivative of Bt is simply B (a constant). So

8-13
