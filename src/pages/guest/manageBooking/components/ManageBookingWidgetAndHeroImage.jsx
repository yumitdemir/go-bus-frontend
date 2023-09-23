import React, {useState} from 'react';
import WidgetManageBooking from "./WidgetManageBooking.jsx";
import DetailsManageBooking from "./DetailsManageBooking.jsx";
import {FormProvider, useForm} from "react-hook-form";
import {useQuery} from "@tanstack/react-query";
import {BASE_URL} from "../../../../../config.js";

function ManageBookingWidgetAndHeroImage(props) {
    const [showBooking, setShowBooking] = useState(false);
    let getBookingForm = useForm()
    const [enabled, setEnabled] = useState(false);
    const [fetchDto, setFetchDto] = useState({});
    const {handleSubmit} = getBookingForm;
    const [pnr, setPnr] = useState("");

    const {isLoading, isError, refetch, data} = useQuery({
        queryKey: ["getBooking"],
        enabled: enabled,
        queryFn: () => {
            return fetch(BASE_URL + 'api/Booking/GetBookingInformation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(fetchDto)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data)
                    setShowBooking(true);
                    data = {...data, pnr}
                    return data
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                });
        }
    })
    const submitHandler = (data) => {
        setPnr(data.pnr)
        setFetchDto(data)
        setEnabled(true)
    }

    return (
        <div
            className={`w-full bg-cover bg-center  relative ${showBooking ? "h-[840px] md:h-[1250px]" : "h-[640px] md:h-[630px]"}   `}>
            <img src="/src/assets/manage-booking/hero-manage-booking.jpg"
                 className={"object-cover h-[240px] md:h-[350px]  w-full "}
                 alt=""/>
            <FormProvider {...getBookingForm}>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div
                        className={"flex flex-col items-center w-full md:w-[666px]  mx-auto p-[8px] md:p-[28px]  bg-white md:rounded-xl absolute bottom-0   left-1/2 transform -translate-x-1/2 md:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"}>
                        {showBooking ? <DetailsManageBooking/> : <WidgetManageBooking/>}
                    </div>
                </form>
            </FormProvider>
        </div>
    );
}

export default ManageBookingWidgetAndHeroImage;