import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services/moviesService";

const initialState = {
    moviesList: [],
    page: null,
    similarMovies:[],
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

let moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
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
            });
    }),
});

const {reducer: moviesReducer, actions: {}} = moviesSlice;

const moviesActions = {getAllMovies, getSimilarMovies};

export {moviesReducer, moviesActions};