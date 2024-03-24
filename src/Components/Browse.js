import Header from './Header';
import useNowPlayingMovies from '../CustomHooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../CustomHooks/usePopularMovies';
import useTopRatedMovies from '../CustomHooks/useTopRatedMovies';
import useUpcomingMovies from '../CustomHooks/useUpcomingMovies';
import GPTSearchPage from './GPTSearchPage';
import { useSelector } from 'react-redux';

const Browse = () => {

  const showGPTSearchView = useSelector(store=>store?.gpt?.showGPTSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header/>
      {showGPTSearchView?(<GPTSearchPage/>):
      (<>
      <MainContainer/>
      <SecondaryContainer/>
      </>)} 
    </div>
  )
}

export default Browse;