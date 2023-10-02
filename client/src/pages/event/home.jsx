import React, {useContext, useEffect} from 'react';
import SerchInput from "../../components/serch";
import {useMediaQuery} from "react-responsive";
import EventList from "../../components/home/EventList";
import {Context} from "../../index";
import {fetchEvent, fetchTypes} from "../../http/eventAPI";
import {observer} from "mobx-react-lite";
import {Col, Row} from "antd";
import ParametersBar from "../../components/home/ParametersBar";

const Home = observer( () =>  {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const  {event} = useContext(Context)
    useEffect(() => {
       fetchTypes().then(data => event.setTypes(data))
        fetchEvent(null, 1, null, null).then(data => {
            event.setEvents(data.rows)
            event.setTotalCount(data.count)
        })
    }, []);
    useEffect(() => {
        fetchEvent(event.selectedType.id, event.page, event.selectedPrice, event.selectedDate).then(data => {
            event.setEvents(data.rows)
            event.setTotalCount(data.count)
        })
    }, [event.page, event.selectedType, event.selectedDate,event.selectedPrice])
    return (
        <div>
            {isMobile && (<SerchInput style={{ padding: '3vw'}}/> )}
            <Row className="mt-3">
                <Col md={6}>
                    <ParametersBar/>
                </Col>
                <Col md={18}>
                    <EventList/>
                </Col>

            </Row>


        </div>
    );
});

export default Home;