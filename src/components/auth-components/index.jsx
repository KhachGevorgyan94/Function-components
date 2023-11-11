import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {authList, routerLinks} from "../../router/router";
import React from "react";

export function AuthComponents() {

    const userData = {
        permissions: ['getHome', 'SetHome', 'getAbout', 'SetAbout', 'DeleteAbout']
    }
    return <div>
        <div className={'side-bar'} style={{backgroundImage:`url('${''}')`}}>
            <ul>
                {authList.length ? authList.map((item, index) => {
                    return userData.permissions.some((x) => item.permissions.includes(x)) &&
                        <li><NavLink key={index} to={item.path}>{item.title}</NavLink></li>
                }) : null}
            </ul>
        </div>
        <div>
            <Routes>
                {authList.length ? authList.map((item, index) => {
                    return userData.permissions.some((x) => item.permissions.includes(x)) &&
                        <Route key={index} path={item.path} element={item.component}/>
                }) : null}
                <Route path={'/*'} element={<Navigate to={routerLinks.HOME}/>}></Route>
            </Routes>
        </div>
    </div>
}