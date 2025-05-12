import { useState, useCallback, useEffect, useRef } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  let passwordRef = useRef(null);

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "`~!@#$%^&*(){}[]?/|<>+-=_";

    for (let i = 0; i <= length; i++) {
      let charIdx = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIdx);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, length + 1);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    PasswordGenerator();
  }, [length, numberAllowed, characterAllowed, PasswordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl rounded-xl px-6 py-8 my-8 border border-gray-700">
        <div className="flex items-center justify-center gap-2 mb-6">
          <h1 className="text-2xl font-bold text-white">Password Generator</h1>
        </div>

        <div className="flex shadow-lg rounded-lg overflow-hidden mb-6">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-3 px-4 bg-gray-50 font-mono text-gray-800 text-lg"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-0.5 flex items-center justify-center min-w-16"
          >
            Copy
          </button>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-gray-300">Length</label>
              <span className="text-emerald-500 font-medium">{length}</span>
            </div>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-x-2">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                className="w-4 h-4 accent-emerald-500 rounded cursor-pointer"
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              <label
                htmlFor="numberInput"
                className="text-gray-300 cursor-pointer"
              >
                Numbers
              </label>
            </div>

            <div className="flex items-center gap-x-2">
              <input
                type="checkbox"
                defaultChecked={characterAllowed}
                id="characterInput"
                className="w-4 h-4 accent-emerald-500 rounded cursor-pointer"
                onChange={() => setCharacterAllowed((prev) => !prev)}
              />
              <label
                htmlFor="characterInput"
                className="text-gray-300 cursor-pointer"
              >
                Special Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordGenerator;
