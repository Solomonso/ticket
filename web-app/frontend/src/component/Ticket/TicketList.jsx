import { TicketItem } from "./TicketItem";
import "./TicketList.css";

const TicketList = (props) => {
    const formatDate = (date) => {
        const d = new Date(date);
        return (
          d.toDateString()
        );
      };

  return (
    <ul className="ticket-list">
      {props.tickets.map((ticket) => (
        <TicketItem
          key={ticket.id}
          title={ticket.title}
          description={ticket.description}
          created={formatDate(ticket.created)}
          onDelete={props.onDelete.bind(this, ticket.id)}
        />
      ))}
    </ul>
  );
};

export { TicketList };
