# Einstein's laws of radiation

diﬀerent energy, the activation energy, governs the rate of reaction through an
exponential factor.
Furthermore, A∗is not a fundamental constant like W. Suppose that at the
surface of the wall—or at some other place—A and B could temporarily stick
there in such a way that they could combine more easily. In other words, we might
ﬁnd a “tunnel” through the hill, or perhaps a lower hill. By the conservation
of energy, when we are all ﬁnished we have still made AB out of A and B,
so the energy diﬀerence W will be quite independent of the way the reaction
occurred, but the activation energy A∗will depend very much on the way the
reaction occurs. This is why the rates of chemical reactions are very sensitive to
outside conditions. We can change the rate by putting in a surface of a diﬀerent
kind, we can put it in a “diﬀerent barrel” and it will go at a diﬀerent rate, if
it depends on the nature of the surface. Or if we put in a third kind of object
it may change the rate very much; some things produce enormous changes in
rate simply by changing the A∗a little bit—they are called catalysts. A reaction
might practically not occur at all because A∗is too big at the given temperature,
but when we put in this special stuﬀ, the catalyst, then the reaction goes very
fast indeed, because A∗is reduced.
Incidentally, there is some trouble with such a reaction, A plus B, making
AB, because we cannot conserve both energy and momentum when we try to put
two objects together to make one that is more stable. Therefore, we need at least
a third object C, so the actual reaction is much more complicated. The forward
rate would involve the product nAnBnC, and it might seem that our formula is
going wrong, but no! When we look at the rate at which AB goes the other way,
we ﬁnd that it also needs to collide with C, so there is an nABnC in the reverse
rate; the nC’s cancel out in the formula for the equilibrium concentrations. The
law of equilibrium, (42.9), which we ﬁrst wrote down is absolutely guaranteed to
be true, no matter what the mechanism of the reaction may be!

42-5 Einstein’s laws of radiation

We now turn to an interesting analogous situation having to do with the
blackbody radiation law. In the last chapter we worked out the distribution law
for the radiation in a cavity the way Planck did, considering the radiation from
an oscillator. The oscillator had to have a certain mean energy, and since it was
oscillating, it would radiate and would keep pumping radiation into the cavity
until it piled up enough radiation to balance the absorption and emission. In

42-13that way we found that the intensity of radiation at frequency ω was given by
the formula

I(ω) dω =
ℏω3 dω
π2c2(eℏω/kT −1).
(42.12)

This result involved the assumption that the oscillator which was generating
the radiation had deﬁnite, equally spaced energy levels. We did not say that
light had to be a photon or anything like that. There was no discussion about
how, when an atom goes from one level to another, the energy must come out
in one unit of energy, ℏω, in the form of light. Planck’s original idea was that
the matter was quantized but not the light: material oscillators cannot take up
just any energy, but have to take it in lumps. Furthermore, the trouble with the
derivation is that it was partially classical. We calculated the rate of radiation
from an oscillator according to classical physics; then we turned around and
said, “No, this oscillator has a lot of energy levels.” So gradually, in order to
ﬁnd the right result, the completely quantum-mechanical result, there was a
slow development which culminated in the quantum mechanics of 1927. But in
the meantime, there was an attempt by Einstein to convert Planck’s viewpoint
that only oscillators of matter were quantized, to the idea that light was really
photons and could be considered in a certain way as particles with energy ℏω.
Furthermore, Bohr had pointed out that any system of atoms has energy levels,
but they are not necessarily equally spaced like Planck’s oscillator. And so it
became necessary to rederive or at least rediscuss the radiation law from a more
completely quantum-mechanical viewpoint.
Einstein assumed that Planck’s ﬁnal formula was right, and he used that
formula to obtain some new information, previously unknown, about the inter-
action of radiation with matter. His discussion went as follows: Consider any
two of the many energy levels of an atom, say the mth level and the nth level
(Fig. 42-2). Now Einstein proposed that when such an atom has light of the right
frequency shining on it, it can absorb that photon of light and make a transition
from state n to state m, and that the probability that this occurs per second

