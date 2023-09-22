import React from 'react';
import {useFormContext, Controller} from "react-hook-form";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import BookingFormSection from "./BookingFormSection.jsx";

function Contact(props) {
    const {control, register,formState: { errors }} = useFormContext();

    return (
        <BookingFormSection title={"Contact"} number={"4"}>
            <div className={"flex gap-2"}>
                <div className={"w-1/2 flex-col"}>
                    <p className={"text-neutral-content"}>Email (required)</p>
                    <input {...register("email", {required: true})}
                           type="email"
                           className={"w-full border border-neutral-content px-3 py-1  rounded-md hover:bg-neutral-content-hover outline-primary"}/>
                    {errors.email && <p className={"text-red-700 text-sm"}>This field is required</p>}
                </div>
                <div className={"w-1/2 flex-col"}>
                    <p className={"text-neutral-content"}>Phone Number (required)</p>
                    <Controller
                        name="phone"
                        control={control}
                        rules={{required: true}}
                        render={({field}) => (
                            <PhoneInput
                                {...field}
                                placeholder="Enter phone number"
                                defaultCountry="US"
                                className={"w-full border border-neutral-content px-3 py-1  rounded-md hover:bg-neutral-content-hover outline-primary focus:outline-none"}
                            />
                        )}
                    />
                    {errors.phone && <p className={"text-red-700 text-sm"}>This field is required</p>}

                </div>
            </div>
        </BookingFormSection>
    );
}

export default Contact;
