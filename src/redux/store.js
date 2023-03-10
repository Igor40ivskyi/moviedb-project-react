import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {moviesReducer} from "./slices/moviesSlice";
import {genresReducer} from "./slices/genresSlice";

let rootReducer = combineReducers({
    movies: moviesReducer,
    genres: genresReducer
});

let setupStore = () => configureStore({
    reducer: rootReducer
});

export {setupStore};