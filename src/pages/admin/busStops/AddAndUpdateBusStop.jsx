import React from 'react';
import {FormProvider, useForm} from "react-hook-form";
import {useLocation, useNavigate} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {BASE_URL} from "../../../../config.js";
import {BiArrowBack} from "react-icons/bi";
import InputField from "../../../components/ui/InputField.jsx";
import SelectInputField from "../../../components/ui/SelectInputField.jsx";
import api from "../../../Api.js";

function AddAndUpdateBusStop(props) {
    const addUpdateBusStopForm = useForm();
    const {register, handleSubmit, formState: {errors}} = addUpdateBusStopForm;
    const navigate = useNavigate();
    const location = useLocation();

    const {isLoading, isError, refetch, data} = useQuery({
        queryKey: ["updateDriver"],
        queryFn: () => {
            return api( "api/BusStop/GetById?id=" + location.state.Id)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    return data
                })
                .catch(error => {
                    // Handle errors here
                    console.error('There was a problem with the fetch operation:', error);
                });
        },
        enabled: !!location.state.Id,
    })

    const onSubmitAdd = (data) => {
        api( "api/BusStop", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                navigate(location.state.from)
            })
            .catch(error => {
                console.error("There was a problem with the fetch operation:", error);
            });
    };
    const onSubmitUpdate = (data) => {
        api( "api/BusStop?id=" + location.state.Id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                navigate(location.state.from)
            })
            .catch(error => {
                console.error("There was a problem with the fetch operation:", error);
            });
    };
    return (
        <FormProvider {...addUpdateBusStopForm}>
            <div className={"flex flex-col h-full "}>
                <div className={"w-full h-fit mb-6"}>
                    <BiArrowBack className={"text-4xl cursor-pointer "} onClick={() => {
                        navigate(location.state.from)
                    }}/>
                </div>

                <div className={"h-full w-full flex justify-center items-center mt-8"}>
                    <form onSubmit={handleSubmit(location.state.Id ? onSubmitUpdate : onSubmitAdd)}>
                        <div className={"flex flex-col lg:flex-row justify-center mb-12 lg:mb-0 lg:gap-24 w-full mt-4"}>
                            <div className={"flex flex-col gap-6 justify-center items-center w-[300px] h-fit"}>
                                <InputField name={"name"} label={"Name"}
                                            defaultValue={location.state.Id && data?.name}/>
                                <InputField name={"city"} label={"City"}
                                            defaultValue={location.state.Id && data?.city}/>
                                <InputField name={"country"} label={"Country"}
                                            defaultValue={location.state.Id && data?.country}/>
                                <InputField name={"address"} label={"Address"}
                                            defaultValue={location.state.Id && data?.address}/>
                            </div>
                        </div>
                        <button type="submit"
                                className={"h-full btn btn-primary w-full flex text-white mt-6 mb-12"}>
                            {location.state.Id ? "Update" : "Add"}
                        </button>
                    </form>
                </div>
            </div>
        </FormProvider>
    );
}

export default AddAndUpdateBusStop;