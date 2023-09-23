import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
    MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight
} from "react-icons/md";

function TablePaggination({ lastPage}) {
    const [searchParams, setSearchParams] = useSearchParams();
    let currentPage = searchParams.get("page") != null ? +searchParams.get("page"): 1;
    const pageParamHandler = (page) => {
        setSearchParams((prevSearchParams) => {
            const updatedSearchParams = new URLSearchParams(prevSearchParams.toString());
            updatedSearchParams.set("page", page);
            return updatedSearchParams;
        });
    };
    const navigateFirstPage = () => {
        pageParamHandler(1)
    };
    const nextPage = () => {
        if (currentPage < lastPage) {
            pageParamHandler(currentPage + 1)
        }
    };
    const prevPage = () => {
        if (currentPage > 1) {
            pageParamHandler(currentPage - 1)
        }
    };
    const navigateLastPage = () => {
        if (currentPage < lastPage) {
            pageParamHandler(lastPage)

        }
    };


    if (lastPage === 0) {
        return undefined;
    }

    return (
        <div className={"flex gap-4 items-center justify-center mt-4"}>
            <button
                className="border-none text-2xl px-2 py-2  rounded-full font-medium hover:bg-neutral hover:text-white"
                onClick={navigateFirstPage}
            >
                <MdOutlineKeyboardDoubleArrowLeft/>
            </button>
            <button
                className="border-none text-2xl  px-2 py-2  rounded-full font-medium hover:bg-neutral hover:text-white"
                disabled={currentPage === 1}
                onClick={prevPage}
            >
                <MdOutlineKeyboardArrowLeft/>
            </button>
            <span className="text-sm text-gray-700 px-1 py-2 flex justify-center">
                {currentPage} of {lastPage}
            </span>
            <button
                className="border-none text-2xl  px-2 py-2  rounded-full font-medium hover:bg-neutral hover:text-white"
                disabled={currentPage === lastPage}
                onClick={nextPage}
            >
                <MdOutlineKeyboardArrowRight/>
            </button>
            <button
                className="border-none text-2xl px-2 py-2  rounded-full font-medium hover:bg-neutral hover:text-white"
                onClick={navigateLastPage}
            >
                <MdOutlineKeyboardDoubleArrowRight/>
            </button>
        </div>
    );
}

export default TablePaggination;