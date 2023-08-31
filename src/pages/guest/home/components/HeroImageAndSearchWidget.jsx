import React from 'react';
import {RouteAndDateProvider} from "../RouteAndDateContext.jsx";
import RouteAndDateSelector from "../../../../components/routeAndDateSeclector/RouteAndDateSelector.jsx";
import Container from "../../../../components/ui/Container.jsx";

function HeroImageAndSearchWidget(props) {
    return (
        <div className={"mb-12"}>
            {/*Hero Image & Data/Route Selector*/}
            <RouteAndDateProvider>
                <div
                    className={"w-full bg-cover bg-center  relative  h-[340px] xl:h-[440px] "}>
                    <img src="/src/assets/home/hero-home.jpg"
                         className={"object-cover h-[240px] xl:h-[400px]  w-full   "}
                         alt=""/>
                    <Container>
                        <p className={"text-white text-xl  sm:text-4xl font-bold absolute top-[35%] sm:top-[30%] xl:top-[53%]"}>Bus Travel in the US from
                            just $4.99</p>
                    </Container>

                    <Container
                        className={"h-[185px] lg:h-[160px] px-4 py-4 xl:px-[30px] xl:pb-[30px] xl:pt-[30px]  bg-white xl:rounded-xl absolute bottom-0   left-1/2 transform -translate-x-1/2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"}>
                        <RouteAndDateSelector/>
                    </Container>


                </div>
            </RouteAndDateProvider>

        </div>
    )
        ;
}

export default HeroImageAndSearchWidget;