import React, { useRef, useState } from 'react'
import Header from './Header'
import bgImage from '../assests/bg.jpg'
import { validationCheckSignIn,validationCheckSignUp } from '../utils/validate';
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const [isSignInForm,setIsSignInForm] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null);
    const name = useRef(null);
    const email = useRef(null);
    const phone = useRef(null);
    const password = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();



    const toggleForm = ()=>{
        setIsSignInForm(!isSignInForm);
        setErrorMessage(null);
        email.current.value = "";
        password.current.value = "";
        !isSignInForm && (name.current.value = "");
       !isSignInForm &&  ( phone.current.value = "");
    }

    const handleSingUpFormSubmit = (e)=>{
        e.preventDefault();
        const validationMessage = validationCheckSignUp(email.current.value,password.current.value,name.current.value,phone.current.value);
        setErrorMessage(validationMessage);
        if(validationMessage){
            return
        }
        else{
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                   
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg",phoneNumber:phone.current.value
                      }).then(() => {
                          const {uid, email,displayName,photoURL,phoneNumber} = auth.currentUser;
                          dispatch(addUser({uid:uid, email:email,displayName:displayName,photoUrl:photoURL,phoneNumber:phoneNumber}))
                        navigate("/browse")
                      }).catch((error) => {
                        setErrorMessage(error.message);
                        navigate("/error")
                      });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage,errorCode);
                    setErrorMessage(errorMessage)
                });
        }

    }
    const handleSingInFormSubmit = (e)=>{
        e.preventDefault();
        const validationMessage = validationCheckSignIn(email.current.value,password.current.value);
        setErrorMessage(validationMessage);
        if(validationMessage){
            return
        }
        else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // const user = userCredential.user;
                    const {uid, email,displayName,photoURL,phoneNumber} = auth.currentUser;
                    dispatch(addUser({uid:uid, email:email,displayName:displayName,photoUrl:photoURL,phoneNumber:phoneNumber}))
                    navigate("/browse")
                })
                .catch((error) => {
                    // const errorCode = error.code;
                    // const errorMessage = error.message;
                    navigate("/")
                    setErrorMessage(errorMessage);
                });
        }

    }

    setInterval(() => {
        setErrorMessage(null)
    }, 5000);

  return (
    <div className=''>
        <Header/>
        <div className=''>
            <img src={bgImage} alt="background" className='w-full h-screen absolute'/>
        </div>
        <form className=' absolute bg-black opacity-90 mx-auto left-0 right-0 md:w-3/12 w-11/12 md:mt-40 mt-32  p-6 rounded-lg text-white'>
            <h1 className='font-bold text-3xl mb-2'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {
                !isSignInForm && <input ref={name} type="text" placeholder='Full Name' className='p-3 my-2 rounded-md bg-gray-700 w-full'/>
            }
            {
                !isSignInForm && <input ref={phone} type="tel" placeholder='Phone' className='p-3 my-2 rounded-md bg-gray-700 w-full'/>
            }
            <input ref={email} type="email" placeholder='Email' className='p-3 my-2 rounded-md bg-gray-700 w-full'/>
            <input ref={password} type="password" placeholder='Password' className='p-3 mt-4 rounded-md bg-gray-700 w-full'/>
            <p className='text-red-500 my-2'>{errorMessage}</p>
            <button onClick={isSignInForm ? handleSingInFormSubmit : handleSingUpFormSubmit} className='w-full bg-red-800 py-3 rounded-md mt-4'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='cursor-pointer mt-4' onClick={toggleForm}>{isSignInForm ? "New To Netflix? Sign Up" : "Already a user? Sign In"}</p>
        </form>
    </div>
  )
}

export default Login