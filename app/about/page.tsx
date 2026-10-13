import Link from "next/link";
import Image from "next/image";
import Form from "../components/Form";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex flex-col items-center text-center px-4 mt-8 space-y-16 max-w-5xl mx-auto">

        {/* Hero Section */}
        <section className="w-full max-w-2xl space-y-6">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-slate-300 font-medium">
            <h2>Links to my resume and socials:</h2>
            <div className="flex items-center gap-3">
              <Link href="/images/resume.pdf" className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                Resume
              </Link>

              <a href="https://github.com/OctoDev8" className="bg-slate-800 hover:bg-slate-700 border border-slate-700 p-2 rounded-lg flex items-center justify-center transition-colors">
                <Image src="/images/github.png" alt="Github logo" width={24} height={24} className="brightness-200" loading="lazy" />
              </a>

              <a href="https://linkedin.com/in/gabriel-mejorada-33a328302" className="bg-slate-800 hover:bg-slate-700 border border-slate-700 p-2 rounded-lg flex items-center justify-center transition-colors">
                <Image src="/images/linkedin.png" alt="LinkedIn logo" width={24} height={24} loading="lazy" />
              </a>
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl mt-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-sky-400 mb-2">
              Education
            </h3>
            <p className="text-lg text-slate-100 font-bold">
              Certificate of Web Development from Southern Alberta Institute of Technology
            </p>
          </div>
        </section>

        {/* List of Skills */}
        <section className="w-full">
          <h2 className="text-xl font-bold text-slate-100 mb-6 text-center">
            Programming languages and frameworks I work with
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { name: "JavaScript", src: "/images/js-logo.png" },
              { name: "CSS", src: "/images/css-logo.png" },
              { name: "C", src: "/images/c-logo.png" },
              { name: "React", src: "/images/react-logo.png" },
              { name: "ExpressJS", src: "/images/express-logo.png" },
              { name: "Tailwind CSS", src: "/images/tailwind-logo.png" },
              { name: "Python", src: "/images/python-logo.png" },
              { name: "Bootstrap CSS", src: "/images/bootstrap-logo.png" },
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 hover:border-sky-500/50 rounded-xl p-5 flex flex-col items-center justify-center transition-all duration-200 shadow-lg group"
              >
                <div className="h-12 flex items-center justify-center mb-3">
                  <Image
                    src={skill.src}
                    alt={`${skill.name} logo`}
                    width={42}
                    height={42}
                    className="object-contain group-hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                </div>
                <p className="text-slate-200 text-sm font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full max-w-md pb-16">
          <Form />
        </section>
      </main>
    </>
  )
}