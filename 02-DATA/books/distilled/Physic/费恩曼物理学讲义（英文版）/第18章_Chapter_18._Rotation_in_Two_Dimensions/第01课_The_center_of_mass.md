# The center of mass

Rotation in Two Dimensions

18-1 The center of mass

In the previous chapters we have been studying the mechanics of points, or
small particles whose internal structure does not concern us. For the next few
chapters we shall study the application of Newton’s laws to more complicated
things.
When the world becomes more complicated, it also becomes more
interesting, and we shall ﬁnd that the phenomena associated with the mechanics
of a more complex object than just a point are really quite striking. Of course
these phenomena involve nothing but combinations of Newton’s laws, but it is
sometimes hard to believe that only F = ma is at work.
The more complicated objects we deal with can be of several kinds: water
ﬂowing, galaxies whirling, and so on. The simplest “complicated” object to
analyze, at the start, is what we call a rigid body, a solid object that is turning
as it moves about. However, even such a simple object may have a most complex
motion, and we shall therefore ﬁrst consider the simplest aspects of such motion,
in which an extended body rotates about a ﬁxed axis. A given point on such a
body then moves in a plane perpendicular to this axis. Such rotation of a body
about a ﬁxed axis is called plane rotation or rotation in two dimensions. We
shall later generalize the results to three dimensions, but in doing so we shall
ﬁnd that, unlike the case of ordinary particle mechanics, rotations are subtle and
hard to understand unless we ﬁrst get a solid grounding in two dimensions.
The ﬁrst interesting theorem concerning the motion of complicated objects
can be observed at work if we throw an object made of a lot of blocks and spokes,
held together by strings, into the air. Of course we know it goes in a parabola,
because we studied that for a particle. But now our object is not a particle; it
wobbles and it jiggles, and so on. It does go in a parabola though; one can see
that. What goes in a parabola? Certainly not the point on the corner of the
block, because that is jiggling about; neither is it the end of the wooden stick,

18-1or the middle of the wooden stick, or the middle of the block. But something
goes in a parabola, there is an eﬀective “center” which moves in a parabola. So
our ﬁrst theorem about complicated objects is to demonstrate that there is a
mean position which is mathematically deﬁnable, but not necessarily a point of
the material itself, which goes in a parabola. That is called the theorem of the
center of the mass, and the proof of it is as follows.
We may consider any object as being made of lots of little particles, the atoms,
with various forces among them. Let i represent an index which deﬁnes one of
the particles. (There are millions of them, so i goes to 1023, or something.) Then
the force on the ith particle is, of course, the mass times the acceleration of that
particle:
F i = mi(d2ri/dt2).
(18.1)

In the next few chapters our moving objects will be ones in which all the
parts are moving at speeds very much slower than the speed of light, and we shall
use the nonrelativistic approximation for all quantities. In these circumstances
the mass is constant, so that

F i = d2(miri)/dt2.
(18.2)

If we now add the force on all the particles, that is, if we take the sum of all
the F i’s for all the diﬀerent indexes, we get the total force, F . On the other
side of the equation, we get the same thing as though we added before the
diﬀerentiation:
X

i
F i = F = d2(P

i miri)
dt2
.
(18.3)

Therefore the total force is the second derivative of the masses times their
positions, added together.
Now the total force on all the particles is the same as the external force. Why?
Although there are all kinds of forces on the particles because of the strings, the
wigglings, the pullings and pushings, and the atomic forces, and who knows what,
and we have to add all these together, we are rescued by Newton’s Third Law.
Between any two particles the action and reaction are equal, so that when we
add all the equations together, if any two particles have forces between them it
cancels out in the sum; therefore the net result is only those forces which arise
from other particles which are not included in whatever object we decide to sum
over. So if Eq. (18.3) is the sum over a certain number of the particles, which

