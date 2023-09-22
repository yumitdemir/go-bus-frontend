import React, {useState} from 'react';
import {MdOutlineAddCircleOutline} from "react-icons/md";
import {FormProvider, useForm} from "react-hook-form";
import BusStopSelector from "./components/BusStopSelector.jsx";
import RouteSegmentSelector from "./components/RouteSegmentSelector.jsx";
import {nanoid} from "nanoid";
import InputField from "../../../components/ui/InputField.jsx";
import SectionTitle from "../../../components/ui/SectionTitle.jsx";
import {BASE_URL} from "../../../../config.js";
import {Await} from "react-router-dom";

function createRouteSegmentObject(obj) {
    let result = [];
    let keys = Object.keys(obj);
    let busStopKeys = keys.filter(key => key.startsWith("BusStop") && !key.includes("Duration") && !key.includes("Distance"));

    for (let i = 0; i < busStopKeys.length - 1; i++) {
        let nextStopNumber = busStopKeys[i + 1].replace("BusStop", "");
        let currentDurationKey = "BusStop" + nextStopNumber + "Duration";
        let currentDistanceKey = "BusStop" + nextStopNumber + "Distance";

        let newObj = {
            "departureStopId": obj[busStopKeys[i]].value.id,
            "arrivalStopId": obj[busStopKeys[i + 1]].value.id,
            "duration": obj[currentDurationKey],
            "distance": parseFloat(obj[currentDistanceKey])
        };
        result.push(newObj);
    }
    return result;
}


function AddRoute(props) {
    const addRoute = useForm();
    const {register, handleSubmit, formState: {errors}, control} = addRoute;
    const [RouteSegmentSelectors, setRouteSegmentSelectors] = useState(["", ""]);


    const handleClick = () => {
        setRouteSegmentSelectors(prevElements => [...prevElements,
            <RouteSegmentSelector key={nanoid()}
                                  name={"BusStop" + (prevElements.length + 1)}/>
        ]);
    };


    const onSubmit = async (data) => {
        let routeSegments = createRouteSegmentObject(data);
        let segmentIds = [];

        // Create an array of fetch promises
        let fetchPromises = routeSegments.map(segment =>
            fetch(BASE_URL + "api/RouteSegment", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(segment)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => data.id)
                .catch(error => {
                    console.error("There was a problem with the fetch operation:", error);
                })
        );

        // Wait for all fetch promises to resolve
        segmentIds = await Promise.all(fetchPromises);

        let busStopIds = routeSegments.flatMap(segment => [segment.departureStopId, segment.arrivalStopId]);

        let postObject = {
            "routeName": data.RouteName,
            "routeSegmentIds": segmentIds,
            "busStopIds": busStopIds
        };

        console.log(postObject);

        // Post the new route
        fetch(BASE_URL + "api/Route", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postObject)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error("There was a problem with the fetch operation:", error);
            });
    };

    return (
        <FormProvider {...addRoute}>
            <SectionTitle>Add Route</SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={"flex gap-3"}>
                    <InputField name={"RouteName"} label={"Route Name"} containerClassName={"mb-6  mt-9"}/>
                    <button type="submit" className={"btn btn-primary text-white"}>
                        Add Route +
                    </button>
                </div>
                <p className={"text-3xl font-bold mb-4"}> Route Stops</p>
                <div className={"flex justify-center gap-3 flex-wrap"}>
                    <BusStopSelector name={"BusStop1"}/>
                    <RouteSegmentSelector name={"BusStop2"}/>
                    {RouteSegmentSelectors}
                    <MdOutlineAddCircleOutline onClick={handleClick}
                                               className={"text-black text-2xl self-center"}/>
                </div>

            </form>
        </FormProvider>
    );
}

export default AddRoute;