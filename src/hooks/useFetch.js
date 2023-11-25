import { useEffect, useState } from "react";


export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(null);


    



    useEffect(() => {
        let running = true;
        let temp = [];
        setLoading(true);
        const getData = async () => {
            try {
                const response = await fetch(url, {headers: 
                    {'Content-Type': 'application/json','Accept': 'application/json'}
                });
                const json = await response.json();

    
                
                

                if (running) {
                    setData(json);
                    setLoading(false);
                }
            } catch(error) {
                if (running) {
                    setError(error.message);
                    setLoading(false);
                }
            }
        }
        getData();

        return () => {
            running = false;
            temp = []
        }
    }, [url]);


    return [data,loading,error,setData, setLoading]
}