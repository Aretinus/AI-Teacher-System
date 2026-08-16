# Resolving power of a grating

As an example, suppose there were a long line of oscillators, with the charge
oscillating along the direction of the line (Fig. 30-5). From such an array the
greatest intensity is perpendicular to the line. There is a little bit of intensity up
and down from the equatorial plane, but it is very slight. With this result, we can
handle a more complicated situation. Suppose we have a set of such lines, each
producing a beam only in a plane perpendicular to the line. To ﬁnd the intensity
in various directions from a series of long wires, instead of inﬁnitesimal wires,
is the same problem as it was for inﬁnitesimal wires, so long as we are in the
central plane perpendicular to the wires; we just add the contribution from each
of the long wires. That is why, although we actually analyzed only tiny antennas,
we might as well have used a grating with long, narrow slots. Each of the long
slots produces an eﬀect only in its own direction, not up and down, but they are
all set next to each other horizontally, so they produce interference that way.
Thus we can build up more complicated situations by having various distri-
butions of scatterers in lines, planes, or in space. The ﬁrst thing we did was to
consider scatterers in a line, and we have just extended the analysis to strips; we
can work it out by just doing the necessary summations, adding the contributions
from the individual scatterers. The principle is always the same.

30-3 Resolving power of a grating

We are now in a position to understand a number of interesting phenomena.
For example, consider the use of a grating for separating wavelengths. We noticed
that the whole spectrum was spread out on the screen, so a grating can be used
as an instrument for separating light into its diﬀerent wavelengths. One of the
interesting questions is: supposing that there were two sources of slightly diﬀerent
frequency, or slightly diﬀerent wavelength, how close together in wavelength could
they be such that the grating would be unable to tell that there were really
two diﬀerent wavelengths there? The red and the blue were clearly separated.
But when one wave is red and the other is slightly redder, very close, how close
can they be? This is called the resolving power of the grating, and one way of
analyzing the problem is as follows. Suppose that for light of a certain color
we happen to have the maximum of the diﬀracted beam occurring at a certain
angle. If we vary the wavelength the phase 2πd sin θ/λ is diﬀerent, so of course
the maximum occurs at a diﬀerent angle. That is why the red and blue are
spread out. How diﬀerent in angle must it be in order for us to be able to see
it? If the two maxima are exactly on top of each other, of course we cannot see

30-10them. If the maximum of one is far enough away from the other, then we can see
that there is a double bump in the distribution of light. In order to be able to
just make out the double bump, the following simple criterion, called Rayleigh’s
criterion, is usually used (Fig. 30-6). It is that the ﬁrst minimum from one bump
should sit at the maximum of the other. Now it is very easy to calculate, when
one minimum sits on the other maximum, how much the diﬀerence in wavelength
is. The best way to do it is geometrically.

Fig. 30-6. Illustration of the Rayleigh criterion. The maximum of one
pattern falls on the ﬁrst minimum of the other.

In order to have a maximum for wavelength λ′, the distance ∆(Fig. 30-3)
must be nλ′, and if we are looking at the mth-order beam, it is mnλ′. In other
words, 2πd sin θ/λ′ = 2πm, so nd sin θ, which is ∆, is mλ′ times n, or mnλ′. For
the other beam, of wavelength λ, we want to have a minimum at this angle.
That is, we want ∆to be exactly one wavelength λ more than mnλ. That is,
∆= mnλ + λ = mnλ′. Thus if λ′ = λ + ∆λ, we ﬁnd

∆λ/λ = 1/mn.
(30.9)

The ratio λ/∆λ is called the resolving power of a grating; we see that it is equal
to the total number of lines in the grating, times the order. It is not hard to
prove that this formula is equivalent to the formula that the error in frequency is
equal to the reciprocal time diﬀerence between extreme paths that are allowed
to interfere:*
∆ν = 1/T.

In fact, that is the best way to remember it, because the general formula works
not only for gratings, but for any other instrument whatsoever, while the special
formula (30.9) depends on the fact that we are using a grating.

* In our case T = ∆/c = mnλ/c, where c is the speed of light. The frequency ν = c/λ, so
∆ν = c ∆λ/λ2.

30-1130-4 The parabolic antenna

Now let us consider another problem in resolving power. This has to do
with the antenna of a radio telescope, used for determining the position of radio
sources in the sky, i.e., how large they are in angle. Of course if we use any old
antenna and ﬁnd signals, we would not know from what direction they came. We
are very interested to know whether the source is in one place or another. One
way we can ﬁnd out is to lay out a whole series of equally spaced dipole wires on
the Australian landscape. Then we take all the wires from these antennas and
feed them into the same receiver, in such a way that all the delays in the feed
lines are equal. Thus the receiver receives signals from all of the dipoles in phase.
That is, it adds all the waves from every one of the dipoles in the same phase.
Now what happens? If the source is directly above the array, at inﬁnity or nearly
so, then its radiowaves will excite all the antennas in the same phase, so they all
feed the receiver together.
Now suppose that the radio source is at a slight angle θ from the vertical.
Then the various antennas are receiving signals a little out of phase. The receiver
adds all these out-of-phase signals together, and so we get nothing, if the angle θ
is too big. How big may the angle be? Answer: we get zero if the angle ∆/L = θ
(Fig. 30-3) corresponds to a 360◦phase shift, that is, if ∆is the wavelength λ.
This is because the vector contributions form together a complete polygon with
zero resultant. The smallest angle that can be resolved by an antenna array of
length L is θ = λ/L. Notice that the receiving pattern of an antenna such as
this is exactly the same as the intensity distribution we would get if we turned
the receiver around and made it into a transmitter.
This is an example of
what is called a reciprocity principle. It turns out, in fact, to be generally true
for any arrangement of antennas, angles, and so on, that if we ﬁrst work out
what the relative intensities would be in various directions if the receiver were a
transmitter instead, then the relative directional sensitivity of a receiver with
the same external wiring, the same array of antennas, is the same as the relative
intensity of emission would be if it were a transmitter.
Some radio antennas are made in a diﬀerent way. Instead of having a whole
lot of dipoles in a long line, with a lot of feed wires, we may arrange them not in
a line but in a curve, and put the receiver at a certain point where it can detect
the scattered waves. This curve is cleverly designed so that if the radiowaves
are coming down from above, and the wires scatter, making a new wave, the
wires are so arranged that the scattered waves reach the receiver all at the same

30-12
