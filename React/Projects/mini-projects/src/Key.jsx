import BackspaceIcon from "@mui/icons-material/Backspace";

export default function Key({ value, operation }) {
  return (
    <>
      <button className="w-[6rem]" onClick={() => operation(value)}>
        {value == "<-" ? <BackspaceIcon /> : value}
      </button>
    </>
  );
}
