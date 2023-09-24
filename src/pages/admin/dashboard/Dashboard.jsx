import React from 'react';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import DashboardStats from "./DashboardStats.jsx";
import LineChart from "./LineChart.jsx";
import BarChart from "./BarChart.jsx";
import AmountStats from "./AmountStats.jsx";
import PageStats from "./PageStats.jsx";
import DoughnutChart from "./DoughnutChart.jsx";
import {CircleStackIcon, CreditCardIcon, UserGroupIcon, UsersIcon} from "@heroicons/react/20/solid/index.js";

Chart.register(CategoryScale);

const statsData = [
    {title : "Bookings", value : "34.7k", icon : <UserGroupIcon className='w-8 h-8'/>, description : "↗︎ 2300 (22%)"},
    {title : "Total Sales", value : "$34,545", icon : <CreditCardIcon className='w-8 h-8'/>, description : "Current month"},
    {title : "Pending Payments", value : "450", icon : <CircleStackIcon className='w-8 h-8'/>, description : "50 in hot leads"},
    {title : "Page Traffic", value : "5.6k", icon : <UsersIcon className='w-8 h-8'/>, description : "↙ 300 (18%)"},
]



function Dashboard(props){

    return(
        <>
            <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    statsData.map((d, k) => {
                        return (
                            <DashboardStats key={k} {...d} colorIndex={k}/>
                        )
                    })
                }
            </div>
            <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
                <LineChart />
                <BarChart />
            </div>
            <div className="grid lg:grid-cols-2 mt-10 grid-cols-1 gap-6">
                <AmountStats />
                <PageStats />
            </div>
            <div className={"w-full justify-center flex"}>
                <div className="w-1/3 ">
                    <DoughnutChart />
                </div>
            </div>
        </>
    )
}


export default Dashboard;
