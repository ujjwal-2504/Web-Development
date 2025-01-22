import { useState } from "react";
import Keypad from "./Keypad";

export default function Calculator() {
  let [inputValue, setInputValue] = useState("");

  let operations = {
    clear: () => setInputValue(""),
    display: (val) => setInputValue(`${inputValue}${val}`),
    calculate: () => setInputValue(eval(inputValue)),
    remove: () => setInputValue(inputValue.slice(0, -1)),
  };

  return (
    <>
      <h1>Calculator</h1>
      <div className="calculator border border-white">
        <input
          className="h-20 w-full text-end px-4 text-2xl mb-2"
          type="text"
          value={inputValue}
        />
        <Keypad operations={operations} />
      </div>
    </>
  );
}
