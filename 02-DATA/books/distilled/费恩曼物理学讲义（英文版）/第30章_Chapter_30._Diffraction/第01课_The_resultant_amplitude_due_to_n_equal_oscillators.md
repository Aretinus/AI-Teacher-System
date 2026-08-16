# The resultant amplitude due to n equal oscillators

Diffraction

30-1 The resultant amplitude due to n equal oscillators

This chapter is a direct continuation of the previous one, although the name
has been changed from Interference to Diﬀraction. No one has ever been able to
deﬁne the diﬀerence between interference and diﬀraction satisfactorily. It is just a
question of usage, and there is no speciﬁc, important physical diﬀerence between
them. The best we can do, roughly speaking, is to say that when there are only
a few sources, say two, interfering, then the result is usually called interference,
but if there is a large number of them, it seems that the word diﬀraction is more
often used. So, we shall not worry about whether it is interference or diﬀraction,
but continue directly from where we left oﬀin the middle of the subject in the
last chapter.
Thus we shall now discuss the situation where there are n equally spaced
oscillators, all of equal amplitude but diﬀerent from one another in phase, either
because they are driven diﬀerently in phase, or because we are looking at them at
an angle such that there is a diﬀerence in time delay. For one reason or another,
we have to add something like this:

R = A[cos ωt + cos (ωt + φ) + cos (ωt + 2φ) + · · · + cos (ωt + (n −1)φ)], (30.1)

where φ is the phase diﬀerence between one oscillator and the next one, as seen
in a particular direction. Speciﬁcally, φ = α + 2πd sin θ/λ. Now we must add all
the terms together. We shall do this geometrically. The ﬁrst one is of length A,
and it has zero phase. The next is also of length A and it has a phase equal to φ.
The next one is again of length A and it has a phase equal to 2φ, and so on. So
we are evidently going around an equiangular polygon with n sides (Fig. 30-1).
Now the vertices, of course, all lie on a circle, and we can ﬁnd the net amplitude
most easily if we ﬁnd the radius of that circle. Suppose that Q is the center of

30-1T

y

A6

r

AR

A5

Q

nφ/2

M

φ

A4

r

A3

A2

O

x

S

φ
A1

Fig. 30-1. The resultant amplitude of n = 6 equally spaced sources
with net successive phase diﬀerences φ.

the circle. Then we know that the angle OQS is just a phase angle φ. (This is
because the radius QS bears the same geometrical relation to A2 as QO bears
to A1, so they form an angle φ between them.) Therefore the radius r must
be such that A = 2r sin φ/2, which ﬁxes r. But the large angle OQT is equal
to nφ, and we thus ﬁnd that AR = 2r sin nφ/2. Combining these two results to
eliminate r, we get

AR = A sin nφ/2

sin φ/2 .
(30.2)

The resultant intensity is thus

I = I0
sin2 nφ/2

sin2 φ/2 .
(30.3)

Now let us analyze this expression and study some of its consequences. In
the ﬁrst place, we can check it for n = 1. It checks: I = I0. Next, we check it
for n = 2: writing sin φ = 2 sin φ/2 cos φ/2, we ﬁnd that AR = 2A cos φ/2, which
agrees with (29.12).
Now the idea that led us to consider the addition of several sources was that
we might get a much stronger intensity in one direction than in another; that the
nearby maxima which would have been present if there were only two sources will
have gone down in strength. In order to see this eﬀect, we plot the curve that
comes from (30.3), taking n to be enormously large and plotting the region near
φ = 0. In the ﬁrst place, if φ is exactly 0, we have 0/0, but if φ is inﬁnitesimal,
the ratio of the two sines squared is simply n2, since the sine and the angle are

