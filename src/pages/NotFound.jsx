import React from 'react';
import {useNavigate} from "react-router-dom";

function NotFound(props) {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-9xl font-bold">404</h1>
            <p className="text-xl mt-4 mb-8">Page Not Found</p>
            <button onClick={navigateToHome} className="px-4 py-2 bg-blue-500 text-white rounded">Go to Home Page</button>
        </div>
    );
}

export default NotFound;