import React, {useEffect, useState} from 'react';
import SectionTitle from "../../../components/ui/SectionTitle.jsx";
import TableMapper from "../../../components/tableMapper/TableMapper.jsx";
import SearchInput from "../../../components/ui/SearchInput.jsx";
import TablePaggination from "../../../components/tablePaggination/TablePaggination.jsx";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import {AiOutlinePlus} from "react-icons/ai";
import {useQuery} from "@tanstack/react-query";
import {BASE_URL} from "/config.js";
import PageSizeDropDown from "./components/PageSizeDropDown.jsx";
import api from "../../../Api.js";

let headers = [
    "id",
    "brand",
    "model",
    "capacity",
    "Restroom Available",
    "WiFi Available",
    "Last Maintenance",
    "Plate Number",
]

function Vehicles(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate()

    const {isLoading, isError, refetch, data} = useQuery({
        queryKey: ["getVehicles"],
        queryFn: () => {
            return api('api/Buses?' + searchParams.toString())
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
        }
    })
    useEffect(() => {
        refetch()
    }, [searchParams])

    const deleteHandler = (id) => {
        api( 'api/Buses', {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(id),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                refetch()
            })

            .catch(error => {
                // Handle errors here
                console.error('There was a problem with the fetch operation:', error);
            });
    };

    const editHandler = (id) => {
        navigate("/admin/update-vehicle", {state: {Id: id, from: window.location.pathname}})
    }

    return (
        <div className={"w-full flex flex-col gap-4"}>
            <SectionTitle>Vehicles</SectionTitle>
            <div className={"flex flex-col gap-4"}>
                <div className={"flex justify-between items-center"}>
                    <PageSizeDropDown/>
                    <SearchInput/>
                </div>
                <Link to={"/admin/add-vehicle"} state={{from: window.location.pathname}}
                      className={"self-end btn btn-primary text-white  w-fit"}>Add Vehicle <AiOutlinePlus
                    className={"text-lg"}/></Link>
            </div>
            {isLoading ? <span className=" self-center loading loading-spinner loading-lg"></span> :
                <div className={"overflow-x-auto overflow-y-auto h-[60vh]"}>
                    <TableMapper
                        editHandler={editHandler}
                        deleteHanlder={deleteHandler}
                        headers={headers}
                        rows={data?.buses ? data?.buses : []}
                        containerClassName={"mx-auto"}
                        showActions={true}/>
                </div>}
            {isError ? <p className={"text-center text-error"}>Couldn't load data </p> : undefined}
            {!isLoading && !isError ?
                <TablePaggination lastPage={data.biggestPageNumber}/> : undefined}
        </div>
    );
}

export default Vehicles;