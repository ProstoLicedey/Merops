import React from 'react';
import Search from "antd/es/input/Search";

const SerchInput = ({style}) => {
    return (

            <Search
                placeholder="Найти мероприятие"
                onSearch={Search}
                style={style}
                          />
    );
};

export default SerchInput;