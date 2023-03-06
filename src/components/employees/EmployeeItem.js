import Card from '../ui/Card';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import classes from './EmployeeItem.module.css'
import { deleteEmployeeRequested } from '../../redux/actions/employees'

function EmployeeItem(props){
  const employees= useSelector((state)=> state.employees.employees);

  const dispatch=useDispatch();
  const deleteEmployee = (id)=>{
   dispatch(deleteEmployeeRequested({id}))
  }
    return (
      <li className={classes.item}>
        <Card>
        <div className={classes.content}>
            <h3>{props.name}</h3>
            <p>{props.birthDate}</p>
            <p>{props.gender}</p>
            <p>{props.salary}</p>
        </div>
        <div className={classes.actions}>
            <button><Link to={`/edit/${props._id}`}>Update</Link></button>
        </div>
        <div className={classes.actions}>
            <button onClick={()=>deleteEmployee(props._id)}>Delete</button>
        </div>
        </Card>
      </li>
    );
}
export default EmployeeItem;