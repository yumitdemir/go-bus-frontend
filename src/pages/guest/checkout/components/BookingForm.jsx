import React from 'react';
import {Link} from "react-router-dom";
import {MdKeyboardArrowLeft} from "react-icons/md";
import Passengers from "./Passengers.jsx";
import SeatReservation from "./SeatReservation.jsx";
import Extras from "./Extras.jsx";
import Contact from "./Contact.jsx";
import Payment from "./Payment.jsx";

function BookingForm(props) {
    return (
        <div className={"w-full md:w-[65%] flex flex-col gap-2"}>
            <Link to={"/"} className={"btn normal-case bg-white hover:bg-neutral-content-hover text-[16px] border-none font-normal me-auto"}><MdKeyboardArrowLeft className={"text-2xl"}/> Back</Link>
            <Passengers name={"Passenger1"}/>
            <SeatReservation/>
            <Extras/>
            <Contact/>
            <Payment/>
        </div>
    );
}

export default BookingForm;