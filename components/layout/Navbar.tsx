"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/explore", label: "Explore" },
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const supabase = createClient();

    supabase.auth.getUser().then(({ data }) => {
      setLoggedIn(!!data.user);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setLoggedIn(!!session?.user);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
          scrolled
            ? "bg-obsidian/80 backdrop-blur-md border-b border-graphite"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="font-display text-xl tracking-[0.2em] text-pearl"
          >
            SCENTURY21
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-smoke hover:text-champagne transition-colors duration-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5">
            <button
              aria-label="Search"
              className="text-pearl hover:text-champagne transition-colors duration-400"
            >
              <Search size={20} />
            </button>
            <Link
              href={loggedIn ? "/account" : "/login"}
              aria-label={loggedIn ? "Account" : "Sign in"}
              className="relative text-pearl hover:text-champagne transition-colors duration-400"
            >
              <User size={20} />
              {loggedIn && (
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-champagne" />
              )}
            </Link>
            <Link
              href="/cart"
              aria-label="Cart"
              className="relative text-pearl hover:text-champagne transition-colors duration-400"
            >
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-rose text-obsidian text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>
            <button
              aria-label="Menu"
              className="md:hidden text-pearl"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-obsidian flex flex-col">
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-display text-xl tracking-[0.2em] text-pearl">
              SCENTURY21
            </span>
            <button
              aria-label="Close menu"
              className="text-pearl"
              onClick={() => setMobileOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          <ul className="flex flex-col items-center justify-center gap-8 flex-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-fluid-h2 font-display text-pearl hover:text-champagne transition-colors duration-400"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={loggedIn ? "/account" : "/login"}
                className="text-fluid-h2 font-display text-champagne hover:text-rose transition-colors duration-400"
                onClick={() => setMobileOpen(false)}
              >
                {loggedIn ? "Account" : "Sign In"}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
