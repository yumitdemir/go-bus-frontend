import React from 'react';
import BookingFormSection from "./BookingFormSection.jsx";
import PaymentAccordionSection from "./PaymentAccordionSection.jsx";
import GpayIcon from "../../../../assets/payment-icons/google-pay.svg";
import CreditCardIcon from "../../../../assets/payment-icons/credit_card_jcb.svg";
import PayPalIcon from "../../../../assets/payment-icons/paypal.svg";
import CashIcon from "../../../../assets/payment-icons/cash-logo.svg";

function Payment(props) {
    return (
        <BookingFormSection title={"Payment"} number={"5"}>
            <div className="join join-vertical w-full">
                <PaymentAccordionSection title={"Credit card"} icon={<img src={CreditCardIcon} alt="" className={"w-[55px]"}/>} defaultOpen={true} >
                    <p>Test</p>
                </PaymentAccordionSection>
                <PaymentAccordionSection title={"Gpay"} icon={<img src={GpayIcon} alt="" className={"w-[55px]"}/>} >
                    <p>Test</p>
                </PaymentAccordionSection>
                <PaymentAccordionSection title={"PayPal"} icon={<img src={PayPalIcon} className={" w-[55px]"} alt=""/>}>
                    <p>Test</p>
                </PaymentAccordionSection>

                <PaymentAccordionSection title={"Cash"} icon={<img src={CashIcon} className={" w-[55px]"} alt=""/>}>
                    <p>Test</p>
                </PaymentAccordionSection>



            </div>
        </BookingFormSection>
    );
}

export default Payment;