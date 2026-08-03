"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

interface Profile {
  full_name: string | null;
  phone: string | null;
}

export default function AccountPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const supabase = createClient();

    async function load() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      setEmail(user.email ?? "");

      const { data: profile } = await supabase
        .from("profiles")
        .select("full_name, phone")
        .eq("id", user.id)
        .single<Profile>();

      if (profile) {
        setFullName(profile.full_name ?? "");
        setPhone(profile.phone ?? "");
      }

      setLoading(false);
    }

    load();
  }, [router]);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage(null);
    setError(null);

    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setSaving(false);
      return;
    }

    const { error } = await supabase
      .from("profiles")
      .update({ full_name: fullName, phone })
      .eq("id", user.id);

    setSaving(false);

    if (error) {
      setError(error.message);
      return;
    }

    setMessage("Profile updated.");
  }

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-obsidian">
        <p className="text-smoke text-sm">Loading...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-32 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-14">
        <div>
          <p className="tracking-[0.3em] text-smoke text-xs uppercase mb-2">
            Account
          </p>
          <h1 className="text-fluid-h1 font-display text-pearl">
            Your details
          </h1>
        </div>
        <button
          onClick={handleLogout}
          className="text-xs tracking-[0.15em] uppercase text-smoke hover:text-rose transition-colors duration-400"
        >
          Log out
        </button>
      </div>

      <section className="mb-16">
        <form onSubmit={handleSave} className="flex flex-col gap-5">
          <Input id="email" label="Email" type="email" value={email} disabled />
          <Input
            id="fullName"
            label="Full name"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <Input
            id="phone"
            label="Phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          {error && <p className="text-sm text-rose">{error}</p>}
          {message && <p className="text-sm text-champagne">{message}</p>}

          <Button type="submit" disabled={saving} className="w-fit">
            {saving ? "Saving..." : "Save changes"}
          </Button>
        </form>
      </section>

      <section className="border-t border-graphite pt-10">
        <p className="tracking-[0.3em] text-smoke text-xs uppercase mb-6">
          Order History
        </p>
        <p className="text-smoke text-sm">
          No orders yet — orders will appear here once checkout is live.
        </p>
      </section>
    </main>
  );
}
