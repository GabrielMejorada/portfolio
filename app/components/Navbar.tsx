import Link from "next/link";

export default function Navbar(){
    return(
        <>
         <header className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
          <nav className="flex justify-center space-x-8 py-4">
            <Link
              href="/"
              className="font-medium hover:text-amber-400 transition-colors duration-300 inline-flex items-center"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="font-medium hover:text-amber-400 transition-colors duration-300 inline-flex items-center"
            >
              About Me
            </Link>
            <Link
              href="/projects"
              className="font-medium hover:text-amber-400 transition-colors duration-300 inline-flex items-center"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              scroll={true}
              className="font-medium hover:text-amber-400 transition-colors duration-300 inline-flex items-center"
            >
              Contact Me
            </Link>
          </nav>
        </header>
        </>
    )
}