m

Spontaneous emission

Absorption
Induced emission

n

Fig. 42-2. Transitions between two energy levels of an atom.

42-14depends upon the two levels, of course, but is proportional to how intense the
light is that is shining on it. Let us call the proportionality constant Bnm, merely
to remind us that this is not a universal constant of nature, but depends on the
particular pair of levels: some levels are easy to excite; some levels are hard to
excite. Now what is the formula going to be for the rate of emission from m to n?
Einstein proposed that this must have two parts to it. First, even if there were
no light present, there would be some chance that an atom in an excited state
would fall to a lower state, emitting a photon; this we call spontaneous emission.
It is analogous to the idea that an oscillator with a certain amount of energy,
even in classical physics, does not keep that energy, but loses it by radiation.
Thus the analog of spontaneous radiation of a classical system is that if the atom
is in an excited state there is a certain probability Amn, which depends on the
levels again, for it to go down from m to n, and this probability is independent
of whether light is shining on the atom or not. But then Einstein went further,
and by comparison with the classical theory and by other arguments, concluded
that emission was also inﬂuenced by the presence of light—that when light of
the right frequency is shining on an atom, it has an increased rate of emitting a
photon that is proportional to the intensity of the light, with a proportionality
constant Bmn. Later, if we deduce that this coeﬃcient is zero, then we will have
found that Einstein was wrong. Of course we will ﬁnd he was right.
Thus Einstein assumed that there are three kinds of processes: an absorption
proportional to the intensity of light, an emission proportional to the inten-
sity of light, called induced emission or sometimes stimulated emission, and a
spontaneous emission independent of light.
Now suppose that we have, in equilibrium at temperature T, a certain number
of atoms Nn in the state n and another number Nm in the state m. Then the
total number of atoms that are going from n to m is the number that are in the
state n times the rate per second that, if one is in n, it goes up to m. So we have
a formula for the number that are going from n to m per second:

Rn→m = NnBnmI(ω).
(42.13)

The number that will go from m to n is expressed in the same manner, as the
number Nm that are in m, times the chance per second that each one goes down
to n. This time our expression is

Rm→n = Nm[Amn + BmnI(ω)].
(42.14)

42-15Now we shall suppose that in thermal equilibrium the number of atoms going up
must equal the number coming down. That is one way, at least, in which the
number will be sure to stay constant in each level.* So we take these two rates to
be equal at equilibrium. But we have one other piece of information: we know how
large Nm is compared with Nn—the ratio of those two is e−(Em−En)/kT . Now
Einstein assumed that the only light which is eﬀective in making the transition
from n to m is the light which has the frequency corresponding to the energy
diﬀerence, so Em −En = ℏω in all our formulas. Thus

Nm = Nne−ℏω/kT .
(42.15)

Thus if we set the two rates equal: NnBnmI(ω) = Nm[Amn + BmnI(ω)], and
divide by Nm, we get

BnmI(ω)eℏω/kT = Amn + BmnI(ω).
(42.16)

From this equation, we can calculate I(ω). It is simply

I(ω) =
Amn
Bnmeℏω/kT −Bmn
.
(42.17)

But Planck has already told us that the formula must be (42.12). Therefore
we can deduce something: First, that Bnm must equal Bmn, since otherwise we
cannot get the (eℏω/kT −1). So Einstein discovered some things that he did
not know how to calculate, namely that the induced emission probability and the
absorption probability must be equal. This is interesting. And furthermore, in
order for (42.17) and (42.12) to agree,

Amn/Bmn
must be
ℏω3/π2c2.
(42.18)

So if we know, for instance, the absorption rate for a given level, we can deduce
the spontaneous emission rate and the induced emission rate, or any combination.
This is as far as Einstein or anyone else could go using such arguments. To
actually compute the absolute spontaneous emission rate or the other rates for
any speciﬁc atomic transition, of course, requires a knowledge of the machinery
of the atom, called quantum electrodynamics, which was not discovered until
eleven years later. This work of Einstein was done in 1916.

