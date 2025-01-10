function handelFormSubmit(event) {
  event.preventDefault();
  console.log("Form was submitted");
}

export default function Form() {
  let style = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    border: "2px solid white",
    padding: "1rem",
    width: "50%",
    margin: "1rem auto",
  };
  return (
    <form style={style} onSubmit={handelFormSubmit}>
      <label htmlFor="name">Your name: </label>
      <input type="text" id="name" />
      <br />
      <label htmlFor="email">Your email: </label>
      <input type="email" id="email" />
      <br />
      <label htmlFor="phnNo">Your phone number: </label>
      <input type="number" id="phnNo" />
      <br />
      <button>Submit</button>
    </form>
  );
}
