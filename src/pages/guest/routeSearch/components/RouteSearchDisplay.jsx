import React from 'react';
import DateNavigator from "./DateNavigator.jsx";
import ServiceFeeWarning from "./ServiceFeeWarning.jsx";
import ContainerSearchDisplay from "./ContainerSearchDisplay.jsx";
import SearchResults from "./SearchResults.jsx";
import ShowMoreTrips from "./ShowMoreTrips.jsx";

function RouteSearchDisplay(props) {
    return (
        <div className={"flex flex-col items-center mt-10"}>
            <ContainerSearchDisplay>
                <DateNavigator/>
                <p className={"text-end my-4"}>6 results</p>
                <ServiceFeeWarning/>
                <ShowMoreTrips title={"Show earlier trips (2) "}/>
                <SearchResults/>
                <ShowMoreTrips title={"Show later trips (4) "}/>
            </ContainerSearchDisplay>
        </div>
    );
}

export default RouteSearchDisplay;