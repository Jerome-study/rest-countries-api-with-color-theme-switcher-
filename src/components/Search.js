
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { AppContext } from '../App';
import { useContext, useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
export const Search = () => {
    const { setFilterRegion, regionName, setRegionName, setFilterOn, isLightModeOn } = useContext(AppContext);
    const [searchFilterOn, setSearchFilterOn] = useState(false);
    const [searchBar, setSearchBar] = useState(null)
    const [data,loading,error] = useFetch("data.json");
    const [regions, setRegions] = useState([]);
    const [searchResult, setSearchResult] = useState(null)
    const [loadingResult, setLoadingResult] = useState(true);
    const navigate = useNavigate();
    const searchCountry = (search) => {
        setLoadingResult(true);
        let temp = []
        temp = data?.filter((c,i) =>{
            if (c.name.includes(search.charAt(0).toUpperCase() + search.slice(1))) {
                return c
            }

            
        });
        setSearchResult(temp)
        setLoadingResult(false);
    }


    const selectCountry = (country) => {

        navigate(`/${country.name}`, {state: country})
    }

    useEffect(() => {

        const removeDuplicate = async () => {
            let temp = [];
            
            
            temp = await data?.map(d => {
                return d.region;
            })


            temp = await temp?.filter((t, index) => temp.indexOf(t) === index);
            setRegions(temp)
        }

        removeDuplicate();

        
    }, [loading]);

    

    useEffect(() => {
        if (!searchBar) {
            return setSearchFilterOn(false)
        }

        
    }, [searchBar])


    if (loading) {
        return <h1>Loading</h1>
    }

    
    

    return(
        <>
            <div className="container d-flex justify-content-between  flex-lg-row flex-column flex-md-column flex-sm-column mt-2 mb-4 mb-md-3 mb-lg-3 my-xl-5 ">
                <div  className="form-group has-search w-100 mb-3"  style={{maxWidth: "25rem"}}>
                    <span className="fa  fa-search form-control-feedback"></span>
                    <input type="text" className={isLightModeOn?"shadow-sm py-3 rounded form-control mb-1":"shadow-sm py-3 rounded form-control dark-mode-1 mb-1"}   placeholder="Search for a country..."  onChange={(e) =>{setSearchBar(e.target.value); setSearchFilterOn(true); searchCountry(e.target.value);} }    />
                    <ul className={isLightModeOn?searchFilterOn?"shadow-sm dropdown-menu w-75 display-block":"shadow-sm dropdown-menu w-75":searchFilterOn?" dark-mode-1 shadow-sm dropdown-menu w-75 display-block":" dark-mode-1 shadow-sm dropdown-menu w-75"} style={{maxWidth:"25rem"}}>
                        {loadingResult?<h1>Loading...</h1>:searchResult?.length > 0? searchResult?.map((result,index) => {
                            return <li key={index} onClick={() => selectCountry(result)}><a className={isLightModeOn?"dropdown-item":"dropdown-item dark-mode-1"} >{result.name}</a></li>
                        }): <li className={isLightModeOn?"dropdown-item":"dropdown-item dark-mode-1"}>Country Not Found</li> }
                    
                    </ul>

                    
                </div>
                <div  className="dropdown  w-75 " style={{maxWidth:"18rem"}}>
                    <button className={isLightModeOn?"region-btn border btn py-2 px-4 w-100 text-start bg-white d-flex align-items-center justify-content-between":
                        "region-btn shadow-sm btn py-2 px-4 w-100 text-start bg-white d-flex align-items-center justify-content-between dark-mode-1"} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span>{regionName?regionName: "Filter by Region"}</span>
                            <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                    <ul className={isLightModeOn?"shadow-sm dropdown-menu w-100":"shadow-sm dropdown-menu w-100 dark-mode-1"}>
                    <li><a className={isLightModeOn?"dropdown-item":"dropdown-item dark-mode-1"} href="#"  onClick={() => {setFilterRegion(null); setRegionName("All"); setFilterOn(false);}}>All</a></li>
                        {regions?.map((region,key) => {
                                return <li key={key}><a className={isLightModeOn?"dropdown-item":"dropdown-item dark-mode-1"} href="#"  onClick={() => {setFilterRegion(region); setRegionName(region); setFilterOn(true);}}>{region}</a></li>
                        })}
                    </ul>
                </div>

            </div>
        </>
    )
}