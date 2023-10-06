import {$authHost, $host} from "./index";
export  const  createType = async (type) =>{
    const  {data} = await $authHost.post('/type', type)
    return data
}

export  const  fetchTypes = async () =>{
    const  {data} = await $host.get('/api/type')
    return data
}

export  const  createEvent = async (device) =>{
    // const  {data} = await $authHost.post('api/event', device)
    // return data
}


export const fetchEvent = async (typeId, page, price, date, serchTitle) => {
    let dateMin = null;
    let dateMax = null;
    let priceMin = null;
    let priceMax = null;

    if (date && date.length >= 2) {
        dateMin = date[0].$d;
        dateMax = date[1].$d;
    }
    if (price && price.length >= 2) { // исправлено
        priceMin = price[0];
        priceMax = price[1];
    }

    const {data} = await $host.get('api/event', {
        params: {
            typeId,
            page,
            priceMin,
            priceMax,
            dateMin,
            dateMax,
            serchTitle
        }
    });

    return data;
}
export  const  fetchOneEvent = async (id) =>{
    const  {data} = await $host.get('api/event/' + id )
    return data
}