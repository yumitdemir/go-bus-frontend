import {createBrowserRouter} from "react-router-dom";
import Home from "./pages/guest/home/Home.jsx";
import GuestLayout from "./components/layouts/GuestLayout.jsx";
import RouteSearch from "./pages/guest/routeSearch/RouteSearch.jsx";
import Checkout from "./pages/guest/checkout/Checkout.jsx";
import ManageBooking from "./pages/guest/manageBooking/ManageBooking.jsx";
import AdminLayout from "./components/layouts/AdminLayout.jsx";
import Dashbord from "./pages/admin/dashboard/Dashboard.jsx";
import Vehicles from "./pages/admin/vehicles/Vehicles.jsx";
import AddAndUpdateVehicle from "./pages/admin/vehicles/AddAndUpdateVehicle.jsx";
import Drivers from "./pages/admin/drivers/Drivers.jsx";
import AddAndUpdateDriver from "./pages/admin/drivers/AddAndUpdateDriver.jsx";
import BusStops from "./pages/admin/busStops/BusStops.jsx";
import AddAndUpdateBusStop from "./pages/admin/busStops/AddAndUpdateBusStop.jsx";
import Routes from "./pages/admin/routes/Routes.jsx";
import AddRoute from "./pages/admin/routes/AddRoute.jsx";
import Trips from "./pages/admin/trips/Trips.jsx";
import AddTrip from "./pages/admin/trips/AddTrip.jsx";
import BookingDetails from "./pages/guest/BookingDetails.jsx";
import AdminLogin from "./pages/admin/AdminLogin.jsx";
import NotFound from "./pages/NotFound.jsx";


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
            },
            {
                path: "/booking-details",
                element: <BookingDetails/>,
            },

        ]
    },
    {
        path: "/admin/login",
        element: <AdminLogin/>,
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
            {
                path: "admin/add-driver",
                element: <AddAndUpdateDriver/>,
            },
            {
                path: "admin/update-driver",
                element: <AddAndUpdateDriver/>,
            },
            {
                path: "admin/drivers",
                element: <Drivers/>,
            },
            {
                path: "admin/bus-stops",
                element: <BusStops/>,
            },
            {
                path: "admin/add-busStop",
                element: <AddAndUpdateBusStop/>,
            },
            {
                path: "admin/update-busStop",
                element: <AddAndUpdateBusStop/>,
            },
            {
                path: "admin/routes",
                element: <Routes/>,
            },
            {
                path: "admin/add-route",
                element: <AddRoute/>,
            },
            {
                path: "admin/trips",
                element: <Trips/>,
            },
            {
                path: "/admin/add-trip",
                element: <AddTrip/>,
            },

        ]
    },
    {
        path: "*",
        element: <NotFound/>,
    },
]);

export default router;
