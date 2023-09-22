import React, {useEffect, useState} from 'react';
import Container from "../../../components/ui/Container.jsx";
import BookingForm from "./components/BookingForm.jsx";
import TripDetailsSummary from "./components/TripDetailsSummary.jsx";
import {useLocation, useNavigate} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {BASE_URL} from "../../../../config.js";
import {FormProvider, useForm} from "react-hook-form";


function Checkout(props) {
    const {state: {trip, passengerCount}} = useLocation();
    var bookingForm = useForm()
    const [bookingId, setBookingId] = useState();
    const [enabled, setEnabled] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        setEnabled(true);
    }, []);

    var bookingDto = {
        "tripId": trip.tripId,
        "departureBusStopId": trip.departureStop.id,
        "arrivalBusStopId": trip.arrivalStop.id,
        "passengerCount": parseInt(passengerCount)
    }
    const {isLoading, isError, refetch, data} = useQuery({
        queryKey: ["createBooking"],
        enabled: enabled,
        staleTime: Infinity,
        cacheTime: Infinity,
        queryFn: () => {
            return fetch(BASE_URL + 'api/Booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bookingDto)
            })
                .then(response => {
                    console.log(response)
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    setBookingId(data.id)
                    return data;
                })
                .catch(error => {
                    // Handle errors here
                    console.error('There was a problem with the fetch operation:', error);
                });
        }
    })


    useEffect(() => {
        const handleTabClose = event => {


            window.addEventListener("beforeunload", (ev) => {
                ev.preventDefault();


                fetch(BASE_URL + 'api/Booking', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(bookingId)
                })
                    .then(response => {
                        console.log(response)
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {
                        setBookingId(data.id)
                        return data;
                    })
                    .catch(error => {
                        // Handle errors here
                        console.error('There was a problem with the fetch operation:', error);
                    });
                return ev.returnValue = 'Are you sure you want to close?';
            })
        };

        return () => {
            window.removeEventListener('beforeunload', handleTabClose);
        };
    }, []);

    const submitHandler = (data) => {
        console.log(data)
        let restructuredData = {
            "bookingId": bookingId,
            "passengers": []
        }

        for (let i = 1; i <= Object.keys(data).length / 2; i++) {
            if (data[`Passenger${i}firstname`] && data[`Passenger${i}lastname`]) {
                restructuredData.passengers.push({
                    "id": i - 1,
                    "name": data[`Passenger${i}firstname`],
                    "surname": data[`Passenger${i}lastname`],
                    "phoneNumber": data.phone,
                    "email": data.email,
                    "seatNumber": 0
                })
            }
        }
        console.log(restructuredData)
        fetch(BASE_URL + 'api/Booking', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(restructuredData)
        })
            .then(response => {
                console.log(response)
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                navigate("/booking-details", {state: {data}})
                return data;
            })
            .catch(error => {
                // Handle errors here
                console.error('There was a problem with the fetch operation:', error);
            });

    };


    return (
        <Container className={"mt-12 mb-12"}>
            <FormProvider {...bookingForm}>
                <form onSubmit={bookingForm.handleSubmit(submitHandler)}>
                    {isLoading ?
                        <div className={"flex justify-center items-center h-56"}>
                            <span className="loading loading-spinner loading-lg"></span>
                        </div>
                        : <div className={"flex flex-col md:flex-row gap-8"}>
                            <BookingForm/>
                            <TripDetailsSummary/>
                        </div>}
                </form>
            </FormProvider>
        </Container>
    );
}

export default Checkout;