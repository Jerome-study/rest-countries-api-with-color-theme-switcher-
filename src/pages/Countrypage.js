import { useLocation } from "react-router-dom"
import { Navbar } from "../components/Navbar";
import { AppContext } from "../App";
import { useContext } from "react";
import { CountryInfo } from "../components/CountryInfo";
export const CountryPage = () => {
    const { isLightModeOn, setIsLightModeOn } = useContext(AppContext);
    const location = useLocation();
    const country = location.state

    if (!country) {
        return <h1>Something wrong...</h1>
    }

    return(
        <>
            <Navbar />

            <div className={isLightModeOn?" min-vh-100 p-4":"min-vh-100 p-4 dark-mode-1-main"} style={{background: "hsl(0, 0%, 98%)"}} >
                <CountryInfo country={country} />
            </div>
        </>
    )
}