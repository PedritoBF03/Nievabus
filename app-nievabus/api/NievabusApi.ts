
import axios from 'axios';

const nievabusApi = axios.create({
    baseURL: 'http://localhost:3000/api'
});

export default nievabusApi