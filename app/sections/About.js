import Image from "next/image";
import { SectionHeader } from "../components/SectionHeader";

export const About = () => {
  return (
    <section className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-10 bg-whatever-color-your-background-is space-y-10">
      <SectionHeader title="About Me" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-5xl">
        {/* Text Content */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-primary"></h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed font-jetbrains-mono text-gray-300">
              <span className="text-primary">Clean </span> code.{" "}
              <span className="text-primary">Intuitive </span>
              design. {""}
              <span className="text-primary">Unforgettable </span> digital
              journeys.
            </p>
            <br />
            <p className="text-sm sm:text-base md:text-lg leading-relaxed font-jetbrains-mono text-gray-300">
              Its what I do.
            </p>
          </div>

          <div className="text-sm sm:text-base md:text-lg leading-relaxed font-jetbrains-mono text-gray-400 space-y-4">
            <p>
              Growing up during the early days of the internet, I was captivated
              not just by the prospect of playing iconic games like Starcraft
              online, but also, more broadly, by the evolving realms of online
              discussion forums and budding e-commerce platforms. These werent
              just hobbies or fleeting pastimes; they definitively laid the
              groundwork for my understanding of user experience,
              problem-solving, and online community building.
            </p>
            <p>
              My adult years have seen a shift from being a digital consumer to
              a digital creator. I see code as more than just syntax and rote
              commands; it is a tool, a way to decisively shape and enhance
              human interactions online. My diverse roles—from teaching to
              entrepreneurship to legal work— additionally give me a distinct
              and multi-dimensional lens for tackling difficult problems and
              promoting meaningful human interactions, something that truly
              guides and infuses itself in every line of code I write.
            </p>
          </div>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed font-jetbrains-mono text-gray-400">
            Explore my portfolio, a blend of my lifelong tech journey with the
            latest in web development. Let’s create digital magic together.
          </p>
        </div>

        {/* Image Section */}
        <div className="order-first md:order-last relative max-w-md mx-auto w-52 h-52 md:w-68 md:h-68 lg:w-84 lg:h-84 p-2">
          <div className="absolute -bottom-3 -right-4 w-full h-full border-4 border-success rounded-sm z-0"></div>
          <div className="relative w-full h-full z-10 overflow-hidden rounded-sm">
            <Image
              src="/images/headshot.jpg"
              alt="Developer Headshot"
              width={320}
              height={320}
              layout="responsive"
              className="transition-transform duration-300 hover:-translate-x-2 hover:-translate-y-2 hover:scale-105 hover:shadow-xl"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-success mix-blend-multiply hover:opacity-0 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
