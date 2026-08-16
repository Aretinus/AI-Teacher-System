# The field of a plane of oscillating charges

On the other hand, if we are at Q, on the other side of P, then we are using
only one end of the spiral curve, and not the other end. In other words, we do not
even start at D, but at BQ, so on this side we get an intensity which continuously
falls oﬀas Q goes farther into the shadow.
One point that we can immediately calculate with ease, to show that we really
understand it, is the intensity exactly opposite the edge. The intensity here is
1/4 that of the incident light. Reason: Exactly at the edge (so the endpoint B of
the arrow is at D in Fig. 30-8) we have half the curve that we would have had if
we were far into the bright region. If our point R is far into the light we go from
one end of the curve to the other, that is, one full unit vector; but if we are at
the edge of the shadow, we have only half the amplitude—1/4 the intensity.
In this chapter we have been ﬁnding the intensity produced in various direc-
tions from various distributions of sources. As a ﬁnal example we shall derive
a formula which we shall need for the next chapter on the theory of the index
of refraction. Up to this point relative intensities have been suﬃcient for our
purpose, but this time we shall ﬁnd the complete formula for the ﬁeld in the
following situation.
30-7 The ﬁeld of a plane of oscillating charges
Suppose that we have a plane full of sources, all oscillating together, with
their motion in the plane and all having the same amplitude and phase. What is
the ﬁeld at a ﬁnite, but very large, distance away from the plane? (We cannot
get very close, of course, because we do not have the right formulas for the ﬁeld
close to the sources.) If we let the plane of the charges be the xy-plane, then
we want to ﬁnd the ﬁeld at the point P far out on the z-axis (Fig. 30-10). We
Oscillating charge
Q
ρ
r
P
z
dρ
Sheet of oscillating charges
Fig. 30-10. Radiation ﬁeld of a sheet of oscillating charges.
30-18suppose that there are η charges per unit area of the plane, and that each one of
them has a charge q. All of the charges move with simple harmonic motion, with
the same direction, amplitude, and phase. We let the motion of each charge, with
respect to its own average position, be x0 cos ωt. Or, using the complex notation
and remembering that the real part represents the actual motion, the motion
can be described by x0eiωt.
Now we ﬁnd the ﬁeld at the point P from all of the charges by ﬁnding the
ﬁeld there from each charge q, and then adding the contributions from all the
charges. We know that the radiation ﬁeld is proportional to the acceleration of
the charge, which is −ω2x0eiωt (and is the same for every charge). The electric
ﬁeld that we want at the point P due to a charge at the point Q is proportional
to the acceleration of the charge q, but we have to remember that the ﬁeld at the
point P at the instant t is given by the acceleration of the charge at the earlier
time t′ = t −r/c, where r/c is the time it takes the waves to travel the distance r
from Q to P. Therefore the ﬁeld at P is proportional to
−ω2x0eiω(t−r/c).
(30.10)
Using this value for the acceleration as seen from P in our formula for the electric
ﬁeld at large distances from a radiating charge, we get
Electric ﬁeld at P
from charge at Q

