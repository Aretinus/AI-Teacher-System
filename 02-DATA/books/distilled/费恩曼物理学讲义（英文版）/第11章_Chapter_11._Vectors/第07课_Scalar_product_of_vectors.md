# Scalar product of vectors

v1

∆v
∆v⊥

∆θ

∆v∥

v2

Fig. 11-8. Diagram for calculating the acceleration.

draw a line across, so watch out! We have to draw a new diagram to subtract
the vectors. In Fig. 11-8, v1 and v2 are both drawn parallel and equal to their
counterparts in Fig. 11-7, and now we can discuss the acceleration. Of course the
acceleration is simply ∆v/∆t. It is interesting to note that we can compose the
velocity diﬀerence out of two parts; we can think of acceleration as having two
components, ∆v∥, in the direction tangent to the path and ∆v⊥at right angles
to the path, as indicated in Fig. 11-8. The acceleration tangent to the path is, of
course, just the change in the length of the vector, i.e., the change in the speed v:

a∥= dv/dt.
(11.15)

The other component of acceleration, at right angles to the curve, is easy to
calculate, using Figs. 11-7 and 11-8. In the short time ∆t let the change in angle
between v1 and v2 be the small angle ∆θ. If the magnitude of the velocity is
called v, then of course

∆v⊥= v ∆θ

and the acceleration a will be

a⊥= v (∆θ/∆t).

Now we need to know ∆θ/∆t, which can be found this way: If, at the given
moment, the curve is approximated as a circle of a certain radius R, then in a
time ∆t the distance s is, of course, v ∆t, where v is the speed.

∆θ = (v ∆t)/R,
or
∆θ/∆t = v/R.

Therefore, we ﬁnd

a⊥= v2/R,
(11.16)

as we have seen before.

11-7 Scalar product of vectors

Now let us examine a little further the properties of vectors. It is easy to see
that the length of a step in space would be the same in any coordinate system.

11-15That is, if a particular step r is represented by x, y, z, in one coordinate system,
and by x′, y′, z′ in another coordinate system, surely the distance r = |r| would
be the same in both. Now

x2 + y2 + z2

r =
p

and also

r′ =
p

x′2 + y′2 + z′2.

So what we wish to verify is that these two quantities are equal. It is much more
convenient not to bother to take the square root, so let us talk about the square
of the distance; that is, let us ﬁnd out whether

x2 + y2 + z2 = x′2 + y′2 + z′2.
(11.17)

It had better be—and if we substitute Eq. (11.5) we do indeed ﬁnd that it is.
So we see that there are other kinds of equations which are true for any two
coordinate systems.
Something new is involved. We can produce a new quantity, a function of
x, y, and z, called a scalar function, a quantity which has no direction but which
is the same in both systems. Out of a vector we can make a scalar. We have to
ﬁnd a general rule for that. It is clear what the rule is for the case just considered:
add the squares of the components. Let us now deﬁne a new thing, which we
call a · a. This is not a vector, but a scalar; it is a number that is the same in all
coordinate systems, and it is deﬁned to be the sum of the squares of the three
components of the vector:

a · a = a2
x + a2
y + a2
z.
(11.18)

Now you say, “But with what axes?” It does not depend on the axes, the answer is
the same in every set of axes. So we have a new kind of quantity, a new invariant
or scalar produced by one vector “squared.” If we now deﬁne the following quantity
for any two vectors a and b:

a · b = axbx + ayby + azbz,
(11.19)

we ﬁnd that this quantity, calculated in the primed and unprimed systems, also
stays the same. To prove it we note that it is true of a · a, b · b, and c · c, where

11-16c = a + b. Therefore the sum of the squares (ax + bx)2 + (ay + by)2 + (az + bz)2

will be invariant:

(ax + bx)2 + (ay + by)2 + (az + bz)2 = (ax′ + bx′)2

+ (ay′ + by′)2 + (az′ + bz′)2.
(11.20)

If both sides of this equation are expanded, there will be cross products of just the
type appearing in Eq. (11.19), as well as the sums of squares of the components
of a and b. The invariance of terms of the form of Eq. (11.18) then leaves the
cross product terms (11.19) invariant also.
The quantity a · b is called the scalar product of two vectors, a and b, and it
has many interesting and useful properties. For instance, it is easily proved that

a · (b + c) = a · b + a · c.
(11.21)

