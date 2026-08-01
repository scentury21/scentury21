"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/account";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    router.push(redirectTo);
    router.refresh();
  }

  async function handleGoogleLogin() {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?redirectTo=${redirectTo}`,
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
            Welcome back
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-sm text-rose">{error}</p>}

          <Button type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </Button>
        </form>

        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-graphite" />
          <span className="text-smoke text-sm">or</span>
          <div className="flex-1 h-px bg-graphite" />
        </div>

        <Button variant="secondary" onClick={handleGoogleLogin} type="button">
          Continue with Google
        </Button>

        <p className="text-center text-sm text-smoke">
          <Link href="/forgot-password" className="hover:text-champagne">
            Forgot password?
          </Link>
        </p>
        <p className="text-center text-sm text-smoke">
          New here?{" "}
          <Link href="/signup" className="text-champagne hover:text-rose">
            Create an account
          </Link>
        </p>
      </div>
    </main>
  );
}