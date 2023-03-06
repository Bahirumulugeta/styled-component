import* as type from '../types'
const initialState ={
    employees:[],
    loading:false,
    error:false,
    empName:"",
    deleteEmpName:"",
    editEmp:"",
    errorMsg:"",
}
export default function employees(state=initialState, action){
    switch(action.type){
        case type.GET_EMPLOYEES_REQUESTED:
        case type.POST_EMPLOYEE_REQUESTED:   
        case type.DELETE_EMPLOYEE_REQUESTED:
        case type.UPDATE_EMPLOYEE_REQUESTED: 
            return {
                ...state,
                loading:true,
            }
        case type.GET_EMPLOYEES_SUCCESS:
            return {
                ...state,
                loading:false,
                employees:action.employees,
            }
        case type.SET_EMPLOYEE_EMPTY:
            return {
                  ...state,
                  empName: "",
                  deleteEmpName: "",
                  editEmp: "",
            };
        case type.SET_ERROR_MESSAGE_EMPTY:
            return {
                  ...state,
                  error: false,
                  errorMsg: "",
            };
        case type.SET_EDIT_EMPLOYEE:
            return {
                ...state,
                editEmp: action.payload,
            };
        case type.POST_EMPLOYEE_SUCCESS:
            return {
                ...state,
                loading: false,
                empName: action.payload,
            };
        case type.DELETE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                loading: false,
                deleteEmpName: action.payload,
            };
        case type.UPDATE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                loading: false,
                editEmp: action.payload,
            };
        case type.GET_EMPLOYEES_FAILD:
        case type.POST_EMPLOYEE_FAILD:
        case type.DELETE_EMPLOYEE_FAILD:
        case type.UPDATE_EMPLOYEE_FAILD:
            return {
                ...state,
                loading:false,
                error:true,
                errorMsg:action.payload
            }
        default:
            return state;
    }
}