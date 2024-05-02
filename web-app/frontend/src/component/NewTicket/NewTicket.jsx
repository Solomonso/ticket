import React, {useState} from "react";
import "./NewTicket.css";
import { TicketForm } from "./TicketForm"

const NewTicket = ({ fetchTickets }) => {
    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className='new-ticket'>
            {!isEditing && <button onClick={startEditingHandler}>Add Ticket</button>}
            {isEditing && <TicketForm fetchTickets={fetchTickets} cancel={stopEditingHandler}/>}
        </div>
)
}

export { NewTicket };