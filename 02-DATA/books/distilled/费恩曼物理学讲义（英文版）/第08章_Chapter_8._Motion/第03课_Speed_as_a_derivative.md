# Speed as a derivative

smaller, that is, approaches 0. The equation reduces to,

v (at time t0) = 32t0.

In our problem, t0 = 5 sec, so the solution is v = 32 × 5 = 160 ft/sec. A few lines
above, where we took ϵ as 0.1 and 0.001 sec successively, the value we got for v
was a little more than this, but now we see that the actual velocity is precisely
160 ft/sec.

8-3 Speed as a derivative

The procedure we have just carried out is performed so often in mathematics
that for convenience special notations have been assigned to our quantities ϵ
and x. In this notation, the ϵ used above becomes ∆t and x becomes ∆s. This
∆t means “an extra bit of t,” and carries an implication that it can be made
smaller. The preﬁx ∆is not a multiplier, any more than sin θ means s · i · n · θ—it
simply deﬁnes a time increment, and reminds us of its special character. ∆s has
an analogous meaning for the distance s. Since ∆is not a factor, it cannot be
cancelled in the ratio ∆s/∆t to give s/t, any more than the ratio sin θ/ sin 2θ
can be reduced to 1/2 by cancellation. In this notation, velocity is equal to the
limit of ∆s/∆t when ∆t gets smaller, or

v = lim
∆t→0
∆s

∆t .
(8.5)

This is really the same as our previous expression (8.3) with ϵ and x, but it has
the advantage of showing that something is changing, and it keeps track of what
is changing.
Incidentally, to a good approximation we have another law, which says that
the change in distance of a moving point is the velocity times the time interval,
or ∆s = v ∆t. This statement is true only if the velocity is not changing during
that time interval, and this condition is true only in the limit as ∆t goes to 0.
Physicists like to write it ds = v dt, because by dt they mean ∆t in circumstances
in which it is very small; with this understanding, the expression is valid to a close
approximation. If ∆t is too long, the velocity might change during the interval,
and the approximation would become less accurate. For a time dt, approaching
zero, ds = v dt precisely. In this notation we can write (8.5) as

v = lim
∆t→0
∆s

∆t = ds

dt .

8-9The quantity ds/dt which we found above is called the “derivative of s with
respect to t” (this language helps to keep track of what was changed), and the
complicated process of ﬁnding it is called ﬁnding a derivative, or diﬀerentiating.
The ds’s and dt’s which appear separately are called diﬀerentials. To familiarize
you with the words, we say we found the derivative of the function 16t2, or the
derivative (with respect to t) of 16t2 is 32t. When we get used to the words, the
ideas are more easily understood. For practice, let us ﬁnd the derivative of a more
complicated function. We shall consider the formula s = At3 + Bt + C, which
might describe the motion of a point. The letters A, B, and C represent constant
numbers, as in the familiar general form of a quadratic equation. Starting from
the formula for the motion, we wish to ﬁnd the velocity at any time. To ﬁnd the
velocity in the more elegant manner, we change t to t + ∆t and note that s is
then changed to s + some ∆s; then we ﬁnd the ∆s in terms of ∆t. That is to say,

s + ∆s = A(t + ∆t)3 + B(t + ∆t) + C

= At3 + Bt + C + 3At2 ∆t + B ∆t + 3At(∆t)2 + A(∆t)3,

but since
s = At3 + Bt + C,

we ﬁnd that
∆s = 3At2 ∆t + B ∆t + 3At(∆t)2 + A(∆t)3.

But we do not want ∆s—we want ∆s divided by ∆t. We divide the preceding
equation by ∆t, getting

∆s

∆t = 3At2 + B + 3At(∆t) + A(∆t)2.

As ∆t goes toward 0 the limit of ∆s/∆t is ds/dt and is equal to

ds

dt = 3At2 + B.

This is the fundamental process of calculus, diﬀerentiating functions. The process
is even more simple than it appears. Observe that when these expansions contain
any term with a square or a cube or any higher power of ∆t, such terms may be
dropped at once, since they will go to 0 when the limit is taken. After a little
practice the process gets easier because one knows what to leave out. There are
many rules or formulas for diﬀerentiating various types of functions. These can
be memorized, or can be found in tables. A short list is found in Table 8-3.

8-10Table 8-3. A Short Table of Derivatives

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

8-11
