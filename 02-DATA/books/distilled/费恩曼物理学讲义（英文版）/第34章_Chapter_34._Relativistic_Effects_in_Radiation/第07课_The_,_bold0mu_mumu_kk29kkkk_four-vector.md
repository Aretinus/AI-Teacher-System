# The , bold0mu mumu kk29kkkk four-vector

If we regroup the terms inside the brackets, we get

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

34-16y

λ

ek
r

x

Fig. 34-11. A plane wave travelling in an oblique direction.

of the propagation of light in three space dimensions, not just in one direction,
as we have been doing up until now.
Suppose that we have a coordinate system, x, y, z, and a wave which is
travelling along and whose wavefronts are as shown in Fig. 34-11. The wavelength
of the wave is λ, but the direction of motion of the wave does not happen to be
in the direction of one of the axes. What is the formula for such a wave? The
answer is clearly cos (ωt −ks), where k = 2π/λ and s is the distance along the
direction of motion of the wave—the component of the spatial position in the
direction of motion. Let us put it this way: if r is the vector position of a point in
space, then s is r · ek, where ek is a unit vector in the direction of motion. That
is, s is just r cos (r, ek), the component of distance in the direction of motion.
Therefore our wave is cos (ωt −kek · r).
Now it turns out to be very convenient to deﬁne a vector k, which is called
the wave vector, which has a magnitude equal to the wave number, 2π/λ, and is
pointed in the direction of propagation of the waves:

k = 2πek/λ = kek.
(34.19)

Using this vector, our wave can be written as cos (ωt −k · r), or as cos (ωt −
kxx −kyy −kzz). What is the signiﬁcance of a component of k, say kx? Clearly,
kx is the rate of change of phase with respect to x. Referring to Fig. 34-11, we
see that the phase changes as we change x, just as if there were a wave along
x, but of a longer wavelength. The “wavelength in the x-direction” is longer
than a natural, true wavelength by the secant of the angle α between the actual

34-17direction of propagation and the x-axis:

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

34-18
