# Beat notes and modulation

about the intensity of the wave we must think of it as having twice this frequency.
That is, the modulation of the amplitude, in the sense of the strength of its
intensity, is at frequency ω1 −ω2, although the formula tells us that we multiply
by a cosine wave at half that frequency. The technical basis for the diﬀerence
is that the high frequency-wave has a little diﬀerent phase relationship in the
second half-cycle.
Ignoring this small complication, we may conclude that if we add two waves of
frequency ω1 and ω2, we will get a net resulting wave of average frequency 1

2(ω1 +
ω2) which oscillates in strength with a frequency ω1 −ω2.
If the two amplitudes are diﬀerent, we can do it all over again by multiplying
the cosines by diﬀerent amplitudes A1 and A2, and do a lot of mathematics,
rearranging, and so on, using equations like (48.2)–(48.5). However, there are
other, easier ways of doing the same analysis. For example, we know that it
is much easier to work with exponentials than with sines and cosines and that
we can represent A1 cos ω1t as the real part of A1eiω1t. The other wave would
similarly be the real part of A2eiω2t. If we add the two, we get A1eiω1t + A2eiω2t.
If we then factor out the average frequency, we have

A1eiω1t + A2eiω2t = ei(ω1+ω2)t/2[A1ei(ω1−ω2)t/2 + A2e−i(ω1−ω2)t/2].
(48.7)

Again we have the high-frequency wave with a modulation at the lower frequency.

48-2 Beat notes and modulation

If we are now asked for the intensity of the wave of Eq. (48.7), we can either
take the absolute square of the left side, or of the right side. Let us take the left
side. The intensity then is

I = A2
1 + A2
2 + 2A1A2 cos (ω1 −ω2)t.
(48.8)

We see that the intensity swells and falls at a frequency ω1 −ω2, varying between
the limits (A1 + A2)2 and (A1 −A2)2. If A1 ̸= A2, the minimum intensity is not
zero.
One more way to represent this idea is by means of a drawing, like Fig. 48-2.
We draw a vector of length A1, rotating at a frequency ω1, to represent one of
the waves in the complex plane. We draw another vector of length A2, going
around at a frequency ω2, to represent the second wave. If the two frequencies
are exactly equal, their resultant is of ﬁxed length as it keeps revolving, and we

48-4A

A1

ω1 = ω2 = ω

A2

Fig. 48-2. The resultant of two complex vectors of equal frequency.









Fig. 48-3. The resultant of two complex vectors of unequal frequency,
as seen in the rotating frame of reference of one vector. Nine successive
positions of the slowly rotating vector are shown.

get a deﬁnite, ﬁxed intensity from the two. But if the frequencies are slightly
diﬀerent, the two complex vectors go around at diﬀerent speeds. Figure 48-3
shows what the situation looks like relative to the vector A1eiω1t. We see that
A2 is turning slowly away from A1, and so the amplitude that we get by adding
the two is ﬁrst strong, and then, as it opens out, when it gets to the 180◦relative
position the resultant gets particularly weak, and so on. As the vectors go around,
the amplitude of the sum vector gets bigger and smaller, and the intensity thus
pulsates. It is a relatively simple idea, and there are many diﬀerent ways of
representing the same thing.
The eﬀect is very easy to observe experimentally. In the case of acoustics, we
may arrange two loudspeakers driven by two separate oscillators, one for each
loudspeaker, so that they each make a tone. We thus receive one note from one
source and a diﬀerent note from the other source. If we make the frequencies
exactly the same, the resulting eﬀect will have a deﬁnite strength at a given space

48-5location. If we then de-tune them a little bit, we hear some variations in the
intensity. The farther they are de-tuned, the more rapid are the variations of sound.
The ear has some trouble following variations more rapid than ten or so per second.
We may also see the eﬀect on an oscilloscope which simply displays the sum
of the currents to the two speakers. If the frequency of pulsing is relatively low,
we simply see a sinusoidal wave train whose amplitude pulsates, but as we make
the pulsations more rapid we see the kind of wave shown in Fig. 48-1. As we go
to greater frequency diﬀerences, the “bumps” move closer together. Also, if the
amplitudes are not equal and we make one signal stronger than the other, then
we get a wave whose amplitude does not ever become zero, just as we expect.
Everything works the way it should, both acoustically and electrically.
The opposite phenomenon occurs too! In radio transmission using so-called
amplitude modulation (am), the sound is broadcast by the radio station as
follows: the radio transmitter has an ac electric oscillation which is at a very
high frequency, for example 800 kilocycles per second, in the broadcast band.
If this carrier signal is turned on, the radio station emits a wave which is of
uniform amplitude at 800,000 oscillations a second. The way the “information”
is transmitted, the useless kind of information about what kind of car to buy, is
that when somebody talks into a microphone the amplitude of the carrier signal
is changed in step with the vibrations of sound entering the microphone.
If we take as the simplest mathematical case the situation where a soprano
is singing a perfect note, with perfect sinusoidal oscillations of her vocal cords,
then we get a signal whose strength is alternating as shown in Fig. 48-4. The
audiofrequency alternation is then recovered in the receiver; we get rid of the
carrier wave and just look at the envelope which represents the oscillations of the
vocal cords, or the sound of the singer. The loudspeaker then makes corresponding
vibrations at the same frequency in the air, and the listener is then essentially

Fig. 48-4.
A modulated carrier wave.
In this schematic sketch,
ωc/ωm = 5. In an actual radiowave, ωc/ωm ∼100.

48-6unable to tell the diﬀerence, so they say. Because of a number of distortions and
other subtle eﬀects, it is, in fact, possible to tell whether we are listening to a
radio or to a real soprano; otherwise the idea is as indicated above.

48-3 Side bands

Mathematically, the modulated wave described above would be expressed as

S = (1 + b cos ωmt) cos ωct,
(48.9)

where ωc represents the frequency of the carrier and ωm is the frequency of the
audio tone. Again we use all those theorems about the cosines, or we can use eiθ;
it makes no diﬀerence—it is easier with eiθ, but it is the same thing. We then get

S = cos ωct + 1

2b cos (ωc + ωm)t + 1

2b cos (ωc −ωm)t.
(48.10)

So, from another point of view, we can say that the output wave of the system
consists of three waves added in superposition: ﬁrst, the regular wave at the
frequency ωc, that is, at the carrier frequency, and then two new waves at two
new frequencies. One is the carrier frequency plus the modulation frequency, and
the other is the carrier frequency minus the modulation frequency. If, therefore,
we make some kind of plot of the intensity being generated by the generator as
a function of frequency, we would ﬁnd a lot of intensity at the frequency of the
carrier, naturally, but when a singer started to sing, we would suddenly also ﬁnd
intensity proportional to the strength of the singer, b2, at frequency ωc + ωm
and ωc −ωm, as shown in Fig. 48-5. These are called side bands; when there is
a modulated signal from the transmitter, there are side bands. If there is more
than one note at the same time, say ωm and ωm′, there are two instruments

I

ω

ωc −ωm ωc
ωc + ωm

Fig. 48-5. The frequency spectrum of a carrier wave ωc modulated
by a single cosine wave ωm.

48-7
