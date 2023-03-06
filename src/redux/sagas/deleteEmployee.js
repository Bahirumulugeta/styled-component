import { takeLatest,put,call} from 'redux-saga/effects'
import { deleteEmployeeSuccess,deleteEmployeeFaild } from '../actions/employees'

import axios from "axios";

function getApi({id}){
    return  axios.delete(`http://localhost:3002/api/v1/deleteEmployee/${id}`);
}
function* deleteEmp({ payload: { id } }) {
    try{
        const response=yield call(getApi,{id});
        console.log(response.data.message);
        yield put(deleteEmployeeSuccess(response.data.message));
    }
    catch(error){
        // yield put({type:'POST_EMPLOYEE_FAILD'}) 
       yield put(deleteEmployeeFaild("error"));
    }
}
function* deleteEmployee(){
    yield takeLatest('DELETE_EMPLOYEE_REQUESTED',deleteEmp);
}
export default deleteEmployee;