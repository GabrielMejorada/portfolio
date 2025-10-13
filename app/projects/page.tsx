import Link from "next/link";
import { Card } from "../components/Card";

export default function Projects() {
  return (
    <>
      <header className="border-sky-500 bg-sky-500 p-4">
        <h1 className="text-blue-800 font-extrabold text-center">
          {" "}
          Projects Page
        </h1>
        <nav className="flex justify-center space-x-4 mt-2">
          {" "}
          <Link href="/" className="m-1.5 font-bold inline-flex items-center">
            {" "}
            Home{" "}
          </Link>
        </nav>
      </header>
      <main>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <section className="flex mt-8 bg-sky-500 rounded-xl p-4 flex-col items-center max-w-sm mx-auto">
            <h1 className="text-blue-800 text-xl">Project Nexus</h1>
            <Link href="https://github.com/OctoDev8/project-nexus" className="text-decoration-line: underline text-lg inline-block hover:bg-grey-500">
              {" "}
              Project Nexus Link
            </Link>
            <Card
              id="read-more-text"
              text="Project Nexus is my final project that I did in college. It was built using React, TailwindCSS, and Node.js, and focused on creating a scalable web application with authentication, database integration, and responsive design."
            />
          </section>
          <section className="flex mt-8 bg-sky-500 rounded-xl p-4 flex-col items-center max-w-sm mx-auto">
            <h1 className="text-blue-800 text-xl">Golden Wheat Bakery</h1>
            <Link href="https://golden-wheat-eta.vercel.app/" className="text-decoration-line: underline bold text-lg inline-block hover:grey-500">
              {" "}
              Golden Wheat Bakery Link
            </Link>
            <Card
              id="read-more-text"
              text="Golden Wheat Bakery is a collaborative college project where I focused on backend development. My work included designing and implementing Express.js middleware and routes, integrating MongoDB for database operations, and using Postman extensively for testing and debugging to ensure a reliable application."
            />
          </section>
        </section>
      </main>
    </>
  );
}
