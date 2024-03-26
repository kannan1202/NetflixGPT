import React,{useRef} from 'react'
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/Constants';
import { addGPTMovieResults } from '../utils/GPTSlice';

const GPTSearchBar = () => {

    const dispatch = useDispatch();
    const langKey = useSelector(store=>store?.config?.lang);
    const searchText = useRef(null);

    // Search Movie from TMDB
    const searchMovieTMDB = async(movieName)=>{
      const url = 'https://api.themoviedb.org/3/search/movie?query='+movieName+'&include_adult=false&language=en-US&page=1';
      const data = await fetch(url, API_OPTIONS);
      const json = await data.json();
      return json.results;
    }

    const handleGPTSearchClick = async()=>{

        const GPTQuery = "Act as an Movie Recommendation system and suggest some movies for the query "
                        +searchText.current.value+
                        " only give names of 5 movies, comma seperated like the example result given ahead.Example results: Interstellar, Dune, premalu, Veeram, Mangatha";

        //Make an API call to GPT API and get Movie Results.
        const GPTResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: GPTQuery }],
            model: 'gpt-3.5-turbo',
          });
          console.log(GPTResults?.choices[0]?.message?.content);
          //Kalakalappu, Boss Engira Bhaskaran, Kanchana, Pokkiri, Vasool Raja MBBS

          if(!GPTResults.choices){
            // TODO: Error handling has to be written!
          }

          const GPTMovies = GPTResults?.choices[0]?.message?.content.split(',');
          const promiseArray = GPTMovies.map(movie=>searchMovieTMDB(movie));

          const tmdbResults = await Promise.all(promiseArray);
          console.log(tmdbResults);
          dispatch(addGPTMovieResults({gptMovieNames:GPTMovies,gptMovieResults:tmdbResults}));
    }

  return (
    <div className='pt-[45%] md:pt-[12%] flex justify-center'>
        <form onSubmit={(e)=>e.preventDefault()}className='w-full m-4 md:w-8/12 bg-black bg-opacity-85 grid grid-cols-12 rounded-lg'>
            <input ref={searchText} type='text' className='p-4 m-4 rounded-lg col-span-9' placeholder={lang[langKey].GPTSearchBarPlaceholder}></input>
            <button onClick={handleGPTSearchClick} className='m-4 bg-red-700 text-white rounded-lg col-span-3'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar