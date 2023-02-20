import {apiService} from "./apiService";
import {points} from "../configs/urls";

const genresService = {
    getAll: () => apiService.get(points.genres),
    getSimilarGenres: (api_key = '###', with_genres = [33,35,25]) => apiService.get(points.movies, {
        params: {
            api_key,
            with_genres
        }
    }),

};

export {genresService};