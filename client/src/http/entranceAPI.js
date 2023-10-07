import {$authHost, $host} from "./index";


export  const  getEntrance = async (id, eventId) =>{
    const  {data} = await $host.get('api/entrance/option/' + id, {params: {eventId}} )
    return data
}