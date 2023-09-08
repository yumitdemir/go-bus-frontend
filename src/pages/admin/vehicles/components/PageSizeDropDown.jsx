import React from 'react';
import {useSearchParams} from "react-router-dom";

function PageSizeDropDown({setCurrentPage}) {
    const [searchParams, setSearchParams] = useSearchParams();

    const pageSizeParamHandler = (e) => {
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
        <div className={"flex gap-1 items-center"}>
            <p className={"text-sm"}>Show: </p>
            <select name={"pageSize"} defaultValue={"10"} className="select select-bordered w-fit max-w-xs" onChange={pageSizeParamHandler}>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
        </div>
    );
}

export default PageSizeDropDown;