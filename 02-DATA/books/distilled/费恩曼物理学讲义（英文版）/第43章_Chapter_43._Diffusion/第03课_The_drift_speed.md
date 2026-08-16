# The drift speed

43-3 The drift speed

We want to describe what happens to a molecule, or several molecules, which
are diﬀerent in some way from the large majority of the molecules in a gas.
We shall refer to the “majority” molecules as the “background” molecules, and
we shall call the molecules which are diﬀerent from the background molecules
“special” molecules or, for short, the S-molecules. A molecule could be special
for any number of reasons: It might be heavier than the background molecules.
It might be a diﬀerent chemical. It might have an electric charge—i.e., be an
ion in a background of uncharged molecules. Because of their diﬀerent masses
or charges the S-molecules may have forces on them which are diﬀerent from
the forces on the background molecules. By considering what happens to these
S-molecules we can understand the basic eﬀects which come into play in a similar
way in many diﬀerent phenomena. To list a few: the diﬀusion of gases, electric
currents in batteries, sedimentation, centrifugal separation, etc.
We begin by concentrating on the basic process: an S-molecule in a back-
ground gas is acted on by some speciﬁc force F (which might be, e.g., gravitational
or electrical) and in addition by the not-so-speciﬁc forces due to collisions with
the background molecules. We would like to describe the general behavior of the
S-molecule. What happens to it, in detail, is that it darts around hither and yon
as it collides over and over again with other molecules. But if we watch it carefully
we see that it does make some net progress in the direction of the force F . We
say that there is a drift, superposed on its random motion. We would like to
know what the speed of its drift is—its drift velocity—due to the force F .
If we start to observe an S-molecule at some instant we may expect that it is
somewhere between two collisions. In addition to the velocity it was left with
after its last collision it is picking up some velocity component due to the force F .
In a short time (on the average, in a time τ) it will experience a collision and
start out on a new piece of its trajectory. It will have a new starting velocity,
but the same acceleration from F .
To keep things simple for the moment, we shall suppose that after each
collision our S-molecule gets a completely “fresh” start. That is, that it keeps no
remembrance of its past acceleration by F . This might be a reasonable assumption
if our S-molecule were much lighter than the background molecules, but it is
certainly not valid in general. We shall discuss later an improved assumption.
For the moment, then, our assumption is that the S-molecule leaves each
collision with a velocity which may be in any direction with equal likelihood. The

43-7starting velocity will take it equally in all directions and will not contribute to
any net motion, so we shall not worry further about its initial velocity after a
collision. In addition to its random motion, each S-molecule will have, at any
moment, an additional velocity in the direction of the force F , which it has picked
up since its last collision. What is the average value of this part of the velocity?
It is just the acceleration F /m (where m is the mass of the S-molecule) times
the average time since the last collision. Now the average time since the last
collision must be the same as the average time until the next collision, which
we have called τ, above. The average velocity from F , of course, is just what is
called the drift velocity, so we have the relation

vdrift = Fτ

m .
(43.13)

This basic relation is the heart of our subject. There may be some complication
in determining what τ is, but the basic process is deﬁned by Eq. (43.13).
You will notice that the drift velocity is proportional to the force. There
is, unfortunately, no generally used name for the constant of proportionality.
Diﬀerent names have been used for each diﬀerent kind of force. If in an electrical
problem the force is written as the charge times the electric ﬁeld, F = qE, then
the constant of proportionality between the velocity and the electric ﬁeld E is
usually called the “mobility.” In spite of the possibility of some confusion, we
shall use the term mobility for the ratio of the drift velocity to the force for any
force. We write
vdrift = µF.
(43.14)

in general, and we shall call µ the mobility. We have from Eq. (43.13) that

µ = τ/m.
(43.15)

The mobility is proportional to the mean time between collisions (there are fewer
collisions to slow it down) and inversely proportional to the mass (more inertia
means less speed picked up between collisions).
To get the correct numerical coeﬃcient in Eq. (43.13), which is correct as
given, takes some care. Without intending to confuse, we should still point out
that the arguments have a subtlety which can be appreciated only by a careful
and detailed study. To illustrate that there are diﬃculties, in spite of appearances,
we shall make over again the argument which led to Eq. (43.13) in a reasonable
but erroneous way (and the way one will ﬁnd in many textbooks!).

43-8We might have said: The mean time between collisions is τ. After a collision
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

43-9
