import { useInView } from "react-intersection-observer";
import Image from "next/image";

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Ensures the effect happens every time the section comes into view
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className={`h-screen bg-base-100 flex justify-center items-center transform ${
        inView ? "scale-100 opacity-100" : "scale-85 opacity-0"
      } transition-transform duration-700 delay-200 transition-opacity duration-700`}
    >
      <div className="flex justify-center items-center h-64 w-64">
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
