import React, {useEffect} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import RouteAndDateSelector from "../../../components/routeAndDateSeclector/RouteAndDateSelector.jsx";
import Container from "../../../components/ui/Container.jsx";
import RouteSearchDisplay from "./components/RouteSearchDisplay.jsx";
import {FormProvider, useForm} from "react-hook-form";
import {useQuery} from "@tanstack/react-query";
import {BASE_URL} from "../../../../config.js";

function RouteSearch(props) {
    const {id} = useParams();
    const routeSearch = useForm();
    const [searchParams, setSearchParams] = useSearchParams();

    const {isLoading, isError, refetch, data} = useQuery({
        queryKey: ["getTrips"],
        queryFn: () => {
            return fetch(BASE_URL + 'api/Trip/GetTripsByFilters?' + searchParams.toString())
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
                    console.error('There was a problem with the fetch operation:', error);
                });
        }
    })
    useEffect(() => {
        refetch()
    }, [searchParams]);
    return (
        <div>
            <FormProvider {...routeSearch}>


                <Container className={"mt-6 mb-10"}>
                    <RouteAndDateSelector/>
                    {isLoading ? <div className={"flex justify-center items-center h-60"}>
                        <span className="loading  loading-spinner h-12 w-12"></span>
                    </div> : <RouteSearchDisplay/>
                    }
                </Container>
            </FormProvider>
        </div>
    );
}

export default RouteSearch;