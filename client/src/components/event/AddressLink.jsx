import React from 'react';
import { Typography } from 'antd';
import {observer} from "mobx-react-lite";
import Title from "antd/es/typography/Title";

const { Text, Link } = Typography;

const AddressLink = ({adress, name}) => {
    const handleOpenMaps = () => {
        const mapsUrl = `https://yandex.ru/maps/?text=${encodeURIComponent(adress)}`;
        window.open(mapsUrl, '_blank');
    };

    return (
        <Title level={4} underline onClick={handleOpenMaps} style={{cursor:"pointer", marginTop:-10, padding:0}}>
            {name}
        </Title>
    );
};

export default AddressLink;