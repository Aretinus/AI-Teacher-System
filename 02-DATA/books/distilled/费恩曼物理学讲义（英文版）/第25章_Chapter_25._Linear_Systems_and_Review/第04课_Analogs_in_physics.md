# Analogs in physics

the higher the peak of the curve, the narrower the width at half the maximum
height.
Finally, we take the case where there is an enormous amount of friction. It
turns out that if there is too much friction, the system does not oscillate at all.
The energy in the spring is barely able to move it against the frictional force,
and so it slowly oozes down to the equilibrium point.

25-4 Analogs in physics

The next aspect of this review is to note that masses and springs are not the
only linear systems; there are others. In particular, there are electrical systems
called linear circuits, in which we ﬁnd a complete analog to mechanical systems.
We did not learn exactly why each of the objects in an electrical circuit works in
the way it does—that is not to be understood at the present moment; we may
assert it as an experimentally veriﬁable fact that they behave as stated.
For example, let us take the simplest possible circumstance. We have a piece
of wire, which is just a resistance, and we have applied to it a diﬀerence in
potential, V . Now the V means this: if we carry a charge q through the wire
from one terminal to another terminal, the work done is qV . The higher the
voltage diﬀerence, the more work was done when the charge, as we say, “falls”
from the high potential end of the terminal to the low potential end. So charges
release energy in going from one end to the other. Now the charges do not simply
ﬂy from one end straight to the other end; the atoms in the wire oﬀer some
resistance to the current, and this resistance obeys the following law for almost
all ordinary substances: if there is a current I, that is, so and so many charges
per second tumbling down, the number per second that comes tumbling through
the wire is proportional to how hard we push them—in other words, proportional
to how much voltage there is:

V = IR = R(dq/dt).
(25.11)

The coeﬃcient R is called the resistance, and the equation is called Ohm’s Law.
The unit of resistance is the ohm; it is equal to one volt per ampere. In mechanical
situations, to get such a frictional force in proportion to the velocity is diﬃcult;
in an electrical system it is very easy, and this law is extremely accurate for most
metals.
We are often interested in how much work is done per second, the power loss,
or the energy liberated by the charges as they tumble down the wire. When

25-12we carry a charge q through a voltage V , the work is qV , so the work done per
second would be V (dq/dt), which is the same as V I, or also IR · I = I2R. This
is called the heating loss—this is how much heat is generated in the resistance
per second, by the conservation of energy. It is this heat that makes an ordinary
incandescent light bulb work.
Of course, there are other interesting properties of mechanical systems, such
as the mass (inertia), and it turns out that there is an electrical analog to inertia
also. It is possible to make something called an inductor, having a property
called inductance, such that a current, once started through the inductance, does
not want to stop. It requires a voltage in order to change the current! If the
current is constant, there is no voltage across an inductance. dc circuits do not
know anything about inductance; it is only when we change the current that the
eﬀects of inductance show up. The equation is

V = L(dI/dt) = L(d2q/dt2),
(25.12)

and the unit of inductance, called the henry, is such that one volt applied to
an inductance of one henry produces a change of one ampere per second in the
current. Equation (25.12) is the analog of Newton’s law for electricity, if we wish:
V corresponds to F, L corresponds to m, and I corresponds to velocity! All of the
consequent equations for the two kinds of systems will have the same derivations
because, in all the equations, we can change any letter to its corresponding
analog letter and we get the same equation; everything we deduce will have a
correspondence in the two systems.
Now what electrical thing corresponds to the mechanical spring, in which
there was a force proportional to the stretch? If we start with F = kx and replace
F →V and x →q, we get V = αq. It turns out that there is such a thing, in fact
it is the only one of the three circuit elements we can really understand, because
we did study a pair of parallel plates, and we found that if there were a charge of
certain equal, opposite amounts on each plate, the electric ﬁeld between them
would be proportional to the size of the charge. So the work done in moving a
unit charge across the gap from one plate to the other is precisely proportional to
the charge. This work is the deﬁnition of the voltage diﬀerence, and it is the line
integral of the electric ﬁeld from one plate to another. It turns out, for historical
reasons, that the constant of proportionality is not called C, but 1/C. It could
have been called C, but it was not. So we have

