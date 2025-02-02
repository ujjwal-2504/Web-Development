import React, { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    console.log("Form is submmited");
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
      <div className="border-2 p-20 border-emerald-600 rounded-xl">
        <form
          className="flex flex-col items-center justify-center gap-2"
          onSubmit={(e) => HandleSubmit(e)}
        >
          <input
            required
            className=" text-white px-5 py-3 border-2 border-amber-200 rounded-full outline-none  text-xl"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => HandleChange(e)}
          />
          <input
            required
            className=" text-white px-5 py-3 border-2 border-amber-200 rounded-full outline-none  text-xl"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => HandleChange(e)}
          />
          <button className=" text-white px-4 py-2 mt-2 bg-emerald-700 rounded-full outline-none">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
