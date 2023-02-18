import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services/moviesService";

const initialState = {
    movies: [],
    errors: null,
    loading: null,

};

const getAllMovies = createAsyncThunk(
    'moviesSlice/getAllMovies',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getAll();
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
                state.movies = action.payload;
            });
    }),
});

const {reducer: moviesReducer, actions: {}} = moviesSlice;

const moviesActions = {getAllMovies};

export {moviesReducer, moviesActions};