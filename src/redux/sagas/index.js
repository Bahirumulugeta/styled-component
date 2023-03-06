import { all } from 'redux-saga/effects'
import employeeSaga from './employeeSaga'
import createEmployee from './createEmployee'
import deleteEmployee from './deleteEmployee'
import updateEmployee from './editEmployee'
export default function* rootSaga(){
    yield all([
        employeeSaga(),
        createEmployee(),
        deleteEmployee(),
        updateEmployee()
    ])
}