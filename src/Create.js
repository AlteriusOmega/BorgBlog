import { useState } from "react";
import {useHistory} from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('picard');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory(); // This object represents history

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        setIsPending(true);
        
        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("New blog added")
            setIsPending(false);
            // history.go(-1);
            history.push('/') // Use history object to go to home page
        })

    }

    return ( 
        <div className="create">
            <h2>Add new blog!</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                >
                </textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="picard">Picard</option>
                    <option value="riker">Riker</option>
                </select>
                {!isPending && <button>Add blog!</button>}
                {isPending && <button disabled>Adding new blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;