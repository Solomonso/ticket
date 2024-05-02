import axios from "axios";
import { useState } from "react";

const useFetchTickets = (uri) => {
  const [tickets, setTickets] = useState([]);

  const fetchTickets = async () => {
    try {
      const response = await axios.get(`${uri}/tickets`);
      const getTickets = response.data.tickets;
      setTickets(getTickets);
    } catch (error) {
      throw new Error("Error fetching tickets");
    }
  };

  return { tickets, fetchTickets };
};

export { useFetchTickets };