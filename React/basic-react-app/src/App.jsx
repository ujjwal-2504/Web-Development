import "./App.css";
//import
import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
import MsgBox from "./MsgBox.jsx";
import Button from "./Button.jsx";
import Form from "./Form.jsx";

// function App() {
//   return (
//     /*
//     <div className = "main">
//       <Title />
//       <Description />
//       <Title />
//       <Description />
//     </div>
//     */

//     // react fragements
//     <>
//       <MsgBox username="Ujjwal" textColor="yellow" />
//       <MsgBox username="Sharadha Didi" textColor="cyan" />
//       <ProductTab />
//     </>
//   );
// }

// Activity

function App() {
  return (
    <>
      <ProductTab />
      <Button />
      <Form />
    </>
  );
}

export default App;
