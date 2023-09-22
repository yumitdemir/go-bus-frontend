import React, { useEffect } from 'react';
import { useFormContext } from "react-hook-form";

function InputField({ name, label, required, otherOptions, containerClassName, defaultValue, type }) {
    const { register, formState: { errors }, setValue } = useFormContext();

    useEffect(() => {
        if (defaultValue) {
            setValue(name, defaultValue);
        }
    }, [defaultValue]);

    return (
        <div className={containerClassName + " flex flex-col gap-1 w-full"}>
            <label htmlFor={name}>{label}</label>
            <input
                type={type ? type : "text"}
                defaultValue={defaultValue}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                name={name} {...register(name, { required: required ? required : true, ...otherOptions })}
            />
            {errors[name] && <p className={"text-error text-sm"}>*This field is required</p>}
        </div>
    );
}

export default InputField;
