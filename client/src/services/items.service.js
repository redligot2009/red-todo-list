import http from '../http-common';

class ItemDataService
{
    create(data)
    {
        return http.post("/items/add", JSON.stringify(data));
    }

    getAll()
    {
        return http.get("/items");
    }

    update(id, data)
    {
        return http.put(`/items/${id}`, JSON.stringify(data));
    }

    delete(id)
    {
        return http.delete(`/items/${id}`);
    }

}

export default new ItemDataService();