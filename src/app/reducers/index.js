import { combineReducers } from 'redux'
import * as ActionTypes from '../actions'

const department=(state=[], action)=>{
    switch (action.type){
        case ActionTypes.DEPARTMENTS_FETCH_SUCCEEDED:
            return action.departments
        default:
            return state
    }
}

const employee=(state=[], action)=>{
    switch (action.type){
        case ActionTypes.EMPLOYEES_FETCH_SUCCEEDED:
            return action.employees
        default:
            return state
    }
}

const rootReducer = combineReducers({
    department,
    employee
})

export default rootReducer