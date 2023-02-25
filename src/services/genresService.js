import {apiService} from "./apiService";
import {points} from "../configs/urls";

const genresService = {
    getAll: () => apiService.get(points.genres),

    getMoviesByGenreId: (with_genres=12) => apiService.get(points.movies, {params: {with_genres}}),

};

export {genresService};