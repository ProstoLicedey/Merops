import {$authHost, $host} from "./index";


export  const  getEventCreator = async (userId) =>{
    const  {data} = await $host.get('api/event/creator' , {
        params: {
            userId
        }
    });
    return data
}