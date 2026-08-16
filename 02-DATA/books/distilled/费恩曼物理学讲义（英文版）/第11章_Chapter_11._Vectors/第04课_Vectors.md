# Vectors

Behold! The right sides of Eqs. (11.8) and (11.9) are identical, so we conclude
that if Newton’s laws are correct on one set of axes, they are also valid on
any other set of axes. This result, which has now been established for both
translation and rotation of axes, has certain consequences: ﬁrst, no one can
claim his particular axes are unique, but of course they can be more convenient
for certain particular problems. For example, it is handy to have gravity along
one axis, but this is not physically necessary. Second, it means that any piece
of equipment which is completely self-contained, with all the force-generating
equipment completely inside the apparatus, would work the same when turned
at an angle.

11-4 Vectors

Not only Newton’s laws, but also the other laws of physics, so far as we know
today, have the two properties which we call invariance (or symmetry) under
translation of axes and rotation of axes. These properties are so important that a
mathematical technique has been developed to take advantage of them in writing
and using physical laws.
The foregoing analysis involved considerable tedious mathematical work. To
reduce the details to a minimum in the analysis of such questions, a very powerful
mathematical machinery has been devised. This system, called vector analysis,
supplies the title of this chapter; strictly speaking, however, this is a chapter on
the symmetry of physical laws. By the methods of the preceding analysis we
were able to do everything required for obtaining the results that we sought, but
in practice we should like to do things more easily and rapidly, so we employ the
vector technique.
We began by noting some characteristics of two kinds of quantities that are
important in physics. (Actually there are more than two, but let us start out
with two.) One of them, like the number of potatoes in a sack, we call an ordinary
quantity, or an undirected quantity, or a scalar. Temperature is an example of
such a quantity. Other quantities that are important in physics do have direction,
for instance velocity: we have to keep track of which way a body is going, not
just its speed. Momentum and force also have direction, as does displacement:
when someone steps from one place to another in space, we can keep track of
how far he went, but if we wish also to know where he went, we have to specify a
direction.
All quantities that have a direction, like a step in space, are called vectors.

11-8A vector is three numbers. In order to represent a step in space, say from the
origin to some particular point P whose location is (x, y, z), we really need three
numbers, but we are going to invent a single mathematical symbol, r, which is
unlike any other mathematical symbols we have so far used.* It is not a single
number, it represents three numbers: x, y, and z. It means three numbers, but not
really only those three numbers, because if we were to use a diﬀerent coordinate
system, the three numbers would be changed to x′, y′, and z′. However, we want
to keep our mathematics simple and so we are going to use the same mark to
represent the three numbers (x, y, z) and the three numbers (x′, y′, z′). That
is, we use the same mark to represent the ﬁrst set of three numbers for one
coordinate system, but the second set of three numbers if we are using the other
coordinate system. This has the advantage that when we change the coordinate
system, we do not have to change the letters of our equations. If we write an
equation in terms of x, y, z, and then use another system, we have to change to
x′, y′, z′, but we shall just write r, with the convention that it represents (x, y, z)
if we use one set of axes, or (x′, y′, z′) if we use another set of axes, and so on.
The three numbers which describe the quantity in a given coordinate system are
called the components of the vector in the direction of the coordinate axes of that
system. That is, we use the same symbol for the three letters that correspond
to the same object, as seen from diﬀerent axes. The very fact that we can say
“the same object” implies a physical intuition about the reality of a step in space,
that is independent of the components in terms of which we measure it. So the
symbol r will represent the same thing no matter how we turn the axes.
Now suppose there is another directed physical quantity, any other quantity,
which also has three numbers associated with it, like force, and these three
numbers change to three other numbers by a certain mathematical rule, if we
change the axes. It must be the same rule that changes (x, y, z) into (x′, y′, z′). In
other words, any physical quantity associated with three numbers which transform
as do the components of a step in space is a vector. An equation like

F = r

would thus be true in any coordinate system if it were true in one. This equation,
of course, stands for the three equations

Fx = x,
Fy = y,
Fz = z,

* In type, vectors are represented by boldface; in handwritten form an arrow is used: ⃗r.

11-9or, alternatively, for

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

11-10
