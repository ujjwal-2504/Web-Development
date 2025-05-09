import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let counter = 20;

  let [counter, setCounter] = useState(20);

  function addValue() {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  }

  function subtractValue() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>CHAI AUR REACT</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addValue}>Add value</button> <br />
      <button onClick={subtractValue}>Subtract value</button>
    </>
  );
}

export default App;
