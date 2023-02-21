import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genresService} from "../../services/genresService";

const initialState={
    genresList: [],
    moviesByGenreId:null,
    errors: null,
    loading: null,

};

const getGenresList = createAsyncThunk(
    'genresSlice/getGenresList',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genresService.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    });


const getMoviesByGenreId = createAsyncThunk(
    'genresSlice/getMoviesByGenre',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await genresService.getMoviesByGenreId(id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    });

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {},
    extraReducers: (builder => {
        builder
            .addCase(getGenresList.fulfilled, (state, action) => {
                state.genresList = action.payload.genres;
            })
            .addCase(getMoviesByGenreId.fulfilled, (state, action) => {
                state.moviesByGenreId = action.payload.results;

            });
    }),
});

const {reducer: genresReducer, actions: {}} = genresSlice;

const genresActions = {getGenresList,getMoviesByGenreId};

export {genresActions, genresReducer};