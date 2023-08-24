import React, {useState} from 'react';
import HeroImageAndSearchWidget from "./components/HeroImageAndSearchWidget/HeroImageAndSearchWidget.jsx";

function Home(props) {

    return (
        <main className={"flex-1 "}>
           <HeroImageAndSearchWidget/>

        </main>
    );
}


export default Home;