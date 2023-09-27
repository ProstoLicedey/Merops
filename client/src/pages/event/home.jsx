import React from 'react';
import SerchInput from "../../components/serch";
import {useMediaQuery} from "react-responsive";

const Home = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    return (
        <div>
            {isMobile && (<SerchInput style={{ padding: '3vw'}}/> )}
        </div>
    );
};

export default Home;