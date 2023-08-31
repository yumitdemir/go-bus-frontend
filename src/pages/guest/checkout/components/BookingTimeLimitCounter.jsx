import React, {useEffect, useState} from 'react';
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

function BookingTimeLimitCounter(props) {
    let totalDuration = 600
    const [timeRemaining, setTimeRemaining] = useState(totalDuration);
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();
    useEffect(() => {
        if (timeRemaining === 0) {
            return;
        }

        const interval = setInterval(() => {
            setTimeRemaining(prevTime => prevTime - 1);
        }, 1000);

        setMinutes(Math.floor(timeRemaining / 60));
        setSeconds(timeRemaining % 60);

        return () => {
            clearInterval(interval);
        };
    }, [timeRemaining]);


    const progressBarValue = (timeRemaining / totalDuration) * 100

    return (
        <div className={"flex gap-3 items-center  bg-white p-3 border border-neutral-content-light rounded-md"}>

            <div className={"w-6 h-6"}>
                <CircularProgressbar value={progressBarValue} strokeWidth={16} styles={buildStyles({
                    pathColor: `#082967`,
                })}/>
            </div>
            <span className="countdown font-bold ">
                    <span style={{"--value": minutes}}></span>:
                    <span style={{"--value": seconds}}></span>
                </span>

        </div>
    );
}

export default BookingTimeLimitCounter;