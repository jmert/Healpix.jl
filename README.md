# Healpix.jl

| **Documentation**                                                         | **Build Status**                                     |
|:-------------------------------------------------------------------------:|:----------------------------------------------------:|
| [![][docs-stable-img]][docs-stable-url] [![][docs-dev-img]][docs-dev-url] | [![][ci-img]][ci-url][![][codecov-img]][codecov-url] |

### Installation and usage

This library is **not** registered in Julia's [General registry][General.jl],
so the package must be installed either by cloning it directly:
```
pkg> add https://github.com/jmert/Healpix.jl
```
or by making use of my [personal registry][Registry.jl]:
```
pkg> registry add https://github.com/jmert/Registry.jl
pkg> add Healpix
```
After installing, just load like any other Julia package:
```julia
julia> using Healpix
```

[General.jl]: https://github.com/JuliaRegistries/General
[Registry.jl]: https://github.com/jmert/Registry.jl

[docs-stable-img]: https://img.shields.io/badge/docs-stable-blue.svg
[docs-stable-url]: https://jmert.github.io/Healpix.jl/stable
[docs-dev-img]: https://img.shields.io/badge/docs-dev-blue.svg
[docs-dev-url]: https://jmert.github.io/Healpix.jl/dev

[ci-img]: https://github.com/jmert/Healpix.jl/actions
[ci-url]: https://github.com/jmert/Healpix.jl/workflows/CI/badge.svg

[codecov-img]: https://codecov.io/gh/jmert/Healpix.jl/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/jmert/Healpix.jl
