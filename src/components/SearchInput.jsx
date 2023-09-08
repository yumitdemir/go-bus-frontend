import React, {useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {HiMiniMagnifyingGlass} from "react-icons/hi2";
import {QueryClient} from "@tanstack/react-query";

function SearchInput({setCurrentPage}) {
    const [searchParams, setSearchParams] = useSearchParams();

    const inputFieldParamHandler = (e) => {
        const nameInput = e.target.name;
        setSearchParams((prevSearchParams) => {
            const updatedSearchParams = new URLSearchParams(prevSearchParams.toString());
            if (e.target.value === "") {
                updatedSearchParams.delete(nameInput);
            } else {
                updatedSearchParams.set(nameInput, e.target.value);
            }
            updatedSearchParams.set("page", "1");
            setCurrentPage(1)
            return updatedSearchParams;
        });
    };
    return (
        <div className="form-control w-full max-w-xs relative">
            <HiMiniMagnifyingGlass className={"absolute top-0 bottom-0 w-4 h-4 my-auto text-gray-400 left-3"}/>
            <input name={"filterQuery"} value={searchParams.get("filterQuery") === null ? "" : searchParams.get("filterQuery")} type="text"
                   placeholder="Search"
                   className={" py-1 pl-12 pr-2 text-gray-700 text-sm border border-gray-300 rounded-lg bg-gray-50 input input-bordered w-full max-w-xs"}
                   onChange={inputFieldParamHandler}/>
        </div>
    );
}

export default SearchInput;