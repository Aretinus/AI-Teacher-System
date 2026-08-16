# Molecular diffusion

then those which are within a distance (vdrift · T) will arrive at the plate in the
time T. If there are ni ions per unit volume, the number which reach the plate
in the time T is (ni · A · vdrift · T). Each ion carries the charge q, so we have that

Charge collected in T = qniAvdriftT.
(43.17)

The current I is the charge collected in T divided by T, so

I = qniAvdrift.
(43.18)

Substituting vdrift from (43.16), we have

I = µq2ni
A

b V.
(43.19)

We ﬁnd that the current is proportional to the voltage, which is just the form of
Ohm’s law, and the resistance R is the inverse of the proportionality constant:

R = µq2ni
A

b .
(43.20)

We have a relation between the resistance and the molecular properties ni, q,
and µ, which depends in turn on m and τ. If we know ni and q from atomic
measurements, a measurement of R could be used to determine µ, and from µ
also τ.

43-5 Molecular diﬀusion

We turn now to a diﬀerent kind of problem, and a diﬀerent kind of analysis:
the theory of diﬀusion. Suppose that we have a container of gas in thermal
equilibrium, and that we introduce a small amount of a diﬀerent kind of gas
at some place in the container. We shall call the original gas the “background”
gas and the new one the “special” gas. The special gas will start to spread out
through the whole container, but it will spread slowly because of the presence
of the background gas. This slow spreading-out process is called diﬀusion. The
diﬀusion is controlled mainly by the molecules of the special gas getting knocked
about by the molecules of the background gas. After a large number of collisions,
the special molecules end up spread out more or less evenly throughout the
whole volume. We must be careful not to confuse diﬀusion of a gas with the

43-11gross transport that may occur due to convection currents. Most commonly, the
mixing of two gases occurs by a combination of convection and diﬀusion. We are
interested now only in the case that there are no “wind” currents. The gas is
spreading only by molecular motions, by diﬀusion. We wish to compute how fast
diﬀusion takes place.
We now compute the net ﬂow of molecules of the “special” gas due to the
molecular motions. There will be a net ﬂow only when there is some nonuniform
distribution of the molecules, otherwise all of the molecular motions would average
to give no net ﬂow. Let us consider ﬁrst the ﬂow in the x-direction. To ﬁnd the
ﬂow, we consider an imaginary plane surface perpendicular to the x-axis and
count the number of special molecules that cross this plane. To obtain the net
ﬂow, we must count as positive those molecules which cross in the direction of
positive x and subtract from this number the number which cross in the negative
x-direction. As we have seen many times, the number which cross a surface area
in a time ∆T is given by the number which start the interval ∆T in a volume
which extends the distance v ∆T from the plane. (Note that v, here, is the actual
molecular velocity, not the drift velocity.)
We shall simplify our algebra by giving our surface one unit of area. Then the
number of special molecules which pass from left to right (taking the +x-direction
to the right) is n−v ∆T, where n−is the number of special molecules per unit
volume to the left (within a factor of 2 or so, but we are ignoring such factors!).
The number which cross from right to left is, similarly, n+v ∆T, where n+ is the
number density of special molecules on the right-hand side of the plane. If we
call the molecular current J, by which we mean the net ﬂow of molecules per
unit area per unit time, we have

J = n−v ∆T −n+v ∆T

∆T
,
(43.21)

or

J = (n−−n+)v.
(43.22)

What shall we use for n−and n+? When we say “the density on the left,”
how far to the left do we mean? We should choose the density at the place from
which the molecules started their “ﬂight,” because the number which start such
trips is determined by the number present at that place. So by n−we should
mean the density a distance to the left equal to the mean free path l, and by n+,
the density at the distance l to the right of our imaginary surface.

43-12It is convenient to consider that the distribution of our special molecules
in space is described by a continuous function of x, y, and z which we shall
call na. By na(x, y, z) we mean the number density of special molecules in a
small volume element centered on (x, y, z). In terms of na we can express the
diﬀerence (n+ −n−) as

dx ∆x = dna

(n+ −n−) = dna

dx · 2l.
(43.23)

Substituting this result in Eq. (43.22) and neglecting the factor of 2, we get

Jx = −lv dna

dx .
(43.24)

We have found that the ﬂow of special molecules is proportional to the derivative
of the density, or to what is sometimes called the “gradient” of the density.
It is clear that we have made several rough approximations. Besides various
factors of two we have left out, we have used v where we should have used vx, and
we have assumed that n+ and n−refer to places at the perpendicular distance l
from our surface, whereas for those molecules which do not travel perpendicular
to the surface element, l should correspond to the slant distance from the surface.
All of these reﬁnements can be made; the result of a more careful analysis shows
that the right-hand side of Eq. (43.24) should be multiplied by 1/3. So a better
answer is
Jx = −lv

dna

dx .
(43.25)

Similar equations can be written for the currents in the y- and z-directions.
The current Jx and the density gradient dna/dx can be measured by macro-
scopic observations. Their experimentally determined ratio is called the “diﬀusion
coeﬃcient,” D. That is,

