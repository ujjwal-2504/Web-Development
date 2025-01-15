import "./App.css";
import LudoBoard from "./LudoBoard";
import TodoList from "./TodoList";
import TodoListV2 from "./TodoListV2";
import Lottery from "./Lottery";
import { sum } from "./helper.js";
import Form from "./Form.jsx";
import CommentsForm from "./CommentsForm.jsx";
import Comment from "./Comment.jsx";

// let winCondition = (ticket) => {
//     // return sum(ticket) === 15; // First winning condition
//     // return ticket.every((num) => num === ticket[0]); // Second winning condition
//     return ticket[0] == 0; // Third winning condition
//   };
// <Lottery n={3} winCondition={winCondition} />

function App() {
  return (
    <div className="App">
      {/* <CommentsForm /> */}
      <Comment />
    </div>
  );
}

export default App;
