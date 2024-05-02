import React, { useState } from 'react';
import axios from 'axios';
import './TicketForm.css';

const TicketForm = ({ fetchTickets, cancel }) => {
    const [ticketData, setTicketData] = useState({ title: "", description: "" });
    const uri = process.env.REACT_APP_API_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post(`${uri}/ticket`, ticketData);
          await fetchTickets();
          setTicketData({ title: "", description: "" });
        } catch (error) {
          throw new Error("Error creating ticket");
        }
      };

      const handleChange = (e) => {
        setTicketData({ ...ticketData, [e.target.name]: e.target.value });
      };

    return (
        <form onSubmit={handleSubmit}>
        <div className='new-ticket__controls'> 
            <div className='new-ticket__control'>
                <label>Ticket title:</label>
                <input type="text" name="title" value={ticketData.title} onChange={handleChange} />
            </div>
            <div className='new-ticket__control'>
                <label>Ticket description:</label>
                <input type="text" name="description" value={ticketData.description} onChange={handleChange} />
            </div>
        </div>
        <div className=''>
            <button type="submit" onClick={cancel}>Cancel</button>
            <button type="submit">Add Ticket</button>
        </div>
    </form>
    );
}

export { TicketForm };