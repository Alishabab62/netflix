import React, { useEffect } from 'react'
// import logo from "../assests/Netflix_Logo_PMS.png"
import logo from "../assests/Shabab.png"
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptComp } from '../utils/gptSlice';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store=>store.user);
    const gpt = useSelector(store=>store.gpt);


    const handleSignOut = () => {
        signOut(auth).then(() => {
            dispatch(removeUser());
            navigate("/")
          }).catch((error) => {
            navigate("/error");
          });
    }


        useEffect(()=>{
            const unsubscribe =  onAuthStateChanged(auth, (user) => {
                if (user) {
                    const {uid, email,displayName,photoURL,phoneNumber} = auth.currentUser;
                    dispatch(addUser({uid:uid, email:email,displayName:displayName,photoUrl:photoURL,phoneNumber:phoneNumber}))
                    navigate("/browse")
                } else {
                    navigate("/")
                }
                });
                return ()=> unsubscribe();
                // eslint-disable-next-line
        },[])

        const handleGPT = ()=>{
          dispatch(toggleGptComp());
        }

  return (
    <div className='absolute bg-gradient-to-b from-black w-full z-10 flex justify-between items-center md:px-10 px-1 md:pt-1 pt-2'>
        <img src={logo} alt='logo' className='md:w-44 w-20 cursor-pointer' onClick={()=>navigate("/")}/>
        {user &&  <div className='text-white flex items-center font-bold'><button onClick={handleGPT} className='bg-red-500 md:px-4 px-[5px] md:py-2 py-1 rounded-md text-sm'>{gpt.toggleGpt ? "Home Page" : "GPT Search"}</button> <p className='md:mx-3 mx-2'>{user.displayName} </p><button className='bg-red-500 md:px-4 px-[5px] md:py-2 py-1 rounded-md text-sm' onClick={handleSignOut}>Sign Out</button></div>}
    </div>
  )
}

export default Header