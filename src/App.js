import './App.css';
import React, {useEffect, useState} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import {AuthComponents} from "./components/auth-components";
import {GuestComponents} from "./components/guest-components";
import {useUserContext} from "./context/user-context";

function App() {
    const location = useLocation()
    const [token, setToken] = useState('')
    const userData = useUserContext()

    useEffect(() => {
        let tokenData = localStorage.getItem('token')
        setToken(tokenData)
    }, []);


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname]);


    // window.location.reload()
    if(userData.userLoading){
        return  <p>Loading.........</p>
    }
    return token && userData.user ? <AuthComponents/> : <GuestComponents/>
}

export default App
