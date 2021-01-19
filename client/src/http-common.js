import axios from 'axios';

export default axios.create({
    baseURL: (
        process.env.NODE_ENV=='production' ? 
        `https://red-todo-list.herokuapp.com${process.env.PORT}/api` : 
        'http://192.168.86.165:3000/api'),
    headers: {
        "Content-type": "application/json"
    }
});