import React from 'react';
import {MdLuggage} from "react-icons/md";

function IncludedLuggage(props) {
    return (
        <div className={"flex gap-2  items-center h-full ps-3"}>
            <div className={"bg-[#e4f1e0] p-3 rounded-md flex items-center"}>
                <MdLuggage className={"w-[36px] h-[36px] text-neutral-content"}/>
            </div>
            <div className={"flex flex-col gap-[1px]"}>
                <p className={"font-medium"}>Included per person</p>
                <div className={"text-sm"}>
                    <p className={"text-neutral-content"}>1 Carry-on bag | 25 lb · 16×12×7 in</p>
                    <p className={"text-neutral-content"}>1 Stored bag | 50 lb · 31×20×12 in</p>
                </div>
            </div>
        </div>);
}

export default IncludedLuggage;