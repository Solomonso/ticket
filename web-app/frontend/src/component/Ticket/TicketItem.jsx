import React, { useEffect } from 'react';
import { Card } from '../UI/Card';
import './TicketItem.css';

const TicketItem = (props) => {
    return (
        <div>
            <li>
                <Card className='ticket-item'>
                    <div className='ticket-item__description'>
                        <h2>{props.title}</h2>
                        <p>{props.description}</p>
                        <p><b>Created: </b> {props.created}</p>
                    </div>
                    <button className='button' onClick={props.onDelete}>Delete</button>
                </Card>
            </li>
        </div>
    );
};

export { TicketItem };