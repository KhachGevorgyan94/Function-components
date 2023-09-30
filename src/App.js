import './App.css';
import React, {useEffect, useId, useState} from "react";
import {Counter} from "./components/counter";

function App() {
    const [counter, setCounter] = useState(0)
    let x = useId()
    console.log('11111111111111111111111111111')
    const [hideButton, setHideButton] = useState(false)

    let intervalData = null


    useEffect(() => {
        console.log(x, 'state 1')
        console.log('222222222222222222222222222')
    }, [])

    const handleCounter = () => {
        setCounter(counter + 1)
        console.log(counter, 'counter')
    }


    useEffect(() => {
        console.log(counter, 'counter useEffect')
        console.log('55555555555555555555555')

    }, [counter])

    console.log('3333333333333333333333333333333333')


    useEffect(() => {


        return () => {

        }

    }, []);


    return <div>
        {console.log('44444444444444444444444444')}
        <button onClick={handleCounter}>click me</button>
        <button onClick={()=>setHideButton(!hideButton)}>hide button</button>
        <h1>{counter}</h1>

        {!hideButton ? <Counter/> : null}
    </div>
}

export default App


// class App extends React.Component {
//     componentDidMount() {
//         {console.log('asdfasdfasdfasdf')}
//
//     }
//     componentDidUpdate(prevProps, prevState, snapshot) {
//
//     }
//
//     componentWillUnmount() {
//
//     }
//
//     render() {
//         return <div>ASDFASD  </div>
//     }
// }
//
// export default App