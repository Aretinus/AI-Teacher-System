# The thermodynamic temperature

We can make the argument very clear in the following way: We have just
seen that we can always relate the heat absorbed at T1 to the heat delivered
at T2 by ﬁnding the heat delivered at some other temperature T3. Therefore
we can get all the engines’ properties if we introduce a standard temperature,
analyzing everything with that standard temperature. In other words, if we
knew the eﬃciency of an engine running between a certain temperature T and a
certain arbitrary standard temperature, then we could work out the eﬃciency
for any other diﬀerence in temperature. Because we assume we are using only
reversible engines, we can work from the initial temperature down to the standard
temperature and back up to the ﬁnal temperature again. We shall deﬁne the
standard temperature arbitrarily as one degree. We shall also adopt a special
symbol for the heat which is delivered at this standard temperature: we shall
call it QS. In other words, when a reversible engine absorbs the heat Q at
temperature T, it will deliver, at the unit temperature, a heat QS. If one engine,
absorbing heat Q1 at T1, delivers the heat QS at one degree, and if an engine
absorbing heat Q2 at temperature T2 will also deliver the same heat QS at one
degree, then it follows that an engine which absorbs heat Q1 at the temperature T1
will deliver heat Q2 if it runs between T1 and T2, as we have already proved by
considering engines running between three temperatures. So all we really have
to do is to ﬁnd how much heat Q1 we need to put in at the temperature T1 in
order to deliver a certain amount of heat QS at the unit temperature. If we
discover that, we have everything. The heat Q, of course, is a function of the
temperature T. It is easy to see that the heat must increase as the temperature
increases, for we know that it takes work to run an engine backwards and deliver
heat at a higher temperature. It is also easy to see that the heat Q1 must be
proportional to QS. So the great law is something like this: for a given amount
of heat QS delivered at one degree from an engine running at temperature T
degrees, the heat Q absorbed must be that amount QS times some increasing
function of the temperature:

Q = QSf(T).
(44.9)

44-5 The thermodynamic temperature

At this stage we are not going to try to ﬁnd the formula for the above increasing
function of the temperature in terms of our familiar mercury temperature scale,
but instead we shall deﬁne temperature by a new scale.
At one time “the
temperature” was deﬁned arbitrarily by dividing the expansion of water into

44-16even degrees of a certain size. But when one then measures temperature with a
mercury thermometer, one ﬁnds that the degrees are no longer even. But now
we can make a deﬁnition of temperature which is independent of any particular
substance. We can use that function f(T), which does not depend on what device
we use, because the eﬃciency of these reversible engines is independent of their
working substances. Since the function we found is rising with temperature,
we will deﬁne the function itself as the temperature, measured in units of the
standard one-degree temperature, as follows:

Q = ST,
(44.10)

where

QS = S · 1◦.
(44.11)

This means that we can tell how hot an object is by ﬁnding out how much heat
is absorbed by a reversible engine working between the temperature of the object
and the unit temperature (Fig. 44-9). If seven times more heat is taken out
of a boiler than is delivered at a one-degree condenser, the temperature of the
boiler will be called seven degrees, and so forth. So, by measuring how much
heat is absorbed at diﬀerent temperatures, we determine the temperature. The
temperature deﬁned in this way is called the absolute thermodynamic temperature,
and it is independent of the substance. We shall use this deﬁnition exclusively
from now on.*

T

Q = ST

Reversible
Engine
W = Q −S · 1◦

QS = S · 1◦

1◦K

Fig. 44-9. Absolute thermodynamic temperature.

* We have previously deﬁned our scale of temperature in a diﬀerent way, namely by stating
that the mean kinetic energy of a molecule in a perfect gas is proportional to the temperature,
or that the perfect gas law says pV is proportional to T. Is this new deﬁnition equivalent? Yes,
since the ﬁnal result (44.7) derived from the gas law is the same as that derived here. We shall
discuss this point again in the next chapter.

44-17Now we see that when we have two engines, one working between T1 and one
degree, the other working between T2 and one degree, delivering the same heat
at unit temperature, then the heats absorbed must be related by

