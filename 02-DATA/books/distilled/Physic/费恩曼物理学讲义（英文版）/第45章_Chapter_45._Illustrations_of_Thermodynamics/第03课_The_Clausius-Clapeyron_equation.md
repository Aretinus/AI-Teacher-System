# The Clausius-Clapeyron equation

which is consistent with (45.12), since V and R are constants. Why did we
bother to go through this calculation if we already knew the results? Because
we have been using two independent deﬁnitions of temperature! At one stage
we assumed that the kinetic energy of the molecules was proportional to the
temperature, an assumption that deﬁnes one scale of temperature which we will
call the ideal gas scale. The T in Eq. (45.13) is based on the gas scale. We
also call temperatures measured on the gas scale kinetic temperatures. Later,
we deﬁned the temperature in a second way which was completely independent
of any substance. From arguments based on the Second Law we deﬁned what
we might call the “grand thermodynamic absolute temperature” T, the T that
appears in Eq. (45.12). What we proved here is that the pressure of an ideal gas
(deﬁned as one for which the internal energy does not depend on the volume) is
proportional to the grand thermodynamic absolute temperature. We also know
that the pressure is proportional to the temperature measured on the gas scale.
Therefore we can deduce that the kinetic temperature is proportional to the
“grand thermodynamic absolute temperature.” That means, of course, that if we
were sensible we could make two scales agree. In this instance, at least, the two
scales have been chosen so that they coincide; the proportionality constant has
been chosen to be 1. Most of the time man chooses trouble for himself, but in
this case he made them equal!

45-3 The Clausius-Clapeyron equation

The vaporization of a liquid is another application of the results we have
derived. Suppose we have some liquid in a cylinder, such that we can compress
it by pushing on the piston, and we ask ourselves, “If we keep the temperature
constant, how does the pressure vary with volume?” In other words, we want
to draw an isothermal line on the P-V diagram. The substance in the cylinder
is not the ideal gas that we considered earlier; now it may be in the liquid or
the vapor phase, or both may be present. If we apply suﬃcient pressure, the
substance will condense to a liquid. Now if we squeeze still harder, the volume
changes very little, and our isothermal line rises rapidly with decreasing volume,
as shown at the left in Fig. 45-3.
If we increase the volume by pulling the piston out, the pressure drops until
we reach the point at which the liquid starts to boil, and then vapor starts to form.
If we pull the piston out farther, all that happens is that more liquid vaporizes.
When there is part liquid and part vapor in the cylinder, the two phases are in

45-10PRESSURE

LIQUID

T
T −∆T

LIQUID
AND VAPOR

VAPOR

VOLUME

Fig. 45-3. Isothermal lines for a condensable vapor compressed in a
cylinder. At the left, the substance is in the liquid phase. At the right,
the substance is vaporized. In the center, both liquid, and vapor are
present in the cylinder.

PRESSURE

∆P
T

T −∆T

VL
VG

VOLUME

Fig. 45-4. Pressure-volume diagram for a Carnot cycle with a con-
densable vapor in the cylinder. At the left, the substance is in the liquid
state. A quantity of heat L is added at temperature T to vaporize the
liquid. The vapor expands adiabatically as T changes to T −∆T.

45-11equilibrium—liquid is evaporating and vapor is condensing at the same rate. If
we make more room for the vapor, more vapor is needed to maintain the pressure,
so a little more liquid evaporates, but the pressure remains constant. On the ﬂat
part of the curve in Fig. 45-3 the pressure does not change, and the value of the
pressure here is called the vapor pressure at temperature T. As we continue to
increase the volume, there comes a time when there is no more liquid to evaporate.
At this juncture, if we expand the volume further, the pressure will fall as for
an ordinary gas, as shown at the right of the P-V diagram. The lower curve in
Fig. 45-3 is the isothermal line at a slightly lower temperature T −∆T. The
pressure in the liquid phase is slightly reduced because liquid expands with an
increase in temperature (for most substances, but not for water near the freezing
point) and, of course, the vapor pressure is lower at the lower temperature.
We will now make a cycle out of the two isothermal lines by connecting
them (say by adiabatic lines) at both ends of the upper ﬂat section, as shown in
Fig. 45-4. We are going to use the argument of Carnot, which tells us that the
heat added to the substance in changing it from a liquid to a vapor is related
to the work done by the substance as it goes around the cycle. Let us call L
the heat needed to vaporize the substance in the cylinder. As in the argument
immediately preceding Eq. (45.5), we know that L(∆T/T) = work done by the
substance. As before, the work done by the substance is the shaded area, which is
approximately ∆P(VG −VL), where ∆P is the diﬀerence in vapor pressure at the
two temperatures T and T −∆T, VG is the volume of the gas, and VL is the volume
of the liquid, both volumes measured at the vapor pressure at temperature T.
Setting these two expressions for the area equal, we get L ∆T/T = ∆P(VG −VL),
or

L
T(VG −VL) = (∂Pvap/∂T).
(45.14)

Equation (45.14) gives the relationship between the rate of change of vapor
pressure with temperature and the amount of heat required to evaporate the
liquid. This relationship was deduced by Carnot, but it is called the Clausius-
Clapeyron equation.
Now let us compare Eq. (45.14) with the results deduced from kinetic theory.
Usually VG is very much larger than VL. So VG −VL ≈VG = RT/P per mole. If
we further assume that L is a constant, independent of temperature—not a very
good approximation—then we would have ∂P/∂T = L/(RT 2/P). The solution

45-12of this diﬀerential equation is

P = const e−L/RT .
(45.15)

Let us compare this with the pressure variation with temperature that we deduced
earlier from kinetic theory. Kinetic theory indicated the possibility, at least
roughly, that the number of molecules per unit volume of vapor above a liquid
would be

n =
 1


e−(UG−UL)/RT ,
(45.16)

Va

where UG −UL is the internal energy per mole in the gas minus the internal
energy per mole in the liquid, i.e., the energy needed to vaporize a mole of
liquid. Equation (45.15) from thermodynamics and Eq. (45.16) from kinetic
theory are very closely related because the pressure is nkT, but they are not
exactly the same. However, they will turn out to be exactly the same if we
assume UG −UL = const, instead of L = const. If we assume UG −UL = const,
independent of temperature, then the argument leading to Eq. (45.15) will
produce Eq. (45.16). Since the pressure is constant while the volume is changing,
the change in internal energy UG −UL is equal to the heat L put in minus the
work done P(VG −VL), so L = (UG + PVG) −(UL + PVL).
This comparison shows the advantages and disadvantages of thermodynamics
over kinetic theory: First of all, Eq. (45.14) obtained by thermodynamics is
exact, while Eq. (45.16) can only be approximated, for instance, if U is nearly
constant, and if the model is right. Second, we may not understand correctly
how the gas goes into the liquid; nevertheless, Eq. (45.14) is right, while (45.16)
is only approximate. Third, although our treatment applies to a gas condensing
into a liquid, the argument is true for any other change of state. For instance,
the solid-to-liquid transition has the same kind of curve as that shown in Figs.
45-3 and 45-4. Introducing the latent heat for melting, M/mole, the formula
analogous to Eq. (45.14) then is (∂Pmelt/∂T)V = M/[T(Vliq −Vsolid)]. Although
we may not understand the kinetic theory of the melting process, we nevertheless
have a correct equation. However, when we can understand the kinetic theory,
we have another advantage. Equation (45.14) is only a diﬀerential relationship,
and we have no way of obtaining the constants of integration. In the kinetic
theory we can obtain the constants also if we have a good model that describes
the phenomenon completely. So there are advantages and disadvantages to
each. When knowledge is weak and the situation is complicated, thermodynamic

45-13relations are really the most powerful. When the situation is very simple and a
theoretical analysis can be made, then it is better to try to get more information
from theoretical analysis.
One more example: blackbody radiation. We have discussed a box containing
radiation and nothing else. We have talked about the equilibrium between the
oscillator and the radiation. We also found that the photons hitting the wall of
the box would exert the pressure P, and we found PV = U/3, where U is the
total energy of all the photons and V is the volume of the box. If we substitute
U = 3PV in the basic Eq. (45.7), we ﬁnd*
∂U



T
= 3P = T
∂P



V
−P.
(45.17)

∂V

∂T

Since the volume of our box is constant, we can replace (∂P/∂T)V by dP/dT to
obtain an ordinary diﬀerential equation we can integrate: ln P = 4 ln T + const,
or P = const × T 4. The pressure of radiation varies as the fourth power of the
temperature, and the total energy density of the radiation, U/V = 3P, also
varies as T 4. It is usual to write U/V = (4σ/c)T 4, where c is the speed of light
and σ is called the Stefan-Boltzmann constant. It is not possible to get σ from
thermodynamics alone. Here is a good example of its power, and its limitations.
To know that U/V goes as T 4 is a great deal, but to know how big U/V actually
is at any temperature requires that we go into the kind of detail that only a
complete theory can supply. For blackbody radiation we have such a theory and
we can derive an expression for the constant σ in the following manner.
Let I(ω) dω be the intensity distribution, the energy ﬂow through 1 m2

in one second with frequency between ω and ω + dω.
The energy density
distribution = energy/volume = I(ω) dω/c is

U
V = total energy density

=
Z ∞

ω=0
energy density between ω and ω + dω

* In this case (∂P/∂V )T = 0, because in order to keep the oscillator in equilibrium at a
given temperature, the radiation in the neighborhood of the oscillator has to be the same,
regardless of the volume of the box. The total quantity of photons inside the box must therefore
be proportional to its volume, so the internal energy per unit volume, and thus the pressure,
depends only on the temperature.

45-14=
Z ∞

I(ω) dω

c
.


From our earlier discussions, we know that

I(ω) =
ℏω3

π2c2(eℏω/kT −1).

Substituting this expression for I(ω) in our equation for U/V , we get

Z ∞

ℏω3 dω
eℏω/kT −1.

U
V =
π2c3


If we substitute x = ℏω/kT, the expression becomes

Z ∞

x3 dx
ex −1.

U
V = (kT)4

ℏ3π2c3


This integral is just some number that we can get, approximately, by drawing
a curve and taking the area by counting squares. It is roughly 6.5. The math-
ematicians among us can show that the integral is exactly π4/15.* Comparing
this expression with U/V = (4σ/c)T 4, we ﬁnd

σ =
k4π2

60ℏ3c3 = 5.67 × 10−8
watts
(meter)2(degree)4 .

If we make a small hole in our box, how much energy will ﬂow per second
through the hole of unit area? To go from energy density to energy ﬂow, we
multiply the energy density U/V by c. We also multiply by 1

4, which arises
as follows: ﬁrst, a factor of 1

2, because only the energy which is ﬂowing out

* Since (ex −1)−1 = e−x + e−2x + · · · , the integral is

Z ∞

∞
X

e−nxx3 dx.

n=1

But R ∞

e−nx dx = 1/n, and diﬀerentiating with respect to n three times gives R ∞

x3e−nx dx =

6/n4, so the integral is 6(1 +
16 +
81 + · · · ) and a good estimate comes from adding the ﬁrst
few terms. In Chapter 50 we will ﬁnd a way to show that the sum of the reciprocal fourth
powers of the integers is, in fact, π4/90.

45-15escapes; and second, another factor 1

2, because energy which approaches the
hole at an angle to the normal is less eﬀective in getting through the hole by a
cosine factor. The average value of the cosine is 1

2. It is clear now why we write
U/V = (4σ/c)T 4: so that we can ultimately say that the ﬂux from a small hole
is σT 4 per unit area.

45-1646

Ratchet and pawl*

46-1 How a ratchet works

In this chapter we discuss the ratchet and pawl, a very simple device which
allows a shaft to turn only one way. The possibility of having something turn
only one way requires some detailed and careful analysis, and there are some
very interesting consequences.
The plan of the discussion came about in attempting to devise an elementary
explanation, from the molecular or kinetic point of view, for the fact that there
is a maximum amount of work which can be extracted from a heat engine. Of
course we have seen the essence of Carnot’s argument, but it would be nice to
ﬁnd an explanation which is elementary in the sense that we can see what is
happening physically. Now, there are complicated mathematical demonstrations
which follow from Newton’s laws to demonstrate that we can get only a certain
amount of work out when heat ﬂows from one place to another, but there is great
diﬃculty in converting this into an elementary demonstration. In short, we do
not understand it, although we can follow the mathematics.
In Carnot’s argument, the fact that more than a certain amount of work
cannot be extracted in going from one temperature to another is deduced from
another axiom, which is that if everything is at the same temperature, heat cannot
be converted to work by means of a cyclic process. First, let us back up and try
to see, in at least one elementary example, why this simpler statement is true.
Let us try to invent a device which will violate the Second Law of Thermo-
dynamics, that is, a gadget which will generate work from a heat reservoir with
everything at the same temperature. Let us say we have a box of gas at a certain
temperature, and inside there is an axle with vanes in it. (See Fig. 46-1 but take
T1 = T2 = T, say.) Because of the bombardments of gas molecules on the vane,

* See Parrando and Espanol, Am. J. Phys. 64, 1125 (1996) for a critical analysis of this
chapter.

46-1
