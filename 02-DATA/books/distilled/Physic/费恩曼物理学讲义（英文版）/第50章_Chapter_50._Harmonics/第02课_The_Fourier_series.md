# The Fourier series

“notes.” (Musical instruments may make noises as well!) The tone may last for a
relatively short time, as when a key is pressed on a piano, or it may be sustained
almost indeﬁnitely, as when a ﬂute player holds a long note.
What is the special character of a musical note from the point of view of the
pressure in the air? A musical note diﬀers from a noise in that there is a periodicity
in its graph. There is some uneven shape to the variation of the air pressure with
time, and the shape repeats itself over and over again. An example of a pressure-
time function that would correspond to a musical note is shown in Fig. 50-1(b).
Musicians will usually speak of a musical tone in terms of three characteristics:
the loudness, the pitch, and the “quality.” The “loudness” is found to correspond
to the magnitude of the pressure changes. The “pitch” corresponds to the period
of time for one repetition of the basic pressure function. (“Low” notes have
longer periods than “high” notes.) The “quality” of a tone has to do with the
diﬀerences we may still be able to hear between two notes of the same loudness
and pitch. An oboe, a violin, or a soprano are still distinguishable even when
they sound notes of the same pitch. The quality has to do with the structure of
the repeating pattern.
Let us consider, for a moment, the sound produced by a vibrating string. If
we pluck the string, by pulling it to one side and releasing it, the subsequent
motion will be determined by the motions of the waves we have produced. We
know that these waves will travel in both directions, and will be reﬂected at the
ends. They will slosh back and forth for a long time. No matter how complicated
the wave is, however, it will repeat itself. The period of repetition is just the
time T required for the wave to travel two full lengths of the string. For that
is just the time required for any wave, once started, to reﬂect oﬀeach end and
return to its starting position, and be proceeding in the original direction. The
time is the same for waves which start out in either direction. Each point on the
string will, then, return to its starting position after one period, and again one
period later, etc. The sound wave produced must also have the same repetition.
We see why a plucked string produces a musical tone.

50-2 The Fourier series

We have discussed in the preceding chapter another way of looking at the
motion of a vibrating system. We have seen that a string has various natural
modes of oscillation, and that any particular kind of vibration that may be set
up by the starting conditions can be thought of as a combination—in suitable

50-3proportions—of several of the natural modes, oscillating together. For a string we
found that the normal modes of oscillation had the frequencies ω0, 2ω0, 3ω0, . . .
The most general motion of a plucked string, therefore, is composed of the
sum of a sinusoidal oscillation at the fundamental frequency ω0, another at the
second harmonic frequency 2ω0, another at the third harmonic 3ω0, etc. Now the
fundamental mode repeats itself every period T1 = 2π/ω0. The second harmonic
mode repeats itself every T2 = 2π/2ω0. It also repeats itself every T1 = 2T2,
after two of its periods. Similarly, the third harmonic mode repeats itself after a
time T1 which is 3 of its periods. We see again why a plucked string repeats its
whole pattern with a periodicity of T1. It produces a musical tone.
We have been talking about the motion of the string. But the sound, which
is the motion of the air, is produced by the motion of the string, so its vibrations
too must be composed of the same harmonics—though we are no longer thinking
about the normal modes of the air. Also, the relative strength of the harmonics
may be diﬀerent in the air than in the string, particularly if the string is “coupled”
to the air via a sounding board. The eﬃciency of the coupling to the air is
diﬀerent for diﬀerent harmonics.
If we let f(t) represent the air pressure as a function of time for a musical tone
[such as that in Fig. 50-1(b)], then we expect that f(t) can be written as the sum
of a number of simple harmonic functions of time—like cos ωt—for each of the
various harmonic frequencies. If the period of the vibration is T, the fundamental
angular frequency will be ω = 2π/T, and the harmonics will be 2ω, 3ω, etc.
There is one slight complication. For each frequency we may expect that the
starting phases will not necessarily be the same for all frequencies. We should,
therefore, use functions like cos (ωt + φ). It is, however, simpler to use instead
both the sine and cosine functions for each frequency. We recall that

