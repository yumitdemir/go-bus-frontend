import React from 'react';
import {MdOutlineKeyboardArrowDown} from "react-icons/md";

function ShowMoreTrips({title}) {

    return (
        <div
            className={"h-[36px] flex justify-center items-center mt-4 mb-2 mx-3 border border-neutral-content rounded-md hover:hover:bg-neutral-content-hover cursor-pointer"}>
            <div className={"flex justify-center items-center gap-1"}>
                <p>{title} </p>
                <MdOutlineKeyboardArrowDown className={"text-3xl text-neutral-content"}/>
            </div>

        </div>
    );
}

export default ShowMoreTrips;