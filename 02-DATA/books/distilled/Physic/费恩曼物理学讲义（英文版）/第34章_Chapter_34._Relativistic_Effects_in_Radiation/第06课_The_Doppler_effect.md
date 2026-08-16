# The Doppler effect

electrons through a solid tungsten “target,” and letting them radiate photons
from this bremsstrahlung eﬀect.

34-6 The Doppler eﬀect

Now we go on to consider some other examples of the eﬀects of moving sources.
Let us suppose that the source is a stationary atom which is oscillating at one
of its natural frequencies, ω0. Then we know that the frequency of the light
we would observe is ω0. But now let us take another example, in which we
have a similar oscillator oscillating with a frequency ω1, and at the same time
the whole atom, the whole oscillator, is moving along in a direction toward the
observer at velocity v. Then the actual motion in space, of course, is as shown in
Fig. 34-10(a). Now we play our usual game, we add cτ; that is to say, we translate
the whole curve backward and we ﬁnd then that it oscillates as in Fig. 34-10(b).
In a given amount of time τ, when the oscillator would have gone a distance vτ,
on the x′ vs. ct diagram it goes a distance (c −v)τ. So all the oscillations of
frequency ω1 in the time ∆τ are now found in the interval ∆t = (1 −v/c) ∆τ;
they are squashed together, and as this curve comes by us at speed c, we will see
light of a higher frequency, higher by just the compression factor (1 −v/c). Thus
we observe
ω =
ω1
1 −v/c.
(34.10)

We can, of course, analyze this situation in various other ways. Suppose that
the atom were emitting, instead of sine waves, a series of pulses, pip, pip, pip,
pip, at a certain frequency ω1. At what frequency would they be received by
us? The ﬁrst one that arrives has a certain delay, but the next one is delayed
less because in the meantime the atom moves closer to the receiver. Therefore,
the time between the “pips” is decreased by the motion. If we analyze the

vτ

(c−v)τ

x′

x

B′

B

A′

A

z

ct

(a)

(b)

Fig. 34-10. The x-z and x′-t curves of a moving oscillator.

34-13geometry of the situation, we ﬁnd that the frequency of the pips is increased by
the factor 1/(1 −v/c).
Is ω = ω0/(1 −v/c), then, the frequency that would be observed if we took
an ordinary atom, which had a natural frequency ω0, and moved it toward the
receiver at speed v? No; as we well know, the natural frequency ω1 of a moving
atom is not the same as that measured when it is standing still, because of the
relativistic dilation in the rate of passage of time. Thus if ω0 were the true
natural frequency, then the modiﬁed natural frequency ω1 would be

ω1 = ω0
p

1 −v2/c2.
(34.11)

Therefore the observed frequency ω is

ω = ω0
p

1 −v2/c2

1 −v/c
.
(34.12)

The shift in frequency observed in the above situation is called the Doppler
eﬀect: if something moves toward us the light it emits appears more violet, and
if it moves away it appears more red.
We shall now give two more derivations of this same interesting and important
result. Suppose, now, that the source is standing still and is emitting waves
at frequency ω0, while the observer is moving with speed v toward the source.
After a certain period of time t the observer will have moved to a new position, a
distance vt from where he was at t = 0. How many radians of phase will he have
seen go by? A certain number, ω0t, went past any ﬁxed point, and in addition
the observer has swept past some more by his own motion, namely a number vtk0
(the number of radians per meter times the distance). So the total number of
radians in the time t, or the observed frequency, would be ω1 = ω0 + k0v. We
have made this analysis from the point of view of a man at rest; we would like
to know how it would look to the man who is moving. Here we have to worry
again about the diﬀerence in clock rate for the two observers, and this time that
means that we have to divide by
p

1 −v2/c2. So if k0 is the wave number, the
number of radians per meter in the direction of motion, and ω0 is the frequency,
then the observed frequency for a moving man is

ω =
ω0 + k0v
p

1 −v2/c2 .
(34.13)

34-14For the case of light, we know that k0 = ω0/c. So, in this particular problem,
the equation would read

ω = ω0(1 + v/c)
p

1 −v2/c2 ,
(34.14)

which looks completely unlike formula (34.12)! Is the frequency that we would
observe if we move toward a source diﬀerent than the frequency that we would
see if the source moved toward us? Of course not! The theory of relativity says
that these two must be exactly equal. If we were expert enough mathematicians
we would probably recognize that these two mathematical expressions are exactly
equal! In fact, the necessary equality of the two expressions is one of the ways
by which some people like to demonstrate that relativity requires a time dilation,
because if we did not put those square-root factors in, they would no longer be
equal.
Since we know about relativity, let us analyze it in still a third way, which
may appear a little more general. (It is really the same thing, since it makes no
diﬀerence how we do it!) According to the relativity theory there is a relationship
between position and time as observed by one man and position and time as seen
by another who is moving relative to him. We wrote down those relationships
long ago (Chapter 16). This is the Lorentz transformation and its inverse:

1 −v2/c2 ,
x =
x′ −vt′
p

x′ =
x + vt
p

1 −v2/c2 ,

(34.15)

1 −v2/c2 ,
t = t′ −vx′/c2

t′ =
t + vx/c2
p

1 −v2/c2 .

p

If we were standing still on the ground, the form of a wave would be cos (ωt−kx);
all the nodes and maxima and minima would follow this form. But what would
a man in motion, observing the same physical wave, see? Where the ﬁeld is
zero, the positions of all the nodes are the same (when the ﬁeld is zero, everyone
measures the ﬁeld as zero); that is a relativistic invariant. So the form is the
same for the other man too, except that we must transform it into his frame of
reference:

cos (ωt −kx) = cos

ω t′ −vx′/c2

1 −v2/c2 −k
x′ −vt′
p


.

p

1 −v2/c2

34-15If we regroup the terms inside the brackets, we get

t′ −k + vω/c2

cos (ωt −kx) = cos

ω + kv
p

x′


p

1 −v2/c2
|
{z
}

1 −v2/c2
|
{z
}

= cos [
ω′
t′ −
k′
x′ ].
(34.16)

This is again a wave, a cosine wave, in which there is a certain frequency ω′, a
constant multiplying t′, and some other constant, k′, multiplying x′. We call k′

the wave number, or the number of waves per meter, for the other man. Therefore
the other man will see a new frequency and a new wave number given by

ω′ =
ω + kv
p

1 −v2/c2 ,
(34.17)

k′ = k + ωv/c2

1 −v2/c2 .
(34.18)

p

If we look at (34.17), we see that it is the same formula (34.13), that we obtained
by a more physical argument.

34-7 The ω, k four-vector

The relationships indicated in Eqs. (34.17) and (34.18) are very interesting,
because these say that the new frequency ω′ is a combination of the old frequency ω
and the old wave number k, and that the new wave number is a combination
of the old wave number and frequency. Now the wave number is the rate of
change of phase with distance, and the frequency is the rate of change of phase
with time, and in these expressions we see a close analogy with the Lorentz
transformation of the position and time: if ω is thought of as being like t, and k
is thought of as being like x divided by c2, then the new ω′ will be like t′, and
the new k′ will be like x′/c2. That is to say, under the Lorentz transformation ω
and k transform the same way as do t and x. They constitute what we call a
four-vector; when a quantity has four components transforming like time and
space, it is a four-vector. Everything seems all right, then, except for one little
thing: we said that a four-vector has to have four components; where are the
other two components? We have seen that ω and k are like time and space in one
space direction, but not in all directions, and so we must next study the problem

34-16
