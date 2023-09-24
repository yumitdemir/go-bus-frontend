import React, {useEffect} from 'react';
import {HiOutlineArrowsRightLeft} from "react-icons/hi2";
import {Controller, useFormContext} from "react-hook-form";
import Select from "react-select";
import {useQuery} from "@tanstack/react-query";
import {BASE_URL} from "../../../config.js";
import {useSearchParams} from "react-router-dom";
import api from "../../Api.js";


const customStyles = {
    control: (base, state) => ({
        ...base,
        backgroundColor: 'white',
        border: state.isFocused ? '1px solid #153b82' : '1px solid #8b8b8b',
        borderRadius: '8px',
        boxShadow: state.isFocused ? '0 0 0 1px #153b82' : null,
        fontSize: '16px',
        fontWeight: 'normal',
        height: '47px',
        lineHeight: '20px',
        outline: 'none',
        transition: 'all 100ms',
    }),
    option: (base, state) => ({
        ...base,
        backgroundColor: state.isSelected ? '#153b82' : null,
        color: state.isSelected ? '#fff' : '#333333',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: state.isSelected ? 'bold' : null,
        lineHeight: '20px',
        padding: '10px 11px',

    }),
};

function Route({className}) {
    const {control, setValue, watch} = useFormContext();
    const [searchParams, setSearchParams] = useSearchParams();
    const {isLoading, isError, refetch, data} = useQuery({
        queryKey: ["getBusStops"],
        queryFn: () => {
            return api('api/BusStop/GetAllBusStops?')
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
    console.log(data)

    const reverseBusStops = () => {
        let from = watch("from")
        let to = watch("to")

        setValue("from", to)
        setValue("to", from)

    };
    let defaultDepartureStop;
    let defaultArrivalStop;
    useEffect(() => {
        if (data) {
            defaultDepartureStop = data.find(x => x.value.id.toString() === searchParams.get("departureStopId"))
            defaultArrivalStop = data.find(x => x.value.id.toString() === searchParams.get("arrivalStopId"))
            setValue("from", defaultDepartureStop)
            setValue("to", defaultArrivalStop)
        }
    }, [data]);


    return (
        <div className={`${className}`}>
            <div className={"relative w-full  flex items-center"}>
                <label htmlFor={"label"}
                       className={"bg-white z-20 px-2 absolute text-sm sm:text-base top-0 left-8 transform -translate-x-1/2 -translate-y-1/2 "}>From</label>

                <Controller
                    control={control}
                    name={"from"}
                    rules={{required: true}}
                    render={({field}) => (
                        <Select
                            {...field}
                            options={data}
                            onBlur={field.onBlur}
                            styles={customStyles}
                            classNamePrefix="react-select"
                            isSearchable={false}
                            placeholder="Departure"
                            className={"w-full"}
                            aria-label="Select an option"
                            theme={(theme) => ({
                                ...theme,
                                borderRadius: 4,
                                colors: {
                                    ...theme.colors,
                                    primary25: '#153b82',
                                    primary50: '#153b82',
                                    primary75: '#153b82',
                                    primary: '#153b82',
                                },
                            })}
                        />
                    )}
                />
            </div>
            <div className={"relative w-full flex items-center"}>
                <label htmlFor={"label"}
                       className={"bg-white z-20 px-2 absolute text-sm sm:text-base  top-0 left-6 transform -translate-x-1/2 -translate-y-1/2"}>To</label>

                <Controller
                    control={control}
                    name={"to"}
                    rules={{required: true}}
                    render={({field}) => (
                        <Select
                            {...field}
                            options={data}
                            onBlur={field.onBlur}
                            styles={customStyles}
                            classNamePrefix="react-select"
                            isSearchable={false}
                            placeholder="Arrival"
                            className={"w-full"}
                            aria-label="Select an option"
                            theme={(theme) => ({
                                ...theme,
                                borderRadius: 4,
                                colors: {
                                    ...theme.colors,
                                    primary25: '#153b82',
                                    primary50: '#153b82',
                                    primary75: '#153b82',
                                    primary: '#153b82',
                                },
                            })}
                        />
                    )}
                />
            </div>
            <HiOutlineArrowsRightLeft onClick={reverseBusStops}
                                      className={"cursor-pointer bg-white text-4xl absolute  top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 rounded-full p-1 font-extrabold border-[#8b8b8b] border text-[#333333]"}/>
        </div>
    )
        ;
}

export default Route;