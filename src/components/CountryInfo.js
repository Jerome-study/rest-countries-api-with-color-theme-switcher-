import { ArrowBack } from "react-ionicons"
import { AppContext } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
export const CountryInfo = (props) => {
    const { isLightModeOn, setIsLightModeOn, setFilterRegion, setRegionName, setFilterOn } = useContext(AppContext);
    const navigate = useNavigate();
    const { country } = props

    const goBack = () => {
        setFilterRegion(null);
        setRegionName("Filter by Region");
        setFilterOn(false);
        navigate("/");
    }


    return(
        <div className="container country-info">
            <button type="button" className={isLightModeOn? "btn btn-light d-block w-100 bg-white shadow my-5": "btn btn-light d-block w-100 bg-white shadow my-5 dark-mode-1"} style={{maxWidth: "8rem"}} onClick={() => goBack()} >
                    <ArrowBack height="30px"
                        width="20px"
                        color={isLightModeOn?"black": "white"}
                    />
                    <p className="d-inline ms-2">Back</p>
            </button>
            
            <div>
                <div className="row row-cols-2  align-items-center justify-content-between ">
                    <div className="col col-12 col-md-6 col-lg-6 col-xl-6 ">
                        <img className="img-fluid mt-5  "    src={country.flags.svg} alt="" />
                    </div>
                    <div className="col col-12 col-md-6 col-lg-5 col-xl-5 country-details">
                        <h5 className={isLightModeOn?"my-4":"my-4 light-text"}>{country.name}</h5>
                        <div className="row row-cols-2 justify-content-between">
                            <div className="mb-md-4 col col-12 col-md-5 ">
                                <p className={isLightModeOn?null:"light-98"}><span className={isLightModeOn?null:"light-text"}>Native Name:</span>{country.nativeName}</p>
                                <p className={isLightModeOn?null:"light-98"}><span className={isLightModeOn?null:"light-text"}>Population:</span>{country.population}</p>
                                <p className={isLightModeOn?null:"light-98"}><span className={isLightModeOn?null:"light-text"}>Region:</span>{country.region}</p>
                                <p className={isLightModeOn?null:"light-98"}><span className={isLightModeOn?null:"light-text"}>Sub Region:</span>{country.subregion}</p>
                                <p className={isLightModeOn?null:"light-98"}><span className={isLightModeOn?null:"light-text"}>Capital:</span>{country.capital}</p>
                            </div>
                            <div className="mt-5 mb-4 mt-md-0 col col-12 col-md-5">
                                <p className={isLightModeOn?null:"light-98"}><span className={isLightModeOn?null:"light-text"}>Top Level Domain:</span>{country.topLevelDomain}</p>
                                <p className={isLightModeOn?null:"light-98"}><span className={isLightModeOn?null:"light-text"}>Currencies:</span>{country.currencies[0].name}</p>
                                <p className={isLightModeOn?null:"light-98"}><span className={isLightModeOn?null:"light-text"}>Languages:</span>{country?.languages.map((lang,index) => {
                                    if (country.languages.indexOf(lang) === country.languages.length - 1) {
                                        return lang.name
                                    }

                                    return lang.name + ", "
                                    
                                 })}</p>
                            </div>
                        </div>
                        <div>
                                    <p className={isLightModeOn? "d-block d-lg-inline me-3 h5": "light-text d-block d-lg-inline me-3 h5"}>Border Countries:</p>
                                    {country.borders?.map((border,index) => {
                                                    return(
                                                        <div className="col d-inline d-lg-inline me-3" key={index}>   
                                                            <button style={{maxWidth: "5rem"}} type="button"  className={isLightModeOn? "border-btn d-inline col-4 btn shadow btn-light w-100 mb-2 p-0": "border-btn d-inline col-4 btn shadow btn-light w-100 mb-2 p-0 dark-mode-1"}>{border}</button>
                                                        </div>
                                                    )
                                    })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}