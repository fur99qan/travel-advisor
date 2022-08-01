import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'X-RapidAPI-Key': '5e400be897msh481eae73b7d00b4p10b9fdjsn3d67698b80b2',
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