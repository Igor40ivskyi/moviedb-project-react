import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genresService} from "../../services/genresService";

const initialState={
    genres: [],
    similarGenres:[],
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


const getSimilarGenres = createAsyncThunk(
    'genresSlice/getSimilarGenres',
    async ({id}, {rejectWithValue}) => {

        try {
            const {data} = await genresService.getSimilarGenres('###', id);
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
            .addCase(getSimilarGenres.fulfilled, (state, action) => {
                const {page, results} = action.payload;
                state.similarGenres = results;
            });
    }),
});

const {reducer: genresReducer, actions: {}} = genresSlice;

const genresActions = {getAllGenres,getSimilarGenres};

export {genresActions, genresReducer};