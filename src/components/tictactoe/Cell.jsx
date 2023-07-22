import React from "react";
import { useTicTacToe } from "../../contexts/tictactoe";

function Cell({ index }) {
    const {
        add,
        data: { record, completed },
    } = useTicTacToe();

    const clicked = () => {
        !completed && add(index);
    };

    return (
        <div
            className="w-full relative pt-[100%] border-2 inline-block cursor-pointer text-4xl"
            onClick={clicked}
        >
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {record.x[index] && "X"}
                {record.o[index] && "O"}
            </span>
        </div>
    );
}

export default Cell;
