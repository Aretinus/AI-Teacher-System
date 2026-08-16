# Solutions of the wave equation

since ∆x is small and since the only part of P which changes is the excess
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

47-10The diﬀerentiation of this same function with respect to t gives −v times
the derivative of the function, or ∂χ/∂t = −vf ′(x −vt), and the second time
derivative is
∂2χ

∂t2 = v2f ′′(x −vt).
(47.16)

It is evident that f(x −vt) will satisfy the wave equation provided the wave
velocity v is equal to cs.
We ﬁnd, therefore, from the laws of mechanics that any sound disturbance
propagates with the velocity cs, and in addition we ﬁnd that

cs = κ1/2 = (dP/dρ)1/2
,

and so we have related the wave velocity to a property of the medium.
If we consider a wave travelling in the opposite direction, so that χ(x, t) =
g(x +vt), it is easy to see that such a disturbance also satisﬁes the wave equation.
The only diﬀerence between such a wave and one travelling from left to right
is in the sign of v, but whether we have x + vt or x −vt as the variable in the
function does not aﬀect the sign of ∂2χ/∂t2, since it involves only v2. It follows
that we have a solution for waves propagating in either direction with speed cs.
An extremely interesting question is that of superposition. Suppose one
solution of the wave equation has been found, say χ1. This means that the second
derivative of χ1 with respect to x is equal to 1/c2
s times the second derivative
of χ1 with respect to t. Now any other solution χ2 has this same property. If we
superpose these two solutions, we have

χ(x, t) = χ1(x, t) + χ2(x, t),
(47.17)

and we wish to verify that χ(x, t) is also a wave, i.e., that χ satisﬁes the wave
equation. We can easily prove this result, since we have

∂2χ
∂x2 = ∂2χ1

∂x2 + ∂2χ2

∂x2
(47.18)

and, in addition,
∂2χ

∂t2 = ∂2χ1

∂t2 + ∂2χ2

∂t2 .
(47.19)

It follows that ∂2χ/∂x2 = (1/c2
s) ∂2χ/∂t2, so we have veriﬁed the principle of
superposition. The proof of the principle of superposition follows from the fact
that the wave equation is linear in χ.

47-11We can now expect that a plane light wave propagating in the x-direction,
polarized so that the electric ﬁeld is in the y-direction, will satisfy the wave
equation
∂2Ey

c2
∂2Ey

∂x2 = 1

∂t2 ,
(47.20)

where c is the speed of light. This wave equation is one of the consequences of
Maxwell’s equations. The equations of electrodynamics will lead to the wave
equation for light just as the equations of mechanics lead to the wave equation
for sound.

47-5 The speed of sound

Our deduction of the wave equation for sound has given us a formula which
connects the wave speed with the rate of change of pressure with the density at
the normal pressure:

c2
s =
dP



.
(47.21)

dρ

In evaluating this rate of change, it is essential to know how the temperature
varies. In a sound wave, we would expect that in the region of compression the
temperature would be raised, and that in the region of rarefaction the temperature
would be lowered. Newton was the ﬁrst to calculate the rate of change of pressure
with density, and he supposed that the temperature remained unchanged. He
argued that the heat was conducted from one region to the other so rapidly that
the temperature could not rise or fall. This argument gives the isothermal speed
of sound, and it is wrong. The correct deduction was given later by Laplace,
who put forward the opposite idea—that the pressure and temperature change
adiabatically in a sound wave. The heat ﬂow from the compressed region to the
rareﬁed region is negligible so long as the wavelength is long compared with the
mean free path. Under this condition the slight amount of heat ﬂow in a sound
wave does not aﬀect the speed, although it gives a small absorption of the sound
energy. We can expect correctly that this absorption increases as the wavelength
approaches the mean free path, but these wavelengths are smaller by factors of
about a million than the wavelengths of audible sound.
The actual variation of pressure with density in a sound wave is the one that
allows no heat ﬂow. This corresponds to the adiabatic variation, which we found

47-12
