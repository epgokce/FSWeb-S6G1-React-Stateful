import React, { useState } from 'react';

export default function Todos() {
    const [todoList, setTodoList] = useState([]);
    const [inputText, setInputText] = useState("");

    function changeInputText(e) {
        setInputText(e.target.value);
    }

    function addTask() {
        if (inputText.trim() !== "") {
            const task = { id: todoList.length, text: inputText };
            setTodoList([...todoList, task]);
            setInputText("");
        }
    }

    return (
        <div className='widget-todolist container'>
            <h2>Yapılacaklar Listesi</h2>
            <div>
                {todoList.map((task) => (
                    <div className="task" key={task.id}>
                        <p>{task.text}</p>
                    </div>
                ))}
            </div>
            <div>
                <input id="todosInput" type='text' onChange={changeInputText} value={inputText} />
                <button id='todosAddTask' onClick={addTask}>Add Task</button>
            </div>
        </div>
    );
}