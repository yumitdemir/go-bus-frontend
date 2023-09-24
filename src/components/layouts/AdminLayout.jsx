import React, {useContext} from 'react';
import {Navigate, Outlet} from "react-router-dom";
import AdminSideBar from "../ui/adminSideBar/AdminSideBar.jsx";
import AuthContext from "../../context/AuthContext.jsx";

function AdminLayout(props) {
    const jwt = JSON.parse(localStorage.getItem('jwt'));
    if (!jwt) {
        return <Navigate to={"/admin/login"}/>
    }
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