import {apiService} from "./apiService";
import {points} from "../configs/urls";

const genresService = {
    getAll: () => apiService.get(points.genres),
    getMoviesByGenre: (id=33) => apiService.get(points.movies, {params: {id}}),


};

export {genresService};