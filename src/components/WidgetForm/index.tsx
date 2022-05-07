import { useState } from "react";

import { CloseButton } from "../CloseButton";

import bugImg from "../../assets/bug.svg";
import ideaImg from "../../assets/idea.svg";
import thoughtImg from "../../assets/thought.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./Steps/FeedbackSucessStep";

export const feedbackTypes = {
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

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSucessStep onFeedbackRestartRequested={handleRestartFeedback}/>
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep feedbackType={feedbackType} onFeedbackRestartRequested={handleRestartFeedback} onFeedbackSent={() => setFeedbackSent(true)} />
          )}
        </>
      )}
    </div>
  );
}
