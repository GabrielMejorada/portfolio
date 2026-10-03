import Link from "next/link";
import Image from "next/image";
import Form from "./components/Form";

export default function Home() {
  return (
    <>
    <div className="flex min-h-screen flex-col">
    <header>
      <nav className="flex justify-center space-x-4 mt-2">
        <Link
           href="/about"
            className="m-1.5 font-bold inline-flex items-center"
            >
              About Me
            </Link>
            <Link
              href="/projects"
              className="m-1.5 font-bold inline-flex items-center"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              scroll={true}
              className="m-1.5 font-bold inline-flex items-center"
            >
              Contact Me
            </Link>
          </nav>
        </header>

        <main className="relative flex items-center justify-center min-h-screen overflow-hidden text-center px-4">
          {/* Hero section */}
          <div className="flex flex-col items-center text-center mt-6 space-y-8">
            <Image
              src="/images/background.png"
              alt="background"
              fill
              priority
              className="object-cover blur-md scale-110 -z-10"
            />
          </div>
          <div className="absolute inset-0 bg-black/40 -z-10"/>
            <p className="text-4xl md:text-6xl font-bold text-white max-w-4xl">
              Hi! I am Gabriel Mejorada, an aspiring jr web developer trying to find their specialty.
            </p>
        </main>
        </div>
        </>
  );
}
