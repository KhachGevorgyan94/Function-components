import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

export const Home = () => {

    const firstName = useSelector(state => state.firstName)
    const lastName = useSelector(state => state.lastName)
    const dispatch = useDispatch()
    useEffect(() => {
        console.log(firstName)
    }, []);


    const handleCLick = () => {
        dispatch({type: "SET_MY_NAME", payload: 'Gevorgyan'})
    }


    return <div className={'P-info-block'}>
        Home {firstName}
        <br/>
        {lastName ? <p>{lastName}</p> : '-'}
        <br/>

        <button onClick={handleCLick}>Click me</button>
    </div>
}