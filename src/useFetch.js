import { useState } from "react";
import {useEffect} from "react";

const useFetch=(path) => {
    const  [Data,setData] = useState(null);
    const  [isLoading,setisLoading]=useState(true);
    const [error,setError]=useState(null);

    const handleDelete=(id)=>
    {
    const newblogs = Data.filter(blog => Data.id !== id);
    setData(newblogs);

    }
    useEffect(()=>{
    const abortCont= new AbortController
    fetch(path)
    .then(res =>{
        if(!res.ok){
        throw Error('Could Not Fetch data')
        }
        return res.json()
    }).then(data=>{
        setData(data);
        setisLoading(false);
        setError(null);
        
    })
    .catch(err =>{
        if(err.name =='AbortErroor'){
            console.log("ABORT ERROR")
        }
       else{ 
        setisLoading(false);
        setError(err.message)
       }
    })
    return ()=>{
        abortCont.abort()
    }
    },[]);
    return {Data,isLoading,error,handleDelete}
    }

export default useFetch;