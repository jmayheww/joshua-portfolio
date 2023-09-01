"use client";
import { Navbar } from "./components/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar is404 />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-9xl text-error font-bold font-mono">404</h1>
        <h2 className="text-2xl font-bold font-mono">Page Not Found</h2>
      </div>
    </>
  );
}
