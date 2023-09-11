import React, {useEffect, useState} from 'react';
import {nanoid} from "nanoid";
import {AiFillDelete} from "react-icons/ai";
import {FiEdit} from "react-icons/fi";
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from "react-icons/md";
import {useSearchParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {BASE_URL} from "../../../config.js";


function TableMapper({headers, rows, containerClassName, showActions, editHandler, deleteHanlder}) {
    const [sortCol, setSortCol] = useState(null);
    const [isAscending, setIsAscending] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();


    const colSortParamHandler = (sortCol, sortOrder) => {
        setSearchParams((prevSearchParams) => {
            const updatedSearchParams = new URLSearchParams(prevSearchParams.toString());
            if (sortCol !== null) {
                updatedSearchParams.set("sortBy", sortCol);
                updatedSearchParams.set("isAscending", sortOrder);
            } else {
                updatedSearchParams.delete("sortBy");
                updatedSearchParams.delete("isAscending");
            }

            updatedSearchParams.set("page", "1");
            return updatedSearchParams;
        });

    };

    useEffect(() => {
        colSortParamHandler(sortCol, isAscending)
    }, [sortCol, isAscending]);

    const filterHandler = (header) => {
        if (header !== sortCol) {
            setSortCol(header)
            setIsAscending(true)
        }


        if (header === sortCol) {
            if (isAscending === true) {
                setIsAscending(false)
            } else if (isAscending === false) {
                setIsAscending(null)
                setSortCol(null)
            }
        }
    };
    if (rows.length === 0) {
        return <p className={"text-3xl text-error text-center w-full"}>Couldn't load any results</p>;
    }
    return (

        <table className={` font-light  table table-zebra text-center `}>
            <thead className={"border-b font-medium text-neutral-content-text uppercase "}>
            <tr className={"px-6 py-4"}>
                {headers.map(header => <th key={nanoid()} className={" px-6 py-4  cursor-pointer"} onClick={() => {
                    filterHandler(header)
                }}><span className={"flex items-center justify-center select-none"}>{header}
                    {sortCol === header ? isAscending === true ?
                        <MdKeyboardArrowDown
                            className={"text-2xl"}/> : <MdKeyboardArrowUp
                            className={"text-2xl"}/> : undefined} </span></th>)}
                {showActions && <th className={" px-6 py-4 select-none"}>Actions</th>}

            </tr>
            </thead>
            <tbody>
            {
                rows ? rows.map(row =>
                    <tr className={"border-b dark:border-neutral-500"} key={nanoid()}>
                        {Object.values(row).map((col, i) => <td className={"whitespace-nowrap px-6 py-4"}
                                                                key={nanoid()}>{col.toString()}</td>)}
                        <td className={"whitespace-nowrap px-6 py-4 flex gap-2 items-center text-xl justify-center"}>
                            {showActions &&
                                <>
                                    <FiEdit className={"cursor-pointer"} onClick={() => {
                                        editHandler(row.id)
                                    }}/>
                                    <AiFillDelete className={"cursor-pointer"} onClick={() => {
                                        deleteHanlder(row.id)

                                    }
                                    }/>
                                </>
                            }

                        </td>
                    </tr>
                ) : <p>Couldn't find any result</p>
            }

            </tbody>
        </table>

    );
}

export default TableMapper;