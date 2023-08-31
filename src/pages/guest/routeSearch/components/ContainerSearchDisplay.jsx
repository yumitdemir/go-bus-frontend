import React from 'react';

function ContainerSearchDisplay({children, className}) {
    return (
        <div className={`w-full lg:w-[65%] ${className}`}>
            {children}
        </div>
    );
}

export default ContainerSearchDisplay;