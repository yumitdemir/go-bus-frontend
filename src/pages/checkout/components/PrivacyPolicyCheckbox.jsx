import React from 'react';

function PrivacyPolicyCheckbox(props) {
    return (
        <div className="form-control">
            <label className="label cursor-pointer items-start">
                <input type="checkbox" className=" checkbox me-4 checkbox-lg checkbox-secondary border-neutral-content border-2"/>
                <span className="label-text leading-relaxed ">I declare to have read the <span className={"cursor-pointer text-[#2b65e1ff] font-medium"}>Privacy Policy</span> and I agree to the <span className={"cursor-pointer text-[#2b65e1ff] font-medium"}>T&C of Booking</span>  and  <span className={"cursor-pointer text-[#2b65e1ff] font-medium"}>T&C of Carriage</span>.</span>
            </label>
        </div>
    );
}

export default PrivacyPolicyCheckbox;