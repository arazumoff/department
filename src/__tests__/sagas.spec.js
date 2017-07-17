import { cloneableGenerator } from 'redux-saga/utils';
import { takeLatest, fork, put } from 'redux-saga/effects';

import rootSaga, {fetchDepartments, fetchEmployees, updateDepartment} from "../app/sagas";
import * as ActionTypes from "../app/actions/index";


describe('Test sagas', ()=>{

    it('root saga test', () => {
        const gen = cloneableGenerator(rootSaga)();
        let c;
        c = fork(takeLatest, ActionTypes.DEPARTMENTS_FETCH_REQUESTED, fetchDepartments);
        expect(JSON.stringify(gen.next().value))
            .toEqual(JSON.stringify(c));

        c = fork(takeLatest, ActionTypes.EMPLOYEES_FETCH_REQUESTED, fetchEmployees);
        expect(JSON.stringify(gen.next().value))
            .toEqual(JSON.stringify(c));

        c = fork(takeLatest, ActionTypes.DEPARTMENT_UPDATE_REQUESTED, updateDepartment);
        expect(JSON.stringify(gen.next().value))
            .toEqual(JSON.stringify(c));
    });

    it('fetch success departments', ()=>{
        const departments = [
            {id:1, name:'test1'},
            {id:2, name:'test2'}]
        const gen = fetchDepartments({});
        gen.next();
        expect(JSON.stringify(gen.next(departments).value))
            .toEqual(JSON.stringify(put({type: ActionTypes.DEPARTMENTS_FETCH_SUCCEEDED, departments})));
    });

    it('fetch error departments', ()=>{
        const gen = fetchDepartments({});
        gen.next();

        const error = new Error('network error');
        expect(JSON.stringify(gen.throw(error).value))
            .toEqual(JSON.stringify(put({type: ActionTypes.DEPARTMENTS_FETCH_FAILED, error})));
    });

    it('fetch success employees', ()=>{
        const employees = [
            {id:1, firstName:'test1', lastName: "first"},
            {id:2, firstName:'test2', lastName: "second"}]
        const gen = fetchEmployees({});
        gen.next();
        expect(JSON.stringify(gen.next(employees).value))
            .toEqual(JSON.stringify(put({type: ActionTypes.EMPLOYEES_FETCH_SUCCEEDED, employees})));
    });

    it('fetch error employees', ()=>{
        const gen = fetchEmployees({});
        gen.next();

        const error = new Error('network error');
        expect(JSON.stringify(gen.throw(error).value))
            .toEqual(JSON.stringify(put({type: ActionTypes.EMPLOYEES_FETCH_FAILED, error})));
    });
})
