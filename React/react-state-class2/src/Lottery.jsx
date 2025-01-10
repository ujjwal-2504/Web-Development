import { useState } from "react";
import "./Lottery.css";
import { getTicket, sum } from "./helper";

export default function Lottery() {
  let [ticketNum, setTicketNum] = useState(getTicket(3));
  let isWinning = sum(ticketNum) === 15;

  function buyNewTicket() {
    return setTicketNum(getTicket(3));
  }

  return (
    <div className="Lottery">
      <h1>Lottery Game!</h1>
      <h2>{isWinning && "Congratulations, You Won!"}</h2>
      <div className="ticket">
        <span>{ticketNum[0]}</span>
        <span>{ticketNum[1]}</span>
        <span>{ticketNum[2]}</span>
      </div>
      <button onClick={buyNewTicket}>Buy New Ticket</button>
    </div>
  );
}