T1
= S = Q2

Q1

T2
.
(44.12)

But that means that if we have a single engine running between T1 and T2, then
the result of the whole analysis, the grand ﬁnale, is that Q1 is to T1 as Q2 is
to T2, if the engine absorbs energy Q1 at temperature T1 and delivers heat Q2 at
temperature T2. Whenever the engine is reversible, this relationship between the
heats must follow. That is all there is to it: that is the center of the universe of
thermodynamics.
If this is all there is to thermodynamics, why is it considered such a diﬃcult
subject? In doing a problem involving a given mass of some substance, the
condition of the substance at any moment can be described by telling what its
temperature is and what its volume is. If we know the temperature and volume of
a substance, and that the pressure is some function of the temperature and volume,
then we know the internal energy. One could say, “I do not want to do it that way.
Tell me the temperature and the pressure, and I will tell you the volume. I can
think of the volume as a function of temperature and pressure, and the internal
energy as a function of temperature and pressure, and so on.” That is why thermo-
dynamics is hard, because everyone uses a diﬀerent approach. If we could only sit
down once and decide on our variables, and stick to them, it would be fairly easy.
Now we start to make deductions. Just as F = ma is the center of the
universe in mechanics, and it goes on and on and on after that, in the same way
the principle just found is all there is to thermodynamics. But can one make
conclusions out of it?
We begin. To obtain our ﬁrst conclusion, we shall combine both laws, the
law of conservation of energy and this law which relates the heats Q2 and Q1,
and we can easily obtain the eﬃciency of a reversible engine. From the ﬁrst law,
we have W = Q1 −Q2. According to our new principle,

Q2 = T2

T1
Q1,

so the work becomes


1 −T2


= Q1
T1 −T2

W = Q1

T1
,
(44.13)

T1

44-18which tells us the eﬃciency of the engine—how much work we get out of so
much heat. The eﬃciency of an engine is proportional to the diﬀerence in the
temperatures between which the engine runs, divided by the higher temperature:

Q1
= T1 −T2

Eﬃciency = W

T1
.
(44.14)

The eﬃciency cannot be greater than unity and the absolute temperature cannot
be less than zero, absolute zero. So, since T2 must be positive, the eﬃciency is
always less than unity. That is our ﬁrst conclusion.

44-6 Entropy

Equation (44.7) or (44.12) can be interpreted in a special way. Working always
with reversible engines, a heat Q1 at temperature T1 is “equivalent” to Q2 at T2 if
Q1/T1 = Q2/T2, in the sense that as one is absorbed the other is delivered. This
suggests that if we call Q/T something, we can say: in a reversible process as
much Q/T is absorbed as is liberated; there is no gain or loss of Q/T. This Q/T
is called entropy, and we say “there is no net change in entropy in a reversible
cycle.” If T is 1◦, then the entropy is QS/1◦or, as we symbolized it, QS/1◦= S.
Actually, S is the letter usually used for entropy, and it is numerically equal to
the heat (which we have called QS) delivered to a 1◦-reservoir (entropy is not
itself a heat, it is heat divided by a temperature, hence it is measured in joules
per degree).
Now it is interesting that besides the pressure, which is a function of the
temperature and the volume, and the internal energy, which is a function of
temperature and volume, we have found another quantity which is a function
of the condition, i.e., the entropy of the substance. Let us try to explain how
we compute it, and what we mean when we call it a “function of the condition.”
Consider the system in two diﬀerent conditions, much as we had in the experiment
where we did the adiabatic and isothermal expansions. (Incidentally, there is
no need that a heat engine have only two reservoirs, it could have three or four
diﬀerent temperatures at which it takes in and delivers heats, and so on.) We
can move around on a pV diagram all over the place, and go from one condition
to another. In other words, we could say the gas is in a certain condition a,
and then it goes over to some other condition, b, and we will require that this
transition, made from a to b, be reversible. Now suppose that all along the path
from a to b we have little reservoirs at diﬀerent temperatures, so that the heat dQ

44-19
