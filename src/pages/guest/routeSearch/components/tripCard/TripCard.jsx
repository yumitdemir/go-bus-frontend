import React, {useEffect} from 'react';
import TopSectionTripCard from "./TopSectionTripCard.jsx";
import BottomSectionTripCard from "./BottomSectionTripCard.jsx";
import {TripCardProvider, useTripCardContext} from "../../../../../context/TripCardContext.jsx";

function TripCard({trip}) {

    return (
        <TripCardProvider value={trip}>
            <div
                className={"py-3 px-[18px] flex flex-col border border-neutral-content-light rounded-lg cursor-pointer"}>
                <TopSectionTripCard/>
                <BottomSectionTripCard/>
            </div>
        </TripCardProvider>
    );
}

export default TripCard;