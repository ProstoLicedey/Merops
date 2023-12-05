import React, {useContext, useEffect} from 'react';
import {Button, DatePicker, Empty, Form, Input, Row, Space} from "antd";
import onCreate from "../../services/userService/authService";
import Link from "antd/es/typography/Link";
import EventItem from "../home/EventItem";
import moment from "moment/moment";
import {Context} from "../../index";
import {getInfo, getOrders} from "../../http/userAPI";


const Orders = () => {

    const { user } = useContext(Context);

    useEffect(() => {
        if(user.user.id != undefined) {
            getInfo(user.user.id).then(data => user.setOrders(data));
        }
    }, [user.user]);

    return (
    <div style={{display: "flex", justifyContent: "center", margin: "5vh"}}>
        <Row className="d-flex" style={{maxWidth: "1500px"}}>
            {event.events.length === 0 ? (
                <Space direction="vertical" style={{display: "flex", textAlign: 'center', alignItems: 'center',  justifyContent: 'center', }}>
                    <Empty description="По вашему запросу мероприятий не найдено("/>
                    <Link onClick={() => {
                        event.setPage()
                        event.setSelectedType({})
                        event.setSelectedDate({})
                        event.setSelectedPrice({})
                        event.setSerchTitle(null)
                    }}

                    >Сброс настроек</Link>
                </Space>
            ) : (
                <Space wrap size={"large"} style={{minWidth:260}}>
                    {event.events.map(event =>
                        <EventItem key={event.id} thisEvent={event}/>
                    )}
                </Space>
            )}
        </Row>
    </div>
    );
};

export default Orders;