import React, {useContext, useState} from 'react';
import {RouteAndDateContext} from "../../pages/home/RouteAndDateContext.jsx";
import TripType from "./TripType.jsx";
import Route from "./Route.jsx";
import DatePassangerAndSubmit from "./DatePassangerAndSubmit.jsx";


function RouteAndDateSelector({className}) {
    const {RouteAndDateForm} = useContext(RouteAndDateContext);
    const {handleSubmit} = RouteAndDateForm;
    const onSubmit = (data) => {
        console.log(data)
    };

    const [dates, setDateValue] = useState({
        startDate: null,
        endDate: null
    });

    const handleValueChange = (newValue) => {
        setDateValue(newValue);
    }

    return (

        <div className={`${className}`}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TripType/>
                <div className={"flex flex-col lg:flex-row gap-3 w-[100%]"}>
                    <Route className={"flex relative w-full lg:w-[50%]"}/>
                    <DatePassangerAndSubmit setDateValue={setDateValue} dates={dates} handleValueChange={handleValueChange} className={"flex gap-2 w-full lg:w-[50%]"}/>
                </div>
            </form>
        </div>
    );
}

export default RouteAndDateSelector;