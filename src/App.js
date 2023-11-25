import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { CountryPage } from './pages/Countrypage';
import { createContext, useEffect, useState } from 'react';
export const AppContext = createContext();


function App() {
  const [filterRegion, setFilterRegion] = useState(null);
  const [regionName, setRegionName] = useState(null);
  const [filterOn, setFilterOn] = useState(false);
  const [isLightModeOn, setIsLightModeOn] = useState(localStorage.getItem("theme"));

  useEffect(() => {

  
    if (isLightModeOn === "false") {
      setIsLightModeOn(false)
    } else {
      setIsLightModeOn(true);
    }
  }, []);

  return (
    <> 
    <AppContext.Provider value={{filterRegion, setFilterRegion, regionName, setRegionName, filterOn, setFilterOn,isLightModeOn, setIsLightModeOn}}>
      <Router>
          <Routes>
            <Route path='/' element={<Homepage />}></Route>
            <Route path='*' element={<h1>Page not Found</h1>}></Route>
            <Route path='/:country' element={<CountryPage />}></Route>
          </Routes>
        </Router>
    </AppContext.Provider>
    </>
  )
}

export default App