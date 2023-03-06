import { useRef } from 'react'
import Card from "../ui/Card";
import classes from './NewEmployeeForm.module.css'
import { useDispatch } from 'react-redux'
import { postEmployeeRequested } from '../../redux/actions/employees'
function NewEmployeeForm(){
    const nameInputRef = useRef();
    const birthDateInputRef = useRef();
    const genderInputRef = useRef();
    const salaryInputRef = useRef();


   const dispatch = useDispatch();
 function submitHandler(event){
   event.preventDefault()
   const enteredName=nameInputRef.current.value;
   const enteredBirthDate=birthDateInputRef.current.value;
   const enteredGender=genderInputRef.current.value;
   const enteredSalary=salaryInputRef.current.value;
 
   const employee = {
       name:enteredName,
       birthDate:enteredBirthDate,
       gender:enteredGender,
       salary:enteredSalary
   };
   console.log(employee)
   // dispatch({type:"POST_EMPLOYEE_REQUESTED",payload:data})
   dispatch(postEmployeeRequested({employee}));

 }   
    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
             <div className={classes.control}>
                <label htmlFor="name">Name</label>
                <input type='text' required id='name' ref={nameInputRef} />
             </div>
             <div className={classes.control}>
                <label htmlFor="birthDate">Date of Birth</label>
                <input type='text' required id='birthDate' ref={birthDateInputRef} />
             </div>
             <div className={classes.control}>
                <label htmlFor="gender">Gender</label>
                <input type='text' required id='gender'  ref={genderInputRef}/>
             </div>
             <div className={classes.control}>
                <label htmlFor="salary">Salary</label>
                <input type='text' required id='salary' ref={salaryInputRef}/>
             </div>
             <div className={classes.actions}>
               <button>Add New Employee</button>
             </div>
            </form>
        </Card>
    );
}
export default NewEmployeeForm;