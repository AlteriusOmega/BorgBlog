import { useState } from "react";
import {useNavigate} from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('picard');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate(); // This object represents history but in newer React Router Dom v6 useNavigate replaces useHistory

    const handleSubmit = (e) => {
        // Prevent the default action which is submit causing page to reload
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
            navigate('/') // Use navigate to go to home page
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
                    <option value="spock">Spock</option>
                    <option value="scotty">Scotty</option>
                    <option value="crusher">Crusher</option>
                    <option value="data">Data</option>
                    <option value="geordi">Geordi</option>
                </select>
                {!isPending && <button>Add blog!</button>}
                {isPending && <button disabled>Adding new blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;