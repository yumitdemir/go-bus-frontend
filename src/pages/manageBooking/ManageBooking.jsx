import React from 'react';
import ManageBookingWidgetAndHeroImage from "./components/ManageBookingWidgetAndHeroImage.jsx";
import QuestionsManageBooking from "./components/QuestionsManageBooking.jsx";


function ManageBooking(props) {
    return (
        <div className={"mb-12 flex flex-col"}>
            <ManageBookingWidgetAndHeroImage/>
            <QuestionsManageBooking/>

        </div>
    );
}

export default ManageBooking;