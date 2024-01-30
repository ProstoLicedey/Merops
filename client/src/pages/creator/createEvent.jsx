import React, {useContext, useEffect, useState} from 'react';
import {
    Button,
    Cascader, ConfigProvider,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Mentions, message,
    Select,
    TreeSelect, Upload,
} from 'antd';
import {Text} from "@react-pdf/renderer";
import Title from "antd/es/typography/Title";
import {useParams} from "react-router-dom";
import {observer} from "mobx-react-lite";
import TextArea from "antd/es/input/TextArea";
import {UploadOutlined} from "@ant-design/icons";
import ruRU from "antd/es/locale/ru_RU";
import {Context} from "../../index";
import {fetchEvent, fetchTypes} from "../../http/eventAPI";
const { RangePicker } = DatePicker;
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 10,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 14,
        },
    },
};
const CreateEvent = () =>{
    const {id} = useParams();
    const {event} = useContext(Context)
    const [fileUploaded, setFileUploaded] = useState(false);

    const titleText = id == undefined ? "Создание мероприятия" : "Редактирование мероприятия";


    useEffect(() => {
        fetchTypes().then(data => event.setTypes(data))
       console.log(event.types)
    }, []);


    const normFile = (e) => {
        if (Array.isArray(e)) {
            const fileList = e;
            setFileUploaded(fileList.length > 0); // Update state based on whether a file is present
            return fileList;
        }
        return e?.fileList.slice(-1); // Ensure only the last uploaded file is kept
    };

    const beforeUpload = async (file) => {
        const isImage = file.type.startsWith('image/');
        if (!isImage) {
            message.error('Можно загружать только изображения!');
            return Promise.reject();
        }
        if (Array.isArray(file)){

            setFileUploaded(false); // Update state based on whether a file is present
        }
        setFileUploaded(true);
        return Promise.resolve();
    };

return(
    <div style={{margin: '2%'}}>
        <Title level={2}>
            {titleText}
        </Title>
    <Form
        title={"Общая информация"}
        {...formItemLayout}
        variant="filled"
        style={{
            maxWidth: 600,
        }}
    >
        <Form.Item
            label="Название"
            name="Name"
            rules={[
                {
                    required: true,
                    message: 'Please input!',
                },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Описание"
            name="Discription"
            rules={[
                {
                    required: true,
                    message: 'Please input!',
                },
            ]}
        >
            <TextArea
                autoSize={{
                    minRows: 2,
                    maxRows: 6,
                }}
            />
            <div

            />
        </Form.Item>

        <Form.Item
            label="Дата и время"
            name="DateTime"
            rules={[
                {
                    required: true,
                    message: '123',
                },
            ]}
        >
            <ConfigProvider locale={ruRU}>
                 <DatePicker showTime format="YYYY-MM-DD HH:mm" />
            </ConfigProvider>
        </Form.Item>

        <Form.Item
            valuePropName="fileList"
            getValueFromEvent={normFile}
            label="Изображение"
            name="Image"
            rules={[
                {
                    required: true,
                    message: 'Загрузите картинку',
                },
            ]}
        >
            <Upload
                listType="picture"
                maxCount={1}
                beforeUpload={beforeUpload}
                onRemove={() => setFileUploaded(false)}
                accept={"image/png, image/jpeg"}
            >
                {!fileUploaded && <Button icon={<UploadOutlined />}>Загрузить</Button>}
            </Upload>
        </Form.Item>

        <Form.Item
            label="Тип меропрития"
            name="Type"

            rules={[
                {
                    required: true,
                    message: 'Выберите тип вашего мероприятия',
                },
            ]}
        >
            <Select options={event.types}/>
        </Form.Item>

        <Form.Item
            label="Возрастное ограничение"
            name="AgeReating"

            rules={[
                {
                    required: true,
                    message: 'Укажите возрастное органичение мероприятия',
                },
            ]}
        >
            <Select options={event.types}/>
        </Form.Item>

        <Form.Item
            wrapperCol={{
                offset: 6,
                span: 16,
            }}
        >
            <Button type="primary" htmlType="submit">
                Далее
            </Button>
        </Form.Item>
    </Form>
    </div>
);
}
export default observer(CreateEvent);