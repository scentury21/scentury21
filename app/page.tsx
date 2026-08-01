import Link from "next/link";
import { products } from "@/data/products";
import { PerfumeBottle } from "@/components/3d/PerfumeBottle";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center gap-8 px-6 text-center overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 50% 30%, rgba(201,169,110,0.15), transparent 60%)",
          }}
        />
        <p className="tracking-[0.3em] text-smoke text-sm uppercase">
          Scentury21
        </p>
        <h1 className="text-fluid-hero font-display text-pearl max-w-4xl">
          Define your <span className="text-rose">presence</span>.
        </h1>
        <p className="text-fluid-body text-smoke max-w-md">
          A fragrance house for those who wear scent like a signature, not an
          afterthought.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Link
            href="/shop"
            className="bg-champagne text-obsidian px-8 py-3.5 text-sm tracking-wide rounded-full shadow-lg shadow-champagne/20 hover:bg-rose hover:shadow-rose/30 hover:-translate-y-0.5 transition-all duration-400"
          >
            Explore Collection
          </Link>
          <Link
            href="/explore"
            className="border border-champagne/60 text-champagne px-8 py-3.5 text-sm tracking-wide rounded-full hover:bg-champagne hover:text-obsidian hover:-translate-y-0.5 transition-all duration-400"
          >
            Discover Your Scent
          </Link>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-smoke text-xs tracking-widest animate-pulse">
          SCROLL
        </div>
      </section>

      {/* 3D Bottle Showcase */}
      <ScrollReveal>
        <section className="px-6 py-28 max-w-5xl mx-auto text-center">
          <p className="tracking-[0.3em] text-smoke text-sm uppercase mb-4">
            A Vessel Worth Holding
          </p>
          <h2 className="text-fluid-h2 font-display text-pearl mb-10">
            Every detail, considered.
          </h2>
          <PerfumeBottle />
          <p className="text-smoke text-sm mt-6">
            Placeholder form — final bottle design coming with product
            photography.
          </p>
        </section>
      </ScrollReveal>

      {/* Featured Products */}
      <ScrollReveal>
        <section className="px-6 py-28 max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-fluid-h2 font-display text-pearl">Featured</h2>
            <Link
              href="/shop"
              className="text-sm text-champagne hover:text-rose transition-colors duration-400"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group flex flex-col gap-3 p-6 rounded-2xl bg-charcoal/60 border border-graphite hover:border-champagne/50 shadow-lg shadow-black/20 hover:shadow-champagne/10 hover:-translate-y-1 transition-all duration-400"
              >
                <div className="aspect-[3/4] rounded-xl bg-gradient-to-br from-graphite to-charcoal flex items-center justify-center text-smoke text-xs">
                  Image coming soon
                </div>
                <p className="text-xs text-smoke uppercase tracking-wide mt-2">
                  {product.family}
                </p>
                <p className="font-display text-lg text-pearl group-hover:text-champagne transition-colors duration-400">
                  {product.name}
                </p>
                <p className="text-sm text-smoke">
                  ₦{product.price.toLocaleString()}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Brand Story */}
      <ScrollReveal>
        <section className="px-6 py-28 bg-charcoal/50">
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
            <h2 className="text-fluid-h2 font-display text-pearl">
              Crafted, not manufactured.
            </h2>
            <p className="text-fluid-body text-smoke">
              Every Scentury21 fragrance is built in small batches, layered
              from top to base note with the same care as a tailored garment.
              This isn&apos;t scent as accessory — it&apos;s scent as
              identity.
            </p>
            <Link
              href="/about"
              className="text-champagne text-sm hover:text-rose transition-colors duration-400 mx-auto"
            >
              Read our story →
            </Link>
          </div>
        </section>
      </ScrollReveal>

      {/* Collection Showcase */}
      <ScrollReveal>
        <section className="px-6 py-28 max-w-7xl mx-auto">
          <h2 className="text-fluid-h2 font-display text-pearl mb-12">
            Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Signature", "Night", "Fresh"].map((name) => (
              <Link
                key={name}
                href={`/collections/${name.toLowerCase()}`}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-graphite to-charcoal border border-graphite hover:border-champagne/50 shadow-lg shadow-black/20 hover:-translate-y-1 transition-all duration-400 flex items-end p-8"
              >
                <p className="font-display text-2xl text-pearl group-hover:text-champagne transition-colors duration-400">
                  {name}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Press / Testimonial strip */}
      <ScrollReveal>
        <section className="px-6 py-24 border-y border-graphite">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <blockquote className="flex flex-col gap-3">
              <p className="font-display text-lg text-pearl italic">
                &ldquo;A presence, not a perfume.&rdquo;
              </p>
              <p className="text-xs text-smoke uppercase tracking-widest">
                Lagos Style Journal
              </p>
            </blockquote>
            <blockquote className="flex flex-col gap-3">
              <p className="font-display text-lg text-pearl italic">
                &ldquo;Obsidian Noir doesn&apos;t fade — it lingers.&rdquo;
              </p>
              <p className="text-xs text-smoke uppercase tracking-widest">
                Fragrance Weekly
              </p>
            </blockquote>
            <blockquote className="flex flex-col gap-3">
              <p className="font-display text-lg text-pearl italic">
                &ldquo;Nigerian luxury, redefined.&rdquo;
              </p>
              <p className="text-xs text-smoke uppercase tracking-widest">
                Scent & Style
              </p>
            </blockquote>
          </div>
        </section>
      </ScrollReveal>

      {/* Reach Us */}
      <ScrollReveal>
        <section className="px-6 py-28 bg-charcoal/50">
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-8">
            <h2 className="text-fluid-h2 font-display text-pearl">
              Reach Us
            </h2>
            <p className="text-smoke">
              Prefer to talk before you buy? We&apos;re on WhatsApp,
              Instagram, and TikTok.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#"
                className="border border-champagne/60 text-champagne px-6 py-3 text-sm rounded-full hover:bg-champagne hover:text-obsidian hover:-translate-y-0.5 transition-all duration-400"
              >
                WhatsApp
              </a>
              <a
                href="#"
                className="border border-graphite text-smoke px-6 py-3 text-sm rounded-full hover:border-champagne/50 hover:text-pearl hover:-translate-y-0.5 transition-all duration-400"
              >
                Instagram
              </a>
              <a
                href="#"
                className="border border-graphite text-smoke px-6 py-3 text-sm rounded-full hover:border-champagne/50 hover:text-pearl hover:-translate-y-0.5 transition-all duration-400"
              >
                TikTok
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Newsletter CTA */}
      <ScrollReveal>
        <section className="px-6 py-28 text-center">
          <h2 className="text-fluid-h2 font-display text-pearl mb-4">
            Stay in scent.
          </h2>
          <p className="text-smoke mb-8">
            First access to new releases and members-only offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-charcoal border border-graphite rounded-full px-5 py-3.5 text-pearl placeholder:text-smoke focus:border-champagne outline-none transition-colors duration-400"
            />
            <button
              type="submit"
              className="bg-champagne text-obsidian px-8 py-3.5 text-sm rounded-full shadow-lg shadow-champagne/20 hover:bg-rose hover:-translate-y-0.5 transition-all duration-400"
            >
              Subscribe
            </button>
          </form>
        </section>
      </ScrollReveal>
    </main>
  );
}
