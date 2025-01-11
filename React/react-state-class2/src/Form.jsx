import { useState } from "react";
import Button from "./Button";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
  });

  // let handelNameChange = (event) => {
  //   setFullName(event.target.value);
  // };

  // let handelUsername = (event) => {
  //   setUsername(event.target.value);
  // };

  let handelInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handelSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      username: "",
      password: "",
    });
  };

  return (
    <>
      <form action="#" onSubmit={handelSubmit}>
        <label htmlFor="fullName">Enter your name: </label>
        <input
          type="text"
          placeholder="Enter full name"
          id="fullName"
          value={formData.fullName}
          onChange={handelInputChange}
          name="fullName"
        />
        <br />
        <br />
        <label htmlFor="username">Enter your username: </label>
        <input
          type="text"
          placeholder="Enter username"
          id="username"
          value={formData.username}
          onChange={handelInputChange}
          name="username"
        />
        <br /> <br />
        <label htmlFor="password">Enter your password: </label>
        <input
          type="password"
          placeholder="Enter password"
          id="password"
          value={formData.password}
          onChange={handelInputChange}
          name="password"
        />
        <br /> <br />
        <button style={{ fontSize: "1.5rem" }}>Submit</button>
      </form>
    </>
  );
}
