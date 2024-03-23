import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/Constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = ()=>{
    const dispatch = useDispatch();

    const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
    const getUpcomingMovies = async ()=>{
        const data = await fetch(url,API_OPTIONS);
        const json = await data.json();
        console.log(json.results);
        dispatch(addUpcomingMovies(json.results));
    } 

    useEffect(()=>{
        getUpcomingMovies();
    },[]);
}

export default useUpcomingMovies;