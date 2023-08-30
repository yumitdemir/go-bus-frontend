import React from 'react';

function DestinationSummary(props) {
    return (
        <div className={"flex flex-col gap-2 border border-neutral-content-light rounded-md p-4 "}>
            <p className={"font-bold"}>Mon, Sep 11</p>
            <div className={"flex gap-9"}>
                <div className={"flex flex-col justify-between gap-2"}>
                    <p>07:30 AM</p>
                    <p>01:40 PM</p>
                </div>
                <div className={"flex flex-col gap-1"}>
                    <p>Cosenza (Autostazione)</p>
                    <p className={"text-neutral-content"}>Direct Trip</p>
                    <p>Rome Tiburtina Bus station</p>
                </div>
            </div>
        </div>
    );
}

export default DestinationSummary;