import React, { useCallback, useEffect, useState } from "react";
import { TicTacToeProvider } from "../contexts/tictactoe";
import { Cell, Winner } from "../components/tictactoe";

function TicTacToe() {
    const [data, setData] = useState({
        record: {
            x: {},
            o: {},
        },
        currTurn: "x",
        winner: null,
        completed: false,
    });

    const add = useCallback(
        (pos) => {
            if (data.record.x[pos] || data.record.o[pos]) return;

            setData((prev) => ({
                ...prev,
                record: {
                    x: data.currTurn === "x" ? { ...prev.record.x, [pos]: true } : prev.record.x,
                    o: data.currTurn === "o" ? { ...prev.record.o, [pos]: true } : prev.record.o,
                },
                currTurn: data.currTurn === "x" ? "o" : "x",
            }));
        },
        [data]
    );

    const won = useCallback((who) => {
        setData((prev) => ({ ...prev, completed: true, winner: who }));
    }, []);

    const reset = useCallback(() => {
        setData({
            record: {
                x: {},
                o: {},
            },
            currTurn: "x",
            winner: null,
            completed: false,
        });
    }, []);

    useEffect(() => {
        // Check for match Tie
        if (Object.keys(data.record.x).length + Object.keys(data.record.o).length === 9 && !data.completed) {
            setData((prev) => ({ ...prev, completed: true }));
        }
    }, [data]);

    return (
        <TicTacToeProvider value={{ data, add, reset, won }}>
            <div
                className="w-full min-h-screen text-white flex items-center justify-center"
                style={{ backgroundImage: `url("/black-chalk.jpg")` }}
            >
                <div className="mx-auto w-full max-w-xs flex flex-wrap">
                    <div className="w-1/3 flex">
                        <Cell key={1} index={1} />
                    </div>
                    <div className="w-1/3 flex">
                        <Cell key={2} index={2} />
                    </div>
                    <div className="w-1/3 flex">
                        <Cell key={3} index={3} />
                    </div>

                    <div className="w-1/3 flex">
                        <Cell key={4} index={4} />
                    </div>
                    <div className="w-1/3 flex">
                        <Cell key={5} index={5} />
                    </div>
                    <div className="w-1/3 flex">
                        <Cell key={6} index={6} />
                    </div>

                    <div className="w-1/3 flex">
                        <Cell key={7} index={7} />
                    </div>
                    <div className="w-1/3 flex">
                        <Cell key={8} index={8} />
                    </div>
                    <div className="w-1/3 flex">
                        <Cell key={9} index={9} />
                    </div>

                    <div className="w-full mt-6 text-center">
                        <Winner />
                    </div>
                    <div className="mt-4 w-full flex justify-center">
                        <button
                            className="outline-none bg-slate-500 hover:bg-slate-600 duration-150 rounded-lg px-3 py-1"
                            onClick={reset}
                        >
                            {data.completed ? "Another Game?" : "Reset"}
                        </button>
                    </div>
                </div>
            </div>
        </TicTacToeProvider>
    );
}

export default TicTacToe;
