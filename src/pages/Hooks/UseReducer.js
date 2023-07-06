import React, { useReducer } from 'react'
import TodoApp from './TodoApp'
// Init state
const initState = 0

// Actions
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

//Reducer
const reducer = (state, action) => {
    switch (action) {
        case 'up':
            return state + 1
        case 'down':
            return state - 1
        default:
            throw new Error('Error')
    }
}

const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initState)

    return (
        <div>
            <h3>Use Reducer</h3>
            <div>
                <h1>{count}</h1>
                <button onClick={() => dispatch(DOWN_ACTION)}>Giảm</button>
                <button onClick={() => dispatch(UP_ACTION)}>Tăng</button>
            </div>
            <div>
                <h3>To do App with useReducer</h3>
                <TodoApp />
            </div>
        </div>
    )
}

export default UseReducer