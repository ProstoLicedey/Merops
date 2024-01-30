import React, {useContext, useState} from 'react';
import {Layout, Space, Switch} from "antd";
import Title from "antd/es/typography/Title";
import CreatorMenu from "../../components/creator/CreatorMenu";
import MeropTable from "../../components/creator/Merops/MeropTable";
import Sider from "antd/es/layout/Sider";
import ControllerCreator from "./controllerCreator";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {ReCAPTCHA} from "react-google-recaptcha";


const PLANS ={
    events: MeropTable,
    zal: MeropTable,
    buyers: MeropTable,
    controler: ControllerCreator,
    aboutMe: MeropTable,
}
const Creator = () => {
    const  {creator} = useContext(Context)
    const PlanView = PLANS[creator.plan]
    return (

        <Layout style={{ width: '90%', backgroundColor:'white' }}>
            <Sider width="20%" style={{backgroundColor:'white'}}>
                <CreatorMenu />
            </Sider>

            <PlanView style={{  backgroundColor:'white' }}/>
        </Layout>

    );
};

export default observer(Creator);