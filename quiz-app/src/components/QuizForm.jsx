import React, { useId, useState } from "react";
import { useDispatch } from "react-redux";
import { addQuiz } from "../store/quizSlice";

function QuizForm({ onSubmit }) {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const id = useId();

    const add = (e) => {
        e.preventDefault();
        if (name) {
            dispatch(addQuiz({ name }));
            onSubmit && onSubmit();
        }
    };

    return (
        <form className="p-4 bg-white rounded-lg" onSubmit={add}>
            <h2 className="font-bold text-2xl text-center mb-4">Add Quiz</h2>
            <label htmlFor={id} className="mb-1 inline-block px-1">
                Quiz Name
            </label>
            <input
                className="bg-transparent outline-none border border-black/20 rounded-lg px-3 py-2 w-full"
                id={id}
                type="text"
                placeholder="Enter Quiz Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
                required
            />
            <button className="bg-green-600 text-white px-4 py-1.5 rounded-lg w-full mt-4" type="submit">
                Add Quiz
            </button>
        </form>
    );
}

export default QuizForm;
