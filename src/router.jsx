import {createBrowserRouter} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Nav from "./components/UI/nav/Nav.jsx";
import GuestLayout from "./components/GuestLayout.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <GuestLayout />,
        children:[
            {
                path: "/",
                element: <Home />,
            }
        ]
    },
]);

export default router;
