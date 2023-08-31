import React from 'react';
import {Outlet} from "react-router-dom";
import AdminSideBar from "../ui/adminSideBar/AdminSideBar.jsx";

function AdminLayout(props) {
    return (
        <div className={"flex"}>
            <AdminSideBar/>
            <Outlet/>
        </div>
    );
}

export default AdminLayout;