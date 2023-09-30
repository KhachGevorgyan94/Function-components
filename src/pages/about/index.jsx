import {Link} from "react-router-dom";
import {routerLinks} from "../../router/router";

export const About = () => {
    const boxList = [{
        name: 'box 1',
        id: 'id1'
    },
        {
            name: 'box 2',
            id: 'id2'
        },
        {
            name: 'box 3',
            id: 'id3'
        },
        {
            name: 'box 4',
            id: 'id4'
        },
    ]

    return <div>
        <h1>About page</h1>

        <div>
            {boxList.map((item, index) => {
                return <Link to={routerLinks.BOX_DETAILS.replace(':id', item.id)}>
                    <div className='box'>
                        <h3>{item.name}</h3>
                        <p>{item.id}</p>
                    </div>
                </Link>
            })}
        </div>
    </div>
}