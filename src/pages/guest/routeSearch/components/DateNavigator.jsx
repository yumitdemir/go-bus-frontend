import React from 'react';
import ContainerSearchDisplay from "./ContainerSearchDisplay.jsx";
import {useSearchParams} from "react-router-dom";

function DateNavigator(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    let departureDate = searchParams.get("departureDate");

    const dateParamHandler = (departureDate, n) => {
        let date = new Date(departureDate);
        date.setDate(date.getDate() + n);
        let formattedDate = date.toISOString().slice(0, 10);
        console.log(formattedDate);

        setSearchParams((prevSearchParams) => {
            const updatedSearchParams = new URLSearchParams(prevSearchParams.toString());
            updatedSearchParams.set("departureDate", formattedDate);
            return updatedSearchParams;
        });
    };

    function reformatNavigationDate(dateStr, n = 0) {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        let date = new Date(dateStr);
        date.setDate(date.getDate() + n);

        let day = days[date.getDay()];
        let month = months[date.getMonth()];
        let dayOfMonth = date.getDate();

        return `${day}, ${month} ${dayOfMonth}`;
    }


    return (
        <div className={"h-[44px] flex"}>
            <div
                onClick={() => {
                    dateParamHandler(departureDate, -1)
                }}
                className={"w-[32%] border border-neutral-content rounded-s-md flex justify-center items-center cursor-pointer select-none"}>
                <p>{reformatNavigationDate(departureDate, -1)}</p>
            </div>
            <div
                className={"w-[36%] border border-neutral-content  border-b-4 border-b-primary   flex justify-center items-center select-none"}>
                <p>{reformatNavigationDate(departureDate)}</p>
            </div>
            <div
                onClick={() => {
                    dateParamHandler(departureDate, 1)
                }}
                className={"w-[32%] border border-neutral-content rounded-e-md flex justify-center items-center cursor-pointer select-none"}>
                <p>{reformatNavigationDate(departureDate, 1)}</p>
            </div>
        </div>
    );
}

export default DateNavigator;