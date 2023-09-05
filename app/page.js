"use client";

import { useState } from "react";
// import useShowNavBarLogo from "./hooks/useShowNavBarLogo";
import { useHandlePageLoad } from "./hooks/useHandlePageLoad";
import Loading from "./loading";

import { Hero } from "./sections/Hero";
import Navbar from "./components/Navbar";
import { About } from "./sections/About";
import { Work } from "./sections/Work";
import Image from "next/image";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  // const { heroRef, aboutRef, showLogo } = useShowNavBarLogo();

  useHandlePageLoad(() => setIsLoading(false));

  return (
    <main className="bg-base-100 min-h-screen">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <section
            // ref={heroRef}
            id="hero"
            className="relative h-screen bg-center bg-cover"
          >
            <Image
              src="/images/workstation.jpg"
              alt="Workstation"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-base-100">
              <Navbar />
              <Hero />
            </div>
          </section>

          <section
            // ref={aboutRef}
            id="about"
            data-aos="fade-up"
          >
            <About />
          </section>
          <section id="work">
            <Work />
          </section>
        </>
      )}
    </main>
  );
}
