import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return <h1>This is My app!</h1>;
}

// const reactElement = {
//   type: "a",
//   props: {
//     href: "www.google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit",
// };

const OtherElement = (
  <a href="https://google.com" target="_blank">
    Click to visit Google
  </a>
);

const anotherUser = "chai aur code";

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "blank" },
  "Visit Google",
  anotherUser
);

createRoot(document.getElementById("root")).render(reactElement);
