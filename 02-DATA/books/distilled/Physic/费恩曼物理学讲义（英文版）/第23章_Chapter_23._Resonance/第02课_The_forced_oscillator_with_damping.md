# The forced oscillator with damping

in which multiplication is replaced by addition. Here diﬀerentiation is replaced
by multiplication.) Thus our equation becomes

(iω)2ˆx + (kˆx/m) = ˆF/m.
(23.4)

(We have cancelled the common factor eiωt.) See how simple it is! Diﬀerential
equations are immediately converted, by sight, into mere algebraic equations; we
virtually have the solution by sight, that

ˆx =
ˆF/m
(k/m) −ω2 ,

since (iω)2 = −ω2. This maybe slightly simpliﬁed by substituting k/m = ω2
0,
which gives
ˆx = ˆF/m(ω2
0 −ω2).
(23.5)

This, of course, is the solution we had before; for since m(ω2
0 −ω2) is a real
number, the phase angles of ˆF and of ˆx are the same (or perhaps 180◦apart, if
ω2 > ω2
0), as advertised previously. The magnitude of ˆx, which measures how far
it oscillates, is related to the size of the ˆF by the factor 1/m(ω2
0 −ω2), and this
factor becomes enormous when ω is nearly equal to ω0. So we get a very strong
response when we apply the right frequency ω (if we hold a pendulum on the
end of a string and shake it at just the right frequency, we can make it swing
very high).

23-2 The forced oscillator with damping

That, then, is how we analyze oscillatory motion with the more elegant
mathematical technique. But the elegance of the technique is not at all exhibited
in such a problem that can be solved easily by other methods. It is only exhibited
when one applies it to more diﬃcult problems. Let us therefore solve another,
more diﬃcult problem, which furthermore adds a relatively realistic feature to
the previous one. Equation (23.5) tells us that if the frequency ω were exactly
equal to ω0, we would have an inﬁnite response. Actually, of course, no such
inﬁnite response occurs because some other things, like friction, which we have
so far ignored, limits the response. Let us therefore add to Eq. (23.2) a friction
term.
Ordinarily such a problem is very diﬃcult because of the character and
complexity of the frictional term. There are, however, many circumstances in

23-4which the frictional force is proportional to the speed with which the object moves.
An example of such friction is the friction for slow motion of an object in oil or
a thick liquid. There is no force when it is just standing still, but the faster it
moves the faster the oil has to go past the object, and the greater is the resistance.
So we shall assume that there is, in addition to the terms in (23.2), another
term, a resistance force proportional to the velocity: Ff = −c dx/dt. It will be
convenient, in our mathematical analysis, to write the constant c as m times γ
to simplify the equation a little. This is just the same trick we use with k when
we replace it by mω2
0, just to simplify the algebra. Thus our equation will be

m(d2x/dt2) + c(dx/dt) + kx = F
(23.6)

or, writing c = mγ and k = mω2
0 and dividing out the mass m,

(d2x/dt2) + γ(dx/dt) + ω2
0x = F/m.
(23.6a)

Now we have the equation in the most convenient form to solve. If γ is very
small, that represents very little friction; if γ is very large, there is a tremendous
amount of friction. How do we solve this new linear diﬀerential equation? Suppose
that the driving force is equal to F0 cos (ωt + ∆); we could put this into (23.6a)
and try to solve it, but we shall instead solve it by our new method. Thus we
write F as the real part of ˆFeiωt and x as the real part of ˆxeiωt, and substitute
these into Eq. (23.6a). It is not even necessary to do the actual substituting, for
we can see by inspection that the equation would become

[(iω)2ˆx + γ(iω)ˆx + ω2
0ˆx]eiωt = ( ˆF/m)eiωt.
(23.7)

[As a matter of fact, if we tried to solve Eq. (23.6a) by our old straightforward
way, we would really appreciate the magic of the “complex” method.] If we divide
by eiωt on both sides, then we can obtain the response ˆx to the given force ˆF; it
is
ˆx = ˆF/m(ω2
0 −ω2 + iγω).
(23.8)

