import React from 'react';
import {BiSolidDownload} from "react-icons/bi";
import {HiOutlineDocumentText} from "react-icons/hi";
import {useQuery} from "@tanstack/react-query";

function DownloadFilesSectionManageBookings(props) {
    const {data, isLoading} = useQuery(['getBooking']);

    return (
        <div className={"flex gap-3 mt-6 self-center"}>

            <button className={`btn btn-primary normal-case text-white  ${data.booking.status === 2 && "btn-disabled"}`}><BiSolidDownload
                className={"text-lg"}/> Download Ticket
            </button>
            <button className={`btn btn-outline btn-neutral normal-case  ${data.booking.status === 2 && "btn-disabled"}`}><HiOutlineDocumentText
                className={"text-lg"}/> Invoice
            </button>
        </div>
    );
}

export default DownloadFilesSectionManageBookings;