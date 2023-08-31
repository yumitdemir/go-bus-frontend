import React, {useState} from 'react';
import BookingFormSection from "./BookingFormSection.jsx";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'


function Contact(props) {
    const [value, setValue] = useState()
    return (
        <BookingFormSection title={"Contact"} number={"4"}>
            <div className={"flex gap-2"}>
                <div className={"w-1/2 flex-col"}>
                    <p className={"text-neutral-content"}>Email (required)</p>
                    <input type="email" className={"w-full border border-neutral-content px-3 py-1  rounded-md hover:bg-neutral-content-hover outline-primary"}/>
                </div>
                <div className={"w-1/2 flex-col"}>
                    <p className={"text-neutral-content"}>Email (required)</p>
                    <PhoneInput
                        inputStyle={{borderColor:"#8b8b8b",width:"100%"}}
                        buttonStyle={{borderColor:"#8b8b8b"}}
                        country={'us'}
                        value={value}
                        onChange={setValue}
                    />
                </div>
            </div>
        </BookingFormSection>

    );
}

export default Contact;