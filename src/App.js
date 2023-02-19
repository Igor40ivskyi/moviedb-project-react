import {MoviesList} from "./components/MoviesList/MoviesList";
import {MoviesPage} from "./pages/MoviesPage/MoviesPage";
import {Route, Routes} from "react-router-dom";
import {SimilarGenres} from "./components/SimilarGenres/SimilarGenres";

const App = () => {
    return (
        // <div>
        //     <MoviesPage/>
        // </div>
        <Routes>
            <Route path={'/'} element={<MoviesPage/>}/>
            <Route path={'similar'} element={<SimilarGenres/>}/>
        </Routes>
    );
};

export {App}; 