let ticketStyle = {
  fontSize: "3rem",
};

export default function TicketNum({ num }) {
  return <span style={ticketStyle}>{num}</span>;
}
