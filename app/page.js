"use client";

import { useState, useEffect } from "react";
import useAfterLoad from "./hooks/useAfterLoad";
import Loading from "./loading";

import { Hero } from "./sections/Hero";
import { Navbar } from "./components/Navbar";
import { About } from "./sections/About";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useAfterLoad(() => setIsLoading(false));
  return (
    <main className="bg-base-100 min-h-screen">
      {isLoading ? (
        <Loading />
      ) : (
        <>
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
        </>
      )}
    </main>
  );
}
