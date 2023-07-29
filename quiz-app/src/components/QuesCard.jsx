import React, { useEffect, useState } from "react";
import QuesForm from "./QuesForm";
import { useDispatch, useSelector } from "react-redux";
import { deleteQuestion } from "../store/quizSlice";
import numberToAlphabet from "../helpers/numberToAlphabet";

function SerialNo({ text }) {
    return (
        <span className="relative inline-block w-full pt-[100%] rounded-full border border-black/80 text-xl">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{text}</span>
        </span>
    );
}

function QuesCard({ questionNo, quizId, questionId, editable = false }) {
    const [quesFormVisible, setQuesFormVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState(0);

    /*
     *  If isAnsCorrect is "null" that means selectedOption value is "0" and user has not selected any option.
     * If boolean that means selectedOption value > 0 && user has selected option
     */

    const [isAnsCorrect, setIsAnsCorrect] = useState(null);

    const dispatch = useDispatch();

    const question = useSelector((state) => state.quizes[quizId].questions[questionId]);

    useEffect(() => {
        if (selectedOption > 0) {
            setIsAnsCorrect(selectedOption == question.answerKey);
        } else {
            setIsAnsCorrect(null);
        }
    }, [selectedOption, question.answerKey]);

    if (!question) return null;

    return (
        <>
            <div className="p-4 rounded-lg border bg-gray-50">
                <h2 className="text-lg sm:text-2xl flex gap-x-4">
                    <span className="inline-flex shrink-0 w-8 h-8 sm:w-10 sm:h-10">
                        <SerialNo text={questionNo} />
                    </span>
                    <span className="inline-block w-full">{question.question}</span>
                    {editable && quizId && questionId && (
                        <span className="inline-flex gap-x-1">
                            <span className="inline-block shrink-0">
                                <span
                                    className="inline-block cursor-pointer duration-200 bg-blue-200/50 hover:bg-blue-200 rounded-md px-2 py-0.5 text-sm"
                                    onClick={() => setQuesFormVisible(true)}
                                >
                                    Edit
                                </span>
                            </span>
                            <span className="inline-block shrink-0">
                                <span
                                    className="inline-block cursor-pointer duration-200 bg-red-200/50 hover:bg-red-200 rounded-md px-2 py-0.5 text-sm"
                                    onClick={() => {
                                        dispatch(deleteQuestion({ quizId, questionId }));
                                    }}
                                >
                                    Delete
                                </span>
                            </span>
                        </span>
                    )}
                </h2>

                <div className="mt-4">
                    {question.options.map((option, i) => {
                        const optionKey = i + 1;
                        const isInteractable = selectedOption === 0 && isAnsCorrect === null;
                        let bg = "";

                        if (typeof isAnsCorrect === "boolean") {
                            if (
                                (isAnsCorrect && selectedOption === optionKey) ||
                                (!isAnsCorrect &&
                                    selectedOption !== optionKey &&
                                    optionKey == question.answerKey)
                            ) {
                                bg = "bg-green-100";
                            } else if (!isAnsCorrect && selectedOption === optionKey) {
                                bg = "bg-red-100";
                            }
                        }

                        return (
                            <button
                                className={`mb-2 w-full flex text-left items-center gap-x-4 border border-transparent px-3 py-1.5 rounded-lg ${
                                    isInteractable ? "hover:border-gray-300/80" : "cursor-default"
                                } 
                                ${bg}`}
                                key={optionKey}
                                onClick={() => {
                                    if (isInteractable) setSelectedOption(optionKey);
                                }}
                            >
                                <span className="inline-flex shrink-0 w-8">
                                    <SerialNo text={numberToAlphabet(optionKey).toUpperCase()} />
                                </span>
                                <span className="inline-block w-full">{option}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {quesFormVisible && quizId && questionId && (
                <div
                    className="fixed inset-0 bg-black/20 px-4 z-50"
                    onClick={() => setQuesFormVisible(false)}
                >
                    <div
                        className="w-full max-w-sm absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <QuesForm
                            onSubmit={() => setQuesFormVisible(false)}
                            quizId={quizId}
                            questionId={questionId}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export default QuesCard;
