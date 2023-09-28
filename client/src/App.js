import {Layout, theme} from 'antd';
import AppRouter from "./components/AppRouter";
import 'antd/dist/reset.css';
import HeaderPage from "./components/header/Header";
import FooterPage from "./components/footer/Footer";
import {BrowserRouter} from "react-router-dom";

const {Header, Content, Footer} = Layout;


function App() {

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
}

export default App;
