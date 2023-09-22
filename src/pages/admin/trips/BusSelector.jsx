import React from 'react';
import {Controller, useFormContext} from "react-hook-form";
import {useQuery} from "@tanstack/react-query";
import {BASE_URL} from "../../../../config.js";
import Select from "react-select";

function BusSelector({name,label}) {
    const {formState: {errors}, control} = useFormContext();

    const {isLoading, isError, refetch, data} = useQuery({
        queryKey: ["getBuses"],
        queryFn: () => {
            return fetch(BASE_URL + 'api/Buses/GetAllBuses')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    let restructuredBuses = data.map((bus) => {
                        return {
                            value:bus.id,
                            label:bus.plateNumber + " " + bus.capacity
                        }
                    })
                    return restructuredBuses;
                })
                .catch(error => {
                    // Handle errors here
                    console.error('There was a problem with the fetch operation:', error);
                });
        }
    })
    return (
        <div className={"flex flex-col gap-1 w-full"}>
            <label htmlFor={name}>{label}</label>
            <Controller
                control={control}
                name={name}
                rules={{ required: true }}
                render={({field}) => (
                    <Select
                        {...field}
                        options={data}
                        className="basic-multi-select input w-full max-w-xs px-0"
                        onChange={value => field.onChange(value)}
                        onBlur={field.onBlur}
                    />
                )}
            />
            {errors[name] && <p className={"text-error text-sm"}>*This field is required</p>}
        </div>
    );
}

export default BusSelector;