import React, {useEffect, useState} from 'react';
import Datepicker from "react-tailwindcss-datepicker";
import {Controller, useFormContext} from "react-hook-form";

function DatePassangerAndSubmit({className}) {
    const {register, formState: {errors}, setValue,control, watch} = useFormContext();

    let tripType = watch("tripType")


    const [dates, setDateValue] = useState({
        startDate: new Date().toISOString().split('T')[0],
        endDate: new Date().toISOString().split('T')[0]
    });


    return (
        <div className={className}>
            <div className={"flex flex-row  gap-2 w-full  sm:w-[80%] "}>
                <div className={"relative  w-full"}>
                    <label htmlFor={"label"}
                           className={"z-10 bg-white px-2 text-sm sm:text-base absolute top-0 left-[45px] sm:left-[50px] transform -translate-x-1/2 -translate-y-1/2"}>
                        Departure
                    </label>
                    <Controller
                        name="date"
                        control={control}
                        defaultValue={dates}
                        render={({ field: { onChange, value } }) => (
                            <Datepicker
                                containerClassName={"relative "}
                                toggleClassName={"absolute rounded-r-lg text-[#8b8b8b] left-0 h-full ml-2 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"}
                                inputClassName="bg-white outline-[#153b82] w-full rounded-md focus:ring-[#0950d6] font-normal border border-[#8b8b8b] px-9 py-[10px] text-[#333333] hover:bg-[#f0f0f0] focus:bg-[#f0f0f0]"
                                useRange={tripType !== "one-way"}
                                asSingle={tripType === "one-way"}
                                popoverDirection="down"
                                value={value}
                                onChange={onChange}
                                minDate={new Date()}
                            />
                        )}
                    />
                </div>
                <div className="w-full  relative">
                    <label htmlFor={"label"}
                           className={"z-10 bg-white px-1 text-sm sm:text-base absolute top-0 left-[48px] sm:left-[55px] transform -translate-x-1/2 -translate-y-1/2"}>
                        Passengers
                    </label>
                    <select
                        className={"bg-white outline-[#153b82] border w-full rounded  border-[#8b8b8b] text-[#333333] py-[10px] hover:bg-[#f0f0f0]"} {...register('passengers', {required: true})}>
                        <option value="1">1 Passenger</option>
                        <option value="2">2 Passengers</option>
                        <option value="3">3 Passengers</option>
                    </select>
                </div>
            </div>
            <button type={"submit"}
                    className={"w-full sm:w-[20%] bg-secondary rounded-lg py-[10px] text-white hover:bg-[#b53d09]"}>
                Search
            </button>
        </div>
    );
}

export default DatePassangerAndSubmit;