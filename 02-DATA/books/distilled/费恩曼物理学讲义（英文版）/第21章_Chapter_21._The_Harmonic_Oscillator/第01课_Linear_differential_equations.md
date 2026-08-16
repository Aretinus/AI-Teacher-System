# Linear differential equations

The Harmonic Oscillator

21-1 Linear diﬀerential equations

In the study of physics, usually the course is divided into a series of subjects,
such as mechanics, electricity, optics, etc., and one studies one subject after the
other. For example, this course has so far dealt mostly with mechanics. But a
strange thing occurs again and again: the equations which appear in diﬀerent
ﬁelds of physics, and even in other sciences, are often almost exactly the same,
so that many phenomena have analogs in these diﬀerent ﬁelds. To take the
simplest example, the propagation of sound waves is in many ways analogous to
the propagation of light waves. If we study acoustics in great detail we discover
that much of the work is the same as it would be if we were studying optics in
great detail. So the study of a phenomenon in one ﬁeld may permit an extension
of our knowledge in another ﬁeld. It is best to realize from the ﬁrst that such
extensions are possible, for otherwise one might not understand the reason for
spending a great deal of time and energy on what appears to be only a small
part of mechanics.
The harmonic oscillator, which we are about to study, has close analogs in
many other ﬁelds; although we start with a mechanical example of a weight on a
spring, or a pendulum with a small swing, or certain other mechanical devices, we
are really studying a certain diﬀerential equation. This equation appears again
and again in physics and in other sciences, and in fact it is a part of so many
phenomena that its close study is well worth our while. Some of the phenomena
involving this equation are the oscillations of a mass on a spring; the oscillations
of charge ﬂowing back and forth in an electrical circuit; the vibrations of a tuning
fork which is generating sound waves; the analogous vibrations of the electrons
in an atom, which generate light waves; the equations for the operation of a
servosystem, such as a thermostat trying to adjust a temperature; complicated
interactions in chemical reactions; the growth of a colony of bacteria in interaction

21-1with the food supply and the poisons the bacteria produce; foxes eating rabbits
eating grass, and so on; all these phenomena follow equations which are very
similar to one another, and this is the reason why we study the mechanical
oscillator in such detail. The equations are called linear diﬀerential equations
with constant coeﬃcients. A linear diﬀerential equation with constant coeﬃcients
is a diﬀerential equation consisting of a sum of several terms, each term being a
derivative of the dependent variable with respect to the independent variable,
and multiplied by some constant. Thus

an dnx/dtn + an−1 dn−1x/dtn−1 + · · · + a1 dx/dt + a0x = f(t)
(21.1)

is called a linear diﬀerential equation of order n with constant coeﬃcients (each
ai is constant).

21-2 The harmonic oscillator

Perhaps the simplest mechanical system whose motion follows a linear diﬀer-
ential equation with constant coeﬃcients is a mass on a spring: ﬁrst the spring
stretches to balance the gravity; once it is balanced, we then discuss the vertical
displacement of the mass from its equilibrium position (Fig. 21-1). We shall
call this upward displacement x, and we shall also suppose that the spring is
perfectly linear, in which case the force pulling back when the spring is stretched
is precisely proportional to the amount of stretch. That is, the force is −kx
(with a minus sign to remind us that it pulls back). Thus the mass times the
acceleration must equal −kx:

m d2x/dt2 = −kx.
(21.2)

m
x


Fig. 21-1. A mass on a spring: a simple example of a harmonic
oscillator.

21-2
