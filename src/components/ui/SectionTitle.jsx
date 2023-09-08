import React from 'react';

function SectionTitle({children}) {
    return (
        <h1 className={"text-4xl font-bold"}>{children}</h1>
    );
}

export default SectionTitle;