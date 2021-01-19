import axios from 'axios';

export default axios.create({
    baseURL: ()=>{
        if(process.env.NODE_ENV=="production")
        {
            "https://192.168.86.165:3000/api"
        }
        else
        {
            "https://red-todo-list.herokuapp.com/api"
        }
    },
    headers: {
        "Content-type": "application/json"
    }
});