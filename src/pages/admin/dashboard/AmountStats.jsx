import React from 'react';

function AmountStats(props) {
    return (
        <div className="stats bg-base-100 shadow">
            <div className="stat">
                <div className="stat-title">Amount to be Collected</div>
                <div className="stat-value">$25,600</div>
                <div className="stat-actions">
                    <button className="btn btn-xs">View Bookings</button>
                </div>
            </div>

            <div className="stat">
                <div className="stat-title">Collected Payments</div>
                <div className="stat-value">$5,600</div>
                <div className="stat-actions">
                    <button className="btn btn-xs">View Bookings</button>
                </div>
            </div>
        </div>
    );
}

export default AmountStats;