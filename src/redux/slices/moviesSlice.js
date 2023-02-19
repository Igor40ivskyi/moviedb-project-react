import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services/moviesService";

const initialState = {
    moviesList: [],
    page: null,

    errors: null,
    loading: null,

};

const getAllMovies = createAsyncThunk(
    'moviesSlice/getAllMovies',
    async ({currentPage}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getAll(currentPage);
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
                const {page,results} = action.payload;
                state.moviesList = results;
                state.page = page;
            });
    }),
});

const {reducer: moviesReducer, actions: {}} = moviesSlice;

const moviesActions = {getAllMovies};

export {moviesReducer, moviesActions};