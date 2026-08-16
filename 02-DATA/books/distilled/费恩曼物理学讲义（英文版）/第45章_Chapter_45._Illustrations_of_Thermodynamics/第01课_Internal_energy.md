# Internal energy

Illustrations of Thermodynamics

45-1 Internal energy

Thermodynamics is a rather diﬃcult and complex subject when we come to
apply it, and it is not appropriate for us to go very far into the applications
in this course. The subject is of very great importance, of course, to engineers
and chemists, and those who are interested in the subject can learn about the
applications in physical chemistry or in engineering thermodynamics. There
are also good equation reference books, such as Zemansky’s Heat and Thermo-
dynamics, where one can learn more about the subject. In the Encyclopedia
Britannica, fourteenth edition, one can ﬁnd excellent articles on thermodynamics
and thermochemistry, and in the article on chemistry, the sections on physical
chemistry, vaporization, liqueﬁcation of gases, and so on.
The subject of thermodynamics is complicated because there are so many
diﬀerent ways of describing the same thing. If we wish to describe the behavior
of a gas, we can say that the pressure depends on the temperature and on the
volume, or we can say that the volume depends on the temperature and the
pressure. Or with respect to the internal energy U, we might say that it depends
on the temperature and volume, if those are the variables we have chosen—but
we might also say that it depends on the temperature and the pressure, or the
pressure and the volume, and so on. In the last chapter we discussed another
function of temperature and volume, called the entropy S, and we can of course
construct as many other functions of these variables as we like: U −TS is a
function of temperature and volume. So we have a large number of diﬀerent
quantities which can be functions of many diﬀerent combinations of variables.
To keep the subject simple in this chapter, we shall decide at the start
to use temperature and volume as the independent variables.
Chemists use
temperature and pressure, because they are easier to measure and control in
chemical experiments, but we shall use temperature and volume throughout this

45-1chapter, except in one place where we shall see how to make the transformation
into the chemists’ system of variables.
We shall ﬁrst, then, consider only one system of independent variables: tem-
perature and volume. Secondly, we shall discuss only two dependent functions:
the internal energy and the pressure. All the other functions can be derived
from these, so it is not necessary to discuss them.
With these limitations,
thermodynamics is still a fairly diﬃcult subject, but it is not quite so impossible!
First we shall review some mathematics. If a quantity is a function of two
variables, the idea of the derivative of the quantity requires a little more careful
thought than for the case where there is only one variable. What do we mean
by the derivative of the pressure with respect to the temperature? The pressure
change accompanying a change in the temperature depends partly, of course, on
what happens to the volume while T is changing. We must specify the change
in V before the concept of a derivative with respect to T has a precise meaning.
We might ask, for example, for the rate of change of P with respect to T if V is
held constant. This ratio is just the ordinary derivative that we usually write
as dP/dT. We customarily use a special symbol, ∂P/∂T, to remind us that P
depends on another variable V as well as on T, and that this other variable is
held constant. We shall not only use the symbol ∂to call attention to the fact
that the other variable is held constant, but we shall also write the variable that
is held constant as a subscript, (∂P/∂T)V . Since we have only two independent
variables, this notation is redundant, but it will help us keep our wits about us
in the thermodynamic jungle of partial derivatives.
Let us suppose that the function f(x, y) depends on the two independent
variables x and y. By (∂f/∂x)y we mean simply the ordinary derivative, obtained
in the usual way, if we treat y as a constant:

y
= limit
∆x→0
f(x + ∆x, y) −f(x, y)

∂f



∆x
.

∂x

Similarly, we deﬁne ∂f

x
= limit
∆y→0
f(x, y + ∆y) −f(x, y)



∆y
.

∂y

For example, if f(x, y) = x2 + yx, then (∂f/∂x)y = 2x + y, and (∂f/∂y)x = x.
We can extend this idea to higher derivatives: ∂2f/∂y2 or ∂2f/∂y∂x. The latter
symbol indicates that we ﬁrst diﬀerentiate f with respect to x, treating y as a

45-2constant, then diﬀerentiate the result with respect to y, treating x as a constant.
The actual order of diﬀerentiation is immaterial: ∂2f/∂x∂y = ∂2f/∂y∂x.
We will need to compute the change ∆f in f(x, y) when x changes to x + ∆x
and y changes to y + ∆y. We assume throughout the following that ∆x and ∆y
are inﬁnitesimally small:

∆f = f(x + ∆x, y + ∆y) −f(x, y)

= f(x + ∆x, y + ∆y) −f(x, y + ∆y)
|
{z
} + f(x, y + ∆y) −f(x, y)
|
{z
}

=
∆x
∂f



y
+
∆y
∂f



x
(45.1)

∂x

∂y

