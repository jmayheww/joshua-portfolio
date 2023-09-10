import Image from "next/image";

export const About = () => {
  return (
    <section className="h-screen bg-base-100 flex justify-center items-center px-4 md:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-5xl">
        {/* Text Content */}
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
            Hello! I&apos;m Joshua.
          </h2>
          <p className="text-base md:text-lg mb-3">
            My passion is building and designing exceptional digital
            experiences.
          </p>
          <p className="text-base md:text-lg mb-3">
            I began experimenting with web technologies in my teenage years and
            since then I&apos;ve built a myriad of web applications, platforms,
            and more.
          </p>
          <p className="text-base md:text-lg">
            Away from the screen, I enjoy hiking, capturing the world through my
            lens, and diving into compelling narratives.
          </p>
        </div>

        {/* Image */}
        <div className="order-first md:order-last">
          <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 border-2 border-gray-300 rounded-lg hover:border-primary-500 transition-all duration-300">
            <Image
              src="/images/headshot.jpg"
              alt="Joshua Mayhew headshot"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
