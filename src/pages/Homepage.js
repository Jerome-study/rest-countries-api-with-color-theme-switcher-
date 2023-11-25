import { Navbar } from "../components/Navbar"
import { Search } from "../components/Search"
import { Main } from "../components/Main"
import { useContext } from "react"
import { AppContext } from "../App"


export const Homepage = () => {
    const { isLightModeOn, setIsLightModeOn } = useContext(AppContext);
    return(
        <>
                
                <Navbar />
                <div className={isLightModeOn?" min-vh-100 p-3":"min-vh-100 p-3 dark-mode-1-main"} style={{background: "hsl(0, 0%, 98%)"}} >
                    <Search />
                    <Main />
                </div>

        </>
    )
}