The last equation is the fundamental relation that expresses ∆f in terms of ∆x
and ∆y.
As an example of the use of this relation, let us calculate the change in the
internal energy U(T, V ) when the temperature changes from T to T + ∆T and
the volume changes from V to V + ∆V . Using Eq. (45.1), we write

∆U = ∆T
∂U



V
+ ∆V
∂U



T
.
(45.2)

∂T

∂V

In our last chapter we found another expression for the change ∆U in the internal
energy when a quantity of heat ∆Q was added to the gas:

∆U = ∆Q −P ∆V.
(45.3)

In comparing Eqs. (45.2) and (45.3) one might at ﬁrst be inclined to think that
P = −(∂U/∂V )T , but this is not correct. To obtain the correct relation, let us ﬁrst
suppose that we add a quantity of heat ∆Q to the gas while keeping the volume
constant, so that ∆V = 0. With ∆V = 0, Eq. (45.3) tells us that ∆U = ∆Q,
and Eq. (45.2) tells us that ∆U = (∂U/∂T)V ∆T, so that (∂U/∂T)V = ∆Q/∆T.
The ratio ∆Q/∆T, the amount of heat one must put into a substance in order
to change its temperature by one degree with the volume held constant, is called
the speciﬁc heat at constant volume and is designated by the symbol CV . By this
argument we have shown that
∂U



V
= CV .
(45.4)

∂T

45-3∆V

PRESSURE

T

∆P

T −∆T

VOLUME

Fig. 45-1. Pressure-volume diagram for a Carnot cycle. The curves
marked T and T −∆T are isothermal lines; the steeper curves are
adiabatic lines. ∆V is the volume change as heat ∆Q is added to the
gas at constant temperature T . ∆P is the pressure change at constant
volume as the gas temperature is changed from T to T −∆T .

Now let us again add a quantity of heat ∆Q to the gas, but this time we
will hold T constant and allow the volume to change by ∆V . The analysis in
this case is more complex, but we can calculate ∆U by the argument of Carnot,
making use of the Carnot cycle we introduced in the last chapter.
The pressure-volume diagram for the Carnot cycle is shown in Fig. 45-1. As
we have already shown, the total amount of work done by the gas in a reversible
cycle is ∆Q(∆T/T), where ∆Q is the amount of heat energy added to the gas
as it expands isothermally at temperature T from volume V to V + ∆V , and
T −∆T is the ﬁnal temperature reached by the gas as it expands adiabatically
on the second leg of the cycle. Now we will show that this work done is also
given by the shaded area in Fig. 45-1. In any circumstances, the work done by
the gas is
R
P dV , and is positive when the gas expands and negative when the
gas is compressed. If we plot P vs. V , the variation of P and V is represented
by a curve which gives the value of P corresponding to a particular value of V .
As the volume changes from one value to another, the work done by the gas,
the integral
R
P dV , is the area under the curve connecting the initial and ﬁnal
values of V . When we apply this idea to the Carnot cycle, we see that as we go
around the cycle, paying attention to the sign of the work done by the gas, the
net work done by the gas is just the shaded area in Fig. 45-1.
Now we want to evaluate the shaded area geometrically.
The cycle we
have used in Fig. 45-1 diﬀers from that used in the previous chapter in that
we now suppose that ∆T and ∆Q are inﬁnitesimally small. We are working

45-4∆V

P

∆P

V

Fig. 45-2. Shaded area = area enclosed by dashed lines = area of
rectangle = ∆P ∆V .

between adiabatic lines and isothermal lines that are very close together, and
the ﬁgure described by the heavy lines in Fig. 45-1 will approach a parallelogram
as the increments ∆T and ∆Q approach zero. The area of this parallelogram is
just ∆V ∆P, where ∆V is the change in volume as energy ∆Q is added to the gas
at constant temperature, and ∆P is the change in pressure as the temperature
changes by ∆T at constant volume. One can easily show that the shaded area
in Fig. 45-1 is given by ∆V ∆P by recognizing that the shaded area is equal to
the area enclosed by the dotted lines in Fig. 45-2, which in turn diﬀers from the
rectangle bounded by ∆P and ∆V only by the addition and subtraction of the
equal triangular areas in Fig. 45-2.
Now let us summarize the results of the arguments we have developed so far:

Work done by the gas = shaded area = ∆V ∆P = ∆Q
∆T




















T

or
∆T

T
· (heat needed to change V by ∆V )constant T

(45.5)

















= ∆V · (change in P when T changes by ∆T)constant V
or
∆V · (heat needed to change V by ∆V )T = T(∂P/∂T)V .

Equation (45.5) expresses the essential result of Carnot’s argument. The whole
of thermodynamics can be deduced from Eq. (45.5) and the First Law, which is
stated in Eq. (45.3). Equation (45.5) is essentially the Second Law, although it

45-5was originally deduced by Carnot in a slightly diﬀerent form, since he did not
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

45-6
