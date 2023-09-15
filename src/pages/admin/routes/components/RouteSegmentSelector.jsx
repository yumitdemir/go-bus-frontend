import React from 'react';
import BusStopSelector from "./BusStopSelector.jsx";
import {BsArrowRight} from "react-icons/bs";

function RouteSegmentSelector({name}) {
    return (
        <div>
            <div className={"flex justify-between gap-3 items-center"}>
                <BsArrowRight/>
                <BusStopSelector name={name}/>
                <div className={"flex flex-col gap-1 w-24"}>
                    <input type="timesp" placeholder={"Duration min"}/>
                    <input type="" placeholder={"Distance km"}/>
                </div>
            </div>
        </div>
    );
}

export default RouteSegmentSelector;