* This is not the only way one can arrange to keep the numbers of atoms in the various levels
constant, but it is the way it actually works. That every process must, in thermal equilibrium,
be balanced by its exact opposite is called the principle of detailed balancing.

42-16h

m

Blue

Red, laser light

n

Fig. 42-3. By exciting, say by blue light, a higher state h, which may
emit a photon leaving atoms in state m, the number in this state m
becomes suﬃciently large to start laser action.

The possibility of induced emission has, today, found interesting applications.
If there is light present, it will tend to induce the downward transition. The
transition then adds its ℏω to the available light energy, if there were some atoms
sitting in the upper state. Now we can arrange, by some nonthermal method, to
have a gas in which the number in the state m is very much greater than the
number in the state n. This is far out of equilibrium, and so is not given by the
formula e−ℏω/kT , which is for equilibrium. We can even arrange it so that the
number in the upper state is very large, while the number in the lower state is
practically zero. Then light which has the frequency corresponding to the energy
diﬀerence Em −En will not be strongly absorbed, because there are not many
atoms in state n to absorb it. On the other hand, when that light is present, it
will induce the emission from this upper state! So, if we had a lot of atoms in
the upper state, there would be a sort of chain reaction, in which, the moment
the atoms began to emit, more would be caused to emit, and the whole lot of
them would dump down together. This is what is called a laser, or, in the case
of the far infrared, a maser.

Various tricks can be used to obtain the atoms in state m. There may be
higher levels to which the atoms can get if we shine in a strong beam of light of
high frequency. From these high levels, they may trickle down, emitting various
photons, until they all get stuck in the state m. If they tend to stay in the
state m without emitting, the state is called metastable. And then they are
all dumped down together by induced emissions. One more technical point—if
we put this system in an ordinary box, it would radiate in so many diﬀerent
directions spontaneously, compared with the induced eﬀect, that we would still
be in trouble. But we can enhance the induced eﬀect, increase its eﬃciency, by

42-17putting nearly perfect mirrors on each side of the box, so that the light which is
emitted gets another chance, and another chance, and another chance, to induce
more emission. Although the mirrors are almost one hundred percent reﬂecting,
there is a slight amount of transmission of the mirror, and a little light gets out.
In the end, of course, from the conservation of energy, all the light goes out in
a nice uniform straight direction which makes the strong light beams that are
possible today with lasers.

42-1843

Diffusion

43-1 Collisions between molecules

We have considered so far only the molecular motions in a gas which is in
thermal equilibrium. We want now to discuss what happens when things are
near, but not exactly in, equilibrium. In a situation far from equilibrium, things
are extremely complicated, but in a situation very close to equilibrium we can
easily work out what happens. To see what happens, we must, however, return
to the kinetic theory. Statistical mechanics and thermodynamics deal with the
equilibrium situation, but away from equilibrium we can only analyze what occurs
atom by atom, so to speak.
As a simple example of a nonequilibrium circumstance, we shall consider
the diﬀusion of ions in a gas. Suppose that in a gas there is a relatively small
concentration of ions—electrically charged molecules. If we put an electric ﬁeld
on the gas, then each ion will have a force on it which is diﬀerent from the forces
on the neutral molecules of the gas. If there were no other molecules present, an
ion would have a constant acceleration until it reached the wall of the container.
But because of the presence of the other molecules, it cannot do that; its velocity
increases only until it collides with a molecule and loses its momentum. It starts
again to pick up more speed, but then it loses its momentum again. The net
eﬀect is that an ion works its way along an erratic path, but with a net motion in
the direction of the electric force. We shall see that the ion has an average “drift”
with a mean speed which is proportional to the electric ﬁeld—the stronger the
ﬁeld, the faster it goes. While the ﬁeld is on, and while the ion is moving along, it
is, of course, not in thermal equilibrium, it is trying to get to equilibrium, which
is to be sitting at the end of the container. By means of the kinetic theory we
can compute the drift velocity.
It turns out that with our present mathematical abilities we cannot really
compute precisely what will happen, but we can obtain approximate results

43-1
