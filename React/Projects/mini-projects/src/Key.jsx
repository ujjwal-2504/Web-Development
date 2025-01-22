export default function Key({ value, operation }) {
  return (
    <>
      <button className="w-[5rem]" onClick={() => operation(value)}>
        {value}
      </button>
    </>
  );
}
