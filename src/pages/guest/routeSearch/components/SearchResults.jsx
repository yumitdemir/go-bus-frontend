import React from 'react';
import TripCard from "./tripCard/TripCard.jsx";

function SearchResults(props) {
    return (
        <div className={"flex flex-col gap-3"}>
            <TripCard/>
            <TripCard/>
            <TripCard/>
            <TripCard/>
            <TripCard/>
            <TripCard/>
        </div>
    );
}

export default SearchResults;