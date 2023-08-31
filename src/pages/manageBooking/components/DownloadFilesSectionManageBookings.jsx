import React from 'react';
import {BiSolidDownload} from "react-icons/bi";
import {HiOutlineDocumentText} from "react-icons/hi";

function DownloadFilesSectionManageBookings(props) {
    return (
        <div className={"flex gap-3 mt-6 self-center"}>
            <button className={"btn btn-primary normal-case text-white"}><BiSolidDownload
                className={"text-lg"}/> Download Ticket
            </button>
            <button className={"btn btn-outline btn-neutral normal-case"}><HiOutlineDocumentText
                className={"text-lg"}/> Invoice
            </button>
        </div>
    );
}

export default DownloadFilesSectionManageBookings;