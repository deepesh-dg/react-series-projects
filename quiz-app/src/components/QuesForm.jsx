import React, { useEffect, useId, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion, updateQuestion } from "../store/quizSlice";
import { NumberToAlphabet } from "number-to-alphabet";

function QuesForm({ onSubmit, quizId, questionId }) {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        question: "",
        options: ["", "", "", ""],
        answerKey: "",
    });

    const question = useSelector((state) => state.quizes[quizId].questions[questionId]);

    const questionInputId = useId();
    const answerKeyInputId = useId();
    const defaultAlphabet = new NumberToAlphabet();

    const add = (e) => {
        e.preventDefault();
        if (formData.question && formData.options.length > 1 && formData.answerKey > 0) {
            dispatch(
                question
                    ? updateQuestion({ quizId, questionId: questionId, question: formData })
                    : addQuestion({ quizId, question: formData })
            );
            onSubmit && onSubmit();
        }
    };

    useEffect(() => {
        if (question) setFormData(question);
    }, [question]);

    return (
        <form className="p-4 bg-white rounded-lg" onSubmit={add}>
            <h2 className="font-bold text-2xl text-center mb-4">{question ? "Update" : "Add"} Question</h2>

            <div className="mb-4">
                <label htmlFor={questionInputId} className="mb-1 inline-block px-1">
                    Question
                </label>
                <input
                    className="bg-transparent outline-none border border-black/20 rounded-lg px-3 py-2 w-full"
                    id={questionInputId}
                    type="text"
                    placeholder="Enter Question"
                    value={formData.question}
                    onChange={(e) => setFormData((prev) => ({ ...prev, question: e.target.value }))}
                    autoFocus
                    required
                />
            </div>

            <div className="mb-4">
                <label className="inline-block px-1">Options</label>
                <div className="flex flex-wrap -mx-1">
                    {formData.options.map((value, i) => (
                        <div className="w-full sm:w-1/2 px-1 mt-2" key={i}>
                            <input
                                className="bg-transparent outline-none border border-black/20 rounded-lg px-3 py-2 w-full"
                                type="text"
                                placeholder={`Option ${defaultAlphabet.numberToString(i + 1).toUpperCase()}`}
                                value={value}
                                onChange={(e) => {
                                    const options = formData.options;
                                    options[i] = e.target.value;
                                    setFormData((prev) => ({ ...prev, options }));
                                }}
                                required
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="mb-4">
                <label htmlFor={answerKeyInputId} className="mb-1 inline-block px-1">
                    Answer Key
                </label>
                <input
                    className="bg-transparent outline-none border border-black/20 rounded-lg px-3 py-2 w-full"
                    id={answerKeyInputId}
                    type="number"
                    placeholder="Enter Answer Key"
                    value={formData.answerKey}
                    onChange={(e) => {
                        const value = e.target.value;

                        if (value === "" || (Number(value) > 0 && Number(value) <= formData.options.length)) {
                            setFormData((prev) => ({ ...prev, answerKey: value }));
                        }
                    }}
                    required
                />
            </div>

            <button className="bg-green-600 text-white px-4 py-1.5 rounded-lg w-full" type="submit">
                {question ? "Update" : "Add"} Question
            </button>
        </form>
    );
}

export default QuesForm;
