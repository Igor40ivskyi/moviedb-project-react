import {apiService} from "./apiService";


const moviesService = {
    getAll: () => apiService.get('/discover/movie'),
};

export {moviesService};