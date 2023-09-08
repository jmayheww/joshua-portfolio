import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-base-100">
      <Image
        src="/images/jfoxs.png"
        alt="Loading logo JM brand logo"
        className="animate-dropAndBounce"
        width={1000}
        height={1000}
      />
    </div>
  );
}
