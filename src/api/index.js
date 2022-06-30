import axios from 'axios';

URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async (sw, ne) => {
    try {
        const { data: { data } } = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'X-RapidAPI-Key': 'f02f9005f3msh968c84c83acacb8p10d262jsn646c088e62ef',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });
        console.log({
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
        })
        return data;
    } catch (error) {
        console.log(error)
    }
}