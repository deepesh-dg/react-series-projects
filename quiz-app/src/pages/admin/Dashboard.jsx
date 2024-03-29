import React, { useState } from "react";
import { useSelector } from "react-redux";
import { QuizForm, QuizCard } from "../../components";

function Dashboard() {
    const [search, setSearch] = useState("");
    const [quizFormVisible, setQuizFormVisible] = useState(false);

    const quizes = useSelector((state) => state.quizes);

    return (
        <div className="relative">
            <div className="flex justify-center">
                <input
                    type="search"
                    placeholder="Search Quiz"
                    className="border borde-black/20 rounded-lg w-full max-w-xl px-4 py-1 bg-gray-50 outline-none"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="block">
                <button
                    className="bg-green-600 text-white px-4 py-1.5 rounded-lg"
                    onClick={() => setQuizFormVisible(true)}
                    type="button"
                >
                    Add Quiz
                </button>
            </div>

            <div className="mt-4 flex flex-wrap -mx-2 gap-y-4">
                {Object.keys(quizes).map((quizId, index) =>
                    quizes[quizId].name.toLowerCase().includes(search.toLowerCase()) ? (
                        <div
                            key={quizId}
                            className="w-full sm:w-1/2 md:w-1/3 lg:h-w-1/4 xl:w-1/5 2xl:w-1/6 px-2"
                        >
                            <QuizCard href={`quiz/${quizId}`} index={index} quizId={quizId} editable />
                        </div>
                    ) : null
                )}
            </div>

            {quizFormVisible && (
                <div
                    className="fixed inset-0 bg-black/20 px-4 z-50"
                    onClick={() => setQuizFormVisible(false)}
                >
                    <div
                        className="w-full max-w-sm absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <QuizForm onSubmit={() => setQuizFormVisible(false)} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Dashboard;
