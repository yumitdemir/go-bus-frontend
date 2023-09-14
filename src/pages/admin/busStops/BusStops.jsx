import React, {useEffect} from 'react';
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {BASE_URL} from "../../../../config.js";
import SectionTitle from "../../../components/ui/SectionTitle.jsx";
import PageSizeDropDown from "../vehicles/components/PageSizeDropDown.jsx";
import SearchInput from "../../../components/ui/SearchInput.jsx";
import {AiOutlinePlus} from "react-icons/ai";
import TableMapper from "../../../components/tableMapper/TableMapper.jsx";
import TablePaggination from "../../../components/tablePaggination/TablePaggination.jsx";

let headers = [
    "id",
    "Name",
    "City",
    "Country",
    "Address",

]

function BusStops(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate()

    const {isLoading, isError, refetch, data} = useQuery({
        queryKey: ["getBusStops"],
        queryFn: () => {
            return fetch(BASE_URL + 'api/BusStop?' + searchParams.toString())
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
        fetch(BASE_URL + 'api/BusStop', {
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
        navigate("/admin/update-busStop", {state: {Id: id, from: window.location.pathname}})
    }

    return (
        <div className={"w-full flex flex-col gap-4"}>
            <SectionTitle>Bus Terminals/Stops</SectionTitle>
            <div className={"flex flex-col gap-4"}>
                <div className={"flex justify-between items-center"}>
                    <PageSizeDropDown/>
                    <SearchInput/>
                </div>
                <Link to={"/admin/add-busStop"} state={{from: window.location.pathname}}
                      className={"self-end btn btn-primary text-white  w-fit"}>Add Terminal/Stop <AiOutlinePlus
                    className={"text-lg"}/></Link>
            </div>
            {isLoading ? <span className=" self-center loading loading-spinner loading-lg"></span> :
                <div className={"overflow-x-auto overflow-y-auto h-[60vh]"}>
                    <TableMapper
                        editHandler={editHandler}
                        deleteHanlder={deleteHandler}
                        headers={headers}
                        rows={data.busStops}
                        containerClassName={"mx-auto"}
                        showActions={true}/>
                </div>}
            {isError ? <p className={"text-center text-error"}>Couldn't load data </p> : undefined}
            {!isLoading && !isError ?
                <TablePaggination lastPage={data.biggestPageNumber}/> : undefined}
        </div>
    );
}


export default BusStops;