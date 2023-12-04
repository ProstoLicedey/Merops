import React from 'react';
import {Row, Typography} from 'antd';
import {observer} from "mobx-react-lite";
import Title from "antd/es/typography/Title";
import MapIcon from "../../assets/icon/MapIcon";

const { Text, Link } = Typography;

const AddressLink = ({adress, name}) => {
    const handleOpenMaps = () => {
        const mapsUrl = `https://yandex.ru/maps/?text=${encodeURIComponent(adress)}`;
        window.open(mapsUrl, '_blank');
    };

    return (
        <Row>
            <MapIcon style={{width:30, height:30, marginRight: 5}}/>
        <Title level={4} underline onClick={handleOpenMaps} style={{cursor:"pointer"}}>
            {name}
        </Title>
        </Row>
    );
};

export default AddressLink;