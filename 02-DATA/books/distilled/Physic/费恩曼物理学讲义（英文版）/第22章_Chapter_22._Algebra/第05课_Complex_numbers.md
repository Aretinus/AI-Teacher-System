# Complex numbers

It is easy enough to ﬁnd out what e is: e = 101/2.3025 or 100.434294..., an
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

22-11(r + is)(p + iq). Then, using the rules, we get

(r + is)(p + iq) = rp + r(iq) + (is)p + (is)(iq)

= rp + i(rq) + i(sp) + (ii)(sq)

= (rp −sq) + i(rq + sp),
(22.4)

since ii = i2 = −1. Therefore all the numbers that now belong in the rules (22.1)
have this mathematical form.
Now you say, “This can go on forever! We have deﬁned powers of imaginaries
and all the rest, and when we are all ﬁnished, somebody else will come along with
another equation which cannot be solved, like x6 + 3x2 = −2. Then we have to
generalize all over again!” But it turns out that with this one more invention, just
the square root of −1, every algebraic equation can be solved! This is a fantastic
fact, which we must leave to the Mathematics Department to prove. The proofs
are very beautiful and very interesting, but certainly not self-evident. In fact,
the most obvious supposition is that we are going to have to invent again and
again and again. But the greatest miracle of all is that we do not. This is the
last invention. After this invention of complex numbers, we ﬁnd that the rules
still work with complex numbers, and we are ﬁnished inventing new things. We
can ﬁnd the complex power of any complex number, we can solve any equation
that is written algebraically, in terms of a ﬁnite number of those symbols. We
do not ﬁnd any new numbers. The square root of i, for instance, has a deﬁnite
result, it is not something new; and ii is something. We will discuss that now.
We have already discussed multiplication, and addition is also easy; if we add
two complex numbers, (p + iq) + (r + is), the answer is (p + r) + i(q + s). Now
we can add and multiply complex numbers. But the real problem, of course, is
to compute complex powers of complex numbers. It turns out that the problem
is actually no more diﬃcult than computing complex powers of real numbers. So
let us concentrate now on the problem of calculating 10 to a complex power, not
just an irrational power, but 10(r+is). Of course, we must at all times use our
rules (22.1) and (22.2). Thus

10(r+is) = 10r10is.
(22.5)

But 10r we already know how to compute, and we can always multiply anything
by anything else; therefore the problem is to compute only 10is. Let us call it
some complex number, x + iy. Problem: given s, ﬁnd x, ﬁnd y. Now if

10is = x + iy,

22-12then the complex conjugate of this equation must also be true, so that

10−is = x −iy.

(Thus we see that we can deduce a number of things without actually computing
anything, by using our rules.) We deduce another interesting thing by multiplying
these together:

10is10−is = 100 = 1 = (x + iy)(x −iy) = x2 + y2.
(22.6)

Thus if we ﬁnd x, we have y also.
Now the problem is how to compute 10 to an imaginary power. What guide
is there? We may work over our rules until we can go no further, but here is a
reasonable guide: if we can compute it for any particular s, we can get it for all
the rest. If we know 10is for any one s and then we want it for twice that s, we
can square the number, and so on. But how can we ﬁnd 10is for even one special
value of s? To do so we shall make one additional assumption, which is not quite
in the category of all the other rules, but which leads to reasonable results and
permits us to make progress: when the power is small, we shall suppose that the
“law” 10ϵ = 1 + 2.3025ϵ is right, as ϵ gets very small, not only for real ϵ, but for
complex ϵ as well. Therefore, we begin with the supposition that this law is true
in general, and that tells us that 10is = 1 + 2.3025 · is, for s →0. So we assume
that if s is very small, say one part in 1024, we have a rather good approximation
to 10is.
Now we make a table by which we can compute all the imaginary powers
of 10, that is, compute x and y. It is done as follows. The ﬁrst power we start
with is the 1/1024 power, which we presume is very nearly 1 + 2.3025i/1024.
Thus we start with
10i/1024 = 1.00000 + 0.0022486i,
(22.7)

and if we keep multiplying the number by itself, we can get to a higher imaginary
power. In fact, we may just reverse the procedure we used in making our logarithm
table, and calculate the square, 4th power, 8th power, etc., of (22.7), and thus
build up the values shown in Table 22-3. We notice an interesting thing, that
the x numbers are positive at ﬁrst, but then swing negative. We shall look into
that a little bit more in a moment. But ﬁrst we may be curious to ﬁnd for what
number s the real part of 10is is zero. The y-value would be 1, and so we would
have 10is = 1i, or is = log10 i. As an example of how to use this table, just as
we calculated log10 2 before, let us now use Table 22-3 to ﬁnd log10 i.

22-13Table 22-3

Successive Squares of 10i/1024 = 1 + 0.0022486i

Power is
1024s
10is

i/1024
1.00000 + 0.00225i*
i/512
1.00000 + 0.00450i
i/256
0.99996 + 0.00900i
i/128
0.99984 + 0.01800i
i/64
0.99936 + 0.03599i
i/32
0.99742 + 0.07193i
i/16
0.98967 + 0.14349i
i/8
0.95885 + 0.28402i
i/4
0.83872 + 0.54467i
i/2
0.40679 + 0.91365i
i/1
−0.66928 + 0.74332i

* Should be 0.0022486i

Which of the numbers in Table 22-3 do we have to multiply together to
get a pure imaginary result? After a little trial and error, we discover that to
reduce x the most, it is best to multiply “512” by “128.” This gives 0.13056 +
0.99159i. Then we discover that we should multiply this by a number whose
imaginary part is about equal to the size of the real part we are trying to remove.
Thus we choose “64” whose y-value is 0.14349, since that is closest to 0.13056.
This then gives −0.01308 + 1.00008i. Now we have overshot, and must divide
by 0.99996 + 0.00900i. How do we do that? By changing the sign of i and
multiplying by 0.99996 −0.00900i (which works if x2 + y2 = 1). Continuing in
this way, we ﬁnd that the entire power to which 10 must be raised to give i is
i(512 + 128 + 64 −4 −2 + 0.20)/1024, or 698.20i/1024. If we raise 10 to that
power, we can get i. Therefore log10 i = 0.68184i.

22-6 Imaginary exponents

To further investigate the subject of taking complex imaginary powers, let
us look at the powers of 10 taking successive powers, not doubling the power
each time, in order to follow Table 22-3 further and to see what happens to those
minus signs. This is shown in Table 22-4, in which we take 10i/8, and just keep

22-14
