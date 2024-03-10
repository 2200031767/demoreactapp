import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Registration from './Registration';
import Contact from './Contact';
import MainHome from '../admin/MainHome'; 
import './style.css'
import '../admin/Product'
import AdminLogin from '../admin/AdminLogin';
import { FaOpencart } from "react-icons/fa";
// import { FaCalendar } from 'react-icons/fa'

export default function MainNavBar() 
{
  return (
    <div>
       
       <nav>
        <ul>
            <Link to="/">Home </Link> &nbsp; &nbsp; &nbsp; &nbsp; 
            <Link to="/registration">SignUp</Link> &nbsp; &nbsp; &nbsp; &nbsp; 
            <Link to="/login">Login</Link> &nbsp; &nbsp; &nbsp; &nbsp; 
            <Link to="/contact">Contact</Link> &nbsp; &nbsp; &nbsp; &nbsp; 
            <Link to="/adminlogin">Admin Login</Link> &nbsp; &nbsp; &nbsp; &nbsp; 
            <div className="flex items-right text-2xl text-slate-600 relative">
     <FaOpencart />
        <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center">
          
        </div>
        </div>
        </ul>
        </nav>


     <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/registration" element={<Registration/>} exact/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/contact" element={<Contact/>} exact/>
        <Route path="/MainHome" element ={<MainHome/>} exact/>
        <Route path="/adminlogin" element ={<AdminLogin/>} exact/>
     </Routes>

     
      

    </div>
  )
}
