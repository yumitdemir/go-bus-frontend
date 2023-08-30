import React, {useEffect, useRef, useState} from 'react';

function PaymentAccordionSection({children, title,defaultOpen,icon}) {

    return (
        <div className="collapse  join-item border border-base-300">
            <input type="radio"    name="my-accordion-4" checked={defaultOpen}/>
            <div className="collapse-title text-xl font-medium ">
                <div className={"flex gap-3"}>
                    {icon}
                    {title}
                </div>

            </div>
            <div className="collapse-content">
                {children}
            </div>

        </div>
    );
}

export default PaymentAccordionSection;