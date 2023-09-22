import React from 'react';
import DateNavigator from "./DateNavigator.jsx";
import ServiceFeeWarning from "./ServiceFeeWarning.jsx";
import ContainerSearchDisplay from "./ContainerSearchDisplay.jsx";
import SearchResults from "./SearchResults.jsx";
import ShowMoreTrips from "./ShowMoreTrips.jsx";
import {useQuery} from "@tanstack/react-query";

function RouteSearchDisplay(props) {
    const {data} = useQuery(['getTrips']);

    return (
        <div className={"flex flex-col items-center mt-10"}>
            <ContainerSearchDisplay>
                <DateNavigator/>
                {data && data?.length === 0 ?
                    <div className={"flex justify-center items-center h-24"}>
                        <p className={"text-neutral-content-text text-lg"}>Couldn't find any available trip</p>
                    </div> : <>
                        <p className={"text-end my-4"}>{data.length} results</p>
                        <ServiceFeeWarning/>
                        <ShowMoreTrips title={"Show earlier trips (2) "}/>
                        <SearchResults/>
                        <ShowMoreTrips title={"Show later trips (4) "}/>
                    </>
                }
            </ContainerSearchDisplay>
        </div>
    );
}

export default RouteSearchDisplay;