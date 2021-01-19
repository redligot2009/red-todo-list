import axios from 'axios';

export default axios.create({
    baseURL: "http://192.168.86.165:3000/api",
    headers: {
        "Content-type": "application/json"
    }
});