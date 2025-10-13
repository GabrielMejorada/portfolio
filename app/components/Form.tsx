"use client";
import { useFormData } from "herotofu-react";

const Form = () => {
  const endpoint = process.env.NEXT_PUBLIC_API_KEY ?? "";
  const { formState, getFormSubmitHandler } = useFormData(endpoint);

  return (
    <>
    <div className="p-4 rounded-md bg-sky-500">
      <h1 className="font-bold text-3xl mb-1.5 mt-8">Contact Me Form</h1>
      <form action={endpoint} method="post" acceptCharset="UTF-8">
        <div className="pt-0 mb-3">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="w-full px-4 py-4 text-lg text-gray-600 placeholder-gray-400 bg-white border-0 rounded-2xl shadow focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            required
          />
        </div>
        <div className="pt-0 mb-3">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full px-4 py-4 text-lg text-gray-600 placeholder-gray-400 bg-white border-0 rounded-2xl shadow focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            required
          />
        </div>
        <div className="pt-0 mb-3">
          <textarea
            placeholder="Your message"
            name="message"
            className="w-full px-4 py-4 text-lg text-gray-600 placeholder-gray-400 bg-white border-0 rounded-2xl shadow focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all resize-none"
            rows={5}
            required
          />
        </div>
        <div className="pt-0 mb-3">
          <button
            className="w-full py-4 text-lg font-bold text-white uppercase bg-blue-500 rounded-2xl shadow hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            type="submit"
            name="_gotcha"
          >
            Send a message
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default Form;