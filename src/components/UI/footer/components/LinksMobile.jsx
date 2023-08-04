import React from 'react';
import shortid from "shortid";

function LinksMobile({footerLinks}) {
    return (
        <div className={"text-black"}>
            <div className={"flex flex-col  mx-4"}>
                {/* FAQ */}
                <div className="join join-vertical w-full rounded-none sm:hidden ">
                    {footerLinks.map(section =>
                        <div key={shortid.generate()}
                             className="collapse collapse-arrow join-item  border-b border-[#c8c8c8] rounded-none">
                            <input type="checkbox"/>
                            <div className="collapse-title text-xl font-medium">
                                {section.title}
                            </div>
                            <div className="collapse-content">
                                <ul>
                                    {section.links.map(link => <li key={shortid.generate()}>{link}</li>)}
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