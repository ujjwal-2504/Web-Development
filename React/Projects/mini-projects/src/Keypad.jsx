import Key from "./Key";
function Keypad({ operations }) {
  return (
    <div className="Keypad flex flex-wrap w-80">
      <Key value="C" operation={operations.clear} />
      <Key value="/" operation={operations.display} />
      <Key value="*" operation={operations.display} />
      <Key value="+" operation={operations.display} />
      <Key value="-" operation={operations.display} />
      <Key value="1" operation={operations.display} />
      <Key value="2" operation={operations.display} />
      <Key value="3" operation={operations.display} />
      <Key value="4" operation={operations.display} />
      <Key value="5" operation={operations.display} />
      <Key value="6" operation={operations.display} />
      <Key value="7" operation={operations.display} />
      <Key value="8" operation={operations.display} />
      <Key value="9" operation={operations.display} />
      <Key value="." operation={operations.display} />
      <Key value="=" operation={operations.calculate} />
      <Key value="<-" operation={operations.remove} />
    </div>
  );
}

export default Keypad;
