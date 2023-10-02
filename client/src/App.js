import {Layout, theme} from 'antd';
import AppRouter from "./components/AppRouter";
import 'antd/dist/reset.css';
import HeaderPage from "./components/header/Header";
import FooterPage from "./components/footer/Footer";
import {BrowserRouter} from "react-router-dom";
import {useContext, useEffect} from "react";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import checkAuthService from "./services/checkAuthService";

const {Header, Content, Footer} = Layout;


const App = observer (() =>  {
    const {user}  = useContext(Context)
    useEffect(() => {
        if(localStorage.getItem('token')){
            checkAuthService(user)
        }
    }, []);

    const {
        token: {colorBgContainer},
    } = theme.useToken();
    return (
        <BrowserRouter>

            <Layout className="layout" style={{minHeight: '100vh'}}>
                <HeaderPage/>
                <Content className="site-layout-content"
                         style={{ margin: '3vh', background: colorBgContainer}}>
                    <AppRouter/>
                </Content>
                <Footer>
                    <FooterPage/>
                </Footer>
            </Layout>
        </BrowserRouter>
    );
})

export default App;