Thus again ˆx is given by ˆF times a certain factor. There is no technical name
for this factor, no particular letter for it, but we may call it R for discussion
purposes:

R =
m(ω2
0 −ω2 + iγω)

23-5and

ˆx = ˆFR.
(23.9)

(Although the letters γ and ω0 are in very common use, this R has no particular
name.) This factor R can either be written as p + iq, or as a certain magnitude ρ
times eiθ. If it is written as a certain magnitude times eiθ, let us see what it
means. Now ˆF = F0ei∆, and the actual force F is the real part of F0ei∆eiωt, that
is, F0 cos (ωt + ∆). Next, Eq. (23.9) tells us that ˆx is equal to ˆFR. So, writing
R = ρeiθ as another name for R, we get

ˆx = R ˆF = ρeiθF0ei∆= ρF0ei(θ+∆).

Finally, going even further back, we see that the physical x, which is the real part
of the complex ˆxeiωt, is equal to the real part of ρF0ei(θ+∆)eiωt. But ρ and F0
are real, and the real part of ei(θ+∆+ωt) is simply cos (ωt + ∆+ θ). Thus

x = ρF0 cos (ωt + ∆+ θ).
(23.10)

This tells us that the amplitude of the response is the magnitude of the force F
multiplied by a certain magniﬁcation factor, ρ; this gives us the “amount” of
oscillation. It also tells us, however, that x is not oscillating in phase with the
force, which has the phase ∆, but is shifted by an extra amount θ. Therefore ρ
and θ represent the size of the response and the phase shift of the response.
Now let us work out what ρ is. If we have a complex number, the square of
the magnitude is equal to the number times its complex conjugate; thus

ρ2 =
m2(ω2
0 −ω2 + iγω)(ω2
0 −ω2 −iγω)

=
m2[(ω2 −ω2
0)2 + γ2ω2].
(23.11)

In addition, the phase angle θ is easy to ﬁnd, for if we write

1/R = 1/ρeiθ = (1/ρ)e−iθ = m(ω2
0 −ω2 + iγω),

we see that

tan θ = −γω/(ω2
0 −ω2).
(23.12)

It is minus because tan(−θ) = −tan θ. A negative value for θ results for all ω,
and this corresponds to the displacement x lagging the force F.

23-6ρ2

γ

ω0

ω

Fig. 23-2. Plot of ρ2 versus ω.

0◦

θ

−90◦

ω0

ω

−180◦

Fig. 23-3. Plot of θ versus ω.

Figure 23-2 shows how ρ2 varies as a function of frequency (ρ2 is physically
more interesting than ρ, because ρ2 is proportional to the square of the amplitude,
or more or less to the energy that is developed in the oscillator by the force). We
see that if γ is very small, then 1/(ω2
0 −ω2)2 is the most important term, and
the response tries to go up toward inﬁnity when ω equals ω0. Now the “inﬁnity”
is not actually inﬁnite because if ω = ω0, then 1/γ2ω2 is still there. The phase
shift varies as shown in Fig. 23-3.
In certain circumstances we get a slightly diﬀerent formula than (23.8), also
called a “resonance” formula, and one might think that it represents a diﬀerent
phenomenon, but it does not. The reason is that if γ is very small the most
interesting part of the curve is near ω = ω0, and we may replace (23.8) by
an approximate formula which is very accurate if γ is small and ω is near ω0.
Since ω2
0 −ω2 = (ω0 −ω)(ω0 + ω), if ω is near ω0 this is nearly the same as
2ω0(ω0 −ω) and γω is nearly the same as γω0. Using these in (23.8), we see that
ω2
0 −ω2 + iγω ≈2ω0(ω0 −ω + iγ/2), so that

ˆx ≈ˆF/2mω0(ω0 −ω + iγ/2)
if
γ ≪ω0
and
ω ≈ω0.
(23.13)

23-7It is easy to ﬁnd the corresponding formula for ρ2. It is

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

23-8
