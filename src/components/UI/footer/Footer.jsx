import React, {useState} from 'react';
import Links from "./components/Links.jsx";
import Socials from "./components/Socials.jsx";
import Policies from "./components/Policies.jsx";

const footerLinks = [
    {
        title: "Bus Travel",
        links: [
            "All Bus Destinations",
            "Route Map",
            "Bus Travel in the US",
            "Overnight Buses",
            "Business Travel",
            "Get the App",
            "European Services",
            "Discounts and promotions"
        ]
    },
    {
        title: "Discover",
        links: [
            "Events and Festivals",
            "Vacation Ideas",
            "Canada",
            "Germany",
            "Portugal",
            "Poland",
            "Denmark",
        ]
    },
    {
        title: "FlixBus",
        links: [
            "About FlixBus",
            " Greyhound",
            "Jobs",
            "Press Room",
            "Terms & Conditions of Purchase",
            " Terms & Conditions of Travel",
            "Sustainability",
            "Reseller login",
        ]
    },
    {
        title: "Customer Service",
        links: [
            "Help",
            "Services",
            "Manage My Booking",
            "How to Book",
            "Reduced Mobility",
            "Seat Reservations",
            'Baggage',
        ]
    },
]

function Footer(props) {
    return (
        <footer className={"sm:border-t border-[#c8c8c8]  pt-11  w-full"}>
            <Links footerLinks={footerLinks}/>
            <Socials/>
            <Policies/>
        </footer>
    );
}

export default Footer;