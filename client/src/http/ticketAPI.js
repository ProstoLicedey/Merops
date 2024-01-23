import {$authHost, $host} from "./index";
import {saveAs} from 'file-saver'
export  const  getTicket = async (id) =>{
    const  response = await $authHost.get('api/ticket/' + id)

    return response.data
}

