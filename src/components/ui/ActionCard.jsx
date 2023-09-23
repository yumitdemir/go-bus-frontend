import React from 'react';
import {MdAirlineSeatReclineNormal, MdKeyboardArrowRight} from "react-icons/md";
import {useQuery} from "@tanstack/react-query";

function ActionCard({children, icon, onClick, className, indicatorIcon, border}) {
    const {data, isLoading} = useQuery(['getBooking']);

    return (
        <div onClick={onClick}
             className={`flex justify-between px-5 py-4   ${data.booking.status === 2 && "disabled pointer-events-none"}
        ${border ? border : "border border-neutral-content-light rounded-md"}  cursor-pointer w-full ${className} hover:bg-neutral-content-hover`}>
            <div className={"flex gap-5   items-center"}>
                <div className={`w-10 h-10  `}>
                    {icon}
                </div>
                <div className={`flex flex-col justify-center items-start ${data.booking.status === 2 && "disabled pointer-events-none text-neutral-content-light"} `}>
                    {children}
                </div>
            </div>
            <div className={`flex items-center justify-center w-10 h-10 text-neutral-content  ${data.booking.status === 2 && "disabled pointer-events-none text-neutral-content-light"}`}>
                {indicatorIcon ? indicatorIcon : <MdKeyboardArrowRight className={"w-full h-full"}/>}
            </div>
        </div>
    );
}

export default ActionCard;