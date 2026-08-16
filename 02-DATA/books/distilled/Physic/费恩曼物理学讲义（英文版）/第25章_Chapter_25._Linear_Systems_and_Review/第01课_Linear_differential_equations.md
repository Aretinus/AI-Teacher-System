# Linear differential equations

Linear Systems and Review

25-1 Linear diﬀerential equations

In this chapter we shall discuss certain aspects of oscillating systems that are
found somewhat more generally than just in the particular systems we have been
discussing. For our particular system, the diﬀerential equation that we have been
solving is

m d2x

dt2 + γm dx

dt + mω2
0x = F(t).
(25.1)

Now this particular combination of “operations” on the variable x has the
interesting property that if we substitute (x+y) for x, then we get the sum of the
same operations on x and y; or, if we multiply x by a, then we get just a times
the same combination. This is easy to prove. Just as a “shorthand” notation,
because we get tired of writing down all those letters in (25.1), we shall use the
symbol L(x) instead. When we see this, it means the left-hand side of (25.1),
with x substituted in. With this system of writing, L(x + y) would mean the
following:

L(x + y) = m d2(x + y)

dt2
+ γm d(x + y)

dt
+ mω2
0(x + y).
(25.2)

(We underline the L so as to remind ourselves that it is not an ordinary function.)
We sometimes call this an operator notation, but it makes no diﬀerence what we
call it, it is just “shorthand.”
Our ﬁrst statement was that

L(x + y) = L(x) + L(y),
(25.3)

which of course follows from the fact that a(x + y) = ax + ay, d(x + y)/dt =
dx/dt + dy/dt, etc.

25-1Our second statement was, for constant a,

L(ax) = aL(x).
(25.4)

[Actually, (25.3) and (25.4) are very closely related, because if we put x + x
into (25.3), this is the same as setting a = 2 in (25.4), and so on.]
In more complicated problems, there may be more derivatives, and more
terms in L; the question of interest is whether the two equations (25.3) and (25.4)
are maintained or not. If they are, we call such a problem a linear problem. In
this chapter we shall discuss some of the properties that exist because the system
is linear, to appreciate the generality of some of the results that we have obtained
in our special analysis of a special equation.
Now let us study some of the properties of linear diﬀerential equations, having
illustrated them already with the speciﬁc equation (25.1) that we have studied
so closely. The ﬁrst property of interest is this: suppose that we have to solve
the diﬀerential equation for a transient, the free oscillation with no driving force.
That is, we want to solve
L(x) = 0.
(25.5)

Suppose that, by some hook or crook, we have found a particular solution, which
we shall call x1. That is, we have an x1 for which L(x1) = 0. Now we notice
that ax1, is also a solution to the same equation; we can multiply this special
solution by any constant whatever, and get a new solution. In other words, if we
had a motion of a certain “size,” then a motion twice as “big” is again a solution.
Proof: L(ax1) = aL(x1) = a · 0 = 0.
Next, suppose that, by hook or by crook, we have not only found one solu-
tion x1, but also another solution, x2. (Remember that when we substituted
x = eiαt for ﬁnding the transients, we found two values for α, that is, two solutions,
x1 and x2.) Now let us show that the combination (x1 + x2) is also a solution. In
other words, if we put x = x1 + x2, x is again a solution of the equation. Why?
Because, if L(x1) = 0 and L(x2) = 0, then L(x1+x2) = L(x1)+L(x2) = 0+0 = 0.
So if we have found a number of solutions for the motion of a linear system we
can add them together.
Combining these two ideas, we see, of course, that we can also add six of
one and two of the other: if x1 is a solution, so is αx1. Therefore any sum of
these two solutions, such as (αx1 + βx2), is also a solution. If we happen to
be able to ﬁnd three solutions, then we ﬁnd that any combination of the three
solutions is again a solution, and so on. It turns out that the number of what

25-2we call independent solutions* that we have obtained for our oscillator problem
is only two. The number of independent solutions that one ﬁnds in the general
case depends upon what is called the number of degrees of freedom. We shall
not discuss this in detail now, but if we have a second-order diﬀerential equation,
there are only two independent solutions, and we have found both of them; so
we have the most general solution.
Now let us go on to another proposition, which applies to the situation in
which the system is subjected to an outside force. Suppose the equation is

L(x) = F(t),
(25.6)

and suppose that we have found a special solution of it. Let us say that Joe’s
solution is xJ, and that L(xJ) = F(t). Suppose we want to ﬁnd yet another
solution; suppose we add to Joe’s solution one of those that was a solution of the
free equation (25.5), say x1. Then we see by (25.3) that

L(xJ + x1) = L(xJ) + L(x1) = F(t) + 0 = F(t).
(25.7)

Therefore, to the “forced” solution we can add any “free” solution, and we still
have a solution. The free solution is called a transient solution.
When we have no force acting, and suddenly turn one on, we do not imme-
diately get the steady solution that we solved for with the sine wave solution,
but for a while there is a transient which sooner or later dies out, if we wait long
enough. The “forced” solution does not die out, since it keeps on being driven
by the force. Ultimately, for long periods of time, the solution is unique, but
initially the motions are diﬀerent for diﬀerent circumstances, depending on how
the system was started.

25-2 Superposition of solutions

Now we come to another interesting proposition. Suppose that we have a
certain particular driving force Fa (let us say an oscillatory one with a certain
ω = ωa, but our conclusions will be true for any functional form of Fa) and we
have solved for the forced motion (with or without the transients; it makes no
diﬀerence). Now suppose some other force is acting, let us say Fb, and we solve

* Solutions which cannot be expressed as linear combinations of each other are called
independent.

25-3
