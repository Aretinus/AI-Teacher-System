# Fundamental forces. Fields

of Fig. 12-2 is also very small, and can then be approximated by a straight line.
Therefore, in many circumstances, if the displacement is not too great the force
is proportional to the displacement. This principle is known as Hooke’s law, or
the law of elasticity, which says that the force in a body which tries to restore the
body to its original condition when it is distorted is proportional to the distortion.
This law, of course, holds true only if the distortion is relatively small; when it
gets too large the body will be torn apart or crushed, depending on the kind of
distortion. The amount of force for which Hooke’s law is valid depends upon
the material; for instance, for dough or putty the force is very small, but for
steel it is relatively large. Hooke’s law can be nicely demonstrated with a long
coil spring, made of steel and suspended vertically. A suitable weight hung on
the lower end of the spring produces a tiny twist throughout the length of the
wire, which results in a small vertical deﬂection in each turn and adds up to a
large displacement if there are many turns. If the total elongation produced,
say, by a 100-gram weight, is measured, it is found that additional weights of
100 grams will each produce an additional elongation that is very nearly equal
to the stretch that was measured for the ﬁrst 100 grams. This constant ratio
of force to displacement begins to change when the spring is overloaded, i.e.,
Hooke’s law no longer holds.

12-4 Fundamental forces. Fields

We shall now discuss the only remaining forces that are fundamental. We
call them fundamental in the sense that their laws are fundamentally simple. We
shall ﬁrst discuss electrical force. Objects carry electrical charges which consist
simply of electrons or protons. If any two bodies are electrically charged, there
is an electrical force between them, and if the magnitudes of the charges are
q1 and q2, respectively, the force varies inversely as the square of the distance
between the charges, or F = (const)q1q2/r2. For unlike charges, this law is like
the law of gravitation, but for like charges the force is repulsive and the sign
(direction) is reversed. The charges q1 and q2 can be intrinsically either positive
or negative, and in any speciﬁc application of the formula the direction of the
force will come out right if the q’s are given the proper plus or minus sign; the
force is directed along the line between the two charges. The constant in the
formula depends, of course, upon what units are used for the force, the charge,
and the distance. In current practice the charge is measured in coulombs, the
distance in meters, and the force in newtons. Then, in order to get the force

12-11to come out properly in newtons, the constant (which for historical reasons is
written 1/4πϵ0) takes the numerical value

ϵ0 = 8.854 × 10−12 coul2/newton · m2

or
1/4πϵ0 = 8.99 × 109 N · m2/coul2.

Thus the force law for static charges is

F = q1q2r/4πϵ0r3.
(12.2)

In nature, the most important charge of all is the charge on a single elec-
tron, which is 1.60 × 10−19 coulomb. In working with electrical forces between
fundamental particles rather than with large charges, many people prefer the
combination (qel)2/4πϵ0, in which qel is deﬁned as the charge on an electron. This
combination occurs frequently, and to simplify calculations it has been deﬁned
by the symbol e2; its numerical value in the mks system of units turns out to
be (1.52 × 10−14)2. The advantage of using the constant in this form is that the
force between two electrons in newtons can then be written simply as e2/r2, with
r in meters, without all the individual constants. Electrical forces are much more
complicated than this simple formula indicates, since the formula gives the force
between two objects only when the objects are standing still. We shall consider
the more general case shortly.
In the analysis of forces of the more fundamental kinds (not such forces as
friction, but the electrical force or the gravitational force), an interesting and very
important concept has been developed. Since at ﬁrst sight the forces are very
much more complicated than is indicated by the inverse-square laws and these
laws hold true only when the interacting bodies are standing still, an improved
method is needed to deal with the very complex forces that ensue when the bodies
start to move in a complicated way. Experience has shown that an approach
known as the concept of a “ﬁeld” is of great utility for the analysis of forces of
this type. To illustrate the idea for, say, electrical force, suppose we have two
electrical charges, q1 and q2, located at points P and R respectively. Then the
force between the charges is given by

F = q1q2r/4πϵ0r3.
(12.3)

To analyze this force by means of the ﬁeld concept, we say that the charge q1
at P produces a “condition” at R, such that when the charge q2 is placed at R

12-12it “feels” the force. This is one way, strange perhaps, of describing it; we say
that the force F on q2 at R can be written in two parts. It is q2 multiplied by a
quantity E that would be there whether q2 were there or not (provided we keep
all the other charges in their right places). E is the “condition” produced by q1,
we say, and F is the response of q2 to E. E is called an electric ﬁeld, and it is a
vector. The formula for the electric ﬁeld E that is produced at R by a charge q1
at P is the charge q1 times the constant 1/4πϵ0 divided by r2 (r is the distance
from P to R), and it is acting in the direction of the radius vector (the radius
vector r divided by its own length). The expression for E is thus

