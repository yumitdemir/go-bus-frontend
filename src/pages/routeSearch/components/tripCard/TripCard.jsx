import React from 'react';
import TopSectionTripCard from "./TopSectionTripCard.jsx";
import BottomSectionTripCard from "./BottomSectionTripCard.jsx";

function TripCard(props) {
    return (
        <div className={"py-3 px-[18px] flex flex-col border border-neutral-content-light rounded-lg cursor-pointer"}>
            <TopSectionTripCard/>
            <BottomSectionTripCard/>
        </div>
    );
}

export default TripCard;