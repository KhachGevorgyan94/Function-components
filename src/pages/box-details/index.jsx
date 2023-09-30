import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export const BoxDetails = () => {
    const params = useParams()
    const [currentId, setCurrentId] = useState('')

    useEffect(() => {
        console.log(params)
        if (params.id) {
            setCurrentId(params.id)
        }
    }, []);

    function getDetailsInfo() {

    }

    return <div>
        box details {currentId}
    </div>
}