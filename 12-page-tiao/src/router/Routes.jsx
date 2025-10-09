import { createBrowserRouter } from "react-router-dom";
import Construcao from "../pages/Construcao";
import Bar from "../pages/Bar";
import Sorveteria from "../pages/Sorveteria";
import Home from "../pages/Home";

const router = createBrowserRouter([
    { path: '/', element: <Home/> },
    { path: '/construcao', element: <Construcao/> },
    { path: '/bar', element: <Bar/> },
    { path: '/sorveteria', element: <Sorveteria/> }
])

export default router;