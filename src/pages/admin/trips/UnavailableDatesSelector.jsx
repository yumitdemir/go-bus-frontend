import React, {useState} from 'react';
import DatePicker from "react-multi-date-picker";
import {Controller, useFormContext} from "react-hook-form";

function UnavailableDatesSelector({name,label}) {
    const {formState: {errors}, control} = useFormContext();

    return (
        <div className={"flex flex-col gap-1 w-full"}>
            <label htmlFor={name}>{label}</label>
            <Controller
                control={control}
                name={name}
                rules={{required: true}}
                render={({field}) => (
                    <DatePicker
                        {...field}
                        inputClass="input input-bordered w-full h-fit"
                        containerClassName={"w-full"}
                        multiple
                        format="YYYY-MM-DD"
                        placeholder="Select dates..."
                    />)}
            />
            {errors[name] && <p className={"text-error text-sm"}>*This field is required</p>}
        </div>
    );
}

export default UnavailableDatesSelector;