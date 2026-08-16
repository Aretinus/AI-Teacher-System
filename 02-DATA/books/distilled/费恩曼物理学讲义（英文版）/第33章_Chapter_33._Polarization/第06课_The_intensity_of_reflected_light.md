# The intensity of reflected light

sheet to detect the rotation of the direction of polarization as the light passes
through the corn syrup.

33-6 The intensity of reﬂected light

Let us now consider quantitatively the reﬂection coeﬃcient as a function of
angle. Figure 33-6(a) shows a beam of light striking a glass surface, where it
is partly reﬂected and partly refracted into the glass. Let us suppose that the
incident beam, of unit amplitude, is linearly polarized normal to the plane of the
paper. We will call the amplitude of the reﬂected wave b, and the amplitude of
the refracted wave a. The refracted and reﬂected waves will, of course, be linearly
polarized, and the electric ﬁeld vectors of the incident, reﬂected, and refracted
waves are all parallel to each other. Figure 33-6(b) shows the same situation, but
now we suppose that the incident wave, of unit amplitude, is polarized in the
plane of the paper. Now let us call the amplitude of the reﬂected and refracted
wave B and A, respectively.
We wish to calculate how strong the reﬂection is in the two situations illus-
trated in Fig. 33-6(a) and 33-6(b). We already know that when the angle between
the reﬂected beam and refracted beam is a right angle, there will be no reﬂected
wave in Fig. 33-6(b), but let us see if we cannot get a quantitative answer—an
exact formula for B and b as a function of the angle of incidence, i.
The principle that we must understand is as follows. The currents that are
generated in the glass produce two waves. First, they produce the reﬂected wave.

b

B

−1

−1

a

A

r

r

i
i

i
i

Glass

Glass

(a)

(b)

Fig. 33-6. An incident wave of unit amplitude is reﬂected and refracted
at a glass surface. In (a) the incident wave is linearly polarized normal
to the plane of the paper. In (b) the incident wave is linearly polarized
in the direction shown by the dashed arrows.

33-12Moreover, we know that if there were no currents generated in the glass, the
incident wave would continue straight into the glass. Remember that all the
sources in the world make the net ﬁeld. The source of the incident light beam
produces a ﬁeld of unit amplitude, which would move into the glass along the
dotted line in the ﬁgure. This ﬁeld is not observed, and therefore the currents
generated in the glass must produce a ﬁeld of amplitude −1, which moves along
the dotted line. Using this fact, we will calculate the amplitude of the refracted
waves, a and A.
In Fig. 33-6(a) we see that the ﬁeld of amplitude b is radiated by the motion
of charges inside the glass which are responding to a ﬁeld a inside the glass, and
that therefore b is proportional to a. We might suppose that since our two ﬁgures
are exactly the same, except for the direction of polarization, the ratio B/A
would be the same as the ratio b/a. This is not quite true, however, because in
Fig. 33-6(b) the polarization directions are not all parallel to each other, as they
are in Fig. 33-6(a). It is only the component of A which is perpendicular to B,
A cos (i + r), which is eﬀective in producing B. The correct expression for the
proportionality is then
b
a =
B
A cos (i + r).
(33.1)

Now we use a trick. We know that in both (a) and (b) of Fig. 33-6 the electric
ﬁeld in the glass must produce oscillations of the charges, which generate a ﬁeld
of amplitude −1, polarized parallel to the incident beam, and moving in the
direction of the dotted line. But we see from part (b) of the ﬁgure that only
the component of A that is normal to the dashed line has the right polarization
to produce this ﬁeld, whereas in Fig. 33-6(a) the full amplitude a is eﬀective,
since the polarization of wave a is parallel to the polarization of the wave of
amplitude −1. Therefore we can write

a
= −1

A cos (i −r)

−1,
(33.2)

since the two amplitudes on the left side of Eq. (33.2) each produce the wave of
amplitude −1.
Dividing Eq. (33.1) by Eq. (33.2), we obtain

b = cos (i + r)

B

cos (i −r),
(33.3)

