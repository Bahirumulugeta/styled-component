import EmployeeItem from './EmployeeItem';
import classes from './EmployeeList.module.css'
function EmployeeList(props){
    return (
        <ul className={classes.list}>
         {props.meetups.map(meetup=><EmployeeItem 
         key={meetup._id}
         _id={meetup._id}
         name={meetup.name}
         birthDate={meetup.birthDate}
         gender={meetup.gender}
         salary={meetup.salary}
         />)}
        </ul>
    );
}
export default EmployeeList;