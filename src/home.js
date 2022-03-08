import { useState } from "react";
import Bloglist from "./Blog list";
import {useEffect} from "react";

const Home = () => {
  const {data,isLoading,error}=fetch('http://localhost:8000/blogs')
  
  return (
     
     <div className="home">
       {error || <h2 className="head">List of Blogs</h2>}
        {blogs && <Bloglist blogs={blogs}  handleDelete={handleDelete}></Bloglist>}
        { isLoading && <div className="loading">loading.....</div>}
        <div className="overlay"></div>
       

         </div>
       
       
      
    
    );
  }
   
  export default Home;