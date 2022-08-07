import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from "react-router-dom"
import useTeacher from '../../customHooks/useTeacher';
import auth from '../../firebase.init';

const DashBoard = () => {
 
    const[user] = useAuthState(auth);
    const name = user?.displayName;
    const email = user?.email;
    const [teacher] = useTeacher(user);
    const{role} = teacher;
    console.log(role);
    return (
        <section className='my-5'>
            <div>
                <div className="drawer drawer-mobile px-12 mt-10">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col text-center text-2xl font-semibold">
                        <Outlet></Outlet>


                    </div>
                    <div className="drawer-side mr-5">
                        <label for="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 overflow-y-auto w-80 bg-slate-200 text-center">
                            <div className="avatar ">
                                <div className="w-24 rounded-full flex flex-col content-center mx-20">
                                    <img src="https://api.lorem.space/image/face?hash=3174" />
                                </div>
                            </div>
                             <div className='text-center my-5 font-semibold'>
                             <h3 className='text-4xl text-secondary'> {name} </h3>
                             <h3 className='font-2xl text-primary'> {email} </h3>
                             </div>

                            <li> <Link to="allstudents"> Load All Students </Link> </li>
                             

                        </ul>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashBoard;