import React from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase';


const Sim_Login = () => {

  const auth = getAuth(app);
const login_handle = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });
}
 
  return (
    <div>
        <div>
            <h1 className=' text-yellow-500'>Login</h1>
            <div  className='mt-20 text-center'>
                <h1 className='text-[40px] font-black'>login</h1>
                <input className='bg-slate-200 w-[400px] outline-none h-[50px] p-6' id='email' placeholder='Enter your email..' type="email" />
                <br />
                <br />
                <input className='bg-slate-200 w-[400px]  outline-none h-[50px] p-6'  id='password' placeholder='Enter your passward..' type="password" />
            </div>
            <div>
                <button className='bg-blue-700 p-2 w-20 rounded-md  text-white btn-info ml-[438px] mt-[50px]' onClick={login_handle} >Login</button>
                <br />
                <span className=' ml-[438px]'>Create new acount.</span><a href="/SignUp" className='text-blue-700 underline'>Signup</a>
                
            </div>
        </div>







    </div>
  )
}

export default Sim_Login