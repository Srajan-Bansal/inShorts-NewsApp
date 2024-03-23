import axios from "axios";

export const getNews = async () => {
    const URL = 'http://localhost:3000';
    try {
        return await axios.get(`${URL}/news`);
    } catch (err) {
        console.log('Error while calling get new api', err.message);
    }
}
