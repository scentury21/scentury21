"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/account`,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    setSent(true);
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-obsidian">
      <div className="w-full max-w-sm flex flex-col gap-6">
        <div className="text-center">
          <p className="tracking-[0.3em] text-smoke text-sm uppercase mb-2">
            Scentury21
          </p>
          <h1 className="text-fluid-h1 font-display text-pearl">
            Reset your password
          </h1>
        </div>

        {sent ? (
          <p className="text-center text-champagne">
            Check your email for a password reset link.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              id="email"
              type="email"
              label="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {error && <p className="text-sm text-rose">{error}</p>}

            <Button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send reset link"}
            </Button>
          </form>
        )}

        <p className="text-center text-sm text-smoke">
          <Link href="/login" className="hover:text-champagne">
            Back to sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