=
q
4πϵ0c2
ω2x0eiω(t−r/c)
r
(approx.).
(30.11)
Now this formula is not quite right, because we should have used not the
acceleration of the charge but its component perpendicular to the line QP. We
shall suppose, however, that the point P is so far away, compared with the
distance of the point Q from the axis (the distance ρ in Fig. 30-10), for those
changes that we need to take into account, that we can leave out the cosine factor
(which would be nearly equal to 1 anyway).
To get the total ﬁeld at P, we now add the eﬀects of all the charges in the
plane. We should, of course, make a vector sum. But since the direction of the
electric ﬁeld is nearly the same for all the charges, we may, in keeping with the
approximation we have already made, just add the magnitudes of the ﬁelds. To
our approximation the ﬁeld at P depends only on the distance r, so all charges
at the same r produce equal ﬁelds. So we add, ﬁrst, the ﬁelds of those charges in
a ring of width dρ and radius ρ. Then, by taking the integral over all ρ, we will
obtain the total ﬁeld.
30-19The number of charges in the ring is the product of the surface area of the
ring, 2πρ dρ, and η, the number of charges per unit area. We have, then,
Total ﬁeld at P =
Z
q
4πϵ0c2
ω2x0eiω(t−r/c)
r
· η · 2πρ dρ.
(30.12)
We wish to evaluate this integral from ρ = 0 to ρ = ∞. The variable t, of
course, is to be held ﬁxed while we do the integral, so the only varying quantities
are ρ and r. Leaving out all the constant factors, including the factor eiωt, for
the moment, the integral we wish is
Z ρ=∞
e−iωr/c
r
ρ dρ.
(30.13)
ρ=0
To do this integral we need to use the relation between r and ρ:
r2 = ρ2 + z2.
(30.14)
Since z is independent of ρ, when we take the diﬀerential of this equation, we get
2r dr = 2ρ dρ,
which is lucky, since in our integral we can replace ρ dρ by r dr and the r will
cancel the one in the denominator. The integral we want is then the simpler one
Z r=∞
r=z
e−iωr/c dr.
(30.15)
To integrate an exponential is very easy. We divide by the coeﬃcient of r in the
exponent and evaluate the exponential at the limits. But the limits of r are not
the same as the limits of ρ. When ρ = 0, we have r = z, so the limits of r are z
to inﬁnity. We get for the integral
−c
iω [e−i∞−e−(iω/c)z],
(30.16)
where we have written ∞for (ω/c)∞, since they both just mean a very large
number!
Now e−i∞is a mysterious quantity. Its real part, for example, is cos (−∞),
which, mathematically speaking, is completely indeﬁnite (although we would
30-20expect it to be somewhere—or everywhere (?)—between +1 and −1!). But in a
physical situation, it can mean something quite reasonable, and usually can just
be taken to be zero. To see that this is so in our case, we go back to consider
again the original integral (30.15).
We can understand (30.15) as a sum of many small complex numbers, each
of magnitude ∆r, and with the angle θ = −ωr/c in the complex plane. We can
try to evaluate the sum by a graphical method. In Fig. 30-11 we have drawn the
ﬁrst ﬁve pieces of the sum. Each segment of the curve has the length ∆r and is
placed at the angle ∆θ = −ω ∆r/c with respect to the preceding piece. The sum
for these ﬁrst ﬁve pieces is represented by the arrow from the starting point to
the end of the ﬁfth segment. As we continue to add pieces we shall trace out a
polygon until we get back to the starting point (approximately) and then start
around once more. Adding more pieces, we just go round and round, staying
close to a circle whose radius is easily shown to be c/ω. We can see now why the
integral does not give a deﬁnite answer!
Imaginary Axis
θ = −ωz
c
∆θ = −ω ∆r
c
Real Axis
θ
∆r
∆r
∆θ
∆r
∆θ
Sum
C
Fig. 30-11. Graphical solution of
R ∞
z
e−iωr/c dr.
But now we have to go back to the physics of the situation. In any real
situation the plane of charges cannot be inﬁnite in extent, but must sometime
stop. If it stopped suddenly, and was exactly circular in shape, our integral would
have some value on the circle in Fig. 30-11. If, however, we let the number of
charges in the plane gradually taper oﬀat some large distance from the center
(or else stop suddenly but in an irregular shape so for larger ρ the entire ring
30-21Imaginary Axis
Real Axis
Start; r = z
A
r →∞
Fig. 30-12. Graphical solution of
R ∞
z
ηe−iωr/c dr.
of width dρ no longer contributes), then the coeﬃcient η in the exact integral
would decrease toward zero. Since we are adding smaller pieces but still turning
through the same angle, the graph of our integral would then become a curve
which is a spiral. The spiral would eventually end up at the center of our original
circle, as drawn in Fig. 30-12. The physically correct integral is the complex
number A in the ﬁgure represented by the interval from the starting point to the
center of the circle, which is just equal to
c
iω e−iωz/c,
(30.17)
as you can work out for yourself. This is the same result we would get from
Eq. (30.16) if we set e−i∞= 0.
(There is also another reason why the contribution to the integral tapers oﬀ
for large values of r, and that is the factor we have omitted for the projection of
the acceleration on the plane perpendicular to the line PQ.)
We are, of course, interested only in physical situations, so we will take e−i∞
equal to zero. Returning to our original formula (30.12) for the ﬁeld and putting
back all of the factors that go with the integral, we have the result
Total ﬁeld at P = −ηq
2ϵ0c iωx0eiω(t−z/c)
(30.18)
(remembering that 1/i = −i).
It is interesting to note that (iωx0eiωt) is just equal to the velocity of the
charges, so that we can also write the equation for the ﬁeld as
Total ﬁeld at P = −ηq
2ϵ0c [velocity of charges]at t −z/c,
(30.19)
30-22which is a little strange, because the retardation is just by the distance z, which
is the shortest distance from P to the plane of charges. But that is the way
it comes out—fortunately a rather simple formula. (We may add, by the way,
that although our derivation is valid only for distances far from the plane of
oscillatory charges, it turns out that the formula (30.18) or (30.19) is correct at
any distance z, even for z < λ.)
30-2331
The Origin of the Refractive Index
31-1 The index of refraction
We have said before that light goes slower in water than in air, and slower,
slightly, in air than in vacuum. This eﬀect is described by the index of refraction n.
Now we would like to understand how such a slower velocity could come about. In
particular, we should try to see what the relation is to some physical assumptions,
or statements, we made earlier, which were the following:
(a) That the total electric ﬁeld in any physical circumstance can always be
represented by the sum of the ﬁelds from all the charges in the universe.
(b) That the ﬁeld from a single charge is given by its acceleration evaluated
with a retardation at the speed c, always (for the radiation ﬁeld).
But, for a piece of glass, you might think: “Oh, no, you should modify all
this. You should say it is retarded at the speed c/n.” That, however, is not right,
and we have to understand why it is not.
It is approximately true that light or any electrical wave does appear to travel
at the speed c/n through a material whose index of refraction is n, but the
ﬁelds are still produced by the motions of all the charges—including the charges
moving in the material—and with these basic contributions of the ﬁeld travelling
at the ultimate velocity c. Our problem is to understand how the apparently
slower velocity comes about.
We shall try to understand the eﬀect in a very simple case. A source which we
shall call “the external source” is placed a large distance away from a thin plate
of transparent material, say glass. We inquire about the ﬁeld at a large distance
on the opposite side of the plate. The situation is illustrated by the diagram
of Fig. 31-1, where S and P are imagined to be very far away from the plate.
According to the principles we have stated earlier, an electric ﬁeld anywhere
31-1
