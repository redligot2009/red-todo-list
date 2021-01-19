import http from '../http-common';

class ListSettingsDataService
{
    // create(data)
    // {
    //     return http.post("/settings/", JSON.stringify(data));
    // }

    get()
    {
        return http.get("/settings/");
    }

    update(data)
    {
        return http.put("/settings/", JSON.stringify(data));
    }

    // delete()
    // {
    //     return http.delete("/settings/");
    // }

}

export default new ListSettingsDataService();