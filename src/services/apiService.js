import axios from "axios";
import {baseURL} from "../configs/urls";

const apiService = axios.create({baseURL});

apiService.interceptors.request.use((config) => {
    config.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWQzOTk0YmNhYmNmOWI0MjJjMjZhZjRiODI4NWFmZCIsInN1YiI6IjYzZWYzMGU1MGYwZGE1MDA3YmUxNjVjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-_fxSmlMmdXvnfe3iMvAN8RXLWJcEBoNpXKDsQejigc';
    return config;
});

export {apiService};

