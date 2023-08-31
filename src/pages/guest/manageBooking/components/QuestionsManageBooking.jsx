import React from 'react';
import {MdKeyboardArrowRight} from "react-icons/md";

function QuestionsManageBooking(props) {
    return (
        <div className={"flex justify-center mt-16 px-4"}>
            <div
                className={"border border-neutral-content-light rounded-md flex flex-col items-center w-full md:w-[666px]  bg-white text-sm"}>
                <div className={"w-full  border-b border-neutral-content-light flex justify-between items-center p-[12px] hover:bg-neutral-content-hover cursor-pointer"}>
                    <p>What can I do with Manage My Booking?</p>
                    <MdKeyboardArrowRight className={"text-2xl text-neutral-content"}/>
                </div>

                <div className={"w-full  border-b border-neutral-content-light flex justify-between items-center p-[12px] hover:bg-neutral-content-hover cursor-pointer"}>
                    <p>How do I find my booking number?</p>
                    <MdKeyboardArrowRight className={"text-2xl text-neutral-content"}/>
                </div>
                <div className={"w-full  border-b border-neutral-content-light flex justify-between items-center p-[12px] hover:bg-neutral-content-hover cursor-pointer"}>
                    <p>Resend my booking confirmation</p>
                    <MdKeyboardArrowRight className={"text-2xl text-neutral-content"}/>
                </div>
                <div className={"w-full   flex justify-between items-center p-[12px] hover:bg-neutral-content-hover cursor-pointer"}>
                    <p> Help and FAQ</p>
                    <MdKeyboardArrowRight className={"text-2xl text-neutral-content"}/>
                </div>
            </div>




        </div>

    );
}

export default QuestionsManageBooking;