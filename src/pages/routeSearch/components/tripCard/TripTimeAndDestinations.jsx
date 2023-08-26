import React from 'react';

function TripTimeAndDestinations({className,departureTime,arrivalTime,departureLocation,arrivalLocation,tripDuration}) {
    return (
        <div className={`w-full md:w-[91%] h-fit flex flex-col ${className}`}>
            <div className={"flex"}>
                <div className={"w-[60%] flex"}>
                    <div className={"w-fit "}>
                        <p className={"font-bold text-lg whitespace-nowrap flex-nowrap"}>1.40 pm</p>
                    </div>
                    <div className="relative w-full mx-2">
                        <div className="absolute inset-0 flex items-center">
                            <div className="flex-1 h-px bg-neutral-content-light"></div>
                            <p className="mx-2 text-center text-sm md:text-lg text-neutral-content">6:10 hrs</p>
                            <div className="flex-1 h-px bg-neutral-content-light"></div>
                        </div>
                    </div>
                </div>
                <div className={"w-[40%] flex items-center"}>
                    <p className={"font-bold text-lg"}>1.40 pm</p>
                </div>
            </div>
            <div className={"flex text-sm md:text-lg  flex-nowrap"}>
                <div className={"w-[60%]"}>
                    <p>Cosenza (Autostazione)</p>
                </div>
                <div className={"w-[40%]"}>
                    <p>Rome Tiburtina Bus station</p>
                </div>
            </div>
        </div>);
}

export default TripTimeAndDestinations;