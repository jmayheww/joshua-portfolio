import Image from "next/image";

export const About = () => {
  return (
    <section className="h-screen bg-base-100 flex justify-center items-center">
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
