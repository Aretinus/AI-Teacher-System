# Ionic conductivity

We might have said: The mean time between collisions is τ. After a collision
the particle starts out with a random velocity, but it picks up an additional
velocity between collisions, which is equal to the acceleration times the time.
Since it takes the time τ to arrive at the next collision it gets there with the
velocity (F/m)τ. At the beginning of the collision it had zero velocity. So between
the two collisions it has, on the average, a velocity one-half of the ﬁnal velocity, so
the mean drift velocity is 1

2Fτ/m. (Wrong!) This result is wrong and the result
in Eq. (43.13) is right, although the arguments may sound equally satisfactory.
The reason the second result is wrong is somewhat subtle, and has to do with the
following: The argument is made as though all collisions were separated by the
mean time τ. The fact is that some times are shorter and others are longer than
the mean. Short times occur more often but make less contribution to the drift
velocity because they have less chance “to really get going.” If one takes proper
account of the distribution of free times between collisions, one can show that
there should not be the factor 1

2 that was obtained from the second argument.
The error was made in trying to relate by a simple argument the average ﬁnal
velocity to the average velocity itself. This relationship is not simple, so it is best
to concentrate on what is wanted: the average velocity itself. The ﬁrst argument
we gave determines the average velocity directly—and correctly! But we can
perhaps see now why we shall not in general try to get all of the correct numerical
coeﬃcients in our elementary derivations!
We return now to our simplifying assumption that each collision knocks out
all memory of the past motion—that a fresh start is made after each collision.
Suppose our S-molecule is a heavy object in a background of lighter molecules.
Then our S-molecule will not lose its “forward” momentum in each collision.
It would take several collisions before its motion was “randomized” again. We
should assume, instead, that at each collision—in each time τ on the average—it
loses a certain fraction of its momentum. We shall not work out the details, but
just state that the result is equivalent to replacing τ, the average collision time,
by a new—and longer—τ which corresponds to the average “forgetting time,” i.e.,
the average time to forget its forward momentum. With such an interpretation
of τ we can use our formula (43.15) for situations which are not quite as simple
as we ﬁrst assumed.

43-4 Ionic conductivity

We now apply our results to a special case. Suppose we have a gas in a vessel
in which there are also some ions—atoms or molecules with a net electric charge.

43-9We show the situation schematically in Fig. 43-2. If two opposite walls of the
container are metallic plates, we can connect them to the terminals of a battery
and thereby produce an electric ﬁeld in the gas. The electric ﬁeld will result in a
force on the ions, so they will begin to drift toward one or the other of the plates.
An electric current will be induced, and the gas with its ions will behave like a
resistor. By computing the ion ﬂow from the drift velocity we can compute the
resistance. We ask, speciﬁcally: How does the ﬂow of electric current depend on
the voltage diﬀerence V that we apply across the two plates?

b

metal

E

Area A

Gas with ni ions
per unit volume

+
−

Insulator

To battery with voltage V

Fig. 43-2. Electric current from an ionized gas.

We consider the case that our container is a rectangular box of length b and
cross-sectional area A (Fig. 43-2). If the potential diﬀerence, or voltage, from
one plate to the other is V , the electric ﬁeld E between the plates is V/b. (The
electric potential is the work done in carrying a unit charge from one plate to
the other. The force on a unit charge is E. If E is the same everywhere between
the plates, which is a good enough approximation for now, the work done on a
unit charge is just Eb, so V = Eb.) The special force on an ion of the gas is qE,
where q is the charge on the ion. The drift velocity of the ion is then µ times
this force, or

vdrift = µF = µqE = µq V

b .
(43.16)

An electric current I is the ﬂow of charge in a unit time. The electric current
to one of the plates is given by the total charge of the ions which arrive at the
plate in a unit of time. If the ions drift toward the plate with the velocity vdrift,

43-10then those which are within a distance (vdrift · T) will arrive at the plate in the
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

43-11
