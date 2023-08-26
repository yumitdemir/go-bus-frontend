import React from 'react';
import {RouteAndDateProvider} from "../RouteAndDateContext.jsx";
import RouteAndDateSelector from "../../../components/RouteAndDateSeclector/RouteAndDateSelector.jsx";
import Container from "../../../components/UI/Container.jsx";

function HeroImageAndSearchWidget(props) {
    return (
        <div className={"mb-12"}>
            {/*Hero Image & Data/Route Selector*/}
            <RouteAndDateProvider>
                <div
                    className={"w-full bg-cover bg-center  relative  h-[340px] xl:h-[440px] "}>
                    <img src="/src/assets/home/hero-home.jpg"
                         className={"object-cover h-[240px] xl:h-[400px]  w-full "}
                         alt=""/>
                    <Container className={"h-[185px] lg:h-[160px] py-4 xl:px-[30px] xl:pb-[30px] xl:pt-[30px]  bg-white xl:rounded-xl absolute bottom-0   left-1/2 transform -translate-x-1/2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"}>
                    <RouteAndDateSelector/>
                    </Container>
                </div>
            </RouteAndDateProvider>

        </div>
    )
        ;
}

export default HeroImageAndSearchWidget;