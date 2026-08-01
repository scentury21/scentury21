export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="tracking-[0.3em] text-smoke text-sm uppercase">
        Scentury21
      </p>
      <h1 className="text-fluid-hero font-display text-pearl">
        Define your <span className="text-rose">presence</span>.
      </h1>
      <p className="text-fluid-body text-smoke max-w-md">
        Phase 1 scaffold is live — design tokens, fonts, and layout are wired
        up. Navbar, hero, and the rest of the storefront come next.
      </p>
    </main>
  );
}
