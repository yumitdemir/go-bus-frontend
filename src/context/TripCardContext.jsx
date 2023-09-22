import React, { createContext, useState, useContext } from 'react';

// Create a new context
const TripCardContext = createContext();

// Create a provider component
export const TripCardProvider = ({ children, value }) => {
    return (
        <TripCardContext.Provider value={value}>
            {children}
        </TripCardContext.Provider>
    );
};

// Create a custom hook to use the trip context
export const useTripCardContext = () => {
    const context = useContext(TripCardContext);
    if (context === undefined) {
        throw new Error('useTrip must be used within a TripProvider');
    }
    return context;
};
