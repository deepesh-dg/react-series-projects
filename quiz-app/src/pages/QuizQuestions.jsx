import React from "react";
import { useParams } from "react-router-dom";
import { QuesCard } from "../components";
import { useSelector } from "react-redux";

function QuizQuestions() {
    const { quizId } = useParams();

    const quiz = useSelector((state) => state.quizes[quizId]);

    if (!quiz) return null;

    const questionsIds = Object.keys(quiz.questions);
    const questionCount = questionsIds.length;

    return (
        <div>
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl text-center my-4">
                {quiz.name} ({questionCount} Questions)
            </h1>

            <div className="mt-4 w-full max-w-2xl mx-auto">
                {questionsIds.map((quesId, index) => (
                    <div key={quesId} className="w-full mb-4">
                        <QuesCard quizId={quizId} questionNo={index + 1} questionId={quesId} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default QuizQuestions;
