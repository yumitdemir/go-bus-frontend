import React from 'react';

function AdvantageParagraph({title, content}) {
    return (
        <div className={"flex flex-col gap-4 items-start w-[60%]"}>
            <h3 className={"text-[22px] font-medium"}>{title}</h3>
            <p className={"text-start"}>
                {content}
            </p>
        </div>
    );
}

export default AdvantageParagraph;