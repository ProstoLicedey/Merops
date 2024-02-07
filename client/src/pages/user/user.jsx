import React, {useContext, useEffect} from 'react';
import {Context} from "../../index";
import {Col, Row} from "antd";
import ParametersBar from "../../components/home/ParametersBar";
import EventList from "../../components/home/EventList";
import Orders from "../../components/user/orders";
import Profile from "../../components/user/profile";
import {fetchOneEvent} from "../../http/eventAPI";
import {getInfo} from "../../http/userAPI";
import {observer} from "mobx-react-lite";

const User = () => {
    const {user} = useContext(Context)


    return (
        <Row className="mt-3" >
            <Col md={8}>
                <Profile/>
            </Col>
            <Col md={16}>
                <Orders/>
            </Col>

        </Row>
    );
};

export default observer(User);