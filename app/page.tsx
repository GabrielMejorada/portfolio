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
              loading="lazy"
            />
          </div>
         <div className="relative">
            <div className="absolute inset-0 -z-10 bg-black/40" />

            <div className="text-left">
              <h1 className="text-5xl font-bold tracking-tight leading-tight">
                Gabriel Mejorada
              </h1>
              {"TODO: Figure out why text-color is not working."}
              <p className="mt-3 text-2xl text-amber-400">
                Junior Web Developer
              </p>
            </div>
          </div>
        </main>
        </div>
        </>
  );
}
