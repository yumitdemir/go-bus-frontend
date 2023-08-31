import React from 'react';

function TripDetailsManageBooking(props) {
    return (
        <div className={"border border-neutral-content-light rounded-md mt-6 p-[24px] flex flex-col gap-3 "}>
            <div className={'flex justify-between items-center'}>
                <p className={"font-bold text-sm"}>3 Eyl 2023 Paz</p>
                <div className={"border border-neutral-content-light rounded-xl p-1"}>
                    <p>4 days later</p>
                </div>
            </div>
            <div className={"flex gap-6"}>
                <div className={"flex flex-col gap-1"}>
                    <p>
                        00:40
                    </p>
                    <p>
                        07:05
                    </p>
                </div>
                <div className={"flex flex-col gap-1"}>
                    <p>
                        Cosenza (Autostazione) </p>
                    <p>
                        Roma Tiburtina Otobüs Terminali </p>
                </div>
            </div>
        </div>
    );
}

export default TripDetailsManageBooking;