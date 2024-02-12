import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/Validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth} from '../utils/Firebase'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATAR } from '../utils/Constants';



const Login = () => {
  const [isSignInForm,setIsSignInform] = useState(true);
  const [errMessage,setErrMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = ()=>{
    const message = isSignInForm?checkValidData(email.current.value,password.current.value):checkValidData(email.current.value,password.current.value,name.current.value);
    setErrMessage(message);
    if(message) return;

    if(!isSignInForm){
      //SignUp logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
     console.log(user);
     updateProfile(user, {
      displayName: name.current.value, photoURL:USER_AVATAR
    }).then(() => {
      // Profile updated!
      const {uid,email,displayName,photoURL} = auth.currentUser;
      dispatch(addUser({uid:uid,displayName:displayName,email:email,photoURL:photoURL}));
    }).catch((error) => {
     setErrMessage(error.message);
    });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrMessage(errorCode+"-"+errorMessage);
    });
    }else{
      //SignIn logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrMessage(errorCode+"-"+errorMessage);
    });
    }
  }

  const toggleSignInForm = ()=>{
    setIsSignInform(!isSignInForm);
    setErrMessage(null);
  }

  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg"
        alt="NetflixGPT-Bg-Img"/>
      </div>
      <form onSubmit={(e)=>{e.preventDefault();}} className='absolute p-12 bg-black w-4/12 my-36 mx-auto right-0 left-0 text-white rounded-md bg-opacity-85'>
        <h1 className='font-semibold text-3xl py-2'>{isSignInForm? "Sign In": "Sign Up"}</h1>
        {!isSignInForm && (<input ref={name} type='text' placeholder='Username' className='p-4 my-2 w-full rounded-md border border-slate-600 bg-transparent'/>)}
        <input ref={email} type='email' placeholder='Email Address' className='p-4 my-2 w-full rounded-md border border-slate-600 bg-transparent'/>
        <input ref={password} type='password' placeholder='Password' className='p-4 my-2 w-full rounded-md border border-slate-600 bg-transparent'/>
        <p className='text-red-600'>{errMessage?'✕ '+errMessage:errMessage}</p>
        <button className='p-4 my-8 bg-red-600 w-full rounded-md' onClick={handleButtonClick}>
        {isSignInForm? "Sign In": "Sign Up"}
        </button>
        <p className='py-4 font-light cursor-pointer' onClick={toggleSignInForm}>
          {isSignInForm? "New to Netflix? Sign up now.": "Already a user? Sign In now."}
        </p>
      </form>
    </div>
  )
}

export default Login