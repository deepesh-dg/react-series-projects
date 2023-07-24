import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { NumberToAlphabet } from "number-to-alphabet";

function QuizCard({ quizId, index: key }) {
    const quiz = useSelector((state) => state.quizes[quizId]);

    const bgColor = useMemo(() => {
        const colors = ["#50DBB4", "#EDBF69", "#CAD5E2", "#23C4ED", "#FF6263"];

        const index = key > -1 ? key % colors.length : Math.floor(Math.random() * colors.length);

        return colors[index];
    }, [key]);
    const defaultAlphabet = new NumberToAlphabet();

    if (!quiz) return null;

    const questionsIds = Object.keys(quiz.questions);
    const questionCount = questionsIds.length;
    const firstQuestion = questionCount > 0 ? quiz.questions[questionsIds[0]] : null;

    return (
        <div
            className="relative rounded-xl pt-[75%] w-full duration-200 shadow-sm hover:shadow-md"
            style={{ backgroundColor: bgColor }}
        >
            <div className="absolute inset-3 flex flex-wrap content-between">
                <div className="mb-1 overflow-hidden w-full h-[75%]">
                    {firstQuestion ? (
                        <>
                            <p className="mb-1.5">Q: {firstQuestion.question}</p>
                            {firstQuestion.options.map((option, i) => (
                                <p key={i} className="mb-0.5">
                                    {defaultAlphabet.numberToString(i + 1)}: {option}
                                </p>
                            ))}
                        </>
                    ) : (
                        <>&nbsp;</>
                    )}
                </div>
                <p className="px-3 py-2 bg-white rounded-lg text-center font-bold w-full shadow">
                    {quiz.name} Quizes ({questionCount})
                </p>
            </div>
        </div>
    );
}

export default QuizCard;
