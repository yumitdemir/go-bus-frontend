import React from 'react';
import {Outlet} from "react-router-dom";
import Nav from "./UI/nav/Nav.jsx";
import Footer from "./UI/footer/Footer.jsx";

function GuestLayout(props) {
    return (
        <>
            <Nav/>

            <Outlet/>
            <Footer/>
        </>
    );
}

export default GuestLayout;