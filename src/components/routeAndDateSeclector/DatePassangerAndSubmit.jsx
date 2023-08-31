import React, {useContext, useEffect, useState} from 'react';
import Datepicker from "react-tailwindcss-datepicker";
import {RouteAndDateContext} from "../../pages/guest/home/RouteAndDateContext.jsx";

function DatePassangerAndSubmit({className}) {
    const {RouteAndDateForm} = useContext(RouteAndDateContext);
    const {register, setValue, watch} = RouteAndDateForm;
    let tripType = watch("tripType")


    const [dates, setDateValue] = useState({
        startDate: new Date(),
        endDate: new Date()
    });

    const handleValueChange = (newValue) => {
        setDateValue(newValue);
    }

    useEffect(() => {
        setValue("dateStart", dates.startDate)
        setValue("dateReturn", dates.endDate)
    }, [dates]);


    useEffect(() => {
        setDateValue({
            startDate: new Date(),
            endDate: new Date()
        })
    }, [tripType]);


    return (
        <div className={className}>
            <div className={"relative  w-[50%]"}>
                <label htmlFor={"label"}
                       className={"z-10 bg-white px-2 absolute top-0 left-[50px] transform -translate-x-1/2 -translate-y-1/2"}>
                    Departure
                </label>
                <input type="date"  className={"hidden"}  {...register('dateStart')}/>
                <input type="date"  className={"hidden"}     {...register('dateReturn')}/>
                <Datepicker
                    containerClassName={"relative "}
                    toggleClassName={"absolute   rounded-r-lg text-[#8b8b8b] left-0 h-full ml-2  focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"}
                    inputClassName="bg-white outline-[#153b82] w-full rounded-md focus:ring-[#0950d6] font-normal border border-[#8b8b8b] px-9 py-[10px] text-[#333333] hover:bg-[#f0f0f0] focus:bg-[#f0f0f0]"
                    useRange={tripType !== "one-way"}
                    asSingle={tripType === "one-way"}
                    popoverDirection="down"
                    value={dates}
                    onChange={handleValueChange}
                    minDate={new Date()}
                />
            </div>
            <div className="w-[30%] relative">
                <label htmlFor={"label"}
                       className={"z-10 bg-white px-1 absolute top-0 left-[55px] transform -translate-x-1/2 -translate-y-1/2"}>
                    Passengers
                </label>
                <select
                    className={"bg-white outline-[#153b82] border w-full rounded  border-[#8b8b8b] text-[#333333] py-[10px] hover:bg-[#f0f0f0]"} {...register('passengers', {required: true})}>
                    <option value="1">1 Passenger</option>
                    <option value="2">2 Passengers</option>
                    <option value="3">3 Passengers</option>
                </select>
            </div>
            <button type={"submit"}
                    className={"w-[20%] bg-secondary rounded-lg py-[10px] text-white hover:bg-[#b53d09]"}>
                Search
            </button>
        </div>
    );
}

export default DatePassangerAndSubmit;