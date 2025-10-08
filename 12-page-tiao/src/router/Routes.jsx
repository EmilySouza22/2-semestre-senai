import { createBrowserRouter } from "react-router-dom";
import router from "../../../11-router/src/router/routes";
import Construcao from "../pages/Construcao";
import Bar from "../pages/Bar";
import Sorveteria from "../pages/Sorveteria";

const router = createBrowserRouter([
    { path: '/', element: <Home/> },
    { path: '/construção', element: <Construcao/> },
    { path: '/bar', element: <Bar/> },
    { path: '/sorveteria', element: <Sorveteria/> }

])