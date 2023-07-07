import React, { useReducer } from 'react'
import reducer, {initState} from './reducer'
import {setJob, addJob} from './actions'
// initState
// actions

//Reducer
// Dispatch

const TodoApp = () => {

    const [state, dispatch] = useReducer(reducer, initState)
    const {job, jobs} = state

    const handleSubmit = () =>{
        dispatch(addJob(job))
    }
    return (
        <div>
            <input 
                value={job}
                onChange={(e) => dispatch(setJob(e.target.value))}
            >
            </input>
            <button onClick={() => handleSubmit()}>Add Todo</button>
            <ul>
                {jobs.map((listjob, index) => (
                    <li key={index}>{listjob}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoApp