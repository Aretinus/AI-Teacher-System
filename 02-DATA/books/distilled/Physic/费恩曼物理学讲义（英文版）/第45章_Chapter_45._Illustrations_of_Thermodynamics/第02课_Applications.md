# Applications

was originally deduced by Carnot in a slightly diﬀerent form, since he did not
use our deﬁnition of temperature.
Now we can proceed to calculate (∂U/∂V )T . By how much would the internal
energy U change if we changed the volume by ∆V ? First, U changes because
heat is put in, and second, U changes because work is done. The heat put in is

∆Q = T
∂P



V
∆V,

∂T

according to Eq. (45.5), and the work done on the substance is −P ∆V . Therefore
the change ∆U in internal energy has two pieces:

∆U = T
∂P



V
∆V −P ∆V.
(45.6)

∂T

Dividing both sides by ∆V , we ﬁnd for the rate of change of U with V at
constant T
∂U

T
= T
∂P





V
−P.
(45.7)

∂V

∂T

In our thermodynamics, in which T and V are the only variables and P and U
are the only functions, Eqs. (45.3) and (45.7) are the basic equations from which
all the results of the subject can be deduced.

45-2 Applications

Now let us discuss the meaning of Eq. (45.7) and see why it answers the
questions which we proposed in our last chapter. We considered the following
problem: in kinetic theory it is obvious that an increase in temperature leads
to an increase in pressure, because of the bombardments of the atoms on a
piston. For the same physical reason, when we let the piston move back, heat
is taken out of the gas and, in order to keep the temperature constant, heat
will have to be put back in. The gas cools when it expands, and the pressure
rises when it is heated. There must be some connection between these two
phenomena, and this connection is given explicitly in Eq. (45.7). If we hold the
volume ﬁxed and increase the temperature, the pressure rises at a rate (∂P/∂T)V .
Related to that fact is this: if we increase the volume, the gas will cool unless we
pour some heat in to maintain the temperature constant, and (∂U/∂V )T tells
us the amount of heat needed to maintain the temperature. Equation (45.7)

45-6expresses the fundamental interrelationship between these two eﬀects. That is
what we promised we would ﬁnd when we came to the laws of thermodynamics.
Without knowing the internal mechanism of the gas, and knowing only that we
cannot make perpetual motion of the second type, we can deduce the relationship
between the amount of heat needed to maintain a constant temperature when
the gas expands, and the pressure change when the gas is heated at constant
volume!
Now that we have the result we wanted for a gas, let us consider the rubber
band. When we stretch a rubber band, we ﬁnd that its temperature rises, and
when we heat a rubber band, we ﬁnd that it pulls itself in. What is the equation
that gives the same relation for a rubber band as Eq. (45.3) gives for gas? For a
rubber band the situation will be something like this: when heat ∆Q is put in,
the internal energy is changed by ∆U and some work is done. The only diﬀerence
will be that the work done by the rubber band is −F ∆L instead of P ∆V , where
F is the force on the band, and L is the length of the band. The force F is a
function of temperature and of length of the band. Replacing P ∆V in Eq. (45.3)
by −F ∆L, we get

∆U = ∆Q + F ∆L.
(45.8)

Comparing Eqs. (45.3) and (45.8), we see that the rubber band equation is
obtained by a mere substitution of one letter for another. Furthermore, if we
substitute L for V , and −F for P, all of our discussion of the Carnot cycle
applies to the rubber band. We can immediately deduce, for instance, that the
heat ∆Q needed to change the length by ∆L is given by the analog to Eq. (45.5):
∆Q = −T(∂F/∂T)L ∆L. This equation tells us that if we keep the length of a
rubber band ﬁxed and heat the band, we can calculate how much the force will
increase in terms of the heat needed to keep the temperature constant when the
band is relaxed a little bit. So we see that the same equation applies to both gas
and a rubber band. In fact, if one can write ∆U = ∆Q + A ∆B, where A and B
represent diﬀerent quantities, force and length, pressure and volume, etc., one can
apply the results obtained for a gas by substituting A and B for −P and V . For
example, consider the electric potential diﬀerence, or “voltage,” E in a battery
and the charge ∆Z that moves through the battery. We know that the work done
in a reversible electric cell, like a storage battery, is E ∆Z. (Since we include
no P ∆V term in the work, we require that our battery maintain a constant
volume.) Let us see what thermodynamics can tell us about the performance of

