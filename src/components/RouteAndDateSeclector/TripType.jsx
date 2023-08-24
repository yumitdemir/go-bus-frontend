import React, {useContext} from 'react';
import CheckBoxTripType from "./CheckBoxTripType.jsx";
import {RouteAndDateContext} from "../../pages/home/RouteAndDateContext.jsx";

function TripType(props) {
    const {RouteAndDateForm} = useContext(RouteAndDateContext);
    const { register} = RouteAndDateForm;
    return (
        <div className={"flex flex-col gap-1"}>
            <div className="flex gap-6">
                <CheckBoxTripType label={"One Way"} checked={true}
                                  formOptions={{...register('tripType', {required: true})}} value={"one-way"}/>
                <CheckBoxTripType label={"Round Trip"} formOptions={{...register('tripType', {required: true})}}
                                  value={"round-trip"}/>
            </div>

        </div>
    );
}

export default TripType;