import React from 'react';
import {FormProvider, useForm} from "react-hook-form";
import {BASE_URL} from "../../../../config.js";
import {useLocation, useNavigate} from "react-router-dom";
import {BiArrowBack} from "react-icons/bi";
import InputField from "../../../components/ui/InputField.jsx";
import SelectInputField from "../../../components/ui/SelectInputField.jsx";
import {useQuery} from "@tanstack/react-query";
import api from "../../../Api.js";

function AddAndUpdateVehicle(props) {
    const addVehicleForm = useForm();
    const {register, handleSubmit, formState: {errors}} = addVehicleForm;
    const navigate = useNavigate();
    const location = useLocation();
    const {isLoading, isError, refetch, data} = useQuery({
        queryKey: ["updateVehicle"],
        queryFn: () => {
            return api("api/Buses/GetById?id=" + location.state.Id)
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
        api("api/Buses", {
            method: 'POST',
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
    const onSubmitUpdate = (data) => {
        api("api/Buses?id=" + location.state.Id, {
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
        <FormProvider {...addVehicleForm}>
            <div className={"flex flex-col h-full lg:overflow-y-hidden"}>
                <div className={"w-full h-fit mb-6"}>
                    <BiArrowBack className={"text-4xl cursor-pointer "} onClick={() => {
                        navigate(location.state.from)
                    }}/>
                </div>

                <div className={"h-full w-full flex justify-center items-center"}>
                    <form onSubmit={handleSubmit(location.state.Id ? onSubmitUpdate : onSubmitAdd)}>
                        <div className={"flex flex-col lg:flex-row justify-center mb-12 lg:mb-0 lg:gap-24 w-full mt-4"}>
                            <div className={"flex flex-col gap-6 justify-center items-center w-[300px] h-fit"}>
                                <InputField name={"Brand"} label={"Brand"}
                                            defaultValue={location.state.Id && data?.brand}/>
                                <InputField name={"Model"} label={"Model"}
                                            defaultValue={location.state.Id && data?.model}/>
                                <InputField name={"Capacity"} type={"number"} label={"Capacity"}
                                            defaultValue={location.state.Id && data?.capacity}/>
                                <InputField name={"LastMaintenanceDate"} type={"datetime-local"}
                                            label={"Last Maintenance"}
                                            defaultValue={location.state.Id && data?.lastMaintenanceDate}/>
                            </div>
                            <div className={"flex flex-col gap-6 justify-center items-center w-[300px] h-fit"}>
                                <InputField name={"PlateNumber"} label={"Plate Number"}
                                            defaultValue={location.state.Id && data?.plateNumber}/>
                                <SelectInputField label={"WiFi Available"} name={"WiFiAvailable"}
                                                  defaultValue={location.state.Id && data?.wiFiAvailable.toString()}
                                                  options={[
                                                      {value: "true", content: "Yes"},
                                                      {value: "false", content: "No"}
                                                  ]}/>
                                <SelectInputField label={"Restroom Available"} name={"RestroomAvailable"}
                                                  defaultValue={location.state.Id && data?.restroomAvailable.toString()}
                                                  options={[
                                                      {value: "true", content: "Yes"},
                                                      {value: "false", content: "No"}
                                                  ]}/>

                                <button type="submit"
                                        className={"h-full btn btn-primary w-full flex text-white mt-6"}>
                                    {location.state.Id ? "Update" : "Add"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </FormProvider>
    );
}

export default AddAndUpdateVehicle;