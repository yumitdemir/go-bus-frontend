import React from 'react';
import {MdAirlineSeatReclineNormal, MdKeyboardArrowRight} from "react-icons/md";

function AddMoreLuggage(props) {
    return (
        <div className={"flex justify-between px-5 py-4 border border-neutral-content-light rounded-md cursor-pointer"}>
            <div className={"flex gap-5   items-center"}>
                <MdAirlineSeatReclineNormal className={"w-10 h-10 text-neutral-content"}/>
                <div className={"flex flex-col  "}>
                    <p className={"text-lg font-medium"}>Add more baggage</p>
                    <p className={"text-neutral-content"}>from $19.99</p>
                </div>
            </div>
            <div className={"flex items-center justify-center"}>
                <MdKeyboardArrowRight className={"w-10 h-10 text-neutral-content"}/>
            </div>
        </div>
    );
}

export default AddMoreLuggage;