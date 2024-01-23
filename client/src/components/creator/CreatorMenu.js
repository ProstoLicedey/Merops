import React from 'react';
import {
    BarcodeOutlined,
    CalendarOutlined,
    EnvironmentOutlined,
     TeamOutlined, UserOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
function getItem(label, key, icon,  type) {
    return {
        key,
        icon,
        label,
        type,
    };
}
const items = [
    getItem('Мероприятия', '1',<CalendarOutlined />, ),
    getItem('Залы', '2', <EnvironmentOutlined />, ),
    getItem('Покупатели', '3', <TeamOutlined />, ),
    getItem('Контролеры', '5', <BarcodeOutlined />, ),
    getItem('Обо мне', '4', <UserOutlined />, ),

];
const CreatorMenu = () => {
    const onClick = (e) => {
        console.log('click ', e);
    };
    return (
        <Menu
            onClick={onClick}
            style={{
                width: 256,
            }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
        />
    );
};
export default CreatorMenu;