import React, {useContext, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {fetchOneEvent} from "../../http/eventAPI";
import {getTicket} from "../../http/ticketAPI";
import {Context} from "../../index";
import CheckCardController from "../../components/Controller/CheckCardController";

const TicketCheck = () => {
    const {id} = useParams();
    const {ticket, user} = useContext(Context);

    useEffect(() => {
        getTicket(id, user.user.id ).then(data => ticket.setControllerTicket(data));
    }, []);

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh', // Set to full height of the viewport
            }}
        >
            <CheckCardController style={{ width: '60vw', height: '50vh' }} />
        </div>
    );
};

export default TicketCheck;