"use client";
import { useState } from "react";

interface CardProps {
  id: string;
  text: string;
  amountOfWords?: number;
}

export const Card = ({ id, text, amountOfWords = 0 }: CardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const splittedText = text.split(" ");
  const beginText = splittedText.slice(0, amountOfWords).join(" ");
  const endText = splittedText.slice(amountOfWords).join(" ");

  return (
    <p id={id}>
      {isExpanded ? text : beginText}
      {endText && (
        <span
          className="text-blue-700 ml-2 cursor-pointer"
          role="button"
          tabIndex={0}
          aria-expanded={isExpanded}
          aria-controls={id}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          {isExpanded ? "Read less" : "Read more"}
        </span>
      )}
    </p>
  );
};
