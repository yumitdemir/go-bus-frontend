import React from 'react';
import BusStopSelector from "./BusStopSelector.jsx";
import {BsArrowRight} from "react-icons/bs";
import {useFormContext} from "react-hook-form";

function RouteSegmentSelector({name}) {
    const {formState: {errors}, register} = useFormContext();

    return (
        <div>
            <div className={"flex  gap-3 items-center"}>
                <BsArrowRight className={"text-3xl"}/>
                <BusStopSelector name={name}/>
                <div className={"flex flex-col gap-1 w-24"}>
                    <input {...register(name+"Duration", {required: true})} className={"bg-neutral-content-light rounded-md text-white px-1"}  type="number" placeholder={"Duration min"}/>
                    <input {...register(name+"Distance", {required: true})} className={"bg-neutral-content-light rounded-md text-white px-1"} type="number" placeholder={"Distance km"}/>
                </div>
            </div>



        </div>
    );
}

export default RouteSegmentSelector;