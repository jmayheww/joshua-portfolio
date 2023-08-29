"use client";

import { Hero } from "../app/sections/hero";
import { Navbar } from "./components/navbar";
import { About } from "./sections/about";

export default function Home() {
  return (
    <main className="bg-base-100 min-h-screen">
      {/* Hero Section with Gradient Transition */}
      <section
        className="relative h-screen bg-center bg-cover"
        style={{ backgroundImage: "url('/images/workstation.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-base-100">
          <Navbar />
          <Hero />
        </div>
      </section>

      {/* About Section with Solid Base-100 Background */}
      <About />
    </main>
  );
}
