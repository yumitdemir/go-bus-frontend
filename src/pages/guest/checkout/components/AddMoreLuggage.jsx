import React from 'react';
import {MdAirlineSeatReclineNormal, MdKeyboardArrowRight, MdLuggage} from "react-icons/md";
import ActionCard from "../../../../components/ui/ActionCard.jsx";

function AddMoreLuggage(props) {
    return (
        <div className={"flex justify-between px-5 py-4 border border-neutral-content-light rounded-md cursor-pointer"}>
            <ActionCard icon={<MdLuggage className={"w-full h-full"}/>} >
                <p className={"text-lg font-medium"}>Add more baggage</p>
                <p className={"text-neutral-content"}>from $19.99</p>
            </ActionCard>
        </div>
    );
}

export default AddMoreLuggage;