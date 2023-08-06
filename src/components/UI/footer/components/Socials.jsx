import React from 'react';

function Socials(props) {
    return (
        <div className={"border-[#c8c8c8] pb-4 border-b-2 mx-4"}>
            <div className={" container lg:mx-auto   px-4    "}>
                <div
                    className={"mt-6 flex flex-col justify-center items-center gap-3  mb-4 sm:grid sm:grid-cols-4   sm:gap-x-[25vw] sm:gap-y-6 lg:gap-x-10"}>
                    <div className={"flex flex-col items-center gap-3 sm:items-start  sm:col-span-2"}>
                        <p className={"text-black font-extrabold"}>Flix App</p>
                        <div className={"flex gap-4 justify-center"}>
                            <img src="/src/assets/social-icons/googleplay.svg" className={"w-28"} alt=""/>
                            <img src="/src/assets/social-icons/appstore.svg" className={"w-28"} alt=""/>
                        </div>
                    </div>
                    <div className={"flex flex-col  sm:col-span-2 lg:items-end"}>
                        <div className={"flex flex-col items-center gap-3 sm:items-start "}>
                            <p className={"text-black font-extrabold "}>Flix on:</p>
                            <div className={"flex gap-3 justify-center"}>
                                <img src="/src/assets/social-icons/facebook.svg" className={"w-7"} alt=""/>
                                <img src="/src/assets/social-icons/insta.svg" className={"w-7"} alt=""/>
                                <img src="/src/assets/social-icons/tiktok.svg" className={"w-7"} alt=""/>
                                <img src="/src/assets/social-icons/linkedin.svg" className={"w-7"} alt=""/>
                                <img src="/src/assets/social-icons/twitter.svg" className={"w-7"} alt=""/>
                                <img src="/src/assets/social-icons/youtube.svg" className={"w-7"} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Socials;