import { ShieldQuestion } from "lucide-react";
import { useState } from "react";
import todoHero from "./assets/hero.jpg";

type Answer = {
  text: string;
  correct: boolean;
};

type Question = {
  question: string;
  answers: Answer[];
};

const AgeCalculate = () => {
  const questions = [
    {
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Venus", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Saturn", correct: false },
      ],
    },
    {
      question: "What is the capital of France?",
      answers: [
        { text: "London", correct: false },
        { text: "Berlin", correct: false },
        { text: "Paris", correct: true },
        { text: "Madrid", correct: false },
      ],
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      answers: [
        { text: "Gold", correct: false },
        { text: "Silver", correct: false },
        { text: "Oxygen", correct: true },
        { text: "Iron", correct: false },
      ],
    },
    {
      question: "How many continents are there in the world?",
      answers: [
        { text: "5", correct: false },
        { text: "6", correct: false },
        { text: "7", correct: true },
        { text: "8", correct: false },
      ],
    },
    {
      question: "What is the largest ocean on Earth?",
      answers: [
        { text: "Atlantic Ocean", correct: false },
        { text: "Pacific Ocean", correct: true },
        { text: "Indian Ocean", correct: false },
        { text: "Arctic Ocean", correct: false },
      ],
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [resultMessage, setResultMessage] = useState<string | null>(null);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      const isCorrect = currentQuestion.answers[selectedAnswer].correct;
      const newScore = score + (isCorrect ? 1 : 0);
      setScore(newScore);

      if (isLastQuestion) {
        // Quiz completed
        setResultMessage(
          `Quiz completed! Your score: ${newScore}/${questions.length}`
        );
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
        setShowResult(false);
        setScore(0);
        return;
      }

      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setShowResult(true);
    }
  };

  return (
    <section>
      <div className="bg-white w-[100%] rounded-md">
        <div className="space-y-6">
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={todoHero}
              alt="Question App"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90 flex items-center justify-center">
              <div className="text-center text-white">
                <ShieldQuestion className="h-12 w-12 mx-auto mb-4" />
                <h1 className="text-3xl font-bold mb-2">Quiz App</h1>
                <p className="text-white/90">
                  Challenge yourself with fun quizzes and instant results
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* this is body of question app */}

      <div className="flex items-center gap-2 w-full">
        <div className="w-[100%] max-w-[600px] my-2 rounded-md bg-slate-200/10 p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-semibol">Simple quiz</h1>
            <div className="text-sm">
              Question {currentQuestionIndex + 1} of {questions.length}
            </div>
          </div>

          <div className="quiz py-5">
            <h2 className="mb-6 text-xl font-semibold">
              {currentQuestion.question}
            </h2>

            <div className="flex flex-col items-start justify-center gap-3">
              {currentQuestion.answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`w-full rounded-lg border px-5 py-3 text-start transition-colors ${
                    selectedAnswer === index
                      ? showResult
                        ? answer.correct
                          ? "bg-green-500 text-white border-green-500"
                          : "bg-red-500 text-white border-red-500"
                        : "bg-blue-500 text-white border-blue-500"
                      : showResult && answer.correct
                      ? "bg-green-200 text-green-800 border-green-300"
                      : "border-neutral-400 hover:bg-slate-400 hover:text-white"
                  }`}
                >
                  {answer.text}
                </button>
              ))}
            </div>

            {showResult && selectedAnswer !== null && (
              <p className="mt-4 text-sm font-medium">
                {currentQuestion.answers[selectedAnswer].correct
                  ? "✅ Correct!"
                  : "❌ Wrong. The correct answer is highlighted in green."}
              </p>
            )}

            <div className="mt-6 flex gap-3">
              {!showResult ? (
                <button
                  onClick={handleSubmit}
                  disabled={selectedAnswer === null}
                  className="bg-slate-800 text-white py-2 px-6 rounded-lg disabled:bg-slate-400 disabled:cursor-not-allowed"
                >
                  Submit Answer
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="bg-slate-800 text-white py-2 px-6 rounded-lg"
                >
                  {isLastQuestion ? "Finish Quiz" : "Next Question"}
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="h-[62vh] flex items-center justify-center bg-slate-100/10 w-[100%] rounded-lg">
          {resultMessage ? (
            <h1 className="font-normal text-2xl">🎉 {resultMessage}</h1>
          ) : (
            <p>
              Answer questions to see your result here.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AgeCalculate;
