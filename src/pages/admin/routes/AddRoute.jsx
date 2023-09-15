import React, {useState} from 'react';
import {MdOutlineAddCircleOutline} from "react-icons/md";
import Select from 'react-select';
import {FormProvider, useForm, useFormContext} from "react-hook-form";
import BusStopSelector from "./components/BusStopSelector.jsx";
import {BsArrowRight} from "react-icons/bs";
import RouteSegmentSelector from "./components/RouteSegmentSelector.jsx";


function AddRoute(props) {
    const addRoute = useForm();
    const {register, handleSubmit, formState: {errors}, control} = addRoute;

    const onSubmit = (data) => {
        console.log(data)
    };
    return (
        <FormProvider {...addRoute}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={"flex items-center"}>
                    <div className={"flex gap-8 flex-col bg-neutral-content-hover"}>
                        <div className={"flex justify-between gap-3"}>
                            <div className={"flex justify-between gap-3 items-center"}>
                                <BusStopSelector name={"BusStop1"}/>
                                <BsArrowRight/>
                                <BusStopSelector name={"BusStop2"}/>
                                <div className={"flex flex-col gap-1 w-24"}>
                                    <input type="timesp" placeholder={"Duration min"}/>
                                    <input type="" placeholder={"Distance km"}/>
                                </div>
                            </div>
                            <RouteSegmentSelector name={"test"}/>
                            <MdOutlineAddCircleOutline className={"text-black text-2xl self-center"}/>
                        </div>

                    </div>
                </div>
                <button type="submit">
                    Submit
                </button>
            </form>
        </FormProvider>
    );
}

export default AddRoute;