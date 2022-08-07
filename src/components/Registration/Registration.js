import React, { useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import useToken from '../../customHooks/useToken';
const Registration = () => {
 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, error2] = useUpdateProfile(auth);

      const [token] = useToken(user);
      
      
       const nameRef = useRef();
       const emailRef = useRef();
       const passwordRef = useRef();
       const navigate = useNavigate();
       const handleRegistration = async(e) =>{
          e.preventDefault();
          const name = nameRef.current.value;
          const email = emailRef.current.value;
          const password = passwordRef.current.value;
         await createUserWithEmailAndPassword(email,password);
         await updateProfile({displayName:name});
         
       }
     if(user){
        navigate('/dashboard');
     }
     
    return (
        <section>
            <div
                style={{ margin: "0 auto" }}

                className='w-96'>
                <h2 className='text-center text-white text-3xl font-bold my-5'> Registration </h2>
                <div>
                    <form onSubmit={handleRegistration} className='flex flex-col gap-5 pb-5'>
                        <input ref={nameRef} type="text" placeholder="Your name" name='name' class="input input-bordered w-96" />
                        <input ref={emailRef} type="text" placeholder="Your Email" name='email' class="input input-bordered w-96" />
                        <input ref={passwordRef} type="password" placeholder="password" name='password'  class="input input-bordered w-96" />
                        <input type="submit" value="Signup" className='input input-bordered w-96 btn btn-primary' />
                    </form>

                    <div className='flex justify-between pb-5'>
                        <Link to="">Already have an Account? </Link>
                        <Link to="">Reset Password </Link>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Registration;