import axios from 'axios';

const api = axios.create({
    baseURL: "https://easy-water.azurewebsites.net/api/report/",
    headers: {
        'x-token': 'd629aa5d-5ae6-4052-ac55-aa3485823f30'
    },
})


export default api;