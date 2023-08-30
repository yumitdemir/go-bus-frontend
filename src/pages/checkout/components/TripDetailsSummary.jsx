import React from 'react';
import BookingTimeLimitCounter from "./BookingTimeLimitCounter.jsx";
import DestinationSummary from "./DestinationSummary.jsx";
import PriceDetails from "./PriceDetails.jsx";
import AddVoucher from "./AddVoucher.jsx";
import PrivacyPolicyCheckbox from "./PrivacyPolicyCheckbox.jsx";

function TripDetailsSummary(props) {
    return (

        <div className={"w-[35%] relative  "}>
            <div className={"flex flex-col gap-3 sticky top-3"}>
                <div className={"flex justify-between items-center"}>
                    <p className={"text-xl font-bold"}>Your Booking</p>
                    <BookingTimeLimitCounter/>
                </div>
                <DestinationSummary/>
                <PriceDetails/>
                <AddVoucher/>
                <PrivacyPolicyCheckbox/>
                <button className={"btn btn-secondary text-white"}>Pay now</button>
            </div>
        </div>
    );
}

export default TripDetailsSummary;