import React from 'react';
import Container from "../../components/UI/Container.jsx";
import BookingForm from "./components/BookingForm.jsx";
import TripDetailsSummary from "./components/TripDetailsSummary.jsx";

function Checkout(props) {
    return (
        <Container className={"mt-12 mb-12"}>
            <div className={"flex flex-col md:flex-row gap-8"}>
                <BookingForm/>
                <TripDetailsSummary/>
            </div>
        </Container>
    );
}

export default Checkout;