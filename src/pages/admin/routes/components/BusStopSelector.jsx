import React from 'react';
import {Controller, useFormContext} from "react-hook-form";
import Select from "react-select";
import {useQuery} from "@tanstack/react-query";
import {BASE_URL} from "../../../../../config.js";



function BusStopSelector({name}) {
    const {formState: {errors}, control} = useFormContext();

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
                    console.log(data)
                    let restructuredBusStops = data.map((busStop) => {
                        return {
                            value:busStop,
                            label:busStop.name + " / " +busStop.city
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

    return (
        <div className={"flex flex-col items-center justify-center"}>
            <Controller
                control={control}
                name={name}
                rules={{ required: true }}
                render={({field}) => (
                    <Select
                        {...field}
                        options={data}
                        onChange={value => field.onChange(value)}
                        onBlur={field.onBlur}
                    />
                )}
            />
            {errors[name] && <p className={"text-error text-sm"}>*This field is required</p>}
        </div>
    );
}

export default BusStopSelector;