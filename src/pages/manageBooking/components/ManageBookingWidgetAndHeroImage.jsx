import React, {useState} from 'react';
import WidgetManageBooking from "./WidgetManageBooking.jsx";
import DetailsManageBooking from "./DetailsManageBooking.jsx";

function ManageBookingWidgetAndHeroImage(props) {
    const [showBooking, setShowBooking] = useState(false);
    return (
        <div
            className={`w-full bg-cover bg-center  relative ${showBooking ?"h-[840px] md:h-[1250px]":"h-[640px] md:h-[630px]" }   `}>
            <img src="/src/assets/manage-booking/hero-manage-booking.jpg"
                 className={"object-cover h-[240px] md:h-[350px]  w-full "}
                 alt=""/>
            <div
                className={"flex flex-col items-center w-full md:w-[666px]  mx-auto p-[8px] md:p-[28px]  bg-white md:rounded-xl absolute bottom-0   left-1/2 transform -translate-x-1/2 md:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"}>
                {showBooking?<DetailsManageBooking />:<WidgetManageBooking setShowBooking={setShowBooking}/> }
            </div>
        </div>
    );
}

export default ManageBookingWidgetAndHeroImage;