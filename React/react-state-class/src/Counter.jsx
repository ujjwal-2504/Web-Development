import { useState } from "react";

function init() {
  console.log("Init was executed");
  return Math.random();
}

export default function Counter() {
  // let [stateVariable, setStateVariable] = useState(initialState);
  let [count, setCount] = useState(init); // Initialization
  console.log("The component was rendered");

  function increaseCount() {
    setCount((currCount) => {
      return currCount + 1;
    });
    // setCount(25);
  }

  return (
    <div>
      <h1>Count = {count} </h1>
      <button onClick={increaseCount}>Click to increase </button>
    </div>
  );
}
