import React, {useState} from 'react';
import {Layout, Space, Switch} from "antd";
import Title from "antd/es/typography/Title";
import CreatorMenu from "../../components/creator/CreatorMenu";
import MeropTable from "../../components/creator/Merops/MeropTable";
import Sider from "antd/es/layout/Sider";

const Creator = () => {

    return (
        <Layout style={{ width: '90%', backgroundColor:'white' }}>
            <Sider width="20%" style={{backgroundColor:'white'}}>
                <CreatorMenu />
            </Sider>
            <MeropTable style={{  backgroundColor:'white' }}/>
        </Layout>

    );
};

export default Creator;