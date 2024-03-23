import axios from "axios";

export const getNews = async () => {
    const URL = 'http://localhost:3000/news';
    try {
        return await axios.get(URL);
    } catch (err) {
        console.log('Error while calling get new api', err.message);
    }
}
