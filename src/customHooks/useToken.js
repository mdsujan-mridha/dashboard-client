import { useEffect, useState } from "react"

const useToken = user =>{
    const[token,setToken] = useState('');
    useEffect( ()=>{
     const email = user?.user?.email;
     const displayName = user?.user?.displayName;
     const currentUser = {email: email};
     const currentName = {displayName : displayName}
     if(email){
        fetch(`http://localhost:5000/user/${email}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(currentUser)
        })
        .then(res => res.json())
         .then(data => {
            console.log(data);
         });
     }

     if(displayName){
        fetch(`http://localhost:5000/user/${displayName}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(currentName)
        })
        .then(res => res.json())
         .then(data => {
            console.log(data);
         });

     }


    } ,[user]);
    return [token];
}
export default useToken;