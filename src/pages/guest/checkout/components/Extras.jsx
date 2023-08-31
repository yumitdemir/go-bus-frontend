import React from 'react';
import BookingFormSection from "./BookingFormSection.jsx";
import IncludedLuggage from "./IncludedLuggage.jsx";
import AddMoreLuggage from "./AddMoreLuggage.jsx";

function Extras(props) {
    return (
        <BookingFormSection title={"Extras"} number={"3"}>
            <div className={"flex flex-col gap-3"}>
                <IncludedLuggage/>
                <AddMoreLuggage/>
            </div>
        </BookingFormSection>
    );
}

export default Extras;