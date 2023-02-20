import {MoviesList} from "./components/MoviesList/MoviesList";
import {MoviesPage} from "./pages/MoviesPage/MoviesPage";
import {Route, Routes} from "react-router-dom";
import {SimilarMovies} from "./components/SimilarMovies/SimilarMovies";
import {ChosenGenre} from "./components/ChosenGenre/ChosenGenre";
import {StarsRating} from "./components";

const App = () => {
    return (
        // <div>
        //     <MoviesPage/>
        // </div>
        <Routes>
            <Route path={'/'} element={<MoviesPage/>}/>
            <Route path={'similar'} element={<SimilarMovies/>}/>
            <Route path={'chosenGenre'} element={<ChosenGenre/>}/>
            <Route path={'rating'} element={<StarsRating/>}/>
        </Routes>
    );
};

export {App}; 