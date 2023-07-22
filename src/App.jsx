import { Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <ul className="py-4 px-6">
                <li className="underline mb-2">
                    <Link to={"/background-changer"}>Background Changer</Link>
                </li>
                <li className="underline mb-2">
                    <Link to={"/password-generator"}>Password Generator</Link>
                </li>
                <li className="underline mb-2">
                    <Link to={"/todo"}>Todo</Link>
                </li>
                <li className="underline mb-2">
                    <Link to={"/tic-tac-toe"}>Tic Tac Toe</Link>
                </li>
            </ul>
        </div>
    );
}

export default App;
