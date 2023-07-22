import BgChanger from "./BgChanger";
import PwdGen from "./PwdGen";
import TicTacToe from "./TicTacToe";
import Todo from "./Todo";

const router = [
    {
        path: "/background-changer",
        element: <BgChanger />,
    },
    {
        path: "/password-generator",
        element: <PwdGen />,
    },
    {
        path: "/todo",
        element: <Todo />,
    },
    {
        path: "/tic-tac-toe",
        element: <TicTacToe />,
    },
];

export default router;
