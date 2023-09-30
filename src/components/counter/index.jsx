import {useEffect, useState} from "react";

export const Counter = () => {
    const [counter, setCounter] = useState(0)
    let counterInterval = null
    useEffect(() => {
        // counterInterval = setInterval(() => {
        //     setCounter(counter + 1)
        //     console.log(counter)
        // }, 1000)
    }, [counter]);

    // useEffect(() => {
    //     console.log(counter)
    // }, [counter])


    // useEffect(() => {
    //     return ()=>{
    //         clearInterval(counterInterval)
    //     }
    // }, []);

    // console.log(counter,'aaaaaaaaaaaaaaaaaaa')

    return <div style={{padding: '30px'}}>{counter}</div>
}