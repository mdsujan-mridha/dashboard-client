import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from "react-router-dom";
import auth from '../../firebase.init';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const passwordRef = useRef();
      const emailRef = useRef();
      const navigate = useNavigate();
       
      const handleLogin = (e)=>{
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email,password);
      }
      if(user){
        navigate('/dashboard');
      }
    return (
        <section>
            <div
                style={{ margin: "0 auto" }}

                className='w-96'>
                <h2 className='text-center text-white text-3xl font-bold my-5'> Login </h2>
                <div>
                    <form onSubmit={handleLogin} className='flex flex-col gap-5 pb-5'>
                        <input ref={emailRef} type="text" placeholder="Email" name='email' class="input input-bordered w-96" />
                        <input ref={passwordRef} type="password" placeholder="password" name='password' class="input input-bordered w-96" />
                        <input type="submit" value="Login" className='input input-bordered w-96 btn btn-primary' />
                    </form>

                    <div className='flex justify-between pb-5'>
                        <Link to="">Create an Account? </Link>

                        <Link to="">Reset Password </Link>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Login;