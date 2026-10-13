"use client";
import { useState } from "react";

interface CardProps {
  id: string;
  title?: string;
  text: string;
  amountOfWords?: number;
  link?: string; 
}

export const Card = ({ id, title, text, amountOfWords = 25, link }: CardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const splittedText = text.split(" ");
  const beginText = splittedText.slice(0, amountOfWords).join(" ");
  const endText = splittedText.slice(amountOfWords).join(" ");

  return (
    <div 
      id={id}
      className="bg-slate-900 border border-slate-800 hover:border-sky-500/50 rounded-2xl p-6 shadow-xl transition-all duration-200 flex flex-col text-left max-w-lg w-full"
    >
      {title && (
        <h3 className="text-lg font-bold text-slate-100 mb-2">
          {title}
        </h3>
      )}

      <p className="text-slate-300 text-sm leading-relaxed">
        {isExpanded ? text : `${beginText}${endText ? "..." : ""}`}
        {endText && (
          <button
            type="button"
            className="text-sky-400 hover:text-sky-300 ml-2 font-medium cursor-pointer inline-block focus:outline-none underline underline-offset-4"
            aria-expanded={isExpanded}
            aria-controls={id}
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>
        )}
      </p>

      {link && (
        <div className="mt-4 pt-4 border-t border-slate-800">
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:text-sky-300 text-sm font-semibold inline-flex items-center gap-1 transition-colors"
          >
            View Project &rarr;
          </a>
        </div>
      )}
    </div>
  );
};