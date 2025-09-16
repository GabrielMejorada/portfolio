"use client";
import Link from "next/link";
import Form from "../components/Form";

export default function Contact() {
  return (
    <>
      <header className="border-sky-500 bg-sky-500 p-4">
        <h1 className="text-center text-lg text-blue-800 font-bold">
          Portfolio Website
        </h1>
        <nav className="flex justify-center space-x-4 mt-2">
          <Link
            href="/projects"
            className="m-1.5 font-bold inline-flex items-center"
          >
            Projects
          </Link>
          <Link href="/" className="m-1.5 font-bold inline-flex items-center">
            {" "}
            Home{" "}
          </Link>
        </nav>
      </header>
      <main>
        <Form></Form>
      </main>
    </>
  );
}