E = q1r/4πϵ0r3.
(12.4)

We then write

F = q2 E,
(12.5)

which expresses the force, the ﬁeld, and the charge in the ﬁeld. What is the point
of all this? The point is to divide the analysis into two parts. One part says that
something produces a ﬁeld. The other part says that something is acted on by
the ﬁeld. By allowing us to look at the two parts independently, this separation
of the analysis simpliﬁes the calculation of a problem in many situations. If many
charges are present, we ﬁrst work out the total electric ﬁeld produced at R by all
the charges, and then, knowing the charge that is placed at R, we ﬁnd the force
on it.
In the case of gravitation, we can do exactly the same thing. In this case,
where the force F = −Gm1m2r/r3, we can make an analogous analysis, as
follows: the force on a body in a gravitational ﬁeld is the mass of that body
times the ﬁeld C. The force on m2 is the mass m2 times the ﬁeld C produced
by m1; that is, F = m2C. Then the ﬁeld C produced by a body of mass m1
is C = −Gm1r/r3 and it is directed radially, as in the electrical case.
In spite of how it might at ﬁrst seem, this separation of one part from another
is not a triviality. It would be trivial, just another way of writing the same
thing, if the laws of force were simple, but the laws of force are so complicated
that it turns out that the ﬁelds have a reality that is almost independent of
the objects which create them. One can do something like shake a charge and
produce an eﬀect, a ﬁeld, at a distance; if one then stops moving the charge, the
ﬁeld keeps track of all the past, because the interaction between two particles is
not instantaneous. It is desirable to have some way to remember what happened
previously. If the force upon some charge depends upon where another charge

12-13was yesterday, which it does, then we need machinery to keep track of what went
on yesterday, and that is the character of a ﬁeld. So when the forces get more
complicated, the ﬁeld becomes more and more real, and this technique becomes
less and less of an artiﬁcial separation.
In analyzing forces by the use of ﬁelds, we need two kinds of laws pertaining
to ﬁelds. The ﬁrst is the response to a ﬁeld, and that gives the equations of
motion. For example, the law of response of a mass to a gravitational ﬁeld is
that the force is equal to the mass times the gravitational ﬁeld; or, if there is
also a charge on the body, the response of the charge to the electric ﬁeld equals
the charge times the electric ﬁeld. The second part of the analysis of nature in
these situations is to formulate the laws which determine the strength of the
ﬁeld and how it is produced. These laws are sometimes called the ﬁeld equations.
We shall learn more about them in due time, but shall write down a few things
about them now.
First, the most remarkable fact of all, which is true exactly and which can be
easily understood, is that the total electric ﬁeld produced by a number of sources
is the vector sum of the electric ﬁelds produced by the ﬁrst source, the second
source, and so on. In other words, if we have numerous charges making a ﬁeld,
and if all by itself one of them would make the ﬁeld E1, another would make the
ﬁeld E2, and so on, then we merely add the vectors to get the total ﬁeld. This
principle can be expressed as

E = E1 + E2 + E3 + · · ·
(12.6)

or, in view of the deﬁnition given above,

qiri
4πϵ0r3
i
.
(12.7)

E =
X

i

Can the same methods be applied to gravitation? The force between two
masses m1 and m2 was expressed by Newton as F = −Gm1m2r/r3.
But
according to the ﬁeld concept, we may say that m1 creates a ﬁeld C in all the
surrounding space, such that the force on m2 is given by

F = m2C.
(12.8)

By complete analogy with the electrical case,

Ci = −Gmiri/r3
i
(12.9)

12-14and the gravitational ﬁeld produced by several masses is

C = C1 + C2 + C3 + · · ·
(12.10)

In Chapter 9, in working out a case of planetary motion, we used this principle
in essence. We simply added all the force vectors to get the resultant force on a
planet. If we divide out the mass of the planet in question, we get Eq. (12.10).
Equations (12.6) and (12.10) express what is known as the principle of
superposition of ﬁelds. This principle states that the total ﬁeld due to all the
sources is the sum of the ﬁelds due to each source. So far as we know today,
for electricity this is an absolutely guaranteed law, which is true even when
the force law is complicated because of the motions of the charges. There are
apparent violations, but more careful analysis has always shown these to be due
to the overlooking of certain moving charges. However, although the principle of
superposition applies exactly for electrical forces, it is not exact for gravity if the
ﬁeld is too strong, and Newton’s equation (12.10) is only approximate, according
to Einstein’s gravitational theory.
Closely related to electrical force is another kind, called magnetic force, and
this too is analyzed in terms of a ﬁeld. Some of the qualitative relations between
electrical and magnetic forces can be illustrated by an experiment with an electron-
ray tube (Fig. 12-3). At one end of such a tube is a source that emits a stream
of electrons. Within the tube are arrangements for accelerating the electrons to
a high speed and sending some of them in a narrow beam to a ﬂuorescent screen
at the other end of the tube. A spot of light glows in the center of the screen
where the electrons strike, and this enables us to trace the electron path. On the

