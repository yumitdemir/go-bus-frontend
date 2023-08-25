import React from 'react';
import {MdOutlineHealthAndSafety} from "react-icons/md";
import {RiArrowRightSLine} from "react-icons/ri";

function TravelPerkCard({title, Icon, description, buttonText}) {
    return (

        <div
            className={" flex flex-col xl:col-span-1 sm:col-span-2 col-span-4  w-full"}>
            <div className={"flex sm:flex-col flex-row sm:justify-center sm:items-center"}>
                {Icon}
                <div className={'flex flex-col sm:justify-center sm:items-center justify-start'}>
                    <p className={"font-bold"}>{title}</p>
                    <p className={"sm:text-center text-sm"}>{description}</p>
                    <button
                        className="btn hover:bg-neutral-content-light bg-opacity-10 whitespace-nowrap flex-nowrap font-normal w-fit px-0 sm:px-5">{buttonText}
                        <RiArrowRightSLine className={"text-2xl"}/>
                    </button>
                </div>
            </div>
        </div>

    );
}

export default TravelPerkCard;