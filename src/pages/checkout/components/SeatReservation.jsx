import React from 'react';
import BookingFormSection from "./BookingFormSection.jsx";
import {MdAirlineSeatReclineNormal, MdKeyboardArrowRight} from "react-icons/md";
import ActionCard from "../../../components/UI/ActionCard.jsx";

function SeatReservation(props) {
    return (
        <BookingFormSection title={"Seat Reservation"} number={"2"}>
            <ActionCard icon={<MdAirlineSeatReclineNormal className={"w-full h-full"}/>}>
                <p className={"text-lg font-medium"}>Select your seat</p>
                <p className={"text-neutral-content"}>from $5.99</p>
            </ActionCard>
        </BookingFormSection>
    );
}

export default SeatReservation;