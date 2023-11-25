import { MoonOutline, SunnyOutline } from "react-ionicons";
import { AppContext } from "../App";
import { useContext, useEffect } from "react";
export const Navbar = () => {
    const { isLightModeOn, setIsLightModeOn } = useContext(AppContext);
    
    useEffect(() => {
        localStorage.setItem("theme", isLightModeOn)
    }, [isLightModeOn])


    return(
        <>
            <nav className={isLightModeOn? "navbar navbar-expand-lg  shadow-sm p-lg-3 p-2 px-3": "navbar navbar-expand-lg  shadow-sm p-lg-3 px-3 dark-mode-1"} style={{background:"hsl(0, 0%, 100%)"}} >
                <div className="container">
                    <a className={isLightModeOn?"navbar-brand title-logo":"navbar-brand title-logo dark-mode-1"} href="/">Where in the World?</a>
                    <div className="d-flex gap-2 align-items-center" onClick={() => {isLightModeOn? setIsLightModeOn(false): setIsLightModeOn(true)}}>
                        {isLightModeOn?<MoonOutline height="40px"
                        width="25px" 
                        color = "white"
                        />:<SunnyOutline height="40px"
                        width="25px"
                        color="black" 
                        />}
                        <span className="dark-mode-title">{isLightModeOn? "Light Mode": "Dark Mode"}</span>
                    </div>
                </div>
            </nav>

        
        </>
    )
};