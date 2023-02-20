import {apiService} from "./apiService";


const moviesService = {
    getAll: (page = 1) => apiService.get('/discover/movie', {params: {page}}),

    getSimilar:(movie_id)=>apiService.get(`/movie/${movie_id}/similar`,{params:{page:3}}),

    getById: (id) => apiService.get(`/movie/${id}`),
};

export {moviesService};