import React from 'react';
import {MdAirlineSeatReclineNormal, MdOutlineHealthAndSafety} from "react-icons/md";
import {RiLeafLine} from "react-icons/ri";
import {AiOutlineStar} from "react-icons/ai";
import TravelPerkCard from "./TravelPerkCard.jsx";

function TravelPerksCards(props) {
    return (
        <div
            className={"w-full xl:container xl:mx-auto flex sm:gap-4  mb-10 px-4 border-y py-8 border-neutral-content-light"}>
            <div className={"grid grid-cols-4 gap-5 w-full "}>
                <TravelPerkCard title={"Health and Safety"}
                                description={"Keep yourself and others safe while traveling with us."}
                                buttonText={"Learn more"} Icon={<MdOutlineHealthAndSafety
                    className={"text-4xl text-neutral-content flex-shrink-0 mb-3"}/>}/>
                <TravelPerkCard title={"Comfort on board"}
                                description={"Our buses are equipped with large and comfortable seats, a toilet, Wi-Fi and power outlets."}
                                buttonText={"Our onboard service"} Icon={<MdAirlineSeatReclineNormal
                    className={"text-4xl text-neutral-content flex-shrink-0  mb-3"}/>}/>
                <TravelPerkCard title={"Satisfied Customers"}
                                description={"We've transported 100+ million happy customers worldwide. US customers give us an amazing 4.5 stars."}
                                buttonText={"Read customer reviews"} Icon={<AiOutlineStar
                    className={"text-4xl text-neutral-content flex-shrink-0  mb-3"}/>}/>
                <TravelPerkCard title={"The Green Choice"}
                                description={"FlixBus is one of the most eco-friendly ways to travel. Learn more about our sustainability initiatives and carbon offset programs."}
                                buttonText={"Offset emissions for your trips\n"} Icon={<RiLeafLine
                    className={"text-4xl text-neutral-content flex-shrink-0  mb-3"}/>}/>
            </div>
        </div>
    );
}

export default TravelPerksCards;