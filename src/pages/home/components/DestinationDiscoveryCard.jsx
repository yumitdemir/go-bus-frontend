import React from 'react';
import MapTeaser from "../../../assets/home/map-teaser.jpg"
import {RiArrowRightSLine} from "react-icons/ri";

function DestinationDiscoveryCard(props) {
    return (
        <div className={" flex sm:gap-4  mb-10 border-b pb-10 border-neutral-content-light"}>
            <div
                className={"  rounded-lg sm:border border-neutral-content-light sm:h-[190px] w-full flex flex-col-reverse sm:flex-row cursor-pointer  sm:hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] transition duration-300 ease-in-out"}>
                <img src={MapTeaser} alt="" className={"h-[190px] sm:h-full w-full sm:w-[32%] object-cover"}/>
                <div className="flex flex-col sm:px-5 sm:py-7 sm:w-[70%]">
                    <div>
                        <p className={"text-xl font-medium"}>Discover the easy way to travel</p>
                        <p>Choose now from almost 2,300 destinations across the US and benefit from our extended network
                            with Greyhound.</p>
                    </div>
                    <button
                        className="btn hover:bg-[#EEEEEE] border-none  whitespace-nowrap flex-nowrap font-normal w-fit px-0 normal-case text-[17px] transition duration-100 ease-in-out">Explore
                        the map
                        <RiArrowRightSLine className={"text-2xl"}/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DestinationDiscoveryCard;