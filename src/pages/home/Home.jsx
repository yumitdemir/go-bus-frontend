import React, {useState} from 'react';
import HeroImageAndSearchWidget from "./components/HeroImageAndSearchWidget.jsx";
import HomePageQuickLinks from "./components/homePageQuickLinks/HomePageQuickLinks.jsx";

function Home(props) {

    return (
        <main className={"flex-1 "}>
           <HeroImageAndSearchWidget/>
            <HomePageQuickLinks/>

        </main>
    );
}


export default Home;