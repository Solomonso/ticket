import { Card } from "../UI/Card";
import { TicketList } from "./TicketList";
import "./Ticket.css";
import axios from "axios";
import { useEffect} from "react";

const Ticket = ({tickets, fetchTickets}) => {

  const uri = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetchTickets();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${uri}/ticket/${id}`);
      await fetchTickets();
    } catch (error) {
      throw new Error("Error deleting ticket");
    }
  };

  return (
    <div>
      <Card className="ticket">
        <TicketList tickets={tickets} 
        onDelete={handleDelete}/>
      </Card>
    </div>
  );
};

export { Ticket };
