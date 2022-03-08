import { Link } from "react-router-dom";

const Bloglist = ({blogs,handleDelete}) => {
    

    return (
        <div className="blog-list">
         {blogs.map((blog)=> (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <button className="Butt" onClick={() => handleDelete(blog.id)}>Delete Blog</button>
           </Link>
        </div>
        ))}
        
        </div>);
    
}
 
export default Bloglist;