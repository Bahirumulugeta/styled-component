import {call,put,takeLatest} from 'redux-saga/effects'
import { getEmployeesSuccess, getEmployeesFaild} from '../actions/employees'
import axios from "axios";

function getApi(){
    return  axios.get('http://localhost:3002/api/v1/getEmployee');
}
function* fetchEmployees(action){
    try{
     const employees = yield call(getApi);
     yield put(getEmployeesSuccess(employees.data));
     
    }catch(error){
     yield put(getEmployeesFaild(error.employees.data));
    }
}
function* employeeSaga(){
    yield takeLatest('GET_EMPLOYEES_REQUESTED',fetchEmployees);
}
export default employeeSaga;
