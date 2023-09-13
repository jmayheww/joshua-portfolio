import Image from "next/image";

export const About = () => {
  return (
    <div className="relative py-12 bg-gray-100">
      {/* Skewed Rectangle Background */}
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-blue-400 to-blue-500 transform -skew-y-6 origin-bottom-left"></div>

      <div className="relative container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image (top for mobile, right for desktop) */}
          <div className="order-1 md:order-2 w-full md:w-1/2 mb-8 md:mb-0">
            <div className="flex justify-center md:justify-end">
              <div className="w-64 h-64 relative overflow-hidden rounded-full shadow-xl">
                <Image
                  src="/path-to-your-image.jpg"
                  alt="Your Portrait"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-2 md:order-1 w-full md:w-1/2 text-white">
            <h2 className="text-3xl mb-4">About Me</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
              amet condimentum orci. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia curae; Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae.
            </p>
            <p>
              Phasellus euismod ante a mauris ultrices malesuada. Vestibulum
              viverra purus nec est pellentesque, quis euismod nunc convallis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
