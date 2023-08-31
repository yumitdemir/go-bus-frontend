import React from 'react';
import {nanoid} from "nanoid";


function LinksDesktop({footerLinks}) {
    return (
        <div className={"   grid-cols-4 text-md pb-16 gap-x-[25vw] gap-y-6 lg:gap-x-10 hidden sm:grid "}>
            {footerLinks.map(section =>
                <div key={nanoid()}
                     className={"w-full flex flex-col gap-1 text-[#353535] sm:col-span-2 lg:col-span-1  items-center sm:items-start  pb-10 sm:pb-0 border-b border-[#c8c8c8] border-opacity-60 sm:border-none"}>
                    <p className={"font-medium mb-2"}>{section.title}</p>
                    <ul className={"flex flex-col gap-4"}>
                        {section.links.map(link =>
                            <li key={nanoid()} className={"cursor-pointer"}>{link}</li>
                        )}
                    </ul>
                </div>
            )}

        </div>

    );
}

export default LinksDesktop;