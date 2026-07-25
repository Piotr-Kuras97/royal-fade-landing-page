import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home";
import Pricing from "../pages/Pricing";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
            children: [
            {
                index: true,
                element: <Home />,
            },
            ],
        },
        {
            path: "/pricing",
            element: <MainLayout />,
            children: [
            {
                index: true,
                element: <Pricing />
            }
            ]   
        },
        {
            path: "*",
            element: <NotFound />,
        }
    ],

    {
        basename: import.meta.env.BASE_URL,
    }

);

export default router;