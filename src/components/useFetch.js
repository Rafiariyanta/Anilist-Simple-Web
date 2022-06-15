import React, { useState, useEffect } from 'react';

const UseFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, {signal: abortCont.signal})
            .then( res => {
                if(res.ok) {
                    throw Error('cannot fetch data');
                }
                return res.json();
            })
            .then(data => {
                setIsLoading(false);
                setData(data);
                setError(null)
            })
            .catch(err => {
                if(err.name === 'AbortError'){
                    console.log('Fetch Abort');
                }else{
                    setIsLoading(false);
                    setError(err.message)
                }
            });
        }, 1000);
        return () => abortCont.abort();
    }, [url]);

    return { data, error, isLoading };
}

export default UseFetch;