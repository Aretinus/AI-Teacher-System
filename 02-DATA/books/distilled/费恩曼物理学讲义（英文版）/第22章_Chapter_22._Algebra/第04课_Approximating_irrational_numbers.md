# Approximating irrational numbers

22-4 Approximating irrational numbers

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

22-6We are all familiar with the fact that one can use this fact in a practical way to
multiply numbers if we have a table of logarithms. The only question is, with
what base b shall we compute? It makes no diﬀerence what base is used; we
can use the same principle all the time, and if we are using logarithms to any
particular base, we can ﬁnd logarithms to any other base merely by a change
in scale, a multiplying factor. If we multiply Eq. (22.3) by 61, it is just as true,
and if we had a table of logs with a base b, and somebody else multiplied all of
our table by 61, there would be no essential diﬀerence. Suppose that we know
the logarithms of all the numbers to the base b. In other words, we can solve
the equation ba = c for any c because we have a table. The problem is to ﬁnd
the logarithm of the same number c to some other base, let us say the base x.
We would like to solve xa′ = c. It is easy to do, because we can always write
x = bt, which deﬁnes t, knowing x and b. As a matter of fact, t = logb x. Then
if we put that in and solve for a′, we see that (bt)a′ = ba′t = c. In other words,
ta′ is the logarithm of c in base b. Thus a′ = a/t. Thus logs to base x are just
1/t, which is a constant, times the logs to the base, b. Therefore any log table is
equivalent to any other log table if we multiply by a constant, and the constant
is 1/ logb x. This permits us to choose a particular base, and for convenience we
take the base 10. (The question may arise as to whether there is any natural
base, any base in which things are somehow simpler, and we shall try to ﬁnd an
answer to that later. At the moment we shall just use the base 10.)
Now let us see how to calculate logarithms. We begin by computing successive
square roots of 10, by cut and try. The results are shown in Table 22-1. The
powers of 10 are given in the ﬁrst column, and the result, 10s, is given in the
third column. Thus 101 = 10. The one-half power of 10 we can easily work out,
because that is the square root of 10, and there is a known, simple process for
taking square roots of any number.* Using this process, we ﬁnd the ﬁrst square
root to be 3.16228. What good is that? It already tells us something, it tells
us how to take 100.5, so we now know at least one logarithm, if we happen to
need the logarithm of 3.16228, we know the answer is close to 0.50000. But we
must do a little bit better than that; we clearly need more information. So we
take the square root again, and ﬁnd 101/4, which is 1.77828. Now we have the
logarithm of more numbers than we had before, 1.250 is the logarithm of 17.78

* There is a deﬁnite arithmetic procedure, but the easiest way to ﬁnd the square root of any
number N is to choose some a fairly close, ﬁnd N/a, average a′ = 1

2[a + (N/a)], and use this
average a′ for the next choice for a. The convergence is very rapid—the number of signiﬁcant
ﬁgures doubles each time.

22-7Table 22-1

Successive Square Roots of Ten

Power s
1024 s
10s
(10s −1)/s

10.00000
9.00
1/2
3.16228
4.32
1/4
1.77828
3.113
1/8
1.33352
2.668
1/16
1.15478
2.476
1/32
1.074607
2.3874
1/64
1.036633
2.3445
1/128
1.018152
2.3234211

1/256
1.0090350
2.3130104

1/512
1.0045073
2.3077 53

1/1024
1.0022511
2.3051 26
y

∆/1024
∆
1 + 0.0022486∆←−2.3025
(∆→0)

and, incidentally, if it happens that somebody asks for 100.75, we can get it,
because that is 10(0.5+0.25); it is therefore the product of the second and third
numbers. If we can get enough numbers in column s to be able to make up
almost any number, then by multiplying the proper things in column 3, we can
get 10 to any power; that is the plan. So we evaluate ten successive square roots
of 10, and that is the main work which is involved in the calculations.
Why don’t we keep on going for more and more accuracy? Because we begin
to notice something. When we raise 10 to a very small power, we get 1 plus
a small amount. The reason for this is clear, because we are going to have to
take the 1000th power of 101/1000 to get back to 10, so we had better not start
with too big a number; it has to be close to 1. What we notice is that the small
numbers that are added to 1 begin to look as though we are merely dividing
by 2 each time; we see 1815 becomes 903, then 450, 225; so it is clear that, to an
excellent approximation, if we take another root, we shall get 1.00112 something,
and rather than actually take all the square roots, we guess at the ultimate
limit. When we take a small fraction ∆/1024 as ∆approaches zero, what will
the answer be? Of course it will be some number close to 1 + 0.0022511 ∆. Not

22-8exactly 1 + 0.0022511 ∆, however—we can get a better value by the following
trick: we subtract the 1, and then divide by the power s. This ought to correct
all the excesses to the same value. We see that they are very closely equal. At
the top of the table they are not equal, but as they come down, they get closer
and closer to a constant value. What is the value? Again we look to see how the
series is going, how it has changed with s. It changed by 211, by 104, by 53, by
26. These changes are obviously half of each other, very closely, as we go down.
Therefore, if we kept going, the changes would be 13, 7, 3, 2 and 1, more or less,
or a total of 26. Thus we have only 26 more to go, and so we ﬁnd that the true
number is 2.3025. (Actually, we shall later see that the exact number should
be 2.3026, but to keep it realistic, we shall not alter anything in the arithmetic.)
From this table we can now calculate any power of 10, by compounding the power
out of 1024ths.
Let us now actually calculate a logarithm, because the process we shall use is
where logarithm tables actually come from. The procedure is shown in Table 22-2,
and the numerical values are shown in Table 22-1 (columns 2 and 3).

Table 22-2

