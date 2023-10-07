import useWindowSize, {useInput} from "../../hook/useWindowSize";
import {useCounter} from "../../hook/useCounter";
import {useEffect, useRef, useState} from "react";
import {Slider, SliderCustom} from "../../components/slider";

export const Home = () => {

    const {counter, decrementCounter, incrementCounter} = useCounter()
    // const  = useRef();

    const infoRef = useRef(null)

    const [showInfo, setShowInfo] = useState(false)


    const handleChange = () => {
        setShowInfo(!showInfo)
        console.log(infoRef)
        if (infoRef.current) {
            console.log(infoRef.current.getBoundingClientRect())
        }
    }
    return <div className={'P-info-block'}>
        <SliderCustom />
        {/*<SliderCustom customSettings={{slidesToShow:1}} />*/}
        {/*<h1>{counter}</h1>*/}
        {/*<button onClick={incrementCounter}>increment</button>*/}
        {/*<button onClick={decrementCounter}>decrement</button>*/}
        {/*<button onClick={handleChange}>click me</button>*/}
        {/*{showInfo ?*/}
        {/*    <p ref={infoRef}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto asperiores*/}
        {/*        aspernatur autem*/}
        {/*        beatae*/}
        {/*        commodi deserunt dicta dignissimos dolores doloribus eius fugiat, ipsa natus nostrum odio optio*/}
        {/*        perspiciatis*/}
        {/*        quasi, sit.</p> :*/}
        {/*    null  }*/}

    </div>
}