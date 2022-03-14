const Create = () => {
    return ( <div className="create">
        <h2>Add a new Blog</h2>
        <form>
            <label>Blog Title</label>
            <input
            type="text"
            required
            />
            <label>Blog Body</label>
            <textarea
            required></textarea>
            <label>Blog author:</label>
            <select>
                <option value="Madara">Madara</option>
                <option value="Rengoku">Rengoku</option>
            </select>
            <button>Add Blog</button>
        </form>
    </div>);
}
 
export default Create;