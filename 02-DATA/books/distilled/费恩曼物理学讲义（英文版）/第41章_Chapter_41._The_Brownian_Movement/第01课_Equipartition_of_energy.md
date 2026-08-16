# Equipartition of energy

The Brownian Movement

41-1 Equipartition of energy

The Brownian movement was discovered in 1827 by Robert Brown, a botanist.
While he was studying microscopic life, he noticed little particles of plant pollens
jiggling around in the liquid he was looking at in the microscope, and he was
wise enough to realize that these were not living, but were just little pieces of
dirt moving around in the water. In fact he helped to demonstrate that this
had nothing to do with life by getting from the ground an old piece of quartz in
which there was some water trapped. It must have been trapped for millions and
millions of years, but inside he could see the same motion. What one sees is that
very tiny particles are jiggling all the time.
This was later proved to be one of the eﬀects of molecular motion, and we
can understand it qualitatively by thinking of a great push ball on a playing ﬁeld,
seen from a great distance, with a lot of people underneath, all pushing the ball
in various directions. We cannot see the people because we imagine that we are
too far away, but we can see the ball, and we notice that it moves around rather
irregularly. We also know, from the theorems that we have discussed in previous
chapters, that the mean kinetic energy of a small particle suspended in a liquid
or a gas will be 3

2kT even though it is very heavy compared with a molecule. If
it is very heavy, that means that the speeds are relatively slow, but it turns out,
actually, that the speed is not really so slow. In fact, we cannot see the speed
of such a particle very easily because although the mean kinetic energy is 3

2kT,
which represents a speed of a millimeter or so per second for an object a micron
or two in diameter, this is very hard to see even in a microscope, because the
particle continuously reverses its direction and does not get anywhere. How far
it does get we will discuss at the end of the present chapter. This problem was
ﬁrst solved by Einstein at the beginning of the 20th century.

41-1Incidentally, when we say that the mean kinetic energy of this particle is 3

2kT,
we claim to have derived this result from the kinetic theory, that is, from Newton’s
laws. We shall ﬁnd that we can derive all kinds of things—marvelous things—from
the kinetic theory, and it is most interesting that we can apparently get so much
from so little. Of course we do not mean that Newton’s laws are “little”—they
are enough to do it, really—what we mean is that we did not do very much. How
do we get so much out? The answer is that we have been perpetually making
a certain important assumption, which is that if a given system is in thermal
equilibrium at some temperature, it will also be in thermal equilibrium with
anything else at the same temperature. For instance, if we wanted to see how
a particle would move if it was really colliding with water, we could imagine
that there was a gas present, composed of another kind of particle, little ﬁne
pellets that (we suppose) do not interact with water, but only hit the particle
with “hard” collisions. Suppose the particle has a prong sticking out of it; all
our pellets have to do is hit the prong. We know all about this imaginary gas of
pellets at temperature T—it is an ideal gas. Water is complicated, but an ideal
gas is simple. Now, our particle has to be in equilibrium with the gas of pellets.
Therefore, the mean motion of the particle must be what we get for gaseous
collisions, because if it were not moving at the right speed relative to the water
but, say, was moving faster, that would mean that the pellets would pick up
energy from it and get hotter than the water. But we had started them at the
same temperature, and we assume that if a thing is once in equilibrium, it stays in
equilibrium—parts of it do not get hotter and other parts colder, spontaneously.
This proposition is true and can be proved from the laws of mechanics, but
the proof is very complicated and can be established only by using advanced
mechanics. It is much easier to prove in quantum mechanics than it is in classical
mechanics. It was proved ﬁrst by Boltzmann, but for now we simply take it to
be true, and then we can argue that our particle has to have 3

2kT of energy if it
is hit with artiﬁcial pellets, so it also must have 3

2kT when it is being hit with
water at the same temperature and we take away the pellets; so it is 3

2kT. It is a
strange line of argument, but perfectly valid.
In addition to the motion of colloidal particles for which the Brownian move-
ment was ﬁrst discovered, there are a number of other phenomena, both in the
laboratory and in other situations, where one can see Brownian movement. If we
are trying to build the most delicate possible equipment, say a very small mirror
on a thin quartz ﬁber for a very sensitive ballistic galvanometer (Fig. 41-1), the
mirror does not stay put, but jiggles all the time—all the time—so that when we

41-2S

θ

θ

L
α
I

t

(a)

(b)

Fig. 41-1. (a) A sensitive light-beam galvanometer. Light from a
source L is reﬂected from a small mirror onto a scale. (b) A schematic
record of the reading of the scale as a function of the time.

shine a light on it and look at the position of the spot, we do not have a perfect
instrument because the mirror is always jiggling. Why? Because the average
kinetic energy of rotation of this mirror has to be, on the average, 1

2kT.
What is the mean-square angle over which the mirror will wobble? Suppose we
ﬁnd the natural vibration period of the mirror by tapping on one side and seeing
how long it takes to oscillate back and forth, and we also know the moment of
inertia, I. We know the formula for the kinetic energy of rotation—it is given by
Eq. (19.8): T = 1

2Iω2. That is the kinetic energy, and the potential energy that
goes with it will be proportional to the square of the angle—it is V = 1

