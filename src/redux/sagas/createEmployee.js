import { takeLatest,put,call} from 'redux-saga/effects'
import { postEmployeeSuccess,postEmployeeFaild } from '../actions/employees'

import axios from "axios";

function getApi({employee}){
    return  axios.post('http://localhost:3002/api/v1/addEmployee',employee);
}
function* createEmp({ payload: { employee } }) {
    try{

        const newEmployee=yield call(getApi,{employee});
        yield put(postEmployeeSuccess(newEmployee.data.employee.name));
    }
    catch(error){
        // yield put({type:'POST_EMPLOYEE_FAILD'})
       yield put(postEmployeeFaild("error"));
    }
}
function* createEmployee(){
    yield takeLatest('POST_EMPLOYEE_REQUESTED',createEmp);
}
export default createEmployee;