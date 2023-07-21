import BgChanger from "./BgChanger";
import PwdGen from "./PwdGen";
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
];

export default router;
