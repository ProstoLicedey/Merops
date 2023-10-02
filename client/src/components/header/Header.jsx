import React, {useContext, useState} from 'react';
import Logo from '../../assets/logo.png'
import { Image, Menu, Space } from 'antd';
import { Header } from "antd/es/layout/layout";
import Search from "antd/es/input/Search";
import { Typography } from 'antd';
import { HOME_ROUTE, USER_ROUTE } from "../../utils/consts";
import { NavLink } from "react-router-dom";
import SerchInput from "../serch";
import {useMediaQuery} from "react-responsive";
import authModals from "../auth/authModals";
import CollectionCreateForm from "../auth/authModals";
import {Context} from "../../index";
import {UserOutlined} from "@ant-design/icons";
import {observer} from "mobx-react-lite";

const { Title } = Typography;




const HeaderPage = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const [open, setOpen] = useState(false);
    const {user} = useContext(Context)
    const [userName, setUserName] = React.useState('')


    return (
        <Header style={{ display: 'flex', alignItems: 'center', height: '5vw', justifyContent:'space-between',  backgroundColor:'#391085'}}>
            <NavLink to={HOME_ROUTE} style={{ display: 'flex', alignItems: 'center'  }}>
                {!isMobile && (<Image src={Logo}
                       width={'5vw'}
                       height={'5vw'}
                       style={{
                           padding:'0.8vw',
                           userSelect: 'none',

                       }}
                       preview={false}
                       alt="Логотип сайта"
                />)}
                <Title level={1}
                       style={{
                           color: '#FFFFFFFF',
                           marginTop:'0.3vw',
                           marginBottom:'0.3vw',
                           userSelect: 'none',
                           whiteSpace: 'nowrap',
                           fontSize: '3vw',
                       }}
                >
                    Merop
                </Title>
            </NavLink>

            {!isMobile && (<SerchInput style={{width: '35vw', }}/>)}


            <Title level={1}
                   style={{
                       color: '#FFFFFFD9',
                       marginTop: 10,
                       userSelect: 'none',
                       whiteSpace: 'nowrap',
                       fontSize: '1.8vw',
                   }}
                   onClick={() => setOpen(true)}
            > {
                user.isAuth ?
                    <UserOutlined/>
                :
                "Войти"
            }
            </Title>
                       <CollectionCreateForm
                       open={open}
                   onCancel={() => {
                       setOpen(false);
                   }}

            />
        </Header>
    );
};

export default  observer(HeaderPage);