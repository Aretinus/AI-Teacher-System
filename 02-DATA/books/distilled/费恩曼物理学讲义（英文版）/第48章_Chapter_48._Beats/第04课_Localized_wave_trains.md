# Localized wave trains

“light” and “dark” is the “signal.” Now ordinarily the beam scans over the whole
picture, 500 lines, approximately, in a thirtieth of a second. Let us consider
that the resolution of the picture vertically and horizontally is more or less the
same, so that there are the same number of spots per inch along a scan line.
We want to be able to distinguish dark from light, dark from light, dark from
light, over, say, 500 lines. In order to be able to do this with cosine waves, the
shortest wavelength needed thus corresponds to a wavelength, from maximum
to maximum, of one 250th of the screen size. So we have 250 × 500 × 30 pieces
of information per second. The highest frequency that we are going to carry,
therefore, is close to 4 megacycles per second. Actually, to keep the television
stations apart, we have to use a little bit more than this, about 6 mc/sec; part
of it is used to carry the sound signal, and other information. So, television
channels are 6 megacycles per second wide. It certainly would not be possible
to transmit tv on an 800 kc/sec carrier, since we cannot modulate at a higher
frequency than the carrier.
At any rate, the television band starts at 54 megacycles. The ﬁrst transmission
channel, which is channel 2 (!), has a frequency range from 54 to 60 mc/sec,
which is 6 mc/sec wide. “But,” one might say, “we have just proved that there
were side bands on both sides, and therefore it should be twice that wide.” It
turns out that the radio engineers are rather clever. If we analyze the modulation
signal using not just cosine terms, but cosine and sine terms, to allow for phase
diﬀerences, we then see that there is a deﬁnite, invariant relationship between
the side band on the high-frequency side and the side band on the low-frequency
side. What we mean is that there is no new information on that other side band.
So what is done is to suppress one side band, and the receiver is wired inside
such that the information which is missing is reconstituted by looking at the
single side band and the carrier. Single side-band transmission is a clever scheme
for decreasing the band widths needed to transmit information.

48-4 Localized wave trains

The next subject we shall discuss is the interference of waves in both space
and time. Suppose that we have two waves travelling in space. We know, of
course, that we can represent a wave travelling in space by ei(ωt−kx). This might
be, for example, the displacement in a sound wave. This is a solution of the
wave equation provided that ω2 = k2c2, where c is the speed of propagation of
the wave. In this case we can write it as e−ik(x−ct), which is of the general form

48-9f(x −ct). Therefore this must be a wave which is travelling at this velocity, ω/k,
and that is c and everything is all right.
Now we want to add two such waves together. Suppose we have a wave that is
travelling with one frequency, and another wave travelling with another frequency.
We leave to the reader to consider the case where the amplitudes are diﬀerent; it
makes no real diﬀerence. Thus we want to add ei(ω1t−k1x) + ei(ω2t−k2x). We can
add these by the same kind of mathematics we used when we added signal waves.
Of course, if c is the same for both, this is easy, since it is the same as what we
did before:
eiω1(t−x/c) + eiω2(t−x/c) = eiω1t′ + eiω2t′,
(48.11)

except that t′ = t −x/c is the variable instead of t. So we get the same kind of
modulations, naturally, but we see, of course, that those modulations are moving
along with the wave. In other words, if we added two waves, but these waves
were not just oscillating, but also moving in space, then the resultant wave would
move along also, at the same speed.
Now we would like to generalize this to the case of waves in which the
relationship between the frequency and the wave number k is not so simple.
Example: material having an index of refraction. We have already studied the
theory of the index of refraction in Chapter 31, where we found that we could
write k = nω/c, where n is the index of refraction. As an interesting example,
for x-rays we found that the index n is

n = 1 −
Nq2
e
2ϵ0mω2 .
(48.12)

We actually derived a more complicated formula in Chapter 31, but this one is
as good as any, as an example.
Incidentally, we know that even when ω and k are not linearly proportional,
the ratio ω/k is certainly the speed of propagation for the particular frequency
and wave number. We call this ratio the phase velocity; it is the speed at which
the phase, or the nodes of a single wave, would move along:

vp = ω

k .
(48.13)

This phase velocity, for the case of x-rays in glass, is greater than the speed of
light in vacuum (since n in 48.12 is less than 1), and that is a bit bothersome,
because we do not think we can send signals faster than the speed of light!

48-10What we are going to discuss now is the interference of two waves in which ω
and k have a deﬁnite formula relating them. The above formula for n says that
k is given as a deﬁnite function of ω. To be speciﬁc, in this particular problem,
the formula for k in terms of ω is

k = ω

c −a

ωc,
(48.14)

where a = Nq2
e/2ϵ0m, a constant. At any rate, for each frequency there is a
deﬁnite wave number, and we want to add two such waves together.
Let us do it just as we did in Eq. (48.7):

ei(ω1t−k1x) + ei(ω2t−k2x) = ei[(ω1+ω2)t−(k1+k2)x]/2

× {ei[(ω1−ω2)t−(k1−k2)x]/2 + e−i[(ω1−ω2)t−(k1−k2)x]/2}.
(48.15)

