import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { onAuthStateChanged, signInWithEmailLink } from "firebase/auth";
import {auth} from '../utils/Firebase'
import { useDispatch } from 'react-redux'
import { addUser,removeUser } from '../utils/userSlice'

const Body = () => {
    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }

    ])

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
            // User is signed in
                const {uid,displayName,email,photoURL} = user;
                dispatch(addUser({uid:uid,email:email}));
            } else {
              // User is signed out
                dispatch(removeUser());
            }
          });          
    },[]);

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body