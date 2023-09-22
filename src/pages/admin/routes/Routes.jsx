import React, {useEffect, useState} from 'react';
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
    "Route Name",
    "Duration Min.",
    "Stops",
]

function Routes(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate()
    const [restructuredRoutes, setRestructuredRoutes] = useState([]);
    const {isLoading, isError, refetch, data} = useQuery({
        queryKey: ["getRoutes"],
        queryFn: () => {
            return fetch(BASE_URL + 'api/Route?' + searchParams.toString())
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }

                    return response.json();
                })
                .then(data => {
                    let restructuredRoutes = data.routes?.map(route => {
                        let totalDuration = route.routeSegments.reduce((total, segment) => {
                            let durationParts = segment.duration.split(':').map(part => parseInt(part));
                            let durationInMinutes = durationParts[0] * 60 + durationParts[1] + durationParts[2] / 60;
                            return total + durationInMinutes;
                        }, 0);
                        console.log(data)
                        return {
                            id:route.id,
                            routeName: route.routeName,
                            Duration: totalDuration,
                            busstopCount: route.routeSegments?.length + 1
                        };
                    });
                    setRestructuredRoutes(restructuredRoutes);

                    return data;
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
        fetch(BASE_URL + 'api/Route/' + id, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        })
            .then(response => {
                console.log(response)
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                refetch()
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    };

    const editHandler = (id) => {
        navigate("/admin/update-busStop", {state: {Id: id, from: window.location.pathname}})
    }

    return (
        <div className={"w-full flex flex-col gap-4"}>
            <SectionTitle>Routes</SectionTitle>
            <div className={"flex flex-col gap-4"}>
                <div className={"flex justify-between items-center"}>
                    <PageSizeDropDown/>
                    <SearchInput/>
                </div>
                <Link to={"/admin/add-route"} state={{from: window.location.pathname}}
                      className={"self-end btn btn-primary text-white  w-fit"}>Add Terminal/Stop <AiOutlinePlus
                    className={"text-lg"}/></Link>
            </div>
            {isLoading ? <span className=" self-center loading loading-spinner loading-lg"></span> :
                <div className={"overflow-x-auto overflow-y-auto h-[60vh]"}>
                    <TableMapper
                        editHandler={editHandler}
                        deleteHanlder={deleteHandler}
                        headers={headers}
                        rows={restructuredRoutes}
                        containerClassName={"mx-auto"}
                        showActions={true}/>
                </div>}
            {isError ? <p className={"text-center text-error"}>Couldn't load data </p> : undefined}
            {!isLoading && !isError ?
                <TablePaggination lastPage={data.biggestPageNumber}/> : undefined}
        </div>
    );
}


export default Routes;