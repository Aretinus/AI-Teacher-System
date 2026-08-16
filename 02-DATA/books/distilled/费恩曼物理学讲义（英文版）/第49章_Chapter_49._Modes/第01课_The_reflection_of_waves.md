# The reflection of waves

Modes

49-1 The reﬂection of waves

This chapter will consider some of the remarkable phenomena which are a
result of conﬁning waves in some ﬁnite region. We will be led ﬁrst to discover a few
particular facts about vibrating strings, for example, and then the generalization
of these facts will give us a principle which is probably the most far-reaching
principle of mathematical physics.
Our ﬁrst example of conﬁning waves will be to conﬁne a wave at one boundary.
Let us take the simple example of a one-dimensional wave on a string. One could
equally well consider sound in one dimension against a wall, or other situations
of a similar nature, but the example of a string will be suﬃcient for our present
purposes. Suppose that the string is held at one end, for example by fastening
it to an “inﬁnitely solid” wall. This can be expressed mathematically by saying
that the displacement y of the string at the position x = 0 must be zero, because
the end does not move. Now if it were not for the wall, we know that the general
solution for the motion is the sum of two functions, F(x −ct) and G(x + ct), the
ﬁrst representing a wave travelling one way in the string, and the second a wave
travelling the other way in the string:

y = F(x −ct) + G(x + ct)
(49.1)

is the general solution for any string. But we have next to satisfy the condition
that the string does not move at one end. If we put x = 0 in Eq. (49.1) and
examine y for any value of t, we get y = F(−ct) + G(+ct). Now if this is to be
zero for all times, it means that the function G(ct) must be −F(−ct). In other
words, G of anything must be −F of minus that same thing. If this result is put
back into Eq. (49.1), we ﬁnd that the solution for the problem is

y = F(x −ct) −F(−x −ct).
(49.2)

It is easy to check that we will get y = 0 if we set x = 0.

49-1F (x + ct)

Fixed End

x

−F (−x + ct)

Fig. 49-1. Reﬂection of a wave as a superposition of two travelling waves.

Figure 49-1 shows a wave travelling in the negative x-direction near x = 0,
and a hypothetical wave travelling in the other direction reversed in sign and on
the other side of the origin. We say hypothetical because, of course, there is no
string to vibrate on that side of the origin. The total motion of the string is to be
regarded as the sum of these two waves in the region of positive x. As they reach
the origin, they will always cancel at x = 0, and ﬁnally the second (reﬂected)
wave will be the only one to exist for positive x and it will, of course, be travelling
in the opposite direction. These results are equivalent to the following statement:
if a wave reaches the clamped end of a string, it will be reﬂected with a change
in sign. Such a reﬂection can always be understood by imagining that what is
coming to the end of the string comes out upside down from behind the wall.
In short, if we assume that the string is inﬁnite and that whenever we have a
wave going one way we have another one going the other way with the stated
symmetry, the displacement at x = 0 will always be zero and it would make no
diﬀerence if we clamped the string there.
The next point to be discussed is the reﬂection of a periodic wave. Suppose that
the wave represented by F(x −ct) is a sine wave and has been reﬂected; then the
reﬂected wave −F(−x−ct) is also a sine wave of the same frequency, but travelling
in the opposite direction. This situation can be most simply described by using
the complex function notation: F(x−ct) = eiω(t−x/c) and F(−x−ct) = eiω(t+x/c).

49-2It can be seen that if these are substituted in (49.2) and if x is set equal to 0,
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

49-3
