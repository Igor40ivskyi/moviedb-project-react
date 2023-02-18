import {apiService} from "./apiService";
import {points} from "../configs/urls";

const genresService = {
    getAll: () => apiService.get(points.genres),
};

export {genresService};