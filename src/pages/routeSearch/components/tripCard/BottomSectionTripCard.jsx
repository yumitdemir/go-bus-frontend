import React from 'react';
import {RiBus2Line} from "react-icons/ri";
import {MdKeyboardArrowDown, MdKeyboardArrowRight} from "react-icons/md";
import {AiOutlineWifi} from "react-icons/ai";
import {PiPlugBold} from "react-icons/pi";
import {Link} from "react-router-dom";

function BottomSectionTripCard(props) {
    return (
        <div className={"flex justify-between  mt-6"}>
            <div className={"flex flex-col md:flex-row gap-2"}>
                <div className={"border border-neutral-content-light rounded-2xl w-fit  h-[30px] flex items-center"}>
                    <div className={"flex px-2 items-center gap-2 py-1 border-e border-neutral-content-light "}>
                        <RiBus2Line className={"text-2xl text-neutral-content"}/>
                        <p className={'md:text-[16px] text-sm'}>Bus</p>
                    </div>
                    <div className={"flex items-center gap-1 px-2 "}>
                        <p className={'md:text-[16px] text-sm'}>Direct</p>
                        <MdKeyboardArrowDown className={"text-2xl text-neutral-content"}/>
                    </div>

                </div>
                <div className={"flex ms-3 gap-1  text-neutral-content"}>
                    <AiOutlineWifi className={"text-xl"}/>
                    <PiPlugBold className={"text-xl"}/>
                </div>
            </div>
            <div className={"flex gap-2 items-center"}>
                <p className={"md:hidden text-[22px] font-bold"}>$75<sup className={"text-sm"}>.99</sup></p>
                    <Link to={"/checkout"} className={"btn btn-primary text-white normal-case rounded-full md:rounded-lg px-0 md:px-3"}><p className={"hidden md:block"}>Continue</p> <MdKeyboardArrowRight
                    className={"text-4xl"}/></Link>
            </div>


        </div>
    );
}

export default BottomSectionTripCard;