import { call, put, takeLatest } from 'redux-saga/effects'

import * as ActionTypes from './actions';
import {Api} from './api'

export function* fetchDepartments(action){
    try {
        const departments = yield call(Api.fetchDepartments);
        yield put({type: ActionTypes.DEPARTMENTS_FETCH_SUCCEEDED, departments});
    } catch (error) {
        yield put({type: ActionTypes.DEPARTMENTS_FETCH_FAILED, error});
    }
}

export function* fetchEmployees(action){
    try {
        const employees = yield call(Api.fetchEmployees);
        yield put({type: ActionTypes.EMPLOYEES_FETCH_SUCCEEDED, employees: employees});
    } catch (error) {
        yield put({type: ActionTypes.EMPLOYEES_FETCH_FAILED, error});
    }
}


export function* updateDepartment(action){
    try {
        const department = yield call(Api.updateDepartment, action.item);
        yield put({type: ActionTypes.DEPARTMENT_UPDATE_SUCCEEDED, department: department});
    } catch (error) {
        yield put({type: ActionTypes.DEPARTMENT_UPDATE_FAILED, error});
    }
}

export function* updateEmployee(action){
    try {
        const department = yield call(Api.updateEmployee, action.item);
        yield put({type: ActionTypes.EMPLOYEE_UPDATE_SUCCEEDED, department: department});
    } catch (error) {
        yield put({type: ActionTypes.EMPLOYEE_UPDATE_FAILED, error});
    }
}


function* rootSaga() {
    yield takeLatest(ActionTypes.DEPARTMENTS_FETCH_REQUESTED, fetchDepartments);
    yield takeLatest(ActionTypes.EMPLOYEES_FETCH_REQUESTED, fetchEmployees);
    yield takeLatest(ActionTypes.DEPARTMENT_UPDATE_REQUESTED, updateDepartment);
    yield takeLatest(ActionTypes.EMPLOYEE_UPDATE_REQUESTED, updateEmployee);
}

export default rootSaga;
