import React from 'react';
import {Controller, useFormContext} from "react-hook-form";
import Select from "react-select";

const options = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'},
];

function BusStopSelector({name}) {
    const {formState: {errors}, control} = useFormContext();

    return (
        <div>
            <Controller
                control={control}
                name={name}
                rules={{ required: true }}
                render={({field}) => (
                    <Select
                        {...field}
                        options={options}
                        onChange={value => field.onChange(value)}
                        onBlur={field.onBlur}
                    />
                )}
            />
            {errors[name] && <p className={"text-error text-sm"}>*This field is required</p>}
        </div>
    );
}

export default BusStopSelector;