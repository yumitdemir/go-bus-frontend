import React from 'react';
import {Outlet} from "react-router-dom";
import Nav from "./UI/nav/Nav.jsx";
import Footer from "./UI/footer/Footer.jsx";

function GuestLayout(props) {
    return (
        <>
            <div className={"flex flex-col min-h-screen bg-[#f7f7f7] font-roboto"}>
                <Nav/>

                <Outlet/>
                <Footer/>
            </div>
        </>
    );
}

export default GuestLayout;