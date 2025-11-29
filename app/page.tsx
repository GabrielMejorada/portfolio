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

        <main className="flex items-center justify-center min-h-screen text-center">
          {/* Hero section */}
            <p className="text-7xl">
              Hi! I am Gabriel Mejorada, an aspiring jr web developer trying to find their specialty.
            </p>
        </main>
        </div>
        </>
  );
}
