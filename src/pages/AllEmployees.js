import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect } from 'react';
import { getEmployeesRequested } from '../redux/actions/employees'

import EmployeeList from "../components/employees/EmployeeList";
function AllEmployees(){
  const dispatch=useDispatch();
  const employees= useSelector((state)=> state.employees.employees);
  const loading = useSelector((state)=>state.employees.loading);
  const error = useSelector((state)=>state.employees.error);
  useEffect(()=>{
    dispatch(getEmployeesRequested());
  },[]);
    return (
        <section>
          {employees.loading && <p>loading...</p>}
          {employees.length>0 && <EmployeeList meetups={employees} />}
          {employees.length===0 && !loading && !error && <p>No employees available</p>}
          {error && !loading && <p>{error}</p>}          
        </section>
    );
}
export default AllEmployees;