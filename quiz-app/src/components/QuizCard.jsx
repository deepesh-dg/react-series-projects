import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import QuizForm from "./QuizForm";
import { Link } from "react-router-dom";
import { deleteQuiz } from "../store/quizSlice";
import numberToAlphabet from "../helpers/numberToAlphabet";

function QuizCard({ quizId, index: key, href, editable = false }) {
    const quiz = useSelector((state) => state.quizes[quizId]);
    const [quizFormVisible, setQuizFormVisible] = useState(false);

    const dispatch = useDispatch();

    const bgColor = useMemo(() => {
        const colors = ["#50DBB4", "#EDBF69", "#CAD5E2", "#23C4ED", "#FF6263"];

        const index = key > -1 ? key % colors.length : Math.floor(Math.random() * colors.length);

        return colors[index];
    }, [key]);

    if (!quiz) return null;

    const questionsIds = Object.keys(quiz.questions);
    const questionCount = questionsIds.length;
    const firstQuestion = questionCount > 0 ? quiz.questions[questionsIds[0]] : null;

    return (
        <>
            <Link to={href}>
                <div
                    className={`relative rounded-xl w-full duration-200 shadow-sm hover:shadow-md pt-[75%]`}
                    style={{ backgroundColor: bgColor }}
                >
                    <div className="absolute inset-3 flex flex-wrap content-between">
                        <div className="mb-1 overflow-hidden w-full h-full">
                            {firstQuestion ? (
                                <>
                                    <p className="mb-1.5">Q: {firstQuestion.question}</p>
                                    {firstQuestion.options.map((option, i) => (
                                        <p key={i} className="mb-0.5">
                                            {numberToAlphabet(i + 1)}: {option}
                                        </p>
                                    ))}
                                </>
                            ) : (
                                <>&nbsp;</>
                            )}
                        </div>
                        <div
                            className="absolute inset-x-0 bottom-0 pt-3"
                            style={{ backgroundColor: bgColor }}
                        >
                            <p className="px-3 py-2 bg-white rounded-lg text-center font-bold w-full shadow">
                                {quiz.name} Quizes ({questionCount})
                            </p>
                        </div>
                    </div>
                </div>
            </Link>

            {editable && (
                <div className="flex gap-x-2 mt-2">
                    <button
                        className="px-3 py-1.5 rounded-lg outline-none bg-blue-600 text-white w-full"
                        onClick={() => setQuizFormVisible(true)}
                    >
                        Edit Quiz
                    </button>
                    <button
                        className="px-3 py-1.5 rounded-lg outline-none bg-red-600 text-white w-full"
                        onClick={() => dispatch(deleteQuiz({ quizId }))}
                    >
                        Delete Quiz
                    </button>
                </div>
            )}

            {quizFormVisible && (
                <div
                    className="fixed inset-0 bg-black/20 px-4 z-50"
                    onClick={() => setQuizFormVisible(false)}
                >
                    <div
                        className="w-full max-w-sm absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <QuizForm onSubmit={() => setQuizFormVisible(false)} quizId={quizId} />
                    </div>
                </div>
            )}
        </>
    );
}

export default QuizCard;
