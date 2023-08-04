import { Link } from 'react-router-dom';

const BlogList = ( props) => {
    console.log("BlogList ran")

    const blogs = props.blogs;
    const title = props.title;
    // console.log(props, blogs);

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map( (blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                    <h2>{ blog.title }</h2>
                    <p>Written by {blog.author}</p><br />
                    {/* <p>{blog.body}</p> <br /> <br /> */}
                    </Link>
                </div>
            ) )}
        </div>
        
     );
}
 
export default BlogList;