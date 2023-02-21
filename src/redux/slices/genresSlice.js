import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genresService} from "../../services/genresService";

const initialState={
    genres: [],
    moviesByGenre:null,
    errors: null,
    loading: null,

};

const getAllGenres = createAsyncThunk(
    'genresSlice/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genresService.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    });


const getMoviesByGenre = createAsyncThunk(
    'genresSlice/getMoviesByGenre',
    async ({id}, {rejectWithValue}) => {

        try {
            const {data} = await genresService.getMoviesByGenre(id);
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
            .addCase(getAllGenres.fulfilled, (state, action) => {
                state.genres = action.payload;
            })
            .addCase(getMoviesByGenre.fulfilled, (state, action) => {
                const {page, results} = action.payload;
                state.moviesByGenre = results;
            });
    }),
});

const {reducer: genresReducer, actions: {}} = genresSlice;

const genresActions = {getAllGenres,getMoviesByGenre};

export {genresActions, genresReducer};