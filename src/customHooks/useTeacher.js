import { useEffect, useState } from "react"

const useTeacher = user =>{
    const[teacher,setTeacher] = useState([]);
    useEffect( ()=>{
        const email = user?.email;
        if(email){
            fetch(`http://localhost:5000/user`)
            .then(res=>res.json())
             .then(data => setTeacher(data));
        }
        
    } ,[user])
    return [teacher];
}
export default useTeacher;