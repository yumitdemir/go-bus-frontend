import React from 'react';
import {Controller, useFormContext} from "react-hook-form";
import Select from "react-select";

function TimeOfTheDaySelector({name,label}) {
    const {formState: {errors}, control} = useFormContext();

    let times = [];
    for(let i=0; i<24; i++){
        for(let j=0; j<60; j++){
            let hour = i < 10 ? '0' + i : i;
            let minute = j < 10 ? '0' + j : j;
            let time = `${hour}:${minute}`;
            times.push({label: time, value: time});
        }
    }


    return (
        <div className={"flex flex-col gap-1 w-full"}>
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
                        options={times}
                        onChange={value => field.onChange(value)}
                        onBlur={field.onBlur}
                    />
                )}
            />
            {errors[name] && <p className={"text-error text-sm"}>*This field is required</p>}
        </div>
    );
}

export default TimeOfTheDaySelector;