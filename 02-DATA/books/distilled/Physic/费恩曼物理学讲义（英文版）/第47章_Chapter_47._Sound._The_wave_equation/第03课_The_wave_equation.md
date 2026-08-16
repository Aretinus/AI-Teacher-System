# The wave equation

As we said, we shall consider the wave in one dimension. We can do this
if we are suﬃciently far from the source that what we call the wavefronts are
very nearly planes. We thus make our argument simpler by taking the least
complicated example. We shall then be able to say that the displacement, χ,
depends only on x and t, and not on y and z. Therefore the description of the
air is given by χ(x, t).
Is this description complete? It would appear to be far from complete, for we
know none of the details of how the air molecules are moving. They are moving
in all directions, and this state of aﬀairs is certainly not described by means of
this function χ(x, t). From the point of view of kinetic theory, if we have a higher
density of molecules at one place and a lower density adjacent to that place,
the molecules would move away from the region of higher density to the one of
lower density, so as to equalize this diﬀerence. Apparently we would not get an
oscillation and there would be no sound. What is necessary to get the sound
wave is this situation: as the molecules rush out of the region of higher density
and higher pressure, they give momentum to the molecules in the adjacent region
of lower density. For sound to be generated, the regions over which the density
and pressure change must be much larger than the distance the molecules travel
before colliding with other molecules. This distance is the mean free path and
the distance between pressure crests and troughs must be much larger than this.
Otherwise the molecules would move freely from the crest to the trough and
immediately smear out the wave.
It is clear that we are going to describe the gas behavior on a scale large
compared with the mean free path, and so the properties of the gas will not be
described in terms of the individual molecules. The displacement, for example,
will be the displacement of the center of mass of a small element of the gas, and
the pressure or density will be the pressure or density in this region. We shall
call the pressure P and the density ρ, and they will be functions of x and t. We
must keep in mind that this description is an approximation which is valid only
when these gas properties do not vary too rapidly with distance.

47-3 The wave equation

The physics of the phenomenon of sound waves thus involves three features:

I. The gas moves and changes the density.

II. The change in density corresponds to a change in pressure.

47-6III. Pressure inequalities generate gas motion.

Let us consider II ﬁrst. For a gas, a liquid, or a solid, the pressure is some
function of the density. Before the sound wave arrives, we have equilibrium,
with a pressure P0 and a corresponding density ρ0. A pressure P in the medium
is connected to the density by some characteristic relation P = f(ρ) and, in
particular, the equilibrium pressure P0 is given by P0 = f(ρ0). The changes of
pressure in sound from the equilibrium value are extremely small. A convenient
unit for measuring pressure is the bar, where 1 bar = 105 N/m2. The pressure of
1 standard atmosphere is very nearly 1 bar: 1 atm = 1.0133 bars. In sound we
use a logarithmic scale of intensities since the sensitivity of the ear is roughly
logarithmic. This scale is the decibel scale, in which the acoustic pressure level
for the pressure amplitude P is deﬁned as

I (acoustic pressure level) = 20 log10(P/Pref) in dB,
(47.1)

where the reference pressure Pref = 2 × 10−10 bar. A pressure amplitude of
P = 103Pref = 2 × 10−7 bar* corresponds to a moderately intense sound of
60 decibels. We see that the pressure changes in sound are extremely small
compared with the equilibrium, or mean, pressure of 1 atm. The displacements
and the density changes are correspondingly extremely small. In explosions we
do not have such small changes; the excess pressures produced can be greater
than 1 atm. These large pressure changes lead to new eﬀects which we shall
consider later. In sound we do not often consider acoustic intensity levels over
100 dB; 120 dB is a level which is painful to the ear. Therefore, for sound, if we
write
P = P0 + Pe,
ρ = ρ0 + ρe,
(47.2)

we shall always have the pressure change Pe very small compared with P0 and
the density change ρe very small compared with ρ0. Then

P0 + Pe = f(ρ0 + ρe) = f(ρ0) + ρef ′(ρ0),
(47.3)

where P0 = f(ρ0) and f ′(ρ0) stands for the derivative of f(ρ) evaluated at ρ = ρ0.
We can take the second step in this equality only because ρe is very small. We ﬁnd
in this way that the excess pressure Pe is proportional to the excess density ρe,

* With this choice of Pref, the P is not the peak pressure in the sound wave but the
“root-mean-square” pressure, which is 1/(2)1/2 times the peak pressure.

47-7and we may call the proportionality factor κ:

Pe = κρe,
where κ = f ′(ρ0) = (dP/dρ)0.
(47.4)

The relation we needed for II is this very simple one.

χ(x, t)

OLD VOLUME
NEW VOLUME

x
x+∆x
x+χ(x, t)
(x+∆x)+χ(x+∆x, t)

χ(x+∆x, t)

Fig. 47-3. The displacement of the air at x is χ(x, t), and at x + ∆x
it is χ(x + ∆x, t). The original volume of the air for a unit area of the
plane wave is ∆x; the new volume is ∆x + χ(x + ∆x, t) −χ(x, t).

