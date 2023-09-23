import React from 'react';
import {MdAirlineSeatReclineNormal, MdKeyboardArrowRight} from "react-icons/md";

function ActionCard({children,icon,onClick,className,indicatorIcon,border}) {
    return (
        <div onClick={onClick} className={`flex justify-between px-5 py-4 ${border? border : "border border-neutral-content-light rounded-md"}  cursor-pointer w-full ${className} hover:bg-neutral-content-hover`}>
            <div className={"flex gap-5   items-center"}>
                <div className={"w-10 h-10  text-neutral-content"}>
                    {icon}
                </div>
                <div className={"flex flex-col justify-center items-start"}>
                    {children}
                </div>
            </div>
            <div className={"flex items-center justify-center w-10 h-10 text-neutral-content"}>
                {indicatorIcon? indicatorIcon : <MdKeyboardArrowRight className={"w-full h-full"}/>}
            </div>
        </div>
    );
}

export default ActionCard;