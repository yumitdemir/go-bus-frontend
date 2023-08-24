import React from 'react';

function CheckBoxTripType({checked,label,formOptions,value}) {
    return (
        <div className="inline-flex items-center mb-2">
            <label
                className="relative flex cursor-pointer items-center rounded-full p-3"
                data-ripple-dark="true"
            >
                <input
                    id={label}
                    defaultChecked={checked ? checked:false}
                    value={value}
                    name="type"
                    type="radio"
                    {...formOptions}
                    className="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-full border-2 border-gray-600 text-[#082967] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#082967] before:opacity-0 before:transition-opacity checked:border-[#082967] checked:before:bg-[#082967] hover:before:opacity-10"
                />
                <div
                    className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-[#082967] opacity-0 transition-opacity peer-checked:opacity-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        viewBox="0 0 4 4"
                        fill="currentColor"
                    >
                        <circle data-name="ellipse" cx="14" cy="14" r="4"></circle>
                    </svg>
                </div>
            </label>
            <label
                htmlFor={label}
                className="mt-px cursor-pointer select-none font-light text-gray-700"
            >
                {label}
            </label>
        </div>
    );
}

export default CheckBoxTripType;