import React from 'react';
import TripCard from "./tripCard/TripCard.jsx";
import {useQuery} from "@tanstack/react-query";
import {nanoid} from "nanoid";

function SearchResults(props) {
    const { data } = useQuery(['getTrips']);
    return (
        <div className={"flex flex-col gap-3"}>
            {data.map(trip => <TripCard trip={trip} key={nanoid()}/>)}
        </div>
    );
}

export default SearchResults;