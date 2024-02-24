import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const { currentUser, signinWithGoogle } = UserAuth();

  const auth = getAuth();
const LogIn= ()=>{
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}


const SignUp= ()=>{
  
}














  const LoginGoogle = async () => {
    try {
      await signinWithGoogle();
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(currentUser) {
      navigate("/chat")
    }
  }, [currentUser]);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there 👋🏻</h1>
          <p className="py-6">
          Join the conversation, meet new people, and make connections in one shared room.
          </p>
          
         <a href="/signup"><button className="btn m-2">Sign Up</button></a>
          <a href="/login"><button  className="btn m-2">Login</button></a>
          <button onClick={LoginGoogle} className="btn m-2">Login With Google</button>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
