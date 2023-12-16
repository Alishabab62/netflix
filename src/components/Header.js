import React, { useEffect } from 'react'
import logo from "../assests/Netflix_Logo_PMS.png"
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store=>store.user);


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

  return (
    <div className='absolute bg-gradient-to-b from-black w-full z-10 flex justify-between items-center px-10'>
        <img src={logo} alt='logo' className='w-44'/>
        {user &&  <div className='text-white flex items-center font-bold'><p className='mr-3'>{user.displayName} </p><button className='bg-red-500 px-4 py-2 rounded-lg' onClick={handleSignOut}>Sign Out</button></div>}
    </div>
  )
}

export default Header