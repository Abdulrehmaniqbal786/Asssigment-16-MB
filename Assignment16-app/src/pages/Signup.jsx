import React from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';



const Signup = () => {
  const Navigate = useNavigate()
  const { currentUser, signup } = UserAuth();

  const auth = getAuth(app);
 const  Signup_handle = () =>{
  createUserWithEmailAndPassword(auth,email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
  
  const Signup_handle = async () => {
    try {
      await signinWithGoogle();
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(currentUser) {
      Navigate("/chat")
    }
  }, [currentUser]);
 }

  return (
    <div>
        <div>
            <h1 className=' text-yellow-500'>Sign Up</h1>
            <div  className='mt-20 text-center'>
                <h1 className='text-[40px] font-black '>Sign Up</h1>
                <input className='bg-slate-200 w-[400px] outline-none h-[50px] p-6' id='email' placeholder='First name..' type="email" />
                <br />
                <br />
                <input className='bg-slate-200 w-[400px] outline-none h-[50px] p-6' placeholder='Last name..' type="text" />
                <br />
                <br /><input className='bg-slate-200 w-[400px] outline-none h-[50px] p-6' placeholder='Date of Birth' type="date" />
                <br />
                <br />
                <input className='bg-slate-200 w-[400px] outline-none h-[50px] p-6' placeholder='Enter email..' type="text" />
                <br />
                <br />
                <input className='bg-slate-200 w-[400px]  outline-none h-[50px] p-6' id='password' placeholder='Enter  passward..' type="password" />
            </div>
            <div>
                <button className='bg-blue-700 p-2 w-20 rounded-md  text-white btn-info ml-[438px] mt-[50px]' onClick={Signup_handle}>SignUp</button>
                <br />
                <span className=' ml-[438px]'>Already have an acount.</span><a href="/login" className='text-blue-700 underline'>Login</a>
                
            </div>
        </div>







    </div>
  )
}

export default Signup