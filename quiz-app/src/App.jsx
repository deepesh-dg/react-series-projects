import { Outlet } from "react-router-dom";

function App() {
    return (
        <div className="relative p-4">
            <Outlet />
        </div>
    );
}

export default App;
