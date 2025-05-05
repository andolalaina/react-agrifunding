import axios from 'axios';
import BACKEND_SERVER from '../const/urls';

const axiosInstance = axios.create({
    baseURL: BACKEND_SERVER + "/api/v1/",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDcxNDQ4NjYsInN1YiI6ImVlYmViNzc3LWQzZDEtNDhlOS05NDdkLWE0NTAzMTU5NDg3NyJ9.bmdMBnSzvth0htFLTy7LJKGEuokfkm-QcFDznsymZ9M'
    },
});

export default axiosInstance;