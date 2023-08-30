import {createBrowserRouter} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import GuestLayout from "./components/GuestLayout.jsx";
import RouteSearch from "./pages/routeSearch/RouteSearch.jsx";
import Checkout from "./pages/checkout/Checkout.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <GuestLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/search",
                element: <RouteSearch/>
            },
            {
                path: "/checkout",
                element: <Checkout/>
            }

        ]
    },
]);

export default router;
