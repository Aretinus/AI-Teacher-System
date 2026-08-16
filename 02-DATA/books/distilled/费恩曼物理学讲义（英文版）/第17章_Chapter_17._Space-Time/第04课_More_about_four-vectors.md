# More about four-vectors

example, Alpha Centauri were moving, an observer there would not agree with
us because he would put his axes at an angle, and his “now” would be a diﬀerent
time. We have already talked about the fact that simultaneity is not a unique
thing.
There are fortune tellers, or people who tell us they can know the future, and
there are many wonderful stories about the man who suddenly discovers that
he has knowledge about the aﬀective future. Well, there are lots of paradoxes
produced by that because if we know something is going to happen, then we can
make sure we will avoid it by doing the right thing at the right time, and so on.
But actually there is no fortune teller who can even tell us the present! There
is no one who can tell us what is really happening right now, at any reasonable
distance, because that is unobservable. We might ask ourselves this question,
which we leave to the student to try to answer: Would any paradox be produced
if it were suddenly to become possible to know things that are in the space-like
intervals of region 1?

17-4 More about four-vectors

Let us now return to our consideration of the analogy of the Lorentz transfor-
mation and rotations of the space axes. We have learned the utility of collecting
together other quantities which have the same transformation properties as the
coordinates, to form what we call vectors, directed lines. In the case of ordinary
rotations, there are many quantities that transform the same way as x, y, and z
under rotation: for example, the velocity has three components, an x, y, and z-
component; when seen in a diﬀerent coordinate system, none of the components
is the same, instead they are all transformed to new values. But, somehow or
other, the velocity “itself” has a greater reality than do any of its particular
components, and we represent it by a directed line.
We therefore ask: Is it or is it not true that there are quantities which
transform, or which are related, in a moving system and in a nonmoving system,
in the same way as x, y, z, and t? From our experience with vectors, we know that
three of the quantities, like x, y, z, would constitute the three components of an
ordinary space-vector, but the fourth quantity would look like an ordinary scalar
under space rotation, because it does not change so long as we do not go into
a moving coordinate system. Is it possible, then, to associate with some of our
known “three-vectors” a fourth object, that we could call the “time component,”
in such a manner that the four objects together would “rotate” the same way

17-8as position and time in space-time? We shall now show that there is, indeed, at
least one such thing (there are many of them, in fact): the three components of
momentum, and the energy as the time component, transform together to make
what we call a “four-vector.” In demonstrating this, since it is quite inconvenient
to have to write c’s everywhere, we shall use the same trick concerning units of
the energy, the mass, and the momentum, that we used in Eq. (17.4). Energy
and mass, for example, diﬀer only by a factor c2 which is merely a question of
units, so we can say energy is the mass. Instead of having to write the c2, we
put E = m, and then, of course, if there were any trouble we would put in the
right amounts of c so that the units would straighten out in the last equation,
but not in the intermediate ones.
Thus our equations for energy and momentum are

E = m = m0/
p

1 −v2,

1 −v2.
(17.6)

p = mv = m0v/
p

Also in these units, we have
E2 −p2 = m2
0.
(17.7)

For example, if we measure energy in electron volts, what does a mass of 1 electron
volt mean? It means the mass whose rest energy is 1 electron volt, that is, m0c2

is one electron volt. For example, the rest mass of an electron is 0.511 × 106 eV.
Now what would the momentum and energy look like in a new coordinate
system? To ﬁnd out, we shall have to transform Eq. (17.6), which we can do
because we know how the velocity transforms. Suppose that, as we measure it,
an object has a velocity v, but we look upon the same object from the point of
view of a space ship which itself is moving with a velocity u, and in that system
we use a prime to designate the corresponding thing. In order to simplify things
at ﬁrst, we shall take the case that the velocity v is in the direction of u. (Later,
we can do the more general case.) What is v′, the velocity as seen from the space
ship? It is the composite velocity, the “diﬀerence” between v and u. By the law
which we worked out before,

v′ = v −u

1 −uv .
(17.8)

Now let us calculate the new energy E′, the energy as the fellow in the space
ship would see it. He would use the same rest mass, of course, but he would

17-9use v′ for the velocity. What we have to do is square v′, subtract it from one,
take the square root, and take the reciprocal:

v′2 = v2 −2uv + u2

1 −2uv + u2v2 ,

1 −v′2 = 1 −2uv + u2v2 −v2 + 2uv −u2

1 −2uv + u2v2
,

= 1 −v2 −u2 + u2v2