cos (ωt + φ) = (cos φ cos ωt −sin φ sin ωt)
(50.1)

and since φ is a constant, any sinusoidal oscillation at the frequency ω can be
written as the sum of a term with cos ωt and another term with sin ωt.
We conclude, then, that any function f(t) that is periodic with the period T
can be written mathematically as

f(t) = a0
+ a1 cos ωt + b1 sin ωt

+ a2 cos 2ωt + b2 sin 2ωt

50-4+ a3 cos 3ωt + b3 sin 3ωt

+ · · ·
+ · · ·
(50.2)

where ω = 2π/T and the a’s and b’s are numerical constants which tell us how
much of each component oscillation is present in the oscillation f(t). We have
added the “zero-frequency” term a0 so that our formula will be completely general,
although it is usually zero for a musical tone. It represents a shift of the average
value (that is, the “zero” level) of the sound pressure. With it our formula can
take care of any case. The equality of Eq. (50.2) is represented schematically
in Fig. 50-2. (The amplitudes, an and bn, of the harmonic functions must be
suitably chosen. They are shown schematically and without any particular scale
in the ﬁgure.) The series (50.2) is called the Fourier series for f(t).

f (t)

t

T

=

a0

T t

a1

b1

+

+

t

t

a2

b2

+

+

t

t

+

+

etc.

etc.

Fig. 50-2. Any periodic function f (t) is equal to a sum of simple
harmonic functions.

We have said that any periodic function can be made up in this way. We
should correct that and say that any sound wave, or any function we ordinarily
encounter in physics, can be made up of such a sum. The mathematicians can
invent functions which cannot be made up of simple harmonic functions—for
instance, a function that has a “reverse twist” so that it has two values for some
values of t! We need not worry about such functions here.

50-550-3 Quality and consonance

Now we are able to describe what it is that determines the “quality” of a
musical tone. It is the relative amounts of the various harmonics—the values of
the a’s and b’s. A tone with only the ﬁrst harmonic is a “pure” tone. A tone with
many strong harmonics is a “rich” tone. A violin produces a diﬀerent proportion
of harmonics than does an oboe.
We can “manufacture” various musical tones if we connect several “oscillators”
to a loudspeaker. (An oscillator usually produces a nearly pure simple harmonic
function.) We should choose the frequencies of the oscillators to be ω, 2ω, 3ω, etc.
Then by adjusting the volume control on each oscillator, we can add in any
amount we wish of each harmonic—thereby producing tones of diﬀerent quality.
An electric organ works in much this way. The “keys” select the frequency of
the fundamental oscillator and the “stops” are switches that control the relative
proportions of the harmonics. By throwing these switches, the organ can be
made to sound like a ﬂute, or an oboe, or a violin.
It is interesting that to produce such “artiﬁcial” tones we need only one
oscillator for each frequency—we do not need separate oscillators for the sine
and cosine components. The ear is not very sensitive to the relative phases of
the harmonics. It pays attention mainly to the total of the sine and cosine parts
of each frequency. Our analysis is more accurate than is necessary to explain
the subjective aspect of music. The response of a microphone or other physical
instrument does depend on the phases, however, and our complete analysis may
be needed to treat such cases.
The “quality” of a spoken sound also determines the vowel sounds that we
recognize in speech. The shape of the mouth determines the frequencies of the
natural modes of vibration of the air in the mouth. Some of these modes are
set into vibration by the sound waves from the vocal chords. In this way, the
amplitudes of some of the harmonics of the sound are increased with respect
to others. When we change the shape of our mouth, harmonics of diﬀerent
frequencies are given preference. These eﬀects account for the diﬀerence between
an “e–e–e” sound and an “a–a–a” sound.
We all know that a particular vowel sound—say “e–e–e”—still “sounds like”
the same vowel whether we say (or sing) it at a high or a low pitch. From
the mechanism we describe, we would expect that particular frequencies are
emphasized when we shape our mouth for an “e–e–e,” and that they do not
change as we change the pitch of our voice. So the relation of the important

50-6
