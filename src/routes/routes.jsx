import Horizontal from "../pages/Horizontal/Horizontal";
import Mixed from "../pages/Mixed/Mixed";
import Vertical from "../pages/Vertical/Vertical";

const routes = [
    {
        path: '/horizontal',
        element: <Horizontal />,
    },
    {
        path: '/mixed',
        element: <Mixed />,
    },
    {
        path: '/vertical',
        element: <Vertical />,
    }
];

export default routes;