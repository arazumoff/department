import rootReducer from "../app/reducers/index";
import {DEPARTMENTS_FETCH_SUCCEEDED, EMPLOYEES_FETCH_SUCCEEDED} from "../app/actions/index";

describe('Test reducers', () => {
    const base = {department:[], employee:[]};

    test('test department', () => {
        const departments = [{id:1, name:'test'}];
        expect(rootReducer({}, {type: DEPARTMENTS_FETCH_SUCCEEDED, departments: departments}))
            .toEqual(Object.assign({}, base, {'department': departments}))
    })

    test('test employee', () => {
        const employees = [{id:1, firtsName:'first name test', lastName: 'last name test'}];
        expect(rootReducer({}, {type: EMPLOYEES_FETCH_SUCCEEDED, employees: employees}))
            .toEqual(Object.assign({}, base, {'employee': employees}))
    })
})
