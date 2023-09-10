"use client";

import { useState } from "react";
// import useShowNavBarLogo from "./hooks/useShowNavBarLogo";
import { useHandlePageLoad } from "./hooks/useHandlePageLoad";
import Loading from "./loading";

import { Hero } from "./sections/Hero";
import Navbar from "./components/Navbar";
import { About } from "./sections/About";
import { Work } from "./sections/Work";
import { Contact } from "./sections/Contact";
import Image from "next/image";
import { Footer } from "./components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  // const { heroRef, aboutRef, showLogo } = useShowNavBarLogo();

  useHandlePageLoad(() => setIsLoading(false));

  return (
    <main className="bg-base-100 min-h-screen relative">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <section id="hero" className="relative h-screen bg-center bg-cover ">
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
            className="px-4 md:px-16 lg:px-24"
          >
            <About />
          </section>

          <section id="work" className="px-4 md:px-16 lg:px-24">
            <Work />
          </section>

          <section
            id="contact"
            className="py-20 bg-gradient-to-t from-neutral to-base-100 text-white px-4 md:px-16 lg:px-24"
          >
            <Contact />
          </section>
          <Footer />
        </>
      )}
    </main>
  );
}
