import Link from "next/link";

const columns = [
  {
    title: "Shop",
    links: [
      { href: "/shop", label: "All Fragrances" },
      { href: "/collections", label: "Collections" },
      { href: "/explore", label: "Explore" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Reach Us" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/account/orders", label: "Order Status" },
      { href: "/shipping", label: "Shipping & Returns" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-graphite bg-obsidian px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <p className="font-display text-4xl md:text-5xl tracking-[0.1em] text-pearl">
          SCENTURY21
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <p className="text-sm text-champagne uppercase tracking-wide">
                {col.title}
              </p>
              {col.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-smoke hover:text-pearl transition-colors duration-400"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}

          <div className="flex flex-col gap-3">
            <p className="text-sm text-champagne uppercase tracking-wide">
              Newsletter
            </p>
            <p className="text-sm text-smoke">
              New arrivals, first access.
            </p>
            <form className="flex gap-2 mt-1">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 min-w-0 bg-charcoal border border-graphite rounded-sm px-3 py-2 text-sm text-pearl placeholder:text-smoke focus:border-champagne outline-none"
              />
              <button
                type="submit"
                className="bg-champagne text-obsidian text-sm px-4 py-2 rounded-sm hover:bg-rose transition-colors duration-400"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-graphite text-sm text-smoke">
          <p>© {new Date().getFullYear()} Scentury21. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-pearl transition-colors duration-400">
              WhatsApp
            </a>
            <a href="#" className="hover:text-pearl transition-colors duration-400">
              Instagram
            </a>
            <a href="#" className="hover:text-pearl transition-colors duration-400">
              TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
