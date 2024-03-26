import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {onAuthStateChanged, signOut} from 'firebase/auth';
import {auth} from '../utils/Firebase'
import {addUser,removeUser} from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/Constants';
import {addGPTMovieResults, toggleGPTSearchView} from '../utils/GPTSlice';
import {changeLanguage} from '../utils/configSlice';


const Header = () => {
  const user = useSelector(store=>store.user);
  const showGPTSearch = useSelector(store=>store?.gpt?.showGPTSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
        // User is signed in
            const {uid,displayName,email,photoURL} = user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
            navigate('/browse');
        } else {
          // User is signed out
            dispatch(removeUser());
            navigate('/');
        }
      });
      //unsubscribe onAuthStateChanged when the header component unmounts from the dom.
      //It's a kind of an eventListner.
      return ()=> unSubscribe();       
},[]);

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate('/error');
    });
  }

  const handleGPTSearchClick = ()=>{
    // Toggle GPT Search.
    if(!showGPTSearch){
      dispatch(addGPTMovieResults({gptMovieNames:null,gptMovieResults:null}));
    }
    dispatch(toggleGPTSearchView());

  }

  const handleLanguageChange = (e)=>{
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-52'
      src={LOGO}
      alt='NetflixGPT-logo'/>
      {user && 
      <div className='flex p-2'>
        {showGPTSearch && <select onChange={handleLanguageChange} className='p-2 m-2 mb-6 rounded-lg hover:cursor-pointer bg-gray-800 bg-opacity-85 text-white'>
          {SUPPORTED_LANGUAGES.map(lang=>(<option key={lang.Identifier} value={lang.Identifier}>{lang.name}</option>))}
        </select>}
        <button className='p-2 m-2 mb-6 text-white bg-violet-800 rounded-lg hover:bg-opacity-85' 
        onClick={handleGPTSearchClick}>{showGPTSearch? 'Home':'GPT Search✨'}</button>
        <img className='w-10 h-10 m-2 rounded-md' src={user?.photoURL} alt='usericon'/>
        <button className='font-bold text-white mb-4' onClick={handleSignOut}>
          Sign out
        </button>
      </div>
      }
    </div>
  )
}

export default Header