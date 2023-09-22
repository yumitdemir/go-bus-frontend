import React from 'react';
import {Controller, useFormContext} from "react-hook-form";
import {useQuery} from "@tanstack/react-query";
import {BASE_URL} from "../../../../config.js";
import Select from "react-select";

function DaysOfTheWeekSelector({name,label}) {
    const {formState: {errors}, control} = useFormContext();

    const data = [
        { value:"Monday", label:"Monday"},
        { value:"Tuesday", label:"Tuesday"},
        { value:"Wednesday", label:"Wednesday"},
        { value:"Thursday", label:"Thursday"},
        { value:"Friday", label:"Friday"},
        { value:"Saturday", label:"Saturday"},
        { value:"Sunday", label:"Sunday"},
    ]
    return (
        <div className={"flex flex-col gap-1 w-full "}>
            <label htmlFor={name}>{label}</label>
            <Controller
                control={control}
                name={name}
                rules={{ required: true }}
                render={({field}) => (
                    <Select
                        {...field}
                        isMulti
                        className="basic-multi-select input w-full max-w-xs px-0 h-fit"
                        options={data}
                        onChange={value => field.onChange(value)}
                        onBlur={field.onBlur}
                    />
                )}
            />
            {errors[name] && <p className={"text-error text-sm"}>*This field is required</p>}
        </div>
    );
}


export default DaysOfTheWeekSelector;