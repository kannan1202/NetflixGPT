import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm,setIsSignInform] = useState(true);

  const toggleSignInForm = ()=>{
    setIsSignInform(!isSignInForm);
  }

  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg"
        alt="NetflixGPT-Bg-Img"/>
      </div>
      <form className='absolute p-12 bg-black w-4/12 my-36 mx-auto right-0 left-0 text-white rounded-md bg-opacity-85'>
        <h1 className='font-normal text-4xl py-2'>{isSignInForm? "Sign In": "Sign Up"}</h1>
        {!isSignInForm && (<input type='text' placeholder='Username' className='p-4 my-2 w-full bg-gray-800 rounded-md'/>)}
        <input type='email' placeholder='Email Address' className='p-4 my-2 w-full bg-gray-800 rounded-md'/>
        <input type='password' placeholder='Password' className='p-4 my-2 w-full bg-gray-800 rounded-md'/>
        <button className='p-4 my-8 bg-red-600 w-full rounded-md'>
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