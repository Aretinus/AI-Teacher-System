# Aberration

direction of propagation and the x-axis:

λx = λ/ cos α.
(34.20)

Therefore the rate of change of phase, which is proportional to the reciprocal
of λx, is smaller by the factor cos α; that is just how kx would vary—it would
be the magnitude of k, times the cosine of the angle between k and the x-axis!
That, then, is the nature of the wave vector that we use to represent a wave
in three dimensions. The four quantities ω, kx, ky, kz transform in relativity as
a four-vector, where ω corresponds to the time, and kx, ky, kz correspond to the
x-, y-, and z-components of the four-vector.
In our previous discussion of special relativity (Chapter 17), we learned that
there are ways of making relativistic dot products with four-vectors. If we use
the position vector xµ, where µ stands for the four components (time and three
space ones), and if we call the wave vector kµ, where the index µ again has four
values, time and three space ones, then the dot product of xµ and kµ is written
P′ kµxµ (see Chapter 17). This dot product is an invariant, independent of the
coordinate system; what is it equal to? By the deﬁnition of this dot product in
four dimensions, it is

X′
kµxµ = ωt −kxx −kyy −kzz.
(34.21)

We know from our study of vectors that P′ kµxµ is invariant under the Lorentz
transformation, since kµ is a four-vector. But this quantity is precisely what
appears inside the cosine for a plane wave, and it ought to be invariant under a
Lorentz transformation. We cannot have a formula with something that changes
inside the cosine, since we know that the phase of the wave cannot change when
we change the coordinate system.

34-8 Aberration

In deriving Eqs. (34.17) and (34.18), we have taken a simple example where
k happened to be in a direction of motion, but of course we can generalize it
to other cases also. For example, suppose there is a source sending out light in
a certain direction from the point of view of a man at rest, but we are moving
along on the earth, say (Fig. 34-12). From which direction does the light appear
to come? To ﬁnd out, we will have to write down the four components of kµ and

34-18S

S

v

(a)

(b)

Fig. 34-12. A distant source S is viewed by (a) a stationary telescope,
and (b) a laterally moving telescope.

apply the Lorentz transformation. The answer, however, can be found by the
following argument: we have to point our telescope at an angle to see the light.
Why? Because light is coming down at the speed c, and we are moving sidewise
at the speed v, so the telescope has to be tilted forward so that as the light comes
down it goes “straight” down the tube. It is very easy to see that the horizontal
distance is vt when the vertical distance is ct, and therefore, if θ′ is the angle
of tilt, tan θ′ = v/c. How nice! How nice, indeed—except for one little thing:
θ′ is not the angle at which we would have to set the telescope relative to the
earth, because we made our analysis from the point of view of a “ﬁxed” observer.
When we said the horizontal distance is vt, the man on the earth would have
found a diﬀerent distance, since he measured with a “squashed” ruler. It turns
out that, because of that contraction eﬀect,

tan θ =
v/c
p

1 −v2/c2 ,
(34.22)

which is equivalent to

sin θ = v/c.
(34.23)

It will be instructive for the student to derive this result, using the Lorentz
transformation.
This eﬀect, that a telescope has to be tilted, is called aberration, and it has
been observed. How can we observe it? Who can say where a given star should
be? Suppose we do have to look in the wrong direction to see a star; how do we

34-19know it is the wrong direction? Because the earth goes around the sun. Today
we have to point the telescope one way; six months later we have to tilt the
telescope the other way. That is how we can tell that there is such an eﬀect.

34-9 The momentum of light

Now we turn to a diﬀerent topic. We have never, in all our discussion of the
past few chapters, said anything about the eﬀects of the magnetic ﬁeld that is
associated with light. Ordinarily, the eﬀects of the magnetic ﬁeld are very small,
but there is one interesting and important eﬀect which is a consequence of the
magnetic ﬁeld. Suppose that light is coming from a source and is acting on a
charge and driving that charge up and down. We will suppose that the electric
ﬁeld is in the x-direction, so the motion of the charge is also in the x-direction:
it has a position x and a velocity v, as shown in Fig. 34-13. The magnetic ﬁeld
is at right angles to the electric ﬁeld. Now as the electric ﬁeld acts on the charge
and moves it up and down, what does the magnetic ﬁeld do? The magnetic ﬁeld
acts on the charge (say an electron) only when it is moving; but the electron
is moving, it is driven by the electric ﬁeld, so the two of them work together:
While the thing is going up and down it has a velocity and there is a force on it,
B times v times q; but in which direction is this force? It is in the direction of
the propagation of light. Therefore, when light is shining on a charge and it is
oscillating in response to that light, there is a driving force in the direction of
the light beam. This is called radiation pressure or light pressure.
Let us determine how strong the radiation pressure is. Evidently it is F = qvB
or, since everything is oscillating, it is the time average of this, ⟨F⟩. From (34.2)
the strength of the magnetic ﬁeld is the same as the strength of the electric ﬁeld
divided by c, so we need to ﬁnd the average of the electric ﬁeld, times the velocity,
times the charge, times 1/c: ⟨F⟩= q⟨vE⟩/c. But the charge q times the ﬁeld E

x

E

S

v

y
z

B
F

Fig. 34-13. The magnetic force on a charge which is driven by the
electric ﬁeld is in the direction of the light beam.

34-20
