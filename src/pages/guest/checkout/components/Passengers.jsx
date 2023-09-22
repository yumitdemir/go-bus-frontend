import React from 'react';
import BookingFormSection from "./BookingFormSection.jsx";
import {useFormContext} from "react-hook-form";

function Passengers({name, required,otherOptions}) {
    var {register,formState: { errors }} = useFormContext()
    return (
        <BookingFormSection title={"Passengers"} number={"1"}>
            <div className={"flex gap-2"}>
                <div className={"flex flex-col gap-1 w-1/2 "}>
                    <label htmlFor="firstName" className={"text-neutral-content"}>First name (required)</label>
                    <input {...register(name+"firstname", {required: required ? required : true, ...otherOptions})}
                           type="text" id={"firstName"}
                           className={"border border-neutral-content px-3 py-1  rounded-md hover:bg-neutral-content-hover outline-primary"}/>
                    {errors[name+"firstname"] && <p className={"text-red-700 text-sm"}>This field is required</p>}
                </div>
                <div className={"flex flex-col gap-1 w-1/2 "}>
                    <label htmlFor="lastName" className={"text-neutral-content"}>Last name (required)</label>
                    <input {...register(name+"lastname", {required: required ? required : true, ...otherOptions})}
                           type="text" id={"lastName"}
                           className={"border border-neutral-content px-3 py-1  rounded-md  hover:bg-neutral-content-hover outline-primary"}/>
                    {errors[name+"lastname"] && <p className={"text-red-700 text-sm"}>This field is required</p>}

                </div>
            </div>
        </BookingFormSection>

    );
}

export default Passengers;