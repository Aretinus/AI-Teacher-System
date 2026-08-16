# Electrical resonance

It is easy to ﬁnd the corresponding formula for ρ2. It is

ρ2 ≈1/4m2ω2
0[(ω0 −ω)2 + γ2/4].

We shall leave it to the student to show the following: if we call the maximum
height of the curve of ρ2 vs. ω one unit, and we ask for the width ∆ω of the curve,
at one half the maximum height, the full width at half the maximum height of
the curve is ∆ω = γ, supposing that γ is small. The resonance is sharper and
sharper as the frictional eﬀects are made smaller and smaller.
As another measure of the width, some people use a quantity Q which is
deﬁned as Q = ω0/γ. The narrower the resonance, the higher the Q: Q = 1000
means a resonance whose width is only 1000th of the frequency scale. The Q of
the resonance curve shown in Fig. 23-2 is 5.
The importance of the resonance phenomenon is that it occurs in many other
circumstances, and so the rest of this chapter will describe some of these other
circumstances.

23-3 Electrical resonance

The simplest and broadest technical applications of resonance are in electricity.
In the electrical world there are a number of objects which can be connected to
make electric circuits. These passive circuit elements, as they are often called,
are of three main types, although each one has a little bit of the other two mixed
in. Before describing them in greater detail, let us note that the whole idea of our
mechanical oscillator being a mass on the end of a spring is only an approximation.
All the mass is not actually at the “mass”; some of the mass is in the inertia of
the spring. Similarly, all of the spring is not at the “spring”; the mass itself has a
little elasticity, and although it may appear so, it is not absolutely rigid, and as it
goes up and down, it ﬂexes ever so slightly under the action of the spring pulling
it. The same thing is true in electricity. There is an approximation in which we
can lump things into “circuit elements” which are assumed to have pure, ideal
characteristics. It is not the proper time to discuss that approximation here, we
shall simply assume that it is true in the circumstances.
The three main kinds of circuit elements are the following. The ﬁrst is called a
capacitor (Fig. 23-4); an example is two plane metallic plates spaced a very small
distance apart by an insulating material. When the plates are charged there is
a certain voltage diﬀerence, that is, a certain diﬀerence in potential, between

23-8A

C

E

q

+ + + + + +

−−−−−−

q

B

D
RESISTOR

F
INDUCTOR

CAPACITOR

Fig. 23-4. The three passive circuit elements.

them. The same diﬀerence of potential appears between the terminals A and B,
because if there were any diﬀerence along the connecting wire, electricity would
ﬂow right away. So there is a certain voltage diﬀerence V between the plates if
there is a certain electric charge +q and −q on them, respectively. Between the
plates there will be a certain electric ﬁeld; we have even found a formula for it
(Chapters 13 and 14):
V = σd/ϵ0 = qd/ϵ0A,
(23.14)

where d is the spacing and A is the area of the plates. Note that the potential
diﬀerence is a linear function of the charge. If we do not have parallel plates,
but insulated electrodes which are of any other shape, the diﬀerence in potential
is still precisely proportional to the charge, but the constant of proportionality
may not be so easy to compute. However, all we need to know is that the
potential diﬀerence across a capacitor is proportional to the charge: V = q/C;
the proportionality constant is 1/C, where C is the capacitance of the object.
The second kind of circuit element is called a resistor; it oﬀers resistance to
the ﬂow of electrical current. It turns out that metallic wires and many other
substances resist the ﬂow of electricity in this manner: if there is a voltage
diﬀerence across a piece of some substance, there exists an electric current I =
dq/dt that is proportional to the electric voltage diﬀerence:

V = RI = R dq/dt
(23.15)

The proportionality coeﬃcient is called the resistance R. This relationship may
already be familiar to you; it is Ohm’s law.
If we think of the charge q on a capacitor as being analogous to the displace-
ment x of a mechanical system, we see that the current, I = dq/dt, is analogous
to velocity, 1/C is analogous to a spring constant k, and R is analogous to the
resistive coeﬃcient c = mγ in Eq. (23.6). Now it is very interesting that there

23-9exists another circuit element which is the analog of mass! This is a coil which
builds up a magnetic ﬁeld within itself when there is a current in it. A changing
magnetic ﬁeld develops in the coil a voltage that is proportional to dI/dt (this
is how a transformer works, in fact). The magnetic ﬁeld is proportional to a
current, and the induced voltage (so-called) in such a coil is proportional to the
rate of change of the current:

V = L dI/dt = L d2q/dt2.
(23.16)

The coeﬃcient L is the self-inductance, and is analogous to the mass in a
mechanical oscillating circuit.

R

L

C

V

Fig. 23-5. An oscillatory electrical circuit with resistance, inductance,
and capacitance.

