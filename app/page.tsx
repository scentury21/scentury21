import Link from "next/link";
import { products } from "@/data/products";
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
              "radial-gradient(circle at 50% 25%, rgba(201,169,110,0.22), transparent 55%)",
          }}
        />
        <p className="tracking-[0.4em] text-smoke text-xs uppercase">
          Scentury21
        </p>
        <h1 className="text-fluid-hero font-display text-pearl max-w-4xl leading-[0.95]">
          Define your <span className="text-rose">presence</span>.
        </h1>
        <p className="text-fluid-body text-smoke max-w-md">
          A fragrance house for those who wear scent like a signature, not an
          afterthought.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link
            href="/shop"
            className="bg-champagne text-obsidian px-9 py-4 text-sm font-medium tracking-[0.15em] uppercase shadow-xl shadow-champagne/10 hover:bg-rose hover:shadow-rose/20 transition-all duration-400"
          >
            Explore Collection
          </Link>
          <Link
            href="/explore"
            className="border border-champagne text-champagne px-9 py-4 text-sm font-medium tracking-[0.15em] uppercase hover:bg-champagne hover:text-obsidian transition-all duration-400"
          >
            Discover Your Scent
          </Link>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-smoke text-xs tracking-[0.3em] animate-pulse">
          SCROLL
        </div>
      </section>

      {/* Editorial statement */}
      <ScrollReveal>
        <section className="px-6 py-32 border-t border-graphite">
          <p className="max-w-4xl mx-auto text-center font-display text-3xl md:text-5xl leading-tight text-pearl">
            Scent is the only thing that enters a room{" "}
            <span className="text-champagne">before you do</span> — and
            stays after you&apos;ve left it.
          </p>
        </section>
      </ScrollReveal>

      {/* Featured Products */}
      <ScrollReveal>
        <section className="px-6 py-28 max-w-7xl mx-auto border-t border-graphite">
          <div className="flex items-end justify-between mb-14">
            <h2 className="text-fluid-h2 font-display text-pearl">Featured</h2>
            <Link
              href="/shop"
              className="text-xs tracking-[0.15em] uppercase text-champagne hover:text-rose transition-colors duration-400"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group flex flex-col gap-3 border border-graphite hover:border-champagne p-6 transition-all duration-400"
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-graphite to-charcoal flex items-center justify-center text-smoke text-xs">
                  Image coming soon
                </div>
                <p className="text-xs text-champagne uppercase tracking-[0.15em] mt-2">
                  {product.family}
                </p>
                <p className="font-display text-xl text-pearl group-hover:text-champagne transition-colors duration-400">
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
        <section className="px-6 py-32 bg-charcoal border-t border-graphite">
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
            <p className="tracking-[0.4em] text-champagne text-xs uppercase">
              Philosophy
            </p>
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
              className="text-champagne text-xs tracking-[0.15em] uppercase hover:text-rose transition-colors duration-400 mx-auto mt-2"
            >
              Read our story →
            </Link>
          </div>
        </section>
      </ScrollReveal>

      {/* Collection Showcase */}
      <ScrollReveal>
        <section className="px-6 py-28 max-w-7xl mx-auto border-t border-graphite">
          <h2 className="text-fluid-h2 font-display text-pearl mb-14">
            Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Signature", "Night", "Fresh"].map((name) => (
              <Link
                key={name}
                href={`/collections/${name.toLowerCase()}`}
                className="group relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-graphite to-charcoal border border-graphite hover:border-champagne transition-all duration-400 flex items-end p-8"
              >
                <p className="font-display text-3xl text-pearl group-hover:text-champagne transition-colors duration-400">
                  {name}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Press / Testimonial strip */}
      <ScrollReveal>
        <section className="px-6 py-24 border-t border-graphite bg-charcoal">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <blockquote className="flex flex-col gap-3">
              <p className="font-display text-lg text-pearl italic">
                &ldquo;A presence, not a perfume.&rdquo;
              </p>
              <p className="text-xs text-smoke uppercase tracking-[0.15em]">
                Lagos Style Journal
              </p>
            </blockquote>
            <blockquote className="flex flex-col gap-3">
              <p className="font-display text-lg text-pearl italic">
                &ldquo;Obsidian Noir doesn&apos;t fade — it lingers.&rdquo;
              </p>
              <p className="text-xs text-smoke uppercase tracking-[0.15em]">
                Fragrance Weekly
              </p>
            </blockquote>
            <blockquote className="flex flex-col gap-3">
              <p className="font-display text-lg text-pearl italic">
                &ldquo;Nigerian luxury, redefined.&rdquo;
              </p>
              <p className="text-xs text-smoke uppercase tracking-[0.15em]">
                Scent & Style
              </p>
            </blockquote>
          </div>
        </section>
      </ScrollReveal>

      {/* Reach Us */}
      <ScrollReveal>
        <section className="px-6 py-32 border-t border-graphite">
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-8">
            <p className="tracking-[0.4em] text-champagne text-xs uppercase">
              Contact
            </p>
            <h2 className="text-fluid-h2 font-display text-pearl">
              Reach Us
            </h2>
            <p className="text-smoke">
              Prefer to talk before you buy? We&apos;re on WhatsApp,
              Instagram, and TikTok.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
              <a
                href="#"
                className="border border-champagne text-champagne px-7 py-3.5 text-xs tracking-[0.15em] uppercase hover:bg-champagne hover:text-obsidian transition-all duration-400"
              >
                WhatsApp
              </a>
              <a
                href="#"
                className="border border-graphite text-smoke px-7 py-3.5 text-xs tracking-[0.15em] uppercase hover:border-pearl/40 hover:text-pearl transition-all duration-400"
              >
                Instagram
              </a>
              <a
                href="#"
                className="border border-graphite text-smoke px-7 py-3.5 text-xs tracking-[0.15em] uppercase hover:border-pearl/40 hover:text-pearl transition-all duration-400"
              >
                TikTok
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Newsletter CTA */}
      <ScrollReveal>
        <section className="px-6 py-32 text-center border-t border-graphite">
          <h2 className="text-fluid-h2 font-display text-pearl mb-4">
            Stay in scent.
          </h2>
          <p className="text-smoke mb-10">
            First access to new releases and members-only offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-transparent border border-graphite px-5 py-4 text-pearl placeholder:text-smoke focus:border-champagne outline-none transition-colors duration-400"
            />
            <button
              type="submit"
              className="bg-champagne text-obsidian px-9 py-4 text-xs tracking-[0.15em] uppercase shadow-xl shadow-champagne/10 hover:bg-rose transition-all duration-400"
            >
              Subscribe
            </button>
          </form>
        </section>
      </ScrollReveal>
    </main>
  );
}
