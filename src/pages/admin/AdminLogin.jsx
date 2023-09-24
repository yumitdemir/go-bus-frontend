import React, {useContext} from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import AuthContext from "../../context/AuthContext.jsx";

function AdminLogin(props) {
    var {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const {login} = useContext(AuthContext);
    const submitHandler = async (data) => {
        let payload = {
            UserName: data.UserName,
            PassWord: data.Password,
        };
       await login(payload);
        navigate("/admin")
    };

    return (
        <div className="relative flex flex-col justify-center h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md sm:max-w-lg">
                <h1 className="text-4xl  text-center text-primary font-bold">Admin Login</h1>
                <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Email</span>
                        </label>
                        <input {...register("UserName", {required: true})} type="text" placeholder="Email Address"
                               className="w-full input input-bordered input-primary"/>
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input   {...register("Password", {required: true})} type="password"
                                 placeholder="Enter Password"
                                 className="w-full input input-bordered input-primary"/>
                    </div>
                    <a href="#" className="text-xs text-gray-600 hover:underline hover:text-blue-600">Forget
                        Password?</a>
                    <div className={"w-full flex justify-end "}>
                        <button type={"submit"} className="btn btn-primary text-white">Login</button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default AdminLogin;