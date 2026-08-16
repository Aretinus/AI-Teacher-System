# Confined waves, with natural frequencies

It can be seen that if these are substituted in (49.2) and if x is set equal to 0,
then y = 0 for all values of t, so it satisﬁes the necessary condition. Because of
the properties of exponentials, this can be written in a simpler form:

y = eiωt(e−iωx/c −eiωx/c) = −2ieiωt sin (ωx/c).
(49.3)

There is something interesting and new here, in that this solution tells us that
if we look at any ﬁxed x, the string oscillates at frequency ω. No matter where
this point is, the frequency is the same! But there are some places, in particular
wherever sin (ωx/c) = 0, where there is no displacement at all. Furthermore, if
at any time t we take a snapshot of the vibrating string, the picture will be a
sine wave. However, the displacement of this sine wave will depend upon the
time t. From inspection of Eq. (49.3) we can see that the length of one cycle of
the sine wave is equal to the wavelength of either of the superimposed waves:

λ = 2πc/ω.
(49.4)

The points where there is no motion satisfy the condition sin (ωx/c) = 0, which
means that (ωx/c) = 0, π, 2π, . . . , nπ, . . . These points are called nodes. Between
any two successive nodes, every point moves up and down sinusoidally, but the
pattern of motion stays ﬁxed in space. This is the fundamental characteristic of
what we call a mode. If one can ﬁnd a pattern of motion which has the property
that at any point the object moves perfectly sinusoidally, and that all points
move at the same frequency (though some will move more than others), then we
have what is called a mode.

49-2 Conﬁned waves, with natural frequencies

The next interesting problem is to consider what happens if the string is
held at both ends, say at x = 0 and x = L. We can begin with the idea of the
reﬂection of waves, starting with some kind of a bump moving in one direction.
As time goes on, we would expect the bump to get near one end, and as time
goes still further it will become a kind of little wobble, because it is combining
with the reversed-image bump which is coming from the other side. Finally the
original bump will disappear and the image bump will move in the other direction
to repeat the process at the other end. This problem has an easy solution, but
an interesting question is whether we can have a sinusoidal motion (the solution
just described is periodic, but of course it is not sinusoidally periodic). Let us try

49-3to put a sinusoidally periodic wave on a string. If the string is tied at one end,
we know it must look like our earlier solution (49.3). If it is tied at the other
end, it has to look the same at the other end. So the only possibility for periodic
sinusoidal motion is that the sine wave must neatly ﬁt into the string length. If
it does not ﬁt into the string length, then it is not a natural frequency at which
the string can continue to oscillate. In short, if the string is started with a sine
wave shape that just ﬁts in, then it will continue to keep that perfect shape of a
sine wave and will oscillate harmonically at some frequency.
Mathematically, we can write sin kx for the shape, where k is equal to the
factor (ω/c) in Eqs. (49.3) and (49.4), and this function will be zero at x = 0.
However, it must also be zero at the other end. The signiﬁcance of this is that k
is no longer arbitrary, as was the case for the half-open string. With the string
closed at both ends, the only possibility is that sin (kL) = 0, because this is the
only condition that will keep both ends ﬁxed. Now in order for a sine to be zero,
the angle must be either 0, π, 2π, or some other integral multiple of π. The
equation
kL = nπ
(49.5)

will, therefore, give any one of the possible k’s, depending on what integer is put
in. For each of the k’s there is a certain frequency ω, which, according to (49.3),
is simply
ω = kc = nπc/L.
(49.6)

So we have found the following: that a string has a property that it can have
sinusoidal motions, but only at certain frequencies. This is the most important
characteristic of conﬁned waves. No matter how complicated the system is, it
always turns out that there are some patterns of motion which have a perfect
sinusoidal time dependence, but with frequencies that are a property of the
particular system and the nature of its boundaries. In the case of the string we
have many diﬀerent possible frequencies, each one, by deﬁnition, corresponding
to a mode, because a mode is a pattern of motion which repeats itself sinusoidally.
Figure 49-2 shows the ﬁrst three modes for a string. For the ﬁrst mode the
wavelength λ is 2L. This can be seen if one continues the wave out to x = 2L
to obtain one complete cycle of the sine wave. The angular frequency ω is 2πc
divided by the wavelength, in general, and in this case, since λ is 2L, the frequency
is πc/L, which is in agreement with (49.6) with n = 1. Let us call the ﬁrst mode
frequency ω1. Now the next mode shows two loops with one node in the middle.
For this mode the wavelength, then, is simply L. The corresponding value of k is

49-4y

L

x

y

x

y

x

Fig. 49-2. The ﬁrst three modes of a vibrating string.

twice as great and the frequency is twice as large; it is 2ω1. For the third mode
it is 3ω1, and so on. So all the diﬀerent frequencies of the string are multiples,
1, 2, 3, 4, and so on, of the lowest frequency ω1.
Returning now to the general motion of the string, it turns out that any
possible motion can always be analyzed by asserting that more than one mode
is operating at the same time. In fact, for general motion an inﬁnite number of
modes must be excited at the same time. To get some idea of this, let us illustrate
what happens when there are two modes oscillating at the same time: Suppose
that we have the ﬁrst mode oscillating as shown by the sequence of pictures in
Fig. 49-3, which illustrates the deﬂection of the string for equally spaced time
intervals extending through half a cycle of the lowest frequency.
Now, at the same time, we suppose that there is an oscillation of the second
mode also. Figure 49-3 also shows a sequence of pictures of this mode, which
at the start is 90◦out of phase with the ﬁrst mode. This means that at the
start it has no displacement, but the two halves of the string have oppositely
directed velocities. Now we recall a general principle relating to linear systems:
if there are any two solutions, then their sum is also a solution. Therefore a third
possible motion of the string would be a displacement obtained by adding the
two solutions shown in Fig. 49-3. The result, also shown in the ﬁgure, begins
to suggest the idea of a bump running back and forth between the ends of the
string, although with only two modes we cannot make a very good picture of it;
more modes are needed. This result is, in fact, a special case of a great principle

49-5ω1t=0

ω1t= π


ω1t= π


ω1t= 3π


ω1t=π

FIRST MODE
SECOND MODE

COMPOSITE WAVE

Fig. 49-3. Two modes combine to give a travelling wave.

for linear systems:

Any motion at all can be analyzed by assuming that it is the sum of the
motions of all the diﬀerent modes, combined with appropriate amplitudes and
phases.

The importance of the principle derives from the fact that each mode is very
simple—it is nothing but a sinusoidal motion in time. It is true that even the
general motion of a string is not really very complicated, but there are other
systems, for example the whipping of an airplane wing, in which the motion
is much more complicated. Nevertheless, even with an airplane wing, we ﬁnd
there is a certain particular way of twisting which has one frequency and other
ways of twisting that have other frequencies. If these modes can be found, then
the complete motion can always be analyzed as a superposition of harmonic
oscillations (except when the whipping is of such degree that the system can no
longer be considered as linear).

49-3 Modes in two dimensions

The next example to be considered is the interesting situation of modes in
two dimensions. Up to this point we have talked only about one-dimensional
situations—a stretched string or sound waves in a tube. Ultimately we should
consider three dimensions, but an easier step will be that to two dimensions.

49-6
