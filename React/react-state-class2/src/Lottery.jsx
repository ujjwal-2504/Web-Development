import { useState } from "react";
import { getTicket, sum } from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";

export default function Lottery({ n = 3, winCondition }) {
  let [ticket, setTicketNum] = useState(getTicket(n));
  let isWinning = winCondition(ticket);

  function buyNewTicket() {
    return setTicketNum(getTicket(n));
  }

  return (
    <div className="Lottery" style={{ textAlign: "center" }}>
      <h1>Lottery Game!</h1>
      {isWinning && <h2>{"Congratulations, You Won!"}</h2>}
      <Ticket ticket={ticket} />
      <Button action={buyNewTicket} input="Buy new ticket" />
    </div>
  );
}
