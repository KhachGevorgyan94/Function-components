import useWindowSize, {useInput} from "../../hook/useWindowSize";
import {useCounter} from "../../hook/useCounter";
import {useEffect, useState} from "react";
import axios from "axios";

export const AboutUs = () => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        getToDoList()
    }, []);

    const getToDoList = async () => {
        setLoading(true)
        const result = await axios.get('https://jsonplaceholder.typicode.com/todos')
        console.log(result)

        if (result.data) {
            setLoading(false)
        }


//       let x =  fetch('https://jsonplaceholder.typicode.com/todos')
//             .then(response => {
//                 console.log(response)
// return                 response.json()
//             })
//             .then(json => console.log(json))
//
//         console.log(x)
//
//         fetch("",{
//             method:"",  // GET, POST, PUT DELETE
//             body:'',
//             headers:{
//                 token:'l;ksdfjglksfdjglksdfjg'
//             }
//         })
    }


    const [counter_1, decrementCounter_1, incrementCounter_1] = useCounter(3)
    const [counter_2, decrementCounter_2, incrementCounter_2] = useCounter()

    return <div>

        {loading ? <p>Loading.....</p> : null}
        <h1>{counter_1}</h1>
        <button onClick={decrementCounter_1}>increment</button>
        <button onClick={incrementCounter_1}>decrement</button>


        <h1>{counter_2}</h1>
        <button onClick={decrementCounter_2}>increment</button>
        <button onClick={incrementCounter_2}>decrement</button>
    </div>
}