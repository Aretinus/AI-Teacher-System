# Moving sources

Relativistic Effects in Radiation

34-1 Moving sources

In the present chapter we shall describe a number of miscellaneous eﬀects
in connection with radiation, and then we shall be ﬁnished with the classical
theory of light propagation. In our analysis of light, we have gone rather far and
into considerable detail. The only phenomena of any consequence associated
with electromagnetic radiation that we have not discussed is what happens if
radiowaves are contained in a box with reﬂecting walls, the size of the box
being comparable to a wavelength, or are transmitted down a long tube. The
phenomena of so-called cavity resonators and waveguides we shall discuss later;
we shall ﬁrst use another physical example—sound—and then we shall return to
this subject. Except for this, the present chapter is our last consideration of the
classical theory of light.
We can summarize all the eﬀects that we shall now discuss by remarking that
they have to do with the eﬀects of moving sources. We no longer assume that
the source is localized, with all its motion being at a relatively low speed near a
ﬁxed point.
We recall that the fundamental laws of electrodynamics say that, at large
distances from a moving charge, the electric ﬁeld is given by the formula

E = −
q
4πϵ0c2
d2eR′

dt2 .
(34.1)

The second derivative of the unit vector eR′ which points in the apparent direction
of the charge, is the determining feature of the electric ﬁeld. This unit vector
does not point toward the present position of the charge, of course, but rather in
the direction that the charge would seem to be, if the information travels only at
the ﬁnite speed c from the charge to the observer.

34-1Associated with the electric ﬁeld is a magnetic ﬁeld, always at right angles
to the electric ﬁeld and at right angles to the apparent direction of the source,
given by the formula

B = −eR′ × E/c.
(34.2)

Until now we have considered only the case in which motions are nonrelativistic
in speed, so that there is no appreciable motion in the direction of the source
to be considered. Now we shall be more general and study the case where the
motion is at an arbitrary velocity, and see what diﬀerent eﬀects may be expected
in those circumstances. We shall let the motion be at an arbitrary speed, but of
course we shall still assume that the detector is very far from the source.

y

x(τ)
y(τ)
z(τ)





T

eR′




x

P
A

R0

O

z

Fig. 34-1. The path of a moving charge. The true position at the
time τ is at T , but the retarded position is at A.

We already know from our discussion in Chapter 28 that the only things that
count in d2eR′/dt2 are the changes in the direction of eR′. Let the coordinates
of the charge be (x, y, z), with z measured along the direction of observation
(Fig. 34-1). At a given moment in time, say the moment τ, the three components
of the position are x(τ), y(τ), and z(τ). The distance R is very nearly equal
to R(τ) = R0 + z(τ). Now the direction of the vector eR′ depends mainly on x
and y, but hardly at all upon z: the transverse components of the unit vector are
x/R and y/R, and when we diﬀerentiate these components we get things like R2

in the denominator:

d(x/R)

dt
= dx/dt

R
−dz

dt
x
R2 .

So, when we are far enough away the only terms we have to worry about are the

34-2variations of x and y. Thus we take out the factor R0 and get

d2x′

Ex = −
q
4πϵ0c2R0

dt2 ,

d2y′

Ey = −
q
4πϵ0c2R0

dt2 ,
(34.3)

where R0 is the distance, more or less, to q; let us take it as the distance OP to the
origin of the coordinates (x, y, z). Thus the electric ﬁeld is a constant multiplied
by a very simple thing, the second derivatives of the x- and y-coordinates. (We
could put it more mathematically by calling x and y the transverse components
of the position vector r of the charge, but this would not add to the clarity.)
Of course, we realize that the coordinates must be measured at the retarded
time. Here we ﬁnd that z(τ) does aﬀect the retardation. What time is the
retarded time? If the time of observation is called t (the time at P) then the
time τ to which this corresponds at A is not the time t, but is delayed by the
total distance that the light has to go, divided by the speed of light. In the
ﬁrst approximation, this delay is R0/c, a constant (an uninteresting feature),
but in the next approximation we must include the eﬀects of the position in the
z-direction at the time τ, because if q is a little farther back, there is a little
more retardation. This is an eﬀect that we have neglected before, and it is the
only change needed in order to make our results valid for all speeds.
What we must now do is to choose a certain value of t and calculate the value
of τ from it, and thus ﬁnd out where x and y are at that τ. These are then the
retarded x and y, which we call x′ and y′, whose second derivatives determine
the ﬁeld. Thus τ is determined by

c + z(τ)

t = τ + R0

c
and
x′(t) = x(τ),
y′(t) = y(τ).
(34.4)

Now these are complicated equations, but it is easy enough to make a geometrical
picture to describe their solution. This picture will give us a good qualitative
feeling for how things work, but it still takes a lot of detailed mathematics to
deduce the precise results of a complicated problem.

34-3x′(t)

x

z(τ)

cτ




z

ct



TO OBSERVER

Fig. 34-2. A geometrical solution of Eq. (34.5) to ﬁnd x′(t).

34-2 Finding the “apparent” motion

The above equation has an interesting simpliﬁcation. If we disregard the
uninteresting constant delay R0/c, which just means that we must change the
origin of t by a constant, then it says that

ct = cτ + z(τ),
x′ = x(τ),
y′ = y(τ).
(34.5)

Now we need to ﬁnd x′ and y′ as functions of t, not τ, and we can do this in
the following way: Eq. (34.5) says that we should take the actual motion and
add a constant (the speed of light) times τ. What that turns out to mean is
shown in Fig. 34-2. We take the actual motion of the charge (shown at left) and
imagine that as it is going around it is being swept away from the point P at
the speed c (there are no contractions from relativity or anything like that; this
is just a mathematical addition of the cτ). In this way we get a new motion,
in which the line-of-sight coordinate is ct, as shown at the right. (The ﬁgure
shows the result for a rather complicated motion in a plane, but of course the
motion may not be in one plane—it may be even more complicated than motion
in a plane.) The point is that the horizontal (i.e., line-of-sight) distance now is
no longer the old z, but is z + cτ, and therefore is ct. Thus we have found a
picture of the curve, x′ (and y′) against t! All we have to do to ﬁnd the ﬁeld
is to look at the acceleration of this curve, i.e., to diﬀerentiate it twice. So the
ﬁnal answer is: in order to ﬁnd the electric ﬁeld for a moving charge, take the
motion of the charge and translate it back at the speed c to “open it out”; then
the curve, so drawn, is a curve of the x′ and y′ positions of the function of t. The
acceleration of this curve gives the electric ﬁeld as a function of t. Or, if we wish,
we can now imagine that this whole “rigid” curve moves forward at the speed

34-4
