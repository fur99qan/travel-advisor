import axios from 'axios';

URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
    params: {
        bl_latitude: '11.847676',
        tr_latitude: '12.838442',
        bl_longitude: '109.095887',
        tr_longitude: '109.149359',
    },
    headers: {
        'X-RapidAPI-Key': 'f02f9005f3msh968c84c83acacb8p10d262jsn646c088e62ef',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
};

export const getPlacesData = async () => {
    try {
        // const response = await axios.get(URL, options);
        // console.log(response);
        const { data: { data } } = await axios.get(URL, options);
        return data;
    } catch (error) {
        console.log(error)
    }
}