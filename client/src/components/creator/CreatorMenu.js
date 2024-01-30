import React, {useContext} from 'react';
import {
    BarcodeOutlined,
    CalendarOutlined,
    EnvironmentOutlined,
     TeamOutlined, UserOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
function getItem(label, key, icon,  type) {
    return {
        key,
        icon,
        label,
        type,
    };
}
const items = [
    getItem('Мероприятия', 'events',<CalendarOutlined />, ),
    getItem('Залы', 'zal', <EnvironmentOutlined />, ),
    getItem('Покупатели', 'buyers', <TeamOutlined />, ),
    getItem('Контролеры', 'controler', <BarcodeOutlined />, ),

];
const CreatorMenu = () => {
    const  {creator} = useContext(Context)
    const onClick = (e) => {
        creator.setPlan(e.key)

    };
    return (
        <Menu
            onClick={onClick}
            style={{
                width: 256,
            }}
            defaultSelectedKeys={['0']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
        />
    );
};
export default observer(CreatorMenu);