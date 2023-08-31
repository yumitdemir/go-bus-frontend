import React, {useContext} from 'react';
import CheckBoxTripType from "./CheckBoxTripType.jsx";
import {RouteAndDateContext} from "../../pages/guest/home/RouteAndDateContext.jsx";
import {Controller} from "react-hook-form";

function TripType(props) {
    const {RouteAndDateForm} = useContext(RouteAndDateContext);
    const {register, control} = RouteAndDateForm;
    return (
        <div className={"flex flex-row gap-4 mb-[24px]"}>
            <Controller
                name="tripType"
                control={control}
                defaultValue="one-way"
                render={({field}) => (
                    <div className={"flex gap-2"}>
                        <div className={"flex gap-1"}>
                            <input
                                className="radio radio-primary"
                                type="radio"
                                value="one-way"
                                id={"one-way"}
                                checked={field.value === 'one-way'}
                                onChange={() => field.onChange('one-way')}
                            />
                            <label htmlFor={"one-way"}>One Way</label>
                        </div>
                        <div className={"flex gap-1"}>
                            <input
                                className="radio radio-primary"
                                type="radio"
                                value="round"
                                checked={field.value === 'round'}
                                onChange={() => field.onChange('round')}
                            />
                            <label htmlFor="round">Round</label>

                        </div>
                    </div>
                )}
            />
        </div>
    );
}

export default TripType;