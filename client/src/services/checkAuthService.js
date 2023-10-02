import reciveCodeService from "./userService/updatePass";
import axios from "axios";
import {refresh} from "../http/userAPI";
import {useContext} from "react";
import {Context} from "../index";

const checkAuthService = async (user) => {

    try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}api/user/refresh`, {withCredentials: true})
        localStorage.setItem('token', response.accessToken);
        user.setIsAuth(true);
        user.setUser(response.user);
    } catch (e) {
        console.log(e);
    }
    //http://localhost:5000/api/user/refresh
}
export default checkAuthService;