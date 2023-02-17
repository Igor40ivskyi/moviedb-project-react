import {moviesService} from "../../services/moviesService";
import {useEffect, useState} from "react";

const MoviesList = () => {

    let [state,setState] = useState([]);
    console.log(state.results);
    useEffect(() => {
       try{
           moviesService.getAll().then(({data})=>setState(data))
       }catch (e) {
           console.log(e.response);
       }
    },[]);

    return (
        <div>
            MoviesList
        </div>
    );
};

export {MoviesList};