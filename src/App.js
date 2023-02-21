import {MoviesList} from "./components/MoviesList/MoviesList";
import {MoviesPage} from "./pages/MoviesPage/MoviesPage";
import {Navigate, Route, Routes} from "react-router-dom";
import {SimilarMovies} from "./components/SimilarMovies/SimilarMovies";
import {MovieInfo, StarsRating} from "./components";
import {MoviesByGenreIdList} from "./components/MoviesByGenreIdList/MoviesByGenreIdList";

const App = () => {
    return (
        // <div>
        //     <MoviesPage/>
        // </div>
        <Routes>
            <Route path={'/'} element={<MoviesPage/>}>

                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'movies'} element={<MoviesList/>}/>
                <Route path={'similar'} element={<SimilarMovies/>}/>
                <Route path={'rating'} element={<StarsRating/>}/>
                <Route path={'info'} element={<MovieInfo/>}/>
                <Route path={'moviesByGenre'} element={<MoviesByGenreIdList/>}/>
            </Route>

        </Routes>
    );
};

export {App}; 