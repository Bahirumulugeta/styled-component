import { takeLatest,put,call} from 'redux-saga/effects'
import { updateEmployeeSuccess,updateEmployeeFaild } from '../actions/employees'

import axios from "axios";
function getApi({id,employee}){
    return  axios.put(`http://localhost:3002/api/v1/updateEmpInfo/${id}`,employee);
}
function* updateEmp({ payload: { id,employee } }) {
    try{
        const response=yield call(getApi,{id,employee});
        yield put(updateEmployeeSuccess(response.data.message));
    }
    catch(error){
       yield put(updateEmployeeFaild("error"));
    }
}
function* updateEmployee(){
    yield takeLatest('UPDATE_EMPLOYEE_REQUESTED',updateEmp);
}
export default updateEmployee;