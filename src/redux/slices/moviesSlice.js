import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services/moviesService";

const initialState = {
    moviesList: [],
    page: null,
    similarMovies:[],
    movieById: null,
    videosByMovieId: null,
    errors: null,
    loading: null,

};

const getAllMovies = createAsyncThunk(
    'moviesSlice/getAllMovies',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getAll(page);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    });

const getSimilarMovies = createAsyncThunk(
    'moviesSlice/getSimilarMovies',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getSimilar(id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    });

const getMovieById = createAsyncThunk(
    'moviesSlice/getMovieById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getById(id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    });

const getVideoByMovieId = createAsyncThunk(
    'moviesSlice/getVideosByMovieId',
    async ({movie_id}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getVideoByMovieId(movie_id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

let moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {

    },
    extraReducers: (builder => {
        builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                const {page, results} = action.payload;
                state.moviesList = results;
                state.page = page;
            })
            .addCase(getSimilarMovies.fulfilled, (state, action) => {
                const {page, results} = action.payload;
                state.similarMovies = results;
            })
            .addCase(getMovieById.fulfilled, (state, action) => {
                state.movieById = action.payload;
            })
            .addCase(getVideoByMovieId.fulfilled, (state, action) => {
                state.videosByMovieId = action.payload;
            });
    }),
});

const {reducer: moviesReducer, actions: {}} = moviesSlice;

const moviesActions = {getAllMovies, getSimilarMovies,getMovieById,getVideoByMovieId};

export {moviesReducer, moviesActions};