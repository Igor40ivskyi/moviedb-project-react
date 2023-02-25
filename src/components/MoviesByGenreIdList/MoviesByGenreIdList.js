import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {OneMovieByGenreId} from "../OneMovieByGenreId/OneMovieByGenreId";
import {genresActions} from "../../redux/slices/genresSlice";
import './MoviesByGenreIdList.css';

const MoviesByGenreIdList = () => {

    const {moviesByGenreId} = useSelector(state => state.genres);

    const [query,setQuery] = useSearchParams({genreId: 35});

    const id = +query.get('genreId');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genresActions.getMoviesByGenreId({id}))
    },[]);

    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}} >

            <div className={"moviesListBlock"}>
                {moviesByGenreId && moviesByGenreId.map(movieByGenreId=><OneMovieByGenreId key={movieByGenreId.id} movieByGenreId={movieByGenreId}/>)}
            </div>
        </div>
    );
};

export {MoviesByGenreIdList};