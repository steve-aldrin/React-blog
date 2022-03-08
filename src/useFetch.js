import { useState } from "react";
import {useEffect} from "react";
importblo

const useFetch=(path) => {
    const  [Data,setData] = useState(null);
    const  [isLoading,setisLoading]=useState(true);
    const [error,setError]=useState(null);

    const handleDelete=(id)=>
    {
    const newblogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newblogs);

    }
    useEffect(()=>{
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
        setisLoading(false);
        setError(err.message)
    })
    },[]);
    return {data,isLoading,error}
    }

export default useFetch()