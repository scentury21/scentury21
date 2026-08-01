import { KineticGrid } from "@/components/backgrounds/KineticGrid";
import { ClickEffects } from "@/components/effects/ClickEffects";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { CoverflowGallery } from "@/components/explore/CoverflowGallery";
import { products } from "@/data/products";

export default function ExplorePage() {
  return (
    <main className="relative" style={{ cursor: "none" }}>
      <CustomCursor />
      <ClickEffects />

      {/* Interactive hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        <KineticGrid />
        <div className="relative z-10 flex flex-col items-center gap-6">
          <p className="tracking-[0.3em] text-smoke text-sm uppercase">
            Explore
          </p>
          <h1 className="text-fluid-hero font-display text-pearl max-w-3xl">
            Find your <span className="text-rose">atmosphere</span>.
          </h1>
          <p className="text-fluid-body text-smoke max-w-md">
            Move your cursor through the field. Click anywhere. This is
            where Scentury21 shows you who it is.
          </p>
        </div>
      </section>

      {/* Coverflow perfume gallery */}
      <section className="px-6 py-24 bg-charcoal">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
          <h2 className="text-fluid-h2 font-display text-pearl text-center">
            The Collection
          </h2>
          <CoverflowGallery products={products} />
          <p className="text-smoke text-sm">
            Click a card, or use ← → to move through the collection.
          </p>
        </div>
      </section>
    </main>
  );
}