1 −2uv + u2v2
,

= (1 −v2)(1 −u2)

(1 −uv)2
.

Therefore
√

1 −v′2 =
1 −uv
√

1 −v2√

1 −u2 .
(17.9)

The energy E′ is then simply m0 times the above expression. But we want
to express the energy in terms of the unprimed energy and momentum, and we
note that

1 −v2) −(m0v/
√

1 −u2 = (m0/
√

1 −v2)u
√

E′ =
m0 −m0uv
√

1 −v2√

1 −u2
,

or

E′ = E −upx
√

1 −u2 ,
(17.10)

which we recognize as being exactly of the same form as

t′ =
t −ux
√

1 −u2 .

Next we must ﬁnd the new momentum p′
x. This is just the energy E′ times v′,
and is also simply expressed in terms of E and p:

p′
x = E′v′ =
m0(1 −uv)
√

1 −u2 ·
v −u
(1 −uv) =
m0v −m0u
√

1 −v2√

1 −v2√

1 −u2 .

Thus

p′
x = px −uE
√

1 −u2 ,
(17.11)

17-10which we recognize as being of precisely the same form as

x′ =
x −ut
√

1 −u2 .

Thus the transformations for the new energy and momentum in terms of the
old energy and momentum are exactly the same as the transformations for t′ in
terms of t and x, and x′ in terms of x and t: all we have to do is, every time we
see t in (17.4) substitute E, and every time we see x substitute px, and then the
equations (17.4) will become the same as Eqs. (17.10) and (17.11). This would
imply, if everything works right, an additional rule that p′
y = py and that p′
z = pz.
To prove this would require our going back and studying the case of motion up
and down. Actually, we did study the case of motion up and down in the last
chapter. We analyzed a complicated collision and we noticed that, in fact, the
transverse momentum is not changed when viewed from a moving system; so we
have already veriﬁed that p′
y = py and p′
z = pz. The complete transformation,
then, is

p′
x = px −uE
√

1 −u2 ,

p′
y = py,

(17.12)

p′
z = pz,

E′ = E −upx
√

1 −u2 .

In these transformations, therefore, we have discovered four quantities which
transform like x, y, z, and t, and which we call the four-vector momentum. Since
the momentum is a four-vector, it can be represented on a space-time diagram
of a moving particle as an “arrow” tangent to the path, as shown in Fig. 17-4.
This arrow has a time component equal to the energy, and its space components

t

pµ

x

Fig. 17-4. The four-vector momentum of a particle.

17-11represent its three-vector momentum; this arrow is more “real” than either the
energy or the momentum, because those just depend on how we look at the
diagram.

17-5 Four-vector algebra

The notation for four-vectors is diﬀerent than it is for three-vectors.
In
the case of three-vectors, if we were to talk about the ordinary three-vector
momentum we would write it p. If we wanted to be more speciﬁc, we could say
it has three components which are, for the axes in question, px, py, and pz, or
we could simply refer to a general component as pi, and say that i could either
be x, y, or z, and that these are the three components; that is, imagine that i is
any one of three directions, x, y, or z. The notation that we use for four-vectors
is analogous to this: we write pµ for the four-vector, and µ stands for the four
possible directions t, x, y, or z.
We could, of course, use any notation we want; do not laugh at notations;
invent them, they are powerful.
In fact, mathematics is, to a large extent,
invention of better notations. The whole idea of a four-vector, in fact, is an
improvement in notation so that the transformations can be remembered easily.
Aµ, then, is a general four-vector, but for the special case of momentum, the pt
is identiﬁed as the energy, px is the momentum in the x-direction, py is that in
the y-direction, and pz is that in the z-direction. To add four-vectors, we add
the corresponding components.
If there is an equation among four-vectors, then the equation is true for each
component. For instance, if the law of conservation of three-vector momentum is
to be true in particle collisions, i.e., if the sum of the momenta for a large number
of interacting or colliding particles is to be a constant, that must mean that the
sums of all momenta in the x-direction, in the y-direction, and in the z-direction,
for all the particles, must each be constant. This law alone would be impossible
in relativity because it is incomplete; it is like talking about only two of the
components of a three-vector. It is incomplete because if we rotate the axes, we
mix the various components, so we must include all three components in our law.
Thus, in relativity, we must complete the law of conservation of momentum by
extending it to include the time component. This is absolutely necessary to go
with the other three, or there cannot be relativistic invariance. The conservation
of energy is the fourth equation which goes with the conservation of momentum

17-12