So we have a modulated wave again, a wave which travels with the mean frequency
and the mean wave number, but whose strength is varying with a form which
depends on the diﬀerence frequency and the diﬀerence wave number.
Now let us take the case that the diﬀerence between the two waves is relatively
small. Let us suppose that we are adding two waves whose frequencies are nearly
equal; then (ω1 + ω2)/2 is practically the same as either one of the ω’s, and
similarly for (k1 + k2)/2.
Thus the speed of the wave, the fast oscillations,
the nodes, is still essentially ω/k. But look, the speed of propagation of the
modulation is not the same! How much do we have to change x to account for a
certain amount of t? The speed of this modulation wave is the ratio

vM = ω1 −ω2

k1 −k2
.
(48.16)

The speed of modulation is sometimes called the group velocity. If we take the
case that the diﬀerence in frequency is relatively small, and the diﬀerence in
wave number is then also relatively small, then this expression approaches, in
the limit,

vg = dω

dk .
(48.17)

In other words, for the slowest modulation, the slowest beats, there is a deﬁnite
speed at which they travel which is not the same as the phase speed of the
waves—what a mysterious thing!

48-11The group velocity is the derivative of ω with respect to k, and the phase
velocity is ω/k.

Let us see if we can understand why. Consider two waves, again of slightly
diﬀerent wavelength, as in Fig. 48-1. They are out of phase, in phase, out of
phase, and so on. Now these waves represent, really, the waves in space travelling
with slightly diﬀerent frequencies also. Now because the phase velocity, the
velocity of the nodes of these two waves, is not precisely the same, something
new happens. Suppose we ride along with one of the waves and look at the other
one; if they both went at the same speed, then the other wave would stay right
where it was relative to us, as we ride along on this crest. We ride on that crest
and right opposite us we see a crest; if the two velocities are equal the crests stay
on top of each other. But it is not so that the two velocities are really equal.
There is only a small diﬀerence in frequency and therefore only a small diﬀerence
in velocity, but because of that diﬀerence in velocity, as we ride along the other
wave moves slowly forward, say, or behind, relative to our wave. So as time goes
on, what happens to the node? If we move one wave train just a shade forward,
the node moves forward (or backward) a considerable distance. That is, the sum
of these two waves has an envelope, and as the waves travel along, the envelope
rides on them at a diﬀerent speed. The group velocity is the speed at which
modulated signals would be transmitted.
If we made a signal, i.e., some kind of change in the wave that one could
recognize when he listened to it, a kind of modulation, then that modulation
would travel at the group velocity, provided that the modulations were relatively
slow. (When they are fast, it is much more diﬃcult to analyze.)
Now we may show (at long last), that the speed of propagation of x-rays in a
block of carbon is not greater than the speed of light, although the phase velocity
is greater than the speed of light. In order to do that, we must ﬁnd dω/dk, which
we get by diﬀerentiating (48.14): dk/dω = 1/c + a/ω2c. The group velocity,
therefore, is the reciprocal of this, namely,

vg =
c
1 + a/ω2 ,
(48.18)

which is smaller than c! So although the phases can travel faster than the speed
of light, the modulation signals travel slower, and that is the resolution of the
apparent paradox! Of course, if we have the simple case that ω = kc, then dω/dk
is also c. So when all the phases have the same velocity, naturally the group has
the same velocity.

48-1248-5 Probability amplitudes for particles

Let us now consider one more example of the phase velocity which is extremely
interesting. It has to do with quantum mechanics. We know that the amplitude
to ﬁnd a particle at a place can, in some circumstances, vary in space and time,
let us say in one dimension, in this manner:

ψ = Aei(ωt−kx),
(48.19)

where ω is the frequency, which is related to the classical idea of the energy
through E = ℏω, and k is the wave number, which is related to the momentum
through p = ℏk. We would say the particle had a deﬁnite momentum p if the
wave number were exactly k, that is, a perfect wave which goes on with the
same amplitude everywhere. Equation (48.19) gives the amplitude, and if we
take the absolute square, we get the relative probability for ﬁnding the particle
as a function of position and time. This is a constant, which means that the
probability is the same to ﬁnd a particle anywhere. Now suppose, instead, that
we have a situation where we know that the particle is more likely to be at one
place than at another. We would represent such a situation by a wave which has
a maximum and dies out on either side (Fig. 48-6). (It is not quite the same as a
wave like (48.1) which has a series of maxima, but it is possible, by adding several
waves of nearly the same ω and k together, to get rid of all but one maximum.)

ψ(x)

x

Fig. 48-6. A localized wave train.

Now in those circumstances, since the square of (48.19) represents the chance
of ﬁnding a particle somewhere, we know that at a given instant the particle
is most likely to be near the center of the “lump,” where the amplitude of the
wave is maximum. If now we wait a few moments, the waves will move, and
after some time the “lump” will be somewhere else. If we knew that the particle
originally was situated somewhere, classically, we would expect that it would
later be elsewhere as a matter of fact, because it has a speed, after all, and a

48-13
