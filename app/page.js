"use client";

import { Hero } from "./sections/Hero";
import { Navbar } from "./components/Navbar";
import { About } from "./sections/About";

export default function Home() {
  return (
    <main className="bg-base-100 min-h-screen">
      <section
        id="hero"
        className="relative h-screen bg-center bg-cover"
        style={{ backgroundImage: "url('/images/workstation.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-base-100">
          <Navbar />
          <Hero />
        </div>
      </section>

      <section id="about" data-aos="fade-up">
        <About />
      </section>
    </main>
  );
}
