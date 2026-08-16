# Chance and likelihood

Probability

“The true logic of this world is in the calculus of probabilities.”
—James Clerk Maxwell

6-1 Chance and likelihood

“Chance” is a word which is in common use in everyday living. The radio
reports speaking of tomorrow’s weather may say: “There is a sixty percent chance
of rain.” You might say: “There is a small chance that I shall live to be one
hundred years old.” Scientists also use the word chance. A seismologist may be
interested in the question: “What is the chance that there will be an earthquake
of a certain size in Southern California next year?” A physicist might ask the
question: “What is the chance that a particular geiger counter will register twenty
counts in the next ten seconds?” A politician or statesman might be interested
in the question: “What is the chance that there will be a nuclear war within
the next ten years?” You may be interested in the chance that you will learn
something from this chapter.
By chance, we mean something like a guess. Why do we make guesses? We
make guesses when we wish to make a judgment but have incomplete information
or uncertain knowledge. We want to make a guess as to what things are, or what
things are likely to happen. Often we wish to make a guess because we have to
make a decision. For example: Shall I take my raincoat with me tomorrow? For
what earth movement should I design a new building? Shall I build myself a
fallout shelter? Shall I change my stand in international negotiations? Shall I go
to class today?
Sometimes we make guesses because we wish, with our limited knowledge,
to say as much as we can about some situation. Really, any generalization is
in the nature of a guess. Any physical theory is a kind of guesswork. There
are good guesses and there are bad guesses. The theory of probability is a

6-1system for making better guesses. The language of probability allows us to speak
quantitatively about some situation which may be highly variable, but which
does have some consistent average behavior.
Let us consider the ﬂipping of a coin. If the toss—and the coin—are “honest,”
we have no way of knowing what to expect for the outcome of any particular toss.
Yet we would feel that in a large number of tosses there should be about equal
numbers of heads and tails. We say: “The probability that a toss will land heads
is 0.5.”
We speak of probability only for observations that we contemplate being made
in the future. By the “probability” of a particular outcome of an observation we
mean our estimate for the most likely fraction of a number of repeated observations
that will yield that particular outcome. If we imagine repeating an observation—
such as looking at a freshly tossed coin—N times, and if we call NA our estimate
of the most likely number of our observations that will give some speciﬁed result A,
say the result “heads,” then by P(A), the probability of observing A, we mean

P(A) = NA/N.
(6.1)

Our deﬁnition requires several comments. First of all, we may speak of a
probability of something happening only if the occurrence is a possible outcome
of some repeatable observation. It is not clear that it would make any sense to
ask: “What is the probability that there is a ghost in that house?”
You may object that no situation is exactly repeatable. That is right. Every
diﬀerent observation must at least be at a diﬀerent time or place. All we can say
is that the “repeated” observations should, for our intended purposes, appear
to be equivalent. We should assume, at least, that each observation was made
from an equivalently prepared situation, and especially with the same degree of
ignorance at the start. (If we sneak a look at an opponent’s hand in a card game,
our estimate of our chances of winning are diﬀerent than if we do not!)
We should emphasize that N and NA in Eq. (6.1) are not intended to rep-
resent numbers based on actual observations. NA is our best estimate of what
would occur in N imagined observations. Probability depends, therefore, on our
knowledge and on our ability to make estimates. In eﬀect, on our common sense!
Fortunately, there is a certain amount of agreement in the common sense of many
things, so that diﬀerent people will make the same estimate. Probabilities need
not, however, be “absolute” numbers. Since they depend on our ignorance, they
may become diﬀerent if our knowledge changes.

6-2You may have noticed another rather “subjective” aspect of our deﬁnition of
probability. We have referred to NA as “our estimate of the most likely number
. . . ” We do not mean that we expect to observe exactly NA, but that we expect
a number near NA, and that the number NA is more likely than any other
number in the vicinity. If we toss a coin, say, 30 times, we should expect that the
number of heads would not be very likely to be exactly 15, but rather only some
number near to 15, say 12, 13, 14, 15, 16, or 17. However, if we must choose,
we would decide that 15 heads is more likely than any other number. We would
write P(heads) = 0.5.
Why did we choose 15 as more likely than any other number? We must have
argued with ourselves in the following manner: If the most likely number of heads
is NH in a total number of tosses N, then the most likely number of tails NT
is (N −NH). (We are assuming that every toss gives either heads or tails, and
no “other” result!) But if the coin is “honest,” there is no preference for heads or
tails. Until we have some reason to think the coin (or toss) is dishonest, we must
give equal likelihoods for heads and tails. So we must set NT = NH. It follows
that NT = NH = N/2, or P(H) = P(T) = 0.5.
We can generalize our reasoning to any situation in which there are m diﬀerent
but “equivalent” (that is, equally likely) possible results of an observation. If
an observation can yield m diﬀerent results, and we have reason to believe that
any one of them is as likely as any other, then the probability of a particular
outcome A is P(A) = 1/m.
If there are seven diﬀerent-colored balls in an opaque box and we pick one
out “at random” (that is, without looking), the probability of getting a ball
of a particular color is 1

7. The probability that a “blind draw” from a shuﬄed
deck of 52 cards will show the ten of hearts is
52. The probability of throwing a
double-one with dice is
36.

In Chapter 5 we described the size of a nucleus in terms of its apparent area, or
“cross section.” When we did so we were really talking about probabilities. When we
shoot a high-energy particle at a thin slab of material, there is some chance that it will
pass right through and some chance that it will hit a nucleus. (Since the nucleus is so
small that we cannot see it, we cannot aim right at a nucleus. We must “shoot blind.”)
If there are n atoms in our slab and the nucleus of each atom has a cross-sectional
area σ, then the total area “shadowed” by the nuclei is nσ. In a large number N of
random shots, we expect that the number of hits NC of some nucleus will be in the

6-3ratio to N as the shadowed area is to the total area of the slab:

NC/N = nσ/A.
(6.2)

We may say, therefore, that the probability that any one projectile particle will suﬀer a
collision in passing through the slab is

PC = n

A σ,
(6.3)

where n/A is the number of atoms per unit area in our slab.

6-2 Fluctuations

We would like now to use our ideas about probability to consider in some
greater detail the question: “How many heads do I really expect to get if I toss a
coin N times?” Before answering the question, however, let us look at what does
happen in such an “experiment.” Figure 6-1 shows the results obtained in the ﬁrst
three “runs” of such an experiment in which N = 30. The sequences of “heads”
and “tails” are shown just as they were obtained. The ﬁrst game gave 11 heads;
the second also 11; the third 16. In three trials we did not once get 15 heads.
Should we begin to suspect the coin? Or were we wrong in thinking that the
most likely number of “heads” in such a game is 15? Ninety-seven more runs
were made to obtain a total of 100 experiments of 30 tosses each. The results of
the experiments are given in Table 6-1.*

H


x x x
xxx
x
xx x x
xx x x xxxxxxxxx
xx xx
x x

T


H


x
x
x x xxx
x
x x
x
xxxx xxxx x x
xxxx xx x xx

T


H


x
xxx xx
x
xxx
xx x xx x
x xx
x
xx xx
xx
x x
x x

T


Fig. 6-1. Observed sequences of heads and tails in three games of
30 tosses each.

* After the ﬁrst three games, the experiment was actually done by shaking 30 pennies
violently in a box and then counting the number of heads that showed.

6-4
