# Thermionic emission

rough analysis so far as the evaporation part of it is concerned, the number of
vapor molecules arriving was not done so badly, aside from the unknown factor of
reﬂection coeﬃcient. So therefore we may use the fact that the number that are
leaving, at equilibrium, is the same as the number that arrive. True, the vapor
is being swept away and so the molecules are only coming out, but if the vapor
were left alone, it would attain the equilibrium density at which the number that
come back would equal the number that are evaporating. Therefore, we can
easily see that the number that are coming oﬀthe surface per second is equal to
the unknown reﬂection coeﬃcient R times the number that would come down
to the surface per second were the vapor still there, because that is how many
would balance the evaporation at equilibrium:

Ne = nvR = (vR/Va)e−W/kT .
(42.5)

Of course, the number of molecules that hit the liquid from the vapor is easy to
calculate, since we do not need to know as much about the forces as we do when
we are worrying about how they get to escape through the liquid surface; it is
much easier to make the argument the other way.

42-2 Thermionic emission

We may give another example of a very practical situation that is similar to
the evaporation of a liquid—so similar that it is not worth making a separate
analysis. It is essentially the same problem. In a radio tube there is a source of
electrons, namely a heated tungsten ﬁlament, and a positively charged plate to
attract the electrons. Any electron that escapes from the surface of the tungsten
is immediately swept away to the plate. That is our ideal “pump,” which is
“pumping” the electrons away all the time. Now the question is: How many
electrons per second can we get out of a piece of tungsten, and how does that
number vary with temperature? The answer to that problem is the same as (42.5),
because it turns out that in a piece of metal, electrons are attracted to the ions,
or to atoms, of the metal. They are attracted, if we may say it crudely, to the
metal. In order to get an electron out of a piece of metal, it takes a certain
amount of energy or work to pull it out. This work varies with the diﬀerent kinds
of metal. In fact, it varies even with the character of the surface of a given kind
of metal, but the total work may be a few electron volts, which, incidentally, is
typical of the energy involved in chemical reactions. We can remember the latter

42-6fact by remembering that the voltage in a chemical cell like a ﬂashlight battery,
which is produced by chemical reactions, is about one volt.
How can we ﬁnd out how many electrons come out per second? It would be
quite diﬃcult to analyze the eﬀects on the electrons going out; it is easier to
analyze the situation the other way. So, we could start out by imagining that
we did not draw the electrons away, and that the electrons were like a gas, and
could come back to the metal. Then there would be a certain density of electrons
at equilibrium which would, of course, be given by exactly the same formula
as (42.1), where Va is the volume per electron in the metal, roughly, and W is
equal to qeφ, where φ is the so-called work function, or the voltage needed to pull
an electron oﬀthe surface. This would tell us how many electrons would have to
be in the surrounding space and striking the metal in order to balance the ones
that are coming out. And thus it is easy to calculate how many are coming out
if we sweep away all of them, because the number that are coming out is exactly
equal to the number that would be going in with the above density of electron
“vapor.” In other words, the answer is that the current of electricity that comes
in per unit area is equal to the charge on each times the number that arrive per
second per unit area, which is the number per unit volume times the velocity, as
we have seen many times:

I = qenv = (qev/Va)e−qeφ/kT .
(42.6)

Now one electron volt corresponds to kT at a temperature of 11,600 degrees. The
ﬁlament of the tube may be operating at a temperature of, say, 1100 degrees, so
the exponential factor is something like e−10; when we change the temperature a
little bit, the exponential factor changes a lot. Thus, again, the central feature
of the formula is the e−qeφ/kT . As a matter of fact, the factor in front is quite
wrong—it turns out that the behavior of electrons in a metal is not correctly
described by the classical theory, but by quantum mechanics, but this only
changes the factor in front a little. Actually, no one has ever been able to get
the thing straightened out very well, even though many people have used the
high-class quantum-mechanical theory for their calculations. The big problem is,
does W change slightly with temperature? If it does, one cannot distinguish a
W changing slowly with temperature from a diﬀerent coeﬃcient in front. That
is, if W changed linearly, say, with temperature, so that W = W0 + αkT, then
we would have

e−W/kT = e−(W0+αkT )/kT = e−αe−W0/kT .

42-7Thus a linearly temperature-dependent W is equivalent to a shifted “constant.”
It is really quite diﬃcult and usually fruitless to try to obtain the coeﬃcient in
the front accurately.

42-3 Thermal ionization

Now we go on to another example of the same idea; always the same idea.
This has to do with ionization. Suppose that in a gas we have a whole lot of
atoms which are in the neutral state, say, but the gas is hot and the atoms can
become ionized. We would like to know how many ions there are in a given
circumstance if we have a certain density of atoms per unit volume at a certain
temperature. Again we consider a box in which there are N atoms which can
hold electrons. (If an electron has come oﬀan atom, it is called an ion, and if
the atom is neutral, we simply call it an atom.) Then suppose that, at any given
moment, the number of neutral atoms is na, the number of ions is ni, and the
number of electrons is ne, all per unit volume. The problem is: What is the
relationship of these three numbers?
In the ﬁrst place, we have two conditions or constraints on the numbers. For
instance, as we vary diﬀerent conditions, like the temperature and so on, na + ni
would remain constant, because this would be simply the number N of atomic
nuclei that are in the box. If we keep the number of nuclei per unit volume
ﬁxed, and change, say, the temperature, then as the ionization proceeded some
atoms would turn to ions, but the total number of atoms plus ions would be
unchanged. That is, na + ni = N. Another condition is that if the entire gas
is to be electrically neutral (and if we neglect double or triple ionization), that
means that the number of ions is equal to the number of electrons at all times,
or ni = ne. These are subsidiary equations that simply express the conservation
of charge and the conservation of atoms.
These equations are true, and we ultimately will use them when we consider a
real problem. But we want to obtain another relationship between the quantities.
We can do this as follows. We again use the idea that it takes a certain amount
of energy to lift the electron out of the atom, which we call the ionization energy,
and we would write it as W, in order to make all of the formulas look the same.
So we let W equal the energy needed to pull an electron out of an atom and
make an ion. Now we again say that the number of free electrons per unit volume
in the “vapor” is equal to the number of bound electrons per unit volume in
the atoms, times e to the minus the energy diﬀerence between being bound and

42-8
