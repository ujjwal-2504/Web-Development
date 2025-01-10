// function sum(a, b) {
//   return a + b;
// }
// function Add() {
//   return (
//     <>
//       <h2>2 + 2 = {2 + 2}</h2>
//       <h2>And the sum of 2 and 3 is {sum(2, 3)}</h2>
//     </>
//   );
// }

// export default Description;
// export { Description, Add };

// Activity

function Description({ description }) {
  return (
    <p>
      {description.map((des) => (
        <li>{des}</li>
      ))}
    </p>
  );
}

export { Description };
