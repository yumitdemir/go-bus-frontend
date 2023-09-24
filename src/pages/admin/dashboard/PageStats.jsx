import React from 'react';
import HeartIcon  from '@heroicons/react/24/outline/HeartIcon'
import BoltIcon  from '@heroicons/react/24/outline/BoltIcon'
import {MdAttachMoney} from "react-icons/md";


function PageStats(props){
    return(
        <div className="stats bg-base-100 shadow">

            <div className="stat">
                <div className="stat-figure invisible md:visible">
                    <MdAttachMoney className='w-8 h-8'/>
                </div>
                <div className="stat-title">Total Revenue</div>
                <div className="stat-value">25.6K</div>
                <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
                <div className="stat-figure invisible md:visible">
                    <BoltIcon className='w-8 h-8'/>
                </div>
                <div className="stat-title">Page Traffic</div>
                <div className="stat-value">2.6M</div>
                <div className="stat-desc">14% more than last month</div>
            </div>
        </div>
    )
}

export default PageStats;