import React, {useContext, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {fetchOneEvent} from "../../http/eventAPI";
import {getTicket} from "../../http/ticketAPI";
import {Context} from "../../index";

const TicketCheck = () => {
    const {id} = useParams();
    const {ticket} = useContext(Context);

    useEffect(() => {
        getTicket(id).then(data => ticket.ticket);
    }, []);

    return (
        <div>
ticket
        </div>
    );
};

export default TicketCheck;