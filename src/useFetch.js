import { useEffect , useState} from "react";

const useFetch = (url) => {
    const [data, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


        // useEffect runs whenever the component renders, or if you have a dependency array parameter, it will only run the one time
        useEffect( () => {
            const abortCont = new AbortController();

            console.log("useEffect ran")
            fetch(url, {signal: abortCont.signal})
                .then(res => { // This then gets the response object and returns it to the next then
                    if (!res.ok){
                        throw Error("Could not fetch data")
                    }
                    return res.json();
                })
                .then(data => { // This then gets us the actual data form that response object
                    console.log("Final then in useEffect ran");
                    setBlogs(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch( err => {
                    if (err.name === 'AbortError'){
                        console.log('useFetch aborted')
                    }
                    else {
                    setError(err.message);
                    setIsPending(false);
                    }
                })

                return () => abortCont.abort();
            // setBlogs({title:"infinite loop"}); // This would cause an infinite loop because this would change the state, thus triggering useEffect again
        }, [url]); // the [] here is an empty array representing the dependency parameter 

        return { data, isPending, error }

    }

export default useFetch;