import { createSlice } from "@reduxjs/toolkit";

/*
    My Quiz Type

    type initialState = {
        [quizId]: {
            name: string,
            questions: {
                [questionId]: {
                    question: string,
                    options: string[],
                    answerKey: string (in the form of number),
                },
            },
        },
    }; 
*/

const initialState = JSON.parse(localStorage.getItem("quizes")) || {};

const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        addQuiz(state, action) {
            state[Date.now()] = {
                name: action.payload.name,
                questions: {},
            };
        },
        updateQuiz(state, action) {
            state[action.payload.quizId].name = action.payload.name;
        },
        deleteQuiz(state, action) {
            delete state[action.payload];
        },
        addQuestion(state, action) {
            if (state[action.payload.quizId]) {
                state[action.payload.quizId].questions[Date.now()] = action.payload.question;
            }
        },
        updateQuestion(state, action) {
            if (
                state[action.payload.quizId] &&
                state[action.payload.quizId].questions[action.payload.questionId]
            ) {
                state[action.payload.quizId].questions[action.payload.questionId] = action.payload.question;
            }
        },
        deleteQuestion(state, action) {
            if (
                state[action.payload.quizId] &&
                state[action.payload.quizId].questions[action.payload.questionId]
            ) {
                delete state[action.payload.quizId].questions[action.payload.questionId];
            }
        },
    },
});

export const { addQuiz, updateQuiz, deleteQuiz, addQuestion, updateQuestion, deleteQuestion } =
    quizSlice.actions;

export default quizSlice.reducer;
