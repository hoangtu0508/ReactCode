import {SET_JOB, ADD_JOB, DELETE_JOB} from './contants'
export const initState = {
    job: '',
    jobs: []
}

const reducer = (state, action) => {

    switch(action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            }

        case ADD_JOB:
            return  {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
        default:
            throw new Error('Error')
    }

}

export default reducer
