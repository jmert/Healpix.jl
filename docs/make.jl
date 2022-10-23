using Documenter

# Importing the following into Main changes how types are printed (and therefore impacts
# doctests) — namely, the module is not prefixed on the type which keeps the names short.
using Healpix

doctest = "--fix"  in ARGS ? :fix :
          "--test" in ARGS ? true : false

DocMeta.setdocmeta!(Healpix, :DocTestSetup, :(using Healpix); recursive=true)

makedocs(
    format = Documenter.HTML(mathengine = Documenter.MathJax3()),
    sitename = "Healpix Pixelization",
    authors = "Justin Willmert",
    modules = [Healpix],
    doctest = doctest,
    checkdocs = :exports,
    doctestfilters = Regex[
        r"Ptr{0x[0-9a-f]+}",
        r"[0-9\.]+ seconds \(.*\)"
    ],
    pages = [
        "Healpix.jl Documentation" => "index.md",
        "Healpix Pixelization" => [
            "Usage" => "man/usage.md",
            "Literature/References" => "man/references.md"
        ],
        "API Reference" => [
            "lib/public.md",
            "lib/private.md",
        ],
    ],
)

deploydocs(
    repo = "github.com/jmert/Healpix.jl.git",
    push_preview = true
)
