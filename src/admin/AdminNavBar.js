import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './admin.css';

import AdminHome from './AdminHome';
import ViewCustomers from './ViewCustomers';
import Recommend from './Recommend';
import Iphone13 from './Iphone13';

export default function AdminNavBar() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/viewcustomers">View Customers</Link></li>
          <li><Link to="/recommend">Recommend</Link></li>
          <li><Link to="/iphone13">Iphone13</Link></li>
          
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<AdminHome />} />
        <Route path="/viewcustomers" element={<ViewCustomers />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/iphone13" element={<Iphone13 />} />
      </Routes>
    </div>
  );
}
