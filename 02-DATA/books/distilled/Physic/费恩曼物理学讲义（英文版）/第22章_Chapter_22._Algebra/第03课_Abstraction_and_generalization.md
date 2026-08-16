# Abstraction and generalization

Now here is the idea. These relationships, or rules, are correct for integers,
since they follow from the deﬁnitions of addition, multiplication, and raising to a
power. We are going to discuss whether or not we can broaden the class of objects
which a, b, and c represent so that they will obey these same rules, although the
processes for a + b, and so on, will not be deﬁnable in terms of the direct action
of adding 1, for instance, or successive multiplications by integers.

22-3 Abstraction and generalization

When we try to solve simple algebraic equations using all these deﬁnitions,
we soon discover some insoluble problems, such as the following. Suppose that
we try to solve the equation b = 3 −5. That means, according to our def-
inition of subtraction, that we must ﬁnd a number which, when added to 5,
gives 3.
And of course there is no such number, because we consider only
positive integers; this is an insoluble problem. However, the plan, the great
idea, is this: abstraction and generalization. From the whole structure of al-
gebra, rules plus integers, we abstract the original deﬁnitions of addition and
multiplication, but we leave the rules (22.1) and (22.2), and assume these to
be true in general on a wider class of numbers, even though they are originally
derived on a smaller class. Thus, rather than using integers symbolically to
deﬁne the rules, we use the rules as the deﬁnition of the symbols, which then
represent a more general kind of number. As an example, by working with
the rules alone we can show that 3 −5 = 0 −2. In fact we can show that
one can make all subtractions, provided we deﬁne a whole set of new num-
bers: 0 −1, 0 −2, 0 −3, 0 −4, and so on, called the negative integers. Then
we may use all the other rules, like a(b + c) = ab + ac and so forth, to ﬁnd
what the rules are for multiplying negative numbers, and we will discover, in
fact, that all of the rules can be maintained with negative as well as positive
integers.
So we have increased the range of objects over which the rules work, but the
meaning of the symbols is diﬀerent.
One cannot say, for instance, that −2 times 5 really means to add 5 together
successively −2 times. That means nothing. But nevertheless everything will
work out all right according to the rules.
An interesting problem comes up in taking powers. Suppose that we wish
to discover what a(3−5) means. We know only that 3 −5 is a solution of the
problem, (3 −5) + 5 = 3. Knowing that, we know that a(3−5)a5 = a3. Therefore

22-4a(3−5) = a3/a5, by the deﬁnition of division. With a little more work, this can
be reduced to 1/a2. So we ﬁnd that the negative powers are the reciprocals of
the positive powers, but 1/a2 is a meaningless symbol, because if a is a positive
or negative integer, the square of it is greater than 1, and we do not yet know
what we mean by 1 divided by a number greater than 1!
Onward! The great plan is to continue the process of generalization; whenever
we ﬁnd another problem that we cannot solve we extend our realm of numbers.
Consider division: we cannot ﬁnd a number which is an integer, even a negative
integer, which is equal to the result of dividing 3 by 5. But if we suppose that all
fractional numbers also satisfy the rules, then we can talk about multiplying and
adding fractions, and everything works as well as it did before.
Take another example of powers: what is a3/5? We know only that (3/5)5 = 3,
since that was the deﬁnition of 3/5. So we know also that (a(3/5))5 = a(3/5)(5) =
a3, because this is one of the rules. Then by the deﬁnition of roots we ﬁnd that
a(3/5) =
5√

a3.
In this way, then, we can deﬁne what we mean by putting fractions in the
various symbols, by using the rules themselves to help us determine the deﬁnition—
it is not arbitrary. It is a remarkable fact that all the rules still work for positive
and negative integers, as well as for fractions!
We go on in the process of generalization. Are there any other equations
we cannot solve? Yes, there are. For example, it is impossible to solve this
equation: b = 21/2 =
√

2. It is impossible to ﬁnd a number which is rational (a
fraction) whose square is equal to 2. It is very easy for us in modern days to
answer this question. We know the decimal system, and so we have no diﬃculty
in appreciating the meaning of an unending decimal as a type of approximation
to the square root of 2. Historically, this idea presented great diﬃculty to the
Greeks. To really deﬁne precisely what is meant here requires that we add some
substance of continuity and ordering, and it is, in fact, quite the most diﬃcult
step in the processes of generalization just at this point. It was made, formally
and rigorously, by Dedekind. However, without worrying about the mathematical
rigor of the thing, it is quite easy to understand that what we mean is that we are
going to ﬁnd a whole sequence of approximate fractions, perfect fractions (because
any decimal, when stopped somewhere, is of course rational), which just keeps
on going, getting closer and closer to the desired result. That is good enough
for what we wish to discuss, and it permits us to involve ourselves in irrational
numbers, and to calculate things like the square root of 2 to any accuracy that
we desire, with enough work.

22-522-4 Approximating irrational numbers

The next problem comes with what happens with the irrational powers.
Suppose that we want to deﬁne, for instance, 10
√

2. In principle, the answer is
simple enough. If we approximate the square root of 2 to a certain number of
decimal places, then the power is rational, and we can take the approximate root,
using the above method, and get an approximation to 10
√

2. Then we may run it
up a few more decimal places (it is again rational), take the appropriate root,
this time a much higher root because there is a much bigger denominator in the
fraction, and get a better approximation. Of course we are going to get some
enormously high roots involved here, and the work is quite diﬃcult. How can we
cope with this problem?
In the computations of square roots, cube roots, and other small roots, there
is an arithmetical process available by which we can get one decimal place after
another. But the amount of labor needed to calculate irrational powers and
the logarithms that go with them (the inverse problem) is so great that there
is no simple arithmetical process we can use. Therefore tables have been built
up which permit us to calculate these powers, and these are called the tables
of logarithms, or the tables of powers, depending on which way the table is set
up. It is merely a question of saving time; if we must raise some number to an
irrational power, we can look it up rather than having to compute it. Of course,
such a computation is just a technical problem, but it is an interesting one, and
of great historical value. In the ﬁrst place, not only do we have the problem of
solving x = 10
√

2, but we also have the problem of solving 10x = 2, or x = log10 2.
This is not a problem where we have to deﬁne a new kind of number for the
result, it is merely a computational problem. The answer is simply an irrational
number, an unending decimal, not a new kind of a number.
Let us now discuss the problem of calculating solutions of such equations.
The general idea is really very simple. If we could calculate 101, and 104/10, and
101/100, and 104/1000 and so on, and multiply them all together, we would get
101.414... or 10
√

2, and that is the general idea on which things work. But instead
of calculating 101/10 and so on, we shall calculate 101/2, 101/4, and so on. Before
we start, we should explain why we make so much work with 10, instead of some
other number. Of course, we realize that logarithm tables are of great practical
utility, quite aside from the mathematical problem of taking roots, since with
any base at all,
logb(ac) = logb a + logb c.
(22.3)

22-6
