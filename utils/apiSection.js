import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";


export const fetchApi = async (url) => {
    const {data} =  await axios.get((url), {
        headers: {
                'X-RapidAPI-Key': '952b0e59ffmsh75923c9aadc923ap11b9f4jsnbea85e16b6ee',
                'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
              }
    })

    return data;
};