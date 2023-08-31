import React, {useState} from 'react';
import PaymentAccordionSection from "./PaymentAccordionSection.jsx";

function GooglePaySection(props) {
    const [isChecked, setChecked] = useState(false);
    return (
        <div className="collapse  join-item border border-base-300">
            <input type="radio" id={"GPAy"} name="my-accordion-4"/>
            <div className="collapse-title text-xl font-medium">
                <label htmlFor="GPAy" className={"cursor-pointer"}>Test</label>
            </div>
        </div>
    );
}

export default GooglePaySection;