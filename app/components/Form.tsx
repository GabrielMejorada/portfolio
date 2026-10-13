"use client";
import { useFormData } from "herotofu-react";

const Form = () => {
  const endpoint = process.env.NEXT_PUBLIC_API_KEY ?? "";
  const { formState, getFormSubmitHandler } = useFormData(endpoint);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl max-w-md mx-auto text-left">
      <h2 className="text-xl font-bold text-slate-100 mb-6 text-center">Contact Me</h2>
      
      <form onSubmit={getFormSubmitHandler()} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="w-full px-4 py-3 text-sm text-slate-200 placeholder-slate-500 bg-slate-950 border border-slate-800 rounded-xl focus:outline-none focus:border-sky-500 transition-all"
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full px-4 py-3 text-sm text-slate-200 placeholder-slate-500 bg-slate-950 border border-slate-800 rounded-xl focus:outline-none focus:border-sky-500 transition-all"
            required
          />
        </div>
        <div>
          <textarea
            placeholder="Your message"
            name="message"
            className="w-full px-4 py-3 text-sm text-slate-200 placeholder-slate-500 bg-slate-950 border border-slate-800 rounded-xl focus:outline-none focus:border-sky-500 transition-all resize-none"
            rows={4}
            required
          />
        </div>
        
        <input type="checkbox" name="_gotcha" className="hidden" style={{ display: 'none' }} />

        <div>
          <button
            className="w-full py-3 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-xl shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-sky-400"
            type="submit"
          >
            Send a Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;