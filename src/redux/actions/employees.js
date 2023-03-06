import * as type from '../types'
export const getEmployeesRequested = () => ({
    type: type.GET_EMPLOYEES_REQUESTED,
  });
  
  export const getEmployeesSuccess = (emp) => ({
    type: type.GET_EMPLOYEES_SUCCESS,
    employees: emp,
  });
  
  export const getEmployeesFaild = (errorMsg) => ({
    type: type.GET_EMPLOYEES_FAILD,
    error: errorMsg,
  });
  
  export const postEmployeeRequested= (employee) => ({
    type: type.POST_EMPLOYEE_REQUESTED,
    payload: employee,
  });
  
  export const postEmployeeSuccess = (em) => ({
    type: type.POST_EMPLOYEE_SUCCESS,
    payload: em,
  });
   
  export const postEmployeeFaild = (errorMsg) => ({
    type: type.POST_EMPLOYEE_FAILD,
    payload: errorMsg,
  });
  
  export const deleteEmployeeRequested = (empDetail) => ({
    type: type.DELETE_EMPLOYEE_REQUESTED,
    payload: empDetail,
  });

  export const deleteEmployeeSuccess = (empD) => ({
    type: type.DELETE_EMPLOYEE_SUCCESS,
    payload: empD,
  });
  
  export const deleteEmployeeFaild = (errorMsg) => ({
    type: type.DELETE_EMPLOYEE_FAILD,
    payload: errorMsg,
  });
  export const updateEmployeeRequested = (empDetail) => ({
  type: type.UPDATE_EMPLOYEE_REQUESTED,
  payload: empDetail,
});
export const updateEmployeeSuccess = (emp) => ({
  type: type.UPDATE_EMPLOYEE_SUCCESS,
  payload: emp,
});
export const updateEmployeeFaild = (errorMsg) => ({
  type: type.UPDATE_EMPLOYEE_FAILD,
  payload: errorMsg,
});

// export const setEmployeeEmpty = () => ({
//   type: type.SET_EMPLOYEE_EMPTY,
// });
// export const setErrorMessageEmpty = () => ({
//   type: type.SET_ERROR_MESSAGE_EMPTY,
// });
// export const setEditEmployee = (emp) => ({
//   type: type.SET_EDIT_EMPLOYEE,
//   payload: emp,
// });