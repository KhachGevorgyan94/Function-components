import {useState} from "react";

export const useCounter = (stepValue) => {
    const [counter, setCounter] = useState(0)

    // console.log(props)
    function incrementCounter() {
        if(stepValue){
            setCounter(counter + stepValue)
        }else{
            setCounter(counter + 1)

        }
    }

    function decrementCounter() {
        setCounter(counter - 1)
    }


    return [counter, incrementCounter, decrementCounter]
}