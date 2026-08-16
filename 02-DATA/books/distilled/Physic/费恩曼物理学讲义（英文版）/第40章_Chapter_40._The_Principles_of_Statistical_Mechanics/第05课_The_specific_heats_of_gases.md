# The specific heats of gases

and there is only one function involved, the probability of diﬀerent magnitudes.
We have the distribution of the z-component, and therefore we can get the
distribution of the other components from it. The result is that the probability
is still proportional to e−K.E/kT , but now the kinetic energy involves three parts,
mv2
x/2, mv2
y/2, and mv2
z/2, summed in the exponent. Or we can write it as a
product:

f(vx, vy, vz) dvx dvy dvz

∝e−mv2
x/2kT · e−mv2
y/2kT · e−mv2
z/2kT dvx dvy dvz.
(40.9)

You can see that this formula must be right because, ﬁrst, it is a function only
of v2, as required, and second, the probabilities of various values of vz obtained
by integrating over all vx and vy is just (40.7). But this one function (40.9) can
do both those things!

40-5 The speciﬁc heats of gases

Now we shall look at some ways to test the theory, and to see how successful
is the classical theory of gases. We saw earlier that if U is the internal energy
of N molecules, then PV = NkT = (γ −1)U holds, sometimes, for some gases,
maybe. If it is a monatomic gas, we know this is also equal to 2

3 of the kinetic
energy of the center-of-mass motion of the atoms. If it is a monatomic gas, then
the kinetic energy is equal to the internal energy, and therefore γ −1 = 2

3. But
suppose it is, say, a more complicated molecule, that can spin and vibrate, and
let us suppose (it turns out to be true according to classical mechanics) that
the energies of the internal motions are also proportional to kT. Then at a
given temperature, in addition to kinetic energy 3

2kT, it has internal vibrational
and rotational energies. So the total U includes not just the kinetic energy, but
also the rotational and vibrational energies, and we get a diﬀerent value of γ.
Technically, the best way to measure γ is by measuring the speciﬁc heat, which
is the change in energy with temperature. We will return to that approach later.
For our present purposes, we may suppose γ is found experimentally from the
PV γ curve for adiabatic compression.
Let us make a calculation of γ for some cases. First, for a monatomic gas U
is the total energy, the same as the kinetic energy, and we know already that γ
should be 5

3. For a diatomic gas, we may take, as an example, oxygen, hydrogen
iodide, hydrogen, etc., and suppose that the diatomic gas can be represented

40-13as two atoms held together by some kind of force like the one of Fig. 40-3. We
may also suppose, and it turns out to be quite true, that at the temperatures
that are of interest for the diatomic gas, the pairs of atoms tend strongly to be
separated by r0, the distance of potential minimum. If this were not true, if the
probability were not strongly varying enough to make the great majority sit near
the bottom, we would have to remember that oxygen gas is a mixture of O2 and
single oxygen atoms in a nontrivial ratio. We know that there are, in fact, very
few single oxygen atoms, which means that the potential energy minimum is very
much greater in magnitude than kT, as we have seen. Since they are clustered
strongly around r0, the only part of the curve that is needed is the part near
the minimum, which may be approximated by a parabola. A parabolic potential
implies a harmonic oscillator, and in fact, to an excellent approximation, the
oxygen molecule can be represented as two atoms connected by a spring.
Now what is the total energy of this molecule at temperature T? We know
that for each of the two atoms, each of the kinetic energies should be 3

2kT, so
the kinetic energy of both of them is 3

2kT + 3

2kT. We can also put this in a
diﬀerent way: the same 3

2 plus 3

2 can also be looked at as kinetic energy of the
center of mass ( 3

2), kinetic energy of rotation ( 2

2), and kinetic energy of vibration
( 1

2). We know that the kinetic energy of vibration is 1

2, since there is just one
dimension involved and each degree of freedom has 1

2kT. Regarding the rotation,
it can turn about either of two axes, so there are two independent motions. We
assume that the atoms are some kind of points, and cannot spin about the line
joining them; this is something to bear in mind, because if we get a disagreement,
maybe that is where the trouble is. But we have one more thing, which is the
potential energy of vibration; how much is that? In a harmonic oscillator the
average kinetic energy and average potential energy are equal, and therefore the
potential energy of vibration is 1

