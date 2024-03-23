import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";
import { addTopRatedMovies } from '../utils/moviesSlice';

const useTopRatedMovies = ()=>{

    const dispatch = useDispatch();

    const getTopRatedMovies = async ()=>{
        const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
        const data = await fetch(url,API_OPTIONS);
        const json = await data.json();
        console.log(json);
        dispatch(addTopRatedMovies(json.results));
    }

    useEffect(()=>{
        getTopRatedMovies();
    },[]);
}

export default useTopRatedMovies;