import {Route, Routes} from "react-router-dom";
import {routerLinks} from "../../router/router";
import {Home} from "../../pages/home";
import React, {useState} from "react";
import axios from "axios";
import {createUser, getUsers} from "../../platform/api/users-api";

export const GuestComponents = () => {
    const [loading, setLoading] = useState(false)
    const [regFormData, setRegFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: '',
    })
    const handleChange = (e) => {
        setRegFormData({...regFormData, [e.target.name]: e.target.value})
    }
    const handleChangeLogin = (e) => {
        setLoginFormData({...loginFormData, [e.target.name]: e.target.value})
    }
    const registrUser =  async () => {
        if (!loading && regFormData.email && regFormData.password && regFormData.confirmPassword && regFormData.password === regFormData.confirmPassword) {
            setLoading(true)
            const result = await createUser(regFormData)
            if (result) {
                setRegFormData({
                    email: '',
                    password: '',
                    confirmPassword: ''
                })
                setLoading(false)
            }
        }
    }

    const loginUser = async ()=>{
        const result = await getUsers()
        if(result && result.data.length){
            const user = result.data.find(item=>item.email===loginFormData.email && item.password===loginFormData.password)
            if(user){
                localStorage.setItem('token', user._id)
                window.location.reload()
            }
        }

    }

    return <div>
        <input type="text" value={regFormData.email} onChange={handleChange} name={'email'} placeholder={'email'}/>
        <br/>
        <input type="text" value={regFormData.password} onChange={handleChange} name={'password'} placeholder={'password'}/>
        <br/>
        <input type="text" value={regFormData.confirmPassword} onChange={handleChange} name={'confirmPassword'} placeholder={'confirm password'}/>
        <br/>
        <button onClick={registrUser}>{loading ? 'loading....' : 'Registration'}</button>


        <hr/>

        <input type="text" name={'email'} onChange={handleChangeLogin} value={loginFormData.email} placeholder={'email'}/>
        <input type="text" name={'password'} onChange={handleChangeLogin} value={loginFormData.password} placeholder={'password'}/>
        <button onClick={loginUser}>{loading ? 'loading....' : 'Login'}</button>

    </div>
}