30-2approximately equal. Thus the intensity of the maximum of the curve is equal
to n2 times the intensity of one oscillator. That is easy to see, because if they
are all in phase, then the little vectors have no relative angle and all n of them
add up so the amplitude is n times, and the intensity n2 times, stronger.
As the phase φ increases, the ratio of the two sines begins to fall oﬀ, and the
ﬁrst time it reaches zero is when nφ/2 = π, because sin π = 0. In other words,
φ = 2π/n corresponds to the ﬁrst minimum in the curve (Fig. 30-2). In terms
of what is happening with the arrows in Fig. 30-1, the ﬁrst minimum occurs
when all the arrows come back to the starting point; that means that the total
accumulated angle in all the arrows, the total phase diﬀerence between the ﬁrst
and last oscillator, must be 2π to complete the circle.

I
n2I0

1.0

×10

nφ/2π

Fig. 30-2. The intensity as a function of phase angle for a large
number of oscillators of equal strength.

Now we go to the next maximum, and we want to see that it is really much
smaller than the ﬁrst one, as we had hoped. We shall not go precisely to the
maximum position, because both the numerator and the denominator of (30.3)
are variant, but sin φ/2 varies quite slowly compared with sin nφ/2 when n is
large, so when sin nφ/2 = 1 we are very close to the maximum.
The next
maximum of sin2 nφ/2 comes at nφ/2 = 3π/2, or φ = 3π/n. This corresponds
to the arrows having traversed the circle one and a half times. On putting
φ = 3π/n into the formula to ﬁnd the size of the maximum, we ﬁnd that
sin2 3π/2 = 1 in the numerator (because that is why we picked this angle), and
in the denominator we have sin2 3π/2n. Now if n is suﬃciently large, then this
angle is very small and the sine is equal to the angle; so for all practical purposes,
we can put sin 3π/2n = 3π/2n. Thus we ﬁnd that the intensity at this maximum

30-3is I = I0(4n2/9π2). But n2I0 was the maximum intensity, and so we have
4/9π2 times the maximum intensity, which is about 0.045, less than 5 percent, of
the maximum intensity! Of course there are decreasing intensities farther out.
So we have a very sharp central maximum with very weak subsidiary maxima on
the sides.
It is possible to prove that the area of the whole curve, including all the little
bumps, is equal to 2πnI0, or twice the area of the dotted rectangle in Fig. 30-2.

θ

δ = ∆/n = d sin θ

∆

1 2 3
s
n
d

L

Fig. 30-3. A linear array of n equal oscillators, driven with phases αs =
sα.

Now let us consider further how we may apply Eq. (30.3) in diﬀerent circum-
stances, and try to understand what is happening. Let us consider our sources
to be all on a line, as drawn in Fig. 30-3. There are n of them, all spaced by a
distance d, and we shall suppose that the intrinsic relative phase, one to the next,
is α. Then if we are observing in a given direction θ from the normal, there is an
additional phase 2πd sin θ/λ because of the time delay between each successive
two, which we talked about before. Thus

φ = α + 2πd sin θ/λ

= α + kd sin θ.
(30.4)

First, we shall take the case α = 0. That is, all oscillators are in phase, and we
want to know what the intensity is as a function of the angle θ. In order to ﬁnd
out, we merely have to put φ = kd sin θ into formula (30.3) and see what happens.
In the ﬁrst place, there is a maximum when φ = 0. That means that when all
the oscillators are in phase there is a strong intensity in the direction θ = 0. On
the other hand, an interesting question is, where is the ﬁrst minimum? That
occurs when φ = 2π/n. In other words, when 2πd sin θ/λ = 2π/n, we get the

30-4ﬁrst minimum of the curve. If we get rid of the 2π’s so we can look at it a little
better, it says that
nd sin θ = λ.
(30.5)

