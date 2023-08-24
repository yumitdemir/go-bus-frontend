import React, {useContext} from 'react';
import {FaLocationDot} from "react-icons/fa6";
import {HiOutlineArrowsRightLeft} from "react-icons/hi2";
import {RouteAndDateContext} from "../../pages/home/RouteAndDateContext.jsx";

function Route({className}) {
    const {RouteAndDateForm} = useContext(RouteAndDateContext);
    const {register} = RouteAndDateForm;
    return (
        <div className={`${className}`}>
            <div className={"relative w-full "}>

                <label htmlFor={"label"}
                       className={"bg-white px-2 absolute top-0 left-8 transform -translate-x-1/2 -translate-y-1/2"}>From</label>
                <FaLocationDot
                    className={"text-[#8b8b8b] text-xl absolute top-1/2 left-6  transform -translate-x-1/2 -translate-y-1/2"}/>
                <input type="text" name={"from"} {...register('from', {required: true})}
                       className={" w-full border text-[#333333] border-e-0 border-[#8b8b8b] rounded-md rounded-r-none ps-10   py-2 text-lg hover:bg-[#f0f0f0] focus:bg-[#f0f0f0]"}/>
            </div>
            <div className={"relative w-full"}>
                <label htmlFor={"label"}
                       className={"bg-white px-2 absolute top-0 left-6 transform -translate-x-1/2 -translate-y-1/2"}>To</label>
                <FaLocationDot
                    className={"text-[#8b8b8b] text-xl absolute top-1/2 left-8 transform -translate-x-1/2 -translate-y-1/2"}/>
                <input type="text" {...register('to', {required: true})}
                       className={"w-full border text-[#333333] border-[#8b8b8b] rounded-md rounded-l-none ps-11  py-2 text-lg hover:bg-[#f0f0f0] focus:bg-[#f0f0f0]"}/>
            </div>
            <HiOutlineArrowsRightLeft
                className={"bg-white text-4xl absolute  top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 rounded-full p-1 font-extrabold border-[#8b8b8b] border text-[#333333]"}/>
        </div>
    )
        ;
}

export default Route;