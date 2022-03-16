import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams() 
  const {Data:blog,error,isLoading}=useFetch('http://localhost:8000/blogs/'+ id);
  const history=useHistory();
const handleclick=() =>{
  fetch('http://localhost:8000/blogs/'+blog.id,{
    method:'DELETE'
  }).then(()=>{
    history.push('/')

  })
}
    return (
        <div className="blog-details">
           {isLoading && <div className="loadin">Loading</div>}
           {error && <div> {error}</div>}
           {blog && (
               <article>
                   <h2>{blog.title}</h2>
                   <p>Written by {blog.author}</p>
                   <div>{blog.body}</div>
                   <button onClick={handleclick}>Delete</button>
               </article>
           )}
        </div>
      );
}
 
export default BlogDetails;