import Link from "next/link";
import Image from "next/image";
import Form from "../components/Form";

export default function(){
    return(
        <>
             <header>
          <nav className="flex justify-center space-x-4 mt-2">
            <Link href="/" className="m-1.5 font-bold inline-flex items-center">
            {" "}
            Home{" "}
            </Link>
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

        <main className="flex flex-col items-center text-center mt-6 space-y-8">
          {/* Hero section */}
          <section className="w-full max-w-lg">
            <div className="flex justify-center items-center mt-4 font-bold">
              <h2> Links to my resume and socials:</h2>

              <Link href="/images/resume.pdf" className="bg-sky-700 p-2 inline-block m-1.5 rounded-full"> Resume </Link>
              <a href="https://github.com/OctoDev8"><Image src="/images/github.png" alt="Github logo" width={60} height={60} loading="lazy"/></a>
              <a href="https://linkedin.com/in/gabriel-mejorada-33a328302"><Image src="/images/linkedin.png" alt="Github logo" width={60} height={60} loading="lazy"/></a>
           </div>

            <h1 className="text-lg text-white font-bold border-sky-500 rounded-full bg-sky-500 px-4 py-1 mt-8 inline-block">
              Education:
            </h1>
            <p className="font-extrabold mt-2">
              Certificate of Web Development from Southern Alberta Institute of
              Technology
            </p>
          </section>

          {/* List of skills */}
          <section className="w-full max-w-4xl mx-auto mt-8">
            <h1 className="text-lg font-bold text-white border-sky-500 rounded-full bg-sky-500 px-4 py-1 inline-block mb-4 text-center">
             Programming languages and frameworks I work with
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              <div className="bg-sky-500 rounded-xl p-4 flex flex-col items-center shadow-2xl">
                <Image
                  src="/images/js-logo.png"
                  alt="JavaScript logo"
                  width={48}
                  height={48}
                  loading="lazy"
                />
                <p className="text-white mt-2 font-semibold">JavaScript</p>
              </div>

              <div className="bg-sky-500 rounded-xl p-4 flex flex-col items-center shadow-2xl">
                <Image
                  src="/images/css-logo.png"
                  alt="CSS logo"
                  width={48}
                  height={48}
                  loading="lazy"
                />
                <p className="text-white mt-2 font-semibold">CSS</p>
              </div>

              <div className="bg-sky-500 rounded-xl p-4 flex flex-col items-center shadow-2xl">
                <Image
                  src="/images/c-logo.png"
                  alt="C logo"
                  width={48}
                  height={48}
                  loading="lazy"
                />
                <p className="text-white mt-2 font-semibold">C</p>
              </div>
            </div>
          </section>

          <section className="w-full max-w-4xl mx-auto mt-8">

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              <div className="bg-sky-500 rounded-xl p-4 flex flex-col items-center shadow-2xl h">
                <Image
                  src="/images/react-logo.png"
                  alt="React logo"
                  width={48}
                  height={48}
                  loading="lazy"
                />
                <p className="text-white mt-2 font-semibold">React</p>
              </div>

              <div className="bg-sky-500 rounded-xl p-4 flex flex-col items-center shadow-2xl">
                <Image
                  src="/images/express-logo.png"
                  alt="Express logo"
                  width={48}
                  height={48}
                  loading="lazy"
                />
                <p className="text-white mt-2 font-semibold">ExpressJS</p>
              </div>

              <div className="bg-sky-500 rounded-xl p-4 flex flex-col items-center shadow-2xl">
                <Image
                  src="/images/tailwind-logo.png"
                  alt="Tailwind logo"
                  width={48}
                  height={60}
                  loading="lazy"
                />
                <p className="text-white mt-2 font-semibold">Tailwind CSS</p>
              </div>

              <div className="bg-sky-500 rounded-xl p-4 flex flex-col items-center shadow-2xl">
                <Image
                  src="/images/bootstrap-logo.png"
                  alt="Bootstrap logo"
                  width={48}
                  height={48}
                  loading="lazy"
                />
                <p className="text-white mt-2 font-semibold">Bootstrap CSS</p>
              </div>
            </div>
          </section>

          <section id="contact" className="mt-16">
            <Form></Form>
          </section>
        </main>
        </>
    )
}