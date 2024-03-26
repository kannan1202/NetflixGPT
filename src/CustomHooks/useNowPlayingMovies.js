import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useNowPlayingMovies = ()=>{
      // fetch data from TMDB API and update the store with data.
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(store=>store?.movies?.nowPlayingMovies);

  const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
  const getNowPlayingMovies = async ()=>{
    const data = await fetch(url,API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  } 

  useEffect(()=>{
    !nowPlayingMovies && getNowPlayingMovies();
  },[]);
}

export default useNowPlayingMovies;