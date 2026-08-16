# Diffraction of light by a screen

(recalling that η = N ∆z). Putting Eq. (31.26) into the left-hand side of (31.25),
we get

2α N ∆z qe

2ϵ0c
Es(at z) · v(ret by z/c).

However, Es(at z) is Es(at atoms) retarded by z/c. Since the average is inde-
pendent of time, it is the same now as retarded by z/c, or is Es(at atoms) · v,
the same average that appears on the right-hand side of (31.25). The two sides
are therefore equal if
α
ϵ0c = 1,
or
α = ϵ0c.
(31.27)

We have discovered that if energy is to be conserved, the energy carried in an
electric wave per unit area and per unit time (or what we have called the intensity)
must be given by ϵ0cE2. If we call the intensity S, we have







intensity
or
energy/area/time

= ϵ0cE2,
(31.28)

S =



where the bar means the time average. We have a nice bonus result from our
theory of the refractive index!

31-6 Diﬀraction of light by a screen

It is now a good time to take up a somewhat diﬀerent matter which we can
handle with the machinery of this chapter. In the last chapter we said that
when you have an opaque screen and the light can come through some holes, the
distribution of intensity—the diﬀraction pattern—could be obtained by imagining
instead that the holes are replaced by sources (oscillators) uniformly distributed
over the hole. In other words, the diﬀracted wave is the same as though the hole
were a new source. We have to explain the reason for that, because the hole is, of
course, just where there are no sources, where there are no accelerating charges.
Let us ﬁrst ask: “What is an opaque screen?” Suppose we have a completely
opaque screen between a source S and an observer at P, as in Fig. 31-6(a). If the
screen is “opaque” there is no ﬁeld at P. Why is there no ﬁeld there? According
to the basic principles we should obtain the ﬁeld at P as the ﬁeld Es of the
source delayed, plus the ﬁeld from all the other charges around. But, as we
have seen above, the charges in the screen will be set in motion by the ﬁeld Es,

31-17(a)

S

P

E = Es

E = 0

opaque screen

(b)

S

P

E = Es + Ewall

E = Es

hole

wall

(c)

S

plug

P

E = Es + E′
wall + E′
plug = 0

E = Es

wall

Fig. 31-6. Diﬀraction by a screen.

and these motions generate a new ﬁeld which, if the screen is opaque, must
exactly cancel the ﬁeld Es on the back side of the screen. You say: “What a
miracle that it balances exactly! Suppose it was not exactly right!” If it were
not exactly right (remember that this opaque screen has some thickness), the
ﬁeld toward the rear part of the screen would not be exactly zero. So, not
being zero, it would set into motion some other charges in the material of
the screen, and thus make a little more ﬁeld, trying to get the total balanced
out. So if we make the screen thick enough, there is no residual ﬁeld, because
there is enough opportunity to ﬁnally get the thing quieted down. In terms
of our formulas above we would say that the screen has a large and imaginary
index, so the wave is absorbed exponentially as it goes through. You know,
of course, that a thin enough sheet of the most opaque material, even gold, is
transparent.
Now let us see what happens with an opaque screen which has holes in it, as
in Fig. 31-6(b). What do we expect for the ﬁeld at P? The ﬁeld at P can be
represented as a sum of two parts—the ﬁeld due to the source S plus the ﬁeld
due to the wall, i.e., due to the motions of the charges in the walls. We might
expect the motions of the charges in the walls to be complicated, but we can ﬁnd
out what ﬁelds they produce in a rather simple way.

31-18Suppose that we were to take the same screen, but plug up the holes, as
indicated in part (c) of the ﬁgure. We imagine that the plugs are of exactly
the same material as the wall. Mind you, the plugs go where the holes were in
case (b). Now let us calculate the ﬁeld at P. The ﬁeld at P is certainly zero in
case (c), but it is also equal to the ﬁeld from the source plus the ﬁeld due to
all the motions of the atoms in the walls and in the plugs. We can write the
following equations:

Case (b):
Eat P = Es + Ewall,

Case (c):
E′
at P = 0 = Es + E′
wall + E′
plug,

where the primes refer to the case where the plugs are in place, but Es is, of
course, the same in both cases. Now if we subtract the two equations, we get

Eat P = (Ewall −E′
wall) −E′
plug.

Now if the holes are not too small (say many wavelengths across), we would not
expect the presence of the plugs to change the ﬁelds which arrive at the walls
except possibly for a little bit around the edges of the holes. Neglecting this
small eﬀect, we can set Ewall = E′
wall and obtain that

Eat P = −E′
plug.

We have the result that the ﬁeld at P when there are holes in a screen (case
b) is the same (except for sign) as the ﬁeld that is produced by that part of a
complete opaque wall which is located where the holes are! (The sign is not too
interesting, since we are usually interested in intensity which is proportional to
the square of the ﬁeld.) It seems like an amazing backwards-forwards argument.
It is, however, not only true (approximately for not too small holes), but useful,
and is the justiﬁcation for the usual theory of diﬀraction.
The ﬁeld E′
plug is computed in any particular case by remembering that the
motion of the charges everywhere in the screen is just that which will cancel out
the ﬁeld Es on the back of the screen. Once we know these motions, we add the
radiation ﬁelds at P due just to the charges in the plugs.
We remark again that this theory of diﬀraction is only approximate, and will
be good only if the holes are not too small. For holes which are too small the
E′
plug term will be small and then the diﬀerence between E′
wall and Ewall (which
diﬀerence we have taken to be zero) may be comparable to or larger than the
small E′
plug term, and our approximation will no longer be valid.

31-1932

Radiation Damping. Light Scattering

32-1 Radiation resistance

In the last chapter we learned that when a system is oscillating, energy is
carried away, and we deduced a formula for the energy which is radiated by an
oscillating system. If we know the electric ﬁeld, then the average of the square
of the ﬁeld times ϵ0c is the amount of energy that passes per square meter per
second through a surface normal to the direction in which the radiation is going:

S = ϵ0c⟨E2⟩.
(32.1)

Any oscillating charge radiates energy; for instance, a driven antenna radiates
energy. If the system radiates energy, then in order to account for the conservation
of energy we must ﬁnd that power is being delivered along the wires which lead
into the antenna. That is, to the driving circuit the antenna acts like a resistance,
or a place where energy can be “lost” (the energy is not really lost, it is really
radiated out, but so far as the circuit is concerned, the energy is lost). In an
ordinary resistance, the energy which is “lost” passes into heat; in this case the
energy which is “lost” goes out into space. But from the standpoint of circuit
theory, without considering where the energy goes, the net eﬀect on the circuit is
the same—energy is “lost” from that circuit. Therefore the antenna appears to
the generator as having a resistance, even though it may be made with perfectly
good copper. In fact, if it is well built it will appear as almost a pure resistance,
with very little inductance or capacitance, because we would like to radiate as
much energy as possible out of the antenna. This resistance that an antenna
shows is called the radiation resistance.
If a current I is going to the antenna, then the average rate at which power
is delivered to the antenna is the average of the square of the current times the
resistance. The rate at which power is radiated by the antenna is proportional

32-1
