import BgChanger from "./BgChanger";
import PwdGen from "./PwdGen";

const router = [
    {
        path: "/background-changer",
        element: <BgChanger />,
    },
    {
        path: "/password-generator",
        element: <PwdGen />,
    },
];

export default router;
