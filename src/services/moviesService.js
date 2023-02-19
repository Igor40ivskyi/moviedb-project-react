import {apiService} from "./apiService";


const moviesService = {
    getAll: (page) => apiService.get('/discover/movie',{params:{page}}),
};

export {moviesService};