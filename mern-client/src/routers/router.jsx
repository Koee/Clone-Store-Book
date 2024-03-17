

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App";
import HOME from "../home/Index";
import SHOP from "../shop/Index";
import About from "../components/About";
import SingleBook from "../components/SingleBook";
import Blog from "../components/Blog";
import SingleBooks from "../shop/SingleBooks";
import DaskBoardLayout from "../dashboard/DaskBoardLayout";
import DaskBoard from "../dashboard/DaskBoard";
import DaskBoardManager from "../dashboard/DaskBoardManager";
import EditBook from "../dashboard/EditBook";
import DashBoardCreateBook from "../dashboard/DashBoardCreateBook";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <HOME />
            },
            {
                path: "/shop",
                element: <SHOP />
            }, {
                path: "/about",
                element: <About />
            }, {
                path: "/single-book",
                element: <SingleBook />
            }, {
                path: "/blog",
                element: <Blog />
            }, {
                path: "/book/:id",
                element: <SingleBooks />,
                loader: ({ params }) => fetch(`http://localhost:4001/book/${params.id}`)
            },
        ]
    },
    {
        path: "/admin/dashboard",
        element: <DaskBoardLayout />,
        children: [
            {
                path: "/admin/dashboard",
                element: <DaskBoard />
            },
            {
                path: "/admin/dashboard/update",
                element: <DashBoardCreateBook />
            },
            {
                path: "/admin/dashboard/manager",
                element: <DaskBoardManager />
            },
            {
                path: "/admin/dashboard/edit-books/:id",
                element: <EditBook />,
                loader: ({ params }) => fetch(`http://localhost:4001/book/${params.id}`)
            },
        ]
    }
]);

export default Router;

