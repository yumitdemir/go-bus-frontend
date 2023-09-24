import React, {useEffect, useRef} from 'react';
import TitleCard from "./TitleCard.jsx";
import {Bar} from "react-chartjs-2";

function BarChart(props) {
    const chartRef = useRef(null);

    useEffect(() => {
        return () => {
            if (chartRef && chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                label: '2022',
                data: labels.map(() => { return Math.random() * 1000 + 500 }),
                backgroundColor: 'rgba(255, 99, 132, 1)',
            },
            {
                label: '2023',
                data: labels.map(() => { return Math.random() * 1000 + 500 }),
                backgroundColor: 'rgba(53, 162, 235, 1)',
            },
        ],
    };

    return (
        <div>
            <TitleCard title={"Revenue comparison YOY(Year-Over-Year) "}>
                <Bar ref={chartRef} options={options} data={data} />
            </TitleCard>
        </div>
    );
}

export default BarChart;