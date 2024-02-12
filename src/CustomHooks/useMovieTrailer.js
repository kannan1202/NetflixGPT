import { API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addMovieTrailer } from "../utils/moviesSlice";

const useMovieTrailer = (movieId)=>{
    //fetch movie trailer with movieId and update the store with trailer data

    const dispatch = useDispatch();

    const getMovieVideos = async ()=>{
        const url = 'https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US';
        const data = await fetch(url, API_OPTIONS);
        const json = await data.json();

        const filterData = json.results.filter((video)=> video.type === 'Trailer');
        const trailer = filterData.length?filterData[0]:json.results[0];
        dispatch(addMovieTrailer(trailer));
    }

    useEffect(()=>{
        getMovieVideos();
    },[]);
}

export default useMovieTrailer;