2αθ2. But,
if we know the period t0 and calculate from that the natural frequency ω0 = 2π/t0,
then the potential energy is V = 1

2Iω2
0θ2. Now we know that the average kinetic
energy is 1

2kT, but since it is a harmonic oscillator the average potential energy
is also 1

2kT. Thus
2Iω2
0⟨θ2⟩= 1

2kT,
or
⟨θ2⟩= kT/Iω2
0.
(41.1)

In this way we can calculate the oscillations of a galvanometer mirror, and thereby
ﬁnd what the limitations of our instrument will be. If we want to have smaller
oscillations, we have to cool the mirror. An interesting question is, where to cool
it. This depends upon where it is getting its “kicks” from. If it is through the
ﬁber, we cool it at the top—if the mirror is surrounded by a gas and is getting hit
mostly by collisions in the gas, it is better to cool the gas. As a matter of fact, if
we know where the damping of the oscillations comes from, it turns out that that
is always the source of the ﬂuctuations also, a point which we will come back to.

41-3C

L

L

C

G

R

R

(a)

(b)

Fig. 41-2. A high-Q resonant circuit. (a) Actual circuit, at tempera-
ture T. (b) Artiﬁcial circuit, with an ideal (noiseless) resistance and a
“noise generator” G.

The same thing works, amazingly enough, in electrical circuits. Suppose that
we are building a very sensitive, accurate ampliﬁer for a deﬁnite frequency and
have a resonant circuit (Fig. 41-2) in the input so as to make it very sensitive to
this certain frequency, like a radio receiver, but a really good one. Suppose we
wish to go down to the very lowest limit of things, so we take the voltage, say
oﬀthe inductance, and send it into the rest of the ampliﬁer. Of course, in any
circuit like this, there is a certain amount of loss. It is not a perfect resonant
circuit, but it is a very good one and there is a little resistance, say (we put
the resistor in so we can see it, but it is supposed to be small). Now we would
like to ﬁnd out: How much does the voltage across the inductance ﬂuctuate?
Answer: We know that 1

2LI2 is the “kinetic energy”—the energy associated with
a coil in a resonant circuit (Chapter 25). Therefore the mean value of 1

2LI2 is
equal to 1

2kT—that tells us what the rms current is and we can ﬁnd out what
the rms voltage is from the rms current. For if we want the voltage across the
inductance the formula is ˆVL = iωLˆI, and the mean absolute square voltage on
the inductance is ⟨V 2
L⟩= L2ω2
0⟨I2⟩, and putting in 1

2L⟨I2⟩= 1

2kT, we obtain

⟨V 2
L⟩= Lω2
0kT.
(41.2)

So now we can design circuits and tell when we are going to get what is called
Johnson noise, the noise associated with thermal ﬂuctuations!
Where do the ﬂuctuations come from this time? They come again from the
resistor—they come from the fact that the electrons in the resistor are jiggling
around because they are in thermal equilibrium with the matter in the resistor,
and they make ﬂuctuations in the density of electrons. They thus make tiny
electric ﬁelds which drive the resonant circuit.
Electrical engineers represent the answer in another way. Physically, the
resistor is eﬀectively the source of noise. However, we may replace the real circuit

41-4having an honest, true physical resistor which is making noise, by an artiﬁcial
circuit which contains a little generator that is going to represent the noise, and
now the resistor is otherwise ideal—no noise comes from it. All the noise is
in the artiﬁcial generator. And so if we knew the characteristics of the noise
generated by a resistor, if we had the formula for that, then we could calculate
what the circuit is going to do in response to that noise. So, we need a formula
for the noise ﬂuctuations. Now the noise that is generated by the resistor is at
all frequencies, since the resistor by itself is not resonant. Of course the resonant
circuit only “listens” to the part that is near the right frequency, but the resistor
has many diﬀerent frequencies in it. We may describe how strong the generator
is, as follows: The mean power that the resistor would absorb if it were connected
directly across the noise generator would be ⟨E2⟩/R, if E were the voltage from
the generator. But we would like to know in more detail how much power there
is at every frequency. There is very little power in any one frequency; it is a
distribution. Let P(ω) dω be the power that the generator would deliver in the
frequency range dω into the very same resistor. Then we can prove (we shall
prove it for another case, but the mathematics is exactly the same) that the
power comes out
P(ω) dω = (2/π)kT dω,
(41.3)

and is independent of the resistance when put this way.

41-2 Thermal equilibrium of radiation

Now we go on to consider a still more advanced and interesting proposition
that is as follows. Suppose we have a charged oscillator like those we were talking
about when we were discussing light, let us say an electron oscillating up and
down in an atom. If it oscillates up and down, it radiates light. Now suppose that
this oscillator is in a very thin gas of other atoms, and that from time to time
the atoms collide with it. Then in equilibrium, after a long time, this oscillator
will pick up energy such that its kinetic energy of oscillation is 1

2kT, and since
it is a harmonic oscillator, its entire energy will become kT. That is, of course,
a wrong description so far, because the oscillator carries electric charge, and if
it has an energy kT it is shaking up and down and radiating light. Therefore
it is impossible to have equilibrium of real matter alone without the charges
in it emitting light, and as light is emitted, energy ﬂows away, the oscillator
loses its kT as time goes on, and thus the whole gas which is colliding with the

41-5
