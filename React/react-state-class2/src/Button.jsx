export default function Button({ action, input }) {
  return <button onClick={action}>{input}</button>;
}
