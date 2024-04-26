import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './style.css'; // You may need to adjust the CSS file name and path

import Home from './Home';
import Login from './Login';
import Registration from './Registration';
import Contact from './Contact';
import MainHome from '../admin/MainHome';
import AdminLogin from '../admin/AdminLogin';
import AdminHome from '../admin/AdminHome';
import ViewCustomers from '../admin/ViewCustomers';
import Recommend from '../admin/Recommend';

import { FaOpencart } from 'react-icons/fa';

export default function NavBar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/registration">SignUp</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/adminlogin">Admin Login</Link>
          </li>
          <li>
            <Link to="/viewcustomers">View Customers</Link>
          </li>
          <li>
            <Link to="/recommend">Recommend</Link>
          </li>
          <li>
            <Link to="/successfull">Successfull</Link>
          </li>
          <div className="flex items-right text-2xl text-slate-600 relative">
            <FaOpencart />
            <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center"></div>
          </div>
        </ul>
      </nav>

      <Routes>
        {/* User Routes */}
        <Route path="/" element={<Home />} exact />
        <Route path="/registration" element={<Registration />} exact />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} exact />
        {/* Admin Routes */}
        <Route path="/adminlogin" element={<AdminLogin />} exact />
        <Route path="/mainhome" element={<MainHome />} exact />
        <Route path="/adminhome" element={<AdminHome />} exact />
        <Route path="/viewcustomers" element={<ViewCustomers />} exact />
        <Route path="/recommend" element={<Recommend />} exact />
      </Routes>
    </div>
  );
}