Suppose we make a circuit in which we have connected the three circuit
elements in series (Fig. 23-5); then the voltage across the whole thing from 1
to 2 is the work done in carrying a charge through, and it consists of the sum
of several pieces: across the inductor, VL = L d2q/dt2; across the resistance,
VR = R dq/dt; across the capacitor, VC = q/C. The sum of these is equal to the
applied voltage, V :

L d2q/dt2 + R dq/dt + q/C = V (t).
(23.17)

Now we see that this equation is exactly the same as the mechanical equa-
tion (23.6), and of course it can be solved in exactly the same manner. We
suppose that V (t) is oscillatory: we are driving the circuit with a generator with
a pure sine wave oscillation. Then we can write our V (t) as a complex ˆV with
the understanding that it must be ultimately multiplied by eiωt, and the real part
taken in order to ﬁnd the true V . Likewise, the charge q can thus be analyzed,
and then in exactly the same manner as in Eq. (23.8) we write the corresponding
equation: the second derivative of ˆq is (iω)2ˆq; the ﬁrst derivative is (iω)ˆq. Thus

23-10Eq. (23.17) translates to

L(iω)2 + R(iω) + 1


ˆq = ˆV

C

or

ˆq =
ˆV

L(iω)2 + R(iω) + 1

C

which we can write in the form

ˆq = ˆV /L(ω2
0 −ω2 + iγω),
(23.18)

where ω2
0 = 1/LC and γ = R/L. It is exactly the same denominator as we had
in the mechanical case, with exactly the same resonance properties! The corre-
spondence between the electrical and mechanical cases is outlined in Table 23-1.

Table 23-1

General
Mechanical
Electrical
characteristic
property
property

indep. variable
time (t)
time (t)
dep. variable
position (x)
charge (q)
inertia
mass (m)
inductance (L)
resistance
drag coeﬀ. (c = γm)
resistance (R = γL)
stiﬀness
stiﬀness (k)
(capacitance)−1 (1/C)
resonant frequency
ω2
0 = k/m
ω2
0 = 1/LC
period
t0 = 2π
p

m/k
t0 = 2π
√

LC
ﬁgure of merit
Q = ω0/γ
Q = ω0L/R

We must mention a small technical point.
In the electrical literature, a
diﬀerent notation is used. (From one ﬁeld to another, the subject is not really
any diﬀerent, but the way of writing the notations is often diﬀerent.) First, j
is commonly used instead of i in electrical engineering, to denote √−1. (After
all, i must be the current!) Also, the engineers would rather have a relationship
between ˆV and ˆI than between ˆV and ˆq, just because they are more used to it
that way. Thus, since ˆI = dˆq/dt = iωˆq, we can just substitute ˆI/iω for ˆq and get

ˆV = (iωL + R + 1/iωC)ˆI = ˆZ ˆI.
(23.19)

23-11Another way is to rewrite Eq. (23.17), so that it looks more familiar; one often
sees it written this way:

L dI/dt + RI + (1/C)
Z t
I dt = V (t).
(23.20)

At any rate, we ﬁnd the relation (23.19) between voltage ˆV and current ˆI which
is just the same as (23.18) except divided by iω, and that produces Eq. (23.19).
The quantity R + iωL + 1/iωC is a complex number, and is used so much in
electrical engineering that it has a name: it is called the complex impedance,
ˆZ. Thus we can write ˆV = ˆZ ˆI. The reason that the engineers like to do this
is that they learned something when they were young: V = RI for resistances,
when they only knew about resistances and dc. Now they have become more
educated and have ac circuits, so they want the equation to look the same. Thus
they write ˆV = ˆZ ˆI, the only diﬀerence being that the resistance is replaced by a
more complicated thing, a complex quantity. So they insist that they cannot use
what everyone else in the world uses for imaginary numbers, they have to use a j
for that; it is a miracle that they did not insist also that the letter Z be an R!
(Then they get into trouble when they talk about current densities, for which
they also use j. The diﬃculties of science are to a large extent the diﬃculties of
notations, the units, and all the other artiﬁcialities which are invented by man,
not by nature.)

23-4 Resonance in nature

Although we have discussed the electrical case in detail, we could also bring
up case after case in many ﬁelds, and show exactly how the resonance equation
is the same. There are many circumstances in nature in which something is
“oscillating” and in which the resonance phenomenon occurs. We said that in
an earlier chapter; let us now demonstrate it. If we walk around our study,
pulling books oﬀthe shelves and simply looking through them to ﬁnd an example
of a curve that corresponds to Fig. 23-2 and comes from the same equation,
what do we ﬁnd? Just to demonstrate the wide range obtained by taking the
smallest possible sample, it takes only ﬁve or six books to produce quite a series
of phenomena which show resonances.
The ﬁrst two are from mechanics, the ﬁrst on a large scale: the atmosphere of
the whole earth. If the atmosphere, which we suppose surrounds the earth evenly

23-12
