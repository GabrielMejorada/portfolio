import Link from "next/link";
import { Card } from "../components/Card";
import Navbar from "../components/Navbar";

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 pt-28 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white mb-3">My Projects</h1>
          <p className="text-slate-400">Here are some of the applications and systems I've built.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          
          <Card
            id="nexus"
            title="Project Nexus"
            link="https://github.com/OctoDev8/project-nexus"
            text="Project Nexus is my final project that I did in college. It was built using React, TailwindCSS, and Node.js, and focused on creating a scalable web application with authentication, database integration, and responsive design."
            amountOfWords={20}
          />

          <Card
            id="bakery"
            title="Golden Wheat Bakery"
            link="https://golden-wheat-eta.vercel.app/"
            text="Golden Wheat Bakery is a collaborative college project where I focused on backend development. My work included designing and implementing Express.js middleware and routes, integrating MongoDB for database operations, and using Postman extensively for testing and debugging to ensure a reliable application."
            amountOfWords={20}
          />

          <Card
            id="bank"
            title="CLI Bank System"
            link="https://github.com/GabrielMejorada/bank-system"
            text="The CLI Bank system project is a project coded in C. It taught me about memory allocation, reallocation, and pointers. This allowed me to further understand how programming worked at high-level and gave a sneak peek of low-level programming."
            amountOfWords={20}
          />

          <Card
            id="caelum"
            title="Caelum"
            link="https://github.com/GabrielMejorada/Caelum"
            text="An ongoing project; a makeshift e-commerce website attempting to emulate luxury through a fictional luxury fashion brand."
            amountOfWords={20}
          />

          <Card
            id="chatbot"
            title="Twitch Chatbot"
            link="https://github.com/GabrielMejorada/twitch-chatbot"
            text="An ongoing project; a custom Twitch chatbot built to handle automated chat interactions, commands, and stream utilities."
            amountOfWords={20}
          />

        </div>
      </main>
    </>
  );
}