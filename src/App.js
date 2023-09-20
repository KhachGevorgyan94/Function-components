import './App.css';
import React, {useState} from "react";
import {Modal} from "./components/modal";
import {LoginForm} from "./components/login-form";
import {Header} from "./components/header";

function App() {
    const [isOpen, setIsModal] = useState(false)
    const [isOpenModalLogin, setIsOpenModalLogin] = useState(false)

    return <div>
        <Header/>
        <button onClick={() => setIsModal(true)}>Open modal</button>
        <button onClick={() => setIsOpenModalLogin(true)}>Open modal</button>

        {isOpen ? <Modal
            onClose={() => setIsModal(false)}
            title={'Google map'}>
            <button onClick={() => setIsModal(false)}>Cancle</button>

        </Modal> : null}
        {isOpenModalLogin ? <Modal
            title={'Log in'}>
            <LoginForm onClose={() => setIsOpenModalLogin(false)}/>
        </Modal> : null}
    </div>
}

export default App

