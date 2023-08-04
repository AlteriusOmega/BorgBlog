import BlogList from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
    // Below, with data: blogs, blogs is just an alias for the argument data
    const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs");


    return ( 
        <div className="home">
            {error && <div>{error}</div> }
            {isPending && <div>Loading...</div> }
            {/* Below, blogs prop (property) is being passed into the BlogList component. You define the props like you would define normal HTML tag properties like class or id. 
            Also using logical and && to make it so we don't try to use blogs before it's loaded*/}
            {blogs && <BlogList blogs={blogs} title="All blogs"></BlogList>}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author==="mario")} title="Mario's blogs" handleDelete = {handleDelete}></BlogList> */}
        </div>
     );
}
 
export default Home;