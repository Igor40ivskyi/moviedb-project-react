import {apiService} from "./apiService";
import {points} from "../configs/urls";

const genresService = {
    getAll: () => apiService.get(points.genres),
    getMoviesByGenreId: (id) => apiService.get(points.movies, {params: {id}}),


};

export {genresService};