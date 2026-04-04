import { useEffect, useState } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCount = create((set) => ({
  count: (function () {
    const saved = localStorage.getItem("count");
    return saved ? Number(saved) : 0;
  })(),
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  decreaseCount: () => set((state) => ({ count: state.count - 1 })),
  resetCount: () => set(() => ({ count: 0 })),
  saveToLocalStorage: (count) => localStorage.setItem("count", count),
}));

const useCount2 = create(
  persist(
    (set) => ({
      count: 0,
      name: null,
      email: null,
      increaseCount: () => set((state) => ({ count: state.count + 1 })),
      decreaseCount: () => set((state) => ({ count: state.count - 1 })),
      resetCount: () => set({ count: 0 }),
      addName: (name) => set({ name: name == "" ? null : name }),
      removeName: () => set({ name: null }),
      addEmail: (email) => set({ email: email == "" ? null : email }),
      removeEmail: () => set({ email: null }),
    }),
    { name: "info" },
  ),
);

const Display = () => {
  const count = useCount((state) => state.count);

  return (
    <>
      <p>The count is: {count}</p>
    </>
  );
};

const Buttons = () => {
  const increaseCount = useCount((state) => state.increaseCount);
  const decreaseCount = useCount((state) => state.decreaseCount);
  const resetCount = useCount((state) => state.resetCount);

  return (
    <>
      <button onClick={increaseCount}>Increase Count </button> <br />
      <button onClick={decreaseCount}>Decrease Count </button> <br />
      <button onClick={resetCount}>Reset Count </button> <br />
    </>
  );
};

const Save = () => {
  const count = useCount((state) => state.count);
  const saveToLocalStorage = useCount((state) => state.saveToLocalStorage);

  return (
    <>
      <button onClick={() => saveToLocalStorage(count)}>save </button>
    </>
  );
};

const Count2 = () => {
  const count = useCount2((state) => state.count);
  const increaseCount = useCount2((state) => state.increaseCount);
  const decreaseCount = useCount2((state) => state.decreaseCount);
  const resetCount = useCount2((state) => state.resetCount);

  return (
    <>
      <p>Count from second store: {count}</p>
      <button onClick={increaseCount}>Increase Count </button> <br />
      <button onClick={decreaseCount}>Decrease Count </button> <br />
      <button onClick={resetCount}>Reset Count </button> <br />
    </>
  );
};

const Info = () => {
  const name = useCount2((state) => state.name);
  const addName = useCount2((state) => state.addName);
  const removeName = useCount2((state) => state.removeName);
  const email = useCount2((state) => state.email);
  const addEmail = useCount2((state) => state.addEmail);
  const removeEmail = useCount2((state) => state.removeEmail);

  const [inputName, setInputName] = useState(name || "");
  const [inputEmail, setInputEmail] = useState(email || "");

  useEffect(() => {
    setInputName(name || "");
    setInputEmail(email || "");
  }, [name, email]);

  return (
    <>
      <p>Name: {name}</p>
      <input
        type="text"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <button onClick={() => addName(inputName)}>Save Name</button>
      <br />
      <button onClick={removeName}>Remove Name</button>
      <br />
      <br />
      <p>Email: {email}</p>
      <input
        type="text"
        value={inputEmail}
        onChange={(e) => setInputEmail(e.target.value)}
      />
      <button onClick={() => addEmail(inputEmail)}>Save Email</button>
      <br />
      <button onClick={removeEmail}>Remove Email</button>
      <br />
    </>
  );
};

const Zustand = () => {
  const [countA, setCountA] = useState(0);

  function increaseCountA() {
    setCountA((prev) => prev + 1);
  }

  return (
    <div>
      <p>CountA: {countA};</p>
      <button onClick={increaseCountA}>Inc CountA</button>

      <div>
        <Display />
        <Buttons />
        <Save />
      </div>

      <Count2 />
      <br />
      <b></b>
      <Info />
    </div>
  );
};

export default Zustand;
