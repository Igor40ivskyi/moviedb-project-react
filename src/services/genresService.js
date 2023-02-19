import {apiService} from "./apiService";
import {points} from "../configs/urls";

const genresService = {
    getAll: () => apiService.get(points.genres),
    getSimilar:(movie_id)=>apiService.get(`/movie/${movie_id}/similar`),
};

export {genresService};