import React from 'react';
import {IoTicketOutline} from "react-icons/io5";
import {AiOutlineClockCircle} from "react-icons/ai";
import {BiHelpCircle} from "react-icons/bi";

function HomePageQuickLinks(props) {
    return (
        <div className={" flex sm:gap-4  mb-12 "}>
            <div className={"w-[33%] sm:rounded-lg sm:border border-e border-neutral-content-light h-[78px] flex justify-center items-center cursor-pointer hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] transition duration-300 ease-in-out"}>
                <div className={"flex flex-col sm:flex-row justify-center items-center gap-2"}>
                    <IoTicketOutline className={"text-4xl"}/>
                    <p className={"text-center"}>Manage My Booking</p>
                </div>

            </div>
            <div className={"w-[33%] sm:rounded-lg sm:border border-e border-neutral-content-light h-[78px] flex justify-center items-center cursor-pointer hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] transition duration-300 ease-in-out"}>
                <div className={"flex flex-col sm:flex-row justify-center items-center gap-2"}>
                    <AiOutlineClockCircle className={"text-4xl"}/>
                    <p className={"text-center"}> Bus Tracker</p>
                </div>

            </div>
            <div className={"w-[33%] sm:rounded-lg sm:border  border-neutral-content-light h-[78px] flex justify-center items-center cursor-pointer hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] transition duration-300 ease-in-out"}>
                <div className={"flex flex-col sm:flex-row justify-center items-center gap-2"}>
                    <BiHelpCircle className={"text-4xl"}/>
                    <p className={"text-center"}>Help</p>
                </div>

            </div>

        </div>
    );
}

export default HomePageQuickLinks;