import React, { useState } from 'react'

const TodoList = () => {
    const [namelist, setNamelist] = useState('');
    const [listTodo, setListTodo] = useState([{ id: 1, value: 'list1' }]);
    const handleOnClickAdd = () => {
        setListTodo([...listTodo, { id: Math.floor((Math.random() * 10) + 1), value: namelist }]);
    }

    const handleDele = (Id) => {
        const updata = listTodo.filter((item => item.id !== Id))
        setListTodo(updata);
    }

    const handleEdit = (Id) => {
        const data = [...listTodo];
        const newData = data.map(item => {
            if (item.id === Id) {
                
            }
        })

        setListTodo(newData);
    }

    return (
        <>
            <h3>To do list</h3>
            <input onChange={(e) => setNamelist(e.target.value)}></input><br />
            <h4>My to do list: {namelist}</h4>
            <button onClick={() => handleOnClickAdd()}>Add</button>
            <h4>List to do</h4>
            {listTodo.map((todo, index) => {
                return (
                    <div>{index + 1}.{todo.value}<button onClick={() => handleEdit(todo.id)}>Edit</button><button onClick={() => handleDele(todo.id)}>Dele</button></div>
                )
            })}
        </>
    )
}

export default TodoList