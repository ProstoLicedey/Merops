import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export  const  registration = async (email, password, name, surname, birthday) =>{
    const {data} = await $host.post('/user/registration', {email, password, name, surname, birthday})
    localStorage.setItem('token', data.accessToken)
    return  jwtDecode(data.token)

}

export  const  login = async (email, password) =>{
    const {data} = await $host.post('/user/login', {email, password})
    localStorage.setItem('token', data.accessToken);
    return jwtDecode(data.accessToken)
}
export  const  logout = async (email, password) =>{
    return  await $host.post('/user/login', {email, password})

}
export  const  check = async () =>{
    return await $authHost.get('/user/auth',)
}