import React, { useState } from 'react'
import {auth, googleprovider} from '../config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

function Auth() {
  
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

   const currentUser = auth.currentUser;
if (currentUser) {
  console.log(currentUser.email);
} else {
  console.log("No authenticated user.");
}

  const signIn = async () => {
      try{
       await createUserWithEmailAndPassword(auth, email, Password);  
      }
      catch(err){
        console.error(err);
      }
      }; 
  
      const signINgoogle = async () => {
        try{
          await signInWithPopup(auth, googleprovider);  
         }catch(err){
           console.error(err);
         }
        };

    const Logout = async () => {
      try{
        await signOut(auth);  
       }catch(err){
         console.error(err);
       }
      };
  return (
    <div>
        <input placeholder='Email...' 
        onChange={ (e) => setEmail(e.target.value)}/>
        <input placeholder='Password...' type='password'
        onChange={ (e) => setPassword(e.target.value)}/>

        <button onClick={signIn} className='border mx-2'>Sign in</button>

        <button onClick={signINgoogle} className='border'>Sing in with google</button>
        <button onClick={Logout}>Log out</button>
    </div>
  )
}

export default Auth;