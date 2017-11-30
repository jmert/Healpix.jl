module Healpix
    using Compat.Test
    using CMB.Healpix

    # Each of the following arrays can be initialized directly from examining Fig. 4 of
    # Górski, et al (2005).
    hpix4_pix     = collect(0:191)
    hpix4_ring    = Int[]
    hpix4_ringidx = Int[]
    hpix4_isnorth        = Bool[]
    hpix4_issouth        = Bool[]
    hpix4_iscap          = Bool[]
    hpix4_isnorthcap     = Bool[]
    hpix4_issouthcap     = Bool[]
    hpix4_isequbelt      = Bool[]
    hpix4_isnorthequbelt = Bool[]
    hpix4_issouthequbelt = Bool[]

    for ii in 1:3
        append!(hpix4_ring, ii .* ones(Int, 4ii))
        append!(hpix4_ringidx, 1:4ii)
        append!(hpix4_isnorth,        fill(true,  4ii))
        append!(hpix4_issouth,        fill(false, 4ii))
        append!(hpix4_iscap,          fill(true,  4ii))
        append!(hpix4_isnorthcap,     fill(true,  4ii))
        append!(hpix4_issouthcap,     fill(false, 4ii))
        append!(hpix4_isequbelt,      fill(false, 4ii))
        append!(hpix4_isnorthequbelt, fill(false, 4ii))
        append!(hpix4_issouthequbelt, fill(false, 4ii))
    end
    for ii in 1:5
        append!(hpix4_ring, (3+ii) .* ones(Int, 16))
        append!(hpix4_ringidx, 1:16)
        append!(hpix4_isnorth,        fill(true,  16))
        append!(hpix4_issouth,        fill(false, 16))
        append!(hpix4_iscap,          fill(false, 16))
        append!(hpix4_isnorthcap,     fill(false, 16))
        append!(hpix4_issouthcap,     fill(false, 16))
        append!(hpix4_isequbelt,      fill(true,  16))
        append!(hpix4_isnorthequbelt, fill(true,  16))
        append!(hpix4_issouthequbelt, fill(false, 16))
    end
    for ii in 1:4
        append!(hpix4_ring, (8+ii) .* ones(Int, 16))
        append!(hpix4_ringidx, 1:16)
        append!(hpix4_isnorth,        fill(false, 16))
        append!(hpix4_issouth,        fill(true,  16))
        append!(hpix4_iscap,          fill(false, 16))
        append!(hpix4_isnorthcap,     fill(false, 16))
        append!(hpix4_issouthcap,     fill(false, 16))
        append!(hpix4_isequbelt,      fill(true,  16))
        append!(hpix4_isnorthequbelt, fill(false, 16))
        append!(hpix4_issouthequbelt, fill(true,  16))
    end
    for ii in 1:3
        jj = 3 - ii + 1
        append!(hpix4_ring, (12+ii) .* ones(Int, 4jj))
        append!(hpix4_ringidx, 1:4jj)
        append!(hpix4_isnorth,        fill(false, 4jj))
        append!(hpix4_issouth,        fill(true,  4jj))
        append!(hpix4_iscap,          fill(true,  4jj))
        append!(hpix4_isnorthcap,     fill(false, 4jj))
        append!(hpix4_issouthcap,     fill(true,  4jj))
        append!(hpix4_isequbelt,      fill(false, 4jj))
        append!(hpix4_isnorthequbelt, fill(false, 4jj))
        append!(hpix4_issouthequbelt, fill(false, 4jj))
    end

    @testset "Nside properties" begin
        @test nside2npix(4) == length(hpix4_pix)
        @test npix2nside(length(hpix4_pix)) == 4
        @test nside2nring(4) == hpix4_ring[end]
        @test nring2nside(hpix4_ring[end]) == 4
        @test nside2pixarea(4) == 4π / length(hpix4_pix)
    end

    @testset "Pixel indices" begin
        @test all(pix2ring.(4, hpix4_pix) .== hpix4_ring)
        @test all(pix2ringidx.(4, hpix4_pix) .== hpix4_ringidx)
    end

    @testset "Pixel classification" begin
        @test all(isnorth.(       4, hpix4_pix) .== hpix4_isnorth)
        @test all(issouth.(       4, hpix4_pix) .== hpix4_issouth)
        @test all(iscap.(         4, hpix4_pix) .== hpix4_iscap)
        @test all(isnorthcap.(    4, hpix4_pix) .== hpix4_isnorthcap)
        @test all(issouthcap.(    4, hpix4_pix) .== hpix4_issouthcap)
        @test all(isequbelt.(     4, hpix4_pix) .== hpix4_isequbelt)
        @test all(isnorthequbelt.(4, hpix4_pix) .== hpix4_isnorthequbelt)
        @test all(issouthequbelt.(4, hpix4_pix) .== hpix4_issouthequbelt)
    end

    @testset "Validity checks" begin
        @test all(ishealpixok.(2.^(0:29)) .== true)
        @test all(ishealpixok.([0, 2^30]) .== false)
        @test_throws InvalidNside checkhealpix(0)

        @test all(ishealpixok.(4, hpix4_pix) .== true)
        @test all(ishealpixok.(4, [-1, 192]) .== false)
        @test_throws InvalidPixel checkhealpix(4, 192)

        for pix2fn in (pix2z, pix2theta, pix2phi, pix2ang, pix2vec)
            @test_throws InvalidNside pix2fn(5,  0)
            @test_throws InvalidPixel pix2fn(4, -1)
        end
    end
end

