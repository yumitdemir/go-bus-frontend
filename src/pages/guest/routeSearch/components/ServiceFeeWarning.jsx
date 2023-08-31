import React from 'react';
import ContainerSearchDisplay from "./ContainerSearchDisplay.jsx";
import {FiInfo} from "react-icons/fi";

function ServiceFeeWarning(props) {
    return (
        <div className={"flex items-center border border-neutral-content-light p-3 rounded-md"}>
            <div className={"flex gap-3 items-center"}>
                <FiInfo className={"text-2xl"}/>
                <p >All transactions will incur a $3.99 service fee.</p>
            </div>
        </div>
    );
}

export default ServiceFeeWarning;