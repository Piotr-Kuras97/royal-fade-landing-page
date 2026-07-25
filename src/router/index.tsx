import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home";
import Pricing from "../pages/Pricing";

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
        }
    ],

    {
        basename: import.meta.env.BASE_URL,
    }

);

export default router;