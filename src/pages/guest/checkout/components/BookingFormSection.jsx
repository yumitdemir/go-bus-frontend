import React from 'react';

function BookingFormSection({title,number,children}) {
    return (
        <div  className={"flex flex-col border border-neutral-content-light p-6 rounded-md "}>
            <div className={"flex gap-3 mb-5"}>
                <p className={"bg-primary px-2 font-medium w-fit text-white text-xl rounded-md"}>{number}</p>
                <p className={"text-xl font-medium"}>{title}</p>
            </div>
            {children}
        </div>
    );
}

export default BookingFormSection;