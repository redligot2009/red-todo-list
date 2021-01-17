import http from '../http-common';

class ItemDataService
{
    getAll()
    {
        return http.get("/items");
    }

    // get(id)
    // {
    //     return http.get(`/items/${id}`);
    // }

    create(data)
    {
        return http.post("/items/add", JSON.stringify(data));
    }
}

export default new ItemDataService();