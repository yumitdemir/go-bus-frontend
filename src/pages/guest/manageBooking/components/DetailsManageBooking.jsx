import React from 'react';
import {GoArrowRight} from "react-icons/go";
import ManageBookingActions from "./ManageBookingActions.jsx";
import TripDetailsManageBooking from "./TripDetailsManageBooking.jsx";
import DownloadFilesSectionManageBookings from "./DownloadFilesSectionManageBookings.jsx";
import {useQuery} from "@tanstack/react-query";

function DetailsManageBooking(props) {
    const {data, isLoading} = useQuery(['getBooking']);
    if (isLoading) {
        return <div className={"flex justify-center items-center h-60"}>
            <span className="loading  loading-spinner h-12 w-12"></span>
        </div>
    }
    console.log(data)
    return (
        <div className={"flex flex-col w-full"}>
            <p className={"text-center"}>PNR No:: {data.pnr}</p>
            <div className={"flex gap-1 text-3xl font-bold items-center self-center"}>
                <p>{data.booking.departureBusStop.name}</p>
                <GoArrowRight/>
                <p>{data.booking.arrivalBusStop.name}</p>
            </div>
            <DownloadFilesSectionManageBookings/>
            <TripDetailsManageBooking/>
            <ManageBookingActions/>
        </div>
    );
}

export default DetailsManageBooking;