import React, { useReducer } from 'react'

// initState
const initState = {
    job: '',
    jobs: []
}
// actions
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE = 'delete_job'

const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}

const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}

//Reducer

const reducer = (state, action) => {
    console.log('action:',action)
    console.log('state:', state)
    switch(action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            }
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
        default:
            throw new Error('Error')
    }

}

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
                onChange={(e) => {
                    dispatch(setJob(e.target.value))
                }}
            >
            </input>
            <button onClick={() => handleSubmit()}>Add Todo</button>
            <ul>
                {jobs.map((job, index) => {
                    <li key={index}>{job}</li>
                })}
            </ul>
        </div>
    )
}

export default TodoApp