import React from 'react';
import {useLocation} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {BASE_URL} from "../../../config.js";

function BookingDetails(props) {
    const location = useLocation()
    const {isLoading, isError, refetch, data} = useQuery({
        queryKey: ["getTrip"],
        queryFn: () => {
            return fetch(BASE_URL + 'api/Trip/GetById?id='+location.state.data.tripId )
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }

                    return response.json();
                })
                .then(data => {
                    console.log(data)

                    return data
                })
                .catch(error => {
                    // Handle errors here
                    console.error('There was a problem with the fetch operation:', error);
                });
        }
    })
    console.log(location)
    return (
        <div className={"w-full  flex justify-center items-center mt-40 mb-40 "}>
            <div className={"bg-primary rounded-xl text-white w-1/2 h-[400px]  flex-col py-4 px-5 flex justify-center items-center"}>
               <p className={" text-4xl text-center  font-bold mb-2 "}>Booking Confirmed</p>
                <p className={"text-sm "}>Your booking is confirmed! You will receive a confirmation email shortly with all the details of your reservation.</p>
               <p className={" text-3xl text-center  font-bold mt-6"}>PNR:<span className={"text-white font-normal"}>{data.pnr}</span></p>
            </div>
        </div>
    );
}

export default BookingDetails;