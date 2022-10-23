# [References](@id bib-healpix)

* K. M. Górski et al. “HEALPix: A Framework for High-Resolution Discretization and Fast
  Analysis of Data Distributed on the Sphere”
  In: *The Astrophysical Journal* 662, 2 (Apr 2005) p. 759–771
  DOI: [10.1086/427976](http://dx.doi.org/10.1086/427976).
  arXiv: [astro-ph/0409513](https://arxiv.org/abs/astro-ph/0409513)

  - Erratum: The equatorial-belt longitude ``\phi`` equation (Eq 9) should have the
    ``+1`` outside the modulus:
    ```math
    s = (i - N_\mathrm{side}) \operatorname{mod} 2 + 1
    ```

  - Erratum: Equation 22 differs in signs from equations A2–A3, and neither could be made
    to work. Instead, the implementation here is derived from the system of equations:
    ```math
    \begin{align*}
        z_p(\phi, k_p) &= \frac{2}{3} - \frac{2k_p}{3N_{\mathrm{side}}}
            + \frac{8\phi}{3\pi}
        \\
        z_m(\phi, k_m) &= -\frac{2}{3} + \frac{2k_m}{3N_{\mathrm{side}}}
            - \frac{8\phi}{3\pi}
    \end{align*}
    ```