Let us now consider I. We shall suppose that the position of a portion of
air undisturbed by the sound wave is x and the displacement at the time t due
to the sound is χ(x, t), so that its new position is x + χ(x, t), as in Fig. 47-3.
Now the undisturbed position of a nearby portion of air is x + ∆x, and its new
position is x + ∆x + χ(x + ∆x, t). We can now ﬁnd the density changes in the
following way. Since we are limiting ourselves to plane waves, we can take a unit
area perpendicular to the x-direction, which is the direction of propagation of
the sound wave. The amount of air, per unit area, in ∆x is then ρ0 ∆x, where ρ0
is the undisturbed, or equilibrium, air density. This air, when displaced by the
sound wave, now lies between x + χ(x, t) and x + ∆x + χ(x + ∆x, t), so that we
have the same matter in this interval that was in ∆x when undisturbed. If ρ is
the new density, then

ρ0 ∆x = ρ[x + ∆x + χ(x + ∆x, t) −x −χ(x, t)].
(47.5)

Since ∆x is small, we can write χ(x + ∆x, t) −χ(x, t) = (∂χ/∂x) ∆x. This
derivative is a partial derivative, since χ depends on the time as well as on x.
Our equation then is

ρ0 ∆x = ρ
∂χ

∂x ∆x + ∆x

(47.6)

47-8or

ρ0 = (ρ0 + ρe)∂χ

∂x + ρ0 + ρe.
(47.7)

Now in sound waves all changes are small so that ρe is small, χ is small, and
∂χ/∂x is also small. Therefore in the relation that we have just found,

ρe = −ρ0
∂χ
∂x −ρe
∂χ
∂x,
(47.8)

we can neglect ρe ∂χ/∂x compared with ρ0 ∂χ/∂x. Thus we get the relation we
needed for I:
ρe = −ρ0
∂χ
∂x.
(I)
(47.9)

This equation is what we would expect physically. If the displacements vary with
x, then there will be density changes. The sign is also right: if the displacement χ
increases with x, so that the air is stretched out, the density must go down.
We now need the third equation, which is the equation of the motion produced
by the pressure. If we know the relation between the force and the pressure, we
can then get the equation of motion. If we take a thin slab of air of length ∆x
and of unit area perpendicular to x, then the mass of air in this slab is ρ0 ∆x and
it has the acceleration ∂2χ/∂t2, so the mass times the acceleration for this slab
of matter is ρ0 ∆x(∂2χ/∂t2). (It makes no diﬀerence for small ∆x whether the
acceleration ∂2χ/∂t2 is evaluated at an edge of the slab or at some intermediate
position.) If now we ﬁnd the force on this matter for a unit area perpendicular to x,
it will then be equal to ρ0 ∆x(∂2χ/∂t2). We have the force in the +x-direction,
at x, of amount P(x, t) per unit area, and we have the force in the opposite
direction, at x + ∆x, of amount P(x + ∆x, t) per unit area (Fig. 47-4):

P(x, t) −P(x + ∆x, t) = −∂P

∂x ∆x = −∂Pe

∂x ∆x,
(47.10)

P (x, t)
P (x + ∆x, t)

x

∆x

Fig. 47-4. The net force in the positive x-direction produced by the
pressure acting on unit area perpendicular to x is −(∂P/∂x) ∆x.

47-9since ∆x is small and since the only part of P which changes is the excess
pressure Pe. We now have III:

ρ0
∂2χ

∂t2 = −∂Pe

∂x ,
(III)
(47.11)

and so we have enough equations to interconnect things and reduce down to one
variable, say to χ. We can eliminate Pe from III by using II, so that we get

ρ0
∂2χ

∂t2 = −κ ∂ρe

∂x ,
(47.12)

and then we can use I to eliminate ρe. In this way we ﬁnd that ρ0 cancels out
and that we are left with
∂2χ

∂t2 = κ ∂2χ

∂x2 .
(47.13)

We shall call c2
s = κ, so that we can write

∂2χ
∂x2 = 1

∂2χ

∂t2 .
(47.14)

c2s

This is the wave equation which describes the behavior of sound in matter.

47-4 Solutions of the wave equation

We now can see whether this equation really does describe the essential
properties of sound waves in matter. We want to deduce that a sound pulse,
or disturbance, will move with a constant speed. We want to verify that two
diﬀerent pulses can move through each other—the principle of superposition. We
also want to verify that sound can go either to the right or to the left. All these
properties should be contained in this one equation.
We have remarked that any plane-wave disturbance which moves with a
constant velocity v has the form f(x −vt). Now we have to see whether χ(x, t) =
f(x −vt) is a solution of the wave equation. When we calculate ∂χ/∂x, we get
the derivative of the function, ∂χ/∂x = f ′(x −vt). Diﬀerentiating once more,
we ﬁnd
∂2χ
∂x2 = f ′′(x −vt).
(47.15)

47-10
