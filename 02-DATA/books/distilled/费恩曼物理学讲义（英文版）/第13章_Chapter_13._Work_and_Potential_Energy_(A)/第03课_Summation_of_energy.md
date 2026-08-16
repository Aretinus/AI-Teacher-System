# Summation of energy

proportional to the displacement. In those circumstances, can we work out a law
for conservation of energy? Yes, because the work done by such a force is

W =
Z x

F dx =
Z x

2kx2.
(13.13)

−kx dx = −1

Therefore, for a mass on a spring we have that the kinetic energy of the oscillating
mass plus 1

2kx2 is a constant. Let us see how this works. We pull the mass down;
it is standing still and so its speed is zero. But x is not zero, x is at its maximum,
so there is some energy, the potential energy, of course. Now we release the mass
and things begin to happen (the details not to be discussed), but at any instant
the kinetic plus potential energy must be a constant. For example, after the mass
is on its way past the original equilibrium point, the position x equals zero, but
that is when it has its biggest v2, and as it gets more x2 it gets less v2, and so
on. So the balance of x2 and v2 is maintained as the mass goes up and down.
Thus we have another rule now, that the potential energy for a spring is 1

2kx2, if
the force is −kx.

13-3 Summation of energy

Now we go on to the more general consideration of what happens when there
are large numbers of objects. Suppose we have the complicated problem of many
objects, which we label i = 1, 2, 3, . . . , all exerting gravitational pulls on each
other. What happens then? We shall prove that if we add the kinetic energies
of all the particles, and add to this the sum, over all pairs of particles, of their
mutual gravitational potential energy, −GMm/rij, the total is a constant:

(pairs ij)
−Gmimj

X

2miv2
i +
X

rij
= const.
(13.14)

i

How do we prove it? We diﬀerentiate each side with respect to time and get
zero. When we diﬀerentiate 1

2miv2
i , we ﬁnd derivatives of the velocity that are
the forces, just as in Eq. (13.5). We replace these forces by the law of force that
we know from Newton’s law of gravity and then we notice that what is left is
minus the time derivative of
X

pairs
−Gmimj

rij
.

13-10The time derivative of the kinetic energy is

i
mi
dvi

d
dt

2miv2
i =
X

X

dt · vi

i

=
X

i
F i · vi

(13.15)

X

!

j
−Gmimjrij

=
X

· vi.

r3
ij

i

The time derivative of the potential energy is

!drij


.

pairs
−Gmimj

+Gmimj

d
dt

X

rij
=
X

r2
ij

dt

pairs

But
rij =
q

(xi −xj)2 + (yi −yj)2 + (zi −zj)2,

so that

dt =
2rij


2(xi −xj)
dxi



drij

dt −dxj

dt

+ 2(yi −yj )
dyi



dt −dyj

dt

+ 2(zi −zj )
dzi



dt −dzj

dt

= rij · vi −vj

rij

= rij · vi

rij
+ rji · vj

rji
,

since rij = −rji, while rij = rji. Thus


.
(13.16)

Gmimjrij

d
dt

pairs
−Gmimj

r3
ij
· vi + Gmjmirji

X

rij
=
X

r3
ji
· vj

pairs

Now we must note carefully what P

i
{P

j
} and P

pairs
mean. In Eq. (13.15), P

i
{P

j
}

means that i takes on all values i = 1, 2, 3, . . . in turn, and for each value of i,

13-11the index j takes on all values except i. Thus if i = 3, j takes on the values 1, 2,
4, . . .
In Eq. (13.16), on the other hand, P

pairs
means that given values of i and j

occur only once. Thus the particle pair 1 and 3 contributes only one term to the
sum. To keep track of this, we might agree to let i range over all values 1, 2,
3, . . . , and for each i let j range only over values greater than i. Thus if i = 3, j
could only have values 4, 5, 6, . . . But we notice that for each i, j value there are
two contributions to the sum, one involving vi, and the other vj, and that these
terms have the same appearance as those of Eq. (13.15), where all values of i
and j (except i = j) are included in the sum. Therefore, by matching the terms
one by one, we see that Eqs. (13.16) and (13.15) are precisely the same, but of
opposite sign, so that the time derivative of the kinetic plus potential energy is
indeed zero. Thus we see that, for many objects, the kinetic energy is the sum
of the contributions from each individual object, and that the potential energy
is also simple, it being also just a sum of contributions, the energies between
all the pairs. We can understand why it should be the energy of every pair this
way: Suppose that we want to ﬁnd the total amount of work that must be done
to bring the objects to certain distances from each other. We may do this in
several steps, bringing them in from inﬁnity where there is no force, one by one.
First we bring in number one, which requires no work, since no other objects
are yet present to exert force on it. Next we bring in number two, which does
take some work, namely W12 = −Gm1m2/r12. Now, and this is an important
point, suppose we bring in the next object to position three. At any moment the
force on number 3 can be written as the sum of two forces—the force exerted by
number 1 and that exerted by number 2. Therefore the work done is the sum of
the works done by each, because if F 3 can be resolved into the sum of two forces,

F 3 = F 13 + F 23,

then the work is
Z
F 3 · ds =
Z
F 13 · ds +
Z
F 23 · ds = W13 + W23.

That is, the work done is the sum of the work done against the ﬁrst force and the
second force, as if each acted independently. Proceeding in this way, we see that
the total work required to assemble the given conﬁguration of objects is precisely
the value given in Eq. (13.14) as the potential energy. It is because gravity obeys

13-12the principle of superposition of forces that we can write the potential energy as
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

13-13
