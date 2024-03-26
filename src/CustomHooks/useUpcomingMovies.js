import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/Constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = ()=>{
    const dispatch = useDispatch();
    const upcomingMovies = useSelector(store=>store?.movies?.upcomingMovies);

    const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
    const getUpcomingMovies = async ()=>{
        const data = await fetch(url,API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    } 

    useEffect(()=>{
        !upcomingMovies && getUpcomingMovies();
    },[]);
}

export default useUpcomingMovies;