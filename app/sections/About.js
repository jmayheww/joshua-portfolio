import Image from "next/image";

export const About = () => {
  return (
    <section className="h-screen flex justify-center items-center px-4 sm:px-6 lg:px-10 bg-whatever-color-your-background-is">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-5xl">
        {/* Text Content */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-jetbrains-mono tracking-tight mb-5 text-primary">
            Digging Deeper
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 font-jetbrains-mono text-gray-400">
            As a developer, ... {/* Rest of the paragraph */}
          </p>
          <button className="mt-5 bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-lg transition-all duration-300">
            Learn More
          </button>
        </div>

        {/* Image Section */}
        <div className="order-first md:order-last relative max-w-md mx-auto w-52 h-52 md:w-68 md:h-68 lg:w-84 lg:h-84 bg-whatever-color-your-background-is p-2">
          <div className="absolute -bottom-6 -right-7 w-full h-full border-4 border-success rounded-sm z-0"></div>
          <Image
            src="/images/headshot.jpg"
            alt="Developer Headshot"
            width={320}
            height={320}
            layout="intrinsic"
            className="relative rounded-sm object-cover z-10 filter grayscale transition-transform duration-300 hover:-translate-x-2 hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:filter-none hover:mix-blend-normal"
          />
        </div>
      </div>
    </section>
  );
};
