import {createBrowserRouter} from "react-router-dom";
import Home from "./pages/guest/home/Home.jsx";
import GuestLayout from "./components/layouts/GuestLayout.jsx";
import RouteSearch from "./pages/guest/routeSearch/RouteSearch.jsx";
import Checkout from "./pages/guest/checkout/Checkout.jsx";
import ManageBooking from "./pages/guest/manageBooking/ManageBooking.jsx";
import AdminLayout from "./components/layouts/AdminLayout.jsx";
import Dashbord from "./pages/admin/dashboard/Dashbord.jsx";
import Vehicles from "./pages/admin/vehicles/Vehicles.jsx";
import AddAndUpdateVehicle from "./pages/admin/AddAndUpdateVehicle.jsx";

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
            },
            {
                path: "/manage-booking",
                element: <ManageBooking/>
            }

        ]
    },
    {
        path: "/",
        element: <AdminLayout/>,
        children: [
            {
                path: "/admin",
                element: <Dashbord/>,
            },
            {
                path: "admin/vehicles",
                element: <Vehicles/>,
            },
            {
                path: "admin/add-vehicle",
                element: <AddAndUpdateVehicle/>,
            },
            {
                path: "admin/update-vehicle",
                element: <AddAndUpdateVehicle/>,
            },
        ]
    },
]);

export default router;
