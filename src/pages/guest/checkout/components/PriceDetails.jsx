import React from 'react';

function PriceDetails(props) {
    return (

        <div className={"flex flex-col gap-3"}>
            <div className={"border-b border-neutral-content-light pb-2 flex justify-between ps-4"}>
                <p >1 Passenger </p>
                <p className={"text-lg font-bold"}>$25.99</p>
            </div>
            <div className={"border-b border-neutral-content-light pb-2 flex justify-between ps-4 "}>
                <p >Service Fee </p>
                <p className={"text-lg font-bold"}>$3.99</p>
            </div>
            <div className={"flex justify-between"}>
                <p className={"text-2xl"}>
                    <span className={"font-bold"}>Total</span> (incl. TAX)
                </p>
                <p className="text-2xl font-bold">
                    $29.98
                </p>
            </div>
        </div>
    );
}

export default PriceDetails;