Calculation of a logarithm: log10 2

2 ÷ 1.77828 = 1.124682

1.124682 ÷ 1.074607 = 1.046598, etc.

∴2 = (1.77828)(1.074607)(1.036633)(1.0090350)(1.000573)

= 10

1024(256 + 32 + 16 + 4 + 0.254)


= 10

308.254




= 100.30103

2249 = 0.254


∴log10 2 = 0.30103

Suppose we want the logarithm of 2. That is, we want to know to what power
we must raise 10 to get 2. Can we raise 10 to the 1/2 power? No; that is too big.
In other words, we can see that the answer is going to be bigger than 1/4, and
less than 1/2. Let us take the factor 101/4 out; we divide 2 by 1.778 . . . , and get
1.124 . . . , and so on, and now we know that we have taken away 0.250000 from
the logarithm. The number 1.124 . . . , is now the number whose logarithm we
need. When we are ﬁnished we shall add back the 1/4, or 256/1024. Now we

22-9look in the table for the next number just below 1.124 . . . , and that is 1.074607.
We therefore divide by 1.074607 and get 1.046598. From that we discover that 2
can be made up of a product of numbers that are in Table 22-1, as follows:

2 = (1.77828)(1.074607)(1.036633)(1.0090350)(1.000573).

There was one factor (1.000573) left over, naturally, which is beyond the range of
our table. To get the logarithm of this factor, we use our result that 10∆/1024 ≈
1 + 2.3025∆/1024.
We ﬁnd ∆= 0.254.
Therefore our answer is 10 to the
following power: (256 + 32 + 16 + 4 + 0.254)/1024. Adding those together, we get
308.254/1024. Dividing, we get 0.30103, so we know that the log10 2 = 0.30103,
which happens to be right to 5 ﬁgures!
This is how logarithms were originally computed by Mr. Briggs of Halifax,
in 1620. He said, “I computed successively 54 square roots of 10.” We know he
really computed only the ﬁrst 27, because the rest of them can be obtained by this
trick with ∆. His work involved calculating the square root of 10 twenty-seven
times, which is not much more than the ten times we did; however, it was more
work because he calculated to sixteen decimal places, and then reduced his answer
to fourteen when he published it, so that there were no rounding errors. He
made tables of logarithms to fourteen decimal places by this method, which is
quite tedious. But all logarithm tables for three hundred years were borrowed
from Mr. Briggs’ tables by reducing the number of decimal places. Only in
modern times, with the WPA and computing machines, have new tables been
independently computed. There are much more eﬃcient methods of computing
logarithms today, using certain series expansions.
In the above process, we discovered something rather interesting, and that
is that for very small powers ϵ we can calculate 10ϵ easily; we have discovered
that 10ϵ = 1 + 2.3025ϵ, by sheer numerical analysis. Of course this also means
that 10n/2.3025 = 1 + n if n is very small. Now logarithms to any other base
are merely multiples of logarithms to the base 10. The base 10 was used only
because we have 10 ﬁngers, and the arithmetic of it is easy, but if we ask for a
mathematically natural base, one that has nothing to do with the number of
ﬁngers on human beings, we might try to change our scale of logarithms in some
convenient and natural manner, and the method which people have chosen is
to redeﬁne the logarithms by multiplying all the logarithms to the base 10 by
2.3025 . . . This then corresponds to using some other base, and this is called the
natural base, or base e. Note that loge(1 + n) ≈n, or en ≈1 + n as n →0.

22-10It is easy enough to ﬁnd out what e is: e = 101/2.3025 or 100.434294..., an
irrational power. Our table of the successive square roots of 10 can be used
to compute, not just logarithms, but also 10 to any power, so let us use it to
calculate this natural base e. For convenience we transform 0.434294 . . . into
444.73/1024. Now, 444.73 is 256 + 128 + 32 + 16 + 8 + 4 + 0.73. Therefore e,
since it is an exponent of a sum, will be a product of the numbers

(1.77828)(1.33352)(1.074607)(1.036633)(1.018152)(1.009035)(1.001643) = 2.7184.

(The only problem is the last one, which is 0.73, and which is not in the table,
but we know that if ∆is small enough, the answer is 1 + 2.3025 ∆.) When we
multiply all these together, we get 2.7184 (it should be 2.7183, but it is good
enough). The use of such tables, then, is the way in which irrational powers and
the logarithms of irrational numbers are all calculated. That takes care of the
irrationals.

22-5 Complex numbers

Now it turns out that after all that work we still cannot solve every equation!
For instance, what is the square root of −1? Suppose we have to ﬁnd x2 = −1.
The square of no rational, of no irrational, of nothing that we have discovered so
far, is equal to −1. So we again have to generalize our numbers to a still wider
class. Let us suppose that a speciﬁc solution of x2 = −1 is called something, we
shall call it i; i has the property, by deﬁnition, that its square is −1. That is
about all we are going to say about it; of course, there is more than one root
of the equation x2 = −1. Someone could write i, but another could say, “No,
I prefer −i. My i is minus your i.” It is just as good a solution, and since the
only deﬁnition that i has is that i2 = −1, it must be true that any equation we
can write is equally true if the sign of i is changed everywhere. This is called
taking the complex conjugate. Now we are going to make up numbers by adding
successive i’s, and multiplying i’s by numbers, and adding other numbers, and
so on, according to all of our rules. In this way we ﬁnd that numbers can all be
written in the form p + iq, where p and q are what we call real numbers, i.e., the
numbers we have been deﬁning up until now. The number i is called the unit
imaginary number. Any real multiple of i is called pure imaginary. The most
general number, a, is of the form p + iq and is called a complex number. Things
do not get any worse if, for instance, we multiply two such numbers, let us say

22-11
