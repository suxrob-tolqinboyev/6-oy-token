import axios from "axios";
import React, { useContext } from "react";
import { NameContext, NameProvider } from "../context";
import { useNavigate } from "react-router";

const Login = () => {
    const {setToken} = useContext(NameContext);
    const navigate = useNavigate()
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("bosildi", e.target[0].value, e.target[1].value);
    try {
      const res = await axios.post("http://localhost:5000/auth/login", {
        username: e.target[0].value,
        password: e.target[1].value,
      });
      const token = res.data?.data?.token ;
      console.log(token);
      setToken(token)
      localStorage.setItem("token" , token)
      navigate("/admin")
    } catch (error) {}
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col"
        action=""
        method=""
      >
        <input
          type="text"
          placeholder="Username"
          className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none	bg-transparent"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none	bg-transparent"
        />
        <button className=" w-[200px] inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]">
          login
        </button>
      </form>
    </div>
  );
};

export default Login;
