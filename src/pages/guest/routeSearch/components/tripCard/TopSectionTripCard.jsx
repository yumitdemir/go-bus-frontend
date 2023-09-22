import React, {useContext} from 'react';
import TripTimeAndDestinations from "./TripTimeAndDestinations.jsx";
import {useTripCardContext} from "../../../../../context/TripCardContext.jsx";

function TopSectionTripCard(props) {
    let trip = useTripCardContext();
    let priceBeforeDecimal = trip.price;
    let priceAfterDecimal = "";
    if (trip.price.toString().includes(".")) {
        priceBeforeDecimal = trip.price.split(".")[0];
        priceAfterDecimal = "."+trip.price.split(".")[1];
    }



    return (
        <div className={"flex  h-[50px]"}>
            <TripTimeAndDestinations/>
            <p className={"hidden md:block md:w-[9%]  text-[22px] font-bold"}>${priceBeforeDecimal}<sup className={"text-sm"}>{priceAfterDecimal}</sup>
            </p>
        </div>
    );
}

export default TopSectionTripCard;