import { Route, Routes} from 'react-router-dom'
import AllEmployeesPage from './pages/AllEmployees';
import NewEmployeePage from './pages/NewEmployee';
import EditEmployeeInfo from './pages/EditEmployeeInfo'
import Home from './pages/homePages/Home';
import {Footer, Navbar} from './components'
import GlobalStyle from './globalStyles';
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <div>
      <GlobalStyle/>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/all-employees" element={<AllEmployeesPage/>}></Route>
       <Route path="/new-employee" element={ <NewEmployeePage/>}></Route>
       <Route path="/edit/:id" element={ <EditEmployeeInfo/>}></Route>
      </Routes>
      <Footer/> 
    </div>
  );
}

export default App;
