import React from 'react';
import { useFormContext } from "react-hook-form";
import { nanoid } from "nanoid";

function SelectInputField({ options, label, name, required, otherOptions, defaultValue }) {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className={"flex flex-col gap-1 w-full"}>
            <label htmlFor="WiFiAvailable">{label}</label>
            <select
                className="select select-bordered w-full max-w-xs"
                name={name} {...register(name, { required: required ? required : true, ...otherOptions })}
                defaultValue={""}
            >
                <option value="" disabled>Select Option</option>
                {options.map(option => <option key={nanoid()} selected={defaultValue === option.value} value={option.value}>{option.content}</option>)}
            </select>
            {errors[name] &&
                <p className={"text-error text-sm"}>*This field is required</p>}
        </div>
    );
}

export default SelectInputField;
