import React,{useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavItem,
    NavMenu,
    NavLinks,
 } from './Navbar.elements'
const Navbar = () => {
    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileView = () =>setClick(false);
    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
        <Nav>
           <NavbarContainer>
               <NavLogo to='/' onClick={closeMobileView}>
                 <NavIcon/>
                 Employee Mgt System
               </NavLogo>
               <MobileIcon onClick={handleClick}>
                   {click ? <FaTimes/>:<FaBars/>}
               </MobileIcon>
               <NavMenu onClick={handleClick} click={click}>
                 <NavItem>
                     <NavLinks to='/'>Home</NavLinks>
                 </NavItem>
                 <NavItem>
                     <NavLinks to='/all-employees'>All Employees</NavLinks>
                 </NavItem>
                 <NavItem>
                     <NavLinks to='/new-employee'>Add Employee</NavLinks>
                 </NavItem>
               </NavMenu>
           </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    )
} 
export default Navbar;