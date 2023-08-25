import React, {useState} from 'react';
import HeroImageAndSearchWidget from "./components/HeroImageAndSearchWidget.jsx";
import HomePageQuickLinks from "./components/HomePageQuickLinks.jsx";
import TravelPerksCards from "./components/travelPerksCards/TravelPerksCards.jsx";
import DestinationDiscoveryCard from "./components/DestinationDiscoveryCard.jsx";

function Home(props) {

    return (
        <main className={"flex-1 "}>
           <HeroImageAndSearchWidget/>
            <HomePageQuickLinks/>
            <TravelPerksCards/>
            <DestinationDiscoveryCard/>
        </main>
    );
}


export default Home;