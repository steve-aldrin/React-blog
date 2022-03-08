
import Bloglist from "./Blog list";
import useFetch from "./useFetch";

const Home = () => {
  const {Data,isLoading,error,handleDelete}=useFetch('http://localhost:8000/blogs')
  
  
  
  
  return (
     
     <div className="home">
       {error || <h2 className="head">List of Blogs</h2>}
        {Data && <Bloglist blogs={Data}  handleDelete={handleDelete}></Bloglist>}
        { isLoading && <div className="loading">loading.....</div>}
        <div className="overlay"></div>
       

         </div>
       
       
      
    
    );
  }
   
  export default Home;