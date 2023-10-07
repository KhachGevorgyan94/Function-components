import './App.css';
import React, {useEffect} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import {routerLinks} from "./router/router";
import {Home} from "./pages/home";
import {useInput} from './hook/useWindowSize'
import {AboutUs} from "./pages/about-us";


//  hooks
//  useRef
//  fetch -> axios
function App() {
    const location = useLocation()


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname]);

    return <div>
        <Routes>
            <Route path={routerLinks.HOME} element={<Home/>}></Route>
            <Route path={routerLinks.ABOUT} element={<AboutUs/>}></Route>


        </Routes>
    </div>
}

export default App
