import React from 'react';
import TripTimeAndDestinations from "./TripTimeAndDestinations.jsx";

function TopSectionTripCard(props) {
    return (
        <div className={"flex  h-[50px]"}>
            <TripTimeAndDestinations/>
            <p className={"hidden md:block md:w-[9%]  text-[22px] font-bold"}>$75<sup className={"text-sm"}>.99</sup>
            </p>
        </div>
    );
}

export default TopSectionTripCard;