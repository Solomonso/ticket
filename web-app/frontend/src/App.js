import "./App.css";
import { NewTicket } from "./component/NewTicket/NewTicket";
import { Ticket } from "./component/Ticket/Ticket";
import  { useFetchTickets } from "./component/Ticket/customeHook/FetchTicket";

const App = () => {
  const uri = process.env.REACT_APP_API_URL;
    const { tickets, fetchTickets } = useFetchTickets(uri);

  return (
    <div>
      <NewTicket fetchTickets={fetchTickets}/>
      <Ticket tickets={tickets} fetchTickets={fetchTickets}/>
    </div>
  );
};

export default App;
