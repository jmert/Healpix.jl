# [`HEALPix` Pixelization](@id man_healpix)

```@contents
Pages = ["healpix.md"]
Depth = 2
```

The [`Healpix`](@ref Healpix.Healpix) module implements a selection of functions for
interacting with the **H**ierarchical **E**qual-**A**rea Iso-**L**atitude **Pix**elization
(`HEALPix`) as described in [Górski et al. (2005)](@ref bib-healpix).

The emphasis of this package is on working with pixel index and spherical coordinate
conversions for the RING-ordered scheme only.
If a complete `HEALPix` implementation is required, try
[LibHealpix.jl](https://github.com/mweastwood/LibHealpix.jl) which provides Julia bindings
to the official C++ library or try using the Python
[healpy](https://github.com/healpy/healpy) interface via
[PyCall.jl](https://github.com/JuliaPy/PyCall.jl).
Additionally, a different [Healpix.jl](https://github.com/ziotom78/Healpix.jl) package aims
for a complete native Julia reimplementation.

```@raw latex
\providecommand{\Nside}{N_\mathrm{side}}
```
```@raw html
<div style="display:none;">
\(
\newcommand{\Nside}{N_\mathrm{side}}
\)
</div>
```

## Basic pixelization properties

A core defining attribute of the `HEALPix` map is the ``\Nside`` parameter.
The minimum valid value is ``\Nside = 1``, representing the coarsest pixelization of the
sphere which can be represented by `HEALPix`.
The ``\Nside`` then increases by factors of two—denoting ever finer resolutions—with
the number of pixels covering the sphere being a function of ``\Nside`` alone.
[`Healpix.nside2npix`](@ref) returns the number of pixels in a given map:
```jldoctest healpix
julia> using Healpix

julia> nside = 4;

julia> nside2npix(nside)
192
```
Because all pixels are of equal area and the number of pixels is derived from only the
``\Nside``, the pixel surface area must be as well.
For convenience, [`Healpix.nside2pixarea`](@ref) is provided and is equivalent to the
simple from-scratch calculation (in steradians).
```jldoctest healpix
julia> 4π / nside2npix(nside)
0.06544984694978735

julia> nside2pixarea(nside)
0.06544984694978735
```
The number of iso-latitude rings is also a function of only ``\Nside`` and calculated by
[`Healpix.nside2nring`](@ref):
```jldoctest healpix
julia> nside2nring(nside)
15
```

## Working with pixel indices

The pixels are enumerated as 0-indexed integers from west to east along the iso-latitude
rings, from north to south.
For example, pixel 0 is the first pixel in the first ring, and pixel 103 is the sixteenth
pixel in the eighth ring for an ``\Nside = 4`` map:
```jldoctest healpix
julia> pix = (0, 103);

julia> pix2ring.(nside, pix)    # Ring
(1, 8)

julia> pix2ringidx.(nside, pix) # Index in ring
(1, 16)
```

!!! note
    Be careful to note that pixels are 0-indexed, but the rings and indices within a ring
    are 1-indexed.

The `HEALPix` grid is symmetric about equator, with the equatorial ring considered part of
the northern hemisphere by convention.
Membership as part of the northern or southern hemisphere can be tested with the
[`Healpix.isnorth`](@ref) and [`Healpix.issouth`](@ref) functions, respectively.
Pixel 103 is actually the last pixel in the northern hemisphere, so
```jldoctest healpix
julia> isnorth(nside, 103)
true

julia> isnorth(nside, 104)
false

julia> issouth(nside, 104)
true
```
In fact, each hemisphere is further composed of a so-called *polar cap* and *equatorial
belt* region of pixels (a property derived from the mathematical details of the `HEALPix`
grid's definition).
According to the ring-ordered definition, pixel 0 should be in the polar cap (tested via
[`Healpix.iscap`](@ref)), while pixel 103 in the equatorial ring is expected to be
part of the equitorial belt (tested via [`Healpix.isequbelt`](@ref)).
```jldoctest healpix
julia> iscap.(nside, pix)
(true, false)

julia> isequbelt.(nside, pix)
(false, true)
```
Membership in a particular hemisphere's polar cap or equatorial belt is accomplished with
variants inserting `north` and `south` into the function names, i.e. polar caps are
distinguished by [`Healpix.isnorthcap`](@ref) and [`Healpix.issouthcap`](@ref),
and the halves of the equatorial belt are distinguished by
[`Healpix.isnorthequbelt`](@ref) and [`Healpix.issouthequbelt`](@ref).
```jldoctest healpix
julia> pix = (0, 103, 104, 191);

julia> isnorthcap.(nside, pix)
(true, false, false, false)

julia> isnorthequbelt.(nside, pix)
(false, true, false, false)

julia> issouthequbelt.(nside, pix)
(false, false, true, false)

julia> issouthcap.(nside, pix)
(false, false, false, true)
```

## Working with spherical coordinates

Up to now, all the features shown have concerned working with properties of the
pixelization scheme, but the utility of the `HEALPix` grid is its ability to describe the
surface of a sphere.
Using spherical coordinates is more useful and more natural for more algorithms than the
`HEALPix`-specific indexing scheme.

The first method of describing the location of a particular `HEALPix` pixel is as a
colatitude/azimuth pair of angles on the surface of the sphere identifying the pixel
center.
Colatitude measures the angle (in radians) south of the North Pole, and azimuth measures
the angle (in radians) east of the Prime Meridian.
To get the colatitude, use [`Healpix.pix2theta`](@ref),
```jldoctest healpix
julia> pix2theta(nside, 103)
1.5707963267948966
```
and to get the azimuth, use [`Healpix.pix2phi`](@ref)
```jldoctest healpix
julia> pix2phi(nside, 103)
6.086835766330224
```
(both named to follow the mathematical convention that colatitude/azimuth pairs in
spherical coordinates are the variable pair ``(θ, ϕ)``).
When the coordinate pair is required, the method [`Healpix.pix2ang`](@ref) returns a
2-tuple with the coordinates:
```jldoctest healpix
julia> pix2ang(nside, 103)
(1.5707963267948966, 6.086835766330224)

julia> pix2ang(nside, 103) .|> rad2deg
(90.0, 348.75)
```

The other common way to represent coordinates on the sphere is via unit vectors.
The corresponding vector for a given pixel is retrieved with
[`Healpix.pix2vec`](@ref).
```jldoctest healpix; setup = (import StaticArrays: SVector)
julia> pix2vec(nside, 103)
3-element SVector{3, Float64} with indices SOneTo(3):
  0.9807852804032304
 -0.19509032201612828
  0.0
```
where the elements correspond to the typical ``(x, y, z)`` right-handed coordinates with
the positive ``z``-axis passing through the North Pole and the positive ``x``-axis
passing through the Prime Meridian.

In reverse, converting an arbitrary spherical coordinate to a pixel index is
accomplished via the [`Healpix.ang2pix`](@ref) and
[`Healpix.vec2pix`](@ref) methods, respectively:
```jldoctest healpix
julia> ang2pix(nside, pix2ang(nside, 103)...)
103

julia> vec2pix(nside, pix2vec(nside, 103))
103
```

## Input validation and error handling

As stated earlier, the `HEALPix` ``\Nside`` parameter takes on values which are powers of
two and by convention of the official `HEALPix` [^1] source is limited to the range
``1`` to ``2^{29}``.
Validity of any `nside` parameter can be checked with the
[`Healpix.ishealpixok`](@ref ishealpixok(::Any)) function.
```jldoctest healpix
julia> ishealpixok(4)
true

julia> ishealpixok.((5, 2^30))
(false, false)
```
Likewise, once given an ``\Nside`` value, the pixel indices are bounded in ``0`` to
`nside2npix(nside) - 1`;
the two-argument form of [`ishealpixok`](@ref ishealpixok(::Any,::Any)) returns
whether a pixel is valid for the specified `nside` or not:
```jldoctest healpix
julia> nside2npix(4)
192

julia> ishealpixok(4, 191)
true

julia> ishealpixok(4, 192)
false
```
Variants which throw a [`Healpix.InvalidNside`](@ref) or
[`Healpix.InvalidPixel`](@ref) error are provided by
[`Healpix.checkhealpix`](@ref):
```jldoctest healpix
julia> checkhealpix(5)
ERROR: 5 is not a valid Nside parameter (must be power of 2)
[...]

julia> checkhealpix(4, 192)
ERROR: 192 is not a valid pixel index for Nside = 4 (must be from 0 to 191)
[...]
```

!!! note
    Only the functions working with spherical coordinates validate their inputs.
    The pixel indexing and classification functions are considered low-level
    routines and assume valid inputs.
    For example,
    ```jldoctest healpix
    julia> nside2npix(5)
    300

    julia> pix2ring(5, 0)
    1

    julia> pix2theta(5, 0)
    ERROR: 5 is not a valid Nside parameter (must be power of 2)
    [...]

    julia> isnorth(4, -1)
    true

    julia> pix2ringidx(4, -1)
    0

    julia> pix2phi(4, -1)
    ERROR: -1 is not a valid pixel index for Nside = 4 (must be from 0 to 191)
    [...]
    ```
    This choise was made for the sake of computational efficiency — the low-level
    pixel indexing/classification functions are used internally to compute the
    spherical coordinates.

---

### Footnotes:

[^1]: Official `HEALPix` package:
    [http://healpix.sourceforge.net/](http://healpix.sourceforge.net/)
