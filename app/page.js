import { Navbar } from "./components/navbar";
import { Hero } from "./components/sections/hero";

export default function Home() {
  return (
    <main className="bg-base-100 min-h-screen">
      <header>
        <Navbar />
      </header>

      <Hero />
    </main>
  );
}
