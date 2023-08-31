import React from 'react';

function WidgetManageBooking({setShowBooking}) {
    const searchHanlder = () => {
        setShowBooking(true)
    };
    return (
        <>
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
            <button className={"btn btn-secondary text-white w-[300px] mt-3"} onClick={searchHanlder}>Retrieve booking</button>
        </>
    );
}

export default WidgetManageBooking;