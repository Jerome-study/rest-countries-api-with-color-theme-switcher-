import { AppContext } from "../App"
import { useContext } from "react"
import { useNavigate } from "react-router-dom";

export const Country = (props) => {
    const { isLightModeOn, setIsLightModeOn } = useContext(AppContext);
    const { data } = props
    const navigate = useNavigate();
    const selectCountry = (country) => {

        navigate(`/${country.name}`, {state: country})
    }


    return(
        <>
            <div className="container">
                <div className="w-100 row row-cols-4  mx-0 justify-content-lg-between gap-3 justify-content-md-between justify-content-center">
                    {data?.map((country,index) => {
                        return(
                            <div key={index} className={isLightModeOn? "card col p-0 shadow w-100 mb-5 card-style":"shadow card col p-0 w-100 mb-5 card-style dark-mode-1"} style={{maxWidth:"17rem"}} onClick={() => selectCountry(country)} >
                                <img src={country.flags.png} style={{maxHeight: "160px"}}  className="card-img-top h-100" alt="..." />
                                <div className="card-body px-4 py-5">
                                    <h5 className={isLightModeOn?"card-title": "card-title light-text"}>{country.name}</h5>
                                    <p className={isLightModeOn?"mb-0": "mb-0 light-98"} ><span className={isLightModeOn?"":"light-text"}>Population:</span> {country.population}</p>
                                    <p className={isLightModeOn?"mb-0": "mb-0 light-98"}><span className={isLightModeOn?"":"light-text"}>Region:</span> {country.region}</p>
                                    <p className={isLightModeOn?"": " light-98"}><span className={isLightModeOn?"":"light-text"}>Capital:</span > {country.capital}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}