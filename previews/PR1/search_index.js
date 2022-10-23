var documenterSearchIndex = {"docs":
[{"location":"lib/private/#Private-API","page":"Private API","title":"Private API","text":"","category":"section"},{"location":"lib/private/","page":"Private API","title":"Private API","text":"Modules = [Healpix]\nPublic = false","category":"page"},{"location":"lib/private/#Healpix.MAX_NSIDE","page":"Private API","title":"Healpix.MAX_NSIDE","text":"const MAX_NSIDE = 2^29\n\nMaximum valid N_mathrmside parameter value.\n\n\n\n\n\n","category":"constant"},{"location":"lib/private/#Healpix.unsafe_ang2pix-Tuple{Integer, Any, Any}","page":"Private API","title":"Healpix.unsafe_ang2pix","text":"p = unsafe_ang2pix(nside, θ, ϕ)\n\nLike ang2pix but neither calls checkhealpix to check the validity of nside nor checks the domain of the spherical coordinates θ and ϕ.\n\n\n\n\n\n","category":"method"},{"location":"lib/private/#Healpix.unsafe_pix2ang-Union{Tuple{I}, Tuple{I, I}} where I<:Integer","page":"Private API","title":"Healpix.unsafe_pix2ang","text":"(θ,ϕ) = unsafe_pix2ang(nside, p)\n\nLike pix2ang but does not call checkhealpix to check nside and pixel index validity.\n\n\n\n\n\n","category":"method"},{"location":"lib/private/#Healpix.unsafe_pix2phi-Union{Tuple{I}, Tuple{I, I}} where I<:Integer","page":"Private API","title":"Healpix.unsafe_pix2phi","text":"ϕ = unsafe_pix2phi(nside, p)\n\nLike pix2phi but does not call checkhealpix to check nside and pixel index validity.\n\n\n\n\n\n","category":"method"},{"location":"lib/private/#Healpix.unsafe_pix2theta-Tuple{Any, Any}","page":"Private API","title":"Healpix.unsafe_pix2theta","text":"θ = unsafe_pix2theta(nside, p)\n\nLike pix2theta but does not call checkhealpix to check nside and pixel index validity.\n\n\n\n\n\n","category":"method"},{"location":"lib/private/#Healpix.unsafe_pix2vec-Union{Tuple{I}, Tuple{I, I}} where I<:Integer","page":"Private API","title":"Healpix.unsafe_pix2vec","text":"r = unsafe_pix2vec(nside, p)\n\nLike pix2vec but does not call checkhealpix to check nside and pixel index validity.\n\n\n\n\n\n","category":"method"},{"location":"lib/private/#Healpix.unsafe_pix2z-Union{Tuple{I}, Tuple{I, I}} where I<:Integer","page":"Private API","title":"Healpix.unsafe_pix2z","text":"z = unsafe_pix2z(nside, p)\n\nLike pix2z but does not call checkhealpix to check nside and pixel index validity.\n\n\n\n\n\n","category":"method"},{"location":"lib/private/#Healpix.unsafe_vec2pix-Tuple{Integer, Any}","page":"Private API","title":"Healpix.unsafe_vec2pix","text":"p = unsafe_vec2pix(nside, r)\n\nLike vec2pix but does not check the validity of the nside or length of r.\n\n\n\n\n\n","category":"method"},{"location":"lib/private/#Healpix.unsafe_zphi2pix-Union{Tuple{F}, Tuple{I}, Tuple{I, F, F}} where {I<:Integer, F}","page":"Private API","title":"Healpix.unsafe_zphi2pix","text":"p = unsafe_zphi2pix(nside, z, ϕ)\n\nLike unsafe_ang2pix but takes the value z = cos(θ) instead of the colatitude θ.\n\n\n\n\n\n","category":"method"},{"location":"man/references/#bib-healpix","page":"Literature/References","title":"References","text":"","category":"section"},{"location":"man/references/","page":"Literature/References","title":"Literature/References","text":"K. M. Górski et al. “HEALPix: A Framework for High-Resolution Discretization and Fast Analysis of Data Distributed on the Sphere” In: The Astrophysical Journal 662, 2 (Apr 2005) p. 759–771 DOI: 10.1086/427976. arXiv: astro-ph/0409513\nErratum: The equatorial-belt longitude phi equation (Eq 9) should have the +1 outside the modulus:\ns = (i - N_mathrmside) operatornamemod 2 + 1\nErratum: Equation 22 differs in signs from equations A2–A3, and neither could be made to work. Instead, the implementation here is derived from the system of equations:\nbeginalign*\n    z_p(phi k_p) = frac23 - frac2k_p3N_mathrmside\n        + frac8phi3pi\n    \n    z_m(phi k_m) = -frac23 + frac2k_m3N_mathrmside\n        - frac8phi3pi\nendalign*","category":"page"},{"location":"lib/public/#Public-API","page":"Public API","title":"Public API","text":"","category":"section"},{"location":"lib/public/","page":"Public API","title":"Public API","text":"Modules = [Healpix]\nPrivate = false","category":"page"},{"location":"lib/public/#Healpix.Healpix","page":"Public API","title":"Healpix.Healpix","text":"A module of functions implementing function which interact with the HEALPix pixel definitions. In most cases, only the RING ordering functions are being provided.\n\nSee \"HEALPix: A Framework for High-Resolution Discretization and Fast Analysis of Data Distributed on the Sphere\" Górski, Hivon, & Banday et al (2005) ApJ 622:759–771 arXiv: astro-ph/0409513\n\n\n\n\n\n","category":"module"},{"location":"lib/public/#Healpix.UNSEEN","page":"Public API","title":"Healpix.UNSEEN","text":"const UNSEEN = -1.6375e+30\n\nSpecial value recognized by the libhealpix/healpy routines as an unobserved/masked pixel.\n\n\n\n\n\n","category":"constant"},{"location":"lib/public/#Healpix.InvalidNside","page":"Public API","title":"Healpix.InvalidNside","text":"InvalidNside(nside)\n\nAn invalid nside value was provided.\n\n\n\n\n\n","category":"type"},{"location":"lib/public/#Healpix.InvalidPixel","page":"Public API","title":"Healpix.InvalidPixel","text":"InvalidPixel(nside, pix)\n\nAn invalid pixel index pix was provided for the given nside.\n\n\n\n\n\n","category":"type"},{"location":"lib/public/#Healpix.ang2pix-Union{Tuple{F}, Tuple{Integer, F, F}} where F","page":"Public API","title":"Healpix.ang2pix","text":"p = ang2pix(nside, θ, ϕ)\n\nComputes the HEALPix pixel index p which contains the point (θϕ) given by the colatitude θ and azimuth ϕ, where nside is the Nside resolution factor.\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#Healpix.checkhealpix-Tuple{Any, Any}","page":"Public API","title":"Healpix.checkhealpix","text":"checkhealpix(nside, pix)\n\nThrows an InvalidNside exception if nside is not a valid value or an InvalidPixel exception if pix is out of range for the given N_mathrmside.\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#Healpix.checkhealpix-Tuple{Any}","page":"Public API","title":"Healpix.checkhealpix","text":"checkhealpix(nside)\n\nThrows an InvalidNside exception if nside is not a valid value.\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#Healpix.iscap","page":"Public API","title":"Healpix.iscap","text":"iscap(nside, pix)\n\nTest for whether the given pixel pix is in either polar cap for an nside HEALPix map.\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#Healpix.isequbelt","page":"Public API","title":"Healpix.isequbelt","text":"isequbelt(nside, pix)\n\nTest for whether the given pixel pix is in the equatorial belt for an nside HEALPix map.\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#Healpix.ishealpixok-Tuple{Any, Any}","page":"Public API","title":"Healpix.ishealpixok","text":"isheapixok(nside, pix)\n\nReturns true if nside is valid and pix is in the range 0 to nside2npix(nside) - 1, otherwise false.\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#Healpix.ishealpixok-Tuple{Any}","page":"Public API","title":"Healpix.ishealpixok","text":"ishealpixok(nside)\n\nReturns true if nside is a power of two in the range 1 to 2^29, otherwise false.\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#Healpix.isnorth","page":"Public API","title":"Healpix.isnorth","text":"isnorth(nside, pix)\n\nTest for whether the given pixel pix is in the northern hemisphere (including the equatorial ring) for an nside HEALPix map.\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#Healpix.isnorthcap","page":"Public API","title":"Healpix.isnorthcap","text":"isnorthcap(nside, pix)\n\nTest for whether the given pixel pix is in the northern polar cap for an nside HEALPix map.\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#Healpix.isnorthequbelt","page":"Public API","title":"Healpix.isnorthequbelt","text":"isnorthequbelt(nside, pix)\n\nTest for whether the given pixel pix is in the northern equatorial belt (including the equatorial ring) for an nside HEALPix map.\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#Healpix.issouth","page":"Public API","title":"Healpix.issouth","text":"issouth(nside, pix)\n\nTest for whether the given pixel pix is in the southern hemisphere (excluding the equatorial ring) for an nside HEALPix map.\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#Healpix.issouthcap","page":"Public API","title":"Healpix.issouthcap","text":"issouthcap(nside, pix)\n\nTest for whether the given pixel pix is in the southern polar cap for an nside HEALPix map.\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#Healpix.issouthequbelt","page":"Public API","title":"Healpix.issouthequbelt","text":"issouthequbelt(nside, pix)\n\nTest for whether the given pixel pix is in the southern equatorial belt (excluding the equatorial ring) for an nside HEALPix map.\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#Healpix.npix2nside-Tuple{Any}","page":"Public API","title":"Healpix.npix2nside","text":"Nisde = npix2nside(npix)\n\nReturns the equivalent Nside corresponding to the number of pixels npix.\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#Healpix.nring2nside-Tuple{Any}","page":"Public API","title":"Healpix.nring2nside","text":"Nside = nring2nside(nring)\n\nReturns the equivalent Nside corresponding to the number of iso-latitude rings nring.\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#Healpix.nside2npix","page":"Public API","title":"Healpix.nside2npix","text":"Npix = nside2npix(nside)\n\nReturns the total number of pixels Npix in an nside HEALPix map. Note that HEALPix pixel indexing is 0-based, so valid pixel values are in the range 0 to Npix - 1.\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#Healpix.nside2npixcap","page":"Public API","title":"Healpix.nside2npixcap","text":"Npix = nside2npixcap(nside)\n\nReturns the number of pixels Npix in the polar caps for the given nside HEALPix map.\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#Healpix.nside2npixequ","page":"Public API","title":"Healpix.nside2npixequ","text":"Npix = nside2npixequ(nside)\n\nReturns the number of pixels Npix in the northern hemisphere, including the equatorial ring, for the given nside HEALPix map.\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#Healpix.nside2nring","page":"Public API","title":"Healpix.nside2nring","text":"Nring = nside2nring(nside)\n\nReturns the number of iso-latitude rings Nring in the nside HEALPix map.\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#Healpix.nside2pixarea","page":"Public API","title":"Healpix.nside2pixarea","text":"σ = nside2pixarea(nside)\n\nReturns the surface area σ (in steradians) of each pixel in the given nside HEALPix map.\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#Healpix.pix2ang-Union{Tuple{I}, Tuple{I, I}} where I<:Integer","page":"Public API","title":"Healpix.pix2ang","text":"(θ,ϕ) = pix2ang(nside, p)\n\nComputes the colatitude and azimuth pair (θϕ) for the given pixel p, where nside is the Nside resolution factor.\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#Healpix.pix2phi-Union{Tuple{I}, Tuple{I, I}} where I<:Integer","page":"Public API","title":"Healpix.pix2phi","text":"ϕ = pix2phi(nside, p)\n\nComputes the azimuth ϕ for the given pixel p, where nside is the Nside resolution factor.\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#Healpix.pix2ring-Union{Tuple{I}, Tuple{I, I}} where I<:Integer","page":"Public API","title":"Healpix.pix2ring","text":"i = pix2ring(nside, p)\n\nComputes the ring index i for the given pixel p, where nside is the Nside resolution factor.\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#Healpix.pix2ringidx-Union{Tuple{I}, Tuple{I, I}} where I<:Integer","page":"Public API","title":"Healpix.pix2ringidx","text":"j = pix2ringidx(nside, p)\n\nComputes the index j within the ring for the given pixel p, where nside is the Nside resolution factor.\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#Healpix.pix2theta-Tuple{Any, Any}","page":"Public API","title":"Healpix.pix2theta","text":"θ = pix2theta(nside, p)\n\nComputes the colatitude θ for the given pixel p, where nside is the Nside resolution factor.\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#Healpix.pix2vec-Union{Tuple{I}, Tuple{I, I}} where I<:Integer","page":"Public API","title":"Healpix.pix2vec","text":"r = pix2vec(nside, p)\n\nComputes the unit vector r pointing to the pixel center of the given pixel p, where nside is the Nside resolution factor.\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#Healpix.pix2z-Union{Tuple{I}, Tuple{I, I}} where I<:Integer","page":"Public API","title":"Healpix.pix2z","text":"z = pix2z(nside, p)\n\nComputes the cosine of the colatitude z = cos(θ) for the given pixel p, where nside is the Nside resolution factor.\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#Healpix.vec2pix-Tuple{Integer, Any}","page":"Public API","title":"Healpix.vec2pix","text":"p = vec2pix(nside, r)\n\nComputes the HEALPix pixel index p which contains the point at the end of the unit vector r, where nside is the Nside resolution factor.\n\n\n\n\n\n","category":"method"},{"location":"#Healpix.jl-Documentation","page":"Healpix.jl Documentation","title":"Healpix.jl Documentation","text":"","category":"section"},{"location":"","page":"Healpix.jl Documentation","title":"Healpix.jl Documentation","text":"This library is not registered in Julia's General registry so the package must be installed either by cloning it directly:","category":"page"},{"location":"","page":"Healpix.jl Documentation","title":"Healpix.jl Documentation","text":"pkg> add https://github.com/jmert/Healpix.jl","category":"page"},{"location":"","page":"Healpix.jl Documentation","title":"Healpix.jl Documentation","text":"or by making use of my personal registry","category":"page"},{"location":"","page":"Healpix.jl Documentation","title":"Healpix.jl Documentation","text":"pkg> registry add https://github.com/jmert/Registry.jl\npkg> add Healpix","category":"page"},{"location":"","page":"Healpix.jl Documentation","title":"Healpix.jl Documentation","text":"After installing, just load like any other Julia package:","category":"page"},{"location":"","page":"Healpix.jl Documentation","title":"Healpix.jl Documentation","text":"julia> using Healpix","category":"page"},{"location":"#User-Manual-and-Documentation","page":"Healpix.jl Documentation","title":"User Manual and Documentation","text":"","category":"section"},{"location":"","page":"Healpix.jl Documentation","title":"Healpix.jl Documentation","text":"Pages = [\n    \"man/usage.md\",\n    \"man/references.md\"\n]\nDepth = 1","category":"page"},{"location":"#Library-API-Reference","page":"Healpix.jl Documentation","title":"Library API Reference","text":"","category":"section"},{"location":"","page":"Healpix.jl Documentation","title":"Healpix.jl Documentation","text":"Pages = [\n    \"lib/public.md\"\n]\nDepth = 1","category":"page"},{"location":"man/usage/#man_healpix","page":"Usage","title":"HEALPix Pixelization","text":"","category":"section"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"Pages = [\"healpix.md\"]\nDepth = 2","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"The Healpix module implements a selection of functions for interacting with the Hierarchical Equal-Area Iso-Latitude Pixelization (HEALPix) as described in Górski et al. (2005).","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"The emphasis of this package is on working with pixel index and spherical coordinate conversions for the RING-ordered scheme only. If a complete HEALPix implementation is required, try LibHealpix.jl which provides Julia bindings to the official C++ library or try using the Python healpy interface via PyCall.jl. Additionally, a different Healpix.jl package aims for a complete native Julia reimplementation.","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"\\providecommand{\\Nside}{N_\\mathrm{side}}","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"<div style=\"display:none;\">\n\\(\n\\newcommand{\\Nside}{N_\\mathrm{side}}\n\\)\n</div>","category":"page"},{"location":"man/usage/#Basic-pixelization-properties","page":"Usage","title":"Basic pixelization properties","text":"","category":"section"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"A core defining attribute of the HEALPix map is the Nside parameter. The minimum valid value is Nside = 1, representing the coarsest pixelization of the sphere which can be represented by HEALPix. The Nside then increases by factors of two—denoting ever finer resolutions—with the number of pixels covering the sphere being a function of Nside alone. Healpix.nside2npix returns the number of pixels in a given map:","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"julia> using Healpix\n\njulia> nside = 4;\n\njulia> nside2npix(nside)\n192","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"Because all pixels are of equal area and the number of pixels is derived from only the Nside, the pixel surface area must be as well. For convenience, Healpix.nside2pixarea is provided and is equivalent to the simple from-scratch calculation (in steradians).","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"julia> 4π / nside2npix(nside)\n0.06544984694978735\n\njulia> nside2pixarea(nside)\n0.06544984694978735","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"The number of iso-latitude rings is also a function of only Nside and calculated by Healpix.nside2nring:","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"julia> nside2nring(nside)\n15","category":"page"},{"location":"man/usage/#Working-with-pixel-indices","page":"Usage","title":"Working with pixel indices","text":"","category":"section"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"The pixels are enumerated as 0-indexed integers from west to east along the iso-latitude rings, from north to south. For example, pixel 0 is the first pixel in the first ring, and pixel 103 is the sixteenth pixel in the eighth ring for an Nside = 4 map:","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"julia> pix = (0, 103);\n\njulia> pix2ring.(nside, pix)    # Ring\n(1, 8)\n\njulia> pix2ringidx.(nside, pix) # Index in ring\n(1, 16)","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"note: Note\nBe careful to note that pixels are 0-indexed, but the rings and indices within a ring are 1-indexed.","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"The HEALPix grid is symmetric about equator, with the equatorial ring considered part of the northern hemisphere by convention. Membership as part of the northern or southern hemisphere can be tested with the Healpix.isnorth and Healpix.issouth functions, respectively. Pixel 103 is actually the last pixel in the northern hemisphere, so","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"julia> isnorth(nside, 103)\ntrue\n\njulia> isnorth(nside, 104)\nfalse\n\njulia> issouth(nside, 104)\ntrue","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"In fact, each hemisphere is further composed of a so-called polar cap and equatorial belt region of pixels (a property derived from the mathematical details of the HEALPix grid's definition). According to the ring-ordered definition, pixel 0 should be in the polar cap (tested via Healpix.iscap), while pixel 103 in the equatorial ring is expected to be part of the equitorial belt (tested via Healpix.isequbelt).","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"julia> iscap.(nside, pix)\n(true, false)\n\njulia> isequbelt.(nside, pix)\n(false, true)","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"Membership in a particular hemisphere's polar cap or equatorial belt is accomplished with variants inserting north and south into the function names, i.e. polar caps are distinguished by Healpix.isnorthcap and Healpix.issouthcap, and the halves of the equatorial belt are distinguished by Healpix.isnorthequbelt and Healpix.issouthequbelt.","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"julia> pix = (0, 103, 104, 191);\n\njulia> isnorthcap.(nside, pix)\n(true, false, false, false)\n\njulia> isnorthequbelt.(nside, pix)\n(false, true, false, false)\n\njulia> issouthequbelt.(nside, pix)\n(false, false, true, false)\n\njulia> issouthcap.(nside, pix)\n(false, false, false, true)","category":"page"},{"location":"man/usage/#Working-with-spherical-coordinates","page":"Usage","title":"Working with spherical coordinates","text":"","category":"section"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"Up to now, all the features shown have concerned working with properties of the pixelization scheme, but the utility of the HEALPix grid is its ability to describe the surface of a sphere. Using spherical coordinates is more useful and more natural for more algorithms than the HEALPix-specific indexing scheme.","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"The first method of describing the location of a particular HEALPix pixel is as a colatitude/azimuth pair of angles on the surface of the sphere identifying the pixel center. Colatitude measures the angle (in radians) south of the North Pole, and azimuth measures the angle (in radians) east of the Prime Meridian. To get the colatitude, use Healpix.pix2theta,","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"julia> pix2theta(nside, 103)\n1.5707963267948966","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"and to get the azimuth, use Healpix.pix2phi","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"julia> pix2phi(nside, 103)\n6.086835766330224","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"(both named to follow the mathematical convention that colatitude/azimuth pairs in spherical coordinates are the variable pair (θ ϕ)). When the coordinate pair is required, the method Healpix.pix2ang returns a 2-tuple with the coordinates:","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"julia> pix2ang(nside, 103)\n(1.5707963267948966, 6.086835766330224)\n\njulia> pix2ang(nside, 103) .|> rad2deg\n(90.0, 348.75)","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"The other common way to represent coordinates on the sphere is via unit vectors. The corresponding vector for a given pixel is retrieved with Healpix.pix2vec.","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"julia> pix2vec(nside, 103)\n3-element SVector{3, Float64} with indices SOneTo(3):\n  0.9807852804032304\n -0.19509032201612828\n  0.0","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"where the elements correspond to the typical (x y z) right-handed coordinates with the positive z-axis passing through the North Pole and the positive x-axis passing through the Prime Meridian.","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"In reverse, converting an arbitrary spherical coordinate to a pixel index is accomplished via the Healpix.ang2pix and Healpix.vec2pix methods, respectively:","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"julia> ang2pix(nside, pix2ang(nside, 103)...)\n103\n\njulia> vec2pix(nside, pix2vec(nside, 103))\n103","category":"page"},{"location":"man/usage/#Input-validation-and-error-handling","page":"Usage","title":"Input validation and error handling","text":"","category":"section"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"As stated earlier, the HEALPix Nside parameter takes on values which are powers of two and by convention of the official HEALPix [1] source is limited to the range 1 to 2^29. Validity of any nside parameter can be checked with the Healpix.ishealpixok function.","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"julia> ishealpixok(4)\ntrue\n\njulia> ishealpixok.((5, 2^30))\n(false, false)","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"Likewise, once given an Nside value, the pixel indices are bounded in 0 to nside2npix(nside) - 1; the two-argument form of ishealpixok returns whether a pixel is valid for the specified nside or not:","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"julia> nside2npix(4)\n192\n\njulia> ishealpixok(4, 191)\ntrue\n\njulia> ishealpixok(4, 192)\nfalse","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"Variants which throw a Healpix.InvalidNside or Healpix.InvalidPixel error are provided by Healpix.checkhealpix:","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"julia> checkhealpix(5)\nERROR: 5 is not a valid Nside parameter (must be power of 2)\n[...]\n\njulia> checkhealpix(4, 192)\nERROR: 192 is not a valid pixel index for Nside = 4 (must be from 0 to 191)\n[...]","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"note: Note\nOnly the functions working with spherical coordinates validate their inputs. The pixel indexing and classification functions are considered low-level routines and assume valid inputs. For example,julia> nside2npix(5)\n300\n\njulia> pix2ring(5, 0)\n1\n\njulia> pix2theta(5, 0)\nERROR: 5 is not a valid Nside parameter (must be power of 2)\n[...]\n\njulia> isnorth(4, -1)\ntrue\n\njulia> pix2ringidx(4, -1)\n0\n\njulia> pix2phi(4, -1)\nERROR: -1 is not a valid pixel index for Nside = 4 (must be from 0 to 191)\n[...]This choise was made for the sake of computational efficiency — the low-level pixel indexing/classification functions are used internally to compute the spherical coordinates.","category":"page"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"","category":"page"},{"location":"man/usage/#Footnotes:","page":"Usage","title":"Footnotes:","text":"","category":"section"},{"location":"man/usage/","page":"Usage","title":"Usage","text":"[1]: Official HEALPix package: http://healpix.sourceforge.net/","category":"page"}]
}