18-2together are called “the object,” then the external force on the total object is
equal to the sum of all the forces on all its constituent particles.
Now it would be nice if we could write Eq. (18.3) as the total mass times
some acceleration. We can. Let us say M is the sum of all the masses, i.e., the
total mass. Then if we deﬁne a certain vector R to be

R =
X

i
miri/M,
(18.4)

Eq. (18.3) will be simply

F = d2(MR)/dt2 = M(d2R/dt2),
(18.5)

since M is a constant. Thus we ﬁnd that the external force is the total mass
times the acceleration of an imaginary point whose location is R. This point is
called the center of mass of the body. It is a point somewhere in the “middle”
of the object, a kind of average r in which the diﬀerent ri’s have weights or
importances proportional to the masses.
We shall discuss this important theorem in more detail in a later chapter, and
we shall therefore limit our remarks to two points: First, if the external forces are
zero, if the object were ﬂoating in empty space, it might whirl, and jiggle, and
twist, and do all kinds of things. But the center of mass, this artiﬁcially invented,
calculated position, somewhere in the middle, will move with a constant velocity.
In particular, if it is initially at rest, it will stay at rest. So if we have some kind
of a box, perhaps a space ship, with people in it, and we calculate the location
of the center of mass and ﬁnd it is standing still, then the center of mass will
continue to stand still if no external forces are acting on the box. Of course, the
space ship may move a little in space, but that is because the people are walking
back and forth inside; when one walks toward the front, the ship goes toward
the back so as to keep the average position of all the masses in exactly the same
place.
Is rocket propulsion therefore absolutely impossible because one cannot move
the center of mass? No; but of course we ﬁnd that to propel an interesting part
of the rocket, an uninteresting part must be thrown away. In other words, if we
start with a rocket at zero velocity and we spit some gas out the back end, then
this little blob of gas goes one way as the rocket ship goes the other, but the
center of mass is still exactly where it was before. So we simply move the part
that we are interested in against the part we are not interested in.

18-3The second point concerning the center of mass, which is the reason we
introduced it into our discussion at this time, is that it may be treated separately
from the “internal” motions of an object, and may therefore be ignored in our
discussion of rotation.

18-2 Rotation of a rigid body

Now let us discuss rotations. Of course an ordinary object does not simply
rotate, it wobbles, shakes, and bends, so to simplify matters we shall discuss the
motion of a nonexistent ideal object which we call a rigid body. This means an
object in which the forces between the atoms are so strong, and of such character,
that the little forces that are needed to move it do not bend it. Its shape stays
essentially the same as it moves about. If we wish to study the motion of such a
body, and agree to ignore the motion of its center of mass, there is only one thing
left for it to do, and that is to turn. We have to describe that. How? Suppose
there is some line in the body which stays put (perhaps it includes the center of
mass and perhaps not), and the body is rotating about this particular line as
an axis. How do we deﬁne the rotation? That is easy enough, for if we mark a
point somewhere on the object, anywhere except on the axis, we can always tell
exactly where the object is, if we only know where this point has gone to. The
only thing needed to describe the position of that point is an angle. So rotation
consists of a study of the variations of the angle with time.
In order to study rotation, we observe the angle through which a body has
turned. Of course, we are not referring to any particular angle inside the object
itself; it is not that we draw some angle on the object. We are talking about the
angular change of the position of the whole thing, from one time to another.
First, let us study the kinematics of rotations. The angle will change with
time, and just as we talked about position and velocity in one dimension, we
may talk about angular position and angular velocity in plane rotation. In fact,
there is a very interesting relationship between rotation in two dimensions and
one-dimensional displacement, in which almost every quantity has its analog.
First, we have the angle θ which deﬁnes how far the body has gone around; this
replaces the distance y, which deﬁnes how far it has gone along. In the same
manner, we have a velocity of turning, ω = dθ/dt, which tells us how much the
angle changes in a second, just as v = ds/dt describes how fast a thing moves,
or how far it moves in a second. If the angle is measured in radians, then the
angular velocity ω will be so and so many radians per second. The greater the

18-4
