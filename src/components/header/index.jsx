import {useState} from "react";

import './style.scss'

export const Header = () => {

    const [isOpenMenu, setIsOpenMenu] = useState(false)
    return <header className="menuHeader">
        logo
        <nav className='navBar'>
            <ul className={`list ${isOpenMenu ? 'open-menu' : ''}`}>
                <li><a className='link' href='/'>Home</a></li>
                <li><a className='link' href='/'>About</a></li>
                <li><a className='link' href='/'>Contact Us</a></li>
            </ul>
            <div className={`modal-bg menu-bg ${isOpenMenu?'show-bg':''}`} onClick={()=>setIsOpenMenu(false)}></div>
            <button onClick={() => setIsOpenMenu(!isOpenMenu)}
                    className={`menuIcon ${isOpenMenu ? 'open-burger' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    </header>
}