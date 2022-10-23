# Healpix.jl Documentation

This library is **not** registered in Julia's
[General registry](https://github.com/JuliaRegistries/General)
so the package must be installed either by cloning it directly:
```julia-repl
pkg> add https://github.com/jmert/Healpix.jl
```
or by making use of my [personal registry](https://github.com/jmert/Registry.jl)
```julia-repl
pkg> registry add https://github.com/jmert/Registry.jl
pkg> add Healpix
```
After installing, just load like any other Julia package:
```julia
julia> using Healpix
```


## User Manual and Documentation
```@contents
Pages = [
    "man/usage.md",
    "man/references.md"
]
Depth = 1
```

## Library API Reference
```@contents
Pages = [
    "lib/public.md"
]
Depth = 1
```
