import {Home} from "../pages/home";
import {AboutUs} from "../pages/about-us";

export const routerLinks = {
    HOME: '/',
    ABOUT: '/about',
}

export const authList = [
    {
        path: routerLinks.HOME,
        component: <Home/>,
        permissions: ['getHome', 'SetHome', 'DeleteHome'],
        title: 'Home'
    },
    {
        path: routerLinks.ABOUT,
        component: <AboutUs/>,
        permissions: ['getAbout', 'SetAbout', 'DeleteAbout'],
        title: 'About'
    }
]