V = q/C.
(25.13)

25-13The unit of capacitance, C, is the farad; a charge of one coulomb on each plate
of a one-farad capacitor yields a voltage diﬀerence of one volt.
There are our analogies, and the equation corresponding to the oscillating
circuit becomes the following, by direct substitution of L for m, q for x, etc:

m(d2x/dt2) + γm(dx/dt) + kx = F,
(25.14)

L(d2q/dt2) + R(dq/dt) + q/C = V.
(25.15)

Now everything we learned about (25.14) can be transformed to apply to (25.15).
Every consequence is the same; so much the same that there is a brilliant thing
we can do.
Suppose we have a mechanical system which is quite complicated, not just
one mass on a spring, but several masses on several springs, all hooked together.
What do we do? Solve it? Perhaps; but look, we can make an electrical circuit
which will have the same equations as the thing we are trying to analyze! For
instance, if we wanted to analyze a mass on a spring, why can we not build
an electrical circuit in which we use an inductance proportional to the mass, a
resistance proportional to the corresponding mγ, 1/C proportional to k, all in
the same ratio? Then, of course, this electrical circuit will be the exact analog
of our mechanical one, in the sense that whatever q does, in response to V
(V also is made to correspond to the forces that are acting), so the x would
do in response to the force! So if we have a complicated thing with a whole
lot of interconnecting elements, we can interconnect a whole lot of resistances,
inductances, and capacitances, to imitate the mechanically complicated system.
What is the advantage to that? One problem is just as hard (or as easy) as
the other, because they are exactly equivalent. The advantage is not that it is
any easier to solve the mathematical equations after we discover that we have an
electrical circuit (although that is the method used by electrical engineers!), but
instead, the real reason for looking at the analog is that it is easier to make the
electrical circuit, and to change something in the system.
Suppose we have designed an automobile, and want to know how much it
is going to shake when it goes over a certain kind of bumpy road. We build an
electrical circuit with inductances to represent the inertia of the wheels, spring
constants as capacitances to represent the springs of the wheels, and resistors to
represent the shock absorbers, and so on for the other parts of the automobile.
Then we need a bumpy road. All right, we apply a voltage from a generator,
which represents such and such a kind of bump, and then look at how the left

25-14wheel jiggles by measuring the charge on some capacitor. Having measured it
(it is easy to do), we ﬁnd that it is bumping too much. Do we need more shock
absorber, or less shock absorber? With a complicated thing like an automobile,
do we actually change the shock absorber, and solve it all over again? No!, we
simply turn a dial; dial number ten is shock absorber number three, so we put in
more shock absorber. The bumps are worse—all right, we try less. The bumps
are still worse; we change the stiﬀness of the spring (dial 17), and we adjust all
these things electrically, with merely the turn of a knob.
This is called an analog computer. It is a device which imitates the problem
that we want to solve by making another problem, which has the same equation,
but in another circumstance of nature, and which is easier to build, to measure,
to adjust, and to destroy!

25-5 Series and parallel impedances

Finally, there is an important item which is not quite in the nature of review.
This has to do with an electrical circuit in which there is more than one circuit
element. For example, when we have an inductor, a resistor, and a capacitor
connected as in Fig. 24-2, we note that all the charge went through every one
of the three, so that the current in such a singly connected thing is the same at
all points along the wire. Since the current is the same in each one, the voltage
across R is IR, the voltage across L is L(dI/dt), and so on. So, the total voltage
drop is the sum of these, and this leads to Eq. (25.15). Using complex numbers,
we found that we could solve the equation for the steady-state motion in response
to a sinusoidal force. We thus found that ˆV = ˆZ ˆI. Now ˆZ is called the impedance
of this particular circuit. It tells us that if we apply a sinusoidal voltage, ˆV , we
get a current ˆI.
Now suppose we have a more complicated circuit which has two pieces,
which by themselves have certain impedances, ˆZ1 and ˆZ2 and we put them in

Z1

Z1
Z2


Z2

(a) Series
(b) Parallel

Fig. 25-6. Two impedances, connected in series and in parallel.

25-15
