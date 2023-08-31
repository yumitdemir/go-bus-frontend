import React from 'react';
import {CiDiscount1} from "react-icons/ci";

function AddVoucher(props) {
    return (
        <div className={"mt-1"}>
            <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item hover:bg-neutral-content-hover">
                    <input type="checkbox" name="my-accordion-4" />
                    <div className="collapse-title  flex items-center gap-2 w-fit">
                        <CiDiscount1 className={"text-2xl"}/>
                        <p>Enter Voucher</p>
                    </div>
                    <div className="collapse-content">
                        <div className={"flex gap-3"}>
                            <input type="text" placeholder="Type here" className="input input-bordered border-neutral-content w-full max-w-xs" />
                            <button className={"btn  btn-outline btn-primary "}>Redeem</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AddVoucher;