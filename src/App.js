import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from "./components/Home/Home";
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import DashBoard from './components/Dashboard/DashBoard';
import AllStudents from './components/AllStudents/AllStudents';


function App() {
  return (
    <div>
       <Navbar></Navbar>
       <Routes>
         <Route path='/' element={<Login></Login>}></Route>
         <Route path='/login' element={<Login></Login>}></Route>
         <Route path='/registration' element={<Registration></Registration>}></Route>
         <Route path='dashboard' element={<DashBoard />}>
          <Route path='allstudents' element={<AllStudents></AllStudents>}></Route>
         </Route>
       </Routes>
       <Footer></Footer>
    </div>
  );
}

export default App;
