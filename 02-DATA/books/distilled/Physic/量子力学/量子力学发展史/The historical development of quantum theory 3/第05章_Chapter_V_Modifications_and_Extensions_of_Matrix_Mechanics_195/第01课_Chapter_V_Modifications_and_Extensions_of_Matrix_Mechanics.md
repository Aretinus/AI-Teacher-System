# Chapter V Modifications and Extensions of Matrix Mechanics 195

V.l Nonmechanical Stress versus Spin 196
V.2 Field-Like Representation of Quantum Mechanics 204
V.3 The Operator Mechanics 220
V.4 Multiply Periodic Systems: Action-Angle Variables and the
Method of Complex Integration 247
V.5 The Electron Spin, Fine Structure and Anomalous Zeeman Effects 266
V.6 Key to the Helium Problem 282
References 303
Author Index

Foreword
This volume deals with the formulation of matrix mechanics by Max Born,
Werner Heisenberg and Pascual Jordan in fall 1925, and the immediate
applications of this scheme to treat atomic problems (Wolfgang Pauli's triumphant
treatment of the hydrogen atom, fall 1925; Heisenberg and Jordan's treatment of
the anomalous Zeeman effects by including electron spin, early in 1926;
Heisenberg^ treatment of the many-body problem and resonance in quantum
mechanics, spring 1926). Also treated are the modifications of the matrix scheme by
Cornelius (Kornel) Lanczos ('field-like' representation of quantum mechanics)
and Max Born and Norbert Wiener's formulation of operator mechanics, both in
fall 1925. Matrix mechanics and its modifications, as well as Paul Dirac's work
on the fundamental equations of quantum mechanics and the algebra of q-
numbers preceded Erwin Schrödinger's formulation of wave mechanics.
I had the great privilege of discussing these developments with all the
participants involved. Helmut Rechenberg and I have made use of these
discussions to weave the human context in the narrative of the physical and
mathematical framework of the discoveries in question. We have also drawn upon the rich
source materials of the Archives for the History of Quantum Physics, especially the
interviews with Max Born, Werner Heisenberg and Pascual Jordan (cited here as
'AHQP Interviews').* In addition, we have made use of the scientific
correspondence of the principal physicists in question.
I am grateful to Aage Bohr for allowing me complete access to the archives
held at the Niels Bohr Institute in Copenhagen. I am indebted to the architects of
quantum mechanics and the heirs of their literary and scientific estates for
permission to use the source materials pertaining to them.
Jagdish Mehra
*An inventory of these sources is contained in: T. S. Kuhn, J. L. Heilbron, P. Forman and L.
Allen, Sources for History of Quantum Physics, The American Philosophical Society, Philadelphia,
1967.

The Formulation of
Matrix Mechanics and Its Modifications
1925-1926

Introduction
On 30 August 1925 Niels Bohr delivered an address on 'Atomic Theory and
Mechanics' to the sixth Scandinavian Mathematical Congress in Copenhagen. In
his remarks on 'an attempt at a rational quantum mechanics,' which he
appended to the original address in November 1925 before publication, Bohr said:.
It will interest mathematical circles that the mathematical instruments created by
the higher algebra play an essential part in the rational formulation of the new
quantum mechanics. Thus the general proofs of the conservation theorems in
Heisenberg's theory carried out by Born and Jordan are based on the use of the
theory of matrices, which go back to Cayley and were developed by Hermite. It is
to be hoped that a new era of mutual stimulation of mechanics and mathematics
has commenced. To the physicist it will seem first deplorable that in atomic
problems we have apparently met with such a limitation of our usual means of
visualisation. This regret will, however, have to give way to thankfulness that
mathematics, in this field too, presents us with the tools to prepare the way for
futher progress. (Bohr, 1925b, p. 852)l
With these remarks Bohr addressed himself to the latest status of atomic
theory: the difficulties arising in the usual mechanical interpretation, as well as
the progress achieved by Heisenberg's discovery of the quantum-mechanical
scheme and its subsequent mathematical formulation by Born and Jordan. In the
latter development Bohr saw a revival of the long-established connection
between mathematics and physical theory. Since the days of Isaac Newton,
mechanics had always been regarded as a part of mathematics. However, in the
twentieth century, with the perfection attained by classical mechanics in Henri
Poincare's Les Methodes Nouvelles de la Mecanique Celeste (1892, 1893, 1899), on
the one hand, and Einstein's special and general relativity theories (in which,
again, the mathematicians like Poincare, Hermann Minkowski, Marcel Gross-
mann, David Hubert, Felix Klein, Curbastro Gregorio Ricci and Tullio Levi-
Civita played an important role), on the other, one began to believe that
mathematics and physics—of which the Newtonian and relativity mechanics
were a completed segment—had no further overlap. Bohr's reminder to the
'On 25 November 1925 Bohr wrote to Pauli that, induced by a previous letter of Pauli (Pauli to
Bohr, 17 November 1925), he had made a series of changes in his Copenhagen address of August
1925, taking into account the recent progress in quantum mechanics initiated by Heisenberg.

Introduction
mathematicians, that the unsolved problem of atomic theory would still require
the use of appropriate mathematical tools, was therefore timely. As proof, he
cited the fact that 'a self-contained theory sufficiently analogous to classical
mechanics' had been formulated by Max Born and Pascual Jordan on the basis
of 'Heisenberg^ quantum mechanics,' and that this new atomic mechanics
employed methods which had been developed in higher algebra (Bohr, 1925b,
p. 852).
The quick mathematical formulation of the physical ideas, which Heisenberg
had proposed in his paper on the quantum-theoretical reformulation of
kinematic and mechanical relations, in a consistent theory came as a great surprise to
most physicists who had laboured for years on the problems of atomic theory. A
wider dissemination of matrix mechanics was limited, however, by the fact that
its mathematical methods could not be handled easily for the purpose of
calculating the properties of atomic systems. An important breakthrough was
achieved by Wolfgang Pauli, who calculated the energy terms of the hydrogen
atom in late October 1925. But it was necessary to extend Born and Jordan's
original matrix scheme to deal with atoms containing more than one electron.
Several authors independently provided such extensions: Cornelius Lanczos of
Frankfurt University and Max Born and Norbert Wiener, then at the
Massachusetts Institute of Technology. While Lanczos' proposal concerning a field-
theoretical formulation of quantum mechanics became fruitful only later on in
the wave mechanical theory, which Erwin Schrödinger discovered independently,
the operator mechanics of Born and Wiener helped Heisenberg, Pauli and
Gregor Wentzel to generalize matrix mechanics into a symbolic calculus, which
was also applicable to the action and angle variables. The observed properties of
complex atoms could still not be accounted for until two further features were
introduced into quantum mechanics: first, the electron spin, discovered by
George Uhlenbeck and Samuel Goudsmit in the analysis of multiplet spectra
(Uhlenbeck and Goudsmit, 1925); second, the conception of exchange
degeneracy (Heisenberg, 1926b). By incorporating these extensions of the matrix scheme,
Heisenberg and Jordan successfully calculated the anomalous Zeeman splittings
of complex spectra (Heisenberg and Jordan, 1926), and Heisenberg arrived at a
qualitative understanding of the energy states of the helium atom (Heisenberg,
1926c). Thus, within a period of less than ten months after the submission of
Heisenberg's first paper (1925c), quantum mechanics developed into a theory
which provided a satisfactory explanation of many important problems of atomic
physics that had concerned physicists for a long time.
