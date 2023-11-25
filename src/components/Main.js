import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { AppContext } from "../App";
import { useContext } from "react";
import { Country } from "./Country";
export const Main = () => {
    const { filterRegion, filterOn, setFilterOn, setFilterRegion } = useContext(AppContext);
    const [data,loading,error] = useFetch("../data.json");
    const [temp, setTemp] = useState(data);

    
    

    useEffect(() => {
        if (!temp) {
            setFilterRegion("All");
        }
    }, [])

    useEffect(() => {
        if(!filterRegion) {
            return
        }
        let temps = data?.filter((c, index) => c.region === filterRegion)
        setTemp(temps);
    }, [filterRegion])

    


    if (loading) {
        return <h1 className="text-center">Loading...</h1>
    }

    if (error) {
        return <h1>Something went wrong....</h1>
    }

    if (filterOn) {
        return(
            <Country data={temp} />
        )
    }

    return(
        <Country data={data} />
    )

    
};