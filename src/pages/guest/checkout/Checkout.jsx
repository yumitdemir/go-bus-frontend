import React, {useEffect} from 'react';
import Container from "../../../components/ui/Container.jsx";
import BookingForm from "./components/BookingForm.jsx";
import TripDetailsSummary from "./components/TripDetailsSummary.jsx";
import {useLocation} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {BASE_URL} from "../../../../config.js";

function Checkout(props) {
    const {state: {trip}} = useLocation();

    const {isLoading, isError, refetch, data} = useQuery({
        queryKey: ["getBusStops"],
        queryFn: () => {
            return fetch(BASE_URL + 'api/BusStop/GetAllBusStops?')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    let restructuredBusStops = data.map((busStop) => {
                        return {
                            value: busStop,
                            label: busStop.name + " / " + busStop.city
                        }
                    })
                    return restructuredBusStops;
                })
                .catch(error => {
                    // Handle errors here
                    console.error('There was a problem with the fetch operation:', error);
                });
        }
    })


    useEffect(() => {
        console.log(trip)
    }, [location]);
    return (
        <Container className={"mt-12 mb-12"}>
            {isLoading ?
                <div className={"flex justify-center items-center h-56"}>
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
                :<div className={"flex flex-col md:flex-row gap-8"}>
                    <BookingForm/>
                    <TripDetailsSummary/>
                </div>}

        </Container>
    );
}

export default Checkout;