2kT, also. The grand total of energy is U = 7

2kT,
or kT is 2

7U per atom. That means, then, that γ is 9

7 instead of 5

3, i.e., γ = 1.286.
We may compare these numbers with the relevant measured values shown
in Table 40-1.
Looking ﬁrst at helium, which is a monatomic gas, we ﬁnd
very nearly 5

3, and the error is probably experimental, although at such a low
temperature there may be some forces between the atoms. Krypton and argon,
both monatomic, agree also within the accuracy of the experiment.
We turn to the diatomic gases and ﬁnd hydrogen with 1.404, which does not
agree with the theory, 1.286. Oxygen, 1.399, is very similar, but again not in
agreement. Hydrogen iodide again is similar at 1.40. It begins to look as though
the right answer is 1.40, but it is not, because if we look further at bromine

40-14Table 40-1

Values of the speciﬁc heat ratio, γ, for various gases

Gas
T (◦C)
γ

He
−180
1.660
Kr
1.68
Ar
1.668
H2
1.404
O2
1.399
HI
1.40
Br2
1.32
I2
1.30
NH3
1.310
C2H6
1.22

we see 1.32, and at iodine we see 1.30. Since 1.30 is reasonably close to 1.286,
iodine may be said to agree rather well, but oxygen is far oﬀ. So here we have a
dilemma. We have it right for one molecule, we do not have it right for another
molecule, and we may need to be pretty ingenious in order to explain both.
Let us look further at a still more complicated molecule with large numbers
of parts, for example, C2H6, which is ethane. It has eight diﬀerent atoms, and
they are all vibrating and rotating in various combinations, so the total amount
of internal energy must be an enormous number of kT’s, at least 12kT for kinetic
energy alone, and γ −1 must be very close to zero, or γ almost exactly 1. In fact,
it is lower, but 1.22 is not so much lower, and is higher than the 1 1

12 calculated
from the kinetic energy alone, and it is just not understandable!
Furthermore, the whole mystery is deep, because the diatomic molecule
cannot be made rigid by a limit. Even if we made the couplings stiﬀer indeﬁnitely,
although it might not vibrate much, it would nevertheless keep vibrating. The
vibrational energy inside is still kT, since it does not depend on the strength of
the coupling. But if we could imagine absolute rigidity, stopping all vibration to
eliminate a variable, then we would get U = 5

2kT and γ = 1.40 for the diatomic
case. This looks good for H2 or O2. On the other hand, we would still have
problems, because γ for either hydrogen or oxygen varies with temperature! From
the measured values shown in Fig. 40-6, we see that for H2, γ varies from about
1.6 at −185◦C to 1.3 at 2000◦C. The variation is more substantial in the case of

40-15γ

1.6

H2
O2

1.4

1.286

1.2

1.0

TEMPERATURE (◦C)

Fig. 40-6. Experimental values of γ as a function of temperature for
hydrogen and oxygen. Classical theory predicts γ = 1.286, independent
of temperature.

hydrogen than for oxygen, but nevertheless, even in oxygen, γ tends deﬁnitely to
go up as we go down in temperature.

40-6 The failure of classical physics

So, all in all, we might say that we have some diﬃculty. We might try some
force law other than a spring, but it turns out that anything else will only make
γ higher. If we include more forms of energy, γ approaches unity more closely,
contradicting the facts. All the classical theoretical things that one can think of
will only make it worse. The fact is that there are electrons in each atom, and
we know from their spectra that there are internal motions; each of the electrons
should have at least 1

2kT of kinetic energy, and something for the potential energy,
so when these are added in, γ gets still smaller. It is ridiculous. It is wrong.
The ﬁrst great paper on the dynamical theory of gases was by Maxwell in
1859. On the basis of ideas we have been discussing, he was able accurately to
explain a great many known relations, such as Boyle’s law, the diﬀusion theory,
the viscosity of gases, and things we shall talk about in the next chapter. He listed
all these great successes in a ﬁnal summary, and at the end he said, “Finally, by
establishing a necessary relation between the motions of translation and rotation
(he is talking about the 1

2kT theorem) of all particles not spherical, we proved
that a system of such particles could not possibly satisfy the known relation

40-16
