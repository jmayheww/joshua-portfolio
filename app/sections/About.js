import Image from "next/image";
import { SectionHeader } from "../components/SectionHeader";

export const About = () => {
  return (
    <section className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-10 bg-whatever-color-your-background-is space-y-12">
      <SectionHeader title="About Me" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-5xl">
        {/* Text Content */}
        <div className="space-y-10">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4">
              It's What I Do.
            </h2>
          </div>

          <div>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed font-jetbrains-mono text-gray-300">
              From drafting legal documents to crafting lines of code, my
              journey towards the digital world has been both unique and
              enriching. As a former paralegal, I bring a distinctive analytical
              edge to the world of software development. Precision, attention to
              detail, and understanding nuance were essential in my previous
              role and remain equally paramount in my applications today.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-primary mb-4">
              Specializing in Excellence
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed font-jetbrains-mono text-gray-400">
              I strive for clean code, intuitive design, and unforgettable user
              experiences. Every project I undertake benefits from my
              comprehensive background, ensuring that solutions are not only
              technically proficient but also meticulously crafted to meet
              real-world challenges.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-primary mb-4">
              Blending Code & Purpose
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed font-jetbrains-mono text-gray-400">
              I channel a universal ethos - a synergizing brew of innovation,
              drive, and caffeinated creativity - into every project I
              undertake. My aim? To craft digital solutions that genuinely
              resonate with users while strategically elevating businesses.
              <br />
              Seeking a developer who seamlessly merges tech expertise with a
              keen understanding of end-user needs and business objectives?
              Let's connect. With each line of code, I'm driven by purpose,
              always ready for the next challenge to make a meaningful impact.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="order-first md:order-last relative max-w-md mx-auto w-52 h-52 md:w-68 md:h-68 lg:w-84 lg:h-84 p-2">
          <div className="absolute -bottom-3 -right-4 w-full h-full border-4 border-success rounded-sm z-0"></div>
          <div className="relative w-full h-full z-10 overflow-hidden rounded-sm">
            <Image
              src="/images/headshot.jpg"
              alt="Software Engineer Headshot"
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
