import React, {useState} from 'react';
import HeroImageAndSearchWidget from "./components/HeroImageAndSearchWidget.jsx";
import HomePageQuickLinks from "./components/HomePageQuickLinks.jsx";
import TravelPerksCards from "./components/travelPerksCards/TravelPerksCards.jsx";
import DestinationDiscoveryCard from "./components/DestinationDiscoveryCard.jsx";
import FlixBusAdvantages from "./components/flixBusAdvantages/FlixBusAdvantages.jsx";
import Container from "../../../components/ui/Container.jsx";

function Home(props) {

    return (
        <main className={"flex-1 "}>
            <HeroImageAndSearchWidget/>
            <Container>
                <HomePageQuickLinks/>
                <TravelPerksCards/>
                <DestinationDiscoveryCard/>
                <FlixBusAdvantages/>
            </Container>

        </main>
    );
}


export default Home;