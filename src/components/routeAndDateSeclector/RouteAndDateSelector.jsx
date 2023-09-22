import React, {useContext, useState} from 'react';
import {RouteAndDateContext} from "../../pages/guest/home/RouteAndDateContext.jsx";
import TripType from "./TripType.jsx";
import Route from "./Route.jsx";
import DatePassangerAndSubmit from "./DatePassangerAndSubmit.jsx";
import {createSearchParams, useNavigate} from "react-router-dom";
import {useFormContext} from "react-hook-form";


function RouteAndDateSelector({className}) {
    const {handleSubmit} = useFormContext();

    const navigate = useNavigate()
    const onSubmit = (data) => {
        console.log(data)
        navigate({
            pathname: "search",
            search: createSearchParams({
                tripType: data.tripType,
                departureStopId: data.from.value.id,
                arrivalStopId: data.to.value.id,
                departureDate: data.dateStart.toISOString().split('T')[0],
                returnDate: data.dateReturn.toISOString().split('T')[0],
                passengerCount: data.passengers
            }).toString()
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TripType/>
            <div className={"flex flex-col lg:flex-row gap-3 w-[100%]"}>
                <Route className={"flex relative w-full gap-12 lg:w-[50%] "}/>
                <DatePassangerAndSubmit className={"flex gap-2 w-full lg:w-[50%] flex-col sm:flex-row"}/>
            </div>
        </form>

    );
}

export default RouteAndDateSelector;