import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import StudentsRow from '../StudentsRow/StudentsRow';

const AllStudents = () => {

    const[students, setStudents] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/user')
         .then(res=>res.json())
          .then(data =>setStudents(data))
    } ,[])

    return (
        <section>
            <div>
                <h1 className='text-center my-5 text-white text-4xl font-semibold'>  All Students </h1>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                               
                                <th> Name </th>
                                <th> Email </th>
                                <th> Status </th>
                                <th> Comment </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                students.map(student => <StudentsRow
                                   key={student._id}
                                    student={student}
                                ></StudentsRow>)
                            }
                        </tbody>
                    </table>
                    <button className='btn btn-primary'>Submit</button>
                </div>
            </div>
        </section>
    );
};

export default AllStudents;
