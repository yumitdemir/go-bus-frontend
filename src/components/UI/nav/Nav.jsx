import React, {useEffect, useState} from 'react';
import {MdKeyboardArrowDown} from "react-icons/md";
import {GiHamburgerMenu} from "react-icons/gi";
import Container from "../Container.jsx";

function Nav(props) {
    const [navState, setNavState] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setNavState(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const hamburgerClickHandler = () => {
        setNavState((oldStates) => !oldState)
    };
    return (
        <header>
            <nav className={" w-full bg-[#082967] h-[60px] "}>

                <Container className={"h-full"}>
                    <div className={"flex w-full h-full items-center justify-between text-white"}>
                        <div className={"flex h-full justify-between "}>
                            <img className={"w-20 me-8"} src="/src/assets/logo.svg" alt=""/>
                            <div className={" items-center h-full hidden md:flex gap-1"}>
                                <p className={"  flex items-center cursor-pointer  h-full hover:bg-[#09265C]  px-2"}>Plan
                                    Your Journey <MdKeyboardArrowDown className={"text-2xl"}/></p>
                                <p className={" flex items-center cursor-pointer  h-full hover:bg-[#09265C] px-2"}>Service <MdKeyboardArrowDown
                                    className={"text-2xl"}/></p>
                                <p className={" cursor-pointer  flex items-center hover:bg-[#09265C]  h-full px-2"}>Real-Time
                                    Info</p>
                                <p className={"cursor-pointer  flex items-center hover:bg-[#09265C]  h-full px-2"}>Help</p>
                            </div>

                        </div>
                        <p className={"hidden md:flex"}>Login</p>
                        <GiHamburgerMenu className={"md:hidden cursor-pointer"} onClick={hamburgerClickHandler}/>
                    </div>
                </Container>

            </nav>
            {
                navState &&
                <div className={"flex flex-col gap-2 bg-[#082967]"}>
                    <Container className={"flex flex-col h-full sm:px-0 text-white"}>
                        <p className={"  flex items-center cursor-pointer  h-full hover:bg-[#09265C] py-3 px-2"}>Plan
                            Your Journey <MdKeyboardArrowDown className={"text-2xl"}/></p>
                        <p className={"flex items-center cursor-pointer  h-full hover:bg-[#09265C] px-2  py-3"}>Service <MdKeyboardArrowDown
                            className={"text-2xl"}/></p>
                        <p className={"cursor-pointer  flex items-center hover:bg-[#09265C]  h-full px-2  py-3"}>Real-Time
                            Info</p>
                        <p className={" cursor-pointer  flex items-center hover:bg-[#09265C]  h-full px-2  py-3"}>Help</p>
                    </Container>

                </div>
            }
        </header>
    );
}

export default Nav;