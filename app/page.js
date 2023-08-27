import { Navbar } from "./(layout-components)/navbar";

export default function Home() {
  return (
    <main className="bg-base-100 min-h-screen">
      <Navbar />

      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-1/2">
            <div className="p-6">
              <div className="text-2xl">Welcome to my personal website!</div>
              <div className="text-base mt-4">
                <h1 className="text-primary">
                  Im Joshua Mayhew, a software engineer and computer science
                  student at the University of Waterloo.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
