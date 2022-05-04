import { useState } from "react";

import { CloseButton } from "./CloseButton";

import bugImg from "../assets/bug.svg";
import ideaImg from "../assets/idea.svg";
import thoughtImg from "../assets/thought.svg";

const feedbacksTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImg,
      alt: "Imagem de inseto",
    },
  },
  IDEA: {
    title: "Idea",
    image: {
      source: ideaImg,
      alt: "Imagem de idea",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImg,
      alt: "Imagem de outro",
    },
  },
};

type FeedbackType = keyof typeof feedbacksTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbacksTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              onClick={() => setFeedbackType(key as FeedbackType)}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              type="button"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
