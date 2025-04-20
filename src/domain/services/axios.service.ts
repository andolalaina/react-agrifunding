import axios from 'axios';
import BACKEND_SERVER from '../const/urls';

const axiosInstance = axios.create({
    baseURL: BACKEND_SERVER + "/api/v1/",
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;