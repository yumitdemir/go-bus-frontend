import React from 'react';

function Container({children,className}) {
    return (
        <div className={`w-full xl:container mx-auto px-4 ${className}`}>
            {children}
        </div>
    );
}

export default Container;