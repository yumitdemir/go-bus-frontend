import React, {useEffect, useRef, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {HiMiniMagnifyingGlass} from "react-icons/hi2";
import {QueryClient} from "@tanstack/react-query";

function SearchInput(params) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState("");
    const serchQueryHandler = (e) => {
        setSearchQuery(e.target.value)
    };

    const intervalRef = useRef();
    useEffect(() => {
        intervalRef.current = setTimeout(() => {
            console.log("test")
            inputFieldParamHandler(searchQuery)
        }, 600);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, [searchQuery]);
    const inputFieldParamHandler = (searchQuery) => {
        setSearchParams((prevSearchParams) => {
            const updatedSearchParams = new URLSearchParams(prevSearchParams.toString());
            if (searchQuery === "") {
                updatedSearchParams.delete("filterQuery");
            } else {
                updatedSearchParams.set("filterQuery", searchQuery);
            }
            updatedSearchParams.set("page", "1");
            return updatedSearchParams;
        });
    };
    return (
        <div className="form-control w-full max-w-xs relative">
            <HiMiniMagnifyingGlass className={"absolute top-0 bottom-0 w-4 h-4 my-auto text-gray-400 left-3"}/>
            <input name={"filterQuery"}
                   value={searchQuery} type="text"
                   placeholder="Search"
                   className={" py-1 pl-12 pr-2 text-gray-700 text-sm border border-gray-300 rounded-lg bg-gray-50 input input-bordered w-full max-w-xs"}
                   onChange={serchQueryHandler}/>
        </div>
    );
}

export default SearchInput;