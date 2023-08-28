"use client";

import { Hero } from "../app/sections/hero";
import { Navbar } from "./components/navbar";

export default function Home() {
  return (
    <main className="bg-base-100 min-h-screen">
      <section
        className="relative bg-center bg-cover h-screen"
        style={{ backgroundImage: "url('/images/workstation.jpg')" }}
      >
        <div className="absolute inset-0 bg-base-100 bg-opacity-60">
          <Navbar />
          <Hero />
          {/* Adjust these values as you see fit */}
        </div>
      </section>
    </main>
  );
}
