// components/Hero.jsx (Next.js)
"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 text-center text-white"
      style={{
        background:
          "linear-gradient(135deg, #5B21B6 0%, #2563EB 60%)",
      }}
    >
      <div className="max-w-2xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          Welcome to Sellara
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl mb-3">
          Start dropshipping today!
        </p>

        <p className="text-sm sm:text-base text-gray-100/90 mb-8">
          Create your own dropshipping store with AI.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link href="/signup">
            <button className="px-6 py-3 rounded-full bg-white text-indigo-700 font-semibold shadow-md hover:brightness-95 transition">
              Sign Up
            </button>
          </Link>

          <Link href="/signin">
            <button className="px-6 py-3 rounded-full border border-white bg-transparent text-white font-semibold hover:bg-white/10 transition">
              Sign In
            </button>
          </Link>
        </div>

        <div className="mt-6 flex justify-center gap-4 text-xs text-gray-100/80">
          <span>✅ No coding needed</span>
          <span>•</span>
          <span>✅ AI-powered store builder</span>
          <span>•</span>
          <span>✅ Fast launch</span>
        </div>
      </div>
    </section>
  );
}
