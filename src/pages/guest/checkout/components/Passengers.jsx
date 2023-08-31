import React from 'react';
import BookingFormSection from "./BookingFormSection.jsx";

function Passengers(props) {
    return (
        <BookingFormSection title={"Passengers"} number={"1"}>
            <div className={"flex gap-2"}>
                <div className={"flex flex-col gap-1 w-1/2 "}>
                    <label htmlFor="firstName" className={"text-neutral-content"}>First name (required)</label>
                    <input type="text" id={"firstName"} className={"border border-neutral-content px-3 py-1  rounded-md hover:bg-neutral-content-hover outline-primary"}/>
                </div>
                <div className={"flex flex-col gap-1 w-1/2 "}>
                    <label htmlFor="lastName" className={"text-neutral-content"}>Last name (required)</label>
                    <input type="text" id={"lastName"} className={"border border-neutral-content px-3 py-1  rounded-md  hover:bg-neutral-content-hover outline-primary"}/>
                </div>
            </div>
        </BookingFormSection>

    );
}

export default Passengers;