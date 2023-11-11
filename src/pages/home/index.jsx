import {useDispatch, useSelector} from "react-redux";
import {useContext, useEffect} from "react";
import usersSlice, {changeAge, changeName} from "../../store/reducers/usersSlice";
import {UserContext, useUserContext} from "../../context/user-context";

export const Home = () => {

    const firstName = useSelector(state => state.firstName)
    const lastName = useSelector(state => state.usersReducer.lastName)

    const userData = useUserContext()

    const userInfo = useSelector(state=>state.usersSlice.userInfo)
    const dispatch = useDispatch()
    // useEffect(() => {
    //     console.log(firstName)
    // }, []);

    console.log(userData)
    // console.log(lastName)

    const handleCLick = () => {
        dispatch({type: "SET_MY_NAME", payload: 'Gevorgyan'})
        userData.setUserData('Gevorgyan')
    }

    const changeMyName = ()=>{
        dispatch(changeName('Hayk'))
    }

    const changeMyAge = ()=>{
        dispatch(changeAge(35))
    }
    return <div className={'P-info-block'}>
        Home {firstName}
        <br/>
        {lastName ? <p>{lastName}</p> : '-'}
        <br/>
        <p>{userInfo.name}</p>
        <p>{userInfo.age}</p>

        <button onClick={handleCLick}>Click me</button>
        <button onClick={changeMyName}>change name</button>
        <button onClick={changeMyAge}>change age</button>
    </div>
}