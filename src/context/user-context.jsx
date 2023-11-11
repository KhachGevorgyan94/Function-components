import {createContext, useContext, useState} from "react";

const UserContext = createContext({})
export const UserProvider = ({children})=>{
    const [user, setUserData] = useState('ALSKHDGKJhasgdjkhASGDKJhagsdb')
    const [userLoading, setUSerLoading]  = useState(false)
    return <UserContext.Provider value={
        {user, setUserData, userLoading}
    }>
        {children}
    </UserContext.Provider>
}


export const useUserContext = ()=>{
    const testContext = useContext(UserContext)

    return {
        user:testContext.user,
        setUserData:testContext.setUserData,
        userLoading:testContext.userLoading
    }
}