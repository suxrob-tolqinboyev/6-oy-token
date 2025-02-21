import axios from "axios";
import React, { useContext } from "react";
import { NameContext } from "../context";
import { useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const Login = () => {
    const { setToken } = useContext(NameContext);
    const navigate = useNavigate();
    
    async function handleSubmit(e) {
        e.preventDefault();
        console.log("bosildi", e.target[0].value, e.target[1].value);
        try {
            const res = await axios.post("http://localhost:5000/auth/login", {
                username: e.target[0].value,
                password: e.target[1].value,
            });
            const token = res.data?.data?.token;
            console.log(token);
            setToken(token);
            localStorage.setItem("token", token);
            navigate("/admin");
        } catch (error) {
            console.error("Login xatosi:", error);
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="p-8 bg-white rounded-lg shadow-lg w-96">
                <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">
                    Admin Panelga Kirish
                </h2>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <input
                        type="text"
                        placeholder="Username"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <div className="flex">
                    <input
                    //    ref={inputEye}
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button type="button" onClick={() => {
                        console.log("boliddddd")
                        {(prev )}
                    }
                    }>
                        
                        </button>
                    </div>
                    <button
                        className="w-full py-3 font-semibold text-white transition-all duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
