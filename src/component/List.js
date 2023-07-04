import React, { useState } from 'react';
import './List.css';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState('');

    const handleAdd = (e) => {
        e.preventDefault();
        if (newTodo) {
            setTodos([...todos, newTodo]);
            setNewTodo('');
        }
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditValue(todos[index]);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        if (editValue) {
            const newTodos = [...todos];
            newTodos[editIndex] = editValue;
            setTodos(newTodos);
            setEditIndex(null);
            setEditValue('');
        }
    };

    const handleDelete = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className='contain'>
            <h1>Todo List</h1>
            <div className='item-right'>
                {todos.map((todo, index) => (
                    <div className='item'>
                        <li key={index}>
                            {editIndex === index ? (
                                <form onSubmit={handleUpdate}>
                                    <input
                                        type="text"
                                        placeholder="Update todo"
                                        value={editValue}
                                        onChange={(e) => setEditValue(e.target.value)}
                                    />
                                    <button type="submit">Update</button>
                                </form>
                            ) : (
                                <>
                                    {todo}
                                    <button onClick={() => handleEdit(index)}>Edit</button>
                                    <button onClick={() => handleDelete(index)}>Delete</button>
                                </>
                            )}
                        </li>
                    </div>
                ))}
            </div>
            <div className='item-left'>
                <form onSubmit={handleAdd}>
                    <input
                        type="text"
                        placeholder="Add todo"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                    />
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
    );
}

export default TodoList;