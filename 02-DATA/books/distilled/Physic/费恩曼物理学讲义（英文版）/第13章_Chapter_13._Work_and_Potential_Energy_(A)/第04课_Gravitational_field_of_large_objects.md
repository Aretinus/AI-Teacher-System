# Gravitational field of large objects

the principle of superposition of forces that we can write the potential energy as
a sum over each pair of particles.

13-4 Gravitational ﬁeld of large objects

Now we shall calculate the ﬁelds which are met in a few physical circumstances
involving distributions of mass. We have not so far considered distributions of
mass, only particles, so it is interesting to calculate the forces when they are
produced by more than just one particle. First we shall ﬁnd the gravitational
force on a mass that is produced by a plane sheet of material, inﬁnite in extent.
The force on a unit mass at a given point P, produced by this sheet of material
(Fig. 13-5), will of course be directed toward the sheet. Let the distance of the
point from the sheet be a, and let the amount of mass per unit area of this huge
sheet be µ. We shall suppose µ to be constant; it is a uniform sheet of material.
Now, what small ﬁeld dC is produced by the mass dm lying between ρ and ρ+dρ
from the point O of the sheet nearest point P? Answer: dC = −G(dm r/r3). But
this ﬁeld is directed along r, and we know that only the x-component of it will
remain when we add all the little vector dC’s to produce C. The x-component
of dC is

dCx = −G dm rx

r3
= −G dm a

r3 .

Now all masses dm which are at the same distance r from P will yield the
same dCx, so we may at once write for dm the total mass in the ring between ρ
and ρ + dρ, namely dm = µ2πρ dρ (2πρ dρ is the area of a ring of radius ρ and
width dρ, if dρ ≪ρ). Thus

dCx = −Gµ2πρ dρ a

r3 .

dρ
ρ
O

dm
C

a

r

dCx

dC

P

x

Fig. 13-5. The gravitational ﬁeld C at a mass point produced by an
inﬁnite plane sheet of matter.

13-13Then, since r2 = ρ2 + a2, ρ dρ = r dr. Therefore,

Cx = −2πGµa
Z ∞

a −1

dr
r2 = −2πGµa
1


= −2πGµ.
(13.17)

∞

a

Thus the force is independent of distance a! Why? Have we made a mistake?
One might think that the farther away we go, the weaker the force would be. But
no! If we are close, most of the matter is pulling at an unfavorable angle; if we
are far away, more of the matter is situated more favorably to exert a pull toward
the plane. At any distance, the matter which is most eﬀective lies in a certain
cone. When we are farther away the force is smaller by the inverse square, but
in the same cone, in the same angle, there is much more matter, larger by just
the square of the distance! This analysis can be made rigorous by just noticing
that the diﬀerential contribution in any given cone is in fact independent of the
distance, because of the reciprocal variation of the strength of the force from a
given mass, and the amount of mass included in the cone, with changing distance.
The force is not really constant of course, because when we go on the other side
of the sheet it is reversed in sign.
We have also, in eﬀect, solved an electrical problem: if we have an electrically
charged plate, with an amount σ of charge per unit area, then the electric ﬁeld
at a point outside the sheet is equal to σ/2ϵ0, and is in the outward direction if
the sheet is positively charged, and inward if the sheet is negatively charged. To
prove this, we merely note that −G, for gravity, plays the same role as 1/4πϵ0
for electricity.
Now suppose that we have two plates, with a positive charge +σ on one and
a negative charge −σ on another at a distance D from the ﬁrst. What is the
ﬁeld? Outside the two plates it is zero. Why? Because one attracts and the other
repels, the force being independent of distance, so that the two balance out! Also,
the ﬁeld between the two plates is clearly twice as great as that from one plate,
namely E = σ/ϵ0, and is directed from the positive plate to the negative one.
Now we come to a most interesting and important problem, whose solution
we have been assuming all the time, namely, that the force produced by the earth
at a point on the surface or outside it is the same as if all the mass of the earth
were located at its center. The validity of this assumption is not obvious, because
when we are close, some of the mass is very close to us, and some is farther away,
and so on. When we add the eﬀects all together, it seems a miracle that the net
force is exactly the same as we would get if we put all the mass in the middle!

13-14ds

