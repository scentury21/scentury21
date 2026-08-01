"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function SignupPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setMessage(null);
    setLoading(true);

    const supabase = createClient();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
      },
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    if (data.session) {
      router.push("/account");
      router.refresh();
    } else {
      setMessage("Check your email to confirm your account before signing in.");
    }
  }

  async function handleGoogleSignup() {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?redirectTo=/account`,
      },
    });
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-obsidian">
      <div className="w-full max-w-sm flex flex-col gap-6">
        <div className="text-center">
          <p className="tracking-[0.3em] text-smoke text-sm uppercase mb-2">
            Scentury21
          </p>
          <h1 className="text-fluid-h1 font-display text-pearl">
            Create your account
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            id="fullName"
            type="text"
            label="Full name"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <Input
            id="email"
            type="email"
            label="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            id="password"
            type="password"
            label="Password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-sm text-rose">{error}</p>}
          {message && <p className="text-sm text-champagne">{message}</p>}

          <Button type="submit" disabled={loading}>
            {loading ? "Creating account..." : "Create account"}
          </Button>
        </form>

        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-graphite" />
          <span className="text-smoke text-sm">or</span>
          <div className="flex-1 h-px bg-graphite" />
        </div>

        <Button variant="secondary" onClick={handleGoogleSignup} type="button">
          Continue with Google
        </Button>

        <p className="text-center text-sm text-smoke">
          Already have an account?{" "}
          <Link href="/login" className="text-champagne hover:text-rose">
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
