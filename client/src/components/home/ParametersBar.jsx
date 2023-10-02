import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, ConfigProvider, DatePicker, InputNumber, List, Row, Slider, Space, Typography} from "antd";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import ruRU from 'antd/es/locale/ru_RU';
import EventItem from "./EventItem";

const {Text, Title} = Typography

const {RangePicker} = DatePicker;

const ParametersBar = observer(() => {

    const {event} = useContext(Context)
    const getBackgroundColor = (type) => {
        return type.id === event.selectedType.id ? '#b37feb' : 'inherit';
    };
    const handleDateChange = (dates) => {

        event.setSelectedDate(dates)

    };


    let max = 800;

        event.events.forEach(event => {
            if (event.price > max) {
                max = event.price;
            }
        });


    const onSliderChange = (values) => {
        setSliderValues(values);
        event.setSelectedPrice(values)
    };

    const onMinInputChange = (value) => {
        setSliderValues([value, sliderValues[1]]);
    };

    const onMaxInputChange = (value) => {
        setSliderValues([sliderValues[0], value]);
    };
    useEffect(() => {
        setSliderValues([0, max]);
    }, [max]);

    const [sliderValues, setSliderValues] =useState([0, max]);
    return (
        <Space size={"large"} direction="vertical" style={{justifyContent: "center", margin: "5%",}}>
            <div>
                <Title level={4}>Категории</Title>
                <List
                    bordered
                    dataSource={event.types}
                    renderItem={(type) => (
                        <List.Item
                            onClick={() => event.setSelectedType(type)}
                            style={{backgroundColor: getBackgroundColor(type), cursor: 'pointer'}}
                        >
                            {type.name}
                        </List.Item>
                    )}
                />
            </div>
            <div>
                <Title level={4}>Даты</Title>
                <ConfigProvider locale={ruRU}>
                    <RangePicker locale={ruRU} onChange={handleDateChange}/>
                </ConfigProvider>
            </div>

            <div>
                <Title level={4}>Цена</Title>

                        <Slider
                            range
                            min={1}
                            max={max}
                            onChange={onSliderChange}
                            value={sliderValues}
                        />

                <Row>
                    <Space >
                        <InputNumber
                            prefix="от"
                            min={0}
                            valu
                            max={max}
                            style={{
                                margin: '0 16px',
                            }}
                            value={sliderValues[0]}
                            onChange={onMinInputChange}
                        />

                        <InputNumber
                            prefix="до"
                            min={0}
                            max={max}
                            style={{
                                margin: '0 16px',
                            }}
                            value={sliderValues[1]}
                            onChange={onMaxInputChange}
                        />
                    </Space>
                </Row>
            </div>
        </Space>
    );
});


export default ParametersBar;