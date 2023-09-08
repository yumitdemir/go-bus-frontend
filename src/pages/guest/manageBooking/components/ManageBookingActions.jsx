import React from 'react';
import ActionCard from "../../../../components/ui/ActionCard.jsx";
import {MdAirlineSeatReclineNormal, MdLuggage, MdOutlineModeEditOutline, MdOutlineNoLuggage} from "react-icons/md";
import {LuCalendarDays} from "react-icons/lu";
import {GiCancel} from "react-icons/gi";
import {BiUser} from "react-icons/bi";
import {IoMailOpenOutline} from "react-icons/io5";

function ManageBookingActions(props) {
    return (
        <div className={"mt-12 "}>
            <p className={"text-center text-xl font-bold mb-6"}>Edit your trip</p>
            <div className={"flex flex-col gap-2"}>
                <ActionCard icon={<MdAirlineSeatReclineNormal className={"w-full h-full text-green-800"}/>}>
                    <p className={"text-lg font-medium"}>Reselect your seat</p>
                </ActionCard>
                <ActionCard icon={<MdLuggage className={"w-full h-full text-green-800"}/>}>
                    <p className={"text-lg font-medium"}>Add baggage</p>
                </ActionCard>
                <ActionCard icon={<LuCalendarDays className={"w-full h-full text-secondary"}/>}>
                    <p className={"text-lg font-medium"}>Change the departure date/time</p>
                </ActionCard>
                <ActionCard icon={<GiCancel className={"w-full h-full text-red-700"}/>}>
                    <p className={"text-lg font-medium"}>Change the departure date/time</p>
                </ActionCard>
            </div>
            <div className={"mt-4 flex flex-col"}>
                <ActionCard icon={<BiUser className={"w-full h-full  text-black"}/>}
                            indicatorIcon={<MdOutlineModeEditOutline className={"w-8 h-8"}/>}
                            border={"border border-neutral-content-light rounded-t-md"}>
                    <p className={"text-lg font-medium"}>Edit/Remove passengers</p>
                    <p>Yumit Demir</p>
                </ActionCard>
                <ActionCard icon={<IoMailOpenOutline className={"w-full h-full  text-black"}/>}
                            indicatorIcon={<MdOutlineModeEditOutline className={"w-8 h-8"}/>}
                            border={"border-s border-e border-neutral-content-light "}>
                    <p className={"text-lg font-medium"}>Edit Contact Information</p>
                    <p>umitdmmr@outlook.com, +359877300525</p>
                </ActionCard>
                <ActionCard icon={<MdOutlineNoLuggage className={"w-full h-full  text-black"}/>}
                            border={"border rounded-b-md border-neutral-content-light "}>
                    <p className={"text-lg font-medium"}>Cancel baggage / extras only</p>
                </ActionCard>
            </div>
        </div>
    );
}

export default ManageBookingActions;