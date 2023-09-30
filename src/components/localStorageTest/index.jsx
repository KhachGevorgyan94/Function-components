import {useEffect, useState} from "react";
import {Logger} from "sass";

export const LocalStorageTest = () => {
    const [inputValue, setInputValue] = useState('')
    const [todoList, setTodoList] = useState([])

    useEffect(() => {
        const list = JSON.parse(localStorage.getItem('todoList'))
        if (list) {
            setTodoList(list)
        }
    }, []);

    function handleChange(e) {
        setInputValue(e.target.value)
    }

    function addList() {
        setTodoList([...todoList, inputValue])
    }

    function onSave() {
        // localStorage
        // sessionStorage
        // console.log( localStorage.getItem('todoList'))
        // localStorage.setItem('todoList',JSON.stringify({name:'khachik'}))
        // console.log(JSON.parse(localStorage.getItem('todoList')))
        // JSON.stringify()
        // JSON.parse()
        // localStorage.setItem()
        // localStorage.removeItem()

        localStorage.setItem('todoList', JSON.stringify(todoList))
    }

    return <div>
        <div>
            <label>
                <input type="text" value={inputValue} onChange={handleChange}/>
                <button onClick={addList}>Add</button>
                <button onClick={onSave}>Save</button>
            </label>
        </div>
        <div>
            <ul>
                {todoList.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </div>
    </div>
}


// function foo(){
//     return
// }
//
//
// const x = ()=> {
//     return
// }