Also, there is a simple geometrical way to calculate a · b, without having to
calculate the components of a and b: a · b is the product of the length of a and
the length of b times the cosine of the angle between them. Why? Suppose
that we choose a special coordinate system in which the x-axis lies along a; in
those circumstances, the only component of a that will be there is ax, which is
of course the whole length of a. Thus Eq. (11.19) reduces to a · b = axbx for this
case, and this is the length of a times the component of b in the direction of a,
that is, b cos θ:
a · b = ab cos θ.

Therefore, in that special coordinate system, we have proved that a · b is the
length of a times the length of b times cos θ. But if it is true in one coordinate
system, it is true in all, because a · b is independent of the coordinate system;
that is our argument.
What good is the dot product? Are there any cases in physics where we
need it? Yes, we need it all the time. For instance, in Chapter 4 the kinetic
energy was called 1

2mv2, but if the object is moving in space it should be the
velocity squared in the x-direction, the y-direction, and the z-direction, and so
the formula for kinetic energy according to vector analysis is

2m(v2
x + v2
y + v2
z).
(11.22)

K.E. = 1

2m(v · v) = 1

Energy does not have direction. Momentum has direction; it is a vector, and it
is the mass times the velocity vector.

11-17Another example of a dot product is the work done by a force when something
is pushed from one place to the other. We have not yet deﬁned work, but it is
equivalent to the energy change, the weights lifted, when a force F acts through
a distance s:
Work = F · s.
(11.23)

It is sometimes very convenient to talk about the component of a vector in
a certain direction (say the vertical direction because that is the direction of
gravity). For such purposes, it is useful to invent what we call a unit vector in
the direction that we want to study. By a unit vector we mean one whose dot
product with itself is equal to unity. Let us call this unit vector i; then i · i = 1.
Then, if we want the component of some vector in the direction of i, we see that
the dot product a · i will be a cos θ, i.e., the component of a in the direction
of i. This is a nice way to get the component; in fact, it permits us to get all
the components and to write a rather amusing formula. Suppose that in a given
system of coordinates, x, y, and z, we invent three vectors: i, a unit vector in
the direction x; j, a unit vector in the direction y; and k, a unit vector in the
direction z. Note ﬁrst that i · i = 1. What is i · j? When two vectors are at right
angles, their dot product is zero. Thus

i · i = 1

i · j = 0
j · j = 1

i · k = 0
j · k = 0
k · k = 1
(11.24)

Now with these deﬁnitions, any vector whatsoever can be written this way:

a = axi + ayj + azk.
(11.25)

By this means we can go from the components of a vector to the vector itself.
This discussion of vectors is by no means complete. However, rather than try
to go more deeply into the subject now, we shall ﬁrst learn to use in physical
situations some of the ideas so far discussed. Then, when we have properly
mastered this basic material, we shall ﬁnd it easier to penetrate more deeply into
the subject without getting too confused. We shall later ﬁnd that it is useful
to deﬁne another kind of product of two vectors, called the vector product, and
written as a × b. However, we shall undertake a discussion of such matters in a
later chapter.

11-1812

Characteristics of Force

12-1 What is a force?

Although it is interesting and worth while to study the physical laws simply
because they help us to understand and to use nature, one ought to stop every
once in a while and think, “What do they really mean?” The meaning of any
statement is a subject that has interested and troubled philosophers from time
immemorial, and the meaning of physical laws is even more interesting, because
it is generally believed that these laws represent some kind of real knowledge.
The meaning of knowledge is a deep problem in philosophy, and it is always
important to ask, “What does it mean?”
Let us ask, “What is the meaning of the physical laws of Newton, which we
write as F = ma? What is the meaning of force, mass, and acceleration?” Well,
we can intuitively sense the meaning of mass, and we can deﬁne acceleration if
we know the meaning of position and time. We shall not discuss those meanings,
but shall concentrate on the new concept of force. The answer is equally simple:
“If a body is accelerating, then there is a force on it.” That is what Newton’s laws
say, so the most precise and beautiful deﬁnition of force imaginable might simply
be to say that force is the mass of an object times the acceleration. Suppose we
have a law which says that the conservation of momentum is valid if the sum
of all the external forces is zero; then the question arises, “What does it mean,
that the sum of all the external forces is zero?” A pleasant way to deﬁne that
statement would be: “When the total momentum is a constant, then the sum of
the external forces is zero.” There must be something wrong with that, because it
is just not saying anything new. If we have discovered a fundamental law, which
asserts that the force is equal to the mass times the acceleration, and then deﬁne
the force to be the mass times the acceleration, we have found out nothing. We
could also deﬁne force to mean that a moving object with no force acting on it
continues to move with constant velocity in a straight line. If we then observe an
object not moving in a straight line with a constant velocity, we might say that

12-1
