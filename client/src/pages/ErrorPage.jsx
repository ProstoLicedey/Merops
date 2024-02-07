import React from 'react';
import Title from "antd/es/typography/Title";
import {Button, Result} from "antd";
import {HOME_ROUTE} from "../utils/consts";
import {Navigate, useNavigate} from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <Result
            status="404"
            title="Ошибочка"
            subTitle="Мы не нашли такой страницы, хотя очень старались. Или вам просто сюда нельзя)"
            extra={<Button onClick={() => navigate(HOME_ROUTE)} type={'primary'}  style={{backgroundColor: '#722ed1',  height: '2em', fontSize:'1.4em'}}>На главную</Button>}
        />
    );
};

export default ErrorPage;