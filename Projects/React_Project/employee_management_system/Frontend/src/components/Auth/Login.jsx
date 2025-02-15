import React from "react";
import { useState } from "react";

const Login = ({ auth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const HandleSubmit = (e) => {
    e.preventDefault();
    setUserData({ email: email, password: password });
    console.log(userData);
    setEmail("");
    setPassword("");
  };

  const HandleChange = (e) => {
    if (e.target.type === "email") {
      setEmail(e.target.value);
    } else if (e.target.type === "password") {
      setPassword(e.target.value);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className=" bg-[#1c1c1c] border-2 border-emerald-600 rounded-xl w-1/3 py-10 ">
        <form
          className="flex flex-col items-center justify-center gap-4"
          onSubmit={(e) => HandleSubmit(e)}
        >
          <h1 className="text-4xl text-white font-bold w-full text-start px-6 mb-10">
            Log In
          </h1>
          <div className="px-5">
            <input
              required
              className=" text-white px-5 py-3 border-2 border-green-600 rounded-full outline-none mb-2 text-xl  w-full"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => HandleChange(e)}
            />
            <input
              required
              className=" text-white px-5 py-3 border-2 border-green-600 rounded-full outline-none text-xl  w-full"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => HandleChange(e)}
            />
          </div>
          <button className=" text-white px-4 py-2 text-xl bg-emerald-700 rounded-full outline-none w-7/10">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
