import React from 'react';

function Policies(props) {
    return (
        <div className={"container lg:mx-auto px-4  text-black my-4 "}>
            <div className={"flex flex-col md:flex-row md:justify-between items-center justify-center "}>
            <div
                className={"flex flex-col justify-center  items-center text-[#353535] md:flex-row md:justify-start w-full flex-grow md:items-center md:gap-2"}>
                <div className={"flex gap-2"}>
                    <p className={"cursor-pointer"}>Legal</p>
                    <p className={"cursor-pointer"}>Privacy Policy</p>
                    <p className={"cursor-pointer"}>Photo Credits</p>
                </div>
                <div className={"flex gap-2"}>
                    <p className={"cursor-pointer"}>Jobs</p>
                    <p className={"cursor-pointer"}>Privacy Policy</p>
                    <p className={"flex items-center gap-1 cursor-pointer"}>
                        <img src="/src/assets/footer/ccpa.png" alt=""/>
                        Your Privacy Choices
                    </p>
                </div>
            </div>
                <p className={"text-sm whitespace-nowrap pt-2 md:pt-0"}>© 2023 FlixBus Inc</p>
            </div>


        </div>
    );
}

export default Policies;