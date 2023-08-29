"use client";

import { Hero } from "./sections/Hero";
import { Navbar } from "./components/Navbar";
import { About } from "./sections/About";
import { SideBar } from "./components/SideBar";

export default function Home() {
  return (
    <main className="snap-container bg-base-100 min-h-screen">
      <section
        className="snap-section relative h-screen bg-center bg-cover"
        style={{ backgroundImage: "url('/images/workstation.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-base-100">
          <Navbar />
          <Hero />
        </div>
      </section>

      <section id="about" className="snap-section" data-aos="fade-up">
        <About />
      </section>
    </main>
  );
}
