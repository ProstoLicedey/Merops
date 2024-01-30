import React, {useContext, useRef, useState} from 'react';
import {Alert, Button, Carousel, ConfigProvider, Input, Space, Tour} from "antd";
import Title from "antd/es/typography/Title";
import Carouselcontroller from "../../components/Controller/Carouselcontroller";
import {checkTicket, getTicket} from "../../http/ticketAPI";
import {Context} from "../../index";
import CheckCardController from "../../components/Controller/CheckCardController";

const ControllerCreator = () => {
    const [ticketNumber, setTicketNumber] = useState('');
    const [status, setStatue] = useState('');
    const [message, setMessage] = useState('');
    const  {user, ticket} = useContext(Context)

    const PostTicket = () =>{
        if (ticketNumber.length !== 7){
            setStatue('error')
            setMessage('Номер билета стостит из 7 чисел')
            return;
        }
        setStatue('')
        setMessage('')
        getTicket( ticketNumber,  user.user.id ).then(e => ticket.setControllerTicket(e) ).finally( () => {
            if (ticket.controllerTicket == 403) {
                setMessage("Билет не найден, либо это билет не на ваше мероприятие")
            }
        }
    )
    }

    return (
        <Space direction={"vertical"} size={"small"}>
            <Space>
                <Title level={2}>
                   Контроль билетов
                </Title>
                {/*<Button style={{marginBottom:10}} type="text" onClick={() => setOpen(true)}>*/}
                {/*    <InfoCircleOutlined /> Как это работает?*/}
                {/*</Button>*/}
            </Space>

            {!!message.length && <Alert message={message} type="error" />}
            <Space>

                <Input
                    status={status}
                    size="large"
                    placeholder="Номер билета"
                    maxLength={7}
                    type="number"
                    onChange={(e) => setTicketNumber(e.target.value)}
                />
                <Button type="primary" size="large" onClick={PostTicket}>
                    Ввод
                </Button>

            </Space>
            {/*<Carouselcontroller />*/}
            <CheckCardController style={{marginLeft:20}}/>


        </Space>
    );
};

export default ControllerCreator;