Now let us understand physically why we get a minimum at that position. nd
is the total length L of the array. Referring to Fig. 30-3, we see that nd sin θ =
L sin θ = ∆. What (30.5) says is that when ∆is equal to one wavelength, we
get a minimum. Now why do we get a minimum when ∆= λ? Because the
contributions of the various oscillators are then uniformly distributed in phase
from 0◦to 360◦. The arrows (Fig. 30-1) are going around a whole circle—we are
adding equal vectors in all directions, and such a sum is zero. So when we have
an angle such that ∆= λ, we get a minimum. That is the ﬁrst minimum.
There is another important feature about formula (30.3), which is that if
the angle φ is increased by any multiple of 2π, it makes no diﬀerence to the
formula. So we will get other strong maxima at φ = 2π, 4π, 6π, and so forth.
Near each of these great maxima the pattern of Fig. 30-2 is repeated. We may
ask ourselves, what is the geometrical circumstance that leads to these other
great maxima? The condition is that φ = 2πm, where m is any integer. That is,
2πd sin θ/λ = 2πm. Dividing by 2π, we see that

d sin θ = mλ.
(30.6)

This looks like the other formula, (30.5). No, that formula was nd sin θ = λ. The
diﬀerence is that here we have to look at the individual sources, and when we say
d sin θ = mλ, that means that we have an angle θ such that δ = mλ. In other
words, each source is now contributing a certain amount, and successive ones
are out of phase by a whole multiple of 360◦, and therefore are contributing in
phase, because out of phase by 360◦is the same as being in phase. So they all
contribute in phase and produce just as good a maximum as the one for m = 0
that we discussed before. The subsidiary bumps, the whole shape of the pattern,
is just like the one near φ = 0, with exactly the same minima on each side, etc.
Thus such an array will send beams in various directions—each beam having a
strong central maximum and a certain number of weak “side lobes.” The various
strong beams are referred to as the zero-order beam, the ﬁrst-order beam, etc.,
according to the value of m. m is called the order of the beam.
We call attention to the fact that if d is less than λ, Eq. (30.6) can have
no solution except m = 0, so that if the spacing is too small there is only one
possible beam, the zero-order one centered at θ = 0. (Of course, there is also

30-5a beam in the opposite direction.) In order to get subsidiary great maxima, we
must have the spacing d of the array greater than one wavelength.

30-2 The diﬀraction grating

In technical work with antennas and wires it is possible to arrange that all the
phases of the little oscillators, or antennas, are equal. The question is whether
and how we can do a similar thing with light. We cannot at the present time
literally make little optical-frequency radio stations and hook them up with
inﬁnitesimal wires and drive them all with a given phase. But there is a very
easy way to do what amounts to the same thing.
Suppose that we had a lot of parallel wires, equally spaced at a spacing d, and
a radiofrequency source very far away, practically at inﬁnity, which is generating
an electric ﬁeld which arrives at each one of the wires at the same phase (it is
so far away that the time delay is the same for all of the wires). (One can work
out cases with curved arrays, but let us take a plane one.) Then the external
electric ﬁeld will drive the electrons up and down in each wire. That is, the
ﬁeld which is coming from the original source will shake the electrons up and
down, and in moving, these represent new generators. This phenomenon is called
scattering: a light wave from some source can induce a motion of the electrons
in a piece of material, and these motions generate their own waves. Therefore all
that is necessary is to set up a lot of wires, equally spaced, drive them with a
radiofrequency source far away, and we have the situation that we want, without
a whole lot of special wiring. If the incidence is normal, the phases will be equal,
and we will get exactly the circumstance we have been discussing. Therefore, if
the wire spacing is greater than the wavelength, we will get a strong intensity of
scattering in the normal direction, and in certain other directions given by (30.6).
This can also be done with light! Instead of wires, we use a ﬂat piece of glass
and make notches in it such that each of the notches scatters a little diﬀerently
than the rest of the glass. If we then shine light on the glass, each one of the
notches will represent a source, and if we space the lines very ﬁnely, but not
closer than a wavelength (which is technically almost impossible anyway), then
we would expect a miraculous phenomenon: the light not only will pass straight
through, but there will also be a strong beam at a ﬁnite angle, depending on
the spacing of the notches! Such objects have actually been made and are in
common use—they are called diﬀraction gratings.

30-6
