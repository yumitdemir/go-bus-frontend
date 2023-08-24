import React from 'react';
import {nanoid} from "nanoid";

function LinksMobile({footerLinks}) {
    return (
        <div className={"text-black"}>
            <div className={"flex flex-col  mx-4"}>
                {/* FAQ */}
                <div className="join join-vertical w-full rounded-none sm:hidden ">
                    {footerLinks.map(section =>
                        <div key={nanoid()}
                             className="collapse collapse-arrow join-item  border-b border-[#c8c8c8] rounded-none">
                            <input type="checkbox"/>
                            <div className="collapse-title text-xl font-medium">
                                {section.title}
                            </div>
                            <div className="collapse-content">
                                <ul>
                                    {section.links.map(link => <li key={nanoid()}>{link}</li>)}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>


            </div>
        </div>
    );
}

export default LinksMobile;