import React, {useState} from 'react';
import { Button, Space } from 'antd';
import Title from "antd/es/typography/Title";
import { Space as ZoomableSpace } from 'react-zoomable-ui';

const HallGenerate = ({ numberRows, numberSeatsInRow, hallOptionPrice, style }) => {
    const [fontSize, setFontSize] = useState(20);
    const increaseFontSize = () => {
        setFontSize(prevSize => prevSize + 1);
    };

    const decreaseFontSize = () => {
        setFontSize(prevSize => prevSize - 1);
    };
    const hall = [];

    for (let i = 0; i < numberRows; i++) {
        const row = [];
        row.push(
            <Title style={{margin:5,  width:10,   whiteSpace: 'nowrap',verticalAlign: 'top'}} level={4}>{i+1}</Title>
        );
        for (let j = 0; j < numberSeatsInRow; j++) {
            row.push(
                <Button key={`${i}-${j}`} type="primary"  style={{ verticalAlign: 'top' }}/>
            );
        }

        hall.push(<Space key={i}  size={'middle'}>{row}</Space>);
    }

    return (
    <div style={{...style, display:'flex',  width: '70%',  height:'70%', alignItems:'center', minHeight:500, position: "relative", backgroundColor:"#f0f0f0", justifyContent:'center'}}>
        {/*<div>*/}
        {/*    <Button onClick={increaseFontSize}>Увеличить размер</Button>*/}
        {/*    <Button onClick={decreaseFontSize}>Уменьшить размер</Button>*/}
        {/*</div>*/}
            <ZoomableSpace>
                <Space size={'middle'} style={{display: 'inline-block', minWidth: '30px' }}>{hall}</Space>
            </ZoomableSpace>
        </div>
    );
};

export default HallGenerate;
