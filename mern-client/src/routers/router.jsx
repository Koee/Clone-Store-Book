

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
                loader:({params})=>fetch(`http://localhost:4001/book/${params.id}`)
            },
        ]
    },
]);

export default Router;

