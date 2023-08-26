import React, {useContext, useState} from 'react';
import {RouteAndDateContext} from "../../pages/home/RouteAndDateContext.jsx";
import TripType from "./TripType.jsx";
import Route from "./Route.jsx";
import DatePassangerAndSubmit from "./DatePassangerAndSubmit.jsx";
import {createSearchParams, useNavigate} from "react-router-dom";


function RouteAndDateSelector({className}) {
    const {RouteAndDateForm} = useContext(RouteAndDateContext);
    const {handleSubmit} = RouteAndDateForm;
    const navigate = useNavigate()
    const onSubmit = (data) => {
        console.log(data)
        navigate({
            pathname: "search",
            search: createSearchParams({
                tripType: data.tripType,
                departureCity: data.from,
                arrivalCity:data.to,
                rideDate: data.dateStart + "," + data.dateReturn,
                passengers: data.passengers
            }).toString()
        });
    };

    return (


        <form onSubmit={handleSubmit(onSubmit)}>
            <TripType/>
            <div className={"flex flex-col lg:flex-row gap-3 w-[100%]"}>
                <Route className={"flex relative w-full lg:w-[50%]"}/>
                <DatePassangerAndSubmit className={"flex gap-2 w-full lg:w-[50%]"}/>
            </div>
        </form>

    );
}

export default RouteAndDateSelector;