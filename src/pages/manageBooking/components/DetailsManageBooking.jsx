import React from 'react';
import {GoArrowRight} from "react-icons/go";
import ManageBookingActions from "./ManageBookingActions.jsx";
import TripDetailsManageBooking from "./TripDetailsManageBooking.jsx";
import DownloadFilesSectionManageBookings from "./DownloadFilesSectionManageBookings.jsx";

function DetailsManageBooking({setShowBooking}) {
    return (
        <div className={"flex flex-col w-full"}>
            <p className={"text-center"}>PNR No:: 3101432145</p>
            <div className={"flex gap-1 text-3xl font-bold items-center self-center"}>
                <p>Cosenza</p>
                <GoArrowRight/>
                <p>Roma</p>
            </div>
            <DownloadFilesSectionManageBookings/>
            <TripDetailsManageBooking/>
            <ManageBookingActions/>
        </div>
    );
}

export default DetailsManageBooking;