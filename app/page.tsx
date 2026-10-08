import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";
// import Form from "./components/Form";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-white">
      <Navbar/>
      
      {/* Hero Section */}
      <main className="relative flex flex-col items-center justify-center flex-grow overflow-hidden px-4 min-h-screen">
        
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/background.png"
            alt="background"
            fill
            className="object-cover blur-sm scale-105"
            loading="eager"
            priority
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-black/50" />

        {/* Hero Content */}
        <div className="relative z-10 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
            Gabriel Mejorada
          </h1>
          <p className="mt-4 text-2xl md:text-3xl font-light text-amber-400 drop-shadow-md">
            Junior Web Developer
          </p>
        </div>

      </main>
    </div>
  );
}