+V

z

+

y

N

x

S

−

ELECTRON GUN

HOT FILAMENT—
ELECTRON SOURCE
FLUORESCENT
SCREEN

Fig. 12-3. An electron-beam tube.

12-15way to the screen the electron beam passes through a narrow space between a
pair of parallel metal plates, which are arranged, say, horizontally. A voltage can
be applied across the plates, so that either plate can be made negative at will.
When such a voltage is present, there is an electric ﬁeld between the plates.
The ﬁrst part of the experiment is to apply a negative voltage to the lower
plate, which means that extra electrons have been placed on the lower plate.
Since like charges repel, the light spot on the screen instantly shifts upward.
(We could also say this in another way—that the electrons “felt” the ﬁeld, and
responded by deﬂecting upward.) We next reverse the voltage, making the upper
plate negative. The light spot on the screen now jumps below the center, showing
that the electrons in the beam were repelled by those in the plate above them.
(Or we could say again that the electrons had “responded” to the ﬁeld, which is
now in the reverse direction.)
The second part of the experiment is to disconnect the voltage from the plates
and test the eﬀect of a magnetic ﬁeld on the electron beam. This is done by means
of a horseshoe magnet, whose poles are far enough apart to more or less straddle
the tube. Suppose we hold the magnet below the tube in the same orientation
as the letter U, with its poles up and part of the tube in between. We note that
the light spot is deﬂected, say, upward, as the magnet approaches the tube from
below. So it appears that the magnet repels the electron beam. However, it is not
that simple, for if we invert the magnet without reversing the poles side-for-side,
and now approach the tube from above, the spot still moves upward, so the
electron beam is not repelled; instead, it appears to be attracted this time. Now
we start again, restoring the magnet to its original U orientation and holding
it below the tube, as before. Yes, the spot is still deﬂected upward; but now turn
the magnet 180 degrees around a vertical axis, so that it is still in the U position
but the poles are reversed side-for-side. Behold, the spot now jumps downward,
and stays down, even if we invert the magnet and approach from above, as before.
To understand this peculiar behavior, we have to have a new combination of
forces. We explain it thus: Across the magnet from one pole to the other there is a
magnetic ﬁeld. This ﬁeld has a direction which is always away from one particular
pole (which we could mark) and toward the other. Inverting the magnet did
not change the direction of the ﬁeld, but reversing the poles side-for-side did
reverse its direction. For example, if the electron velocity were horizontal in the
x-direction and the magnetic ﬁeld were also horizontal but in the y-direction, the
magnetic force on the moving electrons would be in the z-direction, i.e., up or
down, depending on whether the ﬁeld was in the positive or negative y-direction.

12-16Although we shall not at the present time give the correct law of force between
charges moving in an arbitrary manner, one relative to the other, because it is
too complicated, we shall give one aspect of it: the complete law of the forces
if the ﬁelds are known. The force on a charged object depends upon its motion;
if, when the object is standing still at a given place, there is some force, this
is taken to be proportional to the charge, the coeﬃcient being what we call
the electric ﬁeld. When the object moves the force may be diﬀerent, and the
correction, the new “piece” of force, turns out to be dependent exactly linearly
on the velocity, but at right angles to v and to another vector quantity which we
call the magnetic induction B. If the components of the electric ﬁeld E and the
magnetic induction B are, respectively, (Ex, Ey, Ez) and (Bx, By, Bz), and if the
velocity v has the components (vx, vy, vz), then the total electric and magnetic
force on a moving charge q has the components

Fx = q(Ex + vyBz −vzBy),

Fy = q(Ey + vzBx −vxBz),

Fz = q(Ez + vxBy −vyBx).
(12.11)

If, for instance, the only component of the magnetic ﬁeld were By and the only
component of the velocity were vx, then the only term left in the magnetic force
would be a force in the z-direction, at right angles to both B and v.

12-5 Pseudo forces

The next kind of force we shall discuss might be called a pseudo force. In
Chapter 11 we discussed the relationship between two people, Joe and Moe, who
use diﬀerent coordinate systems. Let us suppose that the positions of a particle
as measured by Joe are x and by Moe are x′; then the laws are as follows:

x = x′ + s,
y = y′,
z = z′,

where s is the displacement of Moe’s system relative to Joe’s. If we suppose that
the laws of motion are correct for Joe, how do they look for Moe? We ﬁnd ﬁrst,
that
dx/dt = dx′/dt + ds/dt.

Previously, we considered the case where s was constant, and we found that s
made no diﬀerence in the laws of motion, since ds/dt = 0; ultimately, therefore,

12-17
