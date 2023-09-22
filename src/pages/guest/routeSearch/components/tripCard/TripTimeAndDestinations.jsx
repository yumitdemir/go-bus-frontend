import React from 'react';
import {useTripCardContext} from "../../../../../context/TripCardContext.jsx";

function TripTimeAndDestinations() {
    let trip = useTripCardContext();
    const getTheHourAndMin = (date) => {
        date = new Date(date);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        return hours + ":" + minutes;
    };
    const getTheDate = (date) => {
        date = new Date(date);
        return date.getDate()
    };
    const calculateDayDifference = (departureDate, arrivalDate) => {

        departureDate = new Date(departureDate);
        arrivalDate = new Date(arrivalDate);
        departureDate.setHours(0, 0, 0, 0);
        arrivalDate.setHours(0, 0, 0, 0);
        const diffTime = Math.abs(arrivalDate - departureDate);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };
    let tripDuration = trip.duration.slice(0, -3);
    let dayDifference = calculateDayDifference(trip.departureTime, trip.arrivalTime);
    let departureTime = getTheHourAndMin(trip.departureTime);
    let arrivalTime = getTheHourAndMin(trip.arrivalTime);

    return (
        <div className={`w-full md:w-[91%] h-fit flex flex-col`}>
            <div className={"flex"}>
                <div className={"w-full md:w-[60%] flex"}>
                    <div className={"w-fit "}>
                        <p className={"font-bold text-lg whitespace-nowrap flex-nowrap"}>{departureTime}</p>
                    </div>
                    <div className="relative w-full mx-2">
                        <div className="absolute inset-0 flex items-center">
                            <div className="flex-1 h-px bg-neutral-content-light"></div>
                            <p className="mx-2 text-center text-sm md:text-lg text-neutral-content">{tripDuration} hrs</p>
                            <div className="flex-1 h-px bg-neutral-content-light"></div>
                        </div>
                    </div>
                </div>
                <div className={"w-fit md:w-[40%] flex items-center"}>
                    <p className={"font-bold text-lg"}>{arrivalTime}<sup
                        className={"text-lg"}>{dayDifference !== 0 && "+"+dayDifference}</sup></p>
                </div>
            </div>
            <div className={"flex text-sm md:text-lg  flex-nowrap"}>
                <div className={"w-full md:w-[60%]"}>
                    <p>{trip.departureStop.name}</p>
                </div>
                <div className={"w-fit md:w-[40%]"}>
                    <p>{trip.arrivalStop.name}</p>
                </div>
            </div>
        </div>);
}

export default TripTimeAndDestinations;