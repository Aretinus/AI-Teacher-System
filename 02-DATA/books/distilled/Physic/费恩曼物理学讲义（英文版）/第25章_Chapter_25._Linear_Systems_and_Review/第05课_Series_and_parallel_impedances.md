# Series and parallel impedances

wheel jiggles by measuring the charge on some capacitor. Having measured it
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

25-15series (Fig. 25-6a) and apply a voltage. What happens? It is now a little more
complicated, but if ˆI is the current through ˆZ1, the voltage diﬀerence across ˆZ1,
is ˆV1 = ˆI ˆZ1; similarly, the voltage across ˆZ2 is ˆV2 = ˆI ˆZ2. The same current goes
through both. Therefore the total voltage is the sum of the voltages across the
two sections and is equal to ˆV = ˆV1 + ˆV2 = ( ˆZ1 + ˆZ2)ˆI. This means that the
voltage on the complete circuit can be written ˆV = ˆI ˆZs, where the ˆZs of the
combined system in series is the sum of the two ˆZ’s of the separate pieces:

ˆZs = ˆZ1 + ˆZ2.
(25.16)

This is not the only way things may be connected. We may also connect
them in another way, called a parallel connection (Fig. 25-6b). Now we see that a
given voltage across the terminals, if the connecting wires are perfect conductors,
is eﬀectively applied to both of the impedances, and will cause currents in each
independently. Therefore the current through ˆZ1 is equal to ˆI1 = ˆV / ˆZ1. The
current in ˆZ2 is ˆI2 = ˆV / ˆZ2. It is the same voltage. Now the total current
which is supplied to the terminals is the sum of the currents in the two sections:
ˆI = ˆV / ˆZ1 + ˆV / ˆZ2. This can be written as

ˆV =
ˆI

(1/ ˆZ1) + (1/ ˆZ2)
= ˆI ˆZp.

Thus

1/ ˆZp = 1/ ˆZ1 + 1/ ˆZ2.
(25.17)

More complicated circuits can sometimes be simpliﬁed by taking pieces of
them, working out the succession of impedances of the pieces, and combining
the circuit together step by step, using the above rules. If we have any kind of
circuit with many impedances connected in all kinds of ways, and if we include
the voltages in the form of little generators having no impedance (when we pass
charge through it, the generator adds a voltage V ), then the following principles
apply: (1) At any junction, the sum of the currents into a junction is zero.
That is, all the current which comes in must come back out. (2) If we carry a
charge around any loop, and back to where it started, the net work done is zero.
These rules are called Kirchhoﬀ’s laws for electrical circuits. Their systematic
application to complicated circuits often simpliﬁes the analysis of such circuits.
We mention them here in conjunction with Eqs. (25.16) and (25.17), in case you
have already come across such circuits that you need to analyze in laboratory
work. They will be discussed again in more detail next year.

25-1626

Optics: The Principle of Least Time

26-1 Light

This is the ﬁrst of a number of chapters on the subject of electromagnetic
radiation. Light, with which we see, is only one small part of a vast spectrum of
the same kind of thing, the various parts of this spectrum being distinguished by
diﬀerent values of a certain quantity which varies. This variable quantity could be
called the “wavelength.” As it varies in the visible spectrum, the light apparently
changes color from red to violet. If we explore the spectrum systematically, from
long wavelengths toward shorter ones, we would begin with what are usually called
radiowaves. Radiowaves are technically available in a wide range of wavelengths,
some even longer than those used in regular broadcasts; regular broadcasts have
wavelengths corresponding to about 500 meters. Then there are the so-called
“short waves,” i.e., radar waves, millimeter waves, and so on. There are no actual
boundaries between one range of wavelengths and another, because nature did
not present us with sharp edges. The number associated with a given name for
the waves are only approximate and, of course, so are the names we give to the
diﬀerent ranges.
Then, a long way down through the millimeter waves, we come to what
we call the infrared, and thence to the visible spectrum. Then going in the
other direction, we get into a region which is called the ultraviolet. Where the
ultraviolet stops, the x-rays begin, but we cannot deﬁne precisely where this
is; it is roughly at 10−8 m, or 10−2 µ. These are “soft” x-rays; then there are
ordinary x-rays and very hard x-rays; then γ-rays, and so on, for smaller and
smaller values of this dimension called the wavelength.
Within this vast range of wavelengths, there are three or more regions of
approximation which are especially interesting. In one of these, a condition exists
in which the wavelengths involved are very small compared with the dimensions
of the equipment available for their study; furthermore, the photon energies,

26-1
