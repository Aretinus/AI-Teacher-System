# Vector algebra

or, alternatively, for

Fx′ = x′,
Fy′ = y′,
Fz′ = z′.

The fact that a physical relationship can be expressed as a vector equation assures
us the relationship is unchanged by a mere rotation of the coordinate system.
That is the reason why vectors are so useful in physics.
Now let us examine some of the properties of vectors. As examples of vectors
we may mention velocity, momentum, force, and acceleration. For many purposes
it is convenient to represent a vector quantity by an arrow that indicates the
direction in which it is acting. Why can we represent force, say, by an arrow?
Because it has the same mathematical transformation properties as a “step in
space.” We thus represent it in a diagram as if it were a step, using a scale such
that one unit of force, or one newton, corresponds to a certain convenient length.
Once we have done this, all forces can be represented as lengths, because an
equation like
F = kr,

where k is some constant, is a perfectly legitimate equation. Thus we can always
represent forces by lines, which is very convenient, because once we have drawn
the line we no longer need the axes. Of course, we can quickly calculate the
three components as they change upon turning the axes, because that is just a
geometric problem.

11-5 Vector algebra

Now we must describe the laws, or rules, for combining vectors in various ways.
The ﬁrst such combination is the addition of two vectors: suppose that a is a vector
which in some particular coordinate system has the three components (ax, ay, az),
and that b is another vector which has the three components (bx, by, bz). Now
let us invent three new numbers (ax + bx, ay + by, az + bz). Do these form a
vector? “Well,” we might say, “they are three numbers, and every three numbers
form a vector.” No, not every three numbers form a vector! In order for it to be
a vector, not only must there be three numbers, but these must be associated
with a coordinate system in such a way that if we turn the coordinate system,
the three numbers “revolve” on each other, get “mixed up” in each other, by
the precise laws we have already described. So the question is, if we now rotate
the coordinate system so that (ax, ay, az) become (ax′, ay′, az′) and (bx, by, bz)

11-10become (bx′, by′, bz′), what do (ax +bx, ay +by, az +bz) become? Do they become
(ax′ + bx′, ay′ + by′, az′ + bz′) or not? The answer is, of course, yes, because
the prototype transformations of Eq. (11.5) constitute what we call a linear
transformation. If we apply those transformations to ax and bx to get ax′ + bx′,
we ﬁnd that the transformed ax + bx is indeed the same as ax′ + bx′. When a
and b are “added together” in this sense, they will form a vector which we may
call c. We would write this as

c = a + b.

Now c has the interesting property

c = b + a,

as we can immediately see from its components. Thus also,

a + (b + c) = (a + b) + c.

We can add vectors in any order.
What is the geometric signiﬁcance of a + b? Suppose that a and b were
represented by lines on a piece of paper, what would c look like? This is shown
in Fig. 11-4. We see that we can add the components of b to those of a most
conveniently if we place the rectangle representing the components of b next to
that representing the components of a in the manner indicated. Since b just
“ﬁts” into its rectangle, as does a into its rectangle, this is the same as putting
the “tail” of b on the “head” of a, the arrow from the “tail” of a to the “head”
of b being the vector c. Of course, if we added a to b the other way around, we

y

c

b

a

x

Fig. 11-4. The addition of vectors.

11-11would put the “tail” of a on the “head” of b, and by the geometrical properties
of parallelograms we would get the same result for c. Note that vectors can be
added in this way without reference to any coordinate axes.
Suppose we multiply a vector by a number α, what does this mean? We
deﬁne it to mean a new vector whose components are αax, αay, and αaz. We
leave it as a problem for the student to prove that it is a vector.
Now let us consider vector subtraction. We may deﬁne subtraction in the
same way as addition, but instead of adding, we subtract the components. Or
we might deﬁne subtraction by deﬁning a negative vector, −b = −1b, and then
we would add the components. It comes to the same thing. The result is shown
in Fig. 11-5. This ﬁgure shows d = a −b = a + (−b); we also note that the
diﬀerence a −b can be found very easily from a and b by using the equivalent
relation a = b + d. Thus the diﬀerence is even easier to ﬁnd than the sum: we
just draw the vector from b to a, to get a −b!

d

a
b

−b

d = a −b

Fig. 11-5. The subtraction of vectors.

Next we discuss velocity. Why is velocity a vector? If position is given
by the three coordinates (x, y, z), what is the velocity? The velocity is given
by dx/dt, dy/dt, and dz/dt.
Is that a vector, or not?
We can ﬁnd out by
diﬀerentiating the expressions in Eq. (11.5) to ﬁnd out whether dx′/dt transforms
in the right way. We see that the components dx/dt and dy/dt do transform
according to the same law as x and y, and therefore the time derivative is a
vector. So the velocity is a vector. We can write the velocity in an interesting
way as
v = dr/dt.

What the velocity is, and why it is a vector, can also be understood more
pictorially: How far does a particle move in a short time ∆t? Answer: ∆r, so if
a particle is “here” at one instant and “there” at another instant, then the vector
diﬀerence of the positions ∆r = r2 −r1, which is in the direction of motion

11-12shown in Fig. 11-6, divided by the time interval ∆t = t2 −t1, is the “average
velocity” vector.


∆r = r2 −r1

r2


r1

O

Fig. 11-6. The displacement of a particle in a short time interval ∆t =
t2 −t1.

In other words, by vector velocity we mean the limit, as ∆t goes to 0, of the
diﬀerence between the radius vectors at the time t + ∆t and the time t, divided
by ∆t:
v = lim
∆t→0(∆r/∆t) = dr/dt.
(11.10)

Thus velocity is a vector because it is the diﬀerence of two vectors. It is also the
right deﬁnition of velocity because its components are dx/dt, dy/dt, and dz/dt.
In fact, we see from this argument that if we diﬀerentiate any vector with respect
to time we produce a new vector. So we have several ways of producing new
vectors: (1) multiply by a constant, (2) diﬀerentiate with respect to time, (3) add
or subtract two vectors.

11-6 Newton’s laws in vector notation

In order to write Newton’s laws in vector form, we have to go just one step
further, and deﬁne the acceleration vector. This is the time derivative of the
velocity vector, and it is easy to demonstrate that its components are the second
derivatives of x, y, and z with respect to t:

dt =
 d


= d2r

dr

a = dv

dt2 ,
(11.11)

dt

dt

dt = d2x

dt = d2y

dt = d2z

ax = dvx

dt2 ,
ay = dvy

dt2 ,
az = dvz

dt2 .
(11.12)

11-13
