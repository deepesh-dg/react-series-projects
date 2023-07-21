import { useState } from "react";

function BgChanger() {
    const [color, setColor] = useState("olive");

    return (
        <div className="w-full h-screen" style={{ backgroundColor: color }}>
            <div className="fixed bottom-12 left-1/2 -translate-x-1/2 flex justify-center gap-3 bg-white px-3 py-2 rounded-full shadow-lg">
                <button
                    className="outline-none px-4 py-1 rounded-full text-white shadow-md"
                    style={{ backgroundColor: "red" }}
                    onClick={() => setColor("red")}
                >
                    Red
                </button>
                <button
                    className="outline-none px-4 py-1 rounded-full text-white shadow-md"
                    style={{ backgroundColor: "green" }}
                    onClick={() => setColor("green")}
                >
                    Green
                </button>
                <button
                    className="outline-none px-4 py-1 rounded-full text-white shadow-md"
                    style={{ backgroundColor: "blue" }}
                    onClick={() => setColor("blue")}
                >
                    Blue
                </button>
                <button
                    className="outline-none px-4 py-1 rounded-full text-white shadow-md"
                    style={{ backgroundColor: "olive" }}
                    onClick={() => setColor("olive")}
                >
                    Olive
                </button>
                <button
                    className="outline-none px-4 py-1 rounded-full text-white shadow-md"
                    style={{ backgroundColor: "gray" }}
                    onClick={() => setColor("gray")}
                >
                    Gray
                </button>
                <button
                    className="outline-none px-4 py-1 rounded-full shadow-md"
                    style={{ backgroundColor: "yellow" }}
                    onClick={() => setColor("yellow")}
                >
                    Yellow
                </button>
                <button
                    className="outline-none px-4 py-1 rounded-full shadow-md"
                    style={{ backgroundColor: "pink" }}
                    onClick={() => setColor("pink")}
                >
                    Pink
                </button>
                <button
                    className="outline-none px-4 py-1 rounded-full text-white shadow-md"
                    style={{ backgroundColor: "purple" }}
                    onClick={() => setColor("purple")}
                >
                    Purple
                </button>
                <button
                    className="outline-none px-4 py-1 rounded-full shadow-md"
                    style={{ backgroundColor: "lavender" }}
                    onClick={() => setColor("lavender")}
                >
                    Lavender
                </button>
                <button
                    className="outline-none px-4 py-1 rounded-full shadow-md"
                    style={{ backgroundColor: "white" }}
                    onClick={() => setColor("white")}
                >
                    White
                </button>
                <button
                    className="outline-none px-4 py-1 rounded-full text-white shadow-md"
                    style={{ backgroundColor: "black" }}
                    onClick={() => setColor("black")}
                >
                    Black
                </button>
            </div>
        </div>
    );
}

export default BgChanger;
