import React from 'react';
import ContainerSearchDisplay from "./ContainerSearchDisplay.jsx";

function DateNavigator(props) {
    return (
        <div className={"h-[44px] flex"}>
            <div className={"w-[32%] border border-neutral-content rounded-s-md flex justify-center items-center cursor-pointer"}>
                <p>Sat, Aug 26</p>
            </div>
            <div className={"w-[36%] border border-neutral-content  border-b-4 border-b-primary   flex justify-center items-center"}>
                <p>Sun, Aug 27</p>
            </div>
            <div className={"w-[32%] border border-neutral-content rounded-e-md flex justify-center items-center cursor-pointer"}>
                <p>Mon, Aug 28</p>
            </div>
        </div>
    );
}

export default DateNavigator;