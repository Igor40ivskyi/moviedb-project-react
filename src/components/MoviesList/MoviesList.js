import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";

import {moviesActions} from "../../redux/slices/moviesSlice";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

import './MoviesList.css'

import {useSearchParams} from "react-router-dom";
import {GenresList} from "../GenresList/GenresList";
import {FoundMovies} from "../FoundMovies/FoundMovies";

const MoviesList = () => {

    const ref = useRef();

    const dispatch = useDispatch();

    const {moviesList,page,moviesByKeyword} = useSelector(state => state.movies);

    const [query,setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(moviesActions.getAllMovies({page: query.get('page')}));
    }, [query]);

    const searchMovies = () => {

        if(!isSearched) {
            setIsSearched(true);

            setTimeout(() => {
                setIsSearched(false);
            }, 1000);
        }
            const keyword = ref.current.value

        console.log(keyword);
        dispatch(moviesActions.getMoviesByKeyword({keyword}))
    };
    

    const [isSearched, setIsSearched] = useState(false);


    return (
        <div>
            <div>
                <input style={{width: 800, marginLeft: 330, marginTop: 50, fontSize: 20}} type="text"
                       placeholder={'search'} ref={ref}/>
                <button style={{width: 100, fontSize: 20, color: 'black', fontWeight: 600}} onClick={searchMovies}>look
                    up
                </button>
            </div>

            <div style={{minHeight: 60,display:'flex',justifyContent:'center',alignItems:'center'}}>

                {
                    !moviesByKeyword.length && isSearched

                        ?
                        <div className={'correctWordBlock'}>
                            PLEASE ENTER CORRECT KEYWORD
                        </div>

                        :
                        <div className={"foundMoviesBlockWrap"}>
                            <div className={"foundMoviesBlock"}>
                                {moviesByKeyword.map(movie => <FoundMovies key={movie.id} movie={movie}/>)}
                            </div>
                        </div>
                }


            </div>


            {/*{moviesByKeyword &&  <div style={{color:'snow'}}>*/}
            {/*    {moviesByKeyword.length === 0 ? 'ENTER WORD'*/}
            {/*       : moviesByKeyword.map(movie => <FoundMovies key={movie.id} movie={movie}/>)}*/}
            {/*         */}
            {/*</div> }*/}


            <div style={{display: 'flex'}}>

                <div className={"moviesListBlock"}>
                    {moviesList && moviesList.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
                </div>
                <div>
                    <GenresList/>
                </div>
            </div>

            <div style={{width: '100%', marginTop: 50, marginBottom: 20}}>

                <button className={"prevButton"} disabled={page === 1}
                        onClick={() => setQuery(query => ({page: +query.get('page') - 1}))}>&larr;</button>

                <button className={"nextButton"}
                        onClick={() => setQuery(query => ({page: +query.get('page') + 1}))}>&rarr;</button>

            </div>
        </div>
    );
};

export {MoviesList};