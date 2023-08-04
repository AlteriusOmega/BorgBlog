import { useEffect , useState} from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


        // useEffect runs whenever the component renders, or if you have a dependency array parameter, it will only run the one time
    useEffect(() => {
            // Using AbortController to abort a fetch if user clicks link mid-fetch request
            const abortCont = new AbortController();

        console.log("useEffect ran")
        // passing in optional second argument in fetch call, setting signal property to our abort controller signal
            fetch(url, {signal: abortCont.signal})
                .then(res => { // This then gets the response object and returns it to the next then
                    if (!res.ok){
                        throw Error("Could not fetch data")
                    }
                    return res.json();
                })
                .then(data => { // This then gets us the actual data form that response object
                    console.log("Final then in useEffect ran");
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    // If the error is an abort error, we will not try to update the state which would cause crash
                    if (err.name === 'AbortError'){
                        console.log('useFetch aborted')
                    }
                    else {
                    // If the error is not an abort, we do still want to update the state by updating isPending
                    setError(err.message);
                    setIsPending(false);
                    }
                })

                return () => abortCont.abort();
            // setData({title:"infinite loop"}); // This would cause an infinite loop because this would change the state, thus triggering useEffect again
        }, [url]); // the [] here is an empty array representing the dependency parameter 

        return { data, isPending, error }

    }

export default useFetch;