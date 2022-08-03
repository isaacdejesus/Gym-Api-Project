import axios from 'axios';
const exerciseOptions = {
    method: 'GET',
    headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
          
    }
    
};
const fetchData = async (url: string, options: any) => {
    const response = await axios.get(url, options);
    return response.data;
}

export default { exerciseOptions, fetchData }
