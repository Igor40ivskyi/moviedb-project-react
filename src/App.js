import {MoviesList} from "./components/MoviesList/MoviesList";
import {MoviesPage} from "./pages/MoviesPage/MoviesPage";
import {Navigate, Route, Routes} from "react-router-dom";
import {SimilarMovies} from "./components/SimilarMovies/SimilarMovies";
import {MovieInfo, StarsRating} from "./components";
import {MoviesByGenreIdList} from "./components/MoviesByGenreIdList/MoviesByGenreIdList";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";
import {createContext, useState} from "react";

export const ThemeContext = createContext(null);


const App = () => {

    const [theme, setTheme] = useState("light");


    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <Routes>
                <Route path={'/'} element={<MoviesPage/>}>

                    <Route index element={<Navigate to={'movies'}/>}/>
                    <Route path={'movies'} element={<MoviesList/>}/>
                    <Route path={'similar'} element={<SimilarMovies/>}/>
                    <Route path={'info'} element={<MovieInfo/>}/>
                    <Route path={'moviesByGenre'} element={<MoviesByGenreIdList/>}/>
                </Route>

                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </ThemeContext.Provider>


    );
};

export {App}; 