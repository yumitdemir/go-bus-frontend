import React, {useState} from 'react';
import {FormProvider, useForm} from "react-hook-form";
import RouteSelector from "./RouteSelector.jsx";
import InputField from "../../../components/ui/InputField.jsx";
import BusSelector from "./BusSelector.jsx";
import DaysOfTheWeekSelector from "./DaysOfTheWeekSelector.jsx";
import TimeOfTheDaySelector from "./TimeOfTheDaySelector.jsx";
import UnavailableDatesSelector from "./UnavailableDatesSelector.jsx";
import {BASE_URL} from "../../../../config.js";
import {useLocation, useNavigate} from "react-router-dom";
import {BiArrowBack} from "react-icons/bi";

function transformObject(input) {
    return {
        routeId: input.routeId.value,
        pricePerKm: parseFloat(input.pricePerKm),
        busId: input.busId.value,
        departureDate: input.departureDate != null ? new Date().toISOString() : null,
        timeOfDay: input.timeOfDay.map(item => item.value),
        dayOfWeek: input.dayOfWeek.map(item => item.value),
        unavailableDates: input.unavailableDates?.map(date => new Date(date).toISOString()),
        lastAvailableDate: input.lastAvailableDate,
        startDate: input.startDate
    };
}

function AddTrip(props) {
    const location = useLocation();
    const navigate = useNavigate();
    var addTripForm = useForm()
    const {register, handleSubmit} = addTripForm;
    const [isRepeatingTrip, setIsRepeatingTrip] = useState(false);
    const submitHandler = (data) => {
        var transformedObject = transformObject(data)
        fetch(BASE_URL + "api/Trip", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(transformedObject)
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                navigate(location.state.from)
            })
            .catch(error => {
                console.error("There was a problem with the fetch operation:", error);
            });
    };
    return (
        <div>
            <FormProvider {...addTripForm}>
                <button onClick={() => {
                    setIsRepeatingTrip((oldstate) => !oldstate)
                }}>Repeating
                </button>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div className={"flex flex-col h-full "}>
                        <div className={"w-full h-fit mb-6"}>
                            <BiArrowBack className={"text-4xl cursor-pointer "} onClick={() => {
                                navigate(location.state.from)
                            }}/>
                        </div>
                        <div className={"flex mx-auto flex-col gap-6 justify-center items-center w-[300px] h-fit"}>
                            <div className={"flex gap-6 flex-col w-full"}>
                                <RouteSelector name={"routeId"} label={"Route"}/>
                                <InputField name={"pricePerKm"} type={"number"} label={"Price PerKm"}/>
                                <BusSelector name={"busId"} label={"Bus"}/>
                                {isRepeatingTrip ?
                                    <InputField name={"departureDate"} type={"datetime-local"}
                                                label={"Departure Date"}/> :
                                    <>
                                        <DaysOfTheWeekSelector name={"dayOfWeek"} label={"Day Of Trip"}/>
                                        <UnavailableDatesSelector name={"unavailableDates"}
                                                                  label={"Unavailable Dates"}/>
                                        <TimeOfTheDaySelector name={"timeOfDay"} label={"Time of The Trip"}/>
                                        <InputField name={"startDate"} type={"datetime-local"} label={"Start Date"}/>
                                        <InputField name={"lastAvailableDate"} type={"datetime-local"}
                                                    label={"Last Available Date"}/>
                                    </>

                                }
                            </div>
                            <button type={"submit"} className={"btn btn-primary text-white w-full"}>Add</button>
                        </div>
                    </div>

                </form>
            </FormProvider>
        </div>
    )
        ;
}

export default AddTrip;