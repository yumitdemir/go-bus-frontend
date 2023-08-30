import React from 'react';

function ManageBookingWidgetAndHeroImage(props) {
    return (
        <div
            className={"w-full bg-cover bg-center  relative  h-[640px] md:h-[600px] "}>
            <img src="/src/assets/manage-booking/hero-manage-booking.jpg"
                 className={"object-cover h-[240px] md:h-[350px]  w-full "}
                 alt=""/>
            <div
                className={"flex flex-col items-center w-full md:w-[666px]  mx-auto p-[8px] md:p-[28px]  bg-white md:rounded-xl absolute bottom-0   left-1/2 transform -translate-x-1/2 md:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"}>
                <p className={"text-2xl font-bold mb-6"}>Manage My Booking</p>
                <p className={"w-full text-neutral-content text-center"}>View your booking details by entering the
                    fields below.
                    You will find your booking number in your confirmation e-mail or on your ticket.</p>
                <div className={"flex flex-col mt-3"}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-neutral-content-text text-[16px]">Booking Number</span>
                        </label>
                        <input type="text" placeholder=""
                               className="input input-bordered input-primary border-neutral-content w-[300px]"/>
                    </div>
                </div>
                <div className={"flex flex-col mt-4"}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span
                                className="label-text text-neutral-content-text text-[16px]">Email or Phone Number</span>
                        </label>
                        <input type="text" placeholder=""
                               className="input input-bordered input-primary border-neutral-content w-[300px]"/>
                    </div>
                </div>
                <button className={"btn btn-secondary text-white w-[300px] mt-3"}>Retrieve booking</button>
            </div>
        </div>
    );
}

export default ManageBookingWidgetAndHeroImage;