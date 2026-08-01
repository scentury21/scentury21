import Link from "next/link";
import { products } from "@/data/products";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center gap-8 px-6 text-center overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 50% 30%, rgba(201,169,110,0.12), transparent 60%)",
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
            className="bg-champagne text-obsidian px-8 py-3 text-sm tracking-wide rounded-sm hover:bg-rose transition-colors duration-400"
          >
            Explore Collection
          </Link>
          <Link
            href="/explore"
            className="border border-champagne text-champagne px-8 py-3 text-sm tracking-wide rounded-sm hover:bg-champagne hover:text-obsidian transition-colors duration-400"
          >
            Discover Your Scent
          </Link>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-smoke text-xs tracking-widest animate-pulse">
          SCROLL
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <h2 className="text-fluid-h2 font-display text-pearl mb-10">
          Featured
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group flex flex-col gap-3 p-5 rounded-sm border border-graphite hover:border-champagne transition-colors duration-400"
            >
              <div className="aspect-[3/4] bg-charcoal rounded-sm flex items-center justify-center text-smoke text-xs">
                Image coming soon
              </div>
              <p className="text-xs text-smoke uppercase tracking-wide">
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

      {/* Brand Story */}
      <section className="px-6 py-24 bg-charcoal">
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
          <h2 className="text-fluid-h2 font-display text-pearl">
            Crafted, not manufactured.
          </h2>
          <p className="text-fluid-body text-smoke">
            Every Scentury21 fragrance is built in small batches, layered
            from top to base note with the same care as a tailored garment.
            This isn&apos;t scent as accessory — it&apos;s scent as identity.
          </p>
          <Link
            href="/about"
            className="text-champagne text-sm hover:text-rose transition-colors duration-400 mx-auto"
          >
            Read our story →
          </Link>
        </div>
      </section>

      {/* Collection Showcase */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <h2 className="text-fluid-h2 font-display text-pearl mb-10">
          Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Signature", "Night", "Fresh"].map((name) => (
            <Link
              key={name}
              href={`/collections/${name.toLowerCase()}`}
              className="group relative aspect-[4/5] rounded-sm overflow-hidden bg-graphite flex items-end p-6"
            >
              <p className="font-display text-2xl text-pearl group-hover:text-champagne transition-colors duration-400">
                {name}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="px-6 py-24 text-center bg-charcoal">
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
            className="flex-1 bg-obsidian border border-graphite rounded-sm px-4 py-3 text-pearl placeholder:text-smoke focus:border-champagne outline-none"
          />
          <button
            type="submit"
            className="bg-champagne text-obsidian px-6 py-3 text-sm rounded-sm hover:bg-rose transition-colors duration-400"
          >
            Subscribe
          </button>
        </form>
      </section>
    </main>
  );
}
