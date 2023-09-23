import React from 'react';
import {useQuery} from "@tanstack/react-query";

function TripDetailsManageBooking(props) {
    const {data} = useQuery(['getBooking']);
    const formattedDepartureDate = () => {
        let date = new Date(data.tripStart);
        let options = {day: 'numeric', month: 'short', year: 'numeric', weekday: 'short'};
        return new Intl.DateTimeFormat('en-US', options).format(date);
    };

    const timeLeftUntilDeparture = () => {
        let today = new Date();
        today.setHours(0, 0, 0, 0); // Set the time portion to 00:00:00.000

        let departureDate = new Date(data.tripStart);
        departureDate.setHours(0, 0, 0, 0); // Set the time portion to 00:00:00.000

        let diffTime = Math.abs(departureDate - today);
        let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        let message;
        if (diffDays === 0) {
            message = "Today";
        } else {
            message = `${diffDays} days later`;
        }
        return message;
    };
    const getHourAndMinuteValue = (date) => {
        date = new Date(date);
        let hours = date.getHours();
        let minutes = date.getMinutes();

        return `${hours}:${minutes}`
    };
    const dayDifferenceDepartureArrival = () => {
        let tripStart = new Date(data.tripStart);
        tripStart.setHours(0, 0, 0, 0); // Set the time portion to 00:00:00.000

        let tripEnd = new Date(data.tripEnd);
        tripEnd.setHours(0, 0, 0, 0); // Set the time portion to 00:00:00.000

        let diffTime = Math.abs(tripEnd - tripStart);
        let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };


    return (
        <div className={"border border-neutral-content-light rounded-md mt-6 p-[24px] flex flex-col gap-3 "}>
            { data.booking.status && <p className={"text-error text-2xl uppercase text-center font-bold"}>Trip canceled by user</p>}
            <div className={'flex justify-between items-center'}>
                <p className={"font-bold text-sm"}>{formattedDepartureDate()} </p>
                <div className={"border border-neutral-content-light rounded-xl p-1"}>
                    <p>{timeLeftUntilDeparture()}</p>
                </div>
            </div>
            <div className={"flex gap-6"}>
                <div className={"flex flex-col gap-1"}>
                    <p>
                        {getHourAndMinuteValue(data.tripStart)}
                    </p>
                    <p>
                        {getHourAndMinuteValue(data.tripEnd)}{dayDifferenceDepartureArrival() != 0 &&
                        <sup>+{dayDifferenceDepartureArrival()}</sup>}
                    </p>
                </div>
                <div className={"flex flex-col gap-1"}>
                    <p>
                        {data.booking.departureBusStop.name} </p>
                    <p>
                        {data.booking.arrivalBusStop.name}</p>
                </div>
            </div>
        </div>
    );
}

export default TripDetailsManageBooking;