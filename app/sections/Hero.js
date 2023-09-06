import { useInView } from "react-intersection-observer";
import Image from "next/image";

export const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.7,
  });
  return (
    <div className="relative h-full">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-base-100 bg-opacity-50"></div>
      {/* Content */}
      <div
        ref={ref}
        className={`flex flex-wrap justify-center h-full pt-20 lg:pt-32 relative transition-opacity duration-1000 ${
          inView ? "opacity-100 delay-600" : "opacity-10"
        }`}
      >
        <div
          className={`w-full lg:w-2/3 transition-all duration-1000 ${
            inView
              ? "transform translate-x-0 opacity-100"
              : "transform -translate-x-8 opacity-0"
          }`}
        >
          <div className="flex flex-col justify-center space-y-4">
            <p className="text-lg text-white font-jetbrains-mono">
              Hello there 👋
            </p>
            <h1 className="text-6xl font-extrabold font-jetbrains-mono leading-tight">
              I&rsquo;m <span className="text-green-400">Joshua Mayhew.</span>
            </h1>
            <h2 className="text-4xl leading-snug text-gray-300">
              Crafting digital experiences with modern web technologies.
            </h2>
            <p className="text-lg font-jetbrains-mono text-gray-400">
              Passionate about clean code and user-centric design.
            </p>
          </div>

          {/* Logo */}
          <div className="flex flex-col items-end">
            <Image
              src="/images/jfox.png"
              alt="Joshua Mayhew logo"
              width={160}
              height={160}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
