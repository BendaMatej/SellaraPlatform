"use client";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white px-4 text-center">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Sellara</h1>
        <p className="text-lg md:text-2xl mb-8">
          Start dropshipping today! <br />
          Create your own dropshipping store with AI.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/login"
            className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition"
          >
            Log In
          </a>
          <a
            href="/signup"
            className="bg-transparent border border-white py-2 px-6 rounded-lg hover:bg-white hover:text-blue-600 transition"
          >
            Sign Up
          </a>
        </div>
      </div>
    </section>
  );
}