33-13a result which we can check against what we already know. If we set (i+r) = 90◦,
Eq. (33.3) gives B = 0, as Brewster says it should be, so our results so far are at
least not obviously wrong.
We have assumed unit amplitudes for the incident waves, so that |B|2/12 is
the reﬂection coeﬃcient for waves polarized in the plane of incidence, and |b|2/12

is the reﬂection coeﬃcient for waves polarized normal to the plane of incidence.
The ratio of these two reﬂection coeﬃcients is determined by Eq. (33.3).
Now we perform a miracle, and compute not just the ratio, but each coeﬃcient
|B|2 and |b|2 individually! We know from the conservation of energy that the
energy in the refracted wave must be equal to the incident energy minus the energy
in the reﬂected wave, 1 −|B|2 in one case, 1 −|b|2 in the other. Furthermore,
the energy which passes into the glass in Fig. 33-6(b) is to the energy which
passes into the glass in Fig. 33-6(a) as the ratio of the squares of the refracted
amplitudes, |A|2/|a|2. One might ask whether we really know how to compute
the energy inside the glass, because, after all, there are energies of motion of the
atoms in addition to the energy in the electric ﬁeld. But it is obvious that all of
the various contributions to the total energy will be proportional to the square
of the amplitude of the electric ﬁeld. Therefore we can write

1 −|B|2

1 −|b|2 = |A|2

|a|2 .
(33.4)

We now substitute Eq. (33.2) to eliminate A/a from the expression above,
and express B in terms of b by means of Eq. (33.3):

1 −|b|2 cos2 (i + r)

cos2 (i −r)
1 −|b|2
=
cos2 (i −r).
(33.5)

This equation contains only one unknown amplitude, b. Solving for |b|2, we
obtain

|b|2 = sin2 (i −r)

sin2 (i + r)
(33.6)

and, with the aid of (33.3),

|B|2 = tan2 (i −r)

tan2 (i + r).
(33.7)

33-14So we have found the reﬂection coeﬃcient |b|2 for an incident wave polarized
perpendicular to the plane of incidence, and also the reﬂection coeﬃcient |B|2

for an incident wave polarized in the plane of incidence!
It is possible to go on with arguments of this nature and deduce that b is real.
To prove this, one must consider a case where light is coming from both sides of
the glass surface at the same time, a situation not easy to arrange experimentally,
but fun to analyze theoretically. If we analyze this general case, we can prove
that b must be real, and therefore, in fact, that b = ± sin (i −r)/ sin (i + r). It
is even possible to determine the sign by considering the case of a very, very
thin layer in which there is reﬂection from the front and from the back surfaces,
and calculating how much light is reﬂected. We know how much light should be
reﬂected by a thin layer, because we know how much current is generated, and
we have even worked out the ﬁelds produced by such currents.
One can show by these arguments that

sin (i + r),
B = −tan (i −r)

b = −sin (i −r)

tan (i + r).
(33.8)

These expressions for the reﬂection coeﬃcients as a function of the angles of
incidence and refraction are called Fresnel’s reﬂection formulas.
If we consider the limit as the angles i and r go to zero, we ﬁnd, for the case
of normal incidence, that B2 ≈b2 ≈(i −r)2/(i + r)2 for both polarizations, since
the sines are practically equal to the angles, as are also the tangents. But we
know that sin i/ sin r = n, and when the angles are small, i/r ≈n. It is thus easy
to show that the coeﬃcient of reﬂection for normal incidence is

B2 = b2 = (n −1)2

(n + 1)2 .

It is interesting to ﬁnd out how much light is reﬂected at normal incidence
from the surface of water, for example. For water, n is 4/3, so that the reﬂection
coeﬃcient is (1/7)2 ≈2%. At normal incidence, only two percent of the light is
reﬂected from the surface of water.

33-7 Anomalous refraction

The last polarization eﬀect we shall consider was actually one of the ﬁrst to be
discovered: anomalous refraction. Sailors visiting Iceland brought back to Europe

33-15
