"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { Hero } from "./sections/Hero";
import { Navbar } from "./components/Navbar";
import { About } from "./sections/About";

export default function Home() {
  const { push, replace } = useRouter();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      console.log("hash: ", hash);
      const sectionId = hash.replace("#", "");
      const section = document.getElementById(sectionId);
      console.log("section: ", section);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

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
