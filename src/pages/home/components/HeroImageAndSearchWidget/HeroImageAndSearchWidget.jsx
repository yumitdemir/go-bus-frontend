import React from 'react';
import {RouteAndDateProvider} from "../../RouteAndDateContext.jsx";
import RouteAndDateSelector from "../../../../components/RouteAndDateSeclector/RouteAndDateSelector.jsx";

function HeroImageAndSearchWidget(props) {
    return (
        <div className={"mb-96"}>
            {/*Hero Image & Data/Route Selector*/}
            <RouteAndDateProvider>
                <div
                    className={"w-full bg-cover bg-center  relative  h-[340px] xl:h-[440px] "}>
                    <img src="/src/assets/home/hero-home.jpg" className={"object-cover h-[240px] xl:h-[400px]  w-full "}
                         alt=""/>
                    <RouteAndDateSelector
                        className={"w-full xl:w-[80%] h-[185px] lg:h-[140px] px-4 py-2  xl:px-[24px] xl:pb-[24px] xl:pt-[12px]  bg-white xl:rounded-xl absolute bottom-0   left-1/2 transform -translate-x-1/2 shadow-xl"}/>
                </div>
            </RouteAndDateProvider>

        </div>
    );
}

export default HeroImageAndSearchWidget;