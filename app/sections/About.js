import { useInView } from "react-intersection-observer";
import Image from "next/image";

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  return (
    <section
      ref={ref}
      className="h-screen bg-base-100 flex justify-center items-center"
    >
      <div
        className={`flex justify-center items-center h-64 w-64 transition-all duration-1000 ${
          inView
            ? "transform scale-100 translate-x-0 opacity-100"
            : "transform scale-85 translate-x-12 opacity-0"
        }`}
      >
        <Image
          src="/images/headshot.jpg"
          alt="Joshua Mayhew headshot"
          width={256}
          height={256}
        />
      </div>
    </section>
  );
};
