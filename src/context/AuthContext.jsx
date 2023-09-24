import axios from "axios";
import {createContext, useState} from "react";
import {BASE_URL} from "../../config.js";
import {useNavigate} from "react-router-dom";

const AuthContext = createContext();
export const AuthContextProvider = ({children}) => {

    const [jwt, setJwt] = useState(() => {
        let jwt = localStorage.getItem("jwt");
        if (jwt) {
            return JSON.parse(jwt);
        }
        return null;
    });
    const login = async (payload) => {
        var apiResponse = await axios.post(BASE_URL + "api/Auth/Login", payload);
        console.log(JSON.stringify(apiResponse.data))
        localStorage.setItem("jwt", JSON.stringify(apiResponse.data.jwtToken));
        setJwt(apiResponse.data.jwtToken);
    };

    const logout = () => {
        localStorage.removeItem("jwt");
        setJwt(null);
    };

    return (
        <>
            <AuthContext.Provider value={{jwt, login,logout}}>
                {children}
            </AuthContext.Provider>
        </>
    );
};

export default AuthContext;