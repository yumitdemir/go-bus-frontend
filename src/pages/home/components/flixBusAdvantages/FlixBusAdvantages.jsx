import React from 'react';
import AdvantageParagraph from "./AdvantageParagraph.jsx";

function FlixBusAdvantages(props) {
    return (
        <div className={"w-full xl:container xl:mx-auto flex flex-col gap-7  mb-10 px-4  py-8 border-neutral-content-light  items-center"}>
            <AdvantageParagraph title={"Get Cheap Bus Tickets from $4.99 with FlixBus!"} content={"If you're looking to travel around The United States or even worldwide, FlixBus has got you covered with our extensive bus routes! With over 400,000 routes across the globe, you can easily find the perfect option for your trip. Plus, our cheap bus tickets make it easy and affordable to get wherever you want to go, whether it's for work or play."}/>
            <AdvantageParagraph title={"Bus Routes and Timetables to Suit Your schedule"} content={"Traveling with FlixBus is hassle-free with our modern and comfortable buses, frequent connections, and reliable schedules. Our extensive network spans almost 2,300 destinations in 40+ countries, including major cities in the United States, Canada, and Mexico. Plus, enjoy free WiFi on most of our buses and track your journey in real-time using our bus tracking system. What's more, our integration with Greyhound provides even more coverage and travel options throughout North America, making FlixBus the ideal choice for domestic and international travel."}/>
            <AdvantageParagraph title={"Buying Your Bus Tickets is Easy with FlixBus"} content={"Our website and app make it easy to plan your journey, find the cheapest bus fares, and purchase your bus tickets securely. Whether you're planning or booking a last-minute trip, FlixBus makes buying bus tickets a breeze. Plus, with our convenient e-ticket system, you can board your bus without the hassle of paper tickets as your phone will serve as your ticket!"}/>
            <AdvantageParagraph title={"Discover the Best Destinations FlixBus has to Offer"} content={"With FlixBus' extensive network of routes, you can easily explore some of the most popular cities in the US, as well as travel to Canada and Mexico. And thanks to our integration with Greyhound, our network is even more expansive, giving you even more options for intercity travel. Whether you're exploring New York City, spending a weekend partying in Las Vegas, soaking up the culture in Boston, or discovering the hidden gems of Los Angeles, FlixBus makes it effortless to experience all that the US has to offer."}/>
            <AdvantageParagraph title={"Travelling with FlixBus is a more sustainable choice"} content={"Traveling by bus is not just a convenient choice but also an environmentally responsible one, as bus travel reduces traffic and emissions compared to travelling by car. We are working to make bus travel even greener with high environmental standards across our fleet of buses, the use of alternative drive and fuel technologies, and the option for all passengers to offset their carbon when buying their bus tickets. So, when you travel with FlixBus you can know you are making a responsible choice"}/>
            <AdvantageParagraph title={"Travel in Comfort and Style with FlixBus"} content={"FlixBus not only prioritizes comfort and convenience for your journey, but also ensures that you can travel with all your necessary luggage. Each passenger is allowed to bring one carry-on and one stowed luggage with them on the bus. In addition to the luggage allowances, our buses offer amenities like on-board WiFi, extra legroom, power outlets, and toilets, making your trip as smooth and enjoyable as possible. With our user-friendly app and simple booking platform, planning your bus travel has never been easier. Book your bus ticket with FlixBus today and travel in comfort and style with all your luggage in tow."}/>
         </div>
    );
}

export default FlixBusAdvantages;