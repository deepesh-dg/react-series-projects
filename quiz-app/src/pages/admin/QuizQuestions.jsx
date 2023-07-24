import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { QuesCard, QuesForm } from "../../components";
import { useSelector } from "react-redux";

function QuizQuestions() {
    const { quizId } = useParams();
    const [quesFormVisible, setQuesFormVisible] = useState(false);

    const quiz = useSelector((state) => state.quizes[quizId]);

    if (!quiz) return null;

    const questionsIds = Object.keys(quiz.questions);
    const questionCount = questionsIds.length;

    return (
        <div>
            <div className="block">
                <button
                    className="bg-green-600 text-white px-4 py-1.5 rounded-lg"
                    onClick={() => setQuesFormVisible(true)}
                    type="button"
                >
                    Add Question
                </button>
            </div>

            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl text-center my-4">
                {quiz.name} ({questionCount} Questions)
            </h1>

            <div className="mt-4 w-full max-w-2xl mx-auto">
                {questionsIds.map((quesId, index) => (
                    <div key={quesId} className="w-full mb-4">
                        <QuesCard quizId={quizId} questionNo={index + 1} questionId={quesId} editable />
                    </div>
                ))}
            </div>

            {quesFormVisible && (
                <div
                    className="fixed inset-0 bg-black/20 px-4 z-50"
                    onClick={() => setQuesFormVisible(false)}
                >
                    <div
                        className="w-full max-w-sm absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <QuesForm onSubmit={() => setQuesFormVisible(false)} quizId={quizId} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default QuizQuestions;
