import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Component from "./Component";
import Card from "./Card";

function App() {
  const [counter, setCounter] = useState(20);

  function increase() {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  }

  function decrease() {
    setCounter(counter - 1);
  }

  return (
    <>
      <Card songName="Believer" singer="Imagine Dragons" />

      <h1>The number is: {counter}</h1>

      <button onClick={increase} className="m-1">
        +1
      </button>
      <button onClick={decrease} className="m-1">
        {" "}
        -1
      </button>
    </>
  );
}

export default App;
