import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const usePopularMovies = ()=>{
      // fetch data from TMDB API and update the store with data.
  const dispatch = useDispatch();
  const popularMovies = useSelector(store=>store?.movies?.popularMovies);


  const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
  const getPopularMovies = async ()=>{
    const data = await fetch(url,API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  } 

  useEffect(()=>{
    //memoization
    !popularMovies && getPopularMovies();
  },[]);
}

export default usePopularMovies;