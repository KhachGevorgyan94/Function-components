import {useParams, useNavigation, useNavigate} from "react-router-dom";
import {routerLinks} from "../../router/router";

export const Home = () => {

    const navigate = useNavigate()
    const params = useParams()
    function handleClick() {
        // navigate(routerLinks.ABOUT)
        console.log(params)
    }

    return <div>
        <h1>Home page</h1>
        <button onClick={handleClick}>click</button>
    </div>
}