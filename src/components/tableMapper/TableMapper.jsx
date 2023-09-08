import React, {useEffect, useState} from 'react';
import {nanoid} from "nanoid";
import {AiFillDelete} from "react-icons/ai";
import {FiEdit} from "react-icons/fi";
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from "react-icons/md";
import {useSearchParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {BASE_URL} from "../../../config.js";


function TableMapper({headers, rows, containerClassName, showActions, editHandler, deleteHanlder,refetch}) {
    const [sortCol, setSortCol] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();


    const colSortParamHandler = (sortCol, sortOrder) => {
        setSearchParams((prevSearchParams) => {
            const updatedSearchParams = new URLSearchParams(prevSearchParams.toString());
            if (sortCol !== null) {
                updatedSearchParams.set("sort", sortCol);
                updatedSearchParams.set("order", sortOrder);
            } else {
                updatedSearchParams.delete("sort");
                updatedSearchParams.delete("order");
            }

            updatedSearchParams.set("page", "1");
            return updatedSearchParams;
        });

    };

    useEffect(() => {
        colSortParamHandler(sortCol, sortOrder)
    }, [sortCol, sortOrder]);

    const filterHandler = (header) => {
        if (header !== sortCol) {
            setSortCol(header)
            setSortOrder("ascending")
        }


        if (header === sortCol) {
            if (sortOrder === "ascending") {
                setSortOrder("descending")
            } else if (sortOrder === "descending") {
                setSortOrder(null)
                setSortCol(null)
            }
        }
    };
    return (
        <table className={` font-light  table table-zebra text-center `}>
            <thead className={"border-b font-medium text-neutral-content-text uppercase "}>
            <tr className={"px-6 py-4"}>
                {headers.map(header => <th key={nanoid()} className={" px-6 py-4  cursor-pointer"} onClick={() => {
                    filterHandler(header)
                }}><span className={"flex items-center justify-center select-none"}>{header}
                    {sortCol === header ? sortOrder === "ascending" ?
                        <MdKeyboardArrowDown
                            className={"text-2xl"}/> : <MdKeyboardArrowUp
                            className={"text-2xl"}/> : undefined} </span></th>)}
                {showActions && <th className={" px-6 py-4 select-none"}>Actions</th>}

            </tr>
            </thead>
            <tbody>
            {rows.map(row =>
                <tr className={"border-b dark:border-neutral-500"} key={nanoid()}>
                    {Object.values(row).map((col, i) => <td className={"whitespace-nowrap px-6 py-4"}
                                                            key={nanoid()}>{col.toString()}</td>)}
                    <td className={"whitespace-nowrap px-6 py-4 flex gap-2 items-center text-xl justify-center"}>
                        {showActions &&
                            <>
                                <FiEdit className={"cursor-pointer"} onClick={editHandler}/>
                                <AiFillDelete className={"cursor-pointer"} onClick={() => {
                                    deleteHanlder(row.id)

                                }
                                }/>
                            </>
                        }

                    </td>
                </tr>
            )}
            </tbody>
        </table>

    );
}

export default TableMapper;