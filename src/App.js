import './App.css';
import React, {useEffect} from "react";
import {Navigate, NavLink, Route, Routes, useLocation} from "react-router-dom";
import {routerLinks} from "./router/router";
import {Home} from "./pages/home";
import {Contact} from "./pages/contact";
import {About} from "./pages/about";
import {ErrorNotFound} from "./pages/error";
import {BoxDetails} from "./pages/box-details";

function App() {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname]);

    return <div>
        <header>
            <ul>
                <li>
                    <NavLink to={routerLinks.HOME}
                             className={({isActive, isPending}) => isActive ? "active" : ""}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={routerLinks.ABOUT}
                             className={({isActive, isPending}) => isActive ? "active" : ""}>About</NavLink>
                </li>
                <li>
                    <NavLink to={routerLinks.CONTACT}
                             className={({isActive, isPending}) => isActive ? "active" : ""}>Contact</NavLink>
                </li>
            </ul>
        </header>

        <Routes>
            <Route path={routerLinks.HOME} element={<Home/>}></Route>
            <Route path={routerLinks.CONTACT} element={<Contact/>}/>
            <Route path={routerLinks.ABOUT} element={<About/>}/>
            <Route path={routerLinks.BOX_DETAILS} element={<BoxDetails/>}/>
            <Route path={routerLinks.ERROR} element={<ErrorNotFound/>}/>


            <Route path={'/*'} element={<Navigate to={routerLinks.ERROR}/>}></Route>
        </Routes>
        {/*<LocalStorageTest/>*/}

    </div>
}

export default App
