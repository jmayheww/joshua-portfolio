"use client";

import { useState } from "react";
// import useShowNavBarLogo from "./hooks/useShowNavBarLogo";
import { useHandlePageLoad } from "./hooks/useHandlePageLoad";
import Loading from "./loading";

import { Hero } from "./sections/Hero";
import Navbar from "./components/Navbar";
import { About } from "./sections/About";
import { Work } from "./sections/Work";
import { Writing } from "./sections/Writing";
import { Contact } from "./sections/Contact";
import Image from "next/image";
import { Footer } from "./components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useHandlePageLoad(() => setIsLoading(false));

  return (
    <main className="bg-base-100 min-h-screen relative">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <section
            id="hero"
            className="relative min-h-screen bg-center bg-cover overflow-hidden"
          >
            <Image
              src="/images/workstation.jpg"
              alt="Workstation"
              layout="fill"
              objectFit="cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-base-100 bg-opacity-80 transition duration-500 ease-in-out"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-base-100">
              <Hero />
            </div>
          </section>

          <section
            id="about"
            data-aos="fade-up"
            className="py-2 md:py-16 px-4 md:px-16 lg:px-24 bg-gradient-to-b from-base-100 to-base-150 min-h-screen overflow-hidden"
          >
            <About />
          </section>

          <section
            id="work"
            className="py-2 md:py-16 px-4 md:px-16 lg:px-24 min-h-screen overflow-hidden"
          >
            <Work />
          </section>

          <section
            id="writing"
            className="py-2 md:py-16 px-4 md:px-16 lg:px-24 min-h-screen overflow-hidden"
          >
            <Writing />
          </section>

          <section
            id="contact"
            className="py-2 md:py-16 bg-gradient-to-t from-neutral to-base-100 text-white px-4 md:px-16 lg:px-24  overflow-hidden"
          >
            <Contact />
          </section>
          <Footer />
        </>
      )}
    </main>
  );
}
