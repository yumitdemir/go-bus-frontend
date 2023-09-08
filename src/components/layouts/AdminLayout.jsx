import React from 'react';
import {Outlet} from "react-router-dom";
import AdminSideBar from "../ui/adminSideBar/AdminSideBar.jsx";

function AdminLayout(props) {
    return (
        <div className={"flex"}>
            <AdminSideBar/>
            <div className={"px-6 py-4 w-full overflow-x-auto h-screen overflow-y-auto"}>
                <Outlet/>
            </div>

        </div>
    );
}

export default AdminLayout;