r

y
a

θ
O
P

R

x

dx

Fig. 13-6. A thin spherical shell of mass or charge.

We now demonstrate the correctness of this miracle.
In order to do so,
however, we shall consider a thin uniform hollow shell instead of the whole earth.
Let the total mass of the shell be m, and let us calculate the potential energy of
a particle of mass m′ a distance R away from the center of the sphere (Fig. 13-6)
and show that the potential energy is the same as it would be if the mass m were
a point at the center. (The potential energy is easier to work with than is the
ﬁeld because we do not have to worry about angles, we merely add the potential
energies of all the pieces of mass.) If we call x the distance of a certain plane
section from the center, then all the mass that is in a slice dx is at the same
distance r from P, and the potential energy due to this ring is −Gm′ dm/r. How
much mass is in the small slice dx? An amount

sin θ
= 2πyµ dx a

dm = 2πyµ ds = 2πyµ dx

y
= 2πaµ dx,

where µ = m/4πa2 is the surface density of mass on the spherical shell. (It is a
general rule that the area of a zone of a sphere is proportional to its axial width.)
Therefore the potential energy due to dm is

dW = −Gm′ dm

r
= −Gm′2πaµ dx

r
.

But we see that
r2 = y2 + (R −x)2 = y2 + x2 + R2 −2Rx

= a2 + R2 −2Rx.

Thus

2r dr = −2R dx

or
dx

r = −dr

R .

13-15Therefore,

dW = Gm′2πaµ dr

R
,

and so

Z R−a

W = Gm′2πaµ

R+a
dr

R

= −Gm′2πaµ

R
2a = −Gm′(4πa2µ)

R

= −Gm′m

R
.
(13.18)

Thus, for a thin spherical shell, the potential energy of a mass m′, external to
the shell, is the same as though the mass of the shell were concentrated at its
center. The earth can be imagined as a series of spherical shells, each one of
which contributes an energy which depends only on its mass and the distance
from its center to the particle; adding them all together we get the total mass,
and therefore the earth acts as though all the material were at the center!
But notice what happens if our point is on the inside of the shell. Making
the same calculation, but with P on the inside, we still get the diﬀerence of the
two r’s, but now in the form a −R −(a + R) = −2R, or minus twice the distance
from the center. In other words, W comes out to be W = −Gm′m/a, which is
independent of R and independent of position, i.e., the same energy no matter
where we are inside. Therefore no force; no work is done when we move about
inside. If the potential energy is the same no matter where an object is placed
inside the sphere, there can be no force on it. So there is no force inside, there is
only a force outside, and the force outside is the same as though the mass were
all at the center.

13-1614

Work and Potential Energy (conclusion)

14-1 Work

In the preceding chapter we have presented a great many new ideas and
results that play a central role in physics. These ideas are so important that it
seems worth while to devote a whole chapter to a closer examination of them.
In the present chapter we shall not repeat the “proofs” or the speciﬁc tricks by
which the results were obtained, but shall concentrate instead upon a discussion
of the ideas themselves.
In learning any subject of a technical nature where mathematics plays a role,
one is confronted with the task of understanding and storing away in the memory
a huge body of facts and ideas, held together by certain relationships which can
be “proved” or “shown” to exist between them. It is easy to confuse the proof
itself with the relationship which it establishes. Clearly, the important thing
to learn and to remember is the relationship, not the proof. In any particular
circumstance we can either say “it can be shown that” such and such is true, or
we can show it. In almost all cases, the particular proof that is used is concocted,
ﬁrst of all, in such form that it can be written quickly and easily on the chalkboard
or on paper, and so that it will be as smooth-looking as possible. Consequently,
the proof may look deceptively simple, when in fact, the author might have
worked for hours trying diﬀerent ways of calculating the same thing until he has
found the neatest way, so as to be able to show that it can be shown in the
shortest amount of time! The thing to be remembered, when seeing a proof, is
not the proof itself, but rather that it can be shown that such and such is true.
Of course, if the proof involves some mathematical procedures or “tricks” that
one has not seen before, attention should be given not to the trick exactly, but
to the mathematical idea involved.
It is certain that in all the demonstrations that are made in a course such
as this, not one has been remembered from the time when the author studied

14-1
