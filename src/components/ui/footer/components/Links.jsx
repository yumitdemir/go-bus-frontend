import React from 'react';
import LinksDesktop from "./LinksDesktop.jsx";
import LinksMobile from "./LinksMobile.jsx";

function Links({footerLinks }) {
    return (
        <>
            <LinksDesktop footerLinks={footerLinks}/>
            <LinksMobile footerLinks={footerLinks}/>
        </>
    );
}

export default Links;