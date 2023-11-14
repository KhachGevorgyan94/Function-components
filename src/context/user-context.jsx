import {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";
import {getUserData, getUsers} from "../platform/api/users-api";

const UserContext = createContext({})
export const UserProvider = ({children}) => {
    const [user, setUserData] = useState(null)
    const [userLoading, setUSerLoading] = useState(false)

    useEffect(() => {
        getUserData()
    }, []);

    const getUserData = async () => {
        const token = localStorage.getItem('token')

      if(token){
          setUSerLoading(true)
          const result = await getUsers()
          if (result && result.data) {
              const user = result.data.find(item => item._id === token)
              if (user) {
                  setUSerLoading(false)
                  setUserData(user)
              }
          }else{
              setUSerLoading(false)
          }
      }
    }

    return <UserContext.Provider value={
        {user, setUserData, userLoading}
    }>
        {children}
    </UserContext.Provider>
}


export const useUserContext = () => {
    const testContext = useContext(UserContext)

    return {
        user: testContext.user,
        setUserData: testContext.setUserData,
        userLoading: testContext.userLoading
    }
}