Jx = −D dna

dx .
(43.26)

We have been able to show that for a gas we expect

D = 1

3lv.
(43.27)

So far in this chapter we have considered two distinct processes: mobility, the
drift of molecules due to “outside” forces; and diﬀusion, the spreading determined
only by the internal forces, the random collisions. There is, however, a relation

43-13between them, since they both depend basically on the thermal motions, and the
mean free path l appears in both calculations.
If, in Eq. (43.25), we substitute l = vτ and τ = µm, we have

3mv2µ dna

Jx = −1

dx .
(43.28)

But mv2 depends only on the temperature. We recall that

2mv2 = 3

2kT,
(43.29)

so

Jx = −µkT dna

dx .
(43.30)

We ﬁnd that D, the diﬀusion coeﬃcient, is just kT times µ, the mobility coeﬃcient:

D = µkT.
(43.31)

And it turns out that the numerical coeﬃcient in (43.31) is exactly right—no
extra factors have to be thrown in to adjust for our rough assumptions. We
can show, in fact, that (43.31) must always be correct—even in complicated
situations (for example, the case of a suspension in a liquid) where the details of
our simple calculations would not apply at all.
To show that (43.31) must be correct in general, we shall derive it in a diﬀerent
way, using only our basic principles of statistical mechanics. Imagine a situation
in which there is a gradient of “special” molecules, and we have a diﬀusion current
proportional to the density gradient, according to Eq. (43.26). We now apply
a force ﬁeld in the x-direction, so that each special molecule feels the force F.
According to the deﬁnition of the mobility µ there will be a drift velocity given
by

vdrift = µF.
(43.32)

By our usual arguments, the drift current (the net number of molecules which
pass a unit of area in a unit of time) will be

Jdrift = navdrift,
(43.33)

43-14or

Jdrift = naµF.
(43.34)

We now adjust the force F so that the drift current due to F just balances
the diﬀusion, so that there is no net ﬂow of our special molecules. We have
Jx + Jdrift = 0, or

D dna

dx = naµF.
(43.35)

Under the “balance” conditions we ﬁnd a steady (with time) gradient of
density given by
dna

dx = naµF

D
.
(43.36)

But notice! We are describing an equilibrium condition, so our equilibrium
laws of statistical mechanics apply. According to these laws the probability of
ﬁnding a molecule at the coordinate x is proportional to e−U/kT , where U is the
potential energy. In terms of the number density na, this means that

na = n0e−U/kT .
(43.37)

If we diﬀerentiate (43.37) with respect to x, we ﬁnd

dx = −n0e−U/kT · 1

dna

kT
dU

dx ,
(43.38)

or
dna

dx = −na

kT
dU

dx .
(43.39)

In our situation, since the force F is in the x-direction, the potential energy U is
just −Fx, and −dU/dx = F. Equation (43.39) then gives

dx = naF

dna

kT .
(43.40)

[This is just exactly Eq. (40.2), from which we deduced e−U/kT in the ﬁrst place,
so we have come in a circle]. Comparing (43.40) with (43.36), we get exactly
Eq. (43.31). We have shown that Eq. (43.31), which gives the diﬀusion current
in terms of the mobility, has the correct coeﬃcient and is very generally true.
Mobility and diﬀusion are intimately connected. This relation was ﬁrst deduced
by Einstein.

43-1543-6 Thermal conductivity

The methods of the kinetic theory that we have been using above can be
used also to compute the thermal conductivity of a gas. If the gas at the top of a
container is hotter than the gas at the bottom, heat will ﬂow from the top to the
bottom. (We think of the top being hotter because otherwise convection currents
would be set up and the problem would no longer be one of heat conduction.)
The transfer of heat from the hotter gas to the colder gas is by the diﬀusion
of the “hot” molecules—those with more energy—downward and the diﬀusion
of the “cold” molecules upward. To compute the ﬂow of thermal energy we
can ask about the energy carried downward across an element of area by the
downward-moving molecules, and about the energy carried upward across the
surface by the upward-moving molecules. The diﬀerence will give us the net
downward ﬂow of energy.
The thermal conductivity κ is deﬁned as the ratio of the rate at which thermal
energy is carried across a unit surface area, to the temperature gradient:

A
dQ

dt = −κ dT

dz .
(43.41)

Since the details of the calculations are quite similar to those we have done above
in considering molecular diﬀusion, we shall leave it as an exercise for the reader
to show that

κ = knlv

γ −1,
(43.42)

where kT/(γ −1) is the average energy of a molecule at the temperature T.
If we use our relation nlσc = 1, the heat conductivity can be written as

κ =
γ −1
kv
σc
.
(43.43)

We have a rather surprising result. We know that the average velocity of gas
molecules depends on the temperature but not on the density. We expect σc
to depend only on the size of the molecules. So our simple result says that the
thermal conductivity κ (and therefore the rate of ﬂow of heat in any particular
circumstance) is independent of the density of the gas! The change in the number
of “carriers” of energy with a change in density is just compensated by the larger
distance the “carriers” can go between collisions.

43-16
