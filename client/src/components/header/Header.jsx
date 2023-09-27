import React from 'react';
import Logo from '../../assets/logo.png'
import { Image, Menu, Space } from 'antd';
import { Header } from "antd/es/layout/layout";
import Search from "antd/es/input/Search";
import { Typography } from 'antd';
import { HOME_ROUTE, USER_ROUTE } from "../../utils/consts";
import { NavLink } from "react-router-dom";
import SerchInput from "../serch";
import {useMediaQuery} from "react-responsive";

const { Title } = Typography;

const HeaderPage = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    return (
        <Header style={{ display: 'flex', alignItems: 'center', height: '6vw', justifyContent:'space-between' }}>
            <NavLink to={HOME_ROUTE} style={{ display: 'flex', alignItems: 'center'  }}>
                {!isMobile && (<Image src={Logo}
                       width={'6vw'}
                       height={'6vw'}
                       style={{
                           padding:'0.8vw',
                           userSelect: 'none',

                       }}
                       preview={false}
                       alt="Логотип сайта"
                />)}
                <Title level={1}
                       style={{
                           color: '#FFFFFFD9',
                           marginTop:'0.3vw',
                           marginBottom:'0.3vw',
                           userSelect: 'none',
                           whiteSpace: 'nowrap',
                           fontSize: '3.5vw',
                       }}
                >
                    Merop
                </Title>
            </NavLink>

            {!isMobile && (<SerchInput style={{width: '35vw',}}/>)}


            <Title level={1}
                   style={{
                       color: '#FFFFFFD9',
                       marginTop: 10,
                       userSelect: 'none',
                       whiteSpace: 'nowrap',
                       fontSize: '2vw',
                   }}
            >Войти</Title>

        </Header>
    );
};

export default HeaderPage;