import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { QuizCard } from "../components";

function Home() {
    const [search, setSearch] = useState("");

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

            <div className="mt-4 flex flex-wrap -mx-2 gap-y-4">
                {Object.keys(quizes).map((quizId, index) =>
                    quizes[quizId].name.toLowerCase().includes(search.toLowerCase()) ? (
                        <div
                            key={quizId}
                            className="w-full sm:w-1/2 md:w-1/3 lg:h-w-1/4 xl:w-1/5 2xl:w-1/6 px-2"
                        >
                            <Link to={`quiz/${quizId}`}>
                                <QuizCard index={index} quizId={quizId} />
                            </Link>
                        </div>
                    ) : null
                )}
            </div>
        </div>
    );
}

export default Home;
