import {createContext} from "react";
import {useForm} from "react-hook-form";

// Create a context
const RouteAndDateContext = createContext();

// Create a provider component
const RouteAndDateProvider = ({ children }) => {
    const RouteAndDateForm = useForm();

    return (
        <RouteAndDateContext.Provider value={{RouteAndDateForm}}>
            {children}
        </RouteAndDateContext.Provider>
    );
};

export { RouteAndDateProvider, RouteAndDateContext };