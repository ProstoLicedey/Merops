import React, {useContext} from 'react';
import {Context} from "../../index";
import {Empty, Row, Space} from "antd";
import EventItem from "./EventItem";
import {observer} from "mobx-react-lite";
import Title from "antd/es/typography/Title";

const EventList = ({thisEvent}) => {
    const {event} = useContext(Context)
    return (
        <div style={{ display: "flex", justifyContent: "center", margin: "5vh" }}>
            <Row className="d-flex" style={{ maxWidth: "1500px" }}>
                {event.events.length === 0 ? (
                    <Empty description="По вашему запросу мероприятий не найдено(" />
                ) : (
                    <Space wrap size={"large"}>
                        {event.events.map(event =>
                            <EventItem key={event.id} thisEvent={event}/>
                        )}
                    </Space>
                )}
            </Row>
        </div>

    );
};

export default observer(EventList);