45-7a battery. If we substitute E for P and Z for V in Eq. (45.6), we obtain

∆U
∆Z = T
∂E



Z
−E.
(45.9)

∂T

Equation (45.9) says that the internal energy U is changed when a charge ∆Z
moves through the cell. Why is ∆U/∆Z not simply the voltage E of the battery?
(The answer is that a real battery gets warm when charge moves through the
cell. The internal energy of the battery is changed, ﬁrst, because the battery did
some work on the outside circuit, and second, because the battery is heated.)
The remarkable thing is that the second part can again be expressed in terms
of the way in which the battery voltage changes with temperature. Incidentally,
when the charge moves through the cell, chemical reactions occur, and Eq. (45.9)
suggests a nifty way of measuring the amount of energy required to produce
a chemical reaction. All we need to do is construct a cell that works on the
reaction, measure the voltage, and measure how much the voltage changes with
temperature when we draw no charge from the battery!
Now we have assumed that the volume of the battery can be maintained
constant, since we have omitted the P ∆V term when we set the work done by the
battery equal to E ∆Z. It turns out that it is technically quite diﬃcult to keep
the volume constant. It is much easier to keep the cell at constant atmospheric
pressure. For that reason, the chemists do not like any of the equations we
have written above: they prefer equations which describe performance under
constant pressure. We chose at the beginning of this chapter to use V and T as
independent variables. The chemists prefer P and T, and we will now consider
how the results we have obtained so far can be transformed into the chemists’
system of variables. Remember that in the following treatment confusion can
easily set in because we are shifting gears from T and V to T and P.
We started in Eq. (45.3) with ∆U = ∆Q −P ∆V ; P ∆V may be replaced by
E ∆Z or A ∆B. If we could somehow replace the last term, P ∆V , by V ∆P,
then we would have interchanged V and P, and the chemists would be happy.
Well, a clever man noticed that the diﬀerential of the product PV is d(PV ) =
P dV + V dP, and if he added this equality to Eq. (45.3), he obtained

∆(PV ) = P ∆V + V ∆P

∆U = ∆Q
−P ∆V
∆(U + PV ) = ∆Q
+ V ∆P

45-8In order that the result look like Eq. (45.3), we deﬁne U + PV to be something
new, called the enthalpy, H, and we write ∆H = ∆Q + V ∆P.
Now we are ready to transform our results into chemists’ language with the
following rules: U →H, P →−V , V →P. For example, the fundamental
relationship that chemists would use instead of Eq. (45.7) is
∂H

T
= −T
∂V





P
+ V.

∂P

∂T

It should now be clear how one transforms to the chemists’ variables T and P.
We now go back to our original variables: for the remainder of this chapter, T
and V are the independent variables.
Now let us apply the results we have obtained to a number of physical
situations. Consider ﬁrst the ideal gas. From kinetic theory we know that the
internal energy of a gas depends only on the motion of the molecules and the
number of molecules. The internal energy depends on T, but not on V . If we
change V , but keep T constant, U is not changed. Therefore (∂U/∂V )T = 0, and
Eq. (45.7) tells us that for an ideal gas

T
∂P



V
−P = 0.
(45.10)

∂T

Equation (45.10) is a diﬀerential equation that can tell us something about P.
We take account of the partial derivatives in the following way: Since the partial
derivative is at constant V , we will replace the partial derivative by an ordinary
derivative and write explicitly, to remind us, “constant V .” Equation (45.10) then
becomes

T ∆P

∆T −P = 0;
const V ,
(45.11)

which we can integrate to get

ln P = ln T + const;
const V ,

P = const × T;
const V .
(45.12)

We know that for an ideal gas the pressure per mole is equal to

P = RT

V ,
(45.13)

45-9which is consistent with (45.12), since V and R are constants. Why did we
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

45-10
