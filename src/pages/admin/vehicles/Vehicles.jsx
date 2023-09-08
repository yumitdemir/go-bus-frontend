import React, {useEffect, useState} from 'react';
import SectionTitle from "../../../components/ui/SectionTitle.jsx";
import TableMapper from "../../../components/tableMapper/TableMapper.jsx";
import SearchInput from "../../../components/SearchInput.jsx";
import TablePaggination from "../../../components/tablePaggination/TablePaggination.jsx";
import {useSearchParams} from "react-router-dom";
import {AiOutlinePlus} from "react-icons/ai";
import {useQuery} from "@tanstack/react-query";
import {BASE_URL} from "/config.js";
import PageSizeDropDown from "./components/PageSizeDropDown.jsx";

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
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(999);
    const [searchParams, setSearchParams] = useSearchParams();
    const [tableData, setTableData] = useState([]);

    const {isLoading, isError, refetch} = useQuery({
        queryKey: [searchParams.get("page"), searchParams.get("pageSize"), searchParams.get("filterQuery")],
        queryFn: () => {
            return fetch(BASE_URL + 'api/Buses?' + searchParams.toString())
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    setLastPage(data.biggestPageNumber)
                    setTableData(data.buses)
                    return data
                })
                .catch(error => {
                    // Handle errors here
                    console.error('There was a problem with the fetch operation:', error);
                });
        }
    })

    const deleteHandler = (id) => {
        console.log(id)

        fetch(BASE_URL + 'api/Buses', {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(id),
        })
            .then(response => {
                console.log(response)
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data)
                refetch()
            })
            .catch(error => {
                // Handle errors here
                console.error('There was a problem with the fetch operation:', error);
            });
    };

    return (
        <div className={"w-full flex flex-col gap-4"}>
            <SectionTitle>Vehicles</SectionTitle>
            <div className={"flex flex-col gap-4"}>
                <div className={"flex justify-between items-center"}>
                    <PageSizeDropDown setCurrentPage={setCurrentPage}/>
                    <SearchInput setCurrentPage={setCurrentPage}/>
                </div>
                <button className={"self-end btn btn-primary text-white  w-fit"}>Add Vehicle <AiOutlinePlus
                    className={"text-lg"}/></button>
            </div>
            {isLoading ? <span className=" self-center loading loading-spinner loading-lg"></span> :
                <TableMapper refetch={refetch} deleteHanlder={deleteHandler} headers={headers} rows={tableData}
                             containerClassName={"mx-auto"} showActions={true}/>}
            {isError ? <p className={"text-center text-error"}>Couldn't load data </p> : undefined}
            {!isLoading && !isError ?
                <TablePaggination currentPage={currentPage} setCurrentPage={setCurrentPage}
                                  lastPage={lastPage}/> : undefined}

        </div>
    );
}

export default Vehicles;