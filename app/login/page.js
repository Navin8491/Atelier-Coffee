"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Login() {
  const router = useRouter();
  const { checkAuth } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      // Store token in sessionStorage for per-tab independent session
      sessionStorage.setItem("authToken", data.token);
      await checkAuth();

      if (data.user?.role === "admin") {
        router.push("/admin");
      } else {
        router.push("/");
      }
      router.refresh();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md bg-surface-container-lowest p-8 md:p-12 border border-[#E6D5C3] rounded-DEFAULT shadow-xl relative overflow-hidden">
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary/30"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/30"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-primary/30"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/30"></div>

        <div className="text-center mb-10 relative z-10">
          <h1 className="font-headline-lg text-headline-lg text-primary mb-2">Welcome Back</h1>
          <p className="font-body-md text-on-surface-variant uppercase tracking-widest text-sm">
            Sign in to your account
          </p>
        </div>

        {error && (
          <div className="bg-error/10 border border-error text-error px-4 py-3 rounded-DEFAULT mb-6 font-body-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div>
            <label className="block font-label-md text-sm uppercase tracking-widest text-on-surface-variant mb-2">
              Email Address
            </label>
            <input
              type="email"
              required
              className="w-full bg-surface-container border border-outline-variant/50 focus:border-primary px-4 py-3 outline-none transition-colors text-on-surface font-body-md rounded-DEFAULT"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block font-label-md text-sm uppercase tracking-widest text-on-surface-variant mb-2">
              Password
            </label>
            <input
              type="password"
              required
              className="w-full bg-surface-container border border-outline-variant/50 focus:border-primary px-4 py-3 outline-none transition-colors text-on-surface font-body-md rounded-DEFAULT"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-on-primary py-4 font-label-md uppercase tracking-widest hover:bg-secondary transition-all shadow-lg glow-border active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed rounded-full font-bold mt-4"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className="mt-8 text-center font-body-sm text-on-surface-variant relative z-10">
          <p>
            Don't have an account?{" "}
            <Link href="/register" className="text-primary hover:text-secondary transition-colors font-bold border-b border-primary/30